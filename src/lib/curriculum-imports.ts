import type { CurriculumDay } from "./types";

/** Advanced curriculum: maximize TurboTax Desktop automatic imports (2025/2026). */
export const IMPORTS_OVERVIEW = {
  title: "7-Day Advanced Curriculum — TurboTax Desktop Import Maximization",
  audience:
    "Experienced 2025 tax preparation consultants in the greater Seattle area: complex single-filer returns with W-2 wages (high RSU vesting from Amazon/Microsoft/etc.), Airbnb/STR, AFH landlord income/expenses, RSU taxation and sales, Airbnb facilities + rental depreciation (including OBBBA 100% bonus for qualifying assets placed in service after January 19, 2025), single filing status.",
  framing:
    "Narrowed strictly to real import sections in TurboTax Desktop: Wages & Income (W-2 auto-import, RSU-related 1099-B adjustments), Deductions & Credits (where applicable via imported data), Other Tax Situations (rental income/expenses from banks/brokerages, depreciation carryovers), and Federal Review / Smart Check under Federal Taxes (errors, optimization flags, passive loss rules, bracket management).",
  importNarrowing: [
    "Wages & Income — W-2 automatic import; RSU-related 1099-B adjustments",
    "Deductions & Credits — where applicable via imported data",
    "Other Tax Situations — rental-related pulls; depreciation carryovers",
    "Federal Review & Smart Check — combo scenario flags, passive vs non-passive, bracket management",
  ],
  importRealitiesMarch2026: [
    "Strong W-2 import from partnered employers (EIN → auto-pull when available).",
    "1099-B import from brokerages (Fidelity, Schwab, E*Trade, Vanguard, etc.) for RSU sales — often works; manual cost-basis adjustment may be needed when vesting income is already on W-2.",
    "Bank/brokerage imports for rental-related interest, dividends, or expense tracking (Schedule E) — delays, browser permissions; success varies by institution.",
    "Prior-year data import (.tax from 2024) for depreciation carryovers and AFH/Airbnb asset history.",
    "No direct auto-import for raw Airbnb host reports or AFH-specific ledgers — manual upload/entry; related bank data may still import.",
    "Federal Review / Smart Check flags combo issues (e.g., STR material participation, bonus depreciation eligibility, single-filer optimizations, passive loss limits).",
    "OBBBA 100% bonus (post–Jan 19, 2025 assets): handled in asset entry after imports; Form 4562 Desktop updates mid–late February 2026.",
  ],
  llmIntegration:
    "All optimization, troubleshooting, checklists, and client guidance use only Claude, ChatGPT, and Gemini (side-by-side cross-validation) for TurboTax Desktop navigation, import troubleshooting, and post-import adjustments.",
  toolConstraint:
    "AI limited to Claude, ChatGPT, and Gemini alongside TurboTax Desktop — no other automation tools.",
  targetOutcomes: [
    "Near-maximum automatic import coverage for W-2, 1099-B, bank/brokerage, and prior-year .tax data",
    "Repeatable LLM chains for import failures, RSU basis reconciliation, and post-import adjustments",
    "Mastery of Federal Review and Smart Check for the Seattle combo return",
    "Scalable, import-driven practice positioning",
  ],
  dailyRhythm: [
    "Morning: Deep-dive on specific import section + real 2025/2026 issues",
    "Midday: Hands-on TurboTax Desktop imports + LLM prompt chains",
    "Afternoon/Evening: Group critique of import results, prompt refinement, Seattle scenario reviews",
  ],
  dailyHours: "5–7 hours/day",
  requiredTools: [
    "TurboTax Desktop (fully updated 2025/2026 with depreciation patches)",
    "Sample / anonymized W-2 PDFs, 1099-B, bank exports",
    "Prior-year .tax file (e.g., 2024) for carryover drills",
    "Claude (claude.ai or API)",
    "ChatGPT (GPT-4o class or better)",
    "Gemini (gemini.google.com)",
  ],
};

