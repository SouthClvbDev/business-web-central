import Link from "next/link";
import { LabOrbit } from "@/components/lab-orbit";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/projects";

const disciplines = [
  ["01", "Web applications", "Robust interfaces shaped around real workflows."],
  ["02", "Digital products", "From a sharp idea to a system ready to evolve."],
  ["03", "Automation + AI", "Useful intelligence embedded where it removes friction."],
  ["04", "Integrations", "Independent tools connected into coherent experiences."],
];

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="kicker"><i />Independent digital laboratory · Argentina</p>
          <h1>Ideas, <em>engineered</em><br />into digital<br />products.</h1>
          <div className="hero-bottom"><p>ZSUR is where experimentation meets product thinking. A growing ecosystem of useful, expressive and scalable experiences.</p><Link href="/projects" className="round-link" aria-label="Explore projects">↘</Link></div>
        </div>
        <LabOrbit />
        <span className="scroll-mark">SCROLL TO EXPLORE <i /></span>
      </section>

      <section className="section shell">
        <Reveal className="section-heading"><p className="kicker"><i />Selected work</p><h2>Products in<br /><em>the wild.</em></h2><Link href="/projects">View all projects ↗</Link></Reveal>
        <div className="project-grid">{projects.filter((p) => p.featured).map((project, index) => <Reveal key={project.id} delay={index * .08}><ProjectCard project={project} index={index} /></Reveal>)}</div>
      </section>

      <section className="section shell playground">
        <Reveal className="playground-copy"><p className="kicker"><i />Digital playground</p><h2>Built to test.<br />Made to <em>learn.</em></h2><p>Small technical experiments, interface studies and prototypes live here before they become products—or teach us something useful.</p><Link href="/lab" className="text-link">Enter the lab <span>↗</span></Link></Reveal>
        <Reveal className="terminal" delay={.1}><div><i /><i /><i /><span>zsur://lab/current</span></div><pre><code><b>01</b> const idea = observe(problem);{"\n"}<b>02</b> const prototype = build(idea);{"\n"}<b>03</b> const signal = test(prototype);{"\n"}<b>04</b>{"\n"}<b>05</b> if (signal.isUseful) {'{'}{"\n"}<b>06</b>   ship(signal);{"\n"}<b>07</b> {'}'} else {'{'} learn(signal); {'}'}</code></pre><span>● ITERATION ACTIVE</span></Reveal>
      </section>

      <section className="section shell build-section">
        <Reveal className="section-heading"><p className="kicker"><i />What I build</p><h2>Systems with<br /><em>intent.</em></h2></Reveal>
        <div className="discipline-grid">{disciplines.map(([number, title, text]) => <Reveal className="discipline" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><i>↗</i></Reveal>)}</div>
      </section>

      <section className="manifesto shell"><Reveal><p>THE OPERATING PRINCIPLE</p><blockquote>Useful enough to matter.<br />Scalable enough to grow.<br /><em>Distinct enough to remember.</em></blockquote><span>ZSUR / DEVELOPMENT PHILOSOPHY</span></Reveal></section>

      <section id="contact" className="contact shell"><Reveal><p className="kicker"><i />Open channel</p><h2>Have an idea<br />worth <em>building?</em></h2><p>Professional contact channels will appear here when they are confirmed.</p><span className="contact-pulse"><i />SIGNAL STANDBY</span></Reveal></section>
    </>
  );
}
