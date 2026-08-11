import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { getProject } from "@/lib/projects";
import ProjectGallery from "@/components/project-gallery";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string; projectSlug: string }>;
}) {
  const { projectSlug } = await params;

  const project = getProject(projectSlug);

  if (!project) notFound();

  return (
    <main className="pt-24">
      <article className="mx-auto max-w-5xl px-6">
        {/* Project navigation */}
        <div className="pt-8">
          <Link
            href={`/work/${project.category}`}
            className="inline-flex items-center gap-2 font-sans text-[10px] font-medium uppercase tracking-[0.26em] leading-4 text-muted-foreground transition-colors duration-200 hover:text-lavender-glow"
          >
            {" "}
            <ArrowLeft className="size-3.5 text-muted-foreground" /> Media
            Archive{" "}
          </Link>
        </div>
        {/* Project header */}
        <header className="mt-10 flex flex-col items-center text-center">
          <p className="text-[11px] font-medium uppercase tracking-[3.6px] leading-4 text-[#288da6]">
            Project Page
          </p>

          <h1 className="mt-4 font-serif text-[48px] font-medium leading-[1.1] tracking-tight sm:text-[48px]">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {project.description}
          </p>

          {/* Status + tags */}
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            {project.status && (
              <span
                className={`rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] ${
                  project.status === "live"
                    ? "border-moss-green/60 text-moss-green"
                    : project.status === "wip"
                      ? "border-lavender-glow/60 text-lavender-glow"
                      : "border-muted-foreground/40 text-muted-foreground"
                }`}
              >
                ● {project.status}
              </span>
            )}

            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-muted-foreground/40 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* External link */}
          <div className="mt-8">
            <a
              href="#"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-cyan-mana/40 bg-cyan-mana/10 px-7 py-3.5 text-sm font-medium tracking-wide text-foreground transition-all duration-300 hover:bg-cyan-mana/20 hover:shadow-[0_0_30px_-6px_rgba(57,213,255,0.6)]"
            >
              YouTube Channel
              <ExternalLink className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </header>

        {/* Project gallery */}
        <ProjectGallery />
      </article>
    </main>
  );
}