export const IMPORTS_DAYS: CurriculumDay[] = [
  {
    day: 1,
    title: "Advanced Wages & Income Imports (W-2 + RSU Foundations)",
    focus: "Video steps 1–5 adapted — Master automatic W-2 and 1099-B imports as the entry point for the combo return.",
    videoSteps: "Steps 1–5",
    dailyHours: "5–7 hours/day",
    objectives: [
      "Achieve near-full auto-population of W-2 wages/RSU income and RSU stock sales.",
    ],
    exercises: [
      "Using sample Seattle tech worker data, import W-2 via EIN in Federal Taxes → Wages & Income → Wages and Salaries. Test partnered vs non-partnered employers.",
      "Import 1099-B for RSU sales (Wages & Income → Investment Income → Stocks…). Handle blank forms, delays, cost-basis mismatches.",
      "Use LLMs to generate troubleshooting scripts and adjustment prompts for RSU basis (W-2 income already reported).",
      "Run initial Federal Review to flag early combo issues.",
    ],
    deliverables: [
      "Documented import success rates + LLM-generated RSU adjustment checklist.",
    ],
  },
  {
    day: 2,
    title: "Deductions & Credits + Other Tax Situations Imports (Rental Data Pulls)",
    focus: "Video steps 6–10 — Bank/brokerage data feeding deductions, rental income/expenses, AFH/Airbnb depreciation foundations.",
    videoSteps: "Steps 6–10",
    dailyHours: "5–7 hours/day",
    objectives: [
      "Maximize imports for interest, dividends, and expense tracking supporting Schedule E and depreciation.",
    ],
    exercises: [
      "Import bank/brokerage data for rental-related transactions (Wages & Income → Other Tax Situations or direct 1099 imports).",
      "Import prior-year TurboTax file for AFH/Airbnb asset/depreciation carryovers.",
      "Test Airbnb/AFH expense proration via imported bank data; identify gaps needing manual entry.",
      "Prompt LLMs for scripts to verify imported rental data against OBBBA bonus eligibility.",
    ],
    deliverables: [
      "Import workflow map for rental data + refined LLM prompts for gap-filling.",
    ],
  },
  {
    day: 3,
    title: "Rental Property & Depreciation Imports + OBBBA Handling",
    focus: "Video steps 11–13 — Imports feeding Form 4562 and Schedule E for Airbnb/AFH combo.",
    videoSteps: "Steps 11–13",
    dailyHours: "5–7 hours/day",
    objectives: [
      "Stress-test depreciation carryover import and post–Jan 19, 2025 bonus asset entry.",
    ],
    exercises: [
      "Import prior-year depreciation; manually enter assets for post–Jan 19, 2025 property claiming 100% bonus where eligible.",
      "Simulate full rental income/expense import; review Schedule E vs C (STR average stay ≤7 days).",
      "Cross-validate imported numbers with LLM checklists for material participation and passive loss rules.",
      "Run partial Smart Check on rental sections.",
    ],
    deliverables: [
      "Master depreciation import + bonus election process document with screenshots.",
    ],
  },
  {
    day: 4,
    title: "LLM Agent Chains for Import Orchestration & Troubleshooting",
    focus: "Video steps 14–17 — Prompt chains for full import sequences and 2025/2026 Desktop issues.",
    videoSteps: "Steps 14–17",
    dailyHours: "5–7 hours/day",
    objectives: [
      "Build multi-model chains for navigation, diagnostics, and post-import fixes.",
    ],
    exercises: [
      "Develop chains: e.g., Gemini (import bug research) → Claude (TurboTax step-by-step) → ChatGPT (client-friendly explanations).",
      "Test full combo: W-2 + 1099-B + bank data + prior-year file.",
      "Generate prompts for post-import adjustments (RSU basis, bonus election, single-filer flags).",
    ],
    deliverables: [
      "Advanced import orchestration diagram + expanded prompt library focused on imports.",
    ],
  },
  {
    day: 5,
    title: "Federal Review & Smart Check Mastery",
    focus: "Video steps 18–23 — Automated review for combo optimizations and errors.",
    videoSteps: "Steps 18–23",
    dailyHours: "5–7 hours/day",
    objectives: [
      "Use Federal Review and Smart Check as the quality gate after imports.",
    ],
    exercises: [
      "Complete full imports on sample returns; run Federal Review and Smart Check under Federal Taxes.",
      "Analyze flags: RSU double-taxation risk, STR eligibility, 100% bonus qualification, passive loss limits, single-filer bracket pressure.",
      "Use LLMs to interpret review results; generate optimization plans + proof visualizations.",
      "Design premium onboarding with import instructions for clients.",
    ],
    deliverables: [
      "Review / Smart Check playbook + LLM-generated proof dashboard templates.",
    ],
  },
  {
    day: 6,
    title: "Compounding Imports Across Multi-Year & Case Studies",
    focus: "Video steps 24–27 — Repeatable import + review; 2024 → 2025 → 2026 outlook.",
    videoSteps: "Steps 24–27",
    dailyHours: "5–7 hours/day",
    objectives: [
      "Multi-year compounding and authority content from import metrics.",
    ],
    exercises: [
      "Map multi-year: import 2024 file into 2025; forecast 2026 with permanent 100% bonus context.",
      "Produce anonymized Seattle case studies: time saved via imports vs manual entry.",
      "Repurpose review outputs into media.",
    ],
    deliverables: [
      "Multi-year import roadmap + 2 polished case studies.",
    ],
  },
  {
    day: 7,
    title: "Scaling Import-Driven Practice & Default Layer Vision",
    focus: "Video steps 28–30 — High-efficiency practice built on import mastery.",
    videoSteps: "Steps 28–30",
    dailyHours: "5–7 hours/day",
    objectives: [
      "Operationalize import mastery as market positioning.",
    ],
    exercises: [
      "90-day plan: daily LLM-guided import workflows, review hires, client import training.",
      "Vision: Seattle expert in “TurboTax Desktop import-optimized combo returns” for W-2/RSU + Airbnb/AFH single filers.",
      "Master playbook: all import processes + full import-focused prompt library.",
    ],
    deliverables: [
      "90-day plan + vision summary + complete import-focused prompt library.",
    ],
  },
];

export const IMPORTS_POST_WEEK = [
  "Apply full import sequences + LLM chains on every 2025 client return.",
  "Publish authority content: “Maximize TurboTax Desktop imports for Seattle tech + landlord returns” (LinkedIn / FB groups).",
  "Offer premium service: faster filing via imports + Smart Check optimizations.",
  "Track: import success rate, time saved per return, incremental savings from review flags, retention.",
  "Monitor TurboTax patches and brokerage import behavior; verify all LLM outputs against IRS and TurboTax guidance.",
  "Maintain copy of the import prompt library in a shared doc; test each prompt across Claude, ChatGPT, and Gemini on sample data.",
];
