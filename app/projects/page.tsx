import type { Metadata } from "next";
import { ProjectExplorer } from "@/components/project-explorer";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = { title: "Proyectos", description: "Conocé los sitios, aplicaciones y soluciones digitales desarrollados por ZSUR.", alternates: { canonical: "/projects" } };

export default function ProjectsPage() {
  return <div className="page shell"><Reveal className="page-intro"><p className="kicker"><i />Proyectos</p><h1>Trabajo pensado<br /><em>para resolver.</em></h1><p>Sitios, aplicaciones y productos digitales creados para necesidades concretas de negocios y emprendimientos.</p></Reveal><ProjectExplorer projects={projects} /></div>;
}
