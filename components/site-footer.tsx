import Link from "next/link";
import { LogoMark } from "./logo-mark";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link href="/" className="brand"><LogoMark wordmark /></Link>
      <p>Diseño y desarrollo de soluciones digitales.<br />Hecho en Argentina.</p>
      <div><Link href="/projects">Proyectos</Link><Link href="/como-trabajo">Cómo trabajo</Link><Link href="/about">Sobre ZSUR</Link></div>
      <small>© {new Date().getFullYear()} ZSUR · ARGENTINA</small>
    </footer>
  );
}
