# Technology Stack: Cadance for Marketing Site

## Core Technologies
- HTML5: Semantic markup with accessibility features
- CSS3: Modern layout with Grid, Flexbox, and custom properties (design tokens)
- JavaScript: Progressive enhancement only (parallax); site remains fully usable without JS
- SVG/PNG: Vector logo and optimized raster screenshots

## Development Setup
- No build tools: Direct file editing and browser preview
- Local development: Any static server (e.g., Python http.server)
- Version control: Git with GitHub repository
- Deployment: GitHub Pages automatic deployment (root)

## Technical Constraints
- Static hosting only: No server-side processing, no dynamic routes
- No external dependencies for UI/frameworks: Self-contained codebase, system fonts only
- No JavaScript frameworks: Vanilla HTML/CSS; JS referenced by pages for progressive enhancement only
- GitHub Pages: Jekyll disabled via .nojekyll
- Mobile-first requirement: Works on all device sizes

## Dependencies
- None: Completely self-contained
- System fonts: No web font loading
- Local assets: All images/resources in repo root
- Native browser APIs: Standard HTML5/CSS3 features only

## Browser Support
- Modern browsers: Chrome, Firefox, Safari, Edge (latest)
- Mobile browsers: iOS Safari, Chrome Mobile, Samsung Internet
- Accessibility: Screen readers, keyboard navigation
- Progressive enhancement: Pages fully usable without JS

## Performance Characteristics
- Load time: Sub-2 second target on 3G
- Bundle size: Minimal CSS/JS (JS unused), optimized images
- Caching: Static assets with browser caching
- CDN: GitHub Pages global distribution

## Tool Usage Patterns

### Development Workflow
1. Edit HTML/CSS directly
2. Preview locally with a static server
3. Test responsive design at 320/768/1280px
4. Validate accessibility (keyboard-only and focus-visible)
5. Commit and push to GitHub for deployment

### Asset Management
- Images: PNG/SVG/WebP files in repository root
- Optimization: Compress images before commit
- Naming: Descriptive filenames (iPhone..., iPad..., cadance_)
- Alt text: Required and descriptive
- Social previews: 1200×630 WebP assets at repo root (og_home_1200x630.webp, og_publishers_1200x630.webp, og_white_label_1200x630.webp, og_tempo_1200x630.webp); reference via absolute URLs under https://cadance.music/ in per‑page og:image and twitter:image.
- Photoreal pipeline:
  - Prompts in midjourney-commands-batch-01-*.txt
  - Annotate pins+radii at tools/screen-corner-annotator.html
  - Define per-image YAML in processing-request.yml
  - Compose via tools/process_images_v6.py (device-space rounding, backlit UI, adjustable gloss)

### CSS Architecture
- Split CSS into modular files, loaded in order: styles.base.css → styles.layout.css → styles.components.css → styles.parallax.css
- Design tokens: CSS custom properties in :root (added --brand-red #E8131A for UI accents)
- Mobile-first: Base styles with breakpoints at 600px and 1024px
- Components: features-grid, feature-card, personas-grid, teaser-card, showcase-grid
- Accessibility: :focus-visible styles, prefers-reduced-motion support
- Personas selection styling: aria-checked="true"; default = tinted background with near-white text; selected = near-white background, dark text, brand-red border, large overlapping checkmark overlay
- CTA centering: hero and bottom interlude headings/subheads and actions centered via CSS overrides
- Smooth scrolling and anchor offset: CSS scroll-behavior + scroll-margin-top
- Header stabilization (mobile): lock header height to var(--header-h); .primary-nav min-width: 0 with overflow-y: hidden and overscroll-behavior: contain; touch-action: pan-y to prevent horizontal drift; .header-inner overflow-x: hidden; tighter mobile gaps and reduced link padding/font-size.
- Footer navigation: consistent footer nav across all pages ordered Home → Music Makers → Tempo Notes → White Label → FAQ → Privacy.
- Top navigation: pages only (no in‑page anchors); identical across pages — Home, Music Makers, Tempo Notes, Contact; brand wordmark links to the page URL.
- Testimonials: modal title class .testimonial-title uses var(--brand) teal; modal star color matches cards (#FBBF24).

### JavaScript Strategy
- Progressive enhancement: parallax scrolling for hero/interlude panels
- script.js loaded as a module on all pages; effect disabled for prefers‑reduced‑motion
- Pages remain fully usable with JS disabled; no hard dependencies
- Future enhancements must preserve full no‑JS functionality

## Deployment Pipeline
1. Source: GitHub repository main branch
2. Build: None (static files)
3. Deploy: GitHub Pages automatic
4. Domain: Custom domain (CNAME configured externally if used)
5. SSL: GitHub Pages automatic HTTPS

## Monitoring and Analytics
- Performance: Manual checks via browser dev tools
- Accessibility: Manual checks and screen readers
- Visual QA: debug/debug_{id}_detect.png and debug/debug_{id}_composited.png after each run
- Analytics: Microsoft Clarity (project ID: t3xw7pzwu1)
- Error tracking: Browser console during QA

## Security Considerations
- HTTPS via GitHub Pages
- Content security: No third-party fonts; site assets are local. One third-party script is used: Microsoft Clarity.
- Privacy: Microsoft Clarity is disclosed in the privacy policy.
- Contact: mailto links only (no form processing)

## Source Layout (current)
- index.html — Teacher-focused homepage
- reddit/index.html — Campaign landing page (single-purpose App Store CTA)
- barrenotes/index.html — BarreNotes redirect/landing page
- pricing/index.html — Pricing & plans
- blog/index.html — Blog index
- blog/why-cadance-is-a-subscription/index.html — Subscription narrative
- tempo-notes.html — Music resources and Cadance features guide (includes interlude hero cadance_hero_34.webp)
- publishers/index.html — Rights-holder permissions
- publishers.html — Meta-refresh redirect to /publishers/
- privacy.html — Privacy policy
- faq.html — Frequently asked questions
- styles.base.css — Tokens, reset, typography, utilities
- styles.layout.css — Header/nav, sections, hero, footer, breakpoints, themed backgrounds
- styles.components.css — Buttons, grids/cards, personas, folds, testimonials, modals, resource cards
- styles.parallax.css — Parallax panels, overlay scrim, CTA centering
- script.js — Progressive enhancement (parallax, selectable personas); referenced by pages
- README.md — Documentation and maintenance guide
- .nojekyll — GitHub Pages Jekyll bypass
- Assets — PNG/SVG images in repo root
