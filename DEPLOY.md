# Deploy — Cloudflare Pages

This is the canonical deploy path. Cloudflare Pages serves the built
static site from their edge for free, with automatic HTTPS and global
CDN. The site has no backend so this is all we need.

For a self-hosted alternative (Docker + nginx) see the `Dockerfile` and
`docker-compose.yml` at the repo root.

## Prerequisites

- A free [Cloudflare account](https://dash.cloudflare.com/sign-up).
- The repo pushed to GitHub (or GitLab — works the same way).

## One-time setup

### 1. Create the Pages project

1. Log into the Cloudflare dashboard.
2. In the left sidebar: **Workers & Pages** → **Create application** →
   **Pages** tab → **Connect to Git**.
3. Authorise Cloudflare to read your GitHub account, then select the
   `distrosoul` repo.

### 2. Configure the build

When prompted, use these values:

| Field | Value |
|---|---|
| **Project name** | `distrosoul` (becomes `distrosoul.pages.dev`) |
| **Production branch** | `main` |
| **Framework preset** | `Vite` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | _(leave blank)_ |
| **Environment variables** | _(none)_ |

The framework preset auto-fills the build command and output dir, but
double-check them.

Hit **Save and Deploy**. The first build takes 1–2 minutes.

### 3. Verify the deploy

Once the build finishes:

- Open `https://distrosoul.pages.dev` and run through the quiz end to
  end, including the reveal and About screen.
- Check the security headers with:
  ```bash
  curl -sI https://distrosoul.pages.dev | grep -iE 'content-security|x-frame|referrer|permissions|cross-origin'
  ```
  All of them should be present and match the values in
  [public/_headers](public/_headers).
- Try a deep link, e.g. `https://distrosoul.pages.dev/something-random`
  — it should render the quiz, not a 404. That's
  [public/_redirects](public/_redirects) doing its job.

## Ongoing deploys

Every push to `main` triggers an automatic build. Pull requests get
**preview deploys** at a unique URL — useful for reviewing changes
without affecting production.

You can roll back to any previous deploy from the Pages dashboard
(Deployments → ⋯ → Rollback). Each deploy is permanently archived at
its own subdomain.

## Custom domain (optional)

In the Pages project: **Custom domains** → **Set up a custom domain** →
follow the prompts. Cloudflare handles the DNS + TLS automatically if
the domain is already on Cloudflare; for external domains they walk
you through the CNAME setup.

## Updating the security headers

The headers live in [public/_headers](public/_headers). They are
applied by Cloudflare at the edge, **not by the build** — so changes
take effect on the next deploy without any build-tool involvement.

The self-hosted nginx variant uses [docker/nginx.conf](docker/nginx.conf)
for the same purpose; keep both in sync if you tweak the policy.

## Lighthouse check

Before promoting a major change, run Lighthouse against the preview URL
(or production) and aim for 100/100/100/100:

```bash
# Locally, against the production build:
npm run build
npx vite preview &
npx lighthouse http://localhost:4173 --view --preset=desktop
```
