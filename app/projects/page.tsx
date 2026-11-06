import type { Metadata } from "next";
import { ProjectExplorer } from "@/components/project-explorer";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = { title: "Projects", description: "Explore the products and applications growing inside ZSUR Digital Lab.", alternates: { canonical: "/projects" } };

export default function ProjectsPage() {
  return <div className="page shell"><Reveal className="page-intro"><p className="kicker"><i />Project index</p><h1>Work made<br /><em>to move.</em></h1><p>A living catalog of independent products, client-facing experiences and applications in evolution.</p></Reveal><ProjectExplorer projects={projects} /></div>;
}
