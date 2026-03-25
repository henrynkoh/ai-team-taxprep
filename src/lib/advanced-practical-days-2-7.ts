import type { DayPracticalGuide, PromptItem } from "./types";

/* ─── Day 2 ─────────────────────────────────────────────────────────── */

const ADVANCED_DAY2_PROMPTS: PromptItem[] = [
  {
    id: 1,
    label: "15 hook lines — OBBBA + STR + RSU (Seattle)",
    category: "Hooks & positioning",
    body: `You are a tax marketing strategist for greater Seattle. Generate 15 scroll-stopping hook lines for experienced preparers who serve single filers with W-2/RSU, Airbnb STR, and AFH. Tie in OBBBA 100% bonus depreciation and material participation where appropriate. No guaranteed savings; educational tone.`,
  },
  {
    id: 2,
    label: "LinkedIn carousel — 10-slide outline",
    category: "LinkedIn",
    body: `Draft a 10-slide LinkedIn carousel outline for a Seattle-area EA/CPA: topic “Why 2025 bonus depreciation + STR facts matter for single tech renters.” Each slide: title + 2–3 bullets. Last slide: soft CTA for professional consult. Avoid promising specific dollar outcomes.`,
  },
  {
    id: 3,
    label: "60-second Reels / Shorts script",
    category: "Video",
    body: `Write a 60-second vertical video script (teleprompter style) for a tax pro: hook, 3 teaching beats on TurboTax + complexity, closing with “verify with a pro.” Plain language; assume Seattle tech audience.`,
  },
  {
    id: 4,
    label: "Facebook group authority post",
    category: "Facebook",
    body: `Write a 350–450 word authority post for a Seattle landlord / tech worker Facebook group. Topic: single-filer returns with RSU + rental income — why DIY breaks down. Include one discussion question. Add mandatory educational disclaimer block at end.`,
  },
  {
    id: 5,
    label: "Lead magnet — “OBBBA playbook” chapter outline",
    category: "Lead magnet",
    body: `Create a downloadable PDF outline titled “2025 Single-Filer OBBBA & STR Considerations (Educational).” Chapters, subheads, and fill-in blanks for checklists. Note: not individualized advice.`,
  },
  {
    id: 6,
    label: "Headline A/B for premium consult booking",
    category: "Conversion",
    body: `Generate 8 headline + subhead pairs for a landing page booking a $X premium review. Audience: Seattle single filer with RSU + STR. Emphasize process and verification, not magic savings.`,
  },
  {
    id: 7,
    label: "Content compliance pass",
    category: "Compliance",
    body: `Review this draft social post [paste]. Flag any phrases that could violate FTC/Meta financial claims or PTIN ethics. Rewrite risky lines into compliant educational language.`,
  },
  {
    id: 8,
    label: "Meta — content director for niche",
    category: "Meta",
    body: `Act as editorial director for a Seattle tax practice targeting W-2/RSU + STR + AFH single filers. For this week’s theme [paste], propose a 3-channel content pack (LinkedIn, Reel, FB) with hooks, and a 5-criteria rubric to score draft quality across Claude, ChatGPT, and Gemini.`,
  },
];

