import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Archive — crystalline_9",
  description:
    "A living archive of experiments, community projects, and half-finished worlds.",
};

const experiments = [
  {
    title: "Forest OS prototype",
    year: "2026",
    status: "In progress",
    accent: "cyan",
    note: "A calm, game-like interface for organizing creative work.",
  },
  {
    title: "Neighborhood story map",
    year: "2025",
    status: "Live",
    accent: "green",
    note: "A community-sourced map of small local histories.",
  },
  {
    title: "Attention journal",
    year: "2025",
    status: "Paused",
    accent: "violet",
    note: "A daily tool for noticing where the day actually went.",
  },
  {
    title: "Open type specimen",
    year: "2024",
    status: "Live",
    accent: "green",
    note: "A free, well-documented typographic system for small teams.",
  },
  {
    title: "Field recordings vol. 1",
    year: "2024",
    status: "Archived",
    accent: "violet",
    note: "Ambient sound studies turned into a listening room.",
  },
  {
    title: "Systems card deck",
    year: "2023",
    status: "Archived",
    accent: "cyan",
    note: "A deck of mental models for thinking in loops.",
  },
];

const accentMap: Record<string, string> = {
  cyan: "text-cyan-mana border-cyan-mana/40",
  green: "text-moss-green border-moss-green/40",
  violet: "text-lavender-glow border-lavender-glow/40",
};

export default function ArchivePage() {
  return (
    <main className="pt-28">
      <div className="mx-auto max-w-4xl px-6">
        <header className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-mana/80">
            The Archive
          </span>
          <h1 className="mt-3 text-balance font-serif text-4xl font-medium text-foreground sm:text-5xl">
            Experiments &amp; relics
          </h1>
          <p className="mx-auto mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            Half-finished worlds, community projects, and things still finding
            their shape. Not everything ships — some things just needed trying.
          </p>
        </header>

        <div className="mt-12 overflow-hidden rounded-2xl border border-lavender-glow/12 glass">
          {experiments.map((x, i) => (
            <div
              key={x.title}
              className={cn(
                "group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-midnight-pine/40 sm:px-6",
                i !== experiments.length - 1 &&
                  "border-b border-lavender-glow/8",
              )}
            >
              <span className="hidden w-12 shrink-0 font-mono text-xs text-muted-foreground sm:block">
                {x.year}
              </span>
              <div className="flex min-w-0 flex-1 flex-col">
                <span className="font-serif text-lg text-foreground">
                  {x.title}
                </span>
                <span className="truncate text-sm text-muted-foreground">
                  {x.note}
                </span>
              </div>
              <span
                className={cn(
                  "shrink-0 rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-wider",
                  accentMap[x.accent],
                )}
              >
                {x.status}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Looking for finished worlds instead?{" "}
          <Link
            href="/work"
            className="text-cyan-mana underline-offset-4 hover:underline"
          >
            Explore the work →
          </Link>
        </p>
      </div>

      <div className="mt-16">
        <Footer />
      </div>
    </main>
  );
}
