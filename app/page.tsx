import Link from "next/link";
import { LabOrbit } from "@/components/lab-orbit";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/projects";

const disciplines = [
  ["01", "Sitios web", "Presencias digitales claras, rápidas y preparadas para generar consultas."],
  ["02", "Aplicaciones", "Sistemas web a medida para organizar y simplificar procesos reales."],
  ["03", "Automatización e IA", "Herramientas que reducen tareas repetitivas y ayudan a trabajar mejor."],
  ["04", "Integraciones", "Servicios y plataformas conectados para que la información fluya sin fricción."],
];

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="kicker"><i />Diseño y desarrollo web · Argentina</p>
          <h1>Soluciones digitales<br />para hacer crecer<br /><em>tu negocio.</em></h1>
          <div className="hero-bottom"><p>Diseño sitios, aplicaciones y automatizaciones que ayudan a negocios y emprendimientos a vender, organizarse y avanzar.</p><Link href="#contact" className="round-link" aria-label="Ir a contacto">↘</Link></div>
        </div>
        <LabOrbit />
        <span className="scroll-mark">CONOCÉ MI TRABAJO <i /></span>
      </section>

      <section className="section shell">
        <Reveal className="section-heading"><p className="kicker"><i />Proyectos seleccionados</p><h2>Soluciones que ya<br /><em>están funcionando.</em></h2><Link href="/projects">Ver todos los proyectos ↗</Link></Reveal>
        <div className="project-grid">{projects.filter((p) => p.featured).map((project, index) => <Reveal key={project.id} delay={index * .08}><ProjectCard project={project} index={index} /></Reveal>)}</div>
      </section>

      <section className="section shell playground">
        <Reveal className="playground-copy"><p className="kicker"><i />Una forma simple de trabajar</p><h2>Del problema<br />a una solución <em>concreta.</em></h2><p>Primero entiendo qué necesitás. Después ordeno la información, diseño una experiencia clara y construyo una solución que puedas usar y hacer crecer.</p><Link href="/como-trabajo" className="text-link">Conocé el proceso <span>↗</span></Link></Reveal>
        <Reveal className="terminal process-card" delay={.1}><div><span>UN PROCESO CLARO, DE PRINCIPIO A FIN</span></div><ol><li><b>01</b><span><strong>Entender</strong>El negocio, las personas y el objetivo.</span></li><li><b>02</b><span><strong>Diseñar</strong>Una solución simple y fácil de usar.</span></li><li><b>03</b><span><strong>Construir</strong>Con tecnología sólida y escalable.</span></li><li><b>04</b><span><strong>Mejorar</strong>Medir, aprender y seguir evolucionando.</span></li></ol></Reveal>
      </section>

      <section className="section shell build-section">
        <Reveal className="section-heading"><p className="kicker"><i />Qué puedo hacer por tu negocio</p><h2>Tecnología con<br /><em>un objetivo claro.</em></h2></Reveal>
        <div className="discipline-grid">{disciplines.map(([number, title, text]) => <Reveal className="discipline" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><i>↗</i></Reveal>)}</div>
      </section>

      <section className="manifesto shell"><Reveal><p>MI FORMA DE CONSTRUIR</p><blockquote>Simple para quien lo usa.<br />Sólido para tu negocio.<br /><em>Preparado para crecer.</em></blockquote><span>ZSUR / DISEÑO Y DESARROLLO</span></Reveal></section>

      <section id="contact" className="contact shell"><Reveal><p className="kicker"><i />Hablemos</p><h2>¿Tenés un proyecto<br />o un problema para <em>resolver?</em></h2><p>Contame qué necesitás y vemos juntos cuál es la mejor manera de avanzar.</p><span className="contact-pulse"><i />CANAL DE CONTACTO PRÓXIMAMENTE</span></Reveal></section>
    </>
  );
}
