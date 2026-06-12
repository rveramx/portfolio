import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="reveal rounded-2xl border border-foreground/10 bg-surface p-6 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 text-foreground/70">{project.summary}</p>
      {project.metrics && (
        <p className="mt-2 text-sm text-accent">{project.metrics}</p>
      )}
      <p className="mt-3 text-sm text-foreground/60">
        {project.stack.join(" · ")}
      </p>
      <div className="mt-4 flex gap-4 text-sm">
        {project.links.live && (
          <a
            href={project.links.live}
            className="text-accent underline-offset-4 hover:underline"
          >
            Proyecto
          </a>
        )}
        {project.links.repo && (
          <a
            href={project.links.repo}
            className="text-accent underline-offset-4 hover:underline"
          >
            Código
          </a>
        )}
      </div>
    </article>
  );
}
