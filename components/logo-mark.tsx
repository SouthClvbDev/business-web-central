import Image from "next/image";

export function LogoMark({ className = "", wordmark = false, inverted = false }: { className?: string; wordmark?: boolean; inverted?: boolean }) {
  const file = wordmark
    ? inverted ? "/brand/logo-zsur-invertido.svg" : "/brand/logo-zsur.svg"
    : inverted ? "/brand/isotipo-zsur-invertido.svg" : "/brand/isotipo-zsur.svg";
  return <Image className={className} src={file} alt={wordmark ? "ZSUR" : "Símbolo de ZSUR"} width={wordmark ? 1180 : 512} height={320} priority={wordmark} />;
}
