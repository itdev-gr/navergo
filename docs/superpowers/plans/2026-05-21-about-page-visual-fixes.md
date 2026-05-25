# About Page Visual Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix the two remaining visual defects on `/about` exposed by today's smoke test — the duplicated "Navergo Ship Repair G.P." heading in the Company Story section, and the counter row that displays homepage labels ("Completed Projects / On-Going Projects / Happy Customers") plus the footer tagline as a description because the JSX still calls `t("home.funfact.*")` instead of the `t("about.counter.*")` keys we already added.

**Architecture:** Two surgical edits to `src/pages/AboutPage.jsx`. The locale files already contain the right keys (`about.counter.shipsServiced`, `yearsExperience`, `repairProjects`, `description`) — Phase 5a added them. No JSON changes, no new components, no CSS changes.

**Tech Stack:** React + react-i18next. No new dependencies.

---

## Context — what the smoke test found

`/about` smoke-tested at 1440 px on 2026-05-21. Two visual defects survived the earlier rewrite (commit `a0ede38`):

1. **Duplicate company-name heading.** `src/pages/AboutPage.jsx:40` (left column) and `src/pages/AboutPage.jsx:65` (right column) both render `<h2>{t("about.story.title")}</h2>` — and the right column also re-renders `paragraph1`. Result: the same brand heading appears twice within the same section, side-by-side.

2. **Counter row uses wrong i18n keys.** `src/pages/AboutPage.jsx:409, 411, 415, 417, 421, 423` call `t("home.funfact.X.label")` and `t("home.funfact.X.description")`. The `home.funfact.*` namespace contains the homepage's placeholder copy ("Completed Projects", "On-Going Projects", "Happy Customers", description = footer tagline). The about-counter keys we set up (`about.counter.shipsServiced` / `yearsExperience` / `repairProjects` + `about.counter.description`) are correct and unused. The JSX just points at the wrong namespace.

Both issues are present in EL and EN — once the JSX is fixed, the translations are already correct.

## Critical files

- **`navergo-react/src/pages/AboutPage.jsx`** — the only file touched. Two distinct hunks: the `cj-right` block (lines 58–72) and the counter block (lines 401–430).
- **`navergo-react/src/i18n/locales/el.json`** — read-only reference. Confirms `about.counter.{shipsServiced, yearsExperience, repairProjects, activeContracts, description}` already exists with correct Greek values.
- **`navergo-react/src/i18n/locales/en.json`** — read-only reference. Confirms the English mirror.

## What stays untouched

