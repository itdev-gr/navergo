# Navergo Vercel Smoke-Test Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix every responsive / SPA / startup-flicker defect found while smoke-testing the live Vercel deployment at https://navergo.vercel.app/.

**Architecture:** Three classes of fix — (1) one Vercel rewrite to make all SPA routes resolve, (2) a CSS-only inline splash screen in `index.html` to cover the React-mount delay, (3) a small `src/index.css` block that constrains overflowing mobile images, hides the empty header-right pillar on mobile, and tightens the hero text wrap. No source-of-truth file restructuring; the vendored template CSS stays untouched.

**Tech Stack:** Vite + React + react-router-dom + the existing Constr template plugin layer (jQuery, Swiper, GSAP, AOS, lightGallery, Masonry).

---

## Findings — what the smoke test actually showed

The numbers below are the raw observations the fixes are reacting to. Every claim was verified live against https://navergo.vercel.app/ on 2026-05-21 with Playwright.

1. **SPA deep links 404 on Vercel.** `GET /about`, `/contact`, `/service`, `/projects` etc. each return Vercel's `404: NOT_FOUND` page on direct navigation or hard refresh. React Router only takes over once `index.html` is served — but without a rewrite rule Vercel never serves `index.html` for those paths. In-app navigation (clicking a `<Link>`) works because that's client-side only.

2. **Flicker on initial paint.** Performance entries: `domContentLoaded = 405.8 ms`, `first-contentful-paint = 632 ms`. That ~230 ms gap is a blank-white viewport while: (a) the 9 plugin `<script>` tags in the body (jQuery, Swiper, GSAP, ScrollTrigger, SplitText, ScrollToPlugin, Masonry, lightGallery, AOS) execute as render-blocking sync scripts, then (b) the `<script type="module">` React entry is deferred and only runs after them, then (c) React mounts and the layout finally paints. The original static template covered this with an in-DOM preloader (`#constr-preloader`) — we deleted it when porting. Nothing replaces it.

3. **Mobile (375 px): images overflow their parent.** `.the-animated-image` renders at intrinsic width 420 px inside a 375 px viewport (used by the homepage "Company Journey" / steelwork image and the contact-section image). Some `<h3 class="cs-uppercase">` ae-title backdrop text also overflows by ~98 px. No `max-width: 100%` is applied because the vendored template assumes images fit columns ≥ 460 px.

4. **Mobile (375 px): red right-edge sliver.** `.cs_main_header_right.themecolor-bg` has its content (toolbox + contact info) collapsed to width 0 on small viewports but its red `themecolor-bg` background is still painted at `x:370, height:100` — a 5-px-wide red pillar bleeds at the very right edge of the header strip.

5. **No body horizontal scroll** at 1440 / 1280 / 768 / 375. The overflows from `.swiper-wrapper`, `.cs_text-moving` marquee, and `.cs_side_header` (off-screen, opacity 0) are intentional and contained by their parents' `overflow: hidden`. No fix required.

6. **Hero swiper, mobile menu, breadcrumb navbar all work correctly.** Swiper initialises, the hamburger opens the offcanvas menu, the header is pinned at `top: 0` on inner pages thanks to the earlier `src/index.css` override.

This plan addresses items 1–4 only. Items 5–6 are confirmation that earlier work held up.

---

## File structure

Files this plan touches:

