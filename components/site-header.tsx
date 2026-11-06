"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [["Proyectos", "/projects"], ["Cómo trabajo", "/como-trabajo"], ["Sobre ZSUR", "/about"]] as const;

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Inicio de ZSUR"><span>ZSUR</span><small>soluciones digitales</small></Link>
      <nav aria-label="Navegación principal">
        {links.map(([label, href]) => <Link key={href} href={href} aria-current={pathname.startsWith(href) ? "page" : undefined}>{label}</Link>)}
      </nav>
      <Link href="/#contact" className="signal-link"><i />Contactar</Link>
    </header>
  );
}
