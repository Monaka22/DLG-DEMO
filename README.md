# Digital Light Group Demo Website

A Vite-powered sales demo with three independent wellness website concepts, available as three direct, independently deployable websites.

## Independent websites

The three websites have separate entry URLs and open directly without a collection hub:

- Hospital / clinic: `/clinic.html`
- Wellness ecosystem: `/ecosystem.html`
- Product e-commerce: `/shop.html`

The regular build produces all three entry pages in `dist/`. For independent deployments, run `npm run build:clinic`, `npm run build:ecosystem`, or `npm run build:shop`; each produces a standalone site in `dist-sites/<name>/`. Each website has its own navigation and content. The shop includes a demo cart, checkout and bank transfer instructions.

Firebase Hosting is configured for site IDs dlg-demo, dlg-demo-ecosystem, and dlg-demo-shop. After building all three folders and signing in with irebase login, deploy them together with irebase deploy --only hosting --project dlg-demo.
## Run locally

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

## Included experiences

- **Luma Wellness Clinic** — corporate clinic site with medical centers, doctor profiles and schedules, package filters and details, health articles, locations, directions and appointment requests.
- **Goodkind Health & Wellness** — brand ecosystem with brand story, portfolio, store locator, GPS sorting, B2B partnership inquiry, journal and event registration.
- **Nourish Wellness Market** — product catalog, filters, product details, favorites, shopping bag and simulated checkout.

The Hub includes a five-step customer journey from awareness and consideration through evaluation, action and post-service engagement. All three experiences are available in Thai and English.

All checkout and form submissions are local demonstrations. They do not transmit or store customer data.

## Motion and hero video

Content fades into view once, with gentle directional movement and staggered cards. Reduced motion preferences disable these animations. The ecosystem hero uses [People doing yoga and meditation together](https://mixkit.co/free-stock-video/people-doing-yoga-and-meditation-together-43733/) from Mixkit under its Stock Video Free License; replace its source in `src/app.js` with the final brand video. It plays muted and loops, pauses outside the viewport, and includes a pause control. A matching yoga poster remains visible if video playback is unavailable.


## Demo content and contact channels

The six product illustrations in `public/products/` are original SVG mock packaging for this prototype, not photographs of real products. Doctor, center, product and journal details use distinct Thai/English sample content. Contact channels open a mock preview and link to each website’s contact form. Forms simulate confirmation locally without sending messages.
