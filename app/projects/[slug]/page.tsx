import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: project.name, description: project.summary, alternates: { canonical: `/projects/${project.slug}` }, openGraph: { title: `${project.name} · ZSUR`, description: project.summary, url: `/projects/${project.slug}` } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return (
    <article className="case-study shell" style={{ "--accent": project.accent } as React.CSSProperties}>
      <Reveal className="case-hero"><Link href="/projects">← Todos los proyectos</Link><p>{project.eyebrow}</p><h1>{project.name}</h1><span>{project.summary}</span><a href={project.publicUrl} target="_blank" rel="noreferrer">Visitar proyecto ↗</a></Reveal>
      <div className="case-visual"><div className="project-glyph"><i /><i /><i /></div><span>ZSUR / PROYECTO {String(project.order).padStart(3, "0")}</span></div>
      <Reveal className="case-facts"><div><small>Estado</small><strong>{project.status}</strong></div><div><small>Categoría</small><strong>{project.category}</strong></div><div><small>Tecnología</small><strong>{project.technologies.length ? project.technologies.join(", ") : "Pendiente de verificar"}</strong></div><div><small>Lanzamiento</small><strong>{project.launchedAt ?? "Sin fecha documentada"}</strong></div></Reveal>
      <Reveal className="case-section"><p>01 / Contexto</p><div><h2>Una respuesta concreta<br />a una necesidad real.</h2><p>{project.description}</p></div></Reveal>
      <Reveal className="case-columns"><div><small>LA NECESIDAD</small><h3>{project.problem}</h3></div><div><small>LA SOLUCIÓN</small><h3>{project.solution}</h3></div></Reveal>
      <Reveal className="case-section"><p>02 / Próximos pasos</p><div><h2>Una base para<br /><em>seguir creciendo.</em></h2><ul>{project.nextSteps.map((step) => <li key={step}>{step}</li>)}</ul></div></Reveal>
      <nav className="case-nav"><Link href="/projects">← Todos los proyectos</Link><Link href={`/projects/${projects[(project.order) % projects.length].slug}`}>Siguiente proyecto →</Link></nav>
    </article>
  );
}
