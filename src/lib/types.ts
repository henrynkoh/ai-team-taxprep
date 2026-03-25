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

export type DayPracticalGuide = {
  subtitle?: string;
  assumptions: string[];
  timeBreakdown: { label: string; time: string }[];
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
