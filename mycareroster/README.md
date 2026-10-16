# MyCareRoster hosted pages (App Store metadata)

Two static, self-contained pages for the App Store Connect required URL fields,
styled to match MyCareRoster's navy and teal theme. No build step, no assets, no
external CSS.

## Files

- `privacy.html` — Privacy Policy. Required for every app, and specifically for
  HealthKit (guideline 5.1.3). The app's Settings > About links to it.
- `support.html` — Support page with contact + FAQ (required Support URL). The
  app's Settings > About links to it.

## URLs

- Privacy Policy URL: `https://cadance.music/mycareroster/privacy`
- Support URL:        `https://cadance.music/mycareroster/support`

These exact URLs are compiled into the app (`CareWebLinks` in
`MyCareRosterApp/SettingsView.swift`), so don't move or rename the files.
`support.html` links to `./privacy.html`, so keep both pages in this directory.

## Keep current

- Contact email: `info@cadance.music` (used in both pages).
- The "Last updated" date in `privacy.html` (currently 16 October 2026) — bump it
  whenever the policy changes.
- The policy describes the app's actual data flows (Contacts "Medical" list,
  encrypted private-CloudKit roster sync, opt-in encrypted private-profile sync,
  read-only HealthKit medications, Apple-processed Family Unlock purchase, no
  analytics or tracking). Update it whenever those change, together with the app's
  `docs/AppReviewNotes.md` and App Privacy answers.
