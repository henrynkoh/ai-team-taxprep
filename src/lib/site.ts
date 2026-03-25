/** Override in `.env.local` if you fork the repo. */
export const GITHUB_REPO_URL =
  process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/henrynkoh/ai-team-taxprep";

export const LANDING_NAV = [
  { id: "intro", label: "Overview" },
  { id: "features", label: "Features" },
  { id: "stack", label: "Tool stack" },
  { id: "tracks", label: "Tracks" },
  { id: "standard-week", label: "Standard · 7 days" },
  { id: "advanced-week", label: "Advanced · 7 days" },
  { id: "prompts", label: "Prompts" },
  { id: "context", label: "2025 context" },
  { id: "resources", label: "Docs & marketing" },
  { id: "cta", label: "Next steps" },
] as const;
