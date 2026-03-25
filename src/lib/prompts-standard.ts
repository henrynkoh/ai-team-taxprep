import type { PromptItem } from "./types";

export const STANDARD_PROMPTS: PromptItem[] = [
  {
    id: 1,
    label: "Full TurboTax workflow (single-filer combo)",
    category: "General workflow & checklist",
    body: `You are an expert 2025 tax consultant specializing in single-filer returns combining W-2 income with RSU vesting, Airbnb short-term rentals (average stay under 7 days), AFH landlord activity, and heavy depreciation. Create a step-by-step TurboTax Desktop workflow for tax year 2025, including exact navigation paths for importing W-2/1099, setting up Schedule E for AFH and Airbnb, deciding Schedule C vs E based on material participation, and Form 4562 for 100% bonus depreciation on qualifying property placed in service after January 19, 2025. List every screen and decision point.`,
  },
  {
    id: 2,
    label: "Asset checklist table (TurboTax Desktop)",
    category: "General workflow & checklist",
    body: `Generate a comprehensive checklist for entering assets in TurboTax Desktop 2025/2026 for a client with Airbnb facilities and AFH rental property. Include how to claim 100% bonus depreciation under the One Big Beautiful Bill Act, cost segregation considerations, and 27.5-year residential depreciation rules. Output in table format with columns: Asset Description, Recovery Period, Bonus Eligibility, TurboTax Entry Path.`,
  },
  {
    id: 3,
    label: "100% bonus + Form 4562 entry (Airbnb personal property)",
    category: "Depreciation & bonus",
    body: `Client has placed qualifying personal property (furniture, appliances, improvements) into an Airbnb property on March 15, 2025. List all requirements for claiming 100% bonus depreciation in 2025 tax return. Then create exact TurboTax Desktop entry instructions for Form 4562, including any elections or statements needed.`,
  },
  {
    id: 4,
    label: "Asset list analyzer (Seattle AFH + Airbnb)",
    category: "Depreciation & bonus",
    body: `Analyze this asset list for a Seattle AFH + Airbnb property: [paste list with costs and dates]. Determine which qualify for 100% bonus depreciation post-Jan 19, 2025. Calculate first-year deduction under MACRS + bonus. Output recommended TurboTax Desktop asset entries and potential tax savings vs. straight-line.`,
  },
  {
    id: 5,
    label: "Schedule E vs C (STR ≤7 days)",
    category: "Depreciation & bonus",
    body: `Explain differences between Schedule E and Schedule C reporting for short-term rentals with average stay ≤7 days in 2025. Provide prompts I can use in TurboTax Desktop and material participation documentation template.`,
  },
  {
    id: 6,
    label: "RSU + W-2 basis & bracket management",
    category: "RSU & W-2",
    body: `Client has significant RSU vesting in 2025 from a Seattle tech company, plus W-2 wages. Create a step-by-step guide for correct basis tracking and sale reporting in TurboTax Desktop to avoid double taxation. Include single-filer bracket management strategies when combined with rental losses.`,
  },
  {
    id: 7,
    label: "W-2 import + RSU supplemental checklist",
    category: "RSU & W-2",
    body: `Generate a TurboTax Desktop import and adjustment checklist for Form W-2 with supplemental RSU income. Highlight common withholding gaps and how to optimize withholding for single filers with mixed rental income.`,
  },
  {
    id: 8,
    label: "Material participation tracker template",
    category: "Material participation & STR",
    body: `Create a detailed material participation tracker template (hours log) for a single filer managing Airbnb and AFH properties to qualify as non-passive under 2025 rules. Include how to document activities for IRS audit protection and translate into TurboTax Desktop entries.`,
  },
  {
    id: 9,
    label: "Non-passive STR + depreciation vs W-2/RSU",
    category: "Material participation & STR",
    body: `For a client with average Airbnb stay of 5 days and material participation >500 hours, explain how to treat the activity as non-passive to offset W-2/RSU income with depreciation losses. Provide exact TurboTax Desktop setup steps and warning flags.`,
  },
  {
    id: 10,
    label: "Client onboarding questionnaire + prep plan",
    category: "Onboarding & client-facing",
    body: `Draft a client onboarding questionnaire for single filers with W-2 + RSU + Airbnb + AFH income. Include questions on property placement dates (for bonus depreciation), average stay lengths, management hours, and asset purchase details. Then generate a personalized TurboTax Desktop preparation plan based on typical answers.`,
  },
  {
    id: 11,
    label: "Case study template (LinkedIn / FB)",
    category: "Onboarding & client-facing",
    body: `Write a client case study template: “How we saved $X for a Seattle single tech employee using 100% bonus depreciation on Airbnb facilities and AFH rental in 2025 TurboTax Desktop.” Make it engaging for LinkedIn and local Facebook groups.`,
  },
  {
    id: 12,
    label: "Cross-check TurboTax result vs rules",
    category: "Cross-validation & orchestration",
    body: `I ran this scenario in TurboTax Desktop and got [paste result]. Now cross-check against 2025 IRS rules for 100% bonus depreciation and material participation. Flag any discrepancies and suggest corrections.`,
  },
  {
    id: 13,
    label: "Chain: Pub 527 → depreciation → Form 4562 script",
    category: "Cross-validation & orchestration",
    body: `Chain workflow: First, research 2025 Pub 527 rules for AFH rental depreciation. Second, calculate optimal depreciation for [asset details]. Third, output exact TurboTax Desktop Form 4562 entry script. Use step-by-step reasoning.`,
  },
  {
    id: 14,
    label: "LinkedIn post ideas (Seattle consultants)",
    category: "Content & proof",
    body: `Create 5 scroll-stopping LinkedIn post ideas for Seattle tax consultants: focus on 2025 100% bonus depreciation opportunity for Airbnb + AFH landlords with W-2/RSU income, using TurboTax Desktop.`,
  },
  {
    id: 15,
    label: "Proof dashboard description",
    category: "Content & proof",
    body: `Generate a visual description or table for a proof dashboard showing tax savings from combining RSU planning, STR loophole, and 100% bonus depreciation in a single-filer 2025 return.`,
  },
  {
    id: 16,
    label: "Multi-year RSU + depreciation forecasting template",
    category: "Advanced / expansion",
    body: `Build a multi-year RSU + depreciation forecasting prompt template that I can reuse annually with updated client data.`,
  },
  {
    id: 17,
    label: "Compare Claude vs ChatGPT vs Gemini for tax checklists",
    category: "Advanced / expansion",
    body: `Compare outputs: Explain strengths/weaknesses of Claude vs ChatGPT vs Gemini when generating tax checklists for TurboTax Desktop complex returns. Recommend best model for each task type (research, calculation, writing).`,
  },
  {
    id: 18,
    label: "2026 estimated tax calculator prompt",
    category: "Advanced / expansion",
    body: `Create a full 2026 estimated tax payment calculator prompt that factors in 2025 carryover losses from AFH/Airbnb depreciation.`,
  },
  {
    id: 19,
    label: "Daily meta-prompt (use before complex tasks)",
    category: "Meta",
    body: `You are a senior tax preparer with deep knowledge of 2025 tax law (including One Big Beautiful Bill 100% bonus depreciation), TurboTax Desktop workflows, and single-filer strategies for W-2/RSU + short-term rental + AFH income. For the following client scenario: [paste details]. First research rules, then provide exact TurboTax Desktop steps, then output a client-friendly summary. Always cite sources and flag areas needing professional judgment.`,
  },
];
