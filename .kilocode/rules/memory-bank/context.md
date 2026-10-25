# Current Context: Cadance Marketing Site

## Current State
Static, multi-page marketing site (GitHub Pages) with shared design system and progressive enhancement JavaScript. Current public messaging is aligned with Cadance 7.5 (refresh 2026-10-24), led by one Search, Notebook, flexible passes, Focus Player, imports, and Apple Watch/Bluetooth remote control.

Primary pages:
- Teacher homepage: [`index.html`](index.html:1)
- Musicians / rights holders: [`publishers/index.html`](publishers/index.html:1) (+ safety redirect [`publishers.html`](publishers.html:1))
- Pricing & plans: [`pricing/index.html`](pricing/index.html:1)
- Campaign landers: [`reddit/index.html`](reddit/index.html:1), [`barrenotes/index.html`](barrenotes/index.html:1)
- How-to videos: [`how-to.html`](how-to.html:1)
- Music training resources: [`music-training.html`](music-training.html:1)
- Partners: [`partners.html`](partners.html:1)
- Features: [`features.html`](features.html:1)
- Blog: [`blog/index.html`](blog/index.html:1) with new posts:
  - [`blog/whats-new-in-cadance-7-5/index.html`](blog/whats-new-in-cadance-7-5/index.html:1)
  - [`blog/whats-new-in-cadance-6/index.html`](blog/whats-new-in-cadance-6/index.html:1)
  - [`blog/teacher-notebook/index.html`](blog/teacher-notebook/index.html:1)
  - [`blog/perfect-practice-passes/index.html`](blog/perfect-practice-passes/index.html:1)
  - [`blog/meet-ran-bagno/index.html`](blog/meet-ran-bagno/index.html:1)
  - [`blog/introducing-day-passes/index.html`](blog/introducing-day-passes/index.html:1)
  - [`blog/whats-new-in-cadance-4/index.html`](blog/whats-new-in-cadance-4/index.html:1)
  - [`blog/dance-for-every-community/index.html`](blog/dance-for-every-community/index.html:1)
  - [`blog/class-planning-mode/index.html`](blog/class-planning-mode/index.html:1)
- Support: [`faq.html`](faq.html:1), [`privacy.html`](privacy.html:1)

Private / internal pages (no links in):
- BarreNotes social proof screenshots: [`barrenotes/BarreNotesPosts/index.html`](barrenotes/BarreNotesPosts/index.html:1)

## Current Implementation Notes
- **Pricing cards** are consistent across the pricing page and BarreNotes landing page (Spark / Artist).
  - Artist is the top and hero tier ("Most Popular") and includes Apple Music, Focus Player, and Syllabus; cards size to content (no forced equal heights).
  - Styling lives in [`styles.components.css`](styles.components.css:1736) and markup in [`pricing/index.html`](pricing/index.html:93), [`reddit/index.html`](reddit/index.html:242), [`barrenotes/index.html`](barrenotes/index.html:259).
- **v3 shipped**: removed the “Coming with v3” release badge from the site (pricing + landing pages) and removed `.tier-pill--v3` styling.
- **Landing-page App Store CTA**: landing CTA uses the same base button styling as home via `.btn.btn-primary`, with landing-specific sizing/centering.
  - CTA copy: “Download Free - Start Teaching Better”
  - Markup: [`reddit/index.html`](reddit/index.html:79), [`barrenotes/index.html`](barrenotes/index.html:79)
  - Styling/sizing: landing-specific centering + width lives in [`styles.components.css`](styles.components.css:1044)

- **Landing-page hero copy**: Reddit landing hero headline updated.
  - Markup: [`reddit/index.html`](reddit/index.html:76)

- **Landing-page CTA microcopy cleanup**: removed the two “benefits-note” lines directly below the top CTA on both landing pages.
  - Markup: [`reddit/index.html`](reddit/index.html:76), [`barrenotes/index.html`](barrenotes/index.html:76)