export const ADVANCED_DAY2_PRACTICAL: DayPracticalGuide = {
  promptSuffixKind: "advanced",
  subtitle:
    "Authority media flywheel: turn OBBBA + STR + RSU expertise into publishable assets using Claude, ChatGPT, and Gemini in parallel.",
  assumptions: [
    "Firm disclaimer / “educational only” language approved for public posts.",
    "Three LLM browser tabs + doc template for final copy.",
    "Target communities identified (e.g., Eastside landlord groups, Seattle tech networking threads).",
  ],
  timeBreakdown: [
    { label: "ICP, promise boundaries, hook brainstorm (solo + LLM)", time: "60–90 min" },
    { label: "Cross-model draft sprint (carousel, Reels, FB)", time: "2–2.5 hrs" },
    { label: "Edit, brand voice pass, schedule or publish 3 pieces", time: "60–90 min" },
    { label: "Lead magnet outline + cover title", time: "45–60 min" },
    { label: "Compliance skim + group critique", time: "30–45 min" },
  ],
  blocks: [
    {
      heading: "Morning — Positioning & hook inventory",
      duration: "60–90 min",
      ordered: true,
      items: [
        "Re-read ICP: single filer, Seattle metro, W-2/RSU + STR and/or AFH, TurboTax-heavy.",
        "List non-negotiables: no guaranteed refunds, no “IRS loophole” without context, cite verify-with-pro.",
        "Run parallel “hook sprint” in Claude, ChatGPT, Gemini with the same brief; collect ≥15 hooks.",
        "Shortlist 6 hooks for production today.",
      ],
    },
    {
      heading: "Mid-morning — Three-format first drafts",
      duration: "90–120 min",
      ordered: true,
      items: [
        "LinkedIn: finalize 10-slide carousel outline (titles + bullets) from best hooks.",
        "Reels: lock 60s script; mark b-roll ideas (TurboTax screen blur, calculator prop).",
        "Facebook: long-form post with question CTA and disclaimer.",
        "Keep model outputs in separate doc sections for comparison.",
      ],
    },
    {
      heading: "Midday — Polish, schedule, publish",
      duration: "60–90 min",
      ordered: true,
      items: [
        "Human edit pass: cut jargon, check SALT/OBBBA claims for overreach.",
        "Schedule posts (or publish live if cohort rule).",
        "UTM or simple spreadsheet: channel, topic, date (for Day 6 case studies).",
      ],
    },
    {
      heading: "Afternoon — Lead magnet shell",
      duration: "45–60 min",
      ordered: true,
      items: [
        "From LLM outline, build PDF skeleton in Google Docs / Canva.",
        "Export placeholder PDF or link for bio (“Playbook v0.1”).",
        "Prepare 1 email / DM snippet for delivery after opt-in.",
      ],
    },
    {
      heading: "Wrap — Peer critique & compliance",
      duration: "30–45 min",
      ordered: false,
      items: [
        "Round-robin: which model produced the strongest hook? Weakest?",
        "Checklist: disclaimers visible, no client PII in screenshots, no specific dollar promises.",
      ],
    },
  ],
  llmSection: {
    heading: "LLM core block — compare models on the same brief",
    duration: "Throughout day",
    paragraphs: [
      "For each asset, run the same user brief in all three models; pick sentences à la carte rather than pasting one full draft.",
      "Track hallucination patterns (e.g., wrong bonus dates); add to your practice “LLM errata” note.",
    ],
  },
  closingParagraph:
    "Day 2 ends with three live or scheduled authority assets plus a v0 lead magnet shell — the visibility engine for Days 5–7 offers.",
  seattleTips: [
    "Localize: mention geography sparingly but clearly (Eastside, Seattle, Bellevue tech) for relevance.",
    "Tech workers respond to process transparency (“here is how we cross-check TurboTax”) over tax jargon.",
    "Save your best hooks into a Notion/Swipe file tagged #OBBBA #STR #RSU.",
  ],
  dayPrompts: ADVANCED_DAY2_PROMPTS,
};

/* ─── Day 3 ─────────────────────────────────────────────────────────── */

