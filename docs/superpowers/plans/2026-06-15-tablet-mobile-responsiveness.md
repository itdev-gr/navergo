# Tablet & Mobile Responsiveness Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Eliminate the horizontal-overflow and hidden-content responsiveness bugs on the Navergo site at tablet (≤991px, tested at 768px) and mobile (≤575px, tested at 390px) widths, verified with a measured browser audit on every route.

**Architecture:** The site is a Vite + React SPA using a vendored Thememarch template stylesheet (`public/assets/css/style.css`, do **not** edit — it is the upstream template) plus a project override layer (`src/index.css`). All fixes go in `src/index.css` (CSS) and `src/lib/template.js` (the AOS init), following the existing override pattern already present in `src/index.css` (it already has `@media (max-width: 575.98px)` fix blocks). Each fix is gated behind a browser-measured "test": a snippet run via the Playwright MCP browser against the running dev server that reports horizontal overflow and undersized tap targets per page.

**Tech Stack:** React 19, Vite 8, react-i18next, vendored Bootstrap grid + AOS (animate-on-scroll) + Swiper, CSS custom-property design tokens.

---

## Audit Findings (measured 2026-06-15, dev server at http://localhost:5174)

Mobile = viewport 390px (CSS width 385 after scrollbar). Overflow = `document.body.scrollWidth − clientWidth`.

| Route | Mobile overflow | Primary culprit(s) | Sub-32px tap targets |
|---|---|---|---|
| `/` | **174px** | `span.cs-text-style-h1.cs-animated-text` → right edge 559 (hero heading) | 14 |
| `/about` | **241px** | `.ae-content.theme-dark` → 556, `h3.cs-uppercase` → 626, `.cs-animated-text` → 415 | 14 |
| `/service` | **77px** | `.cs-text-style-h1.cs-animated-text` → 462 (hero heading) | 14 |
| `/service-details` | 0 (clean) | — | 16 |
| `/projects` | **49px** | `span.themecolor` heading accent → 434 | 35 |
| `/project-details` | not yet measured (Task 8 covers it) | — | — |
| `/team` | 0 (clean) | — | 14 |
| `/team-details` | not yet measured (Task 8 covers it) | — | — |
| `/contact` | **174px** | `.cs-text-style-h1.cs-animated-text` → 559, `.row.cs_center` → 392 | 14 |
| `/faq` | **49px** | `h2.aos-init` inside `.title.max-width-800` → 434 | 14 |
| `/gallery` | 0 (clean) | — | 30 |
| `/privacy-policy`, `/terms`, `/404` | not yet measured (Task 8 covers it) | — | — |

Tablet (768px / CSS width 763): only `/` overflows, by **12px**, from `.animate-img-wrap`/`.contact-img` inside `.col-xl-7` → 775. Other routes to be confirmed in Task 7.

**Root causes (confirmed in source):**

