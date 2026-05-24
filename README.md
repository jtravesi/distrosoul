# findyourdistro

> A Pokémon Mystery Dungeon-style personality quiz that recommends your ideal Linux distro.

The user takes a short quiz of situational, emotional questions — never about Linux itself — and at the end discovers the distro that matches their personality. The flow, tone, and visual style are inspired by the personality quiz that opens the Pokémon Mystery Dungeon games.

**Status:** 🚧 Phase 1 — initial setup. Visual base ready, full quiz logic coming next.

## Stack

- **React 18** + **Vite** for the frontend (single-page app)
- **Tailwind CSS** for styling, with a custom PMD-inspired theme
- **Framer Motion** for transitions and reveals (added in later phases)
- **Pixelify Sans** + **Press Start 2P** as typography (loaded from Google Fonts)
- **nginx-alpine** to serve the built static files in production
- **Docker** for both dev and prod environments

## Running locally

### Option A — Native (recommended for fast iteration)

Requires **Node.js 20+**.

```bash
npm install
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173).

### Option B — Docker (dev)

```bash
docker compose -f compose.dev.yml up
```

Same URL. Source is mounted as a volume, so changes hot-reload.

### Option C — Docker (production simulation)

```bash
docker compose up -d --build
```

Visit [http://localhost:8080](http://localhost:8080). This builds the static site and serves it via nginx, exactly as it would run in production.

You can change the host port with the `HOST_PORT` env var:

```bash
HOST_PORT=3000 docker compose up -d --build
```

## Project structure

```
findyourdistro/
├── src/
│   ├── components/      # Reusable React components (TextBox, screens, ...)
│   ├── data/            # Quiz content
│   │   ├── questions.js       # Pool of 19 personality questions
│   │   ├── finalQuestion.js   # The "camino difícil" final question
│   │   └── reveals.js         # 22 reveal texts (one per distro)
│   ├── lib/             # Pure logic
│   │   ├── scoring.js         # Personality → distro mapping
│   │   └── selectQuestions.js # Random subset selection
│   ├── App.jsx          # Top-level state machine
│   ├── main.jsx         # React entry point
│   └── index.css        # Tailwind + PMD-specific styles
├── docker/
│   └── nginx.conf       # Hardened nginx config with strict CSP & headers
├── Dockerfile           # Production (multi-stage, nginx-alpine)
├── Dockerfile.dev       # Development (Node + Vite)
├── docker-compose.yml   # Production compose
├── compose.dev.yml      # Development compose
└── ...
```

## Design principles

1. **Privacy by design.** No cookies, no analytics, no tracking. The quiz runs entirely in the user's browser. Nothing is sent anywhere.
2. **The questions never mention Linux.** They are about situations: a misterious box at your doorstep, getting lost in a forest, picking a restaurant in a new city. The mapping happens silently, behind the scenes.
3. **PMD tone.** Slow pacing, lyrical reveal, micro-stories. The distro is presented as a *partner*, not as software.
4. **No "right answer" bias.** Every choice scores something meaningful for some personality. There is no "best" distro and no "best" answer.

## Security posture

The nginx config (`docker/nginx.conf`) ships with:

- Strict **Content-Security-Policy** (no inline scripts, no eval, no external scripts)
- `X-Frame-Options: DENY` and `frame-ancestors 'none'`
- `Referrer-Policy: no-referrer`
- Restrictive `Permissions-Policy`
- `Cross-Origin-Opener-Policy` and `Cross-Origin-Resource-Policy` set to `same-origin`
- `server_tokens off` to hide nginx version
- All dotfiles served as 404

The compose file drops all Linux capabilities not strictly needed by nginx and runs with `no-new-privileges`.

## Roadmap

- [x] **Phase 1:** Project scaffolding, Docker setup, PMD visual base
- [ ] **Phase 2:** Reusable `TextBox` component (typewriter, click-to-continue, pixel border)
- [ ] **Phase 3:** Full quiz flow — questions, scoring, reveal
- [ ] **Phase 4:** Polish — Framer Motion transitions, About screen, responsive
- [ ] **Phase 5:** Deploy — Cloudflare Pages or self-hosted via Docker

## License

Currently no license — all rights reserved while the project is private.
We plan to release under **MIT** when the project goes public.
