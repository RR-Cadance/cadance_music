# Architecture: Cadance Marketing Site

## System Architecture
Static multi-page website with no backend dependencies, optimized for GitHub Pages hosting.

## Source Code Structure
```
/
├── index.html                 # Teacher‑focused homepage
├── publishers/
│   └── index.html             # Musicians / rights holders page
├── publishers.html            # Meta-refresh safety redirect → /publishers/
├── how-to.html                # How-to video demos
├── music-training.html        # Music training resources
├── partners.html              # Partners page
├── pricing/
│   └── index.html             # Pricing & plans (subscription tiers + FAQs)
├── reddit/
│   └── index.html             # Reddit campaign landing page (App Store CTA)
├── barrenotes/
│   └── index.html             # BarreNotes → Cadance redirect/landing
│   └── BarreNotesPosts/
│       └── index.html         # Private: BarreNotes social proof screenshots gallery
├── blog/
│   ├── index.html             # Blog index
│   ├── whats-new-in-cadance-6/
│   ├── teacher-notebook/
│   ├── perfect-practice-passes/
│   └── meet-ran-bagno/
├── privacy.html               # Privacy policy
├── faq.html                   # Frequently asked questions
├── forms/
│   └── request-art/           # Art-note request form (noindex)
│       ├── index.html         #   Form UI + Turnstile widget + status
│       ├── images/            #   Art preview PNGs (IMG_0317–0320)
│       └── notes/             #   The four .cadnote deliverables (public)
├── worker/                    # Standalone Cloudflare Worker backend for the form
│   ├── src/index.js           #   routing + CORS
│   ├── src/requestArt.js      #   POST /request-art pipeline
│   ├── src/turnstile.js       #   Turnstile server verify
│   ├── src/email.js           #   fetch + attach .cadnote, send via send_email
│   ├── src/store.js           #   KV capture (ART_REQUESTS, 90-day TTL)
│   ├── src/util.js            #   JSON/CORS/validation helpers
│   └── wrangler.toml          #   KV + send_email bindings, vars, observability
├── styles.base.css            # Tokens, reset, typography, utilities
├── styles.layout.css          # Header/nav, sections, hero, footer, breakpoints
├── styles.components.css      # Buttons, grids/cards, personas, folds, testimonials, modals, resource cards
├── styles.parallax.css        # Parallax panels, overlay scrim, CTA centering
├── script.js                  # Progressive enhancement (parallax + mobile menu toggle)
├── README.md                  # Documentation and maintenance guide
├── CNAME                      # GitHub Pages custom domain config
├── .nojekyll                  # GitHub Pages Jekyll bypass
└── assets (repo root images)
    ├── cadance_Icon.png
    ├── cadance_word_d.svg
    ├── og_home_1200x630.webp
    ├── og_publishers_1200x630.webp
    ├── og_tempo_1200x630.webp
    ├── cadance_hero_*.webp/.png
    ├── iPhoneDetails*.PNG
    ├── iPhoneFav.PNG
    ├── iPhoneLibrary*.PNG
    ├── iPhoneVertLock*.PNG
    ├── iPadHorzDetails*.PNG
    └── iPadVertDetails*.PNG
```

## Key Technical Decisions

