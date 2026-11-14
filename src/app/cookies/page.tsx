import type { Metadata } from "next";
import { COOKIE_SECTIONS } from "@/content/legal";
import LegalPage from "@/components/company/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy — Draft",
  description:
    "Draft cookie policy for BridgeX: what we store in your browser, how consent works, and how to manage cookies yourself. Draft — pending legal review.",
};

export default function CookiesPage() {
  return (
    <LegalPage
      href="/cookies"
      eyebrow="Legal — Cookie Policy"
      title="Cookie Policy"
      intro="What we store in your browser and why, how the consent banner works, and how you can manage or delete cookies yourself."
      updated="13 November 2026"
      sections={COOKIE_SECTIONS}
      image="/images/signing-agreement.jpg"
      imageAlt="Businessman handing a pen to sign an agreement"
      imageWidth={1600}
      imageHeight={1067}
    />
  );
}