1. **Hero/breadcrumb `<h1>` never shrinks below 991px.** `style.css:144` sets `.cs-text-style-h1` to `var(--heading-1-font-size)` = **100px** (`style.css:64`), reduced to **80px** at `≤991px` (`style.css:153`) and never again. At 385px an 80px uppercase heading runs 80–175px past the edge. This is the single most repeated bug (home, about, service, contact). The visible element is `.cs-animated-text` (`style.css:2425`, an uppercase gradient-animated heading that carries the `.cs-text-style-h1` class).
2. **Section `<h2>` headings overflow ~49px** on FAQ and Projects for the same "heading text wider than a 385px column" reason.
3. **About "experience" overlay overflows 241px.** `.about-experience-wrap .ae-content` (`style.css:3620`) is `position:absolute; padding:50px; gap:50px` and sizes to its content; existing mobile rules only shrink padding/hide the divider, so the `h3` + text still overflow between 360–575px.
4. **AOS hides real content permanently on mobile.** `src/lib/template.js:708` inits AOS with `offset: -350, once: true`. The −350px trigger offset means short elements near the page bottom on small viewports never reach their trigger; with `once:true` they stay at `opacity:0` forever. Measured: 25/27 AOS elements start hidden; **7 stay hidden even after a full user scroll**. `aos.css` does the hiding via `[data-aos]` opacity rules, so the bulletproof fix is a CSS override that forces `[data-aos]` visible at ≤767px (AOS's own `disable` option also removes the attributes, used here for tablet/desktop trigger reliability).
5. **Touch targets below the 44px WCAG 2.5.5 minimum** on every page (footer `.theme-social` icons at minimum; 30–35 on gallery/projects).
6. `overflow-x: hidden` is set on `body` in **both** `src/index.css:90` and `style.css:119`, which currently *masks* findings 1–3 (content is clipped, not scrollable). It stays as a safety net, but the root causes must still be fixed so content is not silently cut off.

---

## File Structure

- **`src/index.css`** — all CSS fixes (heading scaling, AOS visibility net, about-overlay bounding, tap-target sizing, tablet image fix). Append new `@media` blocks at the end; follow the existing commented-block style. This is the project's override layer and the correct place for every CSS change.
- **`src/lib/template.js`** (lines ~707–717) — change the AOS `init` options (offset + responsive `disable`) so animations trigger reliably on tablet/desktop and never hide content on mobile.
- **`.gitignore`** — add `audit/` so audit screenshots are never committed.
- **Do NOT edit** `public/assets/css/style.css` or `public/assets/css/plugins/aos.css` — they are vendored upstream template files. All overrides win via `src/index.css` load order (it is imported after the template stylesheet) and media-query specificity.

---

## Test Harness

There is no Node test runner for visual CSS here; the "test" is a measurement run in the **Playwright MCP browser** against the running dev server. Before starting, confirm the dev server is up:

```bash
curl -s -o /dev/null -w "%{http_code}" http://localhost:5174/   # expect 200
```
If it is not 200, start it: `npm run dev` (note the printed port; this plan assumes 5174).

**The reusable measurement snippet** — paste as the `function` argument to `mcp__playwright__browser_evaluate` after navigating to a route and resizing the viewport:

```js
() => {
  function clipAncestor(el){let p=el.parentElement;while(p&&p!==document.body){const s=getComputedStyle(p);if(['hidden','scroll','auto','clip'].includes(s.overflowX))return true;p=p.parentElement;}return false;}
  const vw = document.documentElement.clientWidth;
  const culprits = [];
  for (const el of document.querySelectorAll('body *')) {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;
    if (r.right > vw + 1 && !clipAncestor(el)) {
      const cls = (typeof el.className === 'string' && el.className.trim()) ? '.' + el.className.trim().split(/\s+/).slice(0,2).join('.') : '';
      culprits.push(el.tagName.toLowerCase() + cls + ' (' + Math.round(r.right) + ')');
    }
  }
  let tiny = 0;
  for (const a of document.querySelectorAll('a,button,input,select,textarea')) {
    const r = a.getBoundingClientRect();
    if (r.width > 0 && r.height > 0 && (r.height < 32 || r.width < 32)) tiny++;
  }
  let stuckAos = 0;
  for (const el of document.querySelectorAll('[data-aos]')) {
    if (!el.classList.contains('aos-animate') && parseFloat(getComputedStyle(el).opacity) < 0.05) stuckAos++;
  }
  return { vw, overflowPx: document.body.scrollWidth - vw, topCulprits: [...new Set(culprits)].slice(0, 8), tinyTapTargets: tiny, stuckAos };
}
```

**Acceptance for any page:** `overflowPx <= 0` and `topCulprits: []` at the tested width; `stuckAos: 0` after scrolling; tap-target work (Task 6) reduces `tinyTapTargets` on interactive controls.

**Standard "load a route at a width" procedure** (used in every task):
1. `mcp__playwright__browser_resize` → `{width, height}`
2. `mcp__playwright__browser_navigate` → `http://localhost:5174/<route>`
3. `mcp__playwright__browser_evaluate` → the snippet above

CSS edits hot-reload via Vite; after editing `src/index.css` just re-navigate/re-evaluate (no rebuild). After editing `src/lib/template.js`, the dev server HMR-reloads the module; do a fresh `browser_navigate` to re-run init.

---

## Task 1: QA harness + RED baseline

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Ignore the audit output directory**

Add this line to `.gitignore` (create the file if absent):

```gitignore
# Local responsiveness-audit screenshots (not part of the deliverable)
audit/
```

- [ ] **Step 2: Confirm the dev server is serving**

Run: `curl -s -o /dev/null -w "%{http_code}\n" http://localhost:5174/`
Expected: `200` (if not, run `npm run dev` and use the printed port).

- [ ] **Step 3: Capture the RED baseline on the three worst pages**

Using the Standard procedure at mobile `{width:390,height:844}`, run the snippet on `/`, `/about`, `/contact`.
Expected (RED — confirms the bugs are present):
- `/` → `overflowPx: ~174`, culprit `…cs-animated-text (559)`
- `/about` → `overflowPx: ~241`, culprits include `.ae-content… (556)` and `… (626)`
- `/contact` → `overflowPx: ~174`, culprit `…cs-animated-text (559)`

Record the numbers (they are the regression baseline). No app code changes in this task.

- [ ] **Step 4: Commit**

```bash
git add .gitignore
git commit -m "chore: ignore local responsiveness-audit output"
```

---

## Task 2: Guarantee AOS never hides content on mobile, and fix triggers on tablet/desktop

This fixes the blank sections and the 7 permanently-hidden elements.

**Files:**
- Modify: `src/index.css` (append at end)
- Modify: `src/lib/template.js:707-717`

- [ ] **Step 1: Write the failing test**

Standard procedure at mobile `{width:390,height:844}` on `/`. Then in the SAME page run a scroll-through and re-measure `stuckAos`:

```js
async () => {
  for (let y = 0; y <= document.body.scrollHeight; y += 400) { window.scrollTo(0, y); window.dispatchEvent(new Event('scroll')); await new Promise(r=>setTimeout(r,40)); }
  await new Promise(r=>setTimeout(r,300));
  let stuck = 0;
  for (const el of document.querySelectorAll('[data-aos]')) if (!el.classList.contains('aos-animate') && parseFloat(getComputedStyle(el).opacity) < 0.05) stuck++;
  return { stuckAfterScroll: stuck };
}
```
Expected: FAIL — `stuckAfterScroll` is around `7` (content stuck hidden).

- [ ] **Step 2: Add the CSS safety net (always reveals AOS content on phones)**

Append to `src/index.css`:

```css
/* --- Responsiveness fixes 2026-06-15 ----------------------------------- */

/* AOS (animate-on-scroll) hides elements via aos.css [data-aos] opacity rules
   and only reveals them when JS adds .aos-animate. On small viewports the
   trigger sometimes never fires, leaving real content permanently invisible.
   Below the tablet breakpoint, force every AOS element fully visible and
   un-transformed so content can never be hidden on a phone. */
@media (max-width: 767.98px) {
  [data-aos] {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}

/* Same guarantee for anyone who prefers reduced motion, at any width. */
@media (prefers-reduced-motion: reduce) {
  [data-aos] {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
```

- [ ] **Step 3: Fix the AOS init options for tablet/desktop reliability**

In `src/lib/template.js`, replace the `AOS.init({...})` call (around line 708) with:

```js
  if (AOS) {
    AOS.init({
      offset: 80,
      delay: 0,
      duration: 600,
      easing: "ease",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
      // Don't run AOS at all on phones or for reduced-motion users — it removes
      // the data-aos attributes so content renders immediately and can't stick.
      disable: () =>
        window.matchMedia("(max-width: 767.98px)").matches ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
    AOS.refresh();
  }
```

The only changes vs. the original: `offset: -350` → `offset: 80` (the −350 was the stuck-trigger cause), added `duration: 600`, and added the `disable` function.

- [ ] **Step 4: Run test to verify it passes**

`browser_navigate` to `http://localhost:5174/` at mobile `{width:390,height:844}`, then run the Step 1 scroll-through snippet again.
Expected: PASS — `stuckAfterScroll: 0`. Also run the main measurement snippet: `stuckAos: 0`.

- [ ] **Step 5: Verify tablet/desktop animations still fire**

`browser_navigate` to `/` at `{width:1280,height:900}`, run the Step 1 scroll-through snippet.
Expected: `stuckAfterScroll: 0` (elements animate in normally; AOS active above 767px).

- [ ] **Step 6: Commit**

```bash
git add src/index.css src/lib/template.js
git commit -m "fix(responsive): never hide AOS content on mobile, fix scroll triggers"
```

---

## Task 3: Fix hero/breadcrumb H1 overflow site-wide

Fixes the recurring `.cs-text-style-h1` / `.cs-animated-text` overflow on home, service, contact, and the about hero.

**Files:**
- Modify: `src/index.css` (append at end)

- [ ] **Step 1: Write the failing test**

Standard procedure at mobile `{width:390,height:844}` on `/contact`.
Expected: FAIL — `overflowPx: ~174`, `topCulprits` includes `span.cs-text-style-h1.cs-animated-text (559)`.

- [ ] **Step 2: Add a fluid heading scale below the tablet breakpoint**

Append to `src/index.css`:

```css
/* Hero / breadcrumb H1 is 80px at <=991px and never shrinks again, so at
   ~385px it runs up to 175px past the viewport (clipped by overflow-x:hidden).
   Scale it fluidly so it always fits, and allow long Greek words to wrap. */
@media (max-width: 767.98px) {
  h1,
  .cs-text-style-h1 {
    font-size: clamp(2.25rem, 10vw, 3.75rem); /* 36px floor → 60px ceiling */
    line-height: 1.08;
    overflow-wrap: anywhere;
    word-break: break-word;
  }
}
```

- [ ] **Step 3: Run test to verify it passes**

Re-navigate to `/contact` at mobile and run the measurement snippet.
Expected: PASS — `overflowPx <= 0`, and no `cs-animated-text`/`cs-text-style-h1` entry in `topCulprits`.

- [ ] **Step 4: Verify the other hero pages**

Run the snippet at mobile on `/`, `/service`, `/about`.
Expected: the `cs-animated-text`/`cs-text-style-h1` culprit is gone on all three. (`/about` may still report `overflowPx > 0` from `.ae-content` — that is Task 5. `/` should reach `overflowPx <= 0`.)

- [ ] **Step 5: Visual confirmation**

`mcp__playwright__browser_take_screenshot` `{type:'jpeg', filename:'audit/contact-mobile-h1.jpeg'}` at mobile on `/contact`; Read it and confirm the heading is intact (not clipped, readable, wraps cleanly).

- [ ] **Step 6: Commit**

```bash
git add src/index.css
git commit -m "fix(responsive): scale hero H1 so it fits mobile viewports"
```

---

## Task 4: Fix section H2 overflow on FAQ and Projects

**Files:**
- Modify: `src/index.css` (append at end)

- [ ] **Step 1: Write the failing test**

Standard procedure at mobile `{width:390,height:844}` on `/faq` and `/projects`.
Expected: FAIL —
- `/faq` → `overflowPx: ~49`, culprit `h2.aos-init (434)`
- `/projects` → `overflowPx: ~49`, culprit `span.themecolor (434)`

- [ ] **Step 2: Add a mobile cap for section headings**

Append to `src/index.css`:

```css
/* Section H2 headings (and their .themecolor accent spans) are sized for
   wide columns; on a ~385px phone they overflow ~49px. Cap the size and let
   them wrap. */
@media (max-width: 575.98px) {
  h2,
  .cs-text-style-h2 {
    font-size: clamp(1.6rem, 7.5vw, 2.4rem);
    line-height: 1.15;
    overflow-wrap: anywhere;
    word-break: break-word;
  }
}
```

- [ ] **Step 3: Run test to verify it passes**

Re-navigate to `/faq` and `/projects` at mobile; run the snippet.
Expected: PASS — `overflowPx <= 0` and no `h2`/`themecolor` culprit on both.

- [ ] **Step 4: Visual confirmation**

Screenshot `/faq` at mobile (`audit/faq-mobile.jpeg`), Read it, confirm the section title reads correctly and is not clipped.

- [ ] **Step 5: Commit**

```bash
git add src/index.css
git commit -m "fix(responsive): cap section H2 headings so they fit mobile"
```

---

## Task 5: Fix the About "experience" overlay overflow

**Files:**
- Modify: `src/index.css` (append at end)

- [ ] **Step 1: Write the failing test**

Standard procedure at mobile `{width:390,height:844}` on `/about`.
Expected: FAIL — `overflowPx: ~241` (or whatever remains after Task 3), `topCulprits` includes `.ae-content… (556)` and a `(626)` entry.

- [ ] **Step 2: Bound the absolutely-positioned overlay to the viewport**

Append to `src/index.css`:

```css
/* .about-experience-wrap .ae-content is an absolutely-positioned overlay
   (padding:50px, gap:50px) that sizes to its content and overflows the
   viewport on phones. Pin it to both edges, bound its width, shrink the
   padding/typography, and let text wrap so it stays inside the screen. */
@media (max-width: 575.98px) {
  .about-experience-wrap .ae-content {
    left: 0;
    right: 0;
    width: auto;
    max-width: 100%;
    box-sizing: border-box;
    gap: 14px;
    padding: 22px 16px;
  }
  .about-experience-wrap .ae-content h3 {
    display: block; /* template hides it <=360px; keep it but constrain */
    font-size: 18px;
    overflow-wrap: anywhere;
    word-break: break-word;
  }
  .about-experience-wrap .ae-content p,
  .about-experience-wrap .ae-content span {
    overflow-wrap: anywhere;
  }
}
```

- [ ] **Step 3: Run test to verify it passes**

Re-navigate to `/about` at mobile; run the snippet.
Expected: PASS — `overflowPx <= 0`, no `.ae-content` culprit.

- [ ] **Step 4: Visual confirmation (legibility gate)**

Screenshot `/about` full page at mobile (`audit/about-mobile.jpeg`), Read it. Confirm the experience overlay text is legible over the image and not cramped or clipped. **If the overlaid text is unreadable**, change the rule to stack it instead of overlaying:

```css
@media (max-width: 575.98px) {
  .about-experience-wrap .ae-content { position: static; width: 100%; max-width: 100%; box-sizing: border-box; gap: 14px; padding: 22px 16px; }
}
```
Re-run Step 3's snippet after any change; the acceptance is still `overflowPx <= 0`.

- [ ] **Step 5: Commit**

```bash
git add src/index.css
git commit -m "fix(responsive): keep About experience overlay inside mobile viewport"
```

---

## Task 6: Touch-target sizing (WCAG 2.5.5 ≥44px)

**Files:**
- Modify: `src/index.css` (append at end)

- [ ] **Step 1: Write the failing test**

Standard procedure at mobile `{width:390,height:844}` on `/` (footer social icons) and `/projects` (filters/pagination).
Expected: FAIL — `tinyTapTargets` ≈ `14` on `/`, ≈ `35` on `/projects`.

- [ ] **Step 2: Enforce a minimum tap area on touch-scale viewports**

Append to `src/index.css`:

```css
/* WCAG 2.5.5: interactive controls need a >=44px touch target. The footer
   social icons (.theme-social a) and project filter/pagination links render
   well under that on phones. Give them a minimum box without disturbing the
   desktop layout (only <=991px). */
@media (max-width: 991px) {
  .theme-social ul li a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 44px;
    min-height: 44px;
  }
  .cs-pagination a,
  .cs-pagination button,
  .project-filter button,
  .project-filter a,
  .cs-isotope_filter button,
  .cs-isotope_filter a {
    min-width: 44px;
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
}
```

> Note: the filter/pagination selectors are best-effort for the template's class names. In Step 3, inspect the *actual* small controls the snippet flags on `/projects` and add their real selector here if different. Find them with this snippet at mobile on `/projects`:
> ```js
> () => [...document.querySelectorAll('a,button')].filter(a=>{const r=a.getBoundingClientRect();return r.width>0&&r.height>0&&(r.height<32||r.width<32);}).slice(0,12).map(a=>a.tagName.toLowerCase()+'.'+(typeof a.className==='string'?a.className.trim().split(/\s+/).slice(0,2).join('.'):'')+' '+Math.round(a.getBoundingClientRect().width)+'x'+Math.round(a.getBoundingClientRect().height))
> ```

- [ ] **Step 3: Run test to verify it improves**

Re-navigate to `/` and `/projects` at mobile; run the measurement snippet.
Expected: `tinyTapTargets` on `/` drops to **0** for the footer social row; on `/projects` the filter/pagination controls are no longer flagged. (Decorative inline icons inside larger links may remain counted — confirm by the inspector snippet that no *interactive* control is under 44px; small purely-decorative `<i>`/`<a>` wrappers around an icon that is itself inside a bigger tappable area are acceptable.)

- [ ] **Step 4: Visual confirmation**

Screenshot the footer at mobile on `/` (`audit/footer-mobile.jpeg`), Read it, confirm the social icons are comfortably tappable and still aligned.

- [ ] **Step 5: Commit**

```bash
git add src/index.css
git commit -m "fix(responsive): enforce 44px minimum tap targets on touch widths"
```

---

## Task 7: Tablet (768px) pass

**Files:**
- Modify: `src/index.css` (append at end)

- [ ] **Step 1: Write the failing test**

Standard procedure at tablet `{width:768,height:1024}` on `/`.
Expected: FAIL — `overflowPx: ~12`, culprit `div.animate-img-wrap`/`.contact-img` inside `.col-xl-7` (→ 775).

- [ ] **Step 2: Constrain the contact image wrapper at tablet**

Append to `src/index.css`:

```css
/* The home "contact" image wrapper renders ~12px wider than its column at the
   tablet breakpoint, nudging a horizontal overflow. Force media to respect the
   column box at <=991px. */
@media (max-width: 991px) {
  .contact-img,
  .animate-img-wrap {
    max-width: 100%;
    box-sizing: border-box;
  }
  .contact-img img,
  .animate-img-wrap img {
    max-width: 100%;
    height: auto;
  }
}
```

- [ ] **Step 3: Run test to verify it passes**

Re-navigate to `/` at tablet; run the snippet.
Expected: PASS — `overflowPx <= 0`.

- [ ] **Step 4: Sweep every route at tablet**

At `{width:768,height:1024}`, run the measurement snippet on each: `/`, `/about`, `/service`, `/service-details`, `/projects`, `/project-details`, `/team`, `/team-details`, `/contact`, `/faq`, `/gallery`, `/privacy-policy`, `/terms`, `/404`.
Expected: every route `overflowPx <= 0`. For any route that still overflows, read the reported culprit and add a bounding rule in `src/index.css` (same pattern: `max-width:100%; box-sizing:border-box; overflow-wrap:anywhere` on the named element under `@media (max-width: 991px)`), then re-test that route until clean. Record each route's final `overflowPx`.

- [ ] **Step 5: Commit**

```bash
git add src/index.css
git commit -m "fix(responsive): clear tablet (<=991px) overflow across all routes"
```

---

## Task 8: Full regression sweep, visual sign-off, and build check

**Files:**
- Modify: memory `navergo-delivery-prep.md` index note (no app code)

- [ ] **Step 1: Mobile sweep — all routes must be clean**

At mobile `{width:390,height:844}`, run the measurement snippet on every route: `/`, `/about`, `/service`, `/service-details`, `/projects`, `/project-details`, `/team`, `/team-details`, `/contact`, `/faq`, `/gallery`, `/privacy-policy`, `/terms`, `/404`.
Expected: every route `overflowPx <= 0`, `topCulprits: []`, `stuckAos: 0`. Fix any straggler with a bounding rule in `src/index.css` (Task 7 Step 4 pattern) and re-test.

- [ ] **Step 2: Visual sign-off screenshots**

For `/`, `/about`, `/service-details`, `/projects`, `/contact` take a full-page mobile screenshot (`audit/<route>-final-mobile.jpeg`) and a tablet screenshot at `{width:768,height:1024}` (`audit/<route>-final-tablet.jpeg`). Read each and confirm: no clipped text, no empty sections (AOS content visible), images contained, headings wrap cleanly, footer/tap targets comfortable.

- [ ] **Step 3: Production build must pass**

Run: `npm run build`
Expected: `✓ built in …` with no errors. (Confirms no CSS/JS syntax error was introduced.)

- [ ] **Step 4: Lint must pass**

Run: `npm run lint`
Expected: exits 0 with no errors (`audit/` is gitignored and `public/assets` is already eslint-ignored).

- [ ] **Step 5: Update the delivery-prep memory**

Edit `/Users/marios/.claude/projects/-Users-marios-Desktop-Cursor-navergo-main/memory/navergo-delivery-prep.md` to note that tablet/mobile responsiveness (overflow + hidden-AOS-content + tap targets) was audited and fixed on 2026-06-15, and update the matching one-line pointer in `MEMORY.md`.

- [ ] **Step 6: Final commit**

```bash
git add src/index.css
git commit -m "fix(responsive): final mobile sweep — all routes overflow-clean"
```

(If Steps 1–4 required no further code changes, skip the commit; the memory files live outside the repo.)

---

## Notes for the executor

- Edit only `src/index.css` and `src/lib/template.js`. Never edit `public/assets/css/style.css` or `aos.css`.
- CSS changes hot-reload; just re-navigate and re-measure. `template.js` changes HMR-reload — do a fresh `browser_navigate` to re-run init.
- The acceptance metric is always `document.body.scrollWidth − clientWidth <= 0` (the snippet's `overflowPx`). Do not "fix" overflow by adding `overflow-x:hidden` to more elements — that hides bugs; fix the named culprit's box.
- Greek text is longer than English; verify both locales where a heading was near the edge (toggle the language switcher in the header, or append `?lng=en`).
