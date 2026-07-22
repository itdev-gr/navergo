# Navergo — Delivery Handoff Notes

Status as of 2026-06-10. The site builds clean (`npm run build`), lints clean (`npm run lint`),
and has been smoke-tested in the browser (desktop 1440px and mobile 390px, EL + EN).

## Items that need input from the client before/at launch

1. **Phone number** — the template's fake US number `(406) 555-0120` was removed everywhere.
   The header, footer, side menu and contact widgets currently show the e-mail instead.
   When the client provides a real phone, add it back in:
   `src/components/Footer.jsx`, `src/components/Header.jsx`, `src/components/SideHeader.jsx`,
   `src/pages/ServiceDetailsPage.jsx`, `src/pages/TeamDetailsPage.jsx`.

2. **Production domain** — SEO files assume `https://www.navergo.gr`. If the real domain
   differs, update: `index.html` (canonical, og:url, og:image, JSON-LD), `public/robots.txt`,
   `public/sitemap.xml`.

3. **Contact / newsletter forms** — no backend needed for either. The contact form
   (Contact page + homepage) submits via Web3Forms; the access key in
   `src/components/ContactForm.jsx` routes messages to the inbox registered at
   web3forms.com. The footer newsletter still uses FormSubmit delivering to
   `navergozk@gmail.com` — **its first submission triggers a one-time activation e-mail
   from formsubmit.co that the client must confirm once** (endpoint constant in
   `src/components/Footer.jsx`).

4. **Social media links** — footer/hero/team social icons point to the platform homepages
   (facebook.com, linkedin.com, x.com, instagram.com). Replace with the company's real
   profile URLs, or remove icons for networks they don't use.

5. **Testimonials** — the template's fake "Sarah Johnson, Los Angeles" testimonials were
   removed (sections deleted from HomePage and ServicePage). If the client gets 1–2 real
   client quotes (e.g. from Neptune Lines / Lotus Shipping), the section can be restored
   from git history.

6. **Domain e-mail** — `navergozk@gmail.com` is used throughout. A domain address
   (e.g. info@navergo.gr) would look more professional; it's a find-replace away.

7. **Legal pages** — `/privacy-policy` and `/terms` were written as solid GDPR-compliant
   defaults (EL + EN, content in `src/i18n/locales/*.json` under `legal`). Have the client
   (or their lawyer) review the retention and company details.

## Known remaining technical debt (non-blocking)

- Language is stored in localStorage; both languages share one URL, so Google indexes only
  one language per URL and hreflang isn't possible. Proper fix is `/el/...` + `/en/...`
  route prefixes — a larger change, deferred.
- Images were recompressed (52 MB → 10 MB) but are still JPG/PNG; converting to WebP with
  `<picture>` fallbacks would save another ~30%.
- Main JS bundle is 452 KB (133 KB gzip) after route splitting; the i18n JSON and Swiper/GSAP
  globals dominate. Acceptable for launch.
- The vendored template CSS (`public/assets/css/style.css`, 117 KB) contains unused rules
  (and at least one unclosed media-query brace, worked around in `src/index.css`).
