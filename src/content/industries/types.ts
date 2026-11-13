/**
 * Industry page content — shared types.
 *
 * All nine industry pages (spec §9) are data-driven: each entry in
 * `src/content/industries/*.ts` is one IndustryContent, rendered by
 * `src/components/industries/IndustryPage`. Page copy lives in the data
 * files; page.tsx files stay lean.
 *
 * Content rules (spec §0, §9): original BridgeX copy only; no invented
 * clients, stats, integrations or pricing. Module links must resolve to
 * registry routes (see src/content/navigation.ts).
 */
import type { IconName } from "@/components/icons";
import type { FaqItem } from "@/components/ui/FaqAccordion";

export type { FaqItem };

export type HeroVariant = "photo-dark" | "photo-light" | "diagram";
export type ChallengeLayout = "numbered" | "grid" | "split";
export type ModuleLayout = "rows" | "cards" | "table";
export type ArchitectureVariant = "layers" | "flow";

export interface IndustryImage {
  /** Public path, basePath-free (rendered through asset()). */
  src: string;
  alt: string;
  width: number;
  height: number;
}

/** One step in a flow diagram (hero diagrams, architecture flows). */
export interface FlowStep {
  title: string;
  body: string;
}

export interface IndustryChallenge {
  title: string;
  body: string;
}

/** One BridgeX module mapped to an industry outcome. */
export interface ModuleMapItem {
  /** Registry route href (basePath-free). */
  href: string;
  label: string;
  /** Short outcome phrase, e.g. "Faster first deposit". */
  outcome: string;
  detail: string;
}

export interface IndustryUseCase {
  title: string;
  body: string;
}

/** One band in a layered service-architecture diagram. */
export interface ArchitectureLayer {
  name: string;
  description: string;
  items: string[];
}

/**
 * An illustrative example panel (clearly labelled "Illustrative data"
 * via DemoLabel at render time). Figures here are examples, never live
 * data — keep them generic (no invented client names or real figures).
 */
export interface IllustrativePanel {
  title: string;
  note: string;
  rows: { label: string; value: string }[];
}

export interface IndustryContent {
  slug: string;
  href: string;
  label: string;
  icon: IconName;

  /** Page <title> without the "— BridgeX" suffix (the layout adds it). */
  metaTitle: string;
  metaDescription: string;

  eyebrow: string;
  /** H1 is split so the middle phrase renders in Cormorant italic. */
  heroBefore: string;
  heroAccent: string;
  heroAfter: string;
  heroSupport: string;
  heroVariant: HeroVariant;
  /** Required for photo heroes; ignored for diagram heroes. */
  image?: IndustryImage;
  /** Required for diagram heroes. */
  heroDiagram?: { title: string; steps: FlowStep[] };
  /** Optional second photo, shown beside the use cases. */
  secondaryImage?: IndustryImage;

  challenges: {
    label: string;
    heading: string;
    copy: string;
    layout: ChallengeLayout;
    items: IndustryChallenge[];
  };

  moduleMap: {
    label: string;
    heading: string;
    copy: string;
    layout: ModuleLayout;
    items: ModuleMapItem[];
  };

  useCases: {
    label: string;
    heading: string;
    copy: string;
    items: IndustryUseCase[];
  };

  architecture: {
    label: string;
    heading: string;
    copy: string;
    variant: ArchitectureVariant;
    layers?: ArchitectureLayer[];
    steps?: FlowStep[];
    /** Honest integration status: what is an adapter, what is scoped. */
    integrationNote: string;
    /** Dark (maroon) architecture section; default is cream. */
    dark?: boolean;
  };

  illustrative?: IllustrativePanel;

  faqs: FaqItem[];

  cta: { heading: string; copy: string };
}