- **CREATE** `navergo-react/vercel.json` — single rewrite rule so every path serves `index.html` (fixes #1).
- **MODIFY** `navergo-react/index.html` — add an inline-styled splash screen inside `<div id="root">` that React will overwrite on mount (fixes #2).
- **MODIFY** `navergo-react/src/index.css` — append a small "smoke-test fixes" block at the bottom: image-max-width on overflowing elements, mobile-only display-none for the empty `.cs_main_header_right` pillar, and a backstop `overflow-x: hidden` on `html, body` (fixes #3 & #4, plus belt-and-braces against future overflow regressions).

Nothing else is touched. No new components, no JSX edits to pages, no changes to the vendored `public/assets/css/style.css`.

---

## Task 1: SPA fallback on Vercel

**Files:**
- Create: `navergo-react/vercel.json`

- [ ] **Step 1: Create `vercel.json` with the catch-all rewrite**

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

This tells Vercel: for any request that doesn't match a real static file in the build output (which is checked first), serve `index.html` so React Router can resolve the route client-side. Assets under `/assets/*` continue to serve directly because the static-file lookup wins.

- [ ] **Step 2: Commit**

```bash
cd navergo-react
git add vercel.json
git commit -m "fix(vercel): add SPA rewrite so deep links resolve via React Router"
```

- [ ] **Step 3: Push and wait for the Vercel preview/production deploy to finish**

```bash
git push
```

Vercel will auto-deploy on push.

- [ ] **Step 4: Verify each route returns 200 with the real page title (not "404: NOT_FOUND")**

Run this from any shell once Vercel reports the deploy as Ready:

```bash
for path in / /about /service /service-details /projects /project-details /team /team-details /contact /faq /gallery /coming /404; do
  status=$(/usr/bin/curl -s -o /dev/null -w "%{http_code}" "https://navergo.vercel.app$path")
  title=$(/usr/bin/curl -s "https://navergo.vercel.app$path" | /usr/bin/grep -o '<title>[^<]*</title>' | head -1)
  echo "$status  $path  $title"
done
```

Expected for every line: `200  /<route>  <title>Constr - Construction & Building</title>`.
Fail criteria: any `404` or `Vercel` in the title means the rewrite didn't take effect — re-check the JSON syntax and the deploy log.

---

## Task 2: Eliminate the load flicker with an inline splash

**Files:**
- Modify: `navergo-react/index.html:9-12` (the `<div id="root"></div>` and its neighbourhood)

The idea: put markup directly inside `#root` that is styled entirely with inline CSS (no external stylesheet dependency, so it paints with the very first frame). When React's `createRoot(...).render(<App />)` runs, React replaces the children of `#root` with the real app — the splash disappears automatically. No JS coordination needed.

- [ ] **Step 1: Replace the empty `<div id="root"></div>` with the splash variant**

Open `navergo-react/index.html`. Find:

```html
    <div id="root"></div>
```

Replace with:

```html
    <div id="root">
      <div style="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:#0a0c2e;z-index:9999;">
        <div style="display:flex;flex-direction:column;align-items:center;gap:24px;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;">
          <div style="color:#fff;font-size:36px;font-weight:800;letter-spacing:3px;">NAVERGO</div>
          <div style="width:46px;height:46px;border:3px solid rgba(255,255,255,0.18);border-top-color:#7c1d1f;border-radius:50%;animation:navergo-spin 0.9s linear infinite;"></div>
        </div>
      </div>
      <style>@keyframes navergo-spin{to{transform:rotate(360deg);}}</style>
    </div>
```

Why this design:
- Inline styles → no external CSS required → paints on the first browser frame.
- `position: fixed; inset: 0; z-index: 9999;` covers everything including the still-loading Bootstrap/Swiper/style.css layers that flash through during their slow download.
- Brand-coloured spinner (the same `#7c1d1f` used in the nav logo and footer) instead of a generic Vite indicator.
- When React mounts, `createRoot(...).render(<App />)` re-renders the children of `#root`. The splash is wiped out by that re-render — no transition, no manual removal.

- [ ] **Step 2: Build locally and visually confirm the splash shows during a slow network**

```bash
cd navergo-react
npm run build
npm run preview
```

Open the printed URL in Chrome with DevTools → Network throttling set to "Slow 4G", then hard-refresh. You should see the navy-blue splash with the spinner for ~600 ms before the real page paints over it. Without the throttle, on local preview, it'll flash by too fast to perceive — that's fine; the production deploy is where it matters.

- [ ] **Step 3: Confirm no leftover splash in the steady-state DOM**

In the same DevTools session, after the page settles, run in Console:

```js
document.querySelector('#root > div[style*="position:fixed"]')
```

Expected: `null` — React has fully taken over `#root`. If anything truthy comes back, the splash didn't get unmounted; re-check that the splash markup is INSIDE `<div id="root">`, not as a sibling.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "fix(boot): inline splash inside #root to hide first-paint flicker"
```

- [ ] **Step 5: Push, wait for deploy, sanity-check production**

```bash
git push
```

Once Vercel reports Ready, hard-refresh https://navergo.vercel.app/ — the dark splash should briefly appear, then the homepage. Use DevTools Performance recording to confirm `first-contentful-paint` is now visually "branded" (dark navy + NAVERGO) rather than white-then-content.

---

## Task 3: Mobile overflow & right-edge red sliver fixes

**Files:**
- Modify: `navergo-react/src/index.css` (append at end)

- [ ] **Step 1: Append the new rule block**

Open `navergo-react/src/index.css` and add at the bottom (do not modify the existing rules):

```css
/* --- Smoke-test fixes 2026-05-21 ---------------------------------------- */

/* Belt-and-braces: prevent any future child overflow from triggering body
   horizontal scroll on mobile. The page's own layout is already overflow-safe
   in our tests, but a single careless image insert later would regress that. */
html, body {
  overflow-x: hidden;
}

/* Vendored template never sets max-width on its <img>s because it assumed
   columns wider than mobile. Force every image to respect its container — the
   "Company Journey" and "Contact" sections were overflowing by ~45 px at 375. */
img {
  max-width: 100%;
  height: auto;
}

/* The right-side header pillar (cs_main_header_right) holds the toolbox +
   contact info. On mobile the template hides its children, but the parent's
   themecolor-bg keeps painting a ~5 px red sliver at the right edge of the
   header strip. Hide the empty pillar on phones — the hamburger toggle is
   already exposed on the opposite side via cs_munu_toggle. */
@media (max-width: 575.98px) {
  .cs_main_header_right {
    display: none;
  }
}

/* AE-title backdrop text overflows on phones (it's intentionally larger than
   the column on desktop for the visual effect, but on a 375 viewport it
   pushes a horizontal scroll). Clip to viewport and shrink the font so the
   pattern still reads but stays inside the column. */
@media (max-width: 575.98px) {
  .ae-title,
  .ae-title h2,
  .ae-title h3 {
    max-width: 100%;
    overflow: hidden;
    word-break: break-word;
  }
  .ae-title h2 { font-size: 56px; }
  .ae-title h3 { font-size: 34px; }
}
```

- [ ] **Step 2: Run the dev server and sanity-check at 375 px**

```bash
cd navergo-react
npm run dev
```

Open the local URL in Chrome, switch DevTools device toolbar to "iPhone SE" (375×667), navigate through `/`, `/about`, `/service`, `/contact`. For each route, in Console:

```js
({
  bodyScrollWidth: document.body.scrollWidth,
  viewportWidth: window.innerWidth,
  redPillar: !!document.querySelector('.cs_main_header_right')?.offsetParent,
  imageOverflows: [...document.querySelectorAll('img')]
    .filter(i => i.getBoundingClientRect().right > window.innerWidth + 2)
    .map(i => ({ src: i.src, w: i.getBoundingClientRect().width })),
})
```

Expected on each route:
- `bodyScrollWidth === viewportWidth` (375).
- `redPillar === false` (the empty header pillar is hidden by `display: none`).
- `imageOverflows` is an empty array.

If any image still overflows, identify which class it sits in and add a targeted `max-width: 100%` rule for that specific selector — `img { max-width: 100% }` should catch them all, but some templates put `width` attributes inline.

- [ ] **Step 3: Commit**

```bash
git add src/index.css
git commit -m "fix(mobile): cap image widths, hide empty header pillar, contain ae-title"
```

- [ ] **Step 4: Push, wait for deploy, re-verify on production**

```bash
git push
```

Once Vercel deploys, repeat Step 2's Console check against https://navergo.vercel.app/ with the same DevTools device emulation. All three assertions must hold on production.

---

## Verification — end-to-end

Run all of the following after every task is committed and the final push has deployed. Each must pass.

- [ ] **Deep-link 200s** — Task 1, Step 4 curl script outputs all 200s with template titles.

- [ ] **Splash visibility** — Throttled "Slow 4G" hard refresh of https://navergo.vercel.app/ shows the navy-blue NAVERGO splash for ~0.5–1 s before the homepage paints.

- [ ] **Splash unmounts** — After page settles, `document.querySelector('#root > div[style*="position:fixed"]')` in the console returns `null`.

- [ ] **No mobile horizontal scroll** — At 375 px DevTools emulation on `/`, `/about`, `/service`, `/contact`: `document.body.scrollWidth === 375`.

- [ ] **No red sliver** — Same routes at 375 px: visually inspect the header strip — no thin red vertical bar at the right edge.

- [ ] **No image overflow** — Same routes at 375 px: `[...document.querySelectorAll('img')].filter(i => i.getBoundingClientRect().right > 377)` returns `[]`.

- [ ] **No regressions on desktop** — At 1440 px on `/` and `/about`: hero swiper still animates, sticky header still pins at top, GSAP `ae-title h2` still animates in, console errors = 0.

- [ ] **Build still passes** — `npm run build` exits 0 with no JSX or CSS errors.
