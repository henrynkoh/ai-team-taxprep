import {
  PROMPT_SUFFIX_ADVANCED,
  PROMPT_SUFFIX_ADVANCED_DAY1_WAGES,
  PROMPT_SUFFIX_IMPORTS,
} from "./disclaimer";
import type { DayPracticalGuide } from "./types";

export function promptSuffixForPracticalGuide(guide: DayPracticalGuide): string {
  switch (guide.promptSuffixKind) {
    case "advanced-day1-wages":
      return PROMPT_SUFFIX_ADVANCED_DAY1_WAGES;
    case "imports":
      return PROMPT_SUFFIX_IMPORTS;
    case "advanced":
    default:
      return PROMPT_SUFFIX_ADVANCED;
  }
}