- All other About sections (Values, Areas of Activity, Personnel, Partnerships, Pillars of Growth, Team, Experience parallax) render correctly per the smoke test's section-by-section scroll sweep.
- The `home.funfact.*` keys remain on the homepage where they're used legitimately.
- The four placeholder images in the Company Story columns stay (they're theme assets, not a bug).
- The `about.counter.activeContracts` key stays in the locales as unused-but-defined — useful when a fourth counter is added later.

---

## Task 1: Remove duplicate heading from Company Story `cj-right`

**Files:**
- Modify: `navergo-react/src/pages/AboutPage.jsx` (lines 58–72, the `<div className="cj-right">` block)

- [ ] **Step 1: Read the current cj-right block**

```bash
/usr/bin/sed -n '58,73p' /Users/marios/Desktop/Cursor/navergo/navergo-react/src/pages/AboutPage.jsx
```

Expected output (verify before editing — if it doesn't match, the file has drifted and the plan needs revisiting):

```jsx
          <div className="cj-right">
            <div className="cs-section-height"></div>
            <div className="cs-height-40"></div>
            <div className="cj-right-content">
              <img src="/assets/img/about/cj-right-img2.jpg" alt="" />
              <div className="cs-height-40"></div>
              <div className="cs-heading-with-animation text-left m-auto d-flex">
                <h2 className="cs-heading">{t("about.story.title")}</h2>
                <span className="cs-text-style-h1 cs-animated-text">{t("about.story.animatedText")}</span>
              </div>
              <p>{t("about.story.paragraph1")}</p>
              <div className="cs-height-50"></div>
              <Link className="cs-primary-btn secondary-btn cs-color-white themecolor-bg cs-height-70 cs-width-220" to="/contact"><span>{t("about.cta.button")}</span></Link>
            </div>
          </div>
```

- [ ] **Step 2: Edit the block to remove the duplicate heading + duplicate paragraph**

Use the Edit tool. Replace the entire cj-right block above with:

```jsx
          <div className="cj-right">
            <div className="cs-section-height"></div>
            <div className="cs-height-40"></div>
            <div className="cj-right-content">
              <img src="/assets/img/about/cj-right-img2.jpg" alt="" />
              <div className="cs-height-40"></div>
              <Link className="cs-primary-btn secondary-btn cs-color-white themecolor-bg cs-height-70 cs-width-220" to="/contact"><span>{t("about.cta.button")}</span></Link>
            </div>
          </div>
```

What changed: removed the inner `cs-heading-with-animation` wrapper, its `<h2>`, its `<span>` animated text, the duplicate `<p>{paragraph1}</p>`, and the `cs-height-50` spacer between the (now-removed) paragraph and the CTA. The result: right column shows just the image + a CTA button, while the left column owns the title + animated text + both paragraphs + the founded/location info row.

- [ ] **Step 3: Verify no other reference to the removed pattern exists**

```bash
/usr/bin/grep -n "cj-right\|about.story.title\|about.story.paragraph1" /Users/marios/Desktop/Cursor/navergo/navergo-react/src/pages/AboutPage.jsx
```

Expected output: `cj-right` and `cj-right-content` each appear once now. `about.story.title` should appear only on line 40 (left column). `about.story.paragraph1` only on line 43 (left column).

- [ ] **Step 4: Build to confirm no JSX parse errors**

```bash
cd /Users/marios/Desktop/Cursor/navergo/navergo-react
npm run build 2>&1 | tail -3
```

Expected output: `built in <N>ms` and exit 0.

- [ ] **Step 5: Reload `http://localhost:5174/about` and visually verify**

Use Playwright:

```js
await page.goto('http://localhost:5174/about');
await new Promise(r => setTimeout(r, 1500));
window.scrollTo(0, 400);
const h2s = [...document.querySelectorAll('.cs-cj-wrap h2')].map(h => h.textContent.trim());
return { h2sInCompanyStorySection: h2s };
```

Expected: `h2sInCompanyStorySection: ["Navergo Ship Repair G.P."]` — exactly one entry, not two.

- [ ] **Step 6: Commit**

```bash
cd /Users/marios/Desktop/Cursor/navergo/navergo-react
git add src/pages/AboutPage.jsx
git commit -m "fix(about): remove duplicate company-name heading from Story right column"
```

---

## Task 2: Point counter row at `about.counter.*` keys

**Files:**
- Modify: `navergo-react/src/pages/AboutPage.jsx` (the counter block — currently lines 401–430)

- [ ] **Step 1: Read the current counter block**

```bash
/usr/bin/sed -n '401,432p' /Users/marios/Desktop/Cursor/navergo/navergo-react/src/pages/AboutPage.jsx
```

Note: after Task 1 the line numbers shift down by ~5 lines because we removed 5 lines from cj-right. The block to find begins with the `{/* Start Counter With CTA Section */}` comment. Use the comment as a stable anchor:

```bash
/usr/bin/grep -n "Start Counter With CTA Section" /Users/marios/Desktop/Cursor/navergo/navergo-react/src/pages/AboutPage.jsx
```

The block runs from that comment until `{/* End Counter With CTA Section */}`. Read those lines.

- [ ] **Step 2: Replace each of the six `home.funfact` calls with the `about.counter.*` equivalents**

Use the Edit tool with `replace_all: true` to do all six in one pass.

Six string replacements (do them with three `Edit` calls — `replace_all: true` doesn't work because we need each key to map to a different replacement):

Edit 1 — first counter label:

```
Old: t("home.funfact.1.label")
New: t("about.counter.shipsServiced")
```

Edit 2 — second counter label:

```
Old: t("home.funfact.2.label")
New: t("about.counter.yearsExperience")
```

Edit 3 — third counter label:

```
Old: t("home.funfact.3.label")
New: t("about.counter.repairProjects")
```

Edit 4 — all three counter descriptions in one pass (they all share the same text via the same key):

```
Old: t("home.funfact.1.description")
New: t("about.counter.description")
```

```
Old: t("home.funfact.2.description")
New: t("about.counter.description")
```

```
Old: t("home.funfact.3.description")
New: t("about.counter.description")
```

After all six edits the counter block should read (the three `<div className="counter-item">` children inside the `cs-couter-items` row):

```jsx
                <div className="counter-item" data-aos="fade-top" data-aos-duration="400">
                  <h6>{t("about.counter.shipsServiced")}</h6>
                  <span id="count1" className="amin_auto_count cs-text-style-h2">76</span><span className="cs-text-style-h2">+</span>
                  <p>{t("about.counter.description")}</p>
                </div>
                <div className="counter-sep"></div>
                <div className="counter-item" data-aos="fade-top" data-aos-duration="600">
                  <h6>{t("about.counter.yearsExperience")}</h6>
                  <span id="count2" className="amin_auto_count cs-text-style-h2">5</span><span className="cs-text-style-h2">+</span>
                  <p>{t("about.counter.description")}</p>
                </div>
                <div className="counter-sep"></div>
                <div className="counter-item" data-aos="fade-top" data-aos-duration="800">
                  <h6>{t("about.counter.repairProjects")}</h6>
                  <span id="count3" className="amin_auto_count cs-text-style-h2">140</span>
                  <p>{t("about.counter.description")}</p>
                </div>
```

The numeric placeholders (76, 5, 140) stay as-is — they're decorative until the user provides real metrics.

- [ ] **Step 3: Confirm no `home.funfact` references remain in AboutPage.jsx**

```bash
/usr/bin/grep -c "home.funfact" /Users/marios/Desktop/Cursor/navergo/navergo-react/src/pages/AboutPage.jsx
```

Expected output: `0`.

- [ ] **Step 4: Confirm the about-counter keys are reachable in both locales**

```bash
node -e "const el=require('/Users/marios/Desktop/Cursor/navergo/navergo-react/src/i18n/locales/el.json'); const en=require('/Users/marios/Desktop/Cursor/navergo/navergo-react/src/i18n/locales/en.json'); for (const k of ['shipsServiced','yearsExperience','repairProjects','description']) console.log(k, '→ el:', el.about.counter[k], '| en:', en.about.counter[k]);"
```

Expected: prints non-empty Greek and English values for all four keys.

- [ ] **Step 5: Build**

```bash
cd /Users/marios/Desktop/Cursor/navergo/navergo-react
npm run build 2>&1 | tail -3
```

Expected: exit 0, `built in <N>ms`.

- [ ] **Step 6: Reload `/about` and verify counters**

Use Playwright:

```js
await page.goto('http://localhost:5174/about');
await new Promise(r => setTimeout(r, 1500));
window.scrollTo(0, 4000);  // counter section is around y=4000
await new Promise(r => setTimeout(r, 800));
const labels = [...document.querySelectorAll('.counter-item h6')].map(h => h.textContent.trim());
const descs = [...document.querySelectorAll('.counter-item p')].map(p => p.textContent.trim());
return { labels, descsUniqueCount: new Set(descs).size, descs };
```

Expected (Greek default):
- `labels: ["Πλοία που Επισκευάστηκαν", "Έτη Εμπειρίας", "Έργα Επισκευής"]`
- `descsUniqueCount: 1` (all three counters share the same `about.counter.description`)
- The description string is "Η εμπειρία και η συνέπειά μας αποτυπώνονται στα έργα μας." — NOT the footer tagline "Πιστεύουμε ότι η κατασκευή…".

Then toggle to EN via `i18n.changeLanguage("en")` and re-read; expected:
- `labels: ["Ships Serviced", "Years of Experience", "Repair Projects Completed"]`
- description: "Our experience and consistency are reflected in our work."

- [ ] **Step 7: Commit**

```bash
cd /Users/marios/Desktop/Cursor/navergo/navergo-react
git add src/pages/AboutPage.jsx
git commit -m "fix(about): counter row uses about.counter.* keys (not home.funfact.*)"
```

---

## Task 3: Push and verify on production

- [ ] **Step 1: Push the two commits**

```bash
cd /Users/marios/Desktop/Cursor/navergo/navergo-react
git push origin main
```

Expected: `<base>..<head>  main -> main`, no errors. Vercel auto-deploys.

- [ ] **Step 2: Wait for Vercel deploy (~60-90 seconds)**

```bash
/bin/sleep 75
```

- [ ] **Step 3: Verify on production**

```bash
/usr/bin/curl -s -o /dev/null -w "%{http_code}\n" https://navergo.vercel.app/about
```

Expected: `200`.

Then load the JS bundle and grep for both old (bad) and new (good) phrases:

```bash
BUNDLE=$(/usr/bin/curl -s https://navergo.vercel.app/about | /usr/bin/grep -o 'assets/index-[^"]*\.js' | head -1)
/usr/bin/curl -s "https://navergo.vercel.app/$BUNDLE" > /tmp/prod.js
echo "New labels present (want ≥1):"
/usr/bin/grep -c "Πλοία που Επισκευάστηκαν\|Ships Serviced" /tmp/prod.js
echo "Old wrong labels absent on /about (want 0 — note: 'Completed Projects' might still appear because homepage still uses it):"
/usr/bin/grep -c "Completed Projects" /tmp/prod.js
```

Note: `Completed Projects` may still appear in the bundle because the homepage uses `home.funfact.1.label = "Completed Projects"`. That's expected — only `/about` should no longer render that label. Verify visually instead:

```js
await page.goto('https://navergo.vercel.app/about');
await new Promise(r => setTimeout(r, 1500));
window.scrollTo(0, 4000);
await new Promise(r => setTimeout(r, 800));
return [...document.querySelectorAll('.counter-item h6')].map(h => h.textContent.trim());
```

Expected: the new Greek labels, NOT "Completed Projects / On-Going Projects / Happy Customers".

## Verification — full pass

- [ ] `npm run build` exits 0 after each task.
- [ ] `/about` HTTP status: 200.
- [ ] Company Story section H2 count via DevTools `document.querySelectorAll('.cs-cj-wrap h2').length` returns `1` (was `2`).
- [ ] Counter row labels read the Greek shipyard labels in EL and the English equivalents in EN.
- [ ] Counter row descriptions read the about-counter description, NOT the footer tagline.
- [ ] No other About sections regress — quick scroll sweep at 1440 px confirms Values, Areas of Activity (two service columns with exclusions applied), Personnel cards (60×60 icons), Partnerships, Pillars, Team, Experience parallax still render correctly.
- [ ] `mcp__playwright__browser_console_messages` at error level returns 0 entries on `/about`.
