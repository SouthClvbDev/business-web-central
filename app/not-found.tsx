import Link from "next/link";

export default function NotFound() { return <div className="not-found shell"><p>ERROR / 404</p><h1>Signal<br /><em>lost.</em></h1><span>The requested coordinate does not exist in this system.</span><Link href="/">Return to the lab →</Link></div>; }