- **Tempo How To video (7.5, published 2026-10-25)**: the "Changing tempo" card in [`how-to.html`](how-to.html:105) plays `videos/cadance-v7-howto-tempo.mp4` (54 s, 1620×1080, narrated) with the style B poster `cadance-v7-howto-tempo-poster.webp` and captions `cadance-v7-howto-tempo.vtt`. 3:2 cards add `.video-container--wide` (smaller play button, so the poster title stays readable in narrow cards; styles.components.css). The old `BalletTempoDemoV1CroppedComposite.*` and `Tempo_demo.*` files were archived to `../website-assets/howto-videos/archive-2025/` and removed from the repo.

- **Pricing copy + emphasis tweaks**:
  - Artist is the most-popular, top subscription tier across pricing and landing-page cards.
  - Artist includes Apple Music, Focus Player, and Syllabus; the site no longer distinguishes downloaded Apple Music playback.
  - Increased Artist tier title + price typography (scoped to `.pricing-tier--popular`).
  - Markup: [`pricing/index.html`](pricing/index.html:119), [`reddit/index.html`](reddit/index.html:260), [`barrenotes/index.html`](barrenotes/index.html:276)
  - Styling: [`styles.components.css`](styles.components.css:1923)
- **Pricing hero**: removed the Pricing page hero image; Pricing now uses a text-only hero section.
  - **Testimonials**: cards are tappable (CSS-only modal via `:target`) and include an always-visible “Click/Tap to read more” affordance.
  - Styles: [`styles.components.css`](styles.components.css:190)
- **JavaScript is not a placeholder**: [`script.js`](script.js:1) provides progressive enhancement (parallax + mobile menu toggle). Microsoft Clarity is installed site-wide.

- **Private screenshots gallery**: [`barrenotes/BarreNotesPosts/index.html`](barrenotes/BarreNotesPosts/index.html:1)
  - `noindex,nofollow` meta.
  - Cards are sorted by `data-post-date` newest→oldest and laid out in two columns (fill left column first, then right).
  - Crawlers discouraged via `Disallow: /barrenotes/BarreNotesPosts/` in [`robots.txt`](robots.txt:1).

## v4 Release Updates (April 2026)

### Major Changes
- **Patron Directory removed**: Deleted `/patrons/` directory entirely. Removed all navigation links from footer and header across all pages.
- **Day Passes introduced**: New pricing model with 14 free passes on signup, never-expire model, and flexible pay-per-day pricing.
- **Free tier renamed**: "Free tier" → "Class Planning mode" to better reflect the product (unlimited browsing, playlist creation, 15-second previews).
- **Homepage hero updated**: New messaging emphasizing Day Passes and curated playlists instead of free trial.
- **Pricing page restructured**: Updated hero copy, FAQ questions, and tier descriptions to reflect Day Pass model and new tier positioning.
- **FAQ completely rewritten**: Added Day Pass questions, Class Planning mode details, removed Patron Directory references.
- **Four new blog posts created**:
  - [`blog/introducing-day-passes/index.html`](blog/introducing-day-passes/index.html:1) — Day Pass model explanation
  - [`blog/whats-new-in-cadance-4/index.html`](blog/whats-new-in-cadance-4/index.html:1) — v4 feature overview
  - [`blog/dance-for-every-community/index.html`](blog/dance-for-every-community/index.html:1) — Extraordinary Groups collection
  - [`blog/class-planning-mode/index.html`](blog/class-planning-mode/index.html:1) — Free tier usage guide

### Files Modified
- [`index.html`](index.html:1) — Hero messaging, removed Patron Directory footer link
- [`pricing/index.html`](pricing/index.html:1) — Hero copy, Patron tier description, FAQ questions, removed Patron Directory footer link
- [`reddit/index.html`](reddit/index.html:1) — Removed Patron Directory footer link
- [`barrenotes/index.html`](barrenotes/index.html:1) — Removed Patron Directory footer link
- [`faq.html`](faq.html:1) — Complete rewrite with Day Pass and Class Planning mode content

