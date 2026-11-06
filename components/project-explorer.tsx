"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ProjectCard } from "./project-card";
import type { Project, ProjectCategory, ProjectStatus } from "@/lib/projects";

type Filter = "All" | ProjectCategory | ProjectStatus;

export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const reduced = useReducedMotion();
  const filters: Filter[] = ["All", ...new Set(projects.flatMap((p) => [p.category, p.status]))];
  const visible = useMemo(() => projects.filter((p) => filter === "All" || p.category === filter || p.status === filter), [filter, projects]);
  return (
    <>
      <div className="filters" aria-label="Project filters">
        {filters.map((item) => <button key={item} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button>)}
      </div>
      <motion.div layout={!reduced} className="project-grid">
        <AnimatePresence mode="popLayout">
          {visible.map((project, index) => (
            <motion.div key={project.id} layout={!reduced} initial={reduced ? false : { opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .96 }}>
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
