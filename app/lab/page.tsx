import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = { title: "Ideas", description: "Ideas, prototipos y nuevas soluciones en desarrollo dentro de ZSUR.", alternates: { canonical: "/lab" } };

const experiments = [["001", "Interfaces que responden", "Estudio de interacción", "Próximamente"], ["002", "Experiencias espaciales", "Experimento web", "Próximamente"], ["003", "IA aplicada a procesos", "Investigación de producto", "En desarrollo"]];

export default function LabPage() {
  return <div className="page shell"><Reveal className="page-intro"><p className="kicker"><i />Ideas en desarrollo</p><h1>Explorar también<br />es parte de <em>crear.</em></h1><p>Un espacio para prototipos, pruebas de interfaz y nuevas formas de aplicar tecnología a problemas cotidianos.</p></Reveal><div className="experiment-list">{experiments.map(([id, title, type, state]) => <Reveal className="experiment" key={id}><span>{id}</span><h2>{title}</h2><p>{type}</p><b><i />{state}</b></Reveal>)}</div></div>;
}
