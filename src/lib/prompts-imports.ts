import type { PromptItem } from "./types";

export const IMPORTS_PROMPTS: PromptItem[] = [
  {
    id: 1,
    label: "W-2 EIN import — Wages & Salaries path",
    category: "W-2 & RSU import",
    body: `You are a TurboTax Desktop 2025/2026 expert. Client is a Seattle single filer with W-2 wages including RSU vesting. Provide exact navigation: Federal Taxes > Wages & Income > Wages and Salaries. Detail EIN import steps, what auto-populates, and troubleshooting if no partnered employer option appears.`,
  },
  {
    id: 2,
    label: "1099-B RSU sales — basis vs W-2 vesting",
    category: "W-2 & RSU import",
    body: `For RSU stock sales reported on 1099-B: Create step-by-step TurboTax Desktop import guide under Investment Income. Include how to handle cost-basis adjustment when vesting income is already on W-2. Output prompts for Claude/ChatGPT/Gemini to calculate adjusted basis from W-2 amounts.`,
  },
  {
    id: 3,
    label: "Bank/brokerage data → Airbnb/AFH rental feeds",
    category: "Rental & depreciation import",
    body: `Detail how to import bank/brokerage data that feeds Airbnb/AFH rental income and expenses in TurboTax Desktop. Include paths under Other Tax Situations or Schedule E, common 2025/2026 issues (blank forms, browser permissions), and fixes.`,
  },
  {
    id: 4,
    label: "Prior-year .tax + OBBBA asset entry / Form 4562",
    category: "Rental & depreciation import",
    body: `Client has AFH and Airbnb properties with post-Jan 19, 2025 assets qualifying for OBBBA 100% bonus depreciation. After importing prior-year .tax file for carryovers, provide exact asset entry and Form 4562 steps in TurboTax Desktop. Generate checklist for eligibility verification.`,
  },
  {
    id: 5,
    label: "Federal Review & Smart Check — combo flags",
    category: "Review & Smart Check",
    body: `After completing W-2, 1099-B, and rental imports in TurboTax Desktop for a single filer with RSU + STR + AFH combo, describe what Federal Review and Smart Check will flag. Provide LLM prompt template to interpret results and suggest optimizations (e.g., material participation, bracket management, bonus election).`,
  },
  {
    id: 6,
    label: "Chain: summarize imports → predict Smart Check → client summary",
    category: "Review & Smart Check",
    body: `Create a chain: 1) Summarize imported data for combo return. 2) Predict Smart Check warnings. 3) Output client-friendly explanation of savings from maximized imports + adjustments.`,
  },
  {
    id: 7,
    label: "Import failures — diagnostics (1099-B, bank, carryover)",
    category: "Troubleshooting & orchestration",
    body: `Common TurboTax Desktop 2025/2026 import failures (1099-B blank, bank data not appearing, prior-year depreciation missing). Generate diagnostic steps and fixes, including browser settings and retry timing.`,
  },
  {
    id: 8,
    label: "Full orchestration: W-2 → 1099-B → bank → prior-year → Review",
    category: "Troubleshooting & orchestration",
    body: `Build full orchestration prompt: Start with W-2 import → 1099-B for RSU → bank data for rentals → prior-year import for depreciation → run Federal Review/Smart Check. Output sequential TurboTax navigation + decision points for single-filer OBBBA scenario.`,
  },
  {
    id: 9,
    label: "Client onboarding for maximum imports",
    category: "Client-facing & content",
    body: `Draft client onboarding instructions for maximizing TurboTax Desktop imports: what documents to prepare, login tips for brokerages, and expectations for W-2/RSU/rental data pull.`,
  },
  {
    id: 10,
    label: "LinkedIn authority post — imports + Smart Check",
    category: "Client-facing & content",
    body: `Write LinkedIn authority post: “How Seattle single-filer clients with RSU + Airbnb + AFH save hours using TurboTax Desktop automatic imports + Smart Check in 2025/2026.” Include 3 tips and call-to-action.`,
  },
  {
    id: 11,
    label: "Daily meta-prompt (import specialist)",
    category: "Meta",
    body: `Act as senior TurboTax Desktop import specialist for 2025 single-filer W-2/RSU + Airbnb STR + AFH returns with OBBBA bonus. For this scenario [paste client details]: Outline maximum import sequence, expected auto-populated fields, manual gaps, post-import adjustments, and Smart Check optimization steps. Use rigorous reasoning and provide exact navigation paths.`,
  },
];
