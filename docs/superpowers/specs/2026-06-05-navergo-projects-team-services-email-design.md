# NaverGo — Projects, Team, Service block & Email update

**Date:** 2026-06-05
**Status:** Approved (decisions confirmed via clarifying questions)

## Overview

A batch of real-content updates to the NaverGo (Perama ship-repair) React + Vite + i18next site, replacing leftover theme placeholders with the client's real data. Five work-streams:

1. **Projects** — replace 6 placeholder projects with 5 real ones, each with its own data-driven detail page.
2. **Team** — rename 2 co-founders, remove 2 placeholder members (team = 2 people).
3. **Service page** — add a numbered 1-2-3 block under the hero (in Greek / abroad / underway).
4. **Email** — set `navergozk@gmail.com` everywhere.
5. **Images** — naming convention + placeholders for the 10 project photos (real ones arrive later).

All visible text is bilingual (`el.json` + `en.json`).

---

## 1. Projects

### Architecture
- New `src/data/projects.js` — single source for non-translatable data: ordered list of `{ slug, images: [img1, img2] }`. Consumed by `ProjectsPage`, `ProjectDetailsPage`, and the HomePage masonry so slug→images lives in one place.
- All project text in i18n under `projects.items.<slug>`: `title`, `category`, `intro`, `scope` (array), `sidebarScope`.
- Detail page is data-driven via `/project-details?project=<slug>` (mirrors existing `/team-details?member=N`). Validates slug against known list; defaults to first.

### `ProjectsPage.jsx`
Map over `projects` data (5 items) instead of the hardcoded 6-image array. Each card: first image, `category` tag, `title`, link to `/project-details?project=<slug>`.

### `ProjectDetailsPage.jsx` (rebuilt)
Strip the generic fake sections (overview / blockquote / design / 4-step process / urban-sustainability challenges / outcome / closing). New structure:
`main image (img1) → vessel name (title) → intro → "Scope of Works" heading + bullet list (scope[]) → second image (img2) → info sidebar → existing CTA`.

**Sidebar (only known fields):** Vessel name · Type of works (category) · Scope (sidebarScope). Drop Location / Client / Completion Date / Project Value.

### HomePage masonry
Expand from 4 to **5 slots** so all 5 projects appear; wire each to title + image + `/project-details?project=<slug>`. (Re-balance masonry grid classes as needed.)

### Project content

| Slug | Vessel | Category EL | Category EN |
|---|---|---|---|
| `andros-king` | Andros King | Ολική Ανακατασκευή | Total Reconstruction |
| `north-star` | North Star | Μετασκευή Σκάφους | Vessel Conversion |
| `golden-princess` | Golden Princess | Εργασίες Μετασκευής | Conversion Works |
| `laskaro` | Laskaro | Ετήσια Επισκευή & Δεξαμενισμός | Annual Repair & Drydocking |
| `anna-s` | Anna S | Ετήσια Επισκευή & Δεξαμενισμός | Annual Repair & Drydocking |

**Andros King** — scope EL: Ολική ανακατασκευή · Κατασκευές σιδήρου και αλουμινίου · Υπερκατασκευές · Χώροι ενδιαίτησης · Σκάλες και κυλιόμενες σκάλες · Όλα βάσει σχεδίων.
EN: Total reconstruction · Steel and aluminium fabrication · Superstructures · Accommodation spaces · Staircases and escalators · All works carried out to drawings.

**North Star** — scope EL: Ολική ανακατασκευή σκάφους σε πρύμα/πλώρα · Μείωση μήκους κατά 6 μέτρα από την πλώρη και 1 μέτρο από την πρύμνη, σύμφωνα με τις απαιτήσεις της πλοιοκτήτριας εταιρείας · Κατασκευή νέας γέφυρας · Όλες οι εργασίες βάσει σχεδίου και στους απαιτούμενους χρόνους.
EN: Complete fore-and-aft reconstruction · Length reduced by 6 m at the bow and 1 m at the stern, per the owner company's requirements · Construction of a new bridge · All works to drawing and within the required timeframes.

**Golden Princess** — scope EL: Εκτεταμένες εργασίες μετασκευής βάσει σχεδίου · Κατασκευή υποδοχής αριστερής άγκυρας · Κατασκευή κεντρικού κλιμακοστασίου · Επιμήκυνση καταπελτών · Διάφορες σωληνουργικές εργασίες.
EN: Extensive conversion works to drawing · Construction of the port anchor housing · Construction of the central staircase · Extension of the ramps · Various piping works.

