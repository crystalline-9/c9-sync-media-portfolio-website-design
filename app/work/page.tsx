import type { Metadata } from "next";
import { WorldNodes } from "@/components/world-nodes";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Work — crystalline_9",
  description:
    "Explore five worlds of creative work: media, systems, writing, design, and experiments.",
};

export default function WorkPage() {
  return (
    <main className="pt-28">
      <header className="px-6 pb-4 pt-8 text-center">
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-mana/80">
          The Atlas
        </span>
        <h1 className="mt-3 text-balance font-serif text-4xl font-medium text-foreground sm:text-5xl">
          Worlds of work
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          A multidisciplinary practice mapped as terrain. Choose a region and
          step inside — each one is a self-contained case study.
        </p>
      </header>
      <WorldNodes />
      <Footer />
    </main>
  );
}