const ADVANCED_DAY3_PROMPTS: PromptItem[] = [
  {
    id: 1,
    label: "Scenario A — 100% bonus asset entry script",
    category: "TurboTax / OBBBA",
    body: `Client placed qualifying personal property in service Mar 2025 (post–Jan 19, 2025). Write exact TurboTax Desktop 2025/2026 navigation to enter assets and claim 100% bonus where allowed, including Form 4562 touchpoints. Note election language to verify in software.`,
  },
  {
    id: 2,
    label: "Scenario B — 40% transition vs 100% narrative",
    category: "TurboTax / OBBBA",
    body: `Explain when early-2025 placed-in-service property might use transition / 40% vs 100% under current law summaries the preparer is using. Output decision tree + TurboTax interview cues — educational; preparer must verify law.`,
  },
  {
    id: 3,
    label: "Material participation hour log — audit style",
    category: "Documentation",
    body: `Create a week-by-week hour log template for STR + AFH activity (single filer) aimed at non-passive treatment facts. Include activity categories and a short audit narrative paragraph template.`,
  },
  {
    id: 4,
    label: "Schedule E vs C — interview questions",
    category: "Classification",
    body: `List 12 TurboTax-style interview questions to decide Schedule E vs Schedule C for short-term rental with average stay under 7 days. Output routing table: answer pattern → recommended schedule (hypothetical; verify facts).`,
  },
  {
    id: 5,
    label: "Dual-return documentation index",
    category: "Documentation",
    body: `We completed Scenario A (100% bonus) and Scenario B (transition + heavy hours) in TurboTax Desktop. Generate a 25-row screenshot index: Section | Screen name | Scenario | Note | Risk flag.`,
  },
  {
    id: 6,
    label: "Risk flags — single filer QBI / NIIT",
    category: "Optimization",
    body: `Given wage + rental + potential non-passive losses [paste assumptions], list QBI and NIIT risk flags Smart Check might surface and how to document professional judgment.`,
  },
  {
    id: 7,
    label: "LLM → checklist pipeline prompt",
    category: "Meta",
    body: `Here is a raw bullet list of clicks from a preparer [paste]. Convert into a numbered TurboTax Desktop checklist with “verify” gates after every 5 steps.`,
  },
  {
    id: 8,
    label: "Meta — dual scenario controller",
    category: "Meta",
    body: `You are lead preparer. Scenario A: post–Jan 19 bonus assets; Scenario B: transition + material participation. For each, list top 5 failure points in TurboTax Desktop and the order to address them before Federal Review.`,
  },
];

export const ADVANCED_DAY3_PRACTICAL: DayPracticalGuide = {
  promptSuffixKind: "advanced",
  subtitle:
    "Stress-test two full anonymized returns in TurboTax Desktop — then freeze documentation and LLM-ready checklists.",
  assumptions: [
    "TurboTax Desktop updated; Windows; sample data only (no real SSNs in LLM prompts).",
    "Scenario A: qualifying 100% bonus assets post–Jan 19, 2025.",
    "Scenario B: transition / 40% facts + aggressive but good-faith material participation log.",
  ],
  timeBreakdown: [
    { label: "Scenario A — full entry through Review", time: "2–2.5 hrs" },
    { label: "Scenario B — full entry through Review", time: "2–2.5 hrs" },
    { label: "Screenshot + written process notes", time: "60–90 min" },
    { label: "LLM checklist conversion + errata", time: "45–60 min" },
    { label: "Peer compare + flag swap", time: "30–45 min" },
  ],
  blocks: [
    {
      heading: "Setup — two files, two cover sheets",
      duration: "15–20 min",
      ordered: true,
      items: [
        "Create or duplicate two TurboTax test files: COVER_A_100BONUS, COVER_B_TRANSITION_MP.",
        "Paste assumptions sheet at top of internal wiki (hours, stay averages, asset dates).",
        "Confirm prior-year import path if carryovers are part of lab.",
      ],
    },
    {
      heading: "Scenario A — 100% bonus path",
      duration: "2–2.5 hrs",
      ordered: true,
      items: [
        "Complete wages/RSU/investment imports per Day 1 diligence.",
        "Enter rental/STR/AFH facts; place assets with post–Jan 19, 2025 dates.",
        "Work Form 4562 / asset detail worksheets; capture election screens.",
        "Run Federal Review and Smart Check; export or screenshot error list.",
      ],
    },
    {
      heading: "Scenario B — transition rules + participation log",
      duration: "2–2.5 hrs",
      ordered: true,
      items: [
        "Mirror import discipline; emphasize participation hours and STR avg stay documentation.",
        "Test 40% vs 100% fork in software per your supported facts.",
        "Verify Schedule placement (E vs C) against interview answers.",
        "Run Review; compare warning profile to Scenario A.",
      ],
    },
    {
      heading: "Documentation pack",
      duration: "60–90 min",
      ordered: true,
      items: [
        "For each scenario: minimum 15 screenshots with filename convention Day3_A_###.png.",
        "Write 1-page delta summary: what differed in Smart Check between A and B.",
        "Log software version + build date in readme.",
      ],
    },
    {
      heading: "Group compare",
      duration: "30–45 min",
      ordered: false,
      items: [
        "Swap notes: which scenario caused more TurboTax friction?",
        "Add entries to team errata for Day 4 chains.",
      ],
    },
  ],
  llmSection: {
    heading: "LLM block — from screenshots to reusable checklists",
    duration: "45–60 min",
    paragraphs: [
      "Feed structured notes (never PII) into each model; ask for numbered checklists and risk callouts.",
      "Diff the three outputs; merge into one gold checklist in your playbook repo.",
    ],
  },
  closingParagraph:
    "Day 3 leaves two fully exercised combo returns, a documentation pack, and merged LLM checklists — raw material for agent chains on Day 4.",
  seattleTips: [
    "Stage Seattle-flavored fact patterns (e.g., high state wages, no state income tax nuance) in reviewer notes.",
    "If Smart Check conflicts with your professional judgment, document accordingly before relying on software alone.",
  ],
  dayPrompts: ADVANCED_DAY3_PROMPTS,
};

