import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { worlds, getWorld, accentClasses } from "@/lib/worlds";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return worlds.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const world = getWorld(slug);
  if (!world) return { title: "Not found — Verdant" };
  return {
    title: `${world.name} — Verdant`,
    description: world.description,
  };
}

const sections = [
  { key: "context", label: "Context / Intent" },
  { key: "process", label: "Process" },
  { key: "outcome", label: "Outcome" },
  { key: "notes", label: "Notes / Reflections" },
] as const;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const world = getWorld(slug);
  if (!world) notFound();

  const accent = accentClasses[world.accent];
  const related = worlds.filter((w) => w.slug !== world.slug);

  const categoryProjects = projects.filter(
    (project) => project.category === world.slug,
  );

  return (
    <main className="pt-24">
      {/* Header image area */}
      <header className="relative">
        <div className="relative mx-auto h-[42vh] max-h-[480px] min-h-[300px] w-full max-w-6xl overflow-hidden rounded-3xl border border-lavender-glow/15 px-6">
          <Image
            src={`/worlds/${world.slug}.png`}
            alt={`Atmospheric header for the ${world.name} world`}
            fill
            priority
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-black via-forest-black/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
            <Link
              href="/work"
              className="mb-4 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-3.5" />
              World Map
            </Link>
            <div className="flex items-baseline gap-3">
              <span
                className={cn("font-serif text-3xl font-semibold", accent.text)}
              >
                {world.index}
              </span>
              <span
                className={cn(
                  "text-[11px] font-medium uppercase tracking-[0.25em]",
                  accent.text,
                )}
              >
                {world.tagline}
              </span>
            </div>
            <h1 className="mt-1 max-w-3xl text-balance font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
              {world.name}
            </h1>
          </div>
        </div>
      </header>

      {/* Thesis */}
      <div className="mx-auto max-w-3xl px-6 pt-12">
        <p className="text-balance font-serif text-2xl leading-snug text-foreground sm:text-3xl">
          <span className={accent.text}>“</span>
          {world.thesis}
          <span className={accent.text}>”</span>
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {world.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-lavender-glow/20 glass px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Body: case study sections + related rail */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 lg:grid-cols-[1fr_280px]">
        <article className="flex flex-col gap-8">
          {sections.map((s) => (
            <section
              key={s.key}
              className="glass rounded-2xl border border-lavender-glow/12 p-6 sm:p-8"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className={cn("size-2 rounded-full", accent.dot)} />
                <h2 className="font-serif text-xl font-medium text-foreground">
                  {s.label}
                </h2>
              </div>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {world[s.key]}
              </p>
            </section>
          ))}
        </article>

        {/* Related Worlds rail */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-cyan-mana/80">
            Related Worlds
          </h2>
          <nav className="flex flex-col gap-2">
            {related.map((r) => {
              const rAccent = accentClasses[r.accent];
              return (
                <Link
                  key={r.slug}
                  href={`/work/${r.slug}`}
                  className="group flex items-center gap-3 rounded-xl border border-lavender-glow/12 glass p-3 transition-all duration-300 hover:border-lavender-glow/30 hover:bg-midnight-pine/50"
                >
                  <span
                    className={cn(
                      "flex size-9 shrink-0 items-center justify-center rounded-lg border font-serif text-sm",
                      rAccent.border,
                      rAccent.text,
                    )}
                  >
                    {r.index}
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="truncate text-sm font-medium text-foreground">
                      {r.name}
                    </span>
                    <span className="truncate text-xs text-muted-foreground">
                      {r.tagline}
                    </span>
                  </span>
                  <span
                    className={cn(
                      "ml-auto text-sm transition-transform duration-300 group-hover:translate-x-0.5",
                      rAccent.text,
                    )}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              );
            })}
          </nav>
        </aside>
      </div>

      <Footer />
    </main>
  );
}
