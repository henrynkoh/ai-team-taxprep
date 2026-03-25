"use client";

import { useCallback, useEffect, useState } from "react";

import { LANDING_NAV } from "@/lib/site";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function LandingNavDesktop() {
  const [active, setActive] = useState<string>(LANDING_NAV[0].id);

  useEffect(() => {
    const nodes = LANDING_NAV.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && e.target.id) setActive(e.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="flex flex-col gap-0.5 p-3" aria-label="Page sections">
      <p className="px-2 pb-2 text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
        On this page
      </p>
      {LANDING_NAV.map((item) => {
        const on = active === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollToId(item.id)}
            className={`group flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm transition ${
              on
                ? "bg-gradient-to-r from-fuchsia-500/20 to-violet-500/20 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]"
                : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 shrink-0 rounded-full transition ${
                on ? "scale-125 bg-fuchsia-400 shadow-[0_0_8px_rgba(232,121,249,0.7)]" : "bg-zinc-600 group-hover:bg-zinc-400"
              }`}
              aria-hidden
            />
            <span className="leading-snug">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

export function LandingNavMobile() {
  const scroll = useCallback((id: string) => scrollToId(id), []);

  return (
    <div className="border-b border-white/10 bg-zinc-950/95 backdrop-blur-md lg:hidden">
      <div className="flex max-w-full gap-1 overflow-x-auto px-3 py-2 [scrollbar-width:thin]">
        {LANDING_NAV.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scroll(item.id)}
            className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-fuchsia-500/40 hover:text-white"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
