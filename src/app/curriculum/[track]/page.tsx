import Link from "next/link";
import { notFound } from "next/navigation";

import { getCurriculum, isTrack } from "@/lib/curriculum";
import type { CurriculumTrack } from "@/lib/types";

type Props = { params: Promise<{ track: string }> };

export function generateStaticParams() {
  return [{ track: "standard" }, { track: "advanced" }];
}

export async function generateMetadata({ params }: Props) {
  const { track: raw } = await params;
  if (!isTrack(raw)) return { title: "Not found" };
  const t = raw === "advanced" ? "Advanced track" : "Standard track";
  return { title: t };
}

function OverviewSection({ track }: { track: CurriculumTrack }) {
  const { overview } = getCurriculum(track);
  const base = overview as {
    title: string;
    audience: string;
    toolConstraint?: string;
    framing?: string;
    targetOutcomes: string[];
    dailyRhythm?: string[];
    dailyHours?: string;
    requiredTools: string[];
    keyContext2025?: string[];
    contextMarch2026?: string[];
  };

  return (
    <section className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 sm:p-8">
      <h2 className="text-lg font-semibold text-white">{base.title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-zinc-400">{base.audience}</p>
      {"toolConstraint" in base && base.toolConstraint ? (
        <p className="mt-3 text-sm text-amber-200/90">
          <strong className="text-amber-100">Tool constraint:</strong> {base.toolConstraint}
        </p>
      ) : null}
      {"framing" in base && base.framing ? (
        <p className="mt-3 text-sm text-zinc-400">{base.framing}</p>
      ) : null}

      <p className="mt-4 text-sm text-zinc-300">
        <strong className="text-white">Cadence:</strong>{" "}
        {track === "advanced" && base.dailyHours ? base.dailyHours : "4–6 hours/day (standard cohort)"}
      </p>

      <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-zinc-500">Target outcomes</h3>
      <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-400">
        {base.targetOutcomes.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>

      {base.dailyRhythm ? (
        <>
          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-zinc-500">Daily structure</h3>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-400">
            {base.dailyRhythm.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </>
      ) : null}

      <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-zinc-500">Required tools</h3>
      <ul className="mt-2 flex flex-wrap gap-2">
        {base.requiredTools.map((t) => (
          <li
            key={t}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
          >
            {t}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function CurriculumTrackPage({ params }: Props) {
  const { track: raw } = await params;
  if (!isTrack(raw)) notFound();
  const track = raw;
  const { days, postWeek } = getCurriculum(track);
  const linkPrompts = track === "advanced" ? "/prompts/advanced" : "/prompts/standard";

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <Link href="/" className="text-xs text-zinc-500 transition hover:text-white">
        ← Home
      </Link>
      <h1 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
        {track === "advanced" ? "Advanced curriculum" : "Standard curriculum"}
      </h1>
      <p className="mt-2 text-sm text-zinc-400">
        Seven days · objectives, exercises, and deliverables ·{" "}
        <Link className="text-emerald-400 underline-offset-4 hover:underline" href={linkPrompts}>
          matching prompt library
        </Link>
      </p>

      <div className="mt-10 space-y-10">
        <OverviewSection track={track} />

        <section>
          <h2 className="text-lg font-semibold text-white">Days 1–7</h2>
          <ul className="mt-4 space-y-3">
            {days.map((d) => (
              <li key={d.day}>
                <Link
                  href={`/curriculum/${track}/day/${d.day}`}
                  className="block rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-emerald-500/35 hover:bg-white/[0.06]"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="text-sm font-medium text-emerald-400">Day {d.day}</span>
                    <span className="text-xs text-zinc-500">{d.videoSteps} · {d.dailyHours}</span>
                  </div>
                  <p className="mt-1 font-medium text-white">{d.title}</p>
                  <p className="mt-2 text-sm text-zinc-400">{d.focus}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
          <h2 className="text-lg font-semibold text-white">Post-week actions</h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-zinc-400">
            {postWeek.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
