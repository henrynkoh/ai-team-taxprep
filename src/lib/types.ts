export type CurriculumTrack = "standard" | "advanced" | "imports";

export type CurriculumDay = {
  day: number;
  title: string;
  focus: string;
  videoSteps: string;
  dailyHours: string;
  objectives: string[];
  exercises: string[];
  deliverables: string[];
};

export type PromptItem = {
  id: number;
  label: string;
  category: string;
  body: string;
};