### Key Messaging Updates
- "Pay only for the days you teach" (primary CTA)
- "Day Passes never expire"
- "14 free passes to get started"
- "Class Planning mode" (for Free tier)
- "33 curated playlists" (Cadance Resources)
- "Extraordinary Groups" (therapeutic/adaptive dance collections)

## Cadance v6 Marketing Refresh (July 2026)

- Homepage, Features, Pricing, FAQ, Partners, Blog, and sitemap have been updated for Cadance v6.
- The v6 message leads with free Teacher Notebook, linked music, Focus Player, Day Passes, Perfect Practice Passes, and Artist Syllabus.
- Pricing now omits monetary amounts and directs users to App Store-localized pricing. It explicitly retains the 14 free Day Passes and 1 free Perfect Practice Pass for new users.
- Added four posts: v6 release, Teacher Notebook workflow, Perfect Practice Passes, and Ran Bagno featured artist.
- Added approved Ran Bagno portrait from Vertigo locally as `ran-bagno-portrait.jpg` and added the artist to `partners.html`.
- Removed remaining live links to the deleted Patron Directory, updated public footers to 2026, and removed the old Patron Directory sitemap entry.
- Product screenshot files were supplied in the repository and converted to optimized WebP derivatives (500 KB total). `index.html` uses the handwritten Ran Bagno deep-link and Focus Player workflow; `features.html` uses the typed Notebook and both iPhone Notebook captures; the Artist Syllabus section uses the Syllabus capture.
- Feature/access messaging now distinguishes free Class Planning Mode from Spark as the BarreNotes-equivalent playback tier. Features use "Countdown to start" wording, document Focus Player repeat options, describe Syllabus as a music source, and no longer mention the removed volume-warning feature.
- FAQ now explains why Spotify and other streaming services cannot support Cadance's playback model, and clarifies that Apple Music/Cadance subscriptions are playback tools rather than studio-performance licences; any such rights are a publisher or rights-holder issue.
- The 15-second Day Pass gate only applies when a track is outside the user's current entitlement, including DRM-protected tracks attempted with Spark. If the user cancels the banner, Cadance does not prompt again in that session; those uncovered tracks stop at the preview limit until the user manually activates a pass through Settings > Day Passes > Activate a Day Pass Now.
- Blog chronology records Perfect Practice Passes as a Cadance v5 feature on June 2, 2026, and the Ran Bagno featured artist post as July 11, 2026.

## Cadance 7.5 Alignment (Oct 2026)

Owner decisions (2026-10-24): site matches the published release, 7.5; use "7.5" wording; Metronome removed from all copy (no entry point since 2026-09-02, unlikely to return); "Notebook" (not "Teacher Notebook") in current copy; minimum iOS/iPadOS 16; iPhone Duo and Mac (Designed for iPad) are mentioned; no prices in any blog post; the Spotify missing-album 10-Day-Pass offer stays valid but is NOT promoted; foundingDate 2012.
- Class Planning Mode is "always free" planning access, never a "free tier". Watch control is a Spark+ benefit (covers whatever the plan plays, incl. an active Day Pass) and an upgrade incentive from Class Planning Mode.
- Access truth (code, 7.5): Spark = full local non-DRM playback + Delay Start; Artist = Apple Music (streamed or downloaded), Syllabus playback, Focus Player, docked notes; Day Pass = Artist-level for the calendar day; PPP = one track 30 days, 2 swaps. Without an Apple Music subscription, Apple Music tracks play the 30-second preview. Cadance Resources = 70 playlists in 10 folders. Settings path: Settings › Account & Passes.
- Changes: features.html rewritten (Search, imports, remote control, locks, getting started, tier cards); homepage hero + "New in Cadance 7.5" section; pricing/FAQ/BarreNotes updated (PPP card added to BarreNotes, Mac/iOS 16, refunds/restore, Spotify guide); new post `blog/whats-new-in-cadance-7-5/`; prices removed from the Day Pass and subscription posts; class-planning post updated; blog/privacy nav+footer normalized (Clarity added to four compact posts that lacked it); privacy meta no longer claims "no analytics"; `tempo-notes.html` deleted (replaced by music-training); `plans/` moved out of the repo to `../website-plans/`; sitemap rebuilt (features + all posts, no /reddit/ redirect).
- Historical posts (Cadance 4, v6, Extraordinary Groups) keep period facts such as "33 curated playlists".
- The Juno (heyjuno.co) guided AI interview is CLOSED (owner, 2026-10-24): never mention it or link to it. The homepage personas CTA is now the App Store button, and script.js no longer rewrites a `needs-cta` link. Spare OG images (`og_spare_tempo_dancer`, formerly og_juno_interview; `og_spare_iphone_header`, formerly og_white_label) are kept outside the repo in `../website-assets/og-spare/`. The live OG set is og_home (current app icon), og_tempo, and og_publishers.
- Smart App Banner (`<meta name="apple-itunes-app" content="app-id=6748429968">`) is on all 25 public Cadance pages (not redirects, BarreNotesPosts, forms/request-art, steadypulse, mycareroster). Mac (Designed for iPad, Apple silicon) is stated in the homepage hero note, the homepage SoftwareApplication data, the Features devices card, the FAQ ("Can I use Cadance on a Mac?"), and the BarreNotes availability label.

