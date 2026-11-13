import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BridgeX — Connected Infrastructure for Modern Financial Businesses",
  description:
    "BridgeX brings onboarding, client relationships, trading operations, payments and partner growth together in one adaptable technology ecosystem.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
