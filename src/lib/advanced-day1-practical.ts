import type { DayPracticalGuide, PromptItem } from "./types";

export const ADVANCED_DAY1_PROMPTS: PromptItem[] = [
  {
    id: 1,
    label: "W-2 EIN import — partnered vs non-partnered (2026)",
    category: "W-2 import",
    body: `You are a TurboTax Desktop 2025/2026 expert. Provide exact step-by-step navigation for importing a W-2 using EIN in Federal Taxes > Wages & Income > Wages and Salaries. Include differences between partnered and non-partnered employers, what auto-populates, and troubleshooting for common failures like missing control number, no data, or browser permission issues in 2026.`,
  },
  {
    id: 2,
    label: "W-2 diagnostic checklist — Seattle tech",
    category: "W-2 import",
    body: `Client has a W-2 from a Seattle tech employer. Generate a diagnostic checklist and fix scripts for W-2 import failures (EIN not recognized, partial import, upload PDF not working). Output in numbered steps with TurboTax screen references.`,
  },
  {
    id: 3,
    label: "1099-B import + RSU basis vs W-2 vesting",
    category: "1099-B / RSU",
    body: `For RSU stock sales reported on 1099-B in TurboTax Desktop: Create detailed steps to import under Wages & Income > Investment Income > Stocks. Then explain how to adjust cost basis when vesting income is already on W-2 (check the incorrect basis box and enter FMV at vesting). Include handling blank forms, multiple lots, and summary entry options.`,
  },
  {
    id: 4,
    label: "Reusable RSU basis adjustment script",
    category: "1099-B / RSU",
    body: `Generate a reusable RSU basis adjustment script for a single filer: Client sold RSU shares with proceeds $X on 1099-B but basis missing. Calculate correct basis from W-2 vesting amount and provide exact TurboTax Desktop clicks/screens to enter the adjustment without triggering double taxation.`,
  },
  {
    id: 5,
    label: "Fidelity/Schwab 1099-B import issues",
    category: "1099-B / RSU",
    body: `Common 2025/2026 1099-B import issues from Fidelity/Schwab for RSU (blank cost basis, delays, success message but no data). Provide troubleshooting prompts and fixes, including browser settings, restart steps, and when to switch to manual summary entry.`,
  },
  {
    id: 6,
    label: "Day 1 orchestration — W-2 then 1099-B decision tree",
    category: "Orchestration & review",
    body: `Build a full Day 1 orchestration prompt chain for Wages & Income imports: Start with W-2 EIN import (partnered/non), then 1099-B for RSU, then handle basis adjustments. Output sequential TurboTax navigation + decision tree for a Seattle single filer with RSU vesting + future rental combo.`,
  },
  {
    id: 7,
    label: "Predict Federal Review / Smart Check flags",
    category: "Orchestration & review",
    body: `After W-2 and 1099-B imports in TurboTax Desktop, predict what Federal Review and Smart Check will flag for a combo return (RSU mismatches, wage/investment issues). Provide a template to interpret results and generate optimization action items.`,
  },
  {
    id: 8,
    label: "Daily meta — import specialist (paste scenario)",
    category: "Meta",
    body: `Act as a senior TurboTax Desktop import specialist for 2025 single-filer returns with W-2/RSU from Seattle tech. For this sample scenario [paste client details: EIN, Box 1 amount, 1099-B proceeds, vesting FMV], outline the maximum automatic import sequence, expected auto-populated fields, likely manual gaps (especially RSU basis), post-import adjustments, and initial Federal Review/Smart Check optimization steps. Use rigorous step-by-step reasoning with exact navigation paths.`,
  },
];