/* ─── Day 4 ─────────────────────────────────────────────────────────── */

const ADVANCED_DAY4_PROMPTS: PromptItem[] = [
  {
    id: 1,
    label: "Chain spec — bonus eligibility",
    category: "Orchestration",
    body: `Design a 3-step LLM chain (Gemini → Claude → ChatGPT): (1) summarize OBBBA placement-date rules from provided excerpt, (2) test asset list for eligibility, (3) TurboTax entry narrative. Include explicit “human verify” gates.`,
  },
  {
    id: 2,
    label: "Chain spec — multi-year RSU + depreciation",
    category: "Orchestration",
    body: `Blueprint a chain forecasting 2025–2027 taxable income with RSU spikes + depreciation swings. Specify model roles, inputs, and where Excel must replace LLM math.`,
  },
  {
    id: 3,
    label: "Verifier layer prompt",
    category: "Quality",
    body: `Given draft chain outputs [paste], act as skeptical reviewer: list contradictions, hallucination risks, and missing citations. Output severity (High/Med/Low).`,
  },
  {
    id: 4,
    label: "Model role matrix",
    category: "Strategy",
    body: `For tasks research / calculation / TurboTax scripting / client email, score Claude vs ChatGPT vs Gemini 1–5 with justification for THIS niche. Recommend default routing.`,
  },
  {
    id: 5,
    label: "Failure modes — when chains break",
    category: "Risk",
    body: "List 10 ways LLM chains fail in tax prep (over-confidence, wrong year, wrong form). For each: detection signal + mitigation.",
  },
  {
    id: 6,
    label: "Client script from chain output",
    category: "Delivery",
    body: `Turn this technical chain summary [paste] into a 200-word client email explaining next steps and caveats (educational).`,
  },
  {
    id: 7,
    label: "ASCII / Mermaid orchestration draft",
    category: "Diagram",
    body: `Produce Mermaid.js or ASCII diagram: nodes = model stages, edges = handoffs, diamonds = human approval. Use Day 3 checklist as tail node.`,
  },
  {
    id: 8,
    label: "Meta — chain architect interview",
    category: "Meta",
    body: `You are automating a Seattle combo return desk using only three LLMs. Given prep time ≤15 min per chain run, prioritize two chains to build first and defend tradeoffs.`,
  },
];

