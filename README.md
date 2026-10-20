# SIP:O — local Figma app

React, TypeScript, Vite, and plain CSS. The app recreates 26 Figma screens and selection states from file `N005L5q6ciTjyC5NRyzsDB`. It starts at Home-1, the file’s recorded Flow 1 starting point. All original assets and Inter fonts are local.

## Run

```sh
npm install
npm run dev
```

Open the URL printed by Vite. Production: `npm run build`, then `npm run preview`.
To test from an iPhone on the same Wi-Fi, run `npm run dev -- --host 0.0.0.0` and open the printed Network URL on the phone. The computer’s localhost URL is not reachable from a separate phone.

## Design and prototype

The original screen hierarchy, content, spacing, typography, colours, images, and component states are retained in `src/design/` and `src/design.css`. `src/prototype.json` records the click connections read directly from Figma. `src/main.tsx` adds application behavior around those layers.

The main flow includes Home → Just Me → occasion → Home/Bar → scan menu; food selection states; Weekly/Last 30 Days charts; gallery recipe detail; and the original close-button destinations. Existing prototype links take priority. Controls without a recorded action receive local app behavior using the corresponding designed screen.

One Figma connection, from `175:1143` to `175:1323`, is a scroll action pointing inside a different food-selection frame. The local app opens that existing selected-food state so the choice works. All 41 recorded NAVIGATE connections retain their destination.

## Phone layout

The design’s reference width is 402 CSS pixels and its phone viewport is 874 pixels tall. The header and tab bar remain pinned; content scrolls between them. Longer Figma frames retain their content and become scrollable. Smaller widths scale proportionally. Safe-area bottom spacing is supported. Desktop shows a centered phone viewport.

## Working locally

- Preference fields save on this device.
- Gallery favourites persist across reloads.
- Pace and water check-ins have working Start/Pause timers while the app is open; timer deadlines persist across reloads. These do not schedule system notifications when the app is closed.
- Water logging and confirmed drink entries save locally. Drink entries update the daily figures, recommendation card, and gallery log.
- Original Figma drink history and charts remain illustrative sample data.
- The scan screen uses the original sample photo/result by default. Tap the photo to select your own and manually confirm its details before logging. Photo recognition is not connected.
- Chat supports local built-in recipe/history responses, text entry, photo attachment, and browser voice input where supported. No online AI service, cloud account, or external data transmission is configured.

All personal data stays in browser storage. This is a local web app; server-side accounts, cloud sync, and online AI are outside the current implementation.

## Verification

- TypeScript and Vite production build passed.
- All 41 recorded screen-navigation connections passed browser checks.
- All screen assets loaded, with non-zero rendered dimensions.
- Tested fixed chrome, saved preferences, timer ticking and pause, drink logging, favourites, and local chat responses.
- Browser viewport checks: 402×874, 320×568, 390×844, and 430×932. This is browser verification, not a physical-device test.

No GitHub repository was created and nothing was pushed.
