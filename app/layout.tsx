import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/syne";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zsur.ar"),
  title: { default: "ZSUR — Digital Lab", template: "%s · ZSUR" },
  description: "An independent digital laboratory building useful, expressive and scalable products.",
  applicationName: "ZSUR Digital Lab",
  openGraph: { title: "ZSUR — Digital Lab", description: "Ideas engineered into digital products.", url: "https://zsur.ar", siteName: "ZSUR", type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image", title: "ZSUR — Digital Lab", description: "Ideas engineered into digital products." },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#070908", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><a href="#main" className="skip-link">Skip to content</a><div className="noise" /><SiteHeader /><main id="main">{children}</main><SiteFooter /></body>
    </html>
  );
}
