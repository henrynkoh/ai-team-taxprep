export type CurriculumTrack = "standard" | "advanced" | "imports";

export type PromptItem = {
  id: number;
  label: string;
  category: string;
  body: string;
};

export type PracticalGuideBlock = {
  heading: string;
  duration?: string;
  intro?: string;
  /** Numbered or bullet lines (render as ordered/unordered per block) */
  items: string[];
  ordered?: boolean;
};

export type PracticalGuidePromptSuffixKind = "advanced" | "advanced-day1-wages" | "imports";

export type DayPracticalGuide = {
  subtitle?: string;
  /** Which disclaimer string to append when copying day prompts. */
  promptSuffixKind: PracticalGuidePromptSuffixKind;
  assumptions: string[];
  timeBreakdown: { label: string; time: string }[];
  /** First three blocks render, then LLM section, then remaining blocks (same pattern as Day 1). */
  blocks: PracticalGuideBlock[];
  llmSection: { heading: string; duration?: string; paragraphs: string[] };
  closingParagraph: string;
  seattleTips: string[];
  dayPrompts: PromptItem[];
};

export type CurriculumDay = {
  day: number;
  title: string;
  focus: string;
  videoSteps: string;
  dailyHours: string;
  objectives: string[];
  exercises: string[];
  deliverables: string[];
  /** Full TurboTax walkthrough + day-specific prompts (e.g. Advanced Day 1). */
  practicalGuide?: DayPracticalGuide;
};
