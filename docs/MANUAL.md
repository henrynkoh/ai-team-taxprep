# Manual — Seattle Combo Tax Curriculum (web app)

## 1. Purpose

This application is a **static curriculum viewer** for tax preparation consultants in the **greater Seattle** market who focus on **complex single-filer** returns combining:

- W-2 wages and **RSU** income (tech employers)
- **Airbnb / short-term rental** operations
- **Adult family home (AFH)** rental income and expenses
- **Depreciation**, including **OBBBA** bonus depreciation context and TurboTax Desktop **Form 4562** workflows
- **Single** filing status

The **AI stack is constrained** to the three LLM families **Claude, ChatGPT, and Gemini**, plus **TurboTax Desktop**. The app does not connect to those products; it documents how cohorts should use them.

---

## 2. Technical stack

| Item | Version / note |
|------|----------------|
| Framework | Next.js 16 (App Router) |
| React | 19 |
| Styling | Tailwind CSS 4 |
| Rendering | Static generation (`generateStaticParams` where applicable) |

**Repository layout (source, not `node_modules` / `.next`):**

```
seattle-tax-curriculum/
├── README.md
├── docs/
│   ├── QUICKSTART.md
│   ├── TUTORIAL.md
│   ├── MANUAL.md          ← this file
│   └── marketing/         ← ad & post templates
├── src/
│   ├── app/               ← routes (pages)
│   ├── components/        ← CopyButton, SiteHeader
│   └── lib/               ← curriculum data, prompts, disclaimers
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## 3. Routes reference

| URL path | Description |
|----------|-------------|
| `/` | Landing: positioning, daily rhythm, cards to tracks |
| `/curriculum/standard` | Standard track overview, days list, post-week summary |
| `/curriculum/advanced` | Advanced track overview, days list, post-week summary |
| `/curriculum/imports` | Import mastery (TurboTax auto-imports), days, post-week |
| `/curriculum/{track}/day/[1–7]` | Single day (`track` = standard \| advanced \| imports) |
| `/prompts` | Hub linking all prompt libraries |
| `/prompts/standard` | 19 prompts, per-prompt copy + copy-all |
| `/prompts/advanced` | 16 prompts, per-prompt copy + copy-all |
| `/prompts/imports` | 11 import-focused prompts + copy-all |
| `/context-2025` | Consolidated 2025–2026 context bullets |
| `/post-week` | Post-week actions for each cohort |

---

## 4. Data modules (`src/lib/`)

| File | Role |
|------|------|
| `disclaimer.ts` | Site footer text; **prompt suffix** per track (standard / advanced / imports) on copy |
| `types.ts` | `CurriculumTrack`, `CurriculumDay`, `PromptItem` |
| `curriculum-standard.ts` | Standard overview + 7 days + post-week list |
| `curriculum-advanced.ts` | Advanced overview + 7 days + post-week list |
| `curriculum-imports.ts` | Import-maximization track (TurboTax imports) |
| `curriculum.ts` | `getCurriculum()`, `getDay()`, `isTrack()` |
| `prompts-imports.ts` | Import-focused prompt library (11 prompts) |
| `track-ui.ts` | Page headings, breadcrumb labels, prompt paths per track |
| `prompts-standard.ts` | Standard prompt bodies (IDs 1–19) |
| `prompts-advanced.ts` | Advanced prompt bodies (IDs 1–16) |

To **edit curriculum text**, change the `.ts` files above and redeploy. There is no CMS.

**Advanced Day 1** includes an optional `practicalGuide` on `CurriculumDay`: full TurboTax Desktop walkthrough, time budget, Seattle tips, and **eight** copy-paste prompts with suffix `PROMPT_SUFFIX_ADVANCED_DAY1_WAGES` (see `src/lib/advanced-day1-practical.ts`). The day page renders this block below objectives / exercises / deliverables.

---

## 5. Components

- **`SiteHeader`**: Global navigation.
- **`CopyButton`** (client): Writes `prompt body + suffix` to the clipboard via `navigator.clipboard`. Requires **HTTPS** or `localhost` for clipboard API in most browsers.

---

## 6. Scripts

| Command | Effect |
|---------|--------|
| `npm run dev` | Development server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

---

## 7. Troubleshooting

| Issue | What to try |
|--------|-------------|
| **Copy** does nothing | Use `localhost` or HTTPS; check browser clipboard permissions. |
| **Wrong “workspace root” warning** during build | Multiple `package-lock.json` files in parent paths; run commands from `seattle-tax-curriculum` directory; warning is often benign. |
| **404 on dynamic route** | Only `standard` / `advanced` and days `1`–`7` are valid. |
| **Stale content after edit** | Hard refresh; restart `next dev`; rebuild for production. |

---

## 8. Legal and educational posture

- Footer and prompt suffixes state that material is **educational** and must be **verified** against IRS publications, Form 4562 instructions, applicable **notices**, **TurboTax Desktop** behavior, and a **qualified tax professional**.
- **Paid ads** and public posts must not promise specific tax outcomes. Use the disclaimer blocks in [marketing/ADS-DISCLAIMERS.md](./marketing/ADS-DISCLAIMERS.md).

---

## 9. Glossary (in-app topics)

| Term | Short meaning |
|------|----------------|
| **STR** | Short-term rental; curriculum stresses average stay and reporting classification. |
| **AFH** | Adult family home; rental reporting on appropriate schedules per facts. |
| **OBBBA** | Legislative context referenced in curriculum for bonus depreciation timing (verify current law/guidance). |
| **Material participation** | Facts-and-circumstances tests affecting passive vs non-passive treatment. |
| **Form 4562** | Depreciation and amortization; TurboTax entry paths vary by update. |

---

## 10. Updating for new tax years

1. Edit **context** copy in `curriculum-*.ts` and/or add a new route (e.g. `context-2026`) if you fork the app.
2. Revise **prompts** to reference the correct year and publications.
3. Re-run `npm run build` and regression-check all routes.

---

## 11. Support

This repo is self-contained. For Next.js behavior, see `node_modules/next/dist/docs/` per project **AGENTS.md** guidance.