export const ADVANCED_DAY1_PRACTICAL: DayPracticalGuide = {
  promptSuffixKind: "advanced-day1-wages",
  subtitle:
    "Practical TurboTax Desktop walkthrough for March 2026 filing season — Wages & Income only (W-2 + RSU foundations). Preparation for later Airbnb/AFH + depreciation work.",
  assumptions: [
    "Anonymized sample Seattle tech worker data: W-2 PDF/paper with EIN in Box b, Box 1 wages, control number in Box d; 1099-B from Fidelity/Schwab/etc. for RSU sales; prior-year .tax2024 file optional.",
    "TurboTax Desktop is fully updated (Help > Check for Updates).",
    "Windows PC, Desktop version.",
    "Run TurboTax as Administrator if import issues arise.",
    "Cross-verify final numbers against actual W-2/1099-B and IRS rules. Use Claude, ChatGPT, and Gemini only for troubleshooting scripts, adjustment checklists, and optimization prompts — never for final filing decisions.",
  ],
  timeBreakdown: [
    { label: "Setup + W-2 import (partnered vs non-partnered)", time: "1–1.5 hrs" },
    { label: "1099-B import for RSU sales + common issues", time: "1.5–2 hrs" },
    { label: "LLM troubleshooting + RSU basis adjustments", time: "1–1.5 hrs" },
    { label: "Initial Federal Review + combo flags", time: "45–60 min" },
    { label: "Documentation + group share (import success rates)", time: "30–45 min" },
  ],
  blocks: [
    {
      heading: "Preparation",
      duration: "15–20 min",
      ordered: true,
      items: [
        "Open TurboTax Desktop 2025/2026 and start or continue a new or sample return.",
        "Complete basic personal info (single filer, Seattle address, etc.) to reach the Federal Taxes section.",
        "Search for “W-2” or navigate manually: Federal Taxes > Wages & Income.",
        "Have sample W-2 and 1099-B ready (paper, PDF, or brokerage login credentials).",
      ],
    },
    {
      heading: "Part 1: W-2 import via EIN (partnered vs non-partnered employers)",
      duration: "60–90 min",
      ordered: true,
      items: [
        "Under Wages and Salaries, select Start or Update (or “Work on my W-2”).",
        "On “We’ll start with your W-2,” choose Work on my W-2 > Continue.",
        "If adding another W-2: Add another W-2 (or Add a new W-2).",
        "Enter the 9-digit Employer Identification Number (EIN) exactly as shown in Box b on the W-2.",
        "Click Continue.",
        "If partnered employer (many large Seattle tech firms): TurboTax may show “Great News! We Can Enter Your W-2 for You.” Follow prompts to import; verify all boxes against paper/PDF W-2.",
        "If non-partnered or import fails: use Upload (PDF/JPEG/PNG) or Type it in myself. For upload, select the file and verify extraction. If still failing, manually enter Box 1 wages, Box 2 federal withholding, and other key fields.",
        "Common issues: (a) “Too early” / no data — manual entry or upload; (b) missing control number (Box d) or Box 1 — use final paystub YTD federal wages; (c) browser/pop-ups — allow pop-ups, run as Administrator, try Chrome as default browser for linked steps; (d) duplicate/partial import — delete partial W-2 and retry.",
        "After import/entry, review the summary screen; edit state/local fields for Washington as needed.",
      ],
    },
    {
      heading: "Part 2: 1099-B import for RSU stock sales",
      duration: "90–120 min",
      ordered: true,
      items: [
        "Still in Wages & Income, go to Investment Income > Stocks, Cryptocurrency, Mutual Funds, Bonds, Other (or “Stocks…”).",
        "Start/Update > follow prompts to import from brokerage.",
        "Log in when prompted (Fidelity, Schwab, etc.) — TurboTax uses secure import.",
        "Select the 1099-B for 2025 RSU sales. Imports often bring proceeds but show blank or incorrect cost basis (broker may not have W-2-taxed vesting amount).",
        "After import, work TurboTax review flags for each sale.",
        "Blank forms or delays: retry import; clear browser cache; allow pop-ups (Edge/Chrome); run TurboTax as Administrator; wait 24–48 hrs if consolidated 1099 just released.",
        "Cost-basis mismatches: for each RSU sale, indicate cost basis incorrect/missing on 1099-B; enter correct basis = FMV at vesting (already in W-2 Box 1) to avoid double taxation — typically ~$0 or minimal gain after adjustment.",
        "Many lots: consider summary entry grouped by short-term/long-term; use basis not reported to IRS (codes B or E) where applicable.",
        "Import “success” but missing data: restart TurboTax; re-import; or delete imported 1099-B and use manual summary.",
        "Verify proceeds match 1099-B; adjusted basis should reconcile RSU income already on W-2.",
      ],
    },
    {
      heading: "Part 4: Initial Federal Review + Smart Check",
      duration: "30–45 min",
      ordered: true,
      items: [
        "After W-2 + 1099-B work, go to Federal Taxes > Review (or search “Federal Review”).",
        "Run the full Federal Review.",
        "Run Smart Check (search “Smart Check” or under Review).",
        "Note flags: RSU double-taxation risk, wage vs investment mismatches, early warnings for later rental passive losses or single-filer bracket pressure.",
        "Document what auto-populated vs what still needs manual work for the full combo return (sets up Days 2+).",
      ],
    },
    {
      heading: "Documentation & group share",
      duration: "30–45 min",
      ordered: false,
      items: [
        "Screenshot key screens: successful/failed imports, adjusted basis entries, Review flags.",
        "Record success rates (e.g. partnered W-2 ~80–90% clean import; 1099-B often 50–70% need basis adjustment — your mileage may vary).",
        "Group share: what worked, what failed, best LLM outputs; refine shared “Day 1 Import Playbook.”",
      ],
    },
  ],
  llmSection: {
    heading: "Part 3: LLMs for troubleshooting & RSU basis adjustments",
    duration: "60–90 min",
    paragraphs: [
      "Run the same prompt in Claude, ChatGPT, and Gemini; compare for accuracy and clarity; refine into reusable checklists.",
      "Use outputs only as drafts — verify against forms and software before any client filing.",
    ],
  },
  closingParagraph:
    "By the end of Day 1 you should have reliable Wages & Income import habits, LLM-built troubleshooting assets, and early Federal Review/Smart Check notes for the full W-2/RSU + Airbnb/AFH combo. Proceed to Day 2 (rental data imports) when the team is consistent on this entry point.",
  seattleTips: [
    "Large Seattle tech employers often partner well on W-2; RSU 1099-B from Fidelity and similar brokerages typically still needs basis correction.",
    "Rotate 2–3 sample profiles: easy partnered W-2, non-partnered/manual, heavy RSU sale count.",
    "Time-savings goal: maximize imports to cut manual entry ~60–80% before rental/depreciation sections.",
    "Never file without reconciling imported numbers to source documents.",
  ],
  dayPrompts: ADVANCED_DAY1_PROMPTS,
};
