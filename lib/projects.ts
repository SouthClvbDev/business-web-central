export type ProjectCategory = "Commerce" | "Services" | "Productivity";
export type ProjectStatus = "Live" | "In evolution";

export interface Project {
  id: string;
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  description: string;
  problem: string;
  solution: string;
  category: ProjectCategory;
  status: ProjectStatus;
  technologies: string[];
  images: string[];
  publicUrl: string;
  repositoryUrl?: string;
  launchedAt?: string;
  featured: boolean;
  order: number;
  accent: string;
  nextSteps: string[];
}

const projectCatalog: Project[] = [
  {
    id: "sweet-delfina",
    slug: "sweet-delfina",
    name: "Sweet Delfina",
    eyebrow: "Gastronomy · Digital presence",
    summary: "A digital home for a gastronomic venture, designed to turn discovery into a direct connection.",
    description: "A focused digital experience for Sweet Delfina and its gastronomic offering. Its role inside ZSUR is to show how a distinct business identity can live clearly online.",
    problem: "Small ventures need a clear, credible place where people can understand the offering and take the next step without friction.",
    solution: "A dedicated public experience that gives the brand an independent destination and a simple path from interest to action.",
    category: "Commerce",
    status: "Live",
    technologies: [],
    images: [],
    publicUrl: "https://sweetdelfina.zsur.ar",
    featured: true,
    order: 1,
    accent: "#ff8066",
    nextSteps: ["Keep the portfolio case study aligned with the live product", "Add verified product imagery when available"],
  },
  {
    id: "electroclima",
    slug: "electroclima",
    name: "Electroclima",
    eyebrow: "Services · Independent product",
    summary: "An independent digital product in the ZSUR ecosystem, built to give a service business a clear online destination.",
    description: "Electroclima is presented as a standalone product with its own public presence. The case study intentionally avoids unverified claims until the live site can be inspected.",
    problem: "Service businesses benefit from a focused destination that communicates their offer and makes contact easier.",
    solution: "A dedicated web presence structured around clarity, autonomy and a direct route to the service.",
    category: "Services",
    status: "Live",
    technologies: [],
    images: [],
    publicUrl: "https://electroclima.zsur.ar",
    featured: true,
    order: 2,
    accent: "#7ce8ff",
    nextSteps: ["Verify the live product content and technology stack", "Expand the case study with approved visuals"],
  },
  {
    id: "citapp",
    slug: "citapp",
    name: "CITAPP",
    eyebrow: "Web application · Productivity",
    summary: "A web application currently running on Render, ready to evolve within the wider ZSUR product ecosystem.",
    description: "CITAPP is an active web application and the third founding project in the lab. Its current Render URL remains the source of truth until a future ZSUR subdomain is assigned.",
    problem: "Useful workflows deserve a purpose-built interface and a stable public access point.",
    solution: "A standalone web application that can evolve independently while remaining discoverable through ZSUR.",
    category: "Productivity",
    status: "In evolution",
    technologies: [],
    images: [],
    publicUrl: "http://citapp-web.onrender.com/",
    featured: true,
    order: 3,
    accent: "#c7ff6b",
    nextSteps: ["Evaluate a future zsur.ar subdomain", "Document verified workflows and stack"],
  },
];

export const projects = projectCatalog.sort((a, b) => a.order - b.order);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
