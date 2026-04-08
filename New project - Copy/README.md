# Cosmo Craft Tebex Template Pack

This folder contains a full custom Tebex theme scaffold for your space-themed Minecraft SMP store.

## What to upload into Tebex

Copy these files into the matching template slots:

- `layout.html`
- `index.html`
- `category.html`
- `category/tiered.html`
- `package.html`
- `checkout.html`
- `username.html`
- `options.html`
- `quote.html`
- `cms/page.html`
- `module.communitygoal.html`
- `module.featuredpackage.html`
- `module.giftcardbalance.html`
- `module.goal.html`
- `module.payments.html`
- `module.serverstatus.html`
- `module.textbox.html`
- `module.topdonator.html`

Upload these assets into the custom template assets area:

- `cosmo-theme.css`
- `cosmo-theme.js`
- `cosmo-logo.svg`
- `cosmo-favicon.svg`

## Schema

Paste [`schema.json`](C:\Users\orewa\OneDrive\Documents\New project\schema.json) into Tebex `Appearance -> Change Schema`.

That gives you quick controls for:

- colors
- logo and favicon
- Discord link
- server IP
- home announcements
- vote links
- store category slugs
- custom ticket warning text

## Required custom pages

Create these custom pages inside Tebex:

1. `Rules` with slug `rules`
2. `Vote` with slug `vote`
3. `Store` with slug `store`
4. `Staff` with slug `staff`

The template automatically gives those page titles a custom layout.

## Recommended categories

Create these package categories in Tebex:

1. `Ranks` with slug `ranks`
2. `Cosmo Money` with slug `cosmo-money`
3. `Custom` with slug `custom`

If you use different slugs, update them in the schema options.

## Content helpers

- [`content/pages.md`](C:\Users\orewa\OneDrive\Documents\New project\content\pages.md) explains the page setup.
- [`content/packages.md`](C:\Users\orewa\OneDrive\Documents\New project\content\packages.md) contains ready-to-paste descriptions for every rank and package.
- [`content/staff-page.html`](C:\Users\orewa\OneDrive\Documents\New project\content\staff-page.html) is a ready-made staff grid snippet for the Staff page content.

## Notes

- The cart, currency switcher, and checkout flow are global in the layout.
- Currency buttons are driven by `store.currencies` when Tebex exposes them, with a fallback list of `USD`, `INR`, `AUD`, `EUR`, `PLN`, and `GBP`.
- Package cards automatically theme themselves for names like `Gold`, `Diamond`, `Emerald`, `Netherite`, `Amethyst`, and `Custom`.
