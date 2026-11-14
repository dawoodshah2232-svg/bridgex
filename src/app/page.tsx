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
import PhotoBand from "@/components/ui/PhotoBand";
import CtaBand from "@/components/ui/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueIntro />
      <CapabilityTiles />
      <PhotoBand
        image="/images/band-bridge-istanbul.jpg"
        alt="Dark trading monitors showing candlestick charts"
        eyebrow="Why BridgeX"
        heading={
          <>
            Built for the business{" "}
            <span className="font-sans font-semibold italic text-bx-teal-400">
              behind the trading.
            </span>
          </>
        }
        copy="One platform for onboarding, operations, payments and growth — connected through one record, one ledger, one audit trail."
        height="sm"
        imageWidth={1600}
        imageHeight={1067}
      />
      <ArchitectureDiagram />
      <DemoPreview />
      <PhotoInterlude />
      <IndustrySelector />
      <IntegrationEcosystem />
      <ReliabilityGovernance />
      <ImplementationMethod />
      <PhotoBand
        image="/images/band-skyline-singapore.jpg"
        alt="Clasped hands at a desk with a laptop showing trading charts and a calculator"
        eyebrow="Keep improving"
        heading={
          <>
            A system that{" "}
            <span className="font-sans font-semibold italic text-bx-teal-400">
              keeps getting better.
            </span>
          </>
        }
        copy="Launch is not the end of the work. We review what the data says and tune the workflows — onboarding, routing, incentives — so the platform grows with the business."
        height="sm"
        imageWidth={1600}
        imageHeight={1148}
      />
      <Insights />
      <CtaBand />
    </>
  );
}