### HTML Structure
- Semantic landmarks on every page: <header>, <main>, <section>, <footer>
- Accessibility‑first: skip link to [#main](index.html:1), proper heading hierarchy, ARIA labels
- Multi‑page layout: cross‑linked pages with consistent header/footer
- Performance optimized: proper image dimensions, lazy loading for non‑hero images, async decoding

### CSS Architecture
- Mobile‑first responsive design; progressive enhancement via media queries
- Design token system: CSS custom properties for colors, typography, spacing
- Fluid typography via clamp()
- Modern layout with CSS Grid/Flexbox
- Accessibility: focus‑visible styles, reduced motion support, WCAG AA contrast
- Components: features grid, feature cards, personas grid, teaser card, shared showcase grid
- In-situ hero compositing pipeline:
  - screen-corner annotator with per‑corner radii
  - YAML-driven processor (v6) with device-space rounding and optional gloss
  - Review contact sheet at shots.html

### Component Relationships
```
Header (sticky)
├── Brand logo (cadance_word_d.svg)
└── Primary navigation (pages only; consistent across pages):
    • For Teachers (index.html)
    • BarreNotes → Cadance (barrenotes/)
    • For Musicians (publishers/)
    • How To (how-to.html)
    • Music Training (music-training.html)
    • Partners (partners.html)
    • Pricing (pricing/)
    • Blog (blog/)
    • Contact (mailto)

Home (index.html)
├── Hero (headline, subhead, CTA)
├── New in Cadance 7.5 (Search, simpler start, imports, remote control)
├── Notebook workflow (linked music, Focus Player screenshot)
├── Features grid (cards)
├── Personas grid (who it’s for)
├── Interludes (parallax panels)
└── Contact CTAs

Reddit Landing (reddit/index.html)
├── Header/nav (same site navigation)
├── Hero (headline + App Store CTA)
├── Secondary CTA (Pricing)
├── Demo video block
├── Icon benefits (4 tiles)
├── Pricing preview (Day Passes, Spark, and Artist grid)
├── Social proof (teacher testimonials)
└── Compact FAQ

Pricing (pricing/index.html)
├── Hero (overview)
├── Access options (Day Passes, Perfect Practice Passes, Spark, Artist)
├── Clarifying boxes (all-features-included + business expense note)
└── Access FAQ + App Store CTA (no displayed monetary amounts)

Publishers (publishers/index.html)
├── Hero (CTA)
├── Benefits
├── Styles covered (disciplines)
├── Transparency (scope/regions/revocation)
├── Process (ordered list)
├── Showcase (images)
└── Contact (permissions mailto)

Footer (all pages)
└── Footer navigation (Teachers → Features → BarreNotes → Musicians → How To → Music Training → Partners → Pricing → Blog → FAQ → Privacy) + copyright
```

## Critical Implementation Paths

### Responsive Breakpoints
- Base (0–599px): single column, stacked layout
- Medium (600–1023px): larger navigation, 2‑column showcase
- Large (1024px+): hero 2‑column, 3‑column showcase

### Performance Strategy
- No external dependencies: system fonts, no CDN requests
- Optimized images: correct dimensions; lazy load non‑hero visuals
- Minimal JavaScript: progressive enhancement for parallax + mobile menu toggle
- Static hosting: GitHub Pages with custom domain and HTTPS

### Accessibility Implementation
- Skip navigation: visible when focused, points to main content
- Keyboard navigation: all interactive elements reachable and visible focus
- Screen reader support: semantic HTML, alt text, ARIA where applicable
- Motion sensitivity: respects prefers‑reduced‑motion
- Color contrast: WCAG AA compliant combinations

## Design Patterns in Use

### CSS Patterns
- Design tokens: centralized via :root
- Fluid design with clamp()
- Progressive enhancement without JS
- Grid/Flex layouts for cards and galleries

### HTML Patterns
- Semantic structure across pages
- Anchor navigation with scroll‑margin offsets
- Per‑page metadata for SEO/OG

## Integration Points
- GitHub Pages: automatic deployment from main
- Custom domain: cadance.music via CNAME configuration
- Email integration: mailto links for CTAs
  - Contact: info@cadance.music
- Social sharing: per‑page Open Graph and Twitter Card meta tags

### Request-art form backend (Cloudflare Worker)
The `/forms/request-art/` page is the one interactive feature: it posts to a standalone Worker, `cadance-art-request` (`worker/` in this repo, deployed to `https://cadance-art-request.davidaus.workers.dev`). This is the site's only backend and the only place personal data is submitted.

- **Bindings**: `ART_REQUESTS` (KV, 90-day TTL capture), `EMAIL` (`[[send_email]]` Cloudflare Email Service), secrets `TURNSTILE_SECRET` + `ADMIN_TOKEN`. Vars hold `ALLOWED_ORIGIN`, `EMAIL_FROM`, and the two email-channel `.cadnote` URLs.
- **Pipeline**: honeypot → field validation (name, email, optional E.164 phone) → Turnstile verify → KV store → email two attachments via `ctx.waitUntil`.
- **Endpoints**: `POST /request-art` (form), `GET /health`, `GET /admin/requests` (read-only list of captured requests, gated by `ADMIN_TOKEN` via `X-Admin-Token` header or `?token=`).
- **Channel split**: Jazz Dancer + Prodigal Son by email (small enough for the 5 MiB cap); Ballet 5th + Ballet pair reserved for future SMS.
- **Not to be confused with** the iOS app's separate `cadance-init` Worker, which lives in the app repo and handles Day/Practice Passes.
- Setup + DNS steps are in `worker/README.md` and the "Request-art fulfilment" section of `context.md`.

## Private / Internal Pages
- [`barrenotes/BarreNotesPosts/index.html`](barrenotes/BarreNotesPosts/index.html:1)
  - Not linked from the public site navigation.
  - `noindex,nofollow` meta.
  - Crawlers discouraged via `Disallow: /barrenotes/BarreNotesPosts/` in [`robots.txt`](robots.txt:1).
