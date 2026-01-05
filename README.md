# HenSer Innovations Website

This repo hosts the HenSer website built with Next.js (App Router), TypeScript and Tailwind CSS. It also serves downloadable builds and metadata for products like Accounting and TaskFlow.

## Local Development

- Prereqs: Node.js LTS installed; run `npm install` in the project root.
- Start dev server:
  - `npm run dev` then open `http://localhost:3000`
- Build locally:
  - `npm run build` then `npm run start` to serve the production build.

## Hosting and Deployment

- We deploy via Vercel using the `main` branch.
- Typical Vercel project config:
  - Framework preset: Next.js
  - Build command: `npm run build`
  - Output: `.next`
  - Root directory: repository root
  - Node version: default (LTS)
  - Environment: `.env` / Vercel dashboard
- After pushing to `main`, Vercel auto-builds and deploys.

## Domain and Hostnames

- Production domains (examples):
  - `henser-co-za-git-main-<project>.vercel.app` (preview)
  - `henser.co.za` (custom domain)
- On Vercel, add your custom domain under Project → Settings → Domains and follow DNS instructions.
- Ensure SSL is active (Vercel auto-issues certificates).

## Downloads and Metadata

- Static public assets live under `public/`.
- App-specific files:
  - Accounting: `public/accounting/latest.json` and any `.exe`/`.zip`
  - TaskFlow: `public/taskflow/latest.json` and any `.exe`/`.zip`
- The Next.js pages read `latest.json` to render version, file, size, date, and SHA-256.
- API route for TaskFlow metadata: `app/api/taskflow/latest/route.ts` serves `public/taskflow/latest.json` with `cache: no-store`.
- Details pages:
  - Accounting: `app/about/page.tsx` (and related components)
  - TaskFlow: `app/taskflow/page.tsx` using `src/components/TaskflowMeta.tsx` for client-side metadata fetch.

## Updating a Product Release (TaskFlow example)

1. Build the EXE in the product repo.
2. Copy the latest build into this repo under `public/taskflow/`.
3. Compute metadata:
   - File size (bytes)
   - SHA-256 checksum
4. Update `public/taskflow/latest.json` fields:
   - `version`, `filename`, `size`, `sha256`, `download_url`, `notes`, `published_at`
5. Commit and push to `main`:
   - `git add public/taskflow/*`
   - `git commit -m "Publish TaskFlow <version>"`
   - `git push`
6. Verify the site:
   - TaskFlow details: `/taskflow`
   - Downloads: `/downloads`

## Environment Variables

- Optional: External hosting for downloads via URL envs.
- If using an external host, set `TASKFLOW_URL` (or app-specific URL) in Vercel Environment Variables and ensure pages reference it.
- Otherwise, assets are served from `public/<app>/` inside this site.

## Caching and Freshness

- For metadata fetches, we force dynamic rendering and `revalidate = 0` on the TaskFlow page.
- API route returns `Cache-Control: no-store` to avoid stale data.
- If you notice stale metadata, consider adding a no-store rule in `vercel.json` for `/taskflow/latest.json`.

## Common Tasks (PowerShell)

- Start dev:
```
Push-Location "D:\Henser Innovations\Website\Henser Web Page"; npm run dev; Pop-Location
```
- Build and start:
```
Push-Location "D:\Henser Innovations\Website\Henser Web Page"; npm run build; npm run start; Pop-Location
```
- Publish metadata changes:
```
Push-Location "D:\Henser Innovations\Website\Henser Web Page"; git add .; git commit -m "Update downloads/metadata"; git push -u origin main; Pop-Location
```

## Troubleshooting

- Build fails with duplicate export errors
  - Ensure `app/taskflow/page.tsx` exports `dynamic` and `revalidate` only once.
- Metadata not showing on TaskFlow page
  - Confirm `public/taskflow/latest.json` exists and is valid JSON.
  - Check the client component `src/components/TaskflowMeta.tsx` renders without errors.
  - Verify Vercel deploy logs and disable caching if needed.
- Dev server returns 500
  - Clear Next.js cache: `Remove-Item -Recurse -Force .next`; then `npm run dev`.
- Port 3000 busy
  - `npm run dev -- -p 3001` or `$env:PORT=3001; npm run dev`.

## Deployment Details

- When asked during a release, provide Vercel deployment details:
  - Project name and Vercel URL
  - Target branch (`main`)
  - Recent deployment status/logs
  - Custom domains configured
  - Relevant environment variables (e.g., `TASKFLOW_URL`)
  - Any CDN or caching rules in `vercel.json`

With these details, we can quickly validate the deployment and ensure downloads and metadata render correctly.
