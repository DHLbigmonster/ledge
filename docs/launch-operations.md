# Ledge for Mac launch operations

This runbook separates changes that are safe to ship now from account-bound actions that must happen only after the required account or domain is available.

## Already safe to ship

- The single canonical website defaults to `https://ledgeformac.github.io/` at the root path.
- The old `https://dhlbigmonster.github.io/ledge/` project site publishes matching migration pages plus the historical Sparkle appcast; it must not publish duplicate marketing pages or a duplicate sitemap.
- `SITE_URL` and `VITE_BASE_PATH` can override the brand-site defaults for a future custom domain.
- The Buttondown form remains inactive until `VITE_BUTTONDOWN_USERNAME` is configured.
- The signed Sparkle feed stays at the existing GitHub Pages URL so installed versions keep receiving updates.

## Custom domain cutover

Do not perform this section until `ledgeformac.com` is registered to the project owner.

1. Verify the domain in GitHub before changing DNS.
2. In the public website repository's Pages settings, set the custom domain to `ledgeformac.com`.
3. Configure the apex records required by GitHub Pages and add `www` as a CNAME to `ledgeformac.github.io`.
4. After DNS resolves, enable HTTPS in GitHub Pages.
5. Set repository variables:

   - `SITE_URL=https://ledgeformac.com/`
   - `VITE_BASE_PATH=/`
   - `VITE_BUTTONDOWN_USERNAME=<Buttondown username>`

6. Rebuild and read back every canonical, hreflang, OG URL, sitemap URL and robots sitemap line.
7. Confirm the old GitHub Pages URL redirects to the custom domain.
8. Keep `https://dhlbigmonster.github.io/ledge/appcast.xml` live or redirected indefinitely. Do not change the feed used by installed versions until the old address has been verified end to end.

## Search indexing

On the current brand domain (repeat after any future custom-domain cutover):

1. Add and verify the URL-prefix property `https://ledgeformac.github.io/` in Google Search Console.
2. Submit `https://ledgeformac.github.io/sitemap.xml`.
3. Inspect the home page and each high-intent page; request indexing once when needed.
4. Add or import the site in Bing Webmaster Tools and submit the same sitemap.
5. Generate an IndexNow key, host the key file at the site root, configure the deploy secret, and submit only canonical URLs from the route manifest.
6. Record three separate states for each engine: accepted sitemap, discovered/crawled URL, indexed URL. A verification file or accepted sitemap is not proof of indexing.

## Buttondown

1. Create the newsletter and choose the final Buttondown username.
2. Set `VITE_BUTTONDOWN_USERNAME` in the GitHub repository variables.
3. Test subscription, confirmation and unsubscribe with a non-production address.
4. Confirm GoatCounter records `newsletter-signup` without storing the submitted email address.

## Product Hunt and directories

- Product Hunt: verify the personal account is at least one week old, profile is complete and the maker can respond for 8–10 hours on launch day.
- AlternativeTo: submit the public beta through the free review path; do not purchase priority review without explicit approval.
- MacUpdate and Show HN: defer until Developer ID signing and notarization remove the Gatekeeper trust barrier.

## Release freeze

From the final regression build until launch day, accept only P0 or P1 fixes. Re-run the website build, internal-link check, download check, appcast check and launch-copy fact scan after every accepted fix.
