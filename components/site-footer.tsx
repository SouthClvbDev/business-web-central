import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link href="/" className="brand"><span>ZSUR</span><small>soluciones digitales</small></Link>
      <p>Diseño y desarrollo de soluciones digitales.<br />Hecho en Argentina.</p>
      <div><Link href="/projects">Proyectos</Link><Link href="/como-trabajo">Cómo trabajo</Link><Link href="/about">Sobre ZSUR</Link></div>
      <small>© {new Date().getFullYear()} ZSUR · ARGENTINA</small>
    </footer>
  );
}
