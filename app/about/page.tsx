import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = { title: "About", description: "The product thinking behind ZSUR Digital Lab.", alternates: { canonical: "/about" } };

export default function AboutPage() {
  return <div className="page shell"><Reveal className="page-intro"><p className="kicker"><i />Behind the lab</p><h1>One creator.<br /><em>Many systems.</em></h1><p>ZSUR is an independent practice for designing and engineering digital products. Personal background and professional history will be added here when confirmed.</p></Reveal><div className="about-grid"><Reveal><span>01 / APPROACH</span><h2>Think in products,<br />work in systems.</h2><p>Every project begins with the problem, then moves through structure, interaction and implementation. The goal is a useful experience with enough character to be remembered.</p></Reveal><Reveal><span>02 / PRINCIPLES</span><ul><li>Clarity before complexity</li><li>Motion with a purpose</li><li>Systems that invite change</li><li>Craft at every scale</li></ul></Reveal></div></div>;
}
