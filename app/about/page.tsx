import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = { title: "Sobre ZSUR", description: "El enfoque de diseño y desarrollo detrás de cada solución de ZSUR.", alternates: { canonical: "/about" } };

export default function AboutPage() {
  return <div className="page shell"><Reveal className="page-intro"><p className="kicker"><i />Sobre ZSUR</p><h1>Diseño, desarrollo<br />y una mirada <em>de producto.</em></h1><p>ZSUR es un espacio independiente dedicado a crear soluciones digitales para negocios, emprendimientos e ideas que necesitan convertirse en algo concreto.</p></Reveal><div className="about-grid"><Reveal><span>01 / ENFOQUE</span><h2>Entender antes<br />de construir.</h2><p>Cada proyecto empieza por el problema real. A partir de ahí se ordena la información, se diseña la experiencia y se desarrolla una solución clara, útil y preparada para evolucionar.</p></Reveal><Reveal><span>02 / PRINCIPIOS</span><ul><li>Claridad antes que complejidad</li><li>Diseño al servicio del objetivo</li><li>Tecnología fácil de mantener</li><li>Calidad en cada detalle</li></ul></Reveal></div></div>;
}
