import type { CurriculumDay } from "./types";

export const ADVANCED_OVERVIEW = {
  title: "7-Day Advanced Curriculum",
  audience:
    "Experienced 2025 tax preparation consultants in the greater Seattle area handling complex single-filer returns: W-2 + RSU (e.g., Amazon/Microsoft), Airbnb/STR, AFH landlord, RSU taxation/sales, Airbnb facilities + rental depreciation (cost segregation), single filing — via TurboTax Desktop (2025/2026), with LLMs limited to Claude, ChatGPT, and Gemini.",
  framing:
    "Builds on a narrow sub-niche + media flywheel + AI execution playbook at an advanced level: optimization, OBBBA 100% bonus depreciation, material participation / STR treatment, multi-year forecasting, audit defense, QBI maximization, scaling a high-margin niche practice.",
  contextMarch2026: [
    "100% bonus depreciation permanently restored under OBBBA for most qualified property acquired and placed in service after January 19, 2025 (transition rules for early-2025 assets at 40%). Personal property in Airbnb/AFH may qualify.",
    "TurboTax Desktop Form 4562 updates rolled out mid–late February 2026.",
    "STR with average guest stay ≤7 days + material participation → non-passive trade/business; losses (including depreciation) may offset W-2/RSU.",
    "Single-filer challenges: bracket management with RSU spikes, SALT limits ($40k overall cap with phaseouts), NIIT.",
    "TurboTax Desktop: combined Schedules E/C, depreciation carryovers, bonus elections.",
  ],
  targetOutcomes: [
    "Master LLM-orchestrated advanced workflows",
    "Produce client-ready optimizations and case studies",
    "Refine media flywheel for high-value Seattle clients",
    "Scalable “premium combo tax advisory” or light SaaS layer — Claude, ChatGPT, Gemini + TurboTax Desktop only",
  ],
  dailyRhythm: [
    "Morning: Deep-dive video + 2025 OBBBA / TurboTax case analysis",
    "Midday: Complex TurboTax Desktop + multi-model LLM prompting (cross-validate)",
    "Afternoon/Evening: Group critique, prompt refinement, peer case reviews (Zoom or Seattle in-person)",
  ],
  dailyHours: "5–7 hours/day for advanced cohort",
  requiredTools: [
    "TurboTax Desktop (fully updated 2025/2026 build)",
    "Claude",
    "ChatGPT (GPT-4o or better)",
    "Gemini",
  ],
};

