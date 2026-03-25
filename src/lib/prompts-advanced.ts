import type { PromptItem } from "./types";

export const ADVANCED_PROMPTS: PromptItem[] = [
  {
    id: 1,
    label: "Full navigation guide + audit notes (OBBBA combo)",
    category: "Core workflow & OBBBA",
    body: `You are a senior Seattle tax strategist expert in 2025 single-filer returns with W-2/RSU, Airbnb STR (avg. stay ≤7 days), AFH rentals, and OBBBA 100% bonus depreciation. For this client scenario [paste details including asset dates/costs], create a complete TurboTax Desktop navigation guide including: RSU basis tracking, STR Schedule decision + material participation test, Form 4562 100% bonus election (or 40% alternative), single-filer optimizations, and QBI considerations. List every screen, decision, and audit-ready note.`,
  },
  {
    id: 2,
    label: "Asset list → bonus + MACRS + TurboTax script + savings",
    category: "Core workflow & OBBBA",
    body: `Analyze asset list [paste] for OBBBA 100% bonus eligibility (acquired/placed after Jan 19, 2025). Calculate first-year deduction under 100% bonus + MACRS vs. straight-line. Output exact TurboTax Desktop Form 4562 entry script and projected tax savings for a single filer with $X W-2/RSU income.`,
  },
  {
    id: 3,
    label: "OBBBA requirements + TurboTax vs 40% election",
    category: "Depreciation & bonus optimization",
    body: `Client placed qualifying Airbnb/AFH personal property on [date after Jan 19, 2025]. Detail all OBBBA requirements for 100% bonus. Provide TurboTax Desktop steps for claiming it, including any elections or statements, and compare vs. electing 40%. Include cost segregation opportunities.`,
  },
  {
    id: 4,
    label: "Advanced depreciation schedule template",
    category: "Depreciation & bonus optimization",
    body: `Generate an advanced depreciation schedule template for combined Airbnb facilities + AFH property in TurboTax Desktop 2025/2026, factoring 100% bonus, 27.5-year residential rules, and carryovers. Output in table format with recovery periods and TurboTax paths.`,
  },
  {
    id: 5,
    label: "Material participation tracker + TurboTax + audit defense",
    category: "STR loophole & material participation",
    body: `For a single filer with Airbnb avg. stay of 5 days and AFH activity, create a material participation tracker (hours log) to treat as non-passive under 2025 rules. Explain how this unlocks offsetting W-2/RSU with depreciation losses. Provide TurboTax Desktop setup + documentation for audit protection.`,
  },
  {
    id: 6,
    label: "7-day STR rule + QBI + SE tax + TurboTax config",
    category: "STR loophole & material participation",
    body: `Detail the 7-day STR loophole under Treas. Reg. §1.469-1T for 2025: requirements, interaction with OBBBA bonus, QBI deduction, and self-employment tax risks. Output TurboTax Desktop configuration steps and a client explanation script.`,
  },
  {
    id: 7,
    label: "RSU sales + rental losses + bracket optimization",
    category: "RSU & single-filer advanced",
    body: `Client has large 2025 RSU vesting + sales alongside rental losses. Build a step-by-step TurboTax Desktop guide for correct basis, avoiding double taxation, and bracket management as a single filer. Include strategies to maximize losses offset via STR loophole + 100% bonus.`,
  },
  {
    id: 8,
    label: "Multi-year RSU + depreciation + loss carryforward model",
    category: "RSU & single-filer advanced",
    body: `Create a multi-year RSU + depreciation + loss carryforward forecasting model prompt. Input sample data [paste] and output optimized 2025–2027 tax projections with permanent 100% bonus.`,
  },
  {
    id: 9,
    label: "Chain: Pub 527 + Notice → scenario → TurboTax script",
    category: "Orchestration & cross-validation",
    body: `Chain workflow: 1) Research latest IRS guidance on OBBBA bonus from Pub 527 and Notice 2026-11. 2) Apply to this scenario [details]. 3) Generate TurboTax Desktop entry script. 4) Flag discrepancies and recommend human review points.`,
  },
  {
    id: 10,
    label: "Compare models + hybrid chain recommendation",
    category: "Orchestration & cross-validation",
    body: `Compare Claude vs ChatGPT vs Gemini outputs for this tax optimization task [paste]. Recommend the best model per sub-task (research, calculation, TurboTax scripting, client communication) and suggest a hybrid chain.`,
  },
  {
    id: 11,
    label: "Advanced onboarding + personalized optimization plan",
    category: "Onboarding, proof & content",
    body: `Draft an advanced client onboarding questionnaire capturing OBBBA placement dates, guest stay averages, management hours, asset details, and RSU schedules for single filers. Then generate a personalized TurboTax Desktop prep + optimization plan.`,
  },
  {
    id: 12,
    label: "Premium case study (LinkedIn authority)",
    category: "Onboarding, proof & content",
    body: `Write a premium case study: “How we delivered $X savings for a Seattle single tech professional using OBBBA 100% bonus on Airbnb/AFH assets and the STR loophole in 2025 TurboTax Desktop.” Optimize for LinkedIn authority and local groups.`,
  },
  {
    id: 13,
    label: "Advanced LinkedIn / Seattle FB post ideas",
    category: "Onboarding, proof & content",
    body: `Create 5 advanced LinkedIn/Seattle FB post ideas positioning a consultant as expert in 2025 single-filer combo optimization with OBBBA bonus depreciation.`,
  },
  {
    id: 14,
    label: "Quarterly estimated tax calculator prompt (2026 planning)",
    category: "Expansion & scaling",
    body: `Build a quarterly estimated tax calculator prompt that incorporates 2025 OBBBA bonus, STR losses, RSU spikes, and single-filer brackets for 2026 planning.`,
  },
  {
    id: 15,
    label: "Hiring + reinvestment model for niche practice",
    category: "Expansion & scaling",
    body: `Design a profit-reinvestment and hiring model for a specialized tax practice: roles for RSU/STR reviewers, LLM workflow integration, and metrics for becoming the default Seattle advisor for this combo.`,
  },
  {
    id: 16,
    label: "Daily meta-prompt (advanced)",
    category: "Meta",
    body: `Act as a top-tier 2025 tax advisor with mastery of OBBBA, TurboTax Desktop, Pub 527, and single-filer strategies for W-2/RSU + Airbnb STR + AFH. For scenario [paste]: First research rules, then optimize with 100% bonus and loophole, then provide exact TurboTax Desktop steps, then client-friendly summary with savings projection. Use step-by-step reasoning and cite sources. Flag judgment areas.`,
  },
];
