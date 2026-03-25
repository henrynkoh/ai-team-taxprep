import { ADVANCED_OVERVIEW } from "@/lib/curriculum-advanced";
import { STANDARD_OVERVIEW } from "@/lib/curriculum-standard";

export const metadata = { title: "2025–2026 context" };

export default function ContextPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-2xl font-semibold text-white sm:text-3xl">Key 2025–2026 context</h1>
      <p className="mt-3 max-w-2xl text-sm text-zinc-400">
        Shared themes across both curriculum tracks. Always verify against current IRS publications, notices, and your
        TurboTax Desktop build.
      </p>

      <section className="mt-10 rounded-2xl border border-white/10 bg-zinc-900/40 p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-white">Standard track — 2025 focal points</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-zinc-300">
          {STANDARD_OVERVIEW.keyContext2025.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8 rounded-2xl border border-white/10 bg-zinc-900/40 p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-white">Advanced track — March 2026 filing season notes</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-zinc-300">
          {ADVANCED_OVERVIEW.contextMarch2026.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8 rounded-2xl border border-amber-500/25 bg-amber-500/5 p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-amber-100">Cross-verify checklist</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-amber-100/85">
          <li>IRS Publication 527 (rental / STR concepts — use the year that matches the return)</li>
          <li>Form 4562 instructions and software worksheets</li>
          <li>TurboTax Desktop release notes for depreciation / Schedule E updates</li>
          <li>Applicable notices and transition rules for bonus depreciation</li>
          <li>Professional judgment for material participation, schedule classification, and audit posture</li>
        </ul>
      </section>
    </main>
  );
}