**Laskaro** — scope EL: Προγραμματισμένη ετήσια επισκευή · Δεξαμενισμός · Σωληνουργικές εργασίες · Συντήρηση sea valves · Διάφορες εργασίες αποκατάστασης (hatch covers, top side, κατάστρωμα).
EN: Scheduled annual repair · Drydocking · Piping works · Sea-valve maintenance · Various restoration works (hatch covers, top side, deck).

**Anna S** — same scope as Laskaro (annual repair / drydocking).

Each project also gets a one-line `intro` (EL+EN) derived from its bullets and a short `sidebarScope` summary.

---

## 2. Team

Three locations × both languages: `home.team.members`, `about.team.members`, `team.members`.

- Member 1: `Παναγιώτης Ζάχος` → **`Χρήστος Ζάχος`** / `Panagiotis Zachos` → **`Christos Zachos`** (role unchanged: Συν-ιδρυτής & Διευθυντής).
- Member 2: `Κατζηλιέρης` → **`Νικόλαος Κατζηλιέρης`** / → **`Nikolaos Katzilieris`** (role unchanged: Συν-ιδρυτής & Τεχνικός Διευθυντής).
- Remove the 2 `Μέλος Ομάδας` placeholders (members 3 & 4):
  - `HomePage.jsx` / `AboutPage.jsx`: delete the 2 hardcoded member blocks each.
  - `TeamPage.jsx`: drop array entries `3` and `4`.
  - `TeamDetailsPage.jsx`: narrow valid members from `["1","2","3","4"]` to `["1","2"]`.
  - Remove dead `members.3` / `members.4` keys from all 3 sections in both locale files.

---

## 3. Service page 1-2-3 block

Insert a new section in `ServicePage.jsx` immediately after the breadcrumb/hero (before the existing Services grid), reusing the homepage `cs-process-item` pattern with `one.svg / two.svg / three.svg`.

New i18n under `service.delivery`: heading + 3 items.

- Heading EL: "Όπου κι αν Βρίσκεται το Πλοίο σας" / EN: "Wherever Your Vessel Is".
1. **Εργασίες στο Εσωτερικό** / "Works in Greece" — EL: Ολοκληρωμένες εργασίες ναυπηγοεπισκευής σε ναυπηγεία και εγκαταστάσεις σε όλη την Ελλάδα, με βάση μας το Πέραμα. / EN: Complete ship-repair works at shipyards and facilities throughout Greece, operating from our Perama base.
2. **Εργασίες στο Εξωτερικό** / "Works Abroad" — EL: Τα συνεργεία μας μετακινούνται σε ναυπηγεία του εξωτερικού για επισκευές και μετασκευές, όπου κι αν βρίσκεται το πλοίο σας. / EN: Our crews travel to overseas shipyards for repairs and conversions, wherever your vessel is.
3. **Εν Πλω** / "Underway" — EL: Επισκευές και εργασίες συντήρησης εν πλω, ενώ το πλοίο βρίσκεται σε υπηρεσία, για ελαχιστοποίηση του χρόνου ακινησίας. / EN: Repairs and maintenance carried out while the vessel is underway and in service, minimising downtime.

---

## 4. Email → navergozk@gmail.com

Replace literal emails (`example@email.com`, `info@email.com`) in both `mailto:` and visible text:
- `src/components/Header.jsx:107`
- `src/components/Footer.jsx:106`
- `src/components/SideHeader.jsx:38`
- `src/pages/ServiceDetailsPage.jsx:316`
- `src/pages/TeamDetailsPage.jsx:66-67`

---

## 5. Images

Convention: `/assets/img/projects/<slug>-1.jpg` and `<slug>-2.jpg` (10 files). Created now as copies of existing placeholder project images so nothing breaks; real photos later overwrite the same filenames — no code change needed.

---

## Cleanup

Remove now-dead i18n keys: `projectDetails.content.*`, `projectDetails.process.*`, `projectDetails.challenges.*`, `projectDetails.sidebar.*Value`, and the old numbered `projects.items.1..6`.

## Notes / non-blocking
- "top site" (client's wording) rendered as "top side" in EN; kept as-is in EL bullet.
- No git repo initialized, so the spec is not committed.
