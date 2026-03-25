import { notFound } from "next/navigation";

import { CopyButton } from "@/components/copy-button";
import { PROMPT_SUFFIX_ADVANCED, PROMPT_SUFFIX_STANDARD } from "@/lib/disclaimer";
import { ADVANCED_PROMPTS } from "@/lib/prompts-advanced";
import { STANDARD_PROMPTS } from "@/lib/prompts-standard";
import { isTrack } from "@/lib/curriculum";
import type { CurriculumTrack } from "@/lib/types";

type Props = { params: Promise<{ track: string }> };

export function generateStaticParams() {
  return [{ track: "standard" }, { track: "advanced" }];
}

export async function generateMetadata({ params }: Props) {
  const { track: raw } = await params;
  if (!isTrack(raw)) return { title: "Not found" };
  return { title: raw === "advanced" ? "Advanced prompts" : "Standard prompts" };
}

export default async function PromptsTrackPage({ params }: Props) {
  const { track: raw } = await params;
  if (!isTrack(raw)) notFound();
  const track: CurriculumTrack = raw;
  const items = track === "advanced" ? ADVANCED_PROMPTS : STANDARD_PROMPTS;
  const suffix = track === "advanced" ? PROMPT_SUFFIX_ADVANCED : PROMPT_SUFFIX_STANDARD;

  const fullTextAll = items
    .map((p) => `## ${p.id}. ${p.label}\n${p.body}\n\n${suffix}`)
    .join("\n\n---\n\n");

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-2xl font-semibold text-white sm:text-3xl">
        {track === "advanced" ? "Advanced" : "Standard"} prompt library
      </h1>
      <p className="mt-3 text-sm text-zinc-400">
        {items.length} prompts · Disclosure appended on each copy
      </p>
      <div className="mt-6">
        <CopyButton text={fullTextAll} label="Copy entire library" />
      </div>

      <ul className="mt-10 space-y-8">
        {items.map((p) => {
          const block = `${p.body}\n\n${suffix}`;
          return (
            <li
              key={p.id}
              className="rounded-2xl border border-white/10 bg-zinc-900/40 p-5 sm:p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-emerald-400/90">{p.category}</p>
                  <h2 className="mt-1 text-lg font-semibold text-white">
                    {p.id}. {p.label}
                  </h2>
                </div>
                <CopyButton text={block} />
              </div>
              <pre className="mt-4 whitespace-pre-wrap rounded-xl bg-black/40 p-4 text-sm leading-relaxed text-zinc-300">
                {p.body}
              </pre>
              <p className="mt-3 text-xs text-zinc-500">{suffix}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
