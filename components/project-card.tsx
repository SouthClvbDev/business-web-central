import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link href={`/projects/${project.slug}`} className="project-card" style={{ "--accent": project.accent } as React.CSSProperties}>
      <div className="project-visual">
        <span className="project-index">0{index + 1}</span>
        <div className="project-glyph"><i /><i /><i /></div>
        <span className="project-status"><i />{project.status}</span>
      </div>
      <div className="project-copy">
        <p>{project.eyebrow}</p>
        <h3>{project.name}</h3>
        <span>{project.summary}</span>
        <b>Ver proyecto <i>↗</i></b>
      </div>
    </Link>
  );
}
