# Global Conclave 1.0 — Vercel-ready website

Premium, responsive React + Tailwind landing page for Global Conclave 1.0.

## Quick deployment (Vercel)

1. Unzip `global-conclave-vercel.zip`.
2. Upload the **folder contents** to a GitHub repository (or use the Vercel CLI from inside the folder).
3. In [vercel.com/new](https://vercel.com/new), **Import Git Repository** and select the repository.
4. Framework Preset: **Vite** (should detect automatically). Build Command: `npm run build`. Output Directory: `dist`.
5. Click **Deploy**. No environment variables are needed.

### Deploy directly from your computer using Vercel CLI

```bash
npm install
npm run build
npx vercel --prod
```

Follow the CLI sign-in / project questions. To test locally:

```bash
npm install
npm run dev
```

## Official assets and what is still needed

- `public/assets/global-conclave-official-logo.png` is extracted from the uploaded Global Conclave standee PDF. Its black background was converted to transparency for use on dark backgrounds; the logo design was not redrawn.
- `public/assets/conference-artwork.webp` and `venue-announcement.webp` are compressed versions of the uploaded official poster artwork, **for visual reference**. Note: the posters contain older November dates and an earlier DHA venue; the page's written information instead uses the revised December schedule and Best Western Premier Hotel in the user's latest brief.
- `public/assets/mountains.webp` is a crop from the original supplied mountain artwork.
- **BUMHS emblem and original sponsorship group photograph** were *not present as separate assets* in the available uploads. The sponsor section deliberately uses a typographic placeholder instead of a fabricated university logo or AI-generated faces. When available, put the originals in `public/assets/` and replace the `.sponsor-art` content in `src/main.jsx` with `<img>` elements pointing to the real files. Do not modify faces.

## Important content notes

- Published event schedule shown: **4 December 2026 (workshop), 5–6 December 2026 (conference)**. The page labels the dates as a published schedule and tells visitors to verify event status; it makes no claim of a future registration deadline.
- Conference venue: Best Western Premier Hotel, Quetta, per the latest brief.
- Pricing: Early Bird PKR 4,000 / Regular PKR 4,500. Qawali Night is **not included**.
- Registration is through the **original two Google Forms**. Both are embedded via Google's `viewform?embedded=true` links (resolved from the supplied short URLs) with direct-form buttons as a fallback. Google can refuse an iframe based on account settings; the direct links always remain available.
- No backend, database or fake registration capture is used.
- The official Instagram handle is linked: https://www.instagram.com/global_conclave/
- No invented organizer emails or telephone numbers.

## Editing content

- Main sections, pricing and FAQ: `src/main.jsx`
- Design and responsive styles: `src/styles.css`
- Site metadata: `index.html`
- Static image assets: `public/assets/`
- Deployment setup: `vercel.json`

The repo uses Vite, React 18, Tailwind CSS 3 and Lucide icons. All images are served from `/assets/` and require no external image host.
