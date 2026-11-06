export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 56 56" role="img" aria-label="Monograma ZS de ZSUR">
      <path className="logo-shape" d="M15 4h26c7 0 11 4 11 11v26c0 7-4 11-11 11H15C8 52 4 48 4 41V15C4 8 8 4 15 4Z" />
      <path className="logo-line" d="M16 18h23L17 38h23" />
      <path className="logo-line logo-line-soft" d="M37 14c-2-2-5-3-9-3-7 0-11 3-11 8 0 4 3 6 10 8l3 1c7 2 10 4 10 9 0 6-5 9-13 9-5 0-9-1-12-4" />
    </svg>
  );
}
