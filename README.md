# SIP:O V3 — local app

This app was written from scratch against the current SIP:O V3 Figma screens. It does not reuse the previous prototype's screen code or interaction runtime. Standard React/Vite packages are used.

## Open
http://127.0.0.1:5178/

Run from this directory:
```
npm ci
npm run dev -- --port 5178
```

Build: `npm run build`.

## Pages and interactions
- Home, weekly chart, daily detail sheets, compact scrolling header, fixed navigation.
- Independent Before / While food choices, horizontal scroll with centered snap, meal text/photo logging.
- Time interval hours/minutes, first check-in, hydration interval, water volume scroll/type inputs.
- Session setup with selected state, Home / Restaurant / Bar recommendation views.
- Bottle photo or manual entry, lower-ABV recipe reference details, confirmation before logging.
- Scan Drink and Scan Menu flows; selected menu drink is logged rather than the menu image.
- Gallery Weekly / Monthly totals, expandable daily table, flipping memory cards, logged record details.
- Personalise sheets, optional weight/height/ABV scrolling or typing, consistent orange selections.
- Onboarding, local email account sign-in/signup/reset, optional profile pages and notification settings.
- AI welcome/active conversation, icon-only New chat and fixed composer.
- Modal background blur throughout, local data export.

## Local mode
All records and preferences persist in browser localStorage. Uploads are resized locally. There is no remote backend. Phone/SMS and external photo recognition are not connected. Scanning presents editable V3 sample data; AI uses explicit built-in local responses. Recipe and nutrition values are sample estimates, not personalised medical advice. Local accounts are a prototype feature, not production authentication.

The preview uses an iPhone 17 canvas of 402 × 874 logical pixels, scaled proportionally to fit the browser.

Sample history seeds the weekly chart. Those entries are marked Sample history. Saved drink records use unique IDs to avoid duplicate confirmation in one flow.

## Validation
- TypeScript and production build passed.
- Browser verified main navigation, independent food choices, drink confirmation → Gallery totals, refresh persistence, and typed weight → refresh persistence.
- Gallery image slots checked for successful loading and proportional geometry.
- Runtime images and SVG assets are local under public/assets/.
