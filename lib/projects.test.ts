import { describe, expect, it } from "vitest";
import { getProject, projects } from "./projects";

describe("project catalog", () => {
  it("keeps unique ids and slugs with valid public URLs", () => {
    expect(new Set(projects.map(({ id }) => id)).size).toBe(projects.length);
    expect(new Set(projects.map(({ slug }) => slug)).size).toBe(projects.length);
    projects.forEach(({ publicUrl }) => expect(() => new URL(publicUrl)).not.toThrow());
  });

  it("resolves every catalog entry by slug", () => {
    projects.forEach((project) => expect(getProject(project.slug)?.id).toBe(project.id));
  });
});