export const ADVANCED_DAYS: CurriculumDay[] = [
  {
    day: 1,
    title: "Advanced Sub-Niche Positioning & Optimized TurboTax Desktop Workflow",
    focus: "Video steps 1–5 — Position as Seattle expert in “OBBBA 100% Bonus + STR Loophole + RSU Offset for Single Filers.”",
    videoSteps: "Steps 1–5",
    dailyHours: "5–7 hours/day",
    objectives: [
      "Master nuanced workflow mapping with OBBBA elections and TurboTax Desktop gotchas.",
    ],
    exercises: [
      "Analyze 2–3 real (anonymized) complex Seattle single-filer scenarios with mixed income and post-Jan 19, 2025 assets.",
      "Build advanced workflow in TurboTax Desktop: RSU import/basis → STR Schedule decision (7-day avg. stay) → AFH Schedule E → Form 4562 (100% bonus election vs. 40% option) → single-filer optimizations (brackets, QBI, NIIT).",
      "Identify high-leverage decision points (bonus election strategy, material participation documentation).",
    ],
    deliverables: [
      "Advanced workflow diagram (TurboTax screenshots + OBBBA election notes) + prioritized optimization list.",
    ],
  },
  {
    day: 2,
    title: "Advanced Media Flywheel – Authority Content",
    focus: "Video steps 6–10 — Premium content for high-value clients.",
    videoSteps: "Steps 6–10",
    dailyHours: "5–7 hours/day",
    objectives: [
      "Create content that drives premium engagements (not just leads).",
    ],
    exercises: [
      "Prompt Claude/ChatGPT/Gemini for advanced hooks/case studies on OBBBA 100% bonus + STR offsetting RSU.",
      "Produce 3 polished pieces (LinkedIn deep-dive carousel, Reels script, FB authority post for Seattle landlord/tech groups).",
      "Develop premium lead magnet (e.g., “2025 Single-Filer OBBBA Bonus Depreciation Playbook”).",
    ],
    deliverables: [
      "Refined 7-day advanced content calendar + 3 published posts + lead magnet draft.",
    ],
  },
  {
    day: 3,
    title: "Advanced Manual Execution & Documentation",
    focus: "Video steps 11–13 — Stress-test full complex returns.",
    videoSteps: "Steps 11–13",
    dailyHours: "5–7 hours/day",
    objectives: [
      "Document advanced nuances across two scenario types.",
    ],
    exercises: [
      "Complete 2 full sample returns: one with qualifying 100% bonus (post-Jan 19), one with transition 40% rules + aggressive material participation log.",
      "Document depreciation carryovers, Schedule E worksheet nuances, audit-ready notes for single-filer combos.",
      "Use LLM prompts to convert manual process into reusable checklists.",
    ],
    deliverables: [
      "Master process document (25+ steps) with screenshots, OBBBA references, risk flags.",
    ],
  },
  {
    day: 4,
    title: "Sophisticated LLM Agent Chains for Optimization",
    focus: "Video steps 14–17 — Multi-step orchestration across Claude/ChatGPT/Gemini.",
    videoSteps: "Steps 14–17",
    dailyHours: "5–7 hours/day",
    objectives: [
      "Develop agents for calculations, scenario modeling, and TurboTax entry scripts.",
    ],
    exercises: [
      "Craft/test advanced chains: bonus eligibility/calculation, material participation hour optimization, multi-year RSU + depreciation forecasting, QBI phase-out avoidance.",
      "Run identical scenarios across all three models; add verification layers.",
      "Orchestration example: Gemini (IRS Pub research) → Claude (math) → ChatGPT (TurboTax scripts).",
    ],
    deliverables: [
      "Advanced prompt library (expanded) + orchestration diagram + tested optimization examples.",
    ],
  },
  {
    day: 5,
    title: "Premium Onboarding, Proof Dashboards & Value-Based Pricing",
    focus: "Video steps 18–23 — High-touch systems for premium clients.",
    videoSteps: "Steps 18–23",
    dailyHours: "5–7 hours/day",
    objectives: [
      "Systems that support premium pricing and proof of value.",
    ],
    exercises: [
      "Design onboarding capturing OBBBA placement dates, stay averages, management hours, asset details.",
      "Prompt LLMs for dynamic proof dashboards (savings from 100% bonus + STR treatment).",
      "Tiered pricing with outcome-based elements (e.g., % of savings above baseline) + case study templates.",
    ],
    deliverables: [
      "Premium onboarding kit + proof dashboard template + pricing framework.",
    ],
  },
  {
    day: 6,
    title: "Compounding Strategies, Multi-Year Planning & Case Studies",
    focus: "Video steps 24–27 — Layer workflows and build moat.",
    videoSteps: "Steps 24–27",
    dailyHours: "5–7 hours/day",
    objectives: [
      "Expand to multi-year and repurposed authority content.",
    ],
    exercises: [
      "Map expansions: quarterly estimates with carryovers, cost segregation referrals, 2026 planning with permanent 100% bonus.",
      "Generate full anonymized Seattle case studies; repurpose into media.",
      "Test compounding: prior-year LLM outputs into new prompts.",
    ],
    deliverables: [
      "Multi-year roadmap + 2 polished case studies + updated content plan with proof.",
    ],
  },
  {
    day: 7,
    title: "Scaling, Hiring & Default Seattle Layer",
    focus: "Video steps 28–30 — Long-term vision and operations.",
    videoSteps: "Steps 28–30",
    dailyHours: "5–7 hours/day",
    objectives: [
      "Synthesize operations and positioning for scale.",
    ],
    exercises: [
      "90-day scaling: daily LLM workflows, hire niche reviewers (RSU/STR), reinvest in Seattle media.",
      "Vision: premium “OBBBA-Optimized Combo Tax Layer” for single-filer tech + landlord clients.",
      "Master playbook + full prompt library.",
    ],
    deliverables: [
      "90-day scaling plan + vision deck + complete advanced prompt library.",
    ],
  },
];

export const ADVANCED_POST_WEEK = [
  "Apply prompt chains on every complex 2025 return.",
  "Publish authority content weekly; targeted ads to Seattle single-filer groups.",
  "Launch/expand premium service within 2 weeks (OBBBA maximization).",
  "Track: average tax savings, retention, time saved via LLMs, revenue growth.",
  "Monitor IRS guidance (e.g., Notice 2026-11 on bonus) and TurboTax updates; cross-verify LLMs with official sources and professional judgment.",
  "Copy full library to a shared document; test/refine every prompt across three models weekly.",
];
