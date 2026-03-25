import Link from "next/link";

import { PROMPT_SUFFIX_ADVANCED, PROMPT_SUFFIX_IMPORTS, PROMPT_SUFFIX_STANDARD } from "@/lib/disclaimer";

export const metadata = { title: "Prompt libraries" };

export default function PromptsHubPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-2xl font-semibold text-white sm:text-3xl">Prompt libraries</h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
        Copy prompts into Claude, ChatGPT, and Gemini. Each copy action appends the track-specific disclaimer. Test every
        prompt across all three models and keep a &ldquo;best output&rdquo; version in your shared doc.
      </p>

      <ul className="mt-10 grid gap-4 md:grid-cols-3">
        <li>
          <Link
            href="/prompts/standard"
            className="block rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-emerald-500/40"
          >
            <span className="text-sm font-semibold text-white">Standard library</span>
            <p className="mt-2 text-sm text-zinc-400">19 prompts + daily meta-prompt.</p>
            <p className="mt-4 text-xs text-zinc-500">Suffix: {PROMPT_SUFFIX_STANDARD.slice(0, 72)}…</p>
          </Link>
        </li>
        <li>
          <Link
            href="/prompts/advanced"
            className="block rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-emerald-500/40"
          >
            <span className="text-sm font-semibold text-white">Advanced library</span>
            <p className="mt-2 text-sm text-zinc-400">16 prompts + daily meta-prompt.</p>
            <p className="mt-4 text-xs text-zinc-500">Suffix: {PROMPT_SUFFIX_ADVANCED.slice(0, 72)}…</p>
          </Link>
        </li>
        <li>
          <Link
            href="/prompts/imports"
            className="block rounded-2xl border border-sky-500/25 bg-sky-500/5 p-6 transition hover:border-sky-400/50"
          >
            <span className="text-sm font-semibold text-sky-200">Import mastery library</span>
            <p className="mt-2 text-sm text-zinc-400">
              11 prompts: W-2/1099-B imports, rental pulls, Review/Smart Check, orchestration.
            </p>
            <p className="mt-4 text-xs text-zinc-500">Suffix: {PROMPT_SUFFIX_IMPORTS.slice(0, 72)}…</p>
          </Link>
        </li>
      </ul>
    </main>
  );
}
