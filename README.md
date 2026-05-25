# distrosoul

> A Pokémon Mystery Dungeon-style personality quiz that recommends your ideal Linux distro.

The user takes a short quiz of situational, emotional questions — never about Linux itself — and at the end discovers the distro that matches their personality. The flow, tone, and visual style are inspired by the personality quiz that opens the Pokémon Mystery Dungeon games.

## Live

🌐 _Coming soon — Cloudflare Pages deploy in progress._

<!-- Once deployed, replace this section with: -->
<!-- 🌐 **[distrosoul.example.com](https://distrosoul.example.com)** -->

## Stack

- **React 18** + **Vite** for the frontend (single-page app)
- **Tailwind CSS** for styling, with a custom PMD-inspired theme
- **Framer Motion** for screen transitions and the reveal sequence
- **Web Audio API** for the synthesised ambient theme and typewriter blip (no audio files)
- **Pixelify Sans** + **Press Start 2P** as typography (loaded from Google Fonts)
- **nginx-alpine** to serve the built static files when self-hosting
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

Visit [http://localhost:8080](http://localhost:8080). This builds the static site and serves it via nginx, exactly as it would run in self-hosted production.

You can change the host port with the `HOST_PORT` env var:

```bash
HOST_PORT=3000 docker compose up -d --build
```

## How the quiz works

The quiz has three logical pieces: the **question pool**, the six **natures**, and the **distro matrix**.

### 1. The questions

There are **19 situational questions** in the pool. At runtime, **8 are picked at random** and presented in random order. None of them mention Linux — they ask about a mysterious box at your doorstep, picking a restaurant in a new city, what kind of gift you prefer, and so on.

Each question has **exactly 4 options**, and each option awards points to **one to three of the six natures**. Most options give one point; particularly characteristic ones give two.

### 2. The natures

The six personalities the quiz scores you against:

| Nature | What it captures |
|---|---|
| **Restless** | Needs to touch, break, rebuild. Enjoys the process more than the result. |
| **Serene** | Wants things to just work. Values their time and peace of mind. |
| **Stoic** | Prefers what's tested by time. Conservative, patient, faithful. |
| **Dreamer** | Cares about aesthetics and how things feel. Beauty equals function. |
| **Cautious** | Cares about privacy. Reads the fine print. Trusts slowly. |
| **Curious** | Learns and explores for the pleasure of it. Reads docs for fun. |

After the 8 questions, the nature with the highest total wins. Ties are broken **randomly** (PMD-style: there's no priority order between personalities).

### 3. The final question

A fixed ninth question — "When the road gets hard, what keeps you going?" — has four options that map to four **paths**:

- `forward` — the drive to go further
- `plan` — knowing exactly where you're headed
- `help` — the people who walk beside you
- `pace` — knowing the road is yours

This question awards **no nature points**. Its job is to pick the specific distro within the winning nature's family.

### 4. The distro matrix

Each `nature × path` combination maps to a concrete distro. The full mapping:

| Nature | `forward` | `plan` | `help` | `pace` |
|---|---|---|---|---|
| **Restless** | Arch Linux | Gentoo | — | EndeavourOS |
| **Serene** | Pop!_OS | Manjaro | Ubuntu | Linux Mint |
| **Stoic** | Slackware | Debian | openSUSE Leap | MX Linux |
| **Dreamer** | Garuda Linux | Pop!_OS | Zorin OS | elementary OS |
| **Cautious** | Tails | Qubes OS | Parrot Home | Whonix |
| **Curious** | CachyOS | openSUSE Tumbleweed | Fedora | NixOS |

That's **23 cells covering 22 distinct distros** — Pop!_OS appears in both Serene and Dreamer with two different reveal texts, reflecting its dual personality. **Restless × `help` is intentionally empty**: if the scoring lands there, it falls back to EndeavourOS (Restless × `pace`) as the neighbour suggested in the design brief.

A coverage script verifies that every reveal text is reachable and reports the empirical distribution under random play:

```bash
node scripts/coverage.mjs              # default: 10k random runs
node scripts/coverage.mjs --runs 50000 # bigger sample
```

After the rebalance in Phase 3, all six natures sit within a 15.4–18.1% empirical band (ideal: 16.7%).

## Project structure

```
distrosoul/
├── src/
│   ├── components/
│   │   ├── TextBox.jsx              # PMD dialogue with typewriter + ▼
│   │   ├── Choices.jsx              # Staggered option menu
│   │   ├── IntroScreen.jsx          # Welcome + Readme link
│   │   ├── QuestionScreen.jsx       # One quiz question + 4 options
│   │   ├── FinalQuestionScreen.jsx  # The tie-break question
│   │   ├── RevealScreen.jsx         # 3-stage reveal with cream flash
│   │   ├── AboutScreen.jsx          # Readme screen
│   │   └── SoundToggle.jsx          # ♪ on/off corner button
│   ├── data/
│   │   ├── questions.js             # Pool of 19 questions
│   │   ├── finalQuestion.js         # The tie-break question
│   │   └── reveals.js               # 22 reveal texts
│   ├── lib/
│   │   ├── scoring.js               # Nature winner + distro mapping
│   │   ├── selectQuestions.js       # Fisher-Yates random subset
│   │   ├── audio.js                 # Shared AudioContext + blip
│   │   ├── musicTheme.js            # Procedural ambient loop
│   │   └── SoundContext.jsx         # Sound enable/disable + provider
│   ├── App.jsx                      # Top-level state machine
│   ├── main.jsx                     # React entry point
│   └── index.css                    # Tailwind + PMD styles + bg waves
├── scripts/
│   └── coverage.mjs                 # Reachability + distribution dev script
├── docker/
│   └── nginx.conf                   # Hardened nginx config (CSP, headers)
├── Dockerfile                       # Production (multi-stage, nginx-alpine)
├── Dockerfile.dev                   # Development (Node + Vite)
├── docker-compose.yml               # Production compose
├── compose.dev.yml                  # Development compose
└── ...
```

## License

Currently no license — all rights reserved while the project is private.
We plan to release under **MIT** when the project goes public.