## Next Steps
- **7.5 screenshots placed (2026-10-24).** Owner sources live in iCloud `cadance shared/website content` (iPad Stage Manager window captures, iPhone Duo mock-up, Watch 46 mm captures). Converted with `cwebp -q 80` to `cadance-v7-*.webp` (≤1100 px wide, 1600 for Duo) and placed on features.html (Search pair, Focus Player, Watch trio, Remote Assist, 3-step import + paused banner, Visual Tour + Duo), the homepage "New in 7.5" (Duo) and the 7.5 blog post. New CSS modifiers in styles.components.css: `.product-showcase--narrow/--pair/--trio/--steps/--watch`. Unused source: `en-US-4-Watch.png` (App Store composite with marketing text). Notebook/Syllabus still use the v6 WebPs. How-to videos still need replacing (owner wants these and more).
- **How To videos (in progress, 2026-10-25).** Plan: `../website-plans/HOWTO_VIDEOS_PLAN.md`. Pipeline (outside the repo): `../website-assets/howto-videos/`, with render.py, voice.py (Katelyn on eleven_v4 via 1min.ai), tts.py and poster.py (style B). Plan rev 2 (clean) and the handoff prompt for the next session (`HOWTO_VIDEOS_HANDOFF.md`) are written; rev 1 and the first brief are in `../website-plans/archive/howto-2026-10-24-25/`. Tempo v2 and v3 were reviewed, but neither is publishable: the narration was rushed, there was dead air, and an off-topic closing line. Tempo v4 was recorded from `tempo/script-v4.md` (master `Raw Captures/tempo-v4.mp4`, 55.0 s, 3 slices) and rendered on 2026-10-25: 54.3 s, ending before the final pause tap with a 0.5 s fade (`--end 54.3 --fade-out 0.5`); all 11 cached lines at ×1.00; the owned and Apple Music sections are levelled with `--segment-gain 34.6-end:-1.5`. The owner approved it (pacing and the substitute Apple Music track "Hot Stuff" included), and it was published to how-to.html on 2026-10-25. render.py gained `--end`/`--fade-out` and now crops a 1621 px-wide scale to 1620. Next: confirm the video list with the owner (plan §7), then write the next brief in the format of `tempo/script-v4.md`.
- Capture/finalize App Store preview videos and release-date wording before publishing the external announcement.
- The app can link users to `/forms/request-art/` for the Rinat Zaripov dance-art note request. The route is now backed by a live Cloudflare Worker (`worker/`, `cadance-art-request`) that captures requests to KV and emails two `.cadnote` files. See "Request-art fulfilment (Aug 2026)" below for status and remaining setup.

