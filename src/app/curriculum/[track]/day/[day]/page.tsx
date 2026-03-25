import Link from "next/link";
import { notFound } from "next/navigation";

import { getDay, isTrack } from "@/lib/curriculum";
import { curriculumBreadcrumbLabel } from "@/lib/track-ui";
import type { CurriculumTrack } from "@/lib/types";

type Props = { params: Promise<{ track: string; day: string }> };

export function generateStaticParams() {
  const days = [1, 2, 3, 4, 5, 6, 7];
  const tracks = ["standard", "advanced", "imports"] as const;
  return tracks.flatMap((track) => days.map((day) => ({ track, day: String(day) })));
}

export async function generateMetadata({ params }: Props) {
  const { track: raw, day: dayRaw } = await params;
  if (!isTrack(raw)) return { title: "Not found" };
  const day = Number(dayRaw);
  const d = getDay(raw, day);
  if (!d) return { title: "Not found" };
  return { title: `Day ${d.day}: ${d.title}` };
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">{title}</h2>
      <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-zinc-300">
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </section>
  );
}

export default async function DayPage({ params }: Props) {
  const { track: raw, day: dayRaw } = await params;
  if (!isTrack(raw)) notFound();
  const track: CurriculumTrack = raw;
  const dayNum = Number(dayRaw);
  if (!Number.isInteger(dayNum) || dayNum < 1 || dayNum > 7) notFound();
  const day = getDay(track, dayNum);
  if (!day) notFound();

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="flex flex-wrap gap-3 text-xs text-zinc-500">
        <Link href="/" className="transition hover:text-white">
          Home
        </Link>
        <span>·</span>
        <Link href={`/curriculum/${track}`} className="transition hover:text-white">
          {curriculumBreadcrumbLabel(track)} curriculum
        </Link>
      </div>

      <p className="mt-4 text-sm font-medium text-emerald-400">
        Day {day.day} · {day.videoSteps} · {day.dailyHours}
      </p>
      <h1 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">{day.title}</h1>
      <p className="mt-4 text-sm leading-relaxed text-zinc-400">
        <strong className="text-zinc-200">Focus:</strong> {day.focus}
      </p>

      <div className="mt-10 space-y-10 rounded-2xl border border-white/10 bg-zinc-900/40 p-6 sm:p-8">
        <List title="Objectives" items={day.objectives} />
        <List title="Exercises" items={day.exercises} />
        <List title="Deliverables" items={day.deliverables} />
      </div>

      <nav className="mt-10 flex flex-wrap justify-between gap-4 text-sm">
        {day.day > 1 ? (
          <Link
            className="text-emerald-400 underline-offset-4 hover:underline"
            href={`/curriculum/${track}/day/${day.day - 1}`}
          >
            ← Day {day.day - 1}
          </Link>
        ) : (
          <span />
        )}
        {day.day < 7 ? (
          <Link
            className="text-emerald-400 underline-offset-4 hover:underline"
            href={`/curriculum/${track}/day/${day.day + 1}`}
          >
            Day {day.day + 1} →
          </Link>
        ) : null}
      </nav>
    </main>
  );
}
