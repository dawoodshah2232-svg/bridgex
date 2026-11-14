import type { Metadata } from "next";
import { PRIVACY_SECTIONS } from "@/content/legal";
import LegalPage from "@/components/company/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Draft",
  description:
    "Draft privacy policy for BridgeX: what personal data we collect, how we use it, how long we keep it, and your rights. Draft — pending legal review.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      href="/privacy"
      eyebrow="Legal — Privacy Policy"
      title="Privacy Policy"
      intro="What personal data we collect when you use this website or contact us, how we use it, how long we keep it, and the rights you have over it."
      updated="13 November 2026"
      sections={PRIVACY_SECTIONS}
      image="/images/signing-contract.jpg"
      imageAlt="Person signing documents with a pen"
      imageWidth={1600}
      imageHeight={1068}
    />
  );
}