export const ADVANCED_DAY4_PRACTICAL: DayPracticalGuide = {
  promptSuffixKind: "advanced",
  subtitle:
    "Design, test, and diagram multi-step LLM chains tied to Day 3 checklists — with verifier layers.",
  assumptions: [
    "Day 3 outputs available (screenshot index + merged checklist).",
    "Team can run three models side-by-side for 2+ hours.",
  ],
  timeBreakdown: [
    { label: "Inventory mechanical tasks from Day 3", time: "30–45 min" },
    { label: "Draft + run Chain A (bonus)", time: "90–120 min" },
    { label: "Draft + run Chain B (forecast)", time: "90–120 min" },
    { label: "Verifier + diagram + peer review", time: "60–90 min" },
  ],
  blocks: [
    {
      heading: "Inventory — mechanical vs judgment",
      duration: "30–45 min",
      ordered: true,
      items: [
        "List ≥8 mechanical tasks (eligibility screens, basis recalc, hour summaries).",
        "Highlight 4 tasks that must stay human-final.",
      ],
    },
    {
      heading: "Chain A — build & run",
      duration: "90–120 min",
      ordered: true,
      items: [
        "Implement Gemini → Claude → ChatGPT handoffs per prompt 1.",
        "Save transcripts with timestamps.",
        "Score output: actionable TurboTax steps vs fluff.",
      ],
    },
    {
      heading: "Chain B — build & run",
      duration: "90–120 min",
      ordered: true,
      items: [
        "Use anonymized Scenario A/B totals as inputs.",
        "Force explicit “Excel reconciliation” step in chain spec.",
      ],
    },
    {
      heading: "Verifier + diagram",
      duration: "45–60 min",
      ordered: true,
      items: [
        "Run verifier prompt on both chains.",
        "Draw orchestration diagram; snap into playbook.",
      ],
    },
    {
      heading: "Retro",
      duration: "30–45 min",
      ordered: false,
      items: [
        "What would you automate next vs never?",
        "Update README with chain SLAs (max length, stop conditions).",
      ],
    },
  ],
  llmSection: {
    heading: "LLM spine — parallel chains, one verifier",
    duration: "Core of day",
    paragraphs: [
      "Treat models as specialists, not voters — disagreeing outputs trigger human review.",
      "Always cap chain depth (≤4 LLM steps) to control drift.",
    ],
  },
  closingParagraph:
    "Day 4 produces living chain specs + diagrams you will reuse weekly — backbone of the premium combo desk.",
  seattleTips: [
    "Note Seattle client seasonality (Feb–Apr crunch) in chain SLAs.",
    "Archive best transcripts as training for associate reviewers.",
  ],
  dayPrompts: ADVANCED_DAY4_PROMPTS,
};

/* ─── Day 5 ─────────────────────────────────────────────────────────── */

const ADVANCED_DAY5_PROMPTS: PromptItem[] = [
  {
    id: 1,
    label: "Premium onboarding questionnaire",
    category: "Onboarding",
    body: `Draft 25 client intake questions covering OBBBA placement dates, STR stay averages, AFH lease facts, RSU schedules, brokerage logins expectation, and document upload list.`,
  },
  {
    id: 2,
    label: "Proof dashboard — Google Sheets metrics",
    category: "Proof",
    body: `List metrics rows and example formulas for a “tax savings proof” sheet: baseline vs scenario (educational projection). Use generic cell refs; flag where CPA must replace with real data.`,
  },
  {
    id: 3,
    label: "Savings visualization brief",
    category: "Proof",
    body: `Describe a 1-page visual (chart types) comparing effective tax post-OBBBA + STR facts vs baseline — suitable for client PDF. No fabricated numbers.`,
  },
  {
    id: 4,
    label: "Tiered pricing — client-facing letter",
    category: "Pricing",
    body: `Write a 3-tier service menu (Core / Combo / White-glove) for Seattle single-filer desk; include what’s included, turnaround, and optional outcome-linked component — ethical wording.`,
  },
  {
    id: 5,
    label: "Objection FAQ",
    category: "Pricing",
    body: `Answer 8 objections (price, DIY TurboTax, “can’t you just tell me the loophole”). Tone: confident, compliant.`,
  },
  {
    id: 6,
    label: "Proof one-pager copy",
    category: "Delivery",
    body: `Turn dashboard metrics [paste labels only] into client-facing bullets suitable for email attachment.`,
  },
  {
    id: 7,
    label: "Onboarding email sequence (3 mails)",
    category: "Operations",
    body: `After booking: email 1 docs list; email 2 import instructions; email 3 expectations + turnaround. Plain text friendly.`,
  },
  {
    id: 8,
    label: "Meta — COO for boutique tax firm",
    category: "Meta",
    body: `Given capacity 40 returns / season and 2 staff, prioritize onboarding vs proof vs pricing tasks completed today; output 90-day rollout order.`,
  },
];

