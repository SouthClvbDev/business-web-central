import { LogoMark } from "./logo-mark";

export function LabOrbit() {
  return (
    <div className="orbit" aria-hidden="true">
      <div className="orbit-grid" />
      <div className="orbit-core"><LogoMark className="orbit-logo" /></div>
      <div className="orbit-ring orbit-ring-a" />
      <div className="orbit-ring orbit-ring-b" />
      <span className="orbit-label label-a">DISEÑO + DESARROLLO</span>
      <span className="orbit-label label-b">ARGENTINA · ZSUR</span>
    </div>
  );
}
