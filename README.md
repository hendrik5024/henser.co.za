# HenSer Innovations Website

A lightweight company website built with Next.js (App Router), TypeScript, and Tailwind CSS.

> Note: This project includes placeholder content and assets. Replace placeholders (images, OG image) with your real company information.

## Prerequisites

- Windows 10/11
- Node.js LTS (recommended) and npm
  - Download from https://nodejs.org and install (includes npm)

## Quick start (PowerShell)

```powershell
# From the project root
npm install
npm run dev
```

Then open http://localhost:3000 (or the port shown in the terminal)

## Scripts

- `npm run dev` — Start the dev server
- `npm run build` — Build for production
- `npm start` — Start the production server
- `npm run lint` — Run ESLint
- `npm run format` — Prettier format
- `npm run test` — Run Playwright tests

## Customize content

- Site metadata: `app/layout.tsx` (title, description, OpenGraph). `metadataBase` and the sitemap/robots are set to `https://henser.co.za` — adjust if needed.
- Branding: Logo lives at `public/Henser_full_logo.png`. Replace `public/favicon.png` and `public/og-image.svg` if desired. Service icons live under `public/icons/`.
- Navigation & layout: `src/components/Navbar.tsx`, `src/components/Footer.tsx`
- Pages: `app/page.tsx`, `app/about/page.tsx`, `app/services/page.tsx`, `app/contact/page.tsx`
- Styles: `app/globals.css`, `tailwind.config.ts`

## Contact form options

- Default is a `mailto:` fallback in `src/components/ContactForm.tsx`
- For static hosting with Netlify, keep the `data-netlify` attributes and enable forms in Netlify.
- For a custom backend, replace the submit handler to POST to your API.

## Deploy

### Vercel (recommended for Next.js)

1. Create a Vercel account and import this repo.
2. Vercel auto-detects Next.js. No extra config needed.
3. Set your custom domain in Vercel: Project Settings → Domains → Add.
4. Update your DNS: point your domain to Vercel’s nameservers (recommended) or add the provided CNAME/A records at your domain registrar.

### Netlify (static or Next SSR)

1. New site → Import from Git → pick this repo.
2. Build command: `npm run build` • Publish dir: `.next`
3. For Next.js SSR support, enable the Next.js Runtime in Netlify settings.
4. Add your custom domain in Site settings → Domain management → Add domain.

### Cloudflare Pages

1. Create a new Pages project from this repo.
2. Build command: `npm run build` • Output directory: `.next`
3. Add your domain in Pages → Custom domains and follow DNS instructions.

## DNS checklist for your domain

- Decide where DNS is managed (Registrar, Vercel, Netlify, Cloudflare).
- Add/verify the apex domain (example.com) and `www` subdomain.
- Create required DNS records:
  - CNAME `www` → your host-provided target
  - A/ALIAS/ANAME for apex as instructed by your host (or use nameserver delegation)
- Enable HTTPS/SSL (your host should issue certificates automatically).

## Notes

- This repo was scaffolded manually (no CLI) because Node wasn’t available at creation time. After installing Node, run `npm install` to set everything up.
- Open Graph image is an SVG placeholder (`public/og-image.svg`). Replace it with a PNG if preferred and update `app/layout.tsx` accordingly.

## Troubleshooting

- npm is not recognized
  - Refresh PATH in the current terminal, then retry:
    - `$env:Path = [System.Environment]::GetEnvironmentVariable('Path','Machine') + ';' + [System.Environment]::GetEnvironmentVariable('Path','User')`
    - `npm -v`
- Dev server returns 500 in development
  - Clear the Next.js cache and restart dev: `Remove-Item -Recurse -Force .next; npm run dev`
- Port 3000 is busy
  - Start on 3001: `npm run dev -- -p 3001` or `$env:PORT=3001; npm run dev`