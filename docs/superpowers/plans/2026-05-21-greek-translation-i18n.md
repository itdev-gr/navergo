# Greek Translation + Language Toggle Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make Greek the default language of the Navergo site and add an EN/GR toggle in the navbar; translate every user-facing English string in the React app to Greek; persist the user's choice across navigation.

**Architecture:** Use `react-i18next` + `i18next` with two JSON resource files (`el.json` as default, `en.json` as the toggle target). The current language is stored in `localStorage` (key `navergo.lang`) and is mirrored on `<html lang>` so screen readers and search engines see the correct language. A `<LanguageToggle />` button sits in the navbar's right pillar. Page `<title>` is updated per route from a translation key. No URL changes — the language is a UI-only setting, which keeps the existing Vercel SPA rewrites and React Router routes untouched.

**Tech Stack:** Vite + React + react-router-dom (already in place) plus the new dependencies `i18next` and `react-i18next`. No new build tooling.

---

## Findings — what we're translating against

The Navergo React port currently has every user-facing string hard-coded in English in 16 page components and 3 shared layout components (`Header`, `SideHeader`, `Footer`). The HTML shell (`index.html`) ships `lang="en"` and `<title>Constr - Construction & Building</title>`. The owner is a Greek shipyard repair business in Perama — Greek must be the canonical language. English remains available via the navbar toggle for international/charter customers.

Translation scope by file (counted via Read tool):
- `index.html` — `<title>` + `<html lang>` + a couple of `<meta>` strings (~5 keys)
- `src/components/Header.jsx` — 7 nav labels, support label, email label (~10 keys)
- `src/components/SideHeader.jsx` — tagline, "Say hello!", "Meet Us:", address (~6 keys)
- `src/components/Footer.jsx` — column headings, newsletter, links, contact, copyright, ITDEV credit (~25 keys)
- `src/pages/HomePage.jsx` (1241 lines) — hero copy ×3 slides, about section, services tiles ×5, projects, features, testimonials, blog teaser, CTA (~80 keys)
- `src/pages/AboutPage.jsx` — breadcrumb, journey, mission, values, team section (~40 keys)
- `src/pages/ServicePage.jsx` + `ServiceDetailsPage.jsx` — service grid, descriptions, sidebars (~50 keys)
- `src/pages/ProjectsPage.jsx` + `ProjectDetailsPage.jsx` — project cards, sidebar facts, blockquote (~35 keys)
- `src/pages/TeamPage.jsx` + `TeamDetailsPage.jsx` — member cards, bio, skills, contact form (~40 keys)
- `src/pages/ContactPage.jsx` — form labels, office cards, map heading (~25 keys)
- `src/pages/FaqPage.jsx` + `GalleryPage.jsx` + `ComingPage.jsx` + `NotFoundPage.jsx` (~25 keys)

Total: roughly 340 translation keys.

**Treatment of Lorem Ipsum:** the vendored template has scattered "Lorem ipsum is simply text…" filler. These remain as-is in both `el.json` and `en.json` (Lorem is content-neutral filler in either language — the user will overwrite it with real shipyard copy later).

---

## File structure

### New files

- `navergo-react/src/i18n/index.js` — i18next initialisation, language detection from `localStorage`, default `el`, fallback `el`, resources imported lazily as ES modules.
- `navergo-react/src/i18n/locales/el.json` — Greek resource (the default).
- `navergo-react/src/i18n/locales/en.json` — English resource.
- `navergo-react/src/components/LanguageToggle.jsx` — the EN/GR switcher UI.

### Modified files

- `navergo-react/index.html` — change `<html class="no-js" lang="en">` to `<html class="no-js" lang="el">`. The `<title>` becomes a placeholder that the React Layout overrides per route — set it to `"Navergo"` so social previews see something sensible.
- `navergo-react/src/main.jsx` — import `./i18n` so the config initialises before `<App>` mounts.
- `navergo-react/src/components/Layout.jsx` — add a `useEffect` keyed on `i18n.language + pathname` that sets `document.documentElement.lang` and `document.title`.
- `navergo-react/src/components/Header.jsx` — replace hard-coded nav labels with `t()` calls; add `<LanguageToggle />` to the right pillar.
- `navergo-react/src/components/SideHeader.jsx`, `Footer.jsx` — replace hard-coded text with `t()` calls.
- Each of the 16 files in `src/pages/` — replace every visible English string with `t()` calls under the page's translation namespace (e.g. `home.*`, `about.*`).

### Naming convention for keys

Use dot-namespaced keys: `<scope>.<section>.<sub>`. Examples:
- `common.nav.home`, `common.nav.services`, `common.brand.tagline`
- `common.cta.startProject`, `common.cta.contactUs`, `common.cta.viewMore`
- `home.hero.slide1.title`, `home.hero.slide1.subtitle`
- `home.services.aluminum.title`, `home.services.aluminum.description`
- `about.breadcrumb.title`, `about.journey.heading`
- `footer.usefulLinks.heading`, `footer.copyright`
- `pageTitles.home`, `pageTitles.about`, `pageTitles.service` (for `<title>` per route)

`common.*` keys are shared across pages (Header, Footer, SideHeader, CTAs). Page-specific keys live under each page's namespace.

### Greek terminology reference (use these consistently)

