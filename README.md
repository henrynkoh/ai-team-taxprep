# Seattle Combo Tax Curriculum

Next.js 16 app that hosts the **standard** and **advanced** 7-day programs for greater–Seattle tax consultants working complex **single-filer** returns (W-2/RSU, Airbnb STR, AFH, OBBBA bonus depreciation, TurboTax Desktop) with **Claude, ChatGPT, and Gemini** only.

---

## Documentation

| Doc | Purpose |
|-----|---------|
| **[docs/QUICKSTART.md](./docs/QUICKSTART.md)** | Install, run, first clicks — under ~5 minutes |
| **[docs/TUTORIAL.md](./docs/TUTORIAL.md)** | Facilitator / participant walkthrough for the full week |
| **[docs/MANUAL.md](./docs/MANUAL.md)** | Routes, `src/lib` data map, scripts, troubleshooting, glossary |
| **[docs/marketing/README.md](./docs/marketing/README.md)** | Index of **Facebook, Instagram, Threads**, **Blogger, WordPress**, **Naver Blog, Tistory**, **newsletter, email** templates |
| **[docs/marketing/ADS-DISCLAIMERS.md](./docs/marketing/ADS-DISCLAIMERS.md)** | Reusable **English/Korean** disclaimers for ads and posts |

---

## Landing page (`/`)

The home page is a **single-scroll overview**: gradient hero, feature grid, tool stack, both tracks, all **14 day rows** with links, prompt stats, 2025 context bullets, and deep links to `docs/` on GitHub.

- **Desktop:** fixed **left sidebar** with a scrollable section list; items smooth-scroll into view and **highlight** via scroll-spy.
- **Mobile:** horizontal **chip** nav under the header.
- **Bottom-right:** **GitHub** floating button (set `NEXT_PUBLIC_GITHUB_URL` — see `.env.example`).

## Run locally

```bash
cd seattle-tax-curriculum
npm install
cp .env.example .env.local
# Edit .env.local with your real GitHub repo URL
npm run dev
```

Open **http://localhost:3000**.

```bash
npm run build   # production build
npm start       # serve production build
```

---

## What’s in the web app

| Route | Content |
|-------|---------|
| `/` | Landing, daily rhythm, links |
| `/curriculum/standard` · `/curriculum/advanced` | Overview, 7 days, post-week |
| `/curriculum/{track}/day/1` … `7` | Objectives, exercises, deliverables |
| `/prompts` | Hub |
| `/prompts/standard` · `/prompts/advanced` | Copy-paste libraries + disclaimers on copy |
| `/context-2025` | Consolidated context bullets |
| `/post-week` | Cohort follow-on actions |

All material is **educational**. Verify against IRS publications, notices, TurboTax Desktop, and qualified professionals before filing or advising.

---

## Marketing assets

All copy lives under **`docs/marketing/`** (social, Korean blog platforms, newsletter sequences, cold email). Customize placeholders and run paid campaigns per **Meta/Google/Naver** policy for financial and professional services.

---

## License / use

Private or public deployment per your org. Curriculum text is embedded in `src/lib/*.ts`; edit there and rebuild to update the site.
