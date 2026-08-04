import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  accent: {
    text: string;
  };
};

export function ProjectCard({ project, accent }: ProjectCardProps) {
  return (
    <div className="glass rounded-2xl border border-lavender-glow/12 p-[30px] transition-all duration-300 hover:-translate-y-1 hover:border-lavender-glow/30 hover:shadow-[0_0_40px_-10px_rgba(167,139,250,0.6)]">
      <div className="flex items-start justify-between gap-4">
        <span
          className={cn(
            "text-xs font-medium uppercase tracking-[0.25em]",
            accent.text,
          )}
        >
          {project.code}
        </span>

        <span
          className={cn(
            "rounded-full border px-[10px] py-[5px] text-[10px] font-medium uppercase tracking-wide",
            project.status === "live" && "border-moss-green text-moss-green",
            project.status === "wip" &&
              "border-lavender-glow text-lavender-glow",
            project.status === "paused" &&
              "border-muted-foreground text-muted-foreground",
          )}
        >
          {project.status}
        </span>
      </div>

      <h2 className="mt-4 font-serif text-2xl font-medium text-foreground">
        {project.title}
      </h2>

      <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-[6px] border border-muted-foreground/40 px-3 py-1 text-xs text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
