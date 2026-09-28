# SteadyPulse Placebo hosted pages (App Store metadata)

Two static, self-contained pages for the App Store Connect required URL fields,
styled to match the SteadyPulse Placebo dark/amber theme. No build step, no assets, no
external CSS — just upload the HTML.

## Files

- `privacy.html` — Privacy Policy (required because the app has optional consumable IAP tips).
- `support.html` — Support page with contact + FAQ (required Support URL).

## Suggested hosting on cadance.music

Host under a SteadyPulse path, e.g.:

- Privacy Policy URL: `https://cadance.music/steadypulse/privacy`
- Support URL:        `https://cadance.music/steadypulse/support`

If the host serves files by exact name, you can instead use
`/steadypulse/privacy.html` and `/steadypulse/support.html`. `support.html`
links to `./privacy.html`, so keep the two pages in the same directory (or
update that relative link if you flatten the paths).

## Before publishing — confirm these stay current

- Contact email: `info@cadance.music` (used in both pages).
- The "Last updated" date in `privacy.html` (currently 28 September 2026) — bump it
  whenever the policy changes.

Everything else (no-data-collected stance, Apple optional-tip wording, haptic
wearable note, and non-medical disclaimer) is written to match the app's actual
behavior and the App Review notes.
