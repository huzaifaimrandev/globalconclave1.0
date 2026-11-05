# Global Conclave 1.0 — Vercel no-build release

This folder is a complete **static production website**. It does not require npm, Node, Vite, React, `src/main.jsx`, a build command, or environment variables.

## Deploy on Vercel
1. Extract this ZIP.
2. Upload **the contents** of the extracted folder to the root of your GitHub repository, replacing the old website files. At the root, GitHub must display `index.html`, `style.css`, `site.js`, `assets/`, `vercel.json`. Remove old `package.json`, `vite.config.*`, and `/src` (not used in this version).
3. In Vercel Project Settings → Build & Deployment: set **Framework Preset** to **Other**, **Root Directory** to `./`, and **Build Command** to *disabled/blank* (disable Override). Output Directory also disabled/blank (no `dist`).
4. Redeploy latest commit. If previous build configuration persists, create a new Vercel project importing the updated repository with Framework **Other**.

## Important
- The user-uploaded original Global Conclave logo and promotional artwork are in `assets/`.
- Original BUMHS emblem and group sponsor photo were not among available standalone assets. Sponsor section uses a clearly labeled BUMHS text placeholder until originals are provided. Do not fabricate or alter people's faces.
- The original supplied schedule is December 4–6, 2026, not the poster's November schedule. Confirm live event status before publicizing.
- The Google Form iframe uses the existing embed URLs from the previous project; the fallback buttons use the user's verified forms.gle links. If embedded forms cannot load, visitors can click the fallback buttons.
- Registration prices are published tiers, not a guarantee of live availability.

## Local preview
Open `index.html` in a browser, or use `python3 -m http.server 8000` in this folder and visit `http://localhost:8000`.
