# Repetitive Tasks: Cadance Marketing Site

## JavaScript Cleanup Task
**Last performed:** 2025-08-11  
**Status:** Completed  
**Files to modify:**
- `/script.js` — Remove legacy tab functionality and unused code

**Description:**  
Legacy UI code from the original single-page/tabbed interface has been removed. The site is fully functional without JavaScript. `script.js` is retained only as a placeholder for future progressive enhancement and is not referenced by any page.

**Steps (for future audits):**
1. Review `script.js` and confirm only placeholder comments remain.
2. Verify no `<script>` tags are present in:
   - [`index.html`](index.html:1)
   - [`white-label.html`](white-label.html:1)
   - [`publishers/index.html`](publishers/index.html:1)
3. Confirm no console errors on load and navigation.
4. Validate that all interactions (anchors, navigation, focus) work with JS disabled.
5. If new enhancements are introduced, ensure progressive enhancement and no hard dependency on JS.

**Important considerations:**
- The site must continue to work without JavaScript (progressive enhancement).
- Preserve accessibility: keyboard navigation, focus-visible, skip link.
- Test on mobile and desktop after any changes.
- Maintain zero external script requests.

**Expected outcome:**
- Clean, maintainable codebase with no unused JS.
- No functional impact on the static multi-page site.
- Improved performance and reliability.


## Asset Update Task
**Description:** Process for updating brand assets and screenshots.

**Files to modify:**
- Image files in repository root
- Pages using images:
  - [`index.html`](index.html:1)
  - [`white-label.html`](white-label.html:1)
  - [`publishers/index.html`](publishers/index.html:1)

**Steps:**
1. Replace image files with the same filenames to maintain links, or update `src` attributes where needed.
2. If dimensions change, update `width`/`height` attributes in HTML to prevent layout shift.
3. Verify alt text remains accurate and descriptive per image context.
4. Confirm non-hero images use `loading="lazy"` and `decoding="async"`.
5. Test layout stability and performance at 320/768/1280px.
6. Commit changes with a descriptive message (include file list and purpose).

**Important considerations:**
- Always maintain `width`/`height` attributes to prevent layout shift.
- Optimize images before committing.
- Keep filenames descriptive (iPhone..., iPad..., cadance_...).
- Ensure WCAG AA contrast and accessible alt text.

