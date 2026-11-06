import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link href="/" className="brand"><span>ZSUR</span><small>digital lab</small></Link>
      <p>Independent digital laboratory.<br />Built from Argentina for the open web.</p>
      <div><Link href="/projects">Projects</Link><Link href="/about">About</Link><Link href="/lab">Lab</Link></div>
      <small>© {new Date().getFullYear()} ZSUR · SYSTEM ONLINE</small>
    </footer>
  );
}
