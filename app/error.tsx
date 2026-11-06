"use client";

export default function ErrorPage({ reset }: { reset: () => void }) { return <div className="not-found shell"><p>ERROR DEL SISTEMA</p><h1>Algo no salió<br /><em>como esperábamos.</em></h1><span>Ocurrió un error inesperado al cargar esta página.</span><button onClick={reset}>Intentar nuevamente →</button></div>; }
