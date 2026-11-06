"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [["Projects", "/projects"], ["About", "/about"], ["Lab", "/lab"]] as const;

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="ZSUR home"><span>ZSUR</span><small>digital lab</small></Link>
      <nav aria-label="Main navigation">
        {links.map(([label, href]) => <Link key={href} href={href} aria-current={pathname.startsWith(href) ? "page" : undefined}>{label}</Link>)}
      </nav>
      <Link href="/#contact" className="signal-link"><i />Signal</Link>
    </header>
  );
}
