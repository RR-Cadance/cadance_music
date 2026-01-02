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
├── patrons/
│   └── index.html             # Patron directory
├── tempo-notes.html           # Tempo Notes: resources and Cadance features guide
├── pricing/
│   └── index.html             # Pricing & plans (subscription tiers + FAQs)
├── reddit/
│   └── index.html             # Reddit campaign landing page (App Store CTA)
├── barrenotes/
│   └── index.html             # BarreNotes → Cadance redirect/landing
├── blog/
│   ├── index.html             # Blog index
│   └── why-cadance-is-a-subscription/
│       └── index.html         # Subscription narrative post
├── privacy.html               # Privacy policy
├── faq.html                   # Frequently asked questions
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
├── Pricing preview (full 3-tier grid)
├── Social proof (teacher testimonials)
└── Compact FAQ

Pricing (pricing/index.html)
├── Hero (overview)
├── Plans (3 tiers)
├── Clarifying boxes (all-features-included + business expense note)
└── Pricing FAQ + App Store CTA

Tempo Notes (tempo-notes.html)
├── Hero (parallax)
├── Resources (cards, external links)
├── Interlude hero (cadance_hero_34.webp)
└── Cadance features guide (cards: Tempo changing demonstration, Importing music, How favorites work, Mastering repeats)

Publishers (publishers/index.html)
├── Hero (CTA)
├── Benefits
├── Styles covered (disciplines)
├── Transparency (scope/regions/revocation)
├── Process (ordered list)
├── Showcase (images)
└── Contact (permissions mailto)

Footer (all pages)
└── Footer navigation (Home → Musicians → How To → Music Training → Partners → FAQ → Privacy) + copyright
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
