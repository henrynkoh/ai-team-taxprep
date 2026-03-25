import Link from "next/link";

import { GitHubFab } from "@/components/landing/GitHubFab";
import { LandingNavDesktop, LandingNavMobile } from "@/components/landing/LandingNav";
import { ADVANCED_DAYS, ADVANCED_OVERVIEW } from "@/lib/curriculum-advanced";
import { STANDARD_DAYS, STANDARD_OVERVIEW } from "@/lib/curriculum-standard";
import { GITHUB_REPO_URL } from "@/lib/site";

const features = [
  {
    title: "Dual 7-day tracks",
    desc: "Standard (4–6h/day) and Advanced (5–7h/day) with objectives, exercises, and deliverables per day.",
    accent: "from-cyan-500/30 to-blue-600/20",
    icon: "📅",
  },
  {
    title: "Prompt playbook",
    desc: "19 standard + 16 advanced copy-paste prompts; clipboard adds the required educational disclaimer.",
    accent: "from-fuchsia-500/30 to-purple-600/20",
    icon: "✨",
  },
  {
    title: "2025–2026 context",
    desc: "OBBBA bonus timing, TurboTax Desktop Form 4562 updates, STR material participation — in one hub.",
    accent: "from-amber-500/30 to-orange-600/20",
    icon: "⚡",
  },
  {
    title: "Three-LLM discipline",
    desc: "Curriculum assumes only Claude, ChatGPT, and Gemini beside TurboTax Desktop — no extra automation stack.",
    accent: "from-emerald-500/30 to-teal-600/20",
    icon: "🔀",
  },
  {
    title: "Static & fast",
    desc: "Next.js 16 App Router with pre-rendered routes — quick to host on Vercel or GitHub Pages (export if needed).",
    accent: "from-pink-500/30 to-rose-600/20",
    icon: "🚀",
  },
  {
    title: "Docs + marketing kit",
    desc: "Quickstart, manual, tutorial, and channel-specific ad templates in /docs/marketing.",
    accent: "from-violet-500/30 to-indigo-600/20",
    icon: "📣",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <LandingNavMobile />

      <div className="relative flex min-h-[calc(100vh-8rem)] min-w-0">
        {/* Left sidebar: scrollable nav (desktop) */}
        <aside
          className="hidden lg:fixed lg:left-0 lg:top-14 lg:z-30 lg:flex lg:h-[calc(100vh-3.5rem)] lg:w-[15.5rem] lg:shrink-0 lg:flex-col lg:border-r lg:border-white/10 lg:bg-zinc-950/90 lg:backdrop-blur-xl"
          aria-label="Section navigation"
        >
          <div className="flex-1 overflow-y-auto overscroll-y-contain [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.15)_transparent]">
            <LandingNavDesktop />
          </div>
          <div className="border-t border-white/10 p-3 text-[10px] leading-relaxed text-zinc-500">
            Scroll or tap a section. Active item highlights as you read.
          </div>
        </aside>

        <main className="min-w-0 flex-1 lg:ml-[15.5rem]">
          {/* Hero */}
          <section
            id="intro"
            className="scroll-mt-24 lg:scroll-mt-20 relative overflow-hidden border-b border-white/10 px-4 py-16 sm:px-6 sm:py-24"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-90"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 20% 10%, rgba(168, 85, 247, 0.35), transparent 55%), radial-gradient(ellipse 70% 50% at 80% 30%, rgba(34, 211, 238, 0.25), transparent 50%), radial-gradient(ellipse 50% 40% at 50% 90%, rgba(251, 191, 36, 0.12), transparent 45%)",
              }}
            />
            <div className="landing-grid-bg opacity-[0.35]" aria-hidden />
            <div className="relative mx-auto max-w-4xl">
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
                  Greater Seattle
                </span>
                <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200">
                  TurboTax Desktop 2025/26
                </span>
                <span className="rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-3 py-1 text-xs font-medium text-fuchsia-200">
                  Claude · ChatGPT · Gemini
                </span>
              </div>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                The{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-200 bg-clip-text text-transparent">
                  single-filer combo
                </span>{" "}
                curriculum hub
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-zinc-300">
                W-2/RSU, Airbnb STR, AFH rentals, depreciation &amp; OBBBA bonus context — mapped for tax consultants who
                cross-validate everything in <strong className="text-white">TurboTax Desktop</strong> and three LLMs.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/curriculum/standard"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition hover:brightness-110"
                >
                  Open standard track
                </Link>
                <Link
                  href="/curriculum/advanced"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
                >
                  Open advanced track
                </Link>
                <Link
                  href={GITHUB_REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/25 hover:text-white"
                >
                  Repository →
                </Link>
              </div>
            </div>
          </section>

          {/* Features */}
          <section
            id="features"
            className="scroll-mt-24 border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20"
          >
            <div className="mx-auto max-w-6xl">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-fuchsia-400/90">Features</h2>
              <p className="mt-2 max-w-2xl text-3xl font-bold text-white">Everything visible in one scrollable tour</p>
              <p className="mt-3 max-w-2xl text-zinc-400">
                Built for facilitators and participants — fast navigation, bold sections, deep links into the app.
              </p>
              <ul className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {features.map((f) => (
                  <li
                    key={f.title}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-6 transition hover:-translate-y-0.5 hover:border-white/20 hover:shadow-xl hover:shadow-fuchsia-500/10"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br opacity-0 transition group-hover:opacity-100 ${f.accent}`}
                      aria-hidden
                    />
                    <div className="relative">
                      <span className="text-2xl" aria-hidden>
                        {f.icon}
                      </span>
                      <h3 className="mt-3 text-lg font-semibold text-white">{f.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Stack */}
          <section
            id="stack"
            className="scroll-mt-24 border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20"
          >
            <div className="mx-auto max-w-6xl">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-400/90">Tool stack</h2>
              <p className="mt-2 text-3xl font-bold text-white">Required tools — nothing extra</p>
              <div className="mt-10 flex flex-wrap gap-3">
                {STANDARD_OVERVIEW.requiredTools.map((t) => (
                  <span
                    key={t}
                    className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent px-4 py-3 text-sm font-medium text-zinc-200 shadow-inner shadow-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-8 max-w-3xl text-sm leading-relaxed text-zinc-500">
                Daily rhythm: morning scenarios → midday TurboTax + LLMs → evening compare outputs across all three models.
              </p>
            </div>
          </section>

          {/* Tracks compare */}
          <section
            id="tracks"
            className="scroll-mt-24 border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20"
          >
            <div className="mx-auto max-w-6xl">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-amber-400/90">Tracks</h2>
              <p className="mt-2 text-3xl font-bold text-white">Pick your intensity</p>
              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-cyan-500/10 to-transparent p-8">
                  <h3 className="text-xl font-bold text-white">Standard</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{STANDARD_OVERVIEW.audience.slice(0, 280)}…</p>
                  <ul className="mt-6 space-y-2 text-sm text-zinc-300">
                    {STANDARD_OVERVIEW.targetOutcomes.map((o) => (
                      <li key={o} className="flex gap-2">
                        <span className="text-cyan-400">✓</span>
                        {o}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/curriculum/standard"
                    className="mt-8 inline-flex rounded-xl bg-cyan-500/90 px-5 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-cyan-400"
                  >
                    Standard overview →
                  </Link>
                </div>
                <div className="rounded-3xl border border-fuchsia-500/20 bg-gradient-to-b from-fuchsia-500/10 to-transparent p-8">
                  <h3 className="text-xl font-bold text-white">Advanced</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{ADVANCED_OVERVIEW.audience.slice(0, 280)}…</p>
                  <ul className="mt-6 space-y-2 text-sm text-zinc-300">
                    {ADVANCED_OVERVIEW.targetOutcomes.map((o) => (
                      <li key={o} className="flex gap-2">
                        <span className="text-fuchsia-400">✓</span>
                        {o}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/curriculum/advanced"
                    className="mt-8 inline-flex rounded-xl bg-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-fuchsia-500"
                  >
                    Advanced overview →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Standard week */}
          <section
            id="standard-week"
            className="scroll-mt-24 border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20"
          >
            <div className="mx-auto max-w-6xl">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-emerald-400/90">Standard · 7 days</h2>
              <p className="mt-2 text-3xl font-bold text-white">Day-by-day snapshot</p>
              <ol className="mt-10 space-y-3">
                {STANDARD_DAYS.map((d) => (
                  <li key={d.day}>
                    <Link
                      href={`/curriculum/standard/day/${d.day}`}
                      className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-zinc-900/30 p-4 transition hover:border-emerald-500/35 hover:bg-zinc-900/50 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-sm font-bold text-emerald-300">
                          {d.day}
                        </span>
                        <div>
                          <p className="font-semibold text-white">{d.title}</p>
                          <p className="mt-1 text-xs text-zinc-500">{d.focus}</p>
                        </div>
                      </div>
                      <span className="shrink-0 text-xs font-medium text-emerald-400/90">View day →</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Advanced week */}
          <section
            id="advanced-week"
            className="scroll-mt-24 border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20"
          >
            <div className="mx-auto max-w-6xl">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-violet-400/90">Advanced · 7 days</h2>
              <p className="mt-2 text-3xl font-bold text-white">Deeper OBBBA + dual returns</p>
              <ol className="mt-10 space-y-3">
                {ADVANCED_DAYS.map((d) => (
                  <li key={d.day}>
                    <Link
                      href={`/curriculum/advanced/day/${d.day}`}
                      className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-zinc-900/30 p-4 transition hover:border-violet-500/35 hover:bg-zinc-900/50 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/20 text-sm font-bold text-violet-200">
                          {d.day}
                        </span>
                        <div>
                          <p className="font-semibold text-white">{d.title}</p>
                          <p className="mt-1 text-xs text-zinc-500">{d.focus}</p>
                        </div>
                      </div>
                      <span className="shrink-0 text-xs font-medium text-violet-400/90">View day →</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Prompts */}
          <section
            id="prompts"
            className="scroll-mt-24 border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20"
          >
            <div className="mx-auto max-w-6xl">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-pink-400/90">Prompt libraries</h2>
              <p className="mt-2 text-3xl font-bold text-white">Copy, paste, verify</p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <Link
                  href="/prompts/standard"
                  className="rounded-3xl border border-pink-500/25 bg-gradient-to-br from-pink-500/15 to-transparent p-8 transition hover:border-pink-400/50"
                >
                  <p className="text-4xl font-black text-white">19</p>
                  <p className="mt-2 font-semibold text-white">Standard prompts</p>
                  <p className="mt-2 text-sm text-zinc-400">Workflow, depreciation, RSU, STR, onboarding, orchestration.</p>
                  <span className="mt-6 inline-block text-sm font-medium text-pink-300">Open library →</span>
                </Link>
                <Link
                  href="/prompts/advanced"
                  className="rounded-3xl border border-purple-500/25 bg-gradient-to-br from-purple-500/15 to-transparent p-8 transition hover:border-purple-400/50"
                >
                  <p className="text-4xl font-black text-white">16</p>
                  <p className="mt-2 font-semibold text-white">Advanced prompts</p>
                  <p className="mt-2 text-sm text-zinc-400">OBBBA depth, QBI, multi-year models, scaling prompts.</p>
                  <span className="mt-6 inline-block text-sm font-medium text-purple-300">Open library →</span>
                </Link>
              </div>
              <div className="mt-6 text-center">
                <Link href="/prompts" className="text-sm font-medium text-zinc-400 underline-offset-4 hover:text-white hover:underline">
                  Prompt hub
                </Link>
              </div>
            </div>
          </section>

          {/* Context */}
          <section
            id="context"
            className="scroll-mt-24 border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20"
          >
            <div className="mx-auto max-w-6xl">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-orange-400/90">2025–2026 context</h2>
              <p className="mt-2 text-3xl font-bold text-white">What the cohort stresses</p>
              <div className="mt-10 grid gap-8 lg:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
                  <h3 className="font-semibold text-white">Standard focal points</h3>
                  <ul className="mt-4 space-y-3 text-sm text-zinc-400">
                    {STANDARD_OVERVIEW.keyContext2025.map((x) => (
                      <li key={x} className="border-l-2 border-orange-500/50 pl-3">
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
                  <h3 className="font-semibold text-white">Advanced (filing season notes)</h3>
                  <ul className="mt-4 space-y-3 text-sm text-zinc-400">
                    {ADVANCED_OVERVIEW.contextMarch2026.map((x) => (
                      <li key={x} className="border-l-2 border-amber-500/50 pl-3">
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/context-2025"
                  className="inline-flex rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10"
                >
                  Full context page →
                </Link>
              </div>
            </div>
          </section>

          {/* Resources */}
          <section
            id="resources"
            className="scroll-mt-24 border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20"
          >
            <div className="mx-auto max-w-6xl">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-sky-400/90">Docs &amp; marketing</h2>
              <p className="mt-2 text-3xl font-bold text-white">Repository guides + growth copy</p>
              <ul className="mt-10 grid gap-4 md:grid-cols-2">
                {[
                  { href: `${GITHUB_REPO_URL}/blob/main/docs/QUICKSTART.md`, label: "Quickstart", desc: "Install & first clicks" },
                  { href: `${GITHUB_REPO_URL}/blob/main/docs/TUTORIAL.md`, label: "Tutorial", desc: "Facilitator walkthrough" },
                  { href: `${GITHUB_REPO_URL}/blob/main/docs/MANUAL.md`, label: "Manual", desc: "Routes, lib, troubleshooting" },
                  { href: `${GITHUB_REPO_URL}/blob/main/docs/marketing/README.md`, label: "Marketing kit", desc: "Social, blogs, email, newsletter" },
                ].map((r) => (
                  <li key={r.label}>
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-2xl border border-white/10 bg-zinc-900/30 p-5 transition hover:border-sky-500/40 hover:bg-zinc-900/50"
                    >
                      <p className="font-semibold text-white">{r.label}</p>
                      <p className="mt-1 text-sm text-zinc-500">{r.desc}</p>
                      <span className="mt-3 inline-block text-xs font-medium text-sky-400">GitHub →</span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-zinc-600">
                Links assume default branch <code className="rounded bg-white/10 px-1">main</code>. Rename in{" "}
                <code className="rounded bg-white/10 px-1">src/lib/site.ts</code> or set{" "}
                <code className="rounded bg-white/10 px-1">NEXT_PUBLIC_GITHUB_URL</code>.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section
            id="cta"
            className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24"
          >
            <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-zinc-900/80 to-cyan-500/10 p-8 sm:p-12 text-center">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to run the week?</h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-400">
                Open a track, follow day pages, then hit the prompt libraries. Everything is educational — verify with IRS
                publications, Form 4562 instructions, and TurboTax Desktop before filing.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/post-week"
                  className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-100"
                >
                  Post-week checklist
                </Link>
                <Link
                  href={GITHUB_REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5"
                >
                  Star on GitHub
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>

      <GitHubFab />
    </>
  );
}
