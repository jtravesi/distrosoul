# distrosoul

[![CI](https://github.com/jtravesi/distrosoul/actions/workflows/ci.yml/badge.svg)](https://github.com/jtravesi/distrosoul/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

> A Pokémon Mystery Dungeon-style personality quiz that recommends your ideal Linux distro.

🌐 **Play it at [distrosoul.jtravesi.workers.dev](https://distrosoul.jtravesi.workers.dev/)**

You answer a short quiz of situational, emotional questions that never mention Linux, and at the end you meet the distro that matches your personality. The flow, tone and visual style are inspired by the personality quiz that opens the Pokémon Mystery Dungeon games.

## Features

- **19 questions, 8 per run.** Every playthrough is different.
- **22 distros** across six natures, each with its own reveal text.
- **English and Spanish.** The quiz follows your browser's language, and you can switch at any time.
- **Procedural soundtrack.** The ambient theme and the typewriter blips are synthesised with the Web Audio API, so there are no audio files. One click mutes them.
- **No tracking.** There are no cookies, no analytics and no backend, and nothing is stored between visits. Fonts are bundled, so the page makes no third-party requests.

## Running locally

Requires **Node.js 22+**.

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

| Script | What it does |
|---|---|
| `npm run dev` | Vite dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | ESLint, zero warnings allowed |
| `npm test` | Checks that every reveal is reachable and prints the result distribution |

### With Docker

```bash
# Development, with hot reload on port 5173
docker compose -f compose.dev.yml up

# Production-like: static build served by a hardened nginx on port 8080
docker compose up -d --build
HOST_PORT=3000 docker compose up -d --build   # another port
```

## How the quiz works

The quiz has three moving parts: the **question pool**, the six **natures** and the **distro matrix**.

### 1. The questions

At runtime, **8 of the 19 questions** are picked at random and shown in random order. None of them mention Linux. They ask about a mysterious box at your doorstep, choosing a restaurant in a new city, the kind of gift you prefer, and so on.

Each question has **4 options**, and each option awards points to **one to three of the six natures**. Most options give one point; especially characteristic ones give two.

### 2. The natures

| Nature | What it captures |
|---|---|
| **Restless** | Needs to touch, break, rebuild. Enjoys the process more than the result. |
| **Serene** | Wants things to just work. Values their time and peace of mind. |
| **Stoic** | Prefers what's tested by time. Conservative, patient, faithful. |
| **Dreamer** | Cares about aesthetics and how things feel. Beauty equals function. |
| **Cautious** | Cares about privacy. Reads the fine print. Trusts slowly. |
| **Curious** | Learns and explores for the pleasure of it. Reads docs for fun. |

After the 8 questions, the nature with the highest total wins. Ties are broken **at random**, as in PMD, where no personality takes priority over another.

### 3. The final question

A fixed ninth question asks *"When the road gets hard, what keeps you going?"*. Its four options map to four **paths**:

- `forward`: the drive to go further
- `plan`: knowing exactly where you're headed
- `help`: the people who walk beside you
- `pace`: knowing the road is yours

This question awards **no nature points**. It picks the specific distro within the winning nature's family.

### 4. The distro matrix

| Nature | `forward` | `plan` | `help` | `pace` |
|---|---|---|---|---|
| **Restless** | Arch Linux | Gentoo | EndeavourOS | EndeavourOS |
| **Serene** | Pop!_OS | Manjaro | Ubuntu | Linux Mint |
| **Stoic** | Slackware | Debian | openSUSE Leap | MX Linux |
| **Dreamer** | Garuda Linux | Pop!_OS | Zorin OS | elementary OS |
| **Cautious** | Tails | Qubes OS | Parrot Home | Whonix |
| **Curious** | CachyOS | openSUSE Tumbleweed | Fedora | NixOS |

There are **23 reveal texts for 22 distros**. Pop!_OS appears under both Serene and Dreamer, with a different text each time, to reflect its dual personality. **Restless × `help`** has no distro of its own and falls back to EndeavourOS, its closest neighbour.

`npm test` checks that every reveal text can be reached and simulates random play to show how often each distro comes up:

```bash
npm test                                # 10k random runs
node scripts/coverage.mjs --runs 50000  # bigger sample
```

## Deployment

The live site is deployed by **Cloudflare Workers Builds**: every push to `main` builds the app and publishes `dist/`, and other branches upload a preview version. [`wrangler.jsonc`](wrangler.jsonc) defines how the site is served (static assets with a single-page-app fallback); the build and deploy commands are set in the Cloudflare dashboard.

Security headers (CSP, framing, referrer and permissions policies) are defined twice, once for each way of serving the site:

- [`public/_headers`](public/_headers) is applied by Cloudflare.
- [`docker/nginx.conf`](docker/nginx.conf) is used by the self-hosted Docker image.

**Keep both in sync** when you change the policy.

## Project structure

```
distrosoul/
├── src/
│   ├── components/
│   │   ├── TextBox.jsx              # PMD dialogue box with typewriter + ▼
│   │   ├── Choices.jsx              # Staggered option menu
│   │   ├── IntroScreen.jsx          # Welcome + Readme link
│   │   ├── QuestionScreen.jsx       # One quiz question + 4 options
│   │   ├── FinalQuestionScreen.jsx  # The path question
│   │   ├── RevealScreen.jsx         # 3-stage reveal with flash
│   │   ├── AboutScreen.jsx          # Readme screen
│   │   ├── LanguageToggle.jsx       # EN/ES corner button
│   │   └── SoundToggle.jsx          # ♪ on/off corner button
│   ├── data/
│   │   ├── questions.js             # Pool of 19 questions (EN + ES)
│   │   ├── finalQuestion.js         # The path question
│   │   └── reveals.js               # 23 reveal texts
│   ├── lib/
│   │   ├── scoring.js               # Nature winner + distro matrix
│   │   ├── selectQuestions.js       # Fisher-Yates random subset
│   │   ├── LanguageContext.jsx      # Language state + t() helper
│   │   ├── SoundContext.jsx         # Sound on/off state
│   │   ├── audio.js                 # Shared AudioContext + blip
│   │   └── musicTheme.js            # Procedural ambient loop
│   ├── assets/fonts/                # Pixel Operator 8 (body font) + license
│   ├── App.jsx                      # Top-level state machine
│   ├── main.jsx                     # React entry point
│   └── index.css                    # Tailwind + PMD styles + background
├── public/_headers                  # Security headers for Cloudflare
├── wrangler.jsonc                   # Cloudflare Workers config (assets + SPA fallback)
├── scripts/coverage.mjs             # Reachability + distribution check (npm test)
├── docker/nginx.conf                # Hardened nginx config for self-hosting
├── Dockerfile / docker-compose.yml  # Production image (nginx-alpine)
├── Dockerfile.dev / compose.dev.yml # Development container
└── .github/workflows/ci.yml         # Lint, build and test on every push and PR
```

## Contributing

Issues and pull requests are welcome, whether it's a new question, a better reveal text or a translation fix. Before opening a PR, run:

```bash
npm run lint && npm test
```

CI runs the same checks. If you add or change a reveal, `npm test` tells you whether it can still be reached.

## Credits

- Body font: [Pixel Operator](https://www.dafont.com/pixel-operator.font) by Jayvee Enaguas, [CC0 1.0](src/assets/fonts/PixelOperator-LICENSE.txt).
- Display font: [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) by CodeMan38, SIL Open Font License 1.1, bundled through [Fontsource](https://fontsource.org/fonts/press-start-2p).

distrosoul is a fan project. It is not affiliated with or endorsed by Nintendo, The Pokémon Company, Spike Chunsoft or Chunsoft.

## License

Released under the [MIT License](LICENSE). Feel free to fork, modify and share it; attribution is appreciated but not required.
