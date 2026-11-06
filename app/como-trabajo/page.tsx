import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Cómo trabajo",
  description: "Un proceso claro para convertir necesidades de negocio en soluciones digitales útiles.",
  alternates: { canonical: "/como-trabajo" },
};

const steps = [
  ["01", "Entender el problema", "Hablamos sobre tu negocio, el objetivo y las personas que van a usar la solución. Antes de proponer tecnología, definimos qué necesitamos resolver."],
  ["02", "Ordenar y proponer", "Traduzco esa necesidad en un alcance claro, prioridades y una propuesta concreta. Así sabés qué vamos a construir y por qué."],
  ["03", "Diseñar la experiencia", "Organizo la información y diseño una interfaz simple, coherente con tu identidad y fácil de usar desde cualquier dispositivo."],
  ["04", "Desarrollar y validar", "Construyo la solución por etapas, pruebo los recorridos principales y verifico rendimiento, accesibilidad y calidad técnica."],
  ["05", "Publicar y acompañar", "La solución queda lista para usar. También podemos medir resultados, resolver mejoras y sumar nuevas funciones cuando el negocio lo necesite."],
];

export default function ProcessPage() {
  return (
    <div className="page shell process-page">
      <Reveal className="page-intro">
        <p className="kicker"><i />Cómo trabajo</p>
        <h1>Un proceso claro,<br /><em>sin vueltas.</em></h1>
        <p>Trabajo por etapas para reducir incertidumbre, tomar buenas decisiones y llegar a una solución que tenga sentido para tu negocio.</p>
      </Reveal>
      <div className="process-list">
        {steps.map(([number, title, description]) => (
          <Reveal className="process-row" key={number}>
            <span>{number}</span><h2>{title}</h2><p>{description}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="process-cta">
        <p>¿Tenés algo en mente?</p>
        <h2>Empecemos por entender<br />qué necesitás resolver.</h2>
        <Link href="/#contact">Hablemos ↗</Link>
      </Reveal>
    </div>
  );
}
