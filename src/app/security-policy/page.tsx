import type { Metadata } from "next";
import { SECURITY_SECTIONS } from "@/content/legal";
import LegalPage from "@/components/company/LegalPage";

export const metadata: Metadata = {
  title: "Security Policy — Draft",
  description:
    "Draft security policy for BridgeX: the design principles we build to, how we protect data, and how to report a vulnerability. Draft — pending legal review.",
};

export default function SecurityPolicyPage() {
  return (
    <LegalPage
      href="/security-policy"
      eyebrow="Legal — Security Policy"
      title="Security Policy"
      intro="How we think about security: the design principles the platform is built to, how data is protected, and how to report a vulnerability."
      updated="13 November 2026"
      sections={SECURITY_SECTIONS}
      image="/images/compliance-desk.jpg"
      imageAlt="Businesswoman reviewing paperwork in an office"
      imageWidth={1600}
      imageHeight={1068}
    />
  );
}