| English | Greek |
|---|---|
| Home | Αρχική |
| About | Σχετικά |
| About Us | Σχετικά με εμάς |
| Services | Υπηρεσίες |
| Service Details | Λεπτομέρειες Υπηρεσίας |
| Projects | Έργα |
| Project Details | Λεπτομέρειες Έργου |
| Our Team | Η Ομάδα μας |
| Team Details | Λεπτομέρειες Ομάδας |
| Contact / Contact Us | Επικοινωνία |
| Gallery | Γκαλερί |
| FAQ | Συχνές Ερωτήσεις |
| Pricing | Τιμολόγηση |
| News & Insights | Νέα & Αρθρογραφία |
| Coming Soon | Σύντομα Κοντά σας |
| Page not found | Η σελίδα δεν βρέθηκε |
| Start Project | Ξεκινήστε ένα Έργο |
| View More | Δείτε Περισσότερα |
| Read More | Διαβάστε Περισσότερα |
| Send Message | Αποστολή Μηνύματος |
| Subscribe | Εγγραφή |
| Aluminum Works | Εργασίες Αλουμινίου |
| Steel Plate Works | Ελασματουργικές Εργασίες |
| Piping Works | Σωληνουργικές Εργασίες |
| Residential Construction | Κατοικιακές Κατασκευές |
| Infrastructure Development | Ανάπτυξη Υποδομών |
| Shipyard / Ship Repair | Ναυπηγείο / Επισκευή Πλοίων |
| Our Services | Οι Υπηρεσίες μας |
| Useful Links | Χρήσιμοι Σύνδεσμοι |
| Newsletter | Ενημερωτικό Δελτίο |
| Designed and developed by | Σχεδιασμός και ανάπτυξη από |
| All Rights Reserved | Με την επιφύλαξη παντός δικαιώματος |
| Support 24 | Υποστήριξη 24 |
| Email Us | Στείλτε μας Email |
| Say hello! | Πείτε ένα γεια! |
| Meet Us | Επισκεφθείτε μας |
| Loading… | Φόρτωση… |

The implementing subagents must use these exact equivalents when they appear; novel terms get translated per the agent's best Greek with marine-industry tone.

---

## Task 1: Install dependencies and scaffold i18n config

**Files:**
- Create: `navergo-react/src/i18n/index.js`
- Create: `navergo-react/src/i18n/locales/el.json`
- Create: `navergo-react/src/i18n/locales/en.json`
- Modify: `navergo-react/src/main.jsx`
- Modify: `navergo-react/package.json` (via `npm install`)
- Modify: `navergo-react/index.html` — `<html lang="el">` and `<title>Navergo</title>`

- [ ] **Step 1: Install i18next and react-i18next**

```bash
cd /Users/marios/Desktop/Cursor/navergo/navergo-react
npm install i18next react-i18next
```

Expected: `package.json` gains `"i18next"` and `"react-i18next"` under `dependencies`; `package-lock.json` updates.

- [ ] **Step 2: Create the i18n config**

Write `navergo-react/src/i18n/index.js`:

```js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import el from "./locales/el.json";
import en from "./locales/en.json";

const STORAGE_KEY = "navergo.lang";
const SUPPORTED = ["el", "en"];

function initialLanguage() {
  if (typeof window === "undefined") return "el";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED.includes(stored)) return stored;
  return "el";
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      el: { translation: el },
      en: { translation: en },
    },
    lng: initialLanguage(),
    fallbackLng: "el",
    supportedLngs: SUPPORTED,
    interpolation: { escapeValue: false },
    returnNull: false,
  });

i18n.on("languageChanged", (lng) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, lng);
  }
});

export default i18n;
```

- [ ] **Step 3: Create the empty resource files**

Write `navergo-react/src/i18n/locales/el.json`:

```json
{
  "common": {
    "loading": "Φόρτωση…"
  }
}
```

Write `navergo-react/src/i18n/locales/en.json`:

```json
{
  "common": {
    "loading": "Loading…"
  }
}
```

Later tasks will extend these resource files.

- [ ] **Step 4: Wire i18n into `main.jsx`**

Open `navergo-react/src/main.jsx`. Current content:

```jsx
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(<App />);
```

Change to:

```jsx
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n";

createRoot(document.getElementById("root")).render(<App />);
```

The `./i18n` side-effect import calls `i18n.init(...)` before React mounts so the first render already has translations available.

- [ ] **Step 5: Switch the HTML shell to Greek defaults**

Open `navergo-react/index.html`. Find:

```html
<html class="no-js" lang="en">
```

Change to:

```html
<html class="no-js" lang="el">
```

Find:

```html
<title>Constr - Construction & Building</title>
```

Change to:

```html
<title>Navergo</title>
```

The React Layout will overwrite `document.title` per route.

- [ ] **Step 6: Verify build still passes**

```bash
cd /Users/marios/Desktop/Cursor/navergo/navergo-react
npm run build
```

Expected: exits 0 with no errors. The dev server (if running) will HMR.

- [ ] **Step 7: Commit**

```bash
git add package.json package-lock.json src/i18n src/main.jsx index.html
git commit -m "feat(i18n): install react-i18next, default to Greek (el), placeholder resources"
```

---

## Task 2: Build the LanguageToggle component

**Files:**
- Create: `navergo-react/src/components/LanguageToggle.jsx`

- [ ] **Step 1: Implement the toggle**

Write `navergo-react/src/components/LanguageToggle.jsx`:

```jsx
import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const current = i18n.language || "el";

  function setLang(lng) {
    if (lng !== current) i18n.changeLanguage(lng);
  }

  const baseBtn = {
    border: 0,
    background: "transparent",
    color: "#ffffff",
    fontWeight: 700,
    fontSize: 13,
    padding: "4px 8px",
    cursor: "pointer",
    letterSpacing: 1,
  };
  const active = { textDecoration: "underline", textUnderlineOffset: 4 };
  const inactive = { opacity: 0.7 };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        marginLeft: 16,
      }}
      aria-label="Επιλογή γλώσσας"
    >
      <button
        type="button"
        onClick={() => setLang("el")}
        style={{ ...baseBtn, ...(current === "el" ? active : inactive) }}
        aria-pressed={current === "el"}
      >
        ΕΛ
      </button>
      <span style={{ color: "#ffffff", opacity: 0.5 }}>|</span>
      <button
        type="button"
        onClick={() => setLang("en")}
        style={{ ...baseBtn, ...(current === "en" ? active : inactive) }}
        aria-pressed={current === "en"}
      >
        EN
      </button>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/LanguageToggle.jsx
git commit -m "feat(i18n): LanguageToggle component (EL | EN)"
```

---

## Task 3: Sync `<html lang>` and `<title>` from i18n state

**Files:**
- Modify: `navergo-react/src/components/Layout.jsx`

- [ ] **Step 1: Add a syncing useEffect**

Read the current `Layout.jsx`. Inside the component body, after the existing `useEffect(() => { bindGlobalHandlers(); }, [])` line, add a second `useEffect` that runs on language or pathname change:

```jsx
import { useEffect, useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import SideHeader from "./SideHeader";
import Footer from "./Footer";
import { bindGlobalHandlers, initPage, cleanupPage } from "../lib/template.js";

export default function Layout() {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    bindGlobalHandlers();
  }, []);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    const routeKey = pathname === "/" ? "home" : pathname.replace(/^\/|-/g, (m) => (m === "/" ? "" : ""));
    const key = `pageTitles.${routeKey || "home"}`;
    const titleSuffix = t("common.brand.name", { defaultValue: "Navergo" });
    const pageTitle = t(key, { defaultValue: titleSuffix });
    document.title = pageTitle === titleSuffix ? titleSuffix : `${pageTitle} | ${titleSuffix}`;
  }, [i18n.language, pathname, t]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    initPage();
    return () => {
      cleanupPage();
    };
  }, [pathname]);

  return (
    <>
      <Header />
      <SideHeader />
      <Outlet />
      <Footer />
      <span className="cs_scrollup">
        <i className="flaticon-top"></i>
      </span>
      <div className="cs_video_popup">
        <div className="cs_video_popup_overlay"></div>
        <div className="cs_video_popup_content">
          <div className="cs_video_popup_layer"></div>
          <div className="cs_video_popup_container">
            <div className="cs_video_popup_align">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="about:blank" title="video"></iframe>
              </div>
            </div>
            <div className="cs_video_popup_close"></div>
          </div>
        </div>
      </div>
    </>
  );
}
```

The `routeKey` mapping: `/` → `home`, `/about` → `about`, `/service-details` → `servicedetails`, etc. Page-title keys for each route are added in Task 4's `el.json` / `en.json` extension. If a key is missing, fallback is just `"Navergo"`.

- [ ] **Step 2: Commit**

```bash
git add src/components/Layout.jsx
git commit -m "feat(i18n): sync <html lang> and <title> with current language"
```

---

## Task 4: Translate Header + add the toggle

**Files:**
- Modify: `navergo-react/src/components/Header.jsx`
- Modify: `navergo-react/src/i18n/locales/el.json`
- Modify: `navergo-react/src/i18n/locales/en.json`

- [ ] **Step 1: Extend both locale files with `common.*` keys**

Open `el.json` and replace its content with:

```json
{
  "common": {
    "loading": "Φόρτωση…",
    "brand": {
      "name": "Navergo",
      "tagline": "Πιστεύουμε ότι η κατασκευή είναι κάτι περισσότερο από την ανέγερση δομών."
    },
    "nav": {
      "home": "ΑΡΧΙΚΗ",
      "about": "ΣΧΕΤΙΚΑ",
      "services": "ΥΠΗΡΕΣΙΕΣ",
      "serviceDetails": "ΛΕΠΤΟΜΕΡΕΙΕΣ ΥΠΗΡΕΣΙΑΣ",
      "pages": "ΣΕΛΙΔΕΣ",
      "projects": "ΤΑ ΕΡΓΑ ΜΑΣ",
      "projectDetails": "ΛΕΠΤΟΜΕΡΕΙΕΣ ΕΡΓΟΥ",
      "team": "Η ΟΜΑΔΑ ΜΑΣ",
      "teamDetails": "ΛΕΠΤΟΜΕΡΕΙΕΣ ΟΜΑΔΑΣ",
      "gallery": "ΓΚΑΛΕΡΙ",
      "faq": "ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ",
      "error": "Σφάλμα",
      "comingSoon": "Σύντομα Κοντά σας",
      "contact": "ΕΠΙΚΟΙΝΩΝΙΑ"
    },
    "header": {
      "support24": "Υποστήριξη 24:",
      "emailUs": "Στείλτε μας Email:"
    },
    "cta": {
      "startProject": "Ξεκινήστε ένα Έργο",
      "contactUs": "Επικοινωνήστε",
      "viewMore": "Δείτε Περισσότερα",
      "readMore": "Διαβάστε Περισσότερα",
      "moreDetails": "Περισσότερες Λεπτομέρειες",
      "sendMessage": "Αποστολή Μηνύματος",
      "subscribe": "Εγγραφή"
    }
  }
}
```

Open `en.json` and replace with:

```json
{
  "common": {
    "loading": "Loading…",
    "brand": {
      "name": "Navergo",
      "tagline": "We believe construction is more than building structures."
    },
    "nav": {
      "home": "HOME",
      "about": "ABOUT",
      "services": "SERVICES",
      "serviceDetails": "SERVICE DETAILS",
      "pages": "PAGES",
      "projects": "OUR PROJECTS",
      "projectDetails": "PROJECT DETAILS",
      "team": "OUR TEAM",
      "teamDetails": "TEAM DETAILS",
      "gallery": "GALLERY",
      "faq": "FAQ",
      "error": "Error",
      "comingSoon": "Coming Soon",
      "contact": "CONTACT US"
    },
    "header": {
      "support24": "Support 24:",
      "emailUs": "Email Us:"
    },
    "cta": {
      "startProject": "Start Project",
      "contactUs": "Contact Us",
      "viewMore": "View More",
      "readMore": "Read More",
      "moreDetails": "More Details",
      "sendMessage": "Send Message",
      "subscribe": "Subscribe"
    }
  }
}
```

- [ ] **Step 2: Refactor `Header.jsx` to use `useTranslation` and include the toggle**

Open `navergo-react/src/components/Header.jsx`. Replace its content with:

