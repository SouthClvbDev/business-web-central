import Link from "next/link";

export default function NotFound() { return <div className="not-found shell"><p>ERROR / 404</p><h1>Esta página<br /><em>no existe.</em></h1><span>Es posible que el contenido se haya movido o que la dirección sea incorrecta.</span><Link href="/">Volver al inicio →</Link></div>; }
