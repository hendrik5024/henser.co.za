# HenSer Innovations Website

A lightweight company website built with Next.js (App Router), TypeScript, and Tailwind CSS.
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
=======
<header>

<!--
  <<< Author notes: Course header >>>
  Include a 1280×640 image, course title in sentence case, and a concise description in emphasis.
  In your repository settings: enable template repository, add your 1280×640 social image, auto delete head branches.
  Add your open source license, GitHub uses MIT license.
-->

# GitHub Pages

_Create a site or blog from your GitHub repositories with GitHub Pages._

</header>

<!--
  <<< Author notes: Step 1 >>>
  Choose 3-5 steps for your course.
  The first step is always the hardest, so pick something easy!
  Link to docs.github.com for further explanations.
  Encourage users to open new tabs for steps!
-->

## Step 1: Enable GitHub Pages

_Welcome to GitHub Pages and Jekyll :tada:!_

The first step is to enable GitHub Pages on this [repository](https://docs.github.com/en/get-started/quickstart/github-glossary#repository). When you enable GitHub Pages on a repository, GitHub takes the content that's on the main branch and publishes a website based on its contents.

### :keyboard: Activity: Enable GitHub Pages

1. Open a new browser tab, and work on the steps in your second tab while you read the instructions in this tab.
1. Under your repository name, click **Settings**.
1. Click **Pages** in the **Code and automation** section.
1. Ensure "Deploy from a branch" is selected from the **Source** drop-down menu, and then select `main` from the **Branch** drop-down menu.
1. Click the **Save** button.
1. Wait about _one minute_ then refresh this page (the one you're following instructions from). [GitHub Actions](https://docs.github.com/en/actions) will automatically update to the next step.
   > Turning on GitHub Pages creates a deployment of your repository. GitHub Actions may take up to a minute to respond while waiting for the deployment. Future steps will be about 20 seconds; this step is slower.
   > **Note**: In the **Pages** of **Settings**, the **Visit site** button will appear at the top. Click the button to see your GitHub Pages site.

<footer>

<!--
  <<< Author notes: Footer >>>
  Add a link to get support, GitHub status page, code of conduct, license link.
-->

---

Get help: [Post in our discussion board](https://github.com/orgs/skills/discussions/categories/github-pages) &bull; [Review the GitHub status page](https://www.githubstatus.com/)

&copy; 2023 GitHub &bull; [Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) &bull; [MIT License](https://gh.io/mit)

</footer>
>>>>>>> efc7124be30272ed7984733748fc91276bbe8675
