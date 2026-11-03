# MyCareRoster redirect pages

MyCareRoster's privacy and support pages now live on its own site,
https://mycareroster.com (repo `RR-Cadance/MyCareRoster.com`).

The two files here only redirect there:

| Old URL (in shipped apps and App Store Connect) | Redirects to |
|---|---|
| `https://cadance.music/mycareroster/privacy` (`privacy.html`) | `https://mycareroster.com/privacy/` |
| `https://cadance.music/mycareroster/support` (`support.html`) | `https://mycareroster.com/support/` |

Keep both files, and don't rename them: MyCareRoster 1.0 compiles these URLs into the
app (`CareWebLinks` in `MyCareRosterApp/SettingsView.swift`), so installed copies keep
opening them even after the app and App Store Connect are updated.

GitHub Pages can't send server redirects, so each page uses a meta refresh, a canonical
link, a one-line `location.replace` script, and a visible link as a fallback. Edit the
policy and support content in the MyCareRoster.com repo, not here.
