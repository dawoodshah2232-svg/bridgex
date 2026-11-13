/**
 * Homepage — the flagship story, sections H01–H13 in spec order (§6).
 * H13 (footer) lives in the root layout; everything else composes here.
 */
import Hero from "@/components/home/Hero";
import ValueIntro from "@/components/home/ValueIntro";
import CapabilityTiles from "@/components/home/CapabilityTiles";
import ArchitectureDiagram from "@/components/home/ArchitectureDiagram";
import DemoPreview from "@/components/home/DemoPreview";
import PhotoInterlude from "@/components/home/PhotoInterlude";
import IndustrySelector from "@/components/home/IndustrySelector";
import IntegrationEcosystem from "@/components/home/IntegrationEcosystem";
import ReliabilityGovernance from "@/components/home/ReliabilityGovernance";
import ImplementationMethod from "@/components/home/ImplementationMethod";
import Insights from "@/components/home/Insights";
import CtaBand from "@/components/ui/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueIntro />
      <CapabilityTiles />
      <ArchitectureDiagram />
      <DemoPreview />
      <PhotoInterlude />
      <IndustrySelector />
      <IntegrationEcosystem />
      <ReliabilityGovernance />
      <ImplementationMethod />
      <Insights />
      <CtaBand />
    </>
  );
}
