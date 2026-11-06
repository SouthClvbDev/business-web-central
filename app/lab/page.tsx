import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = { title: "Lab", description: "Experiments and prototypes from ZSUR Digital Lab.", alternates: { canonical: "/lab" } };

const experiments = [["001", "Reactive type field", "Interaction study", "Queued"], ["002", "Spatial interface", "Web experiment", "Queued"], ["003", "Useful AI patterns", "Product research", "Active"]];

export default function LabPage() {
  return <div className="page shell"><Reveal className="page-intro"><p className="kicker"><i />Experimental index</p><h1>Curiosity,<br /><em>in public.</em></h1><p>A growing space for prototypes, interface studies and technical questions. Experiments will be published as they become ready to share.</p></Reveal><div className="experiment-list">{experiments.map(([id, title, type, state]) => <Reveal className="experiment" key={id}><span>{id}</span><h2>{title}</h2><p>{type}</p><b><i />{state}</b></Reveal>)}</div></div>;
}