export const ADVANCED_DAY5_PRACTICAL: DayPracticalGuide = {
  promptSuffixKind: "advanced",
  subtitle:
    "Premium intake, measurable proof, and ethical value pricing — expressed in client-ready language drafted with LLMs.",
  assumptions: [
    "Brand voice guide or prior emails exist to match tone.",
    "No real client data in prompts — use placeholders.",
  ],
  timeBreakdown: [
    { label: "Intake form + portal copy", time: "60–90 min" },
    { label: "Sheets proof prototype + chart brief", time: "90–120 min" },
    { label: "Pricing tiers + objections", time: "60–90 min" },
    { label: "LLM red-team + human edit", time: "45–60 min" },
  ],
  blocks: [
    {
      heading: "Intake architecture",
      duration: "60–90 min",
      ordered: true,
      items: [
        "Map fields → TurboTax sections (W-2, 1099-B, rental, assets).",
        "Add file-upload size + naming conventions.",
        "Export form JSON or PDF for website embed later.",
      ],
    },
    {
      heading: "Proof dashboard prototype",
      duration: "90–120 min",
      ordered: true,
      items: [
        `Build skeleton Google Sheet: columns "Metric | Baseline | Scenario | Delta | Notes".`,
        "Wire simple formulas; drop hero chart in second tab.",
        "Decide what is shown vs hidden to clients.",
      ],
    },
    {
      heading: "Pricing & packaging",
      duration: "60–90 min",
      ordered: true,
      items: [
        "Define deliverables per tier; align with onboarding workload.",
        "Draft outcome-based component wording for counsel review if needed.",
      ],
    },
    {
      heading: "Red-team",
      duration: "30–45 min",
      ordered: true,
      items: [
        "LLM-read pricing page: ethics + Reg BI / state board sensitivities (flag only).",
        "Human partner approval checkpoint.",
      ],
    },
    {
      heading: "Handoff",
      duration: "30–45 min",
      ordered: false,
      items: [
        "Package assets in /ClientExperience v1 folder.",
        "List TODO for Day 7 playbook merge.",
      ],
    },
  ],
  llmSection: {
    heading: "LLM pass — polish and stress-test",
    duration: "45–60 min",
    paragraphs: [
      "Use three models to tear down then rebuild pricing copy; keep calm, factual tone.",
      "Cross-check that savings visuals never imply audit protection.",
    ],
  },
  closingParagraph:
    "Day 5 gives you a premium-feeling front door: intake, proof artifact, and defendable pricing ready for pilot clients.",
  seattleTips: [
    "Localize examples (“Eastside STR”) sparingly to signal relevance without excluding Seattle core.",
    "If offering outcome-linked fees, confirm permissibility with your credentialing body.",
  ],
  dayPrompts: ADVANCED_DAY5_PROMPTS,
};

/* ─── Day 6 ─────────────────────────────────────────────────────────── */

const ADVANCED_DAY6_PROMPTS: PromptItem[] = [
  {
    id: 1,
    label: "Carryover explainer — client email",
    category: "Multi-year",
    body: `Explain passive loss / depreciation carryover from 2024 → 2025 in plain English for a sophisticated single filer; tie to why prior-year TurboTax import matters.`,
  },
  {
    id: 2,
    label: "2026 estimated tax — planning prompt",
    category: "Estimates",
    body: `Given 2025 outcomes + RSU grant calendar [placeholder], draft quarterly estimate assumptions table; flag safe harbor vs annualization choice points — educational.`,
  },
  {
    id: 3,
    label: "Case study A — narrative draft",
    category: "Case study",
    body: `Write anonymized case study: Seattle tech employee, RSU + STR, OBBBA assets after Jan 19, 2025 — focus on process + lessons, not dollar brags.`,
  },
  {
    id: 4,
    label: "Case study B — alternate fact pattern",
    category: "Case study",
    body: `Second case with heavier material participation + transition bonus facts; 400 words; include “what we’d watch next year.”`,
  },
  {
    id: 5,
    label: "Repurpose case → LinkedIn long-form",
    category: "Content",
    body: `Adapt case study A into LinkedIn article structure: hook, story, 3 lessons, CTA.`,
  },
  {
    id: 6,
    label: "Content calendar add — 4 weeks",
    category: "Content",
    body: `From case proofs, propose 4-week posting calendar mixing proof stats (ranges only) and educational hooks.`,
  },
  {
    id: 7,
    label: "Compounding prompts — prior LLM output → new",
    category: "Meta",
    body: `Here is last week’s LLM checklist [paste]. Generate an improved v2 prompt that explicitly references v1 mistakes list.`,
  },
  {
    id: 8,
    label: "Meta — multi-year strategist",
    category: "Meta",
    body: `You advise the same niche. Rank 2025–2027 planning topics by ROI for client retention; justify top 3.`,
  },
];

