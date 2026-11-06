import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/syne";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zsur.ar"),
  title: { default: "ZSUR — Soluciones digitales", template: "%s · ZSUR" },
  description: "Diseño y desarrollo de sitios web, aplicaciones y automatizaciones para negocios argentinos.",
  applicationName: "ZSUR",
  openGraph: { title: "ZSUR — Soluciones digitales", description: "Tecnología clara para hacer crecer tu negocio.", url: "https://zsur.ar", siteName: "ZSUR", type: "website", locale: "es_AR" },
  twitter: { card: "summary_large_image", title: "ZSUR — Soluciones digitales", description: "Tecnología clara para hacer crecer tu negocio." },
  icons: { icon: "/favicon.svg" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#f4f6ef", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body><a href="#main" className="skip-link">Ir al contenido</a><div className="noise" /><SiteHeader /><main id="main">{children}</main><SiteFooter /></body>
    </html>
  );
}
