import { ADVANCED_DAYS, ADVANCED_OVERVIEW, ADVANCED_POST_WEEK } from "./curriculum-advanced";
import { IMPORTS_DAYS, IMPORTS_OVERVIEW, IMPORTS_POST_WEEK } from "./curriculum-imports";
import { STANDARD_DAYS, STANDARD_OVERVIEW, STANDARD_POST_WEEK } from "./curriculum-standard";
import type { CurriculumDay, CurriculumTrack } from "./types";

export type CurriculumBundle = {
  overview: typeof STANDARD_OVERVIEW | typeof ADVANCED_OVERVIEW | typeof IMPORTS_OVERVIEW;
  days: CurriculumDay[];
  postWeek: string[];
};

export function isTrack(s: string): s is CurriculumTrack {
  return s === "standard" || s === "advanced" || s === "imports";
}

export function getCurriculum(track: CurriculumTrack): CurriculumBundle {
  if (track === "advanced") {
    return {
      overview: ADVANCED_OVERVIEW,
      days: ADVANCED_DAYS,
      postWeek: ADVANCED_POST_WEEK,
    };
  }
  if (track === "imports") {
    return {
      overview: IMPORTS_OVERVIEW,
      days: IMPORTS_DAYS,
      postWeek: IMPORTS_POST_WEEK,
    };
  }
  return {
    overview: STANDARD_OVERVIEW,
    days: STANDARD_DAYS,
    postWeek: STANDARD_POST_WEEK,
  };
}

export function getDay(track: CurriculumTrack, day: number): CurriculumDay | undefined {
  return getCurriculum(track).days.find((d) => d.day === day);
}
