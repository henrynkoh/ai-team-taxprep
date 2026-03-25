# Tutorial: Using the curriculum app with your cohort

This walkthrough assumes you are a **facilitator or participant** running the 7-day Seattle-area tax consultant program (W-2/RSU + Airbnb STR + AFH + depreciation + TurboTax Desktop + Claude/ChatGPT/Gemini).

---

## Part 1 — Environment (15 minutes)

### 1.1 Run the app locally

Follow [QUICKSTART.md](./QUICKSTART.md). Confirm the homepage loads.

### 1.2 Open your required tools in parallel

Per curriculum rules, keep available:

- **TurboTax Desktop** (2025/2026 build with depreciation updates)
- **Claude** (claude.ai or API)
- **ChatGPT** (GPT-4o class model or better for advanced track)
- **Gemini** (gemini.google.com)

Arrange windows so participants can compare **the same prompt** across three models.

---

## Part 2 — Week navigation (10 minutes)

### 2.1 Choose a track

- **Standard**: ~4–6 hours/day; full workflow map, media flywheel, one detailed sample return, prompt agents, onboarding/pricing.
- **Advanced**: ~5–7 hours/day; OBBBA nuance, QBI/NIIT, **two** sample returns, deeper chains and proof dashboards.

From the app: **Standard** → `/curriculum/standard`, **Advanced** → `/curriculum/advanced`.

### 2.2 Work day by day

For each day:

1. Open `/curriculum/{standard|advanced}/day/{1–7}`.
2. Complete **exercises** in TurboTax Desktop and your LLM tabs.
3. Produce **deliverables** (documents, screenshots, posted content, diagrams).
4. In the **afternoon block**, run identical prompts in all three LLMs and compare outputs (accuracy, hallucinations, TurboTax-actionable wording).

### 2.3 Post-week

After Day 7, open `/post-week` for cohort-specific follow-on actions and mirror those in your practice (prompt library hygiene, publishing cadence, verification discipline).

---

## Part 3 — Prompt library workflow (20 minutes)

### 3.1 Copy prompts correctly

1. Go to `/prompts` → **Standard** or **Advanced**.
2. Use **Copy** on a single prompt, or **Copy entire library** for backup in Notion/Google Docs.
3. Notice the **suffix**: educational disclaimer + verify with IRS/TurboTax/professional.

### 3.2 Cross-model testing protocol

For each critical prompt (bonus eligibility, material participation, RSU basis):

1. Paste into Claude, ChatGPT, and Gemini.
2. Score: citations, internal consistency, TurboTax screen language, flags for professional judgment.
3. Keep a **“best output”** version in your shared doc; date-stamp it when TurboTax or IRS guidance changes.

### 3.3 Orchestration pattern

Try the documented chain (research → calculation → TurboTax script), e.g. Gemini for Pub skim → Claude for structured math → ChatGPT for step-by-step entry language. Always add a **human verification** step before filing.

---

## Part 4 — Context and compliance (5 minutes)

1. Read `/context-2025` in the app (or `context-2025` route).
2. Build a habit: **LLM output ≠ filing position** until verified against Pub 527, Form 4562 instructions, notices, and live TurboTax worksheets.

---

## Part 5 — Facilitator tips

- **Day 1**: Screenshots + pain-point list are mandatory; tag which steps become “prompt agents” on Day 4.
- **Day 2**: Require three published pieces + lead magnet draft; use [marketing templates](./marketing/) if needed.
- **Day 4**: Deliverables must include a **diagram** (even hand-drawn→photo) of prompt flow into TurboTax.
- **Day 7**: Export the prompt library and 90-day plan into one shared “playbook” document.

---

## Related docs

- [QUICKSTART.md](./QUICKSTART.md) — install and first routes  
- [MANUAL.md](./MANUAL.md) — routes, files, troubleshooting, glossary  
- [marketing/](./marketing/) — social, blog, email copy  
