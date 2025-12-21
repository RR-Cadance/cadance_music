# Product: Cadance Marketing Site

## Why This Project Exists
Cadance is a dance class music app built to keep classes moving with fast access, class‑friendly controls, and reliable playback. The marketing site now serves three audiences:
1) Dance teachers — the primary audience and homepage focus
2) Rights holders — clear, transparent permissions for using album artwork in App Store/Play and Cadance promotional materials
3) Partners — artists/teachers and collaborators (social proof, resources, and campaign landing pages)

## Problems It Solves
1. For Teachers
   - Speed and focus: less device fiddling, more time on students
   - Reliability: predictable playback that matches class flow
   - Organization: simple structure for sets/classes
2. For Rights Holders (Publishers)
   - Legal compliance with transparent usage scope
   - Proper credit and revocable permissions
   - Professional, repeatable process with stored records

## How It Should Work
The site operates as a multi‑page marketing funnel:

1) Home (Teacher‑focused)
   - Hero: clear benefit (keep the class moving)
   - Features: speed, class control, reliability, organization, focus, heritage
   - Personas: freelancers, studio staff, company instructors, competition teams, online instructors
   - Screenshots: in‑context visuals with correct dimensions, lazy loading, async decoding; collapsible presentation
   - White Label teaser: highlight organizational option (positioned after final interstitial)
   - CTA: Download on the App Store → https://apps.apple.com/us/app/cadance/id6748429968

2) Publishers (Rights Holders)
   - Why partner: exposure to dance educators; controlled usage
   - Transparency: scope, regions, revocation, no resale, no third‑party licensing
   - Process: step‑by‑step email approval workflow
   - Showcase: in‑context images
   - CTA: partnerships mailto

3) Campaign landing pages (e.g., Reddit)
   - Single-purpose pages optimized for ad traffic
   - Above-the-fold App Store CTA
   - Short benefits (icon tiles) + social proof + compact FAQ

## User Experience Goals
- Immediate clarity (benefits for teachers within seconds)
- Trust signals: professional language, clear scope for rights holders, BarreNotes heritage
- Mobile‑first, responsive across 320/768/1280px
- Fast loading on slow networks (sub‑2 second target)
- Accessibility (WCAG AA), fully functional without JavaScript
- No friction: use mailto CTAs, no forms or external dependencies

## Success Criteria
- Teachers initiate contact (join waitlist) from the homepage
- Organizations initiate White Label inquiries via enterprise mailto
- Rights holders understand scope and grant permissions via partnerships mailto
- Site remains static, fast, and accessible with no external requests
- OG/Twitter cards render correctly per page

## Copy and Tone
- Teacher-first language: practical benefits for running class smoothly
- Confident but simple phrasing; minimal jargon
- Transparent legal language for rights holders
- Professional, partnership‑oriented tone for organizations

## Content Sources and Maintenance
- Copy lives in the HTML files per page
- Styles consolidated in a single CSS file with design tokens and shared components
- JavaScript used for progressive enhancement (parallax) via script.js; pages remain fully usable without JS
- Assets live at repo root; preserve width/height in markup to avoid layout shift

## CTAs and Emails
- Contact: info@cadance.music

## Constraints
- Static site only (GitHub Pages)
- No external dependencies or web fonts
- Must operate without JavaScript; JS file retained only as a placeholder
- WCAG AA accessibility baseline

## Roadmap Notes
- Replace mailto with App Store/Play links when available
- Optional: JSON‑LD (Organization/App) as a static script tag
- Optional: Press/Privacy pages as content grows
- Optional: privacy‑first analytics after policy review