export const ADVANCED_DAY6_PRACTICAL: DayPracticalGuide = {
  promptSuffixKind: "advanced",
  subtitle:
    "Compound workflows: carryovers, estimates, case studies, and media that reuse prior LLM artifacts.",
  assumptions: [
    "Anonymized outcomes from Days 1–5 sufficient to draft case narratives (no PII).",
    "Calendar tool for scheduling repurposed content.",
  ],
  timeBreakdown: [
    { label: "Carryover + import verification lecture/lab", time: "60 min" },
    { label: "2026 estimate model shell", time: "60–90 min" },
    { label: "Two case study drafts", time: "2 hrs" },
    { label: "Repurpose + calendar", time: "60–90 min" },
    { label: "Compounding prompt exercise", time: "45 min" },
  ],
  blocks: [
    {
      heading: "Carryover verification lab",
      duration: "60 min",
      ordered: true,
      items: [
        "Walk through prior-year .tax → current depreciation screens.",
        "List 5 common break points when carryovers fail to attach.",
      ],
    },
    {
      heading: "2026 estimate shell",
      duration: "60–90 min",
      ordered: true,
      items: [
        "Build spreadsheet skeleton with quarterly due dates.",
        "Drop RSU spike months as manual overrides.",
      ],
    },
    {
      heading: "Case study sprint",
      duration: "2 hrs",
      ordered: true,
      items: [
        "Draft A + B; swap peer edits.",
        "Highlight process metrics (time saved) over illegal outcome claims.",
      ],
    },
    {
      heading: "Repurpose + calendar",
      duration: "60–90 min",
      ordered: true,
      items: [
        "Long-form LinkedIn from best case.",
        "Schedule 4 downstream posts.",
      ],
    },
    {
      heading: "Compounding exercise",
      duration: "45 min",
      ordered: false,
      items: [
        "Run prompt 7 with real prior output excerpt.",
        "Log version delta in playbook changelog.",
      ],
    },
  ],
  llmSection: {
    heading: "LLM compounding",
    duration: "45–60 min",
    paragraphs: [
      "Explicitly feed yester-month outputs as labeled context in prompts to reduce re-explaining.",
      "Maintain changelog of prompt versions (v1, v2…) for audit of methodology, not client data.",
    ],
  },
  closingParagraph:
    "Day 6 turns operational wins into stories and forward-looking plans — fuel for authority and retention.",
  seattleTips: [
    "Seattle media cycles: post early week mornings for tech audience engagement tests.",
    "If referencing local employers, stay anonymized and factual.",
  ],
  dayPrompts: ADVANCED_DAY6_PROMPTS,
};

/* ─── Day 7 ─────────────────────────────────────────────────────────── */

