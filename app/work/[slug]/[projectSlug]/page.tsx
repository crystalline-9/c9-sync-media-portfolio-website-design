import { notFound } from "next/navigation";
import { getProject } from "@/lib/projects";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string; projectSlug: string }>;
}) {
  const { projectSlug } = await params;

  const project = getProject(projectSlug);

  if (!project) notFound();

  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
        {project.code}
      </p>

      <h1 className="mt-4 font-serif text-4xl font-medium text-foreground">
        {project.title}
      </h1>

      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      {project.longDescription && (
        <section className="mt-12 max-w-3xl">
          <h2 className="text-xs uppercase tracking-[0.2em] text-lavender-glow">
            Description
          </h2>

          <p className="mt-4 leading-relaxed text-foreground/85">
            {project.longDescription}
          </p>
        </section>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-lavender-glow/20 px-3 py-1 text-xs uppercase tracking-wide text-muted-foreground">
          {project.status}
        </span>

        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-lavender-glow/20 px-3 py-1 text-xs text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </main>
  );
}
