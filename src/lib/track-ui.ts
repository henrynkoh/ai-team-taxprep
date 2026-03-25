import type { CurriculumTrack } from "./types";

const PROMPT_PATH: Record<CurriculumTrack, string> = {
  standard: "/prompts/standard",
  advanced: "/prompts/advanced",
  imports: "/prompts/imports",
};

const PAGE_TITLE: Record<CurriculumTrack, string> = {
  standard: "Standard curriculum",
  advanced: "Advanced curriculum",
  imports: "Import mastery curriculum",
};

const BREADCRUMB: Record<CurriculumTrack, string> = {
  standard: "Standard",
  advanced: "Advanced",
  imports: "Import mastery",
};

export function promptPathForTrack(track: CurriculumTrack): string {
  return PROMPT_PATH[track];
}

export function curriculumPageHeading(track: CurriculumTrack): string {
  return PAGE_TITLE[track];
}

export function curriculumBreadcrumbLabel(track: CurriculumTrack): string {
  return BREADCRUMB[track];
}
