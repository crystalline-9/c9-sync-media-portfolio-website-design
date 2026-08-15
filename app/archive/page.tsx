import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Archive — crystalline_9",
  description:
    "A living archive of experiments, community projects, and half-finished worlds.",
};

const archiveProjects = projects.map((project) => ({
  slug: project.slug,
  category: project.category,
  year: project.year ?? "",
  title: project.title,
  description: project.description,
  status: project.status,
}));

const statusClasses: Record<string, string> = {
  live: "text-moss-green border-moss-green/40",
  wip: "text-lavender-glow border-lavender-glow/40",
  paused: "text-muted-foreground border-muted-foreground/40",
  archived: "text-muted-foreground border-muted-foreground/40",
};

export default async function ArchivePage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;

  const currentPage = Math.max(1, Number(page) || 1);
  const projectsPerPage = 10;

  const totalPages = Math.ceil(archiveProjects.length / projectsPerPage);

  const startIndex = (currentPage - 1) * projectsPerPage;

  const paginatedProjects = archiveProjects.slice(
    startIndex,
    startIndex + projectsPerPage,
  );
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
          {paginatedProjects.map((x, i) => (
            <div
              key={x.title}
              className={cn(
                "group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-midnight-pine/40 sm:px-6",
                i !== paginatedProjects.length - 1 &&
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
                  {x.description}
                </span>
              </div>
              <span
                className={cn(
                  "shrink-0 rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-wider",
                  statusClasses[x.status],
                )}
              >
                {x.status}
              </span>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            {currentPage > 1 && (
              <Link
                href={`/archive?page=${currentPage - 1}`}
                className="rounded-lg  px-3 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                ←
              </Link>
            )}

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNumber) => (
                <Link
                  key={pageNumber}
                  href={`/archive?page=${pageNumber}`}
                  className={cn(
                    "rounded-lg px-3 py-2 text-xs transition-colors",
                    pageNumber === currentPage
                      ? "text-cyan-mana"
                      : "text-muted-foreground  hover:text-foreground",
                  )}
                >
                  {pageNumber}
                </Link>
              ),
            )}

            {currentPage < totalPages && (
              <Link
                href={`/archive?page=${currentPage + 1}`}
                className="rounded-lg px-3 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                →
              </Link>
            )}
          </div>
        )}

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
