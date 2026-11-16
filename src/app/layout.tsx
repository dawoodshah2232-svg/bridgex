import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/chrome/Header";
import Footer from "@/components/chrome/Footer";
import SkipLink from "@/components/chrome/SkipLink";
import CookieBanner from "@/components/CookieBanner";
import { SITE_URL, asset } from "@/lib/paths";
import { jsonLdString, organizationJsonLd } from "@/lib/seo";

export const viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BridgeX — White-Label Brokerage Technology",
    template: "%s — BridgeX",
  },
  description:
    "BridgeX is the white-label brokerage platform behind BridgeX Apps: trading CRM, copy trading, marketing, HR, finance and infrastructure in one suite — under your brand, your domain, your pricing.",
  icons: {
    icon: asset("/favicon.svg"),
  },
  openGraph: {
    type: "website",
    siteName: "BridgeX",
    title: "BridgeX — White-Label Brokerage Technology",
    description:
      "The complete brokerage platform, rebranded as yours — under your brand, your domain, your pricing. The platform behind BridgeX Apps.",
    images: [
      {
        // Bare path on purpose: metadataBase already includes /bridgex,
        // so asset() here would double the basePath in the OG URL.
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BridgeX — White-Label Brokerage Technology",
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
      <body className="min-h-screen bg-bx-white font-body text-bx-navy-900">
        <SkipLink />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CookieBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdString(organizationJsonLd()),
          }}
        />
      </body>
    </html>
  );
}
