export type ProjectCategory = "Comercio" | "Servicios" | "Productividad";
export type ProjectStatus = "En línea" | "En evolución";

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
    eyebrow: "Gastronomía · Presencia digital",
    summary: "Un espacio digital para un emprendimiento gastronómico, pensado para convertir una visita en un contacto directo.",
    description: "Una experiencia digital enfocada en Sweet Delfina y su propuesta gastronómica. Dentro de ZSUR muestra cómo una identidad comercial puede presentarse con claridad en internet.",
    problem: "Los pequeños emprendimientos necesitan un lugar claro y confiable donde sus clientes entiendan la propuesta y puedan dar el siguiente paso sin fricción.",
    solution: "Una presencia web propia que le da autonomía a la marca y simplifica el camino desde el interés hasta el contacto.",
    category: "Comercio",
    status: "En línea",
    technologies: [],
    images: [],
    publicUrl: "https://sweetdelfina.zsur.ar",
    featured: true,
    order: 1,
    accent: "#ff8066",
    nextSteps: ["Mantener el caso actualizado con el producto publicado", "Incorporar imágenes verificadas del emprendimiento"],
  },
  {
    id: "electroclima",
    slug: "electroclima",
    name: "Electroclima",
    eyebrow: "Servicios · Producto independiente",
    summary: "Una presencia digital propia para comunicar servicios con claridad y facilitar el contacto con potenciales clientes.",
    description: "Electroclima se presenta como un producto independiente con presencia pública propia. El caso evita afirmaciones no verificadas hasta poder revisar el sitio publicado.",
    problem: "Los negocios de servicios necesitan explicar rápidamente qué hacen, generar confianza y ofrecer una vía de contacto simple.",
    solution: "Una web dedicada, organizada para presentar la propuesta con claridad y conectar al negocio con sus clientes.",
    category: "Servicios",
    status: "En línea",
    technologies: [],
    images: [],
    publicUrl: "https://electroclima.zsur.ar",
    featured: true,
    order: 2,
    accent: "#7ce8ff",
    nextSteps: ["Verificar el contenido y las tecnologías del producto publicado", "Ampliar el caso con recursos visuales aprobados"],
  },
  {
    id: "citapp",
    slug: "citapp",
    name: "CITAPP",
    eyebrow: "Aplicación web · Productividad",
    summary: "Una aplicación web publicada en Render, preparada para seguir creciendo dentro del ecosistema ZSUR.",
    description: "CITAPP es una aplicación web activa y uno de los primeros proyectos de ZSUR. Su dirección actual en Render se mantiene hasta definir un futuro subdominio propio.",
    problem: "Los procesos útiles necesitan una interfaz específica y un punto de acceso estable para las personas que los usan.",
    solution: "Una aplicación web independiente que puede evolucionar por etapas y mantenerse accesible desde ZSUR.",
    category: "Productividad",
    status: "En evolución",
    technologies: [],
    images: [],
    publicUrl: "http://citapp-web.onrender.com/",
    featured: true,
    order: 3,
    accent: "#c7ff6b",
    nextSteps: ["Evaluar un futuro subdominio de zsur.ar", "Documentar sus flujos y tecnologías verificadas"],
  },
];

export const projects = projectCatalog.sort((a, b) => a.order - b.order);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
