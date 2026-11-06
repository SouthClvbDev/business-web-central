import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
export default function sitemap(): MetadataRoute.Sitemap { const pages = ["", "/projects", "/como-trabajo", "/about", ...projects.map((p) => `/projects/${p.slug}`)]; return pages.map((path) => ({ url: `https://zsur.ar${path}`, lastModified: new Date(), changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : .8 })); }