**Expected outcome:**
- Updated visuals with no regressions in performance or layout.
- Consistent rendering across pages and breakpoints.
## UI Polish: CTAs, Personas, Folds, Publishers Spotlight
**Last performed:** 2025-08-17  
**Status:** Completed  
**Files to modify:**
- [index.html](index.html:1) — Hero CTA label; duplicate CTA under bottom interlude; personas heading rename
- [styles.css](styles.css:1) — CTA centering rules; personas-grid default/selected states; --brand-red token; folds spacing/inset for Home (#dance-styles) and Publishers (#styles); large overlapping checkmark
- [publishers/index.html](publishers/index.html:1) — Replace UL/LI within “Music we will spotlight” with paragraphs

**Steps:**
1. Update hero CTA label in [index.html](index.html:61) to “Try the BarreNotes sequel”; duplicate same CTA under the “Everything you need, nothing you don’t” interlude, inside the container, above the subhead.
2. Center hero and bottom interlude headings/subheads and CTA buttons by adding rules in [styles.css](styles.css:1):
   - .section-hero .hero-copy { text-align: center; }
   - .section-hero .hero-copy .actions { display: flex; justify-content: center; }
   - .parallax-panel--interlude .parallax-fg .container { text-align: center; }
   - .parallax-panel--interlude .parallax-fg .container .actions { display: flex; justify-content: center; }
3. Personas visuals in [styles.css](styles.css:311):
   - Add token --brand-red: #E8131A; under :root.
   - Default state .personas-grid li: solid border, tinted background (var(--surface)), centered label (display: grid; place-items: center;), near-white text (var(--text)), heavier weight (700).
   - Selected state .personas-grid li[aria-checked="true"]: near-white background (var(--text)), dark text (var(--bg)), 2px solid var(--brand-red), weight 800, large overlapping checkmark via ::after positioned at top-right and colored var(--brand-red).
4. Folds spacing and inset:
   - Home: In [styles.css](styles.css:870), for #dance-styles .folds details: remove extra bottom padding and ensure last child has no bottom margin; inset description text with padding-left: var(--space-2); margin-top: 0.25rem;.
   - Publishers: Mirror the same rules for #styles .folds details and #styles .folds details > p.
5. Publishers spotlight bullets to paragraphs in [publishers/index.html](publishers/index.html:101):
   - Replace one-line <ul><li>…</li></ul> under each category with a single <p>…</p> to match Home style.

**Important considerations:**
- Accessibility: preserve semantic headings, focus-visible, and adequate contrast.
- Progressive enhancement: personas selection is keyed off aria-checked="true"; optional JS can toggle state later without breaking no-JS.
- Consistency: shared inset/spacing for Home and Publishers; CTA alignment consistent across hero and interlude.

**Expected outcome:**
- CTAs centered at top and bottom of the home page.
- Personas controls: heavier labels, centered text, solid rounded borders; clear default/selected visuals with brand-red checkmark.
- Folds in Home and Publishers: compact spacing, inset descriptions with no trailing whitespace.
- Publishers “Music we will spotlight” uses paragraphs instead of bullets, visually matching Home.
## Header/Nav Stabilization (Mobile)
**Last performed:** 2025-08-18  
**Status:** Completed  
**Files to modify:**
- [styles.layout.css](styles.layout.css:1) — header fixed height, nav stability on mobile

**Steps:**
1. In [.primary-nav](styles.layout.css:23), add min-width: 0; overflow-y: hidden; overscroll-behavior: contain; touch-action: pan-y; keep overflow-x: auto.
2. In mobile media query (max-width: 599px), set [.site-header](styles.layout.css:108) and [.header-inner](styles.layout.css:112) height/min-height to var(--header-h), align-items: center, padding-block: 0, and column-gap: var(--space-1); reset [.brand-wordmark](styles.layout.css:120) top to 0.
3. Remove margin-left from [.primary-nav](styles.layout.css:122) at mobile, ensure min-width: 0; reduce [.primary-nav a](styles.layout.css:132) vertical padding and font-size.
4. Add overflow-x: hidden to [.header-inner](styles.layout.css:14) and overscroll-behavior: contain to [.site-header](styles.layout.css:4); disable momentum scrolling for mobile nav (-webkit-overflow-scrolling: auto).

**Important considerations:**
- Prevent vertical and horizontal movement under finger on touch devices.
- Preserve keyboard navigation and focus-visible states.
- Keep header height consistent with var(--header-h).

**Expected outcome:**
- Header/nav remain stationary on mobile; whitespace after logo collapses appropriately.

---

## Footer Navigation + Privacy/FAQ Pages
**Last performed:** 2025-08-18  
**Status:** Completed  
**Files to modify:**
- [index.html](index.html:1)
- [tempo-notes.html](tempo-notes.html:1)
- [white-label.html](white-label.html:1)
- [publishers/index.html](publishers/index.html:1)
- [privacy.html](privacy.html:1)
- [faq.html](faq.html:1)

**Steps:**
1. Add footer nav region (before copyright) with links ordered: Home → Publishers → Tempo Notes → White Label → FAQ → Privacy; mark current page with aria-current.
2. Create [privacy.html](privacy.html:1) with clear, static policy; reuse site header/footer.
3. Create [faq.html](faq.html:1) with collapsible details and links to relevant pages.
4. Ensure relative paths are correct in subdirectory pages (e.g., Publishers uses ../).

**Important considerations:**
- Use <nav aria-label="Footer"> for accessibility.
- Reuse existing footer styles (no new CSS required).
- Keep link order consistent across all pages.

**Expected outcome:**
- Footer provides consistent cross-site navigation; Privacy and FAQ pages available and linked.

---

## Tempo Notes — Features Guide Section
**Last performed:** 2025-08-18  
**Status:** Completed  
**Files to modify:**
- [tempo-notes.html](tempo-notes.html:1)

**Steps:**
1. Add interlude/hero panel using [cadance_hero_34.webp](cadance_hero_34.webp:1) titled “Cadance features guide”.
2. Move and rename “My tempo changing demonstration” to “Tempo changing demonstration.” within the new Features Guide section.
3. Add placeholders: “Importing music”, “How favorites work,” and “Mastering repeats”.

**Important considerations:**
- Keep interlude image lazy-loaded with decoding="async".
- Maintain semantic heading levels and parallax structure consistency.

**Expected outcome:**
- Dedicated Cadance features guide with initial placeholders and the tempo demonstration.

---

## Personas Additions and CTA Mailto Update
**Last performed:** 2025-08-18  
**Status:** Completed  
**Files to modify:**
- [index.html](index.html:253)

**Steps:**
1. Insert “Wedding / first dance tutor” and “Ballroom / social dance” after “Rehearsal director” in the personas list.
2. Update “Tell Cadance what I need” CTA mailto to info.rondo@cadance.music.

**Important considerations:**
- Preserve list order and spacing rules in personas.
- Ensure mailto subject/body remain URL-encoded.

**Expected outcome:**
- Expanded personas coverage and updated contact alias for the needs CTA.

## Social Previews (.webp) Update
**Last performed:** 2025-08-20
**Status:** Completed
**Files to modify:**
- [index.html](index.html)
- [white-label.html](white-label.html)
- [publishers/index.html](publishers/index.html)
- [tempo-notes.html](tempo-notes.html)
- [faq.html](faq.html)
- [privacy.html](privacy.html)

**Steps:**
1. Ensure 1200×630 WebP assets exist at repo root with these names:
   - og_home_1200x630.webp
   - og_publishers_1200x630.webp
   - og_white_label_1200x630.webp
   - og_tempo_1200x630.webp
2. Update each page’s meta to absolute URLs on the production domain (CNAME: cadance.music):
   - og:image and twitter:image → https://cadance.music/og_…_1200x630.webp
3. Verify with social debuggers (Open Graph/Twitter validators) and re-scrape after deploy.

**Important considerations:**
- Keep assets exactly 1200×630 for best card rendering.
- Prefer WebP for small file size and quality.
- Place assets at repo root so absolute URLs resolve predictably.

**Expected outcome:**
- Consistent, lightweight social previews across all pages using absolute WebP URLs.

---

## Testimonial Refinements (Cards + Modals)
**Last performed:** 2025-08-20
**Status:** Completed
**Files to modify:**
- [index.html](index.html)
- [styles.components.css](styles.components.css)

**Steps:**
1. Cards: Turn key phrases into links that open full modals via :target:
   - Anneliese → “always there and reliable” → href="#t1"
   - Rosemary → “having a pianist” → href="#t2"
2. Remove inline “Read full testimonial” links under blurbs to tighten layout.
3. Card figcaptions: show only the author’s name (remove role/URL/company).
4. Modals:
   - Title (h3) set to the same key phrase; add class testimonial-title.
   - Stars in modal match card color (gold/yellow).
   - Footer shows name on first line and role/URL on second line, no dash, left-aligned, tight spacing.
5. CSS in [styles.components.css](styles.components.css):
   - .modal-dialog h3.testimonial-title { color: var(--brand); }
   - .modal .rating .star { color: #FBBF24; filter: drop-shadow(0 1px 1px rgba(0,0,0,0.35)); }
   - .modal blockquote footer { margin: 0; }

**Important considerations:**
- Preserve accessibility: visible focus, correct aria roles on modal containers, :target close link to backdrop.
- Keep visual consistency: card and modal star colors match; titles use brand teal.

**Expected outcome:**
- Cleaner cards that link from the key phrase to the modal.
- Modals with teal titles, gold stars, and compact author footers (name + role/URL).

## SEO Improvements: Meta Keywords and Favicon Implementation
**Last performed:** 2025-08-22
**Status:** Completed
**Files to modify:**
- All HTML pages: [index.html](index.html), [publishers/index.html](publishers/index.html), [white-label.html](white-label.html), [tempo-notes.html](tempo-notes.html), [privacy.html](privacy.html), [faq.html](faq.html)
- New favicon files: favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png, android-chrome-192x192.png, android-chrome-512x512.png
- New manifest: [site.webmanifest](site.webmanifest)

**Description:**
Comprehensive SEO improvements including targeted meta keywords for each page's audience and complete favicon implementation across all device types and sizes.

**Steps:**
1. Create multiple favicon sizes from cadance_Icon.png using sips command:
   - `sips -z 16 16 cadance_Icon.png --out favicon-16x16.png`
   - `sips -z 32 32 cadance_Icon.png --out favicon-32x32.png`
   - `sips -z 180 180 cadance_Icon.png --out apple-touch-icon.png`
   - `sips -z 192 192 cadance_Icon.png --out android-chrome-192x192.png`
   - `sips -z 512 512 cadance_Icon.png --out android-chrome-512x512.png`
2. Create site.webmanifest with PWA configuration and theme colors.
3. Add targeted meta keywords to each page:
   - Home: Dance teacher keywords (dance music app, tempo control, ballet music app, etc.)
   - Publishers: Rights holder keywords (music licensing, album artwork permissions, etc.)
   - White Label: Organization keywords (white label dance app, custom branded music app, etc.)
   - Tempo Notes: Resource keywords (dance music resources, tempo control tutorial, etc.)
   - Privacy: Privacy keywords (privacy policy, data protection, no tracking, etc.)
   - FAQ: Support keywords (Cadance FAQ, dance app questions, etc.)
4. Update all HTML pages with comprehensive favicon links:
   - Replace single cadance_Icon.png reference with multiple sizes
   - Add proper relative paths for subdirectory pages (publishers/ uses ../)
   - Include manifest link for PWA support
5. Test favicon display in browser tabs and verify meta keywords presence.

**Important considerations:**
- Keywords should be relevant and targeted to each page's specific audience
- Favicon files must be optimized and properly sized for different contexts
- Maintain proper relative paths for subdirectory pages
- Preserve existing meta tag structure and order
- Test across different browsers and devices

**Expected outcome:**
- Improved SEO with targeted keywords for search engines
- Professional favicon display across all devices and contexts
- Enhanced discoverability for each audience segment
- PWA-ready manifest configuration
- Consistent branding in browser tabs and bookmarks

---

## Campaign Landing Page (e.g., /reddit/)
**Last performed:** 2025-12-21
**Status:** Completed

**Files to modify:**
- [`reddit/index.html`](reddit/index.html:1) — New single-purpose landing page (logo-only header, hero CTA, icon benefits, testimonials, FAQ)
- [`styles.components.css`](styles.components.css:875) — Scoped landing page styles (only under `.reddit-landing`)
- [`sitemap.xml`](sitemap.xml:1) — Add the campaign URL for discovery

**Steps:**
1. Create a new directory (e.g., `/reddit/`) with an `index.html`.
2. Use a **single-purpose header** (logo only) and an **above-the-fold App Store CTA**.
3. Add 3–4 benefits as icon tiles (avoid paragraphs).
4. Add 1–2 teacher testimonials for social proof.
5. Add an optional compact FAQ addressing common ad-traffic questions.
6. Add the campaign path to [`sitemap.xml`](sitemap.xml:1).

**Important considerations:**
- Keep it usable without JS.
- Keep styles scoped to the landing page (e.g., `.reddit-landing …`) to avoid site-wide regressions.
- Use correct relative paths from subdirectories (e.g., `../styles.base.css`, `../app-store-badge.svg`).

**Expected outcome:**
- A fast, focused page optimized for ad traffic with a prominent App Store CTA and minimal distractions.
