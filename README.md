# Ride Sync — public site

The Ride Sync marketing site, plus the privacy policy and account deletion pages, served by
GitHub Pages so Google Play has a live URL for the last two.

This repository is public **only** because GitHub Pages requires it on a free plan. It contains
the site and these legal pages and nothing else. The app's source stays private, and must:
`config.js` there carries a Google REST API key.

## Live URLs

| Page | URL |
|---|---|
| Site | https://wolfiekulfie.github.io/ride-sync-legal/ |
| Legal index | https://wolfiekulfie.github.io/ride-sync-legal/legal.html |
| Privacy policy | https://wolfiekulfie.github.io/ride-sync-legal/privacy.html |
| Delete account | https://wolfiekulfie.github.io/ride-sync-legal/delete-account.html |

The privacy and delete-account URLs are unchanged and still go into Play Console, under
**App content → Privacy policy** and **App content → Data deletion**, and into `config.js` in the
app so the links appear under Profile → About. The site moved into the root index; the old legal
landing page it replaced now lives at `legal.html`.

## Keeping it honest

The source of truth is `web/` and `docs/` in the app repository. The policy describes what the code
actually does, so when the app starts or stops collecting something, edit it there and copy the
files here in the same change. A privacy policy that has drifted from the code is worse than none,
because it is a specific claim that happens to be false.

The screenshots on the site are real, with rider names and the invite code replaced.