const ADVANCED_DAY7_PROMPTS: PromptItem[] = [
  {
    id: 1,
    label: "90-day OKR draft",
    category: "Scale",
    body: `Create OKRs (Objectives + Key Results) for a 3-person Seattle combo tax desk launching May–July: include revenue, turnaround, LLM hours saved, NPS — realistic targets.`,
  },
  {
    id: 2,
    label: "Metrics dashboard spec",
    category: "Scale",
    body: `Specify weekly dashboard: metrics, data sources, owner, refresh day. Include leading vs lagging indicators for niche practice.`,
  },
  {
    id: 3,
    label: "Reviewer job description — RSU/STR",
    category: "Hiring",
    body: `Draft JD bullet list + interview questions for contract reviewer specializing in equity comp + rental classification.`,
  },
  {
    id: 4,
    label: "Playbook introduction letter",
    category: "Playbook",
    body: `Write 1-page intro for internal “Combo Return Playbook v1” explaining purpose, LLM policy, update cadence.`,
  },
  {
    id: 5,
    label: "Vision narrative — “default layer”",
    category: "Vision",
    body: `3-paragraph vision: become Seattle’s default desk for single-filer W-2/RSU + STR + AFH + OBBBA — without hype, with compliance posture.`,
  },
  {
    id: 6,
    label: "14-day launch checklist",
    category: "Launch",
    body: `After cohort ends, list chronological tasks for next 14 days (ops + marketing + training).`,
  },
  {
    id: 7,
    label: "Community / partnership ideas",
    category: "Growth",
    body: `List 6 Seattle-specific partnership ideas (CPA societies, startup weeks, landlord meetups) with pitch angles.`,
  },
  {
    id: 8,
    label: "Meta — operating partner review",
    category: "Meta",
    body: `You are operating partner. Review this 90-day plan [paste outline]; cut 30% of initiatives and explain tradeoffs.`,
  },
];

export const ADVANCED_DAY7_PRACTICAL: DayPracticalGuide = {
  promptSuffixKind: "advanced",
  subtitle:
    "Synthesize the week: 90-day plan, hiring, master playbook assembly, and positioning as the Seattle combo layer.",
  assumptions: [
    "Leadership buy-in for at least one hire or contractor.",
    "Central repo (Drive/Git) for playbook aggregation.",
  ],
  timeBreakdown: [
    { label: "OKRs + dashboard spec", time: "90 min" },
    { label: "Hiring JD + interview guide", time: "60 min" },
    { label: "Playbook merge (Days 1–7 artifacts)", time: "120 min" },
    { label: "Vision + launch checklist", time: "60 min" },
    { label: "Stakeholder readout (mock)", time: "45 min" },
  ],
  blocks: [
    {
      heading: "Strategy — OKRs & metrics",
      duration: "90 min",
      ordered: true,
      items: [
        "Align OKRs with capacity model from Day 5 pricing.",
        "Pick 3 lagging + 3 leading metrics max (focus).",
      ],
    },
    {
      heading: "People — reviewer pipeline",
      duration: "60 min",
      ordered: true,
      items: [
        "Finalize JD; post to niche lists / Upwork / local schools.",
        "Schedule screening rubric.",
      ],
    },
    {
      heading: "Playbook assembly",
      duration: "120 min",
      ordered: true,
      items: [
        "TOC: Imports → TurboTax → Chains → Client exp → Cases → Scale.",
        "Merge PDFs / links; version tag v1.0-ADV-2025.",
        "Assign owner for quarterly refresh.",
      ],
    },
    {
      heading: "Vision + launch",
      duration: "60 min",
      ordered: true,
      items: [
        "Publish vision internally.",
        "Lock 14-day checklist owner + dates.",
      ],
    },
    {
      heading: "Mock stakeholder readout",
      duration: "45 min",
      ordered: false,
      items: [
        "5-slide lightning talk practicing clarity.",
        "Collect questions list for follow-up.",
      ],
    },
  ],
  llmSection: {
    heading: "LLM assist — critique and compress",
    duration: "60 min",
    paragraphs: [
      "Use models to stress-test OKRs for optimism bias.",
      "Ask for ruthless cuts if plan exceeds realistic hours.",
    ],
  },
  closingParagraph:
    "Day 7 converts a week of labs into an operable business system — the playbook is live, the next quarter is mapped, and the niche positioning is explicit.",
  seattleTips: [
    "Reconnect with local CPA/EA listservs when hiring — specialty reviewers often hide in plain sight.",
    "Schedule first playbook refresh after IRS/TurboTax mid-season notices you track.",
  ],
  dayPrompts: ADVANCED_DAY7_PROMPTS,
};
