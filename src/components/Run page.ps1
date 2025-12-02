$env:Path = [System.Environment]::GetEnvironmentVariable('Path','Machine') + ';' + [System.Environment]::GetEnvironmentVariable('Path','User')
npm -v
npm run dev

#Let’s get your site running locally now. We’ll start the dev server; if that fails, we’ll run the production server as a fallback.

## Option A — Development server (hot reload)

Run these in the VS Code Terminal (PowerShell) from your project root:
```powershell
# 1) Verify Node & npm are available
node -v
npm -v

# 2) Install deps (skip if you already ran it successfully)
npm install

# 3) Clear any stale Next.js cache
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue

# 4) Start the dev server (default port 3000)
npm run dev
```

If port 3000 is busy or you prefer 3001:
```powershell
npm run dev -- -p 3001
# or
$env:PORT=3001; npm run dev
```

Open:
- http://localhost:3000/ (or http://localhost:3001/ if you set PORT)

## Option B — Production server (stable fallback)

If dev keeps failing, you can still preview the site as a production build:
```powershell
# 1) Build
npm run build

# 2) Start (default port 3000)
npm start

# To use port 3001 instead:
$env:PORT=3001; npm start
```

Open:
- http://localhost:3000/ (or http://localhost:3001/)

## Troubleshooting

- If “npm is not recognized”: refresh the PATH in that terminal and retry:
  ```powershell
  $env:Path = [System.Environment]::GetEnvironmentVariable('Path','Machine') + ';' + [System.Environment]::GetEnvironmentVariable('Path','User')
  npm -v
  npm run dev
  ```
- If the dev page shows a 500 error mentioning “Cannot find module './xxx.js'”:
  ```powershell
  Remove-Item -Recurse -Force .next
  npm run dev
  ```
- If it exits immediately with code 1, please copy the last 30 lines of the terminal output and paste them here—I’ll pinpoint the fix.

## Helpful links

- Download Node.js LTS (includes npm): https://nodejs.org/en/download
- Next.js CLI (dev/build/start): https://nextjs.org/docs/pages/api-reference/next-cli
- Installing Node.js and npm (npm docs): https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

Once you’ve run one of the start commands, tell me which URL it printed (and any errors if it didn’t start). I’ll take it from there.