## Request-art fulfilment (Aug 2026)

- **Purpose**: capture name/email/(optional)phone from `/forms/request-art/` and deliver the Rinat Zaripov `.cadnote` art notes.
- **Delivery split** (decided by owner): the two SMALLER notes go by EMAIL now; the two LARGER are reserved for a future SMS channel.
  - Email attachments: `Jazz Dancer With Links.cadnote` (327 KB), `Prodigal Son With Links.cadnote` (1.20 MB) → ~2.0 MB base64, under the Cloudflare Email 5 MiB cap.
  - Reserved for SMS (as links): `Ballet 5th With Links.cadnote` (1.28 MB), `Ballet pair With Links.cadnote` (1.25 MB).
  - All four committed to `forms/request-art/notes/` (public GitHub Pages).
- **Backend**: `worker/` dir in THIS repo → Worker `cadance-art-request` at `https://cadance-art-request.davidaus.workers.dev`. `POST /request-art`: honeypot → validate → Turnstile verify → store KV (`ART_REQUESTS`, 90-day TTL) → email via `[[send_email]]` binding. Mirrors cadance-init conventions. Source of truth for setup is `worker/README.md`.
- **Phone**: kept OPTIONAL on the form, with an unticked SMS-consent checkbox; stored for the future SMS send.
- **Privacy**: `privacy.html` now documents form-data collection, Cloudflare processing, and retention.
- **Remaining manual setup (owner, in dashboards)**:
  1. Cloudflare Turnstile: create widget → put site key in `forms/request-art/index.html` (`data-sitekey`) → `wrangler secret put TURNSTILE_SECRET` in `worker/`. ✅ DONE
  2. Cloudflare Email Service: sender domain `cadance.music` onboarded via `npx wrangler email sending enable cadance.music` (dashboard "Onboard Domain" dropdown was empty right after zone activation). ✅ DONE — verified a live send (`emailStatus: sent`, message id `...@cadance.music`).
  3. Sender is `Cadance <notes@cadance.music>` (set in `worker/wrangler.toml` `[vars]`).
- **Status: LIVE and verified end-to-end (30 Aug 2026).** A real form submission stored to KV and emailed the two notes successfully.
- **Viewing requests**: `GET https://cadance-art-request.davidaus.workers.dev/admin/requests?token=<ADMIN_TOKEN>` (read-only, newest first). Token is the `ADMIN_TOKEN` secret; rotate with `wrangler secret put ADMIN_TOKEN`.
- **Ops lessons learned**:
  - Reading captured requests: `wrangler kv key list/get` are LOCAL by default — always pass `--remote`, else they show `[]`/“Value not found” even when the Worker wrote data. (Confirmed via workers-sdk issue #10395.)
  - Email records live on the `cf-bounce.cadance.music` subdomain (MX/SPF/DKIM) + `_dmarc`. Note: onboarding set `_dmarc` to `p=reject` (was `p=none`) — monitor that this doesn't affect the existing Hover mailbox / MailerLite sending.
  - `E_SENDER_DOMAIN_NOT_CONFIGURED` = domain not onboarded to Email Service (distinct from DNS existing).

## Cadance v6 Visual Inventory (July 2026)

- `IMG_0262.png`: Syllabus screen shot. Use as the primary visual for Artist Syllabus messaging.
- `IMG_0260.png`: Handwritten Teacher Notebook note with a deep link to a Ran Bagno track and that track active in Focus Player. Use for the handwritten notebook, artist partnership, and linked-music story.
- `IMG_0259.png`: Typed Teacher Notebook with two visible music links, one active in Focus Player. Use for the typed planning workflow and Focus Player story.
- `IMG_1137.png`: Handwritten Teacher Notebook as displayed on iPhone. Use to demonstrate the mobile workflow.
- `IMG_1052.png`: Additional handwritten Teacher Notebook view on iPhone. Use as a supporting mobile notebook visual.

These product screenshots supersede generic imagery for the corresponding Cadance v6 feature stories where layout and resolution permit.
