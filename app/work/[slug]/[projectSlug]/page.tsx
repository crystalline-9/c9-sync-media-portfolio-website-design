import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import ProjectGallery from "@/components/project-gallery";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string; projectSlug: string }>;
}) {
  const { projectSlug } = await params;

  const project = getProject(projectSlug);

  if (!project) notFound();

  const relatedProjects = projects
    .filter(
      (item) =>
        item.category === project.category && item.slug !== project.slug,
    )
    .slice(0, 3);

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
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-mana/80">
            Project Page
          </span>
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
          {/* External link */}{" "}
          {project.liveUrl && (
            <div className="mt-8">
              {" "}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-4 inline-flex items-center gap-2 overflow-hidden rounded-xl border border-cyan-mana/40 bg-cyan-mana/10 px-7 py-3.5 text-sm font-medium tracking-wide text-foreground transition-all duration-300 hover:bg-cyan-mana/20 hover:shadow-[0_0_30px_-6px_rgba(57,213,255,0.6)]"
                title={project.linkTitle}
              >
                {" "}
                {project.linkTitle}{" "}
                <ExternalLink className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />{" "}
              </a>{" "}
            </div>
          )}
        </header>

        {/* Project gallery */}
        <ProjectGallery images={project.images ?? []} />

        {/* Project details */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
          {/* Left column — Project Details */}
          <div>
            <div className="glass rounded-2xl border border-lavender-glow/12 p-6 sm:p-8">
              <div className="space-y-8">
                {/* Description */}
                {project.longDescription && (
                  <div>
                    <h2 className="font-serif text-xl text-foreground">
                      Description
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {project.longDescription}
                    </p>
                  </div>
                )}

                {/* Purpose */}
                {project.purpose && (
                  <div>
                    <h2 className="font-serif text-xl text-foreground">
                      Purpose
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {project.purpose}
                    </p>
                  </div>
                )}

                {/* Process */}
                {project.process && (
                  <div>
                    <h2 className="font-serif text-xl text-foreground">
                      Process
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {project.process}
                    </p>
                  </div>
                )}

                {/* Outcome */}
                {project.outcome && (
                  <div>
                    <h2 className="font-serif text-xl text-foreground">
                      Outcome
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {project.outcome}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right column — Skill Stack */}
          <div className="glass h-fit self-start rounded-2xl border border-lavender-glow/12 p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-2">
              <span className="size-2 rounded-full bg-moss-green shadow-[0_0_12px_rgba(47,122,78,0.35)]" />

              <h2 className="font-serif text-xl text-foreground">
                Skill Stack
              </h2>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {project.skills?.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-moss-green/30 bg-moss-green/5 px-3.5 py-1.5 text-sm text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Related Projects */}
        <section className="relative mt-16 -mx-6 sm:-mx-10 lg:-mx-12">
          {/* Section heading */}
          <div className="mb-6 flex items-center gap-3">
            <span className="size-2 rounded-full bg-lavender-glow shadow-[0_0_12px_rgba(167,139,250,0.35)]" />

            <h2 className="font-serif text-2xl text-foreground">
              Related Projects
            </h2>
          </div>

          {/* Project cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {relatedProjects.map((relatedProject) => (
              <Link
                key={relatedProject.slug}
                href={`/work/${relatedProject.category}/${relatedProject.slug}`}
                className="glass rounded-2xl border border-lavender-glow/12 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-lavender-glow/30 hover:shadow-[0_0_30px_-10px_rgba(167,139,250,0.6)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    {relatedProject.code}
                  </span>

                  <span
                    className={cn(
                      "rounded-full border px-2.5 py-1 text-[9px] font-medium uppercase tracking-wide",
                      relatedProject.status === "live" &&
                        "border-moss-green text-moss-green",
                      relatedProject.status === "wip" &&
                        "border-lavender-glow text-lavender-glow",
                      relatedProject.status === "paused" &&
                        "border-muted-foreground text-muted-foreground",
                    )}
                  >
                    ● {relatedProject.status}
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-xl font-medium text-foreground">
                  {relatedProject.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {relatedProject.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {relatedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[6px] border border-muted-foreground/40 px-2.5 py-1 text-[10px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>
      <div className="mt-20">
        <Footer />
      </div>
    </main>
  );
}