```jsx
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const { t } = useTranslation();
  return (
    <header className="cs_site_header cs-header-with-bg cs_style1 cs_sticky_header">
      <div className="cs_main_header">
        <div className="cs_main_header_in">
          <div className="cs_main_header_left">
            <div className="cs-constr-header-logo">
              <Link
                className="cs_site_branding"
                to="/"
                style={{
                  color: "#7c1d1f",
                  fontWeight: 800,
                  fontSize: "36px",
                  letterSpacing: "2px",
                  lineHeight: 1,
                  textDecoration: "none",
                }}
              >
                NAVERGO
              </Link>
            </div>
          </div>

          <div className="cs-constr-header-middle">
            <div className="cs_nav cs_medium">
              <ul className="cs_nav_list">
                <li>
                  <Link to="/" className="cs-text_b_line"><span>{t("common.nav.home")}</span></Link>
                </li>
                <li>
                  <Link to="/about" className="cs-text_b_line"><span>{t("common.nav.about")}</span></Link>
                </li>
                <li>
                  <Link to="/service" className="cs-text_b_line"><span>{t("common.nav.services")}</span></Link>
                </li>
                {/* News & Insights — disabled for now */}
                <li className="menu-item-has-children">
                  <a href="#" className="cs-text_b_line"><span>{t("common.nav.pages")}</span></a>
                  <ul>
                    <li><Link to="/projects" className="cs-text_b_line"><span>{t("common.nav.projects")}</span></Link></li>
                    <li><Link to="/project-details" className="cs-text_b_line"><span>{t("common.nav.projectDetails")}</span></Link></li>
                    <li><Link to="/team" className="cs-text_b_line"><span>{t("common.nav.team")}</span></Link></li>
                    <li><Link to="/team-details" className="cs-text_b_line"><span>{t("common.nav.teamDetails")}</span></Link></li>
                    <li><Link to="/gallery" className="cs-text_b_line"><span>{t("common.nav.gallery")}</span></Link></li>
                    <li><Link to="/faq" className="cs-text_b_line"><span>{t("common.nav.faq")}</span></Link></li>
                    <li><Link to="/404" className="cs-text_b_line"><span>{t("common.nav.error")}</span></Link></li>
                    <li><Link to="/coming" className="cs-text_b_line"><span>{t("common.nav.comingSoon")}</span></Link></li>
                  </ul>
                  <span className="cs_munu_dropdown_toggle"></span>
                </li>
                <li>
                  <Link to="/contact" className="cs-text_b_line"><span>{t("common.nav.contact")}</span></Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="cs_main_header_right themecolor-bg">
            <div className="cs_toolbox">
              <span className="cs_icon_btn">
                <span className="cs_icon_btn_in">
                  <span></span><span></span><span></span><span></span>
                </span>
              </span>
            </div>

            <div className="header-contact">
              <div className="cs-header-phone theme-dark">
                <span>{t("common.header.support24")}</span>
                <a href="tel:+14065550120" className="cs-text_b_line"><span>(406) 555-0120</span></a>
              </div>
              <div className="cs-header-email theme-dark">
                <span>{t("common.header.emailUs")}</span>
                <a href="mailto:example@email.com" className="cs-text_b_line"><span>example@email.com</span></a>
              </div>
            </div>

            <LanguageToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
```

- [ ] **Step 3: Verify in browser**

`npm run dev` should be running. Open `http://localhost:5174/`:
- Top-right of the navbar shows `ΕΛ | EN` with `ΕΛ` underlined.
- Nav labels read `ΑΡΧΙΚΗ`, `ΣΧΕΤΙΚΑ`, `ΥΠΗΡΕΣΙΕΣ`, `ΣΕΛΙΔΕΣ ▾`, `ΕΠΙΚΟΙΝΩΝΙΑ`.
- Click `EN` — labels switch to English and `EN` is underlined.
- Reload the page — the choice persists (the toggle stays on whichever you last clicked).

- [ ] **Step 4: Commit**

```bash
git add src/components/Header.jsx src/components/LanguageToggle.jsx src/i18n/locales/el.json src/i18n/locales/en.json
git commit -m "feat(i18n): translate Header navigation + add EL|EN toggle"
```

---

## Task 5: Translate SideHeader + Footer

**Files:**
- Modify: `navergo-react/src/components/SideHeader.jsx`
- Modify: `navergo-react/src/components/Footer.jsx`
- Modify: both locale files (extend with `sidebar.*` and `footer.*` namespaces)

- [ ] **Step 1: Extend both locale files**

In `el.json`, add the following keys (merge into existing object — do not replace):

```json
"sidebar": {
  "sayHello": "Πείτε ένα γεια!",
  "meetUs": "Επισκεφθείτε μας:",
  "address": "Λεωφ. Δημοκρατίας 397, Πέραμα 188 63, Ελλάδα"
},
"footer": {
  "newsletter": "ΕΝΗΜΕΡΩΤΙΚΟ ΔΕΛΤΙΟ",
  "newsletterPlaceholder": "Εισάγετε το email σας...",
  "usefulLinks": "ΧΡΗΣΙΜΟΙ ΣΥΝΔΕΣΜΟΙ",
  "ourServices": "ΟΙ ΥΠΗΡΕΣΙΕΣ ΜΑΣ",
  "links": {
    "aboutUs": "ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ",
    "ourServices": "ΟΙ ΥΠΗΡΕΣΙΕΣ ΜΑΣ",
    "recentPortfolio": "ΠΡΟΣΦΑΤΑ ΕΡΓΑ",
    "contactUs": "ΕΠΙΚΟΙΝΩΝΙΑ"
  },
  "services": {
    "aluminum": "ΑΛΟΥΜΙΝΙΟΥ",
    "steel": "ΕΛΑΣΜΑΤΟΥΡΓΙΚΕΣ",
    "piping": "ΣΩΛΗΝΟΥΡΓΙΚΕΣ",
    "consulting": "ΣΥΜΒΟΥΛΕΥΤΙΚΕΣ",
    "industrial": "ΒΙΟΜΗΧΑΝΙΚΕΣ"
  },
  "rights": "Με την επιφύλαξη παντός δικαιώματος.",
  "credit": "Σχεδιασμός και ανάπτυξη από"
},
"about": {
  "intro": "Πιστεύουμε ότι η κατασκευή είναι κάτι περισσότερο από την ανέγερση δομών — αφορά τη δημιουργία."
}
```

In `en.json`, add:

