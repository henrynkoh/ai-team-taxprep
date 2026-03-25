import { CopyButton } from "@/components/copy-button";
import type { DayPracticalGuide, PracticalGuideBlock } from "@/lib/types";

function Block({ block }: { block: PracticalGuideBlock }) {
  const ListTag = block.ordered ? "ol" : "ul";
  return (
    <section className="border-t border-white/10 pt-8 first:border-t-0 first:pt-0">
      <h3 className="text-lg font-semibold text-white">
        {block.heading}
        {block.duration ? (
          <span className="ml-2 text-sm font-normal text-zinc-500">({block.duration})</span>
        ) : null}
      </h3>
      {block.intro ? <p className="mt-3 text-sm leading-relaxed text-zinc-400">{block.intro}</p> : null}
      <ListTag
        className={`mt-4 space-y-2 text-sm text-zinc-300 ${block.ordered ? "list-decimal pl-5" : "list-disc pl-5"}`}
      >
        {block.items.map((line) => (
          <li key={line} className="leading-relaxed">
            {line}
          </li>
        ))}
      </ListTag>
    </section>
  );
}

type Props = {
  guide: DayPracticalGuide;
  promptSuffix: string;
};

export function PracticalGuide({ guide, promptSuffix }: Props) {
  const beforeLlm = guide.blocks.slice(0, 3);
  const afterLlm = guide.blocks.slice(3);

  return (
    <div className="mt-10 overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-b from-amber-500/5 to-zinc-900/40">
      <div className="border-b border-amber-500/20 bg-amber-500/10 px-6 py-4 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-400/90">
          Practical lab · TurboTax Desktop
        </p>
        <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">Step-by-step guide (this day)</h2>
        {guide.subtitle ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">{guide.subtitle}</p>
        ) : null}
      </div>

      <div className="space-y-8 px-6 py-8 sm:px-8">
        <section>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Assumptions (realism)</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
            {guide.assumptions.map((a) => (
              <li key={a} className="leading-relaxed">
                {a}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Time breakdown (5–7 hrs total)</h3>
          <ul className="mt-3 divide-y divide-white/10 rounded-xl border border-white/10">
            {guide.timeBreakdown.map((row) => (
              <li key={row.label} className="flex flex-wrap justify-between gap-2 px-4 py-3 text-sm">
                <span className="text-zinc-300">{row.label}</span>
                <span className="font-medium text-amber-200/90">{row.time}</span>
              </li>
            ))}
          </ul>
        </section>

        {beforeLlm.map((block, idx) => (
          <Block key={`pre-${idx}-${block.heading}`} block={block} />
        ))}

        <section className="border-t border-white/10 pt-8">
          <h3 className="text-lg font-semibold text-white">
            {guide.llmSection.heading}
            {guide.llmSection.duration ? (
              <span className="ml-2 text-sm font-normal text-zinc-500">({guide.llmSection.duration})</span>
            ) : null}
          </h3>
          {guide.llmSection.paragraphs.map((p) => (
            <p key={p} className="mt-3 text-sm leading-relaxed text-zinc-400">
              {p}
            </p>
          ))}
        </section>

        {afterLlm.map((block, idx) => (
          <Block key={`post-${idx}-${block.heading}`} block={block} />
        ))}

        <section className="rounded-xl border border-sky-500/25 bg-sky-500/5 p-5">
          <h3 className="text-sm font-semibold text-sky-200">Realistic tips — Seattle consultants</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
            {guide.seattleTips.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>

        <p className="text-sm leading-relaxed text-zinc-400">{guide.closingParagraph}</p>

        <section className="border-t border-white/10 pt-8">
          <h3 className="text-lg font-semibold text-white">Day 1 prompts (copy-paste)</h3>
          <p className="mt-2 text-xs text-zinc-500">
            Run each in Claude, ChatGPT, and Gemini; keep the best version in a shared &ldquo;Day 1 Import Playbook.&rdquo;
            Update as TurboTax patches ship.
          </p>
          <ul className="mt-6 space-y-6">
            {guide.dayPrompts.map((p) => {
              const block = `${p.body}\n\n${promptSuffix}`;
              return (
                <li key={p.id} className="rounded-xl border border-white/10 bg-black/25 p-4 sm:p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-medium uppercase text-emerald-400/90">{p.category}</p>
                      <p className="mt-1 font-semibold text-white">
                        {p.id}. {p.label}
                      </p>
                    </div>
                    <CopyButton text={block} />
                  </div>
                  <pre className="mt-3 whitespace-pre-wrap text-xs leading-relaxed text-zinc-400 sm:text-sm">
                    {p.body}
                  </pre>
                  <p className="mt-2 text-[11px] text-zinc-600">{promptSuffix}</p>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}
