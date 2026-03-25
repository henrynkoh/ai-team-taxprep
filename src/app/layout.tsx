import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteHeader } from "@/components/site-header";
import { SITE_DISCLAIMER } from "@/lib/disclaimer";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Seattle Combo Tax Curriculum",
    template: "%s | Seattle Combo Tax Curriculum",
  },
  description:
    "Seven-day curriculum for 2025 tax consultants: W-2/RSU, Airbnb STR, AFH, OBBBA bonus depreciation, TurboTax Desktop, Claude/ChatGPT/Gemini.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 font-sans text-zinc-100">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <footer className="border-t border-white/10 bg-zinc-950 py-8">
          <div className="mx-auto max-w-5xl px-4 text-xs leading-relaxed text-zinc-500 sm:px-6">
            <p>{SITE_DISCLAIMER}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
