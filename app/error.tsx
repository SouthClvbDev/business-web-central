"use client";

export default function ErrorPage({ reset }: { reset: () => void }) { return <div className="not-found shell"><p>SYSTEM / ERROR</p><h1>Signal<br /><em>interrupted.</em></h1><span>An unexpected error reached the interface.</span><button onClick={reset}>Try again →</button></div>; }
