import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/chrome/Header";
import Footer from "@/components/chrome/Footer";
import SkipLink from "@/components/chrome/SkipLink";
import { SITE_URL, asset } from "@/lib/paths";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BridgeX — Connected Infrastructure for Modern Financial Businesses",
    template: "%s — BridgeX",
  },
  description:
    "BridgeX brings onboarding, client relationships, trading operations, payments and partner growth together in one adaptable technology ecosystem.",
  icons: {
    icon: asset("/favicon.svg"),
  },
  openGraph: {
    type: "website",
    siteName: "BridgeX",
    title: "BridgeX — Connected Infrastructure for Modern Financial Businesses",
    description:
      "From onboarding and client relationships to trading operations, payments and partner growth — one adaptable technology ecosystem.",
    images: [
      {
        url: asset("/images/hero-bridge.jpg"),
        width: 1920,
        height: 1080,
        alt: "Illuminated cable-stayed bridge over a river at night, city lights on the far bank",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bx-ivory font-body text-bx-ink">
        <SkipLink />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
