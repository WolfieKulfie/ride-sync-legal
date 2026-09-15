# Ride Sync — legal pages

The privacy policy and account deletion pages for **Ride Sync** (`com.ridesync.rider`), served by
GitHub Pages so Google Play has a live URL for both.

This repository is public **only** because GitHub Pages requires it on a free plan. It contains
nothing but these three HTML files. The app's source stays private, and must: `config.js` there
carries a Google REST API key.

## Live URLs

| Page | URL |
|---|---|
| Index | https://wolfiekulfie.github.io/ride-sync-legal/ |
| Privacy policy | https://wolfiekulfie.github.io/ride-sync-legal/privacy.html |
| Delete account | https://wolfiekulfie.github.io/ride-sync-legal/delete-account.html |

Both of the lower two go into Play Console, under **App content → Privacy policy** and
**App content → Data deletion**, and into `config.js` in the app so the links appear under
Profile → About.

## Keeping it honest

The source of truth is `docs/` in the app repository. The policy describes what the code actually
does, so when the app starts or stops collecting something, edit it there and copy the files here
in the same change. A privacy policy that has drifted from the code is worse than none, because it
is a specific claim that happens to be false.
