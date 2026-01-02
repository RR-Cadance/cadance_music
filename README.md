# Cadance Marketing Site

A fast, static, mobile‑first site for the Cadance app.

- Live domain: https://cadance.music/
- Tech stack: Static HTML/CSS (no frameworks, no build tools) + minimal progressive enhancement JavaScript
- Hosting: GitHub Pages (root publishing), custom domain cadance.music

## Repository Structure

- Site entry: `index.html` (teacher‑focused homepage)
- Primary pages:
  - `publishers/index.html` (musicians / rights‑holder permissions page)
  - `publishers.html` (stub redirect to `/publishers/`)
  - `pricing/index.html` (pricing & plans)
  - `reddit/index.html` (campaign landing)
  - `barrenotes/index.html` (BarreNotes → Cadance landing)
  - `how-to.html` (how-to videos)
  - `music-training.html` (music training resources)
  - `partners.html` (partners)
  - `patrons/index.html` (patron directory)
  - `blog/index.html` (blog index)
  - `tempo-notes.html` (Tempo Notes resources and feature guides)
  - `faq.html` (FAQ)
  - `privacy.html` (privacy)
- Styles: Split CSS:
  - `styles.base.css` — tokens, reset, typography, utilities
  - `styles.layout.css` — header, nav, sections, hero, footer, breakpoints
  - `styles.components.css` — buttons, grids, cards, personas, folds, testimonials, modals, resource cards
  - `styles.parallax.css` — parallax panels, overlay scrim, CTA centering
- JavaScript: `script.js` (progressive enhancement: parallax + mobile menu toggle)
- Assets: screenshots and brand images in repo root
  - `cadance_Icon.png` (favicon 32×32)
  - `cadance_word_d.svg` (brand wordmark)
  - App images: `iPhoneLockScreen.png`, `iPhoneFav.png`, `iPhoneDetails.png`, `iPhoneDetails2.png`, `iPadVerticalLibrary.png`
- GitHub Pages: `CNAME`, `.nojekyll`

## Local Development

No build step required. Open `index.html` directly in a browser, or serve locally with any static server.

Then visit http://localhost:8080 (or your chosen port).

## Information Architecture

- Home — `index.html` (teacher-focused)
- Musicians / rights holders — `publishers/index.html` (permissions + partnership messaging)
- Pricing — `pricing/index.html` (3 tiers + FAQs + App Store CTA)
- Campaign landers — `reddit/index.html`, `barrenotes/index.html` (tight funnel pages)

## Navigation and Linking

- Header on all pages: consistent cross-page navigation
- Footer on all pages: consistent cross-page navigation
- Anchor offsets are handled via CSS `scroll-margin-top` for header height

## Styles and Components

- CSS is modular:
  - `styles.base.css`: design tokens, reset, container, typography, links, focus, skip link, section base, reduced motion
  - `styles.layout.css`: header/navigation, section spacing, hero layout, footer, themed backgrounds, breakpoints, header/logo baseline tweaks
  - `styles.components.css`: buttons, features/benefits grids, cards, personas (aria-checked selection visuals), folds (plus‑to‑X), testimonials + modal, resource cards
  - `styles.parallax.css`: parallax panels (CSS variable amplitude), overlay scrim, card centering, CTA centering
- Mobile‑first with media queries at 600px and 1024px
- Focus‑visible styles and reduced‑motion support

## Accessibility and Performance

- Semantic landmarks and skip link to `#main`
- Focus-visible outlines, keyboard navigable header and footer
- Reduced motion respected
- No external fonts
- One third-party script is used: Microsoft Clarity (disclosed in `privacy.html`)
- Images include width/height to prevent layout shift
- Non‑hero images use `loading="lazy"` and `decoding="async"`
- CSS smooth scrolling and safe‑area padding for mobile

## SEO and Social

Per‑page meta in each HTML head (Open Graph + Twitter).

- Home (`index.html`)
  - Title: Cadance — The music app for dance teachers
  - Description: Fast access, class‑friendly controls, rock‑solid playback. Keep the class moving.
  - OG/Twitter image: `iPadVerticalLibrary.png`
- Publishers (`publishers/index.html`)
  - Title: Feature your album in Cadance — Product photography and store listings
  - Description: Transparent, controlled, revocable permissions. Proper credit.
  - OG/Twitter image: `iPhoneLockScreen.png`
- Tempo Notes (`tempo-notes.html`)
  - Title: Cadance Tempo Notes — Music resources and feature guides
  - Description: Curated music education resources and Cadance feature notes.
  - OG/Twitter image: `cadance_hero_33.webp`

## CTAs and Contacts

- Contact: `info@cadance.music`

All CTAs are mailto links with helpful subjects.

## Deployment on GitHub Pages

Pages is configured for root publishing from the `main` branch with custom domain `cadance.music`.

Checklist:
1) Ensure `CNAME` contains exactly:
   ```
   cadance.music
   ```
2) Ensure `.nojekyll` exists (empty file).
3) In GitHub repo Settings → Pages:
   - Source: Deploy from a branch
   - Branch: main / root
   - Custom domain: cadance.music
   - Enforce HTTPS: enabled

Pushing to `main` updates the live site after GitHub Pages rebuilds.

## Maintenance Workflow

- Update content: edit the relevant HTML page directly.
- Update styles/tokens: edit `styles.base.css` (tokens), `styles.layout.css` (structure), `styles.components.css` (UI components), `styles.parallax.css` (effects)
- Update images: replace files or update `src`/`width`/`height` attributes in HTML
- JavaScript: referenced for progressive enhancement (parallax + mobile menu toggle).

## QA Checklist before commit

- View at 320px, 768px, 1280px (no horizontal scroll; balanced layout)
- Keyboard navigation: skip link to `#main`; visible focus states
- Motion off check: `@media (prefers-reduced-motion: reduce)` produces no unexpected animations
- Images have `width`/`height`; non‑hero images lazy‑load
- Meta/OG/Twitter present and correct per page; favicons resolve
- No external font/network requests
- All mailto links open with correct address and subject
- Cross‑links: header/footer links work among Home, White Label, and Publishers

## Troubleshooting

- Custom domain not active: verify `CNAME`, DNS A records, and HTTPS enforcement in GitHub Pages Settings
- Stale assets: CDN may cache; perform a hard refresh or bump asset filename if needed
- 404 after deploy: confirm Pages branch/source and that `index.html` is at repo root
- Redirects: `publishers.html` should forward to `/publishers/`

## Status

Content + styling are intentionally frozen at this state.