```json
"sidebar": {
  "sayHello": "Say hello!",
  "meetUs": "Meet Us:",
  "address": "Leof. Dimokratias 397, Perama 188 63, Greece"
},
"footer": {
  "newsletter": "NEWSLETTER",
  "newsletterPlaceholder": "Enter your email...",
  "usefulLinks": "USEFUL LINK",
  "ourServices": "OUR SERVICES",
  "links": {
    "aboutUs": "ABOUT US",
    "ourServices": "OUR SERVICES",
    "recentPortfolio": "RECENT PORTFOLIO",
    "contactUs": "CONTACT US"
  },
  "services": {
    "aluminum": "ALUMINUM WORKS",
    "steel": "STEEL PLATE WORKS",
    "piping": "PIPING WORKS",
    "consulting": "CONSULTING",
    "industrial": "INDUSTRIAL"
  },
  "rights": "All Rights Reserved.",
  "credit": "Designed and developed by"
},
"about": {
  "intro": "We believe construction is more than building structures — it's about creating."
}
```

- [ ] **Step 2: Refactor `SideHeader.jsx`**

Open `src/components/SideHeader.jsx`. Replace its content:

```jsx
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SideHeader() {
  const { t } = useTranslation();
  return (
    <div className="cs_side_header">
      <button className="cs_close"></button>
      <div className="cs_side_header_overlay"></div>
      <div className="cs_side_header_in">
        <div className="cs-sidebar-about-brand">
          <Link className="cs_site_branding" to="/">
            <img src="/assets/img/logo_main.png" alt="Logo" />
          </Link>
          <div className="cs-height-20"></div>
          <p>{t("common.brand.tagline")}</p>
          <div className="cs-height-35"></div>
          <img src="/assets/img/header-sidebar/header-sidebar.jpg" alt="" />
        </div>

        <div className="cs-height-150"></div>
        <div className="cs-sidebar-middle-area">
          <p>{t("sidebar.sayHello")}</p>
          <a href="tel:+14065550120"><h6>(406) 555-0120</h6></a>
          <div className="cs-height-20"></div>
          <p>{t("sidebar.sayHello")}</p>
          <a href="mailto:info@email.com"><h6>info@email.com</h6></a>
          <div className="cs-height-20"></div>
          <p>{t("sidebar.meetUs")}</p>
          <span className="cs-text-style-h6">{t("sidebar.address")}</span>

          <div className="cs-height-30"></div>

          <div className="theme-social">
            <ul>
              <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer"><i className="flaticon-facebook-app-symbol"></i></a></li>
              <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><i className="flaticon-linkedin-big-logo"></i></a></li>
              <li><a href="https://x.com" target="_blank" rel="noreferrer"><i className="flaticon-twitter"></i></a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer"><i className="flaticon-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Refactor `Footer.jsx`**

Open `src/components/Footer.jsx`. Replace its content:

```jsx
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div
        className="cs-constr-footer-container theme-dark"
        style={{
          backgroundColor: "#7c1d1f",
          backgroundImage: "url('/assets/img/footer-bg.png')",
          backgroundBlendMode: "screen",
        }}
      >
        <div className="cs-height-150"></div>

        <div className="cs-constr-footer-content">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-8 cs-lg-bootm-p30">
                <div className="cs-footer-widget">
                  <div>
                    <Link to="/"><img src="/assets/img/navergo-logo.png" alt="Navergo" /></Link>
                    <div className="cs-height-20"></div>
                    <p>{t("about.intro")}</p>
                  </div>
                  <div className="cs-height-30"></div>
                  <div className="cs-footer-widget-title">
                    <h6>{t("footer.newsletter")}</h6>
                    <div className="cs-height-10"></div>
                  </div>
                  <form className="cs-constr-newsletter">
                    <input
                      className="cs-newsletter-email"
                      type="email"
                      placeholder={t("footer.newsletterPlaceholder")}
                      required
                    />
                    <button className="cs-newsletter-btn cs_center" type="submit">{t("common.cta.subscribe")}</button>
                  </form>

                  <div className="cs-height-30"></div>

                  <div className="theme-social">
                    <ul>
                      <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer"><i className="flaticon-facebook-app-symbol"></i></a></li>
                      <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><i className="flaticon-linkedin-big-logo"></i></a></li>
                      <li><a href="https://x.com" target="_blank" rel="noreferrer"><i className="flaticon-twitter"></i></a></li>
                      <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer"><i className="flaticon-instagram"></i></a></li>
                    </ul>
                  </div>

                  <div className="cs-height-30"></div>

                  <img
                    src="/assets/img/iso-9001-certification.png"
                    alt="LRQA Certified — ISO 9001 — UKAS Management Systems"
                    style={{ height: "auto", maxWidth: "170px" }}
                  />
                </div>
              </div>

              <div className="col-xl-3 col-lg-6 col-md-4">
                <div className="cs-footer-widget padding-lg-50">
                  <div className="cs-footer-widget-title">
                    <h6>{t("footer.usefulLinks")}</h6>
                    <div className="cs-height-30"></div>
                  </div>
                  <div className="cs-constr-footer-menu">
                    <ul>
                      <li><i className="flaticon-right-arrow themecolor"></i><Link to="/about" className="cs-text_b_line"><span>{t("footer.links.aboutUs")}</span></Link></li>
                      <li><i className="flaticon-right-arrow themecolor"></i><Link to="/service" className="cs-text_b_line"><span>{t("footer.links.ourServices")}</span></Link></li>
                      <li><i className="flaticon-right-arrow themecolor"></i><Link to="/projects" className="cs-text_b_line"><span>{t("footer.links.recentPortfolio")}</span></Link></li>
                      <li><i className="flaticon-right-arrow themecolor"></i><Link to="/contact" className="cs-text_b_line"><span>{t("footer.links.contactUs")}</span></Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-5 col-md-6">
                <div className="cs-footer-widget">
                  <div className="cs-footer-widget-title">
                    <h6>{t("footer.ourServices")}</h6>
                    <div className="cs-height-30"></div>
                  </div>
                  <div className="cs-constr-footer-menu">
                    <ul>
                      <li><i className="flaticon-right-arrow themecolor"></i><Link to="/service-details" className="cs-text_b_line"><span>{t("footer.services.aluminum")}</span></Link></li>
                      <li><i className="flaticon-right-arrow themecolor"></i><Link to="/service-details" className="cs-text_b_line"><span>{t("footer.services.steel")}</span></Link></li>
                      <li><i className="flaticon-right-arrow themecolor"></i><Link to="/service-details" className="cs-text_b_line"><span>{t("footer.services.piping")}</span></Link></li>
                      <li><i className="flaticon-right-arrow themecolor"></i><Link to="/service-details" className="cs-text_b_line"><span>{t("footer.services.consulting")}</span></Link></li>
                      <li><i className="flaticon-right-arrow themecolor"></i><Link to="/service-details" className="cs-text_b_line"><span>{t("footer.services.industrial")}</span></Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-7 col-md-6">
                <div className="cs-footer-widget">
                  <p>{t("sidebar.sayHello")}</p>
                  <a href="tel:+14065550120" className="cs-text-style-h4">(406) 555-0120</a>
                  <div className="cs-height-30"></div>
                  <p>{t("sidebar.sayHello")}</p>
                  <a href="mailto:info@email.com" className="cs-text-style-h4">info@email.com</a>
                  <div className="cs-height-30"></div>
                  <p>{t("sidebar.meetUs")}</p>
                  <div className="cs-height-5"></div>
                  <span className="cs-font-size-20">{t("sidebar.address")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cs-height-130"></div>

        <div className="cs-theme-copyright">
          <div className="cs-footer-copy-text">
            <p>© 2025 <a href="#" className="themecolor">Navergo.</a> {t("footer.rights")}</p>
            <p>{t("footer.credit")} <a href="https://www.itdev.gr" target="_blank" rel="noopener" className="themecolor">ITDEV</a> — <a href="https://www.itdev.gr" target="_blank" rel="noopener" className="themecolor">www.itdev.gr</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/SideHeader.jsx src/components/Footer.jsx src/i18n/locales/el.json src/i18n/locales/en.json
git commit -m "feat(i18n): translate SideHeader and Footer"
```

---

## Task 6: Translate HomePage

**Files:**
- Modify: `navergo-react/src/pages/HomePage.jsx`
- Modify: both locale files (extend with `home.*` namespace)

This file is large (~1200 lines). The translation namespace is `home.*` and contains sub-objects for `hero`, `journey`, `marquee`, `services`, `projects`, `features`, `funfact`, `process`, `testimonials`, `cta`, `blog`, `clients`. Every visible English string in the page becomes a `t()` call. Lorem Ipsum stays as-is (filler in either language).

- [ ] **Step 1: Extend `el.json` with `home.*`**

Merge into `el.json`:

```json
"home": {
  "hero": {
    "slide1": {
      "strong": "Επισκευή Πλοίων",
      "normal": "Λύσεις για τη Σύγχρονη Ναυτιλία",
      "backdrop": "NAVERGO NAVERGO NAVE",
      "subtitle": "Ο αξιόπιστος συνεργάτης σας για ναυπηγοεπισκευαστικές εργασίες στο λιμάνι του Περάματος."
    },
    "slide2": {
      "strong": "Ναυπηγείο",
      "normal": "Αριστεία σε κάθε επισκευή",
      "backdrop": "NAVERGO NAVERGO NAVE",
      "subtitle": "Εξειδικευμένα συνεργεία αλουμινίου, ελασματουργικών και σωληνουργικών εργασιών."
    },
    "slide3": {
      "strong": "Εμπειρία",
      "normal": "που αντέχει στο χρόνο",
      "backdrop": "NAVERGO NAVERGO NAVE",
      "subtitle": "Δεκαετίες παρουσίας στις γενικές επισκευές πλοίων με πιστοποίηση ISO 9001."
    }
  },
  "journey": {
    "heading": "Navergo",
    "animatedText": "ΣΧΕΤΙΚΑ",
    "paragraph": "Η Navergo, η ναυπηγοεπισκευαστική Ε.Ε. ΖΑΧΟΣ-ΚΑΤΖΗΛΙΕΡΗΣ, δραστηριοποιείται στις γενικές επισκευές πλοίων με εξειδίκευση στις εργασίες αλουμινίου, στα ελασματουργικά και στα σωληνουργικά συνεργεία.",
    "feature1": "1. Εργασίες Αλουμινίου",
    "feature2": "2. Ελασματουργικές Εργασίες",
    "feature3": "3. Σωληνουργικές Εργασίες"
  },
  "marquee": "Ποιοτικές Επισκευές, Στην Ώρα τους, Κάθε Φορά.",
  "services": {
    "heading": "Εξειδικευμένες Υπηρεσίες Ναυπηγοεπισκευής",
    "animatedText": "ΥΠΗΡΕΣΙΕΣ",
    "items": {
      "01": { "title": "01. Εργασίες Αλουμινίου", "description": "Συγκολλήσεις και κατασκευές αλουμινίου για υπερκατασκευές, καμπίνες και κρίσιμα τμήματα πλοίων." },
      "02": { "title": "02. Ελασματουργικές Εργασίες", "description": "Ανακαινίσεις γάστρας, αντικαταστάσεις ελασμάτων και ενισχύσεις σκελετού σε δεξαμενόπλοια και επιβατηγά." },
      "03": { "title": "03. Σωληνουργικές Εργασίες", "description": "Εγκατάσταση και επισκευή σωληνώσεων μηχανοστασίου, συστημάτων ψύξης και διαχείρισης καυσίμων." },
      "04": { "title": "04. Κατοικιακές Κατασκευές", "description": "Κατασκευή και ανακαίνιση κατοικιών — πλήρεις υπηρεσίες κλειδί στο χέρι." },
      "05": { "title": "05. Ανάπτυξη Υποδομών", "description": "Ναυπηγικά έργα υποδομής και υποστηρικτικές κατασκευές στο λιμάνι." }
    }
  },
  "projects": {
    "heading": "Δείτε τα πιο πρόσφατα έργα μας",
    "animatedText": "ΧΑΡΤΟΦΥΛΑΚΙΟ",
    "item1": "Stronghold construction",
    "viewProject": "ΠΡΟΒΟΛΗ ΕΡΓΟΥ",
    "futureSustainable": "Το μέλλον των βιώσιμων κατασκευών — Τάσεις που πρέπει να γνωρίζετε"
  },
  "features": {
    "card1": "Optimized Construction",
    "card2": "Comprehensive Project Management",
    "card3": "Pre-Construction"
  },
  "blog": {
    "heading": "Πρόσφατα Νέα & Αρθρογραφία",
    "animatedText": "ΝΕΑ"
  }
}
```

(These keys are the high-priority ones — the full extraction is in Step 3 below; agents handling this file should add more keys as they find more strings.)

- [ ] **Step 2: Extend `en.json` with `home.*`** — mirror structure, English content.

Open `en.json`, add the identical structure with English strings (the existing English content from `HomePage.jsx`). Example for hero slide 1:

```json
"home": {
  "hero": {
    "slide1": {
      "strong": "Construction",
      "normal": "Solutions for Your Modern Living",
      "backdrop": "NAVERGO NAVERGO NAVE",
      "subtitle": "Your Partner in Creating Sustainable and Innovative Structures Your Partner in Creating Sustainable and Innovative Structures"
    },
    ...
  },
  ...
}
```

Continue with all sub-objects matching the Greek file.

- [ ] **Step 3: Refactor `HomePage.jsx`**

Add `import { useTranslation } from "react-i18next";` and `const { t } = useTranslation();` inside the component. Replace every visible English string with the corresponding `t("home.<key>")` call.

A few worked examples (the agent doing this task uses these as patterns and applies them to every section of the file):

Hero slide 1 — before:

```jsx
<h1>
  <span className="hero-strong-title constr-splite">Construction</span>{" "}
  <span className="cs-hero-title-normal hero-second-splite">Solutions for Your Modern Living</span>
</h1>
```

After:

```jsx
<h1>
  <span className="hero-strong-title constr-splite">{t("home.hero.slide1.strong")}</span>{" "}
  <span className="cs-hero-title-normal hero-second-splite">{t("home.hero.slide1.normal")}</span>
</h1>
```

CTA button — before:

```jsx
<Link to="/contact" className="cs-primary-btn secondary-btn cs-color-white themecolor-bg cs-height-60 cs-width-180">
  <span>Start Project</span>
</Link>
```

After:

```jsx
<Link to="/contact" className="cs-primary-btn secondary-btn cs-color-white themecolor-bg cs-height-60 cs-width-180">
  <span>{t("common.cta.startProject")}</span>
</Link>
```

Service tile — before:

```jsx
<Link to="/service-details" className="the-srv-title cs-text-style-h6">01. Aluminum Works</Link>
```

After:

```jsx
<Link to="/service-details" className="the-srv-title cs-text-style-h6">{t("home.services.items.01.title")}</Link>
```

- [ ] **Step 4: Visual sanity check at `/`**

Run `npm run dev` and visit `http://localhost:5174/`. With Greek (default) selected:
- Hero slides cycle showing Greek titles, subtitles, CTA labels.
- "Navergo" about heading reads `Navergo`; paragraph in Greek; service feature list 1/2/3 in Greek.
- Service slider shows `01. Εργασίες Αλουμινίου` etc.
- Marquee text in Greek.
- "Δείτε Περισσότερα" / "Ξεκινήστε ένα Έργο" / "Επικοινωνήστε" buttons all Greek.

Toggle to EN — every string switches back to English.

- [ ] **Step 5: Commit**

```bash
git add src/pages/HomePage.jsx src/i18n/locales/el.json src/i18n/locales/en.json
git commit -m "feat(i18n): translate HomePage to Greek; English fallback intact"
```

---

## Task 7: Translate inner pages (parallelizable)

These tasks are mutually independent — each touches one or two page files plus appends to both locale files. Within a task, the implementer adds a page-scoped namespace to `el.json` and `en.json`, then refactors the JSX. **Subagents dispatched for these tasks must coordinate the JSON merges in series** (one at a time) — locale-file conflicts are the only shared-state risk.

### Task 7a: AboutPage

**Files:**
- Modify: `navergo-react/src/pages/AboutPage.jsx`
- Modify: both locale files (append `about.*` namespace, extending `about` which already has `intro`)

- [ ] **Step 1: Read the current file and list every visible English string**

Identify breadcrumb, journey heading, mission text, values list, team intro, and any other body content.

- [ ] **Step 2: Add the keys to both locale files under `about.*`**

Example Greek keys:

```json
"about": {
  "intro": "Πιστεύουμε ότι η κατασκευή είναι κάτι περισσότερο από την ανέγερση δομών — αφορά τη δημιουργία.",
  "breadcrumb": {
    "title": "Σχετικά με εμάς",
    "trail": "ΑΡΧΙΚΗ / ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ"
  },
  "journey": {
    "heading": "Μια Διαχρονική Πορεία Δημιουργίας Αξίας στη Ναυπηγοεπισκευή",
    "paragraph1": "Πιστεύουμε ότι η ναυπηγοεπισκευή είναι κάτι περισσότερο από εργασίες — αφορά τη δημιουργία σταθερών συνεργασιών που εμπνέουν εμπιστοσύνη.",
    "paragraph2": "Η εξειδικευμένη ομάδα μας φέρνει εμπειρία και πάθος για αριστεία σε κάθε έργο."
  }
}
```

English mirror in `en.json`. The exact set of keys depends on the page content — the implementer reads the page, extracts every string, names a key, translates.

- [ ] **Step 3: Refactor `AboutPage.jsx` with `useTranslation`**

```jsx
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <>
      <section>
        <div className="cs-breadcrumb-wrap theme-dark" data-src="/assets/img/breadcrumb.jpg">
          <div className="container">
            <div className="row cs_center">
              <div className="cs-bread-page-title-area">
                <div className="cs-page-title">
                  <h2 className="cs_white_color">{t("about.breadcrumb.title")}</h2>
                </div>
                <div className="breadcrumb">
                  <ul>
                    <li><Link to="/" className="cs-text_b_line"><span>{t("common.nav.home")}</span></Link></li>
                    <li>/</li>
                    <li>{t("common.nav.about")} {t("common.nav.us", { defaultValue: "" })}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ... rest of page, every English string replaced with t("about.<sub>") ... */}
    </>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add src/pages/AboutPage.jsx src/i18n/locales/el.json src/i18n/locales/en.json
git commit -m "feat(i18n): translate AboutPage"
```

### Task 7b: ServicePage + ServiceDetailsPage

**Files:**
- Modify: `navergo-react/src/pages/ServicePage.jsx`
- Modify: `navergo-react/src/pages/ServiceDetailsPage.jsx`
- Modify: both locale files (extend with `service.*` and `serviceDetails.*`)

Same pattern as Task 7a: read the pages, extract every visible English string into Greek and English keys, refactor JSX. Commit with `feat(i18n): translate Service and ServiceDetails pages`.

### Task 7c: ProjectsPage + ProjectDetailsPage

**Files:**
- Modify: `navergo-react/src/pages/ProjectsPage.jsx`
- Modify: `navergo-react/src/pages/ProjectDetailsPage.jsx`
- Modify: both locale files (extend with `projects.*` and `projectDetails.*`)

Commit with `feat(i18n): translate Projects and ProjectDetails pages`.

### Task 7d: TeamPage + TeamDetailsPage

**Files:**
- Modify: `navergo-react/src/pages/TeamPage.jsx`
- Modify: `navergo-react/src/pages/TeamDetailsPage.jsx`
- Modify: both locale files (extend with `team.*` and `teamDetails.*`)

Commit with `feat(i18n): translate Team and TeamDetails pages`.

### Task 7e: ContactPage

**Files:**
- Modify: `navergo-react/src/pages/ContactPage.jsx`
- Modify: both locale files (extend with `contact.*`)

Commit with `feat(i18n): translate ContactPage (forms, offices, map)`.

### Task 7f: FaqPage + GalleryPage + ComingPage + NotFoundPage

**Files:**
- Modify: `navergo-react/src/pages/FaqPage.jsx`
- Modify: `navergo-react/src/pages/GalleryPage.jsx`
- Modify: `navergo-react/src/pages/ComingPage.jsx`
- Modify: `navergo-react/src/pages/NotFoundPage.jsx`
- Modify: both locale files (extend with `faq.*`, `gallery.*`, `coming.*`, `notFound.*`)

Commit with `feat(i18n): translate FAQ, Gallery, Coming, NotFound pages`.

---

## Task 8: Add page-title keys + ship

**Files:**
- Modify: both locale files (extend with `pageTitles.*` namespace already referenced in Layout)

- [ ] **Step 1: Add page-title strings to `el.json`**

```json
"pageTitles": {
  "home": "Αρχική",
  "about": "Σχετικά με εμάς",
  "service": "Υπηρεσίες",
  "servicedetails": "Λεπτομέρειες Υπηρεσίας",
  "projects": "Τα Έργα μας",
  "projectdetails": "Λεπτομέρειες Έργου",
  "team": "Η Ομάδα μας",
  "teamdetails": "Λεπτομέρειες Ομάδας",
  "contact": "Επικοινωνία",
  "faq": "Συχνές Ερωτήσεις",
  "gallery": "Γκαλερί",
  "coming": "Σύντομα κοντά σας",
  "404": "Η σελίδα δεν βρέθηκε"
}
```

- [ ] **Step 2: Mirror in `en.json`**

```json
"pageTitles": {
  "home": "Home",
  "about": "About Us",
  "service": "Services",
  "servicedetails": "Service Details",
  "projects": "Our Projects",
  "projectdetails": "Project Details",
  "team": "Our Team",
  "teamdetails": "Team Details",
  "contact": "Contact",
  "faq": "FAQ",
  "gallery": "Gallery",
  "coming": "Coming Soon",
  "404": "Page Not Found"
}
```

- [ ] **Step 3: Commit**

```bash
git add src/i18n/locales/el.json src/i18n/locales/en.json
git commit -m "feat(i18n): per-route page titles (EL default, EN toggle)"
```

- [ ] **Step 4: Push everything**

```bash
git push origin main
```

Wait ~90 seconds for Vercel deploy.

---

## Verification — end-to-end

Run all of these after the final push. Each must pass.

- [ ] **Build passes** — `npm run build` exits 0 with no JSX/JSON parse errors.

- [ ] **All 13 routes still 200 on Vercel** — re-run the deep-link smoke test from `2026-05-21-navergo-smoke-test-fixes.md`'s verification section.

- [ ] **Greek is the default on a fresh visit**
  - Open an incognito window, navigate to https://navergo.vercel.app/.
  - Confirm `<html lang="el">` in DevTools Elements panel.
  - Confirm nav reads `ΑΡΧΙΚΗ`, `ΣΧΕΤΙΚΑ`, `ΥΠΗΡΕΣΙΕΣ`, `ΣΕΛΙΔΕΣ ▾`, `ΕΠΙΚΟΙΝΩΝΙΑ`.
  - Confirm `<title>` reads `Αρχική | Navergo` (or whichever page-title key applies).

- [ ] **Toggle switches the entire UI**
  - Click `EN` — every visible label, heading, paragraph, CTA, footer column, sidebar block switches to English within one frame.
  - `<html lang>` updates to `en`.
  - `<title>` updates to the English equivalent.
  - Reload the page — choice persists (still EN). Click `ΕΛ` — back to Greek; reload again — choice persists.

- [ ] **Spot-check every page on both languages** — navigate to each of `/`, `/about`, `/service`, `/service-details`, `/projects`, `/project-details`, `/team`, `/team-details`, `/contact`, `/faq`, `/gallery`, `/coming`, `/404`. On each page, click both `ΕΛ` and `EN` and confirm every visible non-Lorem string flips.

- [ ] **No console errors** — `mcp__playwright__browser_console_messages` at `level: "error"` returns 0 entries.

- [ ] **No layout regressions** — Header / Footer / breadcrumb / hero swiper / GSAP animations all still work; the navbar's EL|EN buttons fit on the right pillar without wrapping at 1280 px+.

- [ ] **Lighthouse SEO** — open Lighthouse in Chrome DevTools, run "SEO" audit on the homepage. The "Document has a valid `lang` attribute" check should pass.
