import { ADVANCED_POST_WEEK } from "@/lib/curriculum-advanced";
import { STANDARD_POST_WEEK } from "@/lib/curriculum-standard";

export const metadata = { title: "Post-week action plans" };

export default function PostWeekPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-2xl font-semibold text-white sm:text-3xl">Post-week action plans</h1>
      <p className="mt-3 text-sm text-zinc-400">
        What to do after Day 7 for each cohort.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <section className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-white">Standard track</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-zinc-300">
            {STANDARD_POST_WEEK.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </section>
        <section className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-white">Advanced track</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-zinc-300">
            {ADVANCED_POST_WEEK.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
