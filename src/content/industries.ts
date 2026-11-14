/**
 * Industry content registry — the single import point for all nine
 * industry pages (spec §9).
 *
 * Each industry's copy lives in its own typed data file under
 * `src/content/industries/` (one file per industry, so no file grows
 * past the 800-line rule); this module aggregates them in registry
 * order (matching src/content/navigation.ts) and re-exports the types.
 */
import { multiAssetBrokers } from "./industries/multi-asset-brokers";
import { banks } from "./industries/banks";
import { securitiesDerivatives } from "./industries/securities-derivatives";
import { wealthManagement } from "./industries/wealth-management";
import { assetFundManagers } from "./industries/asset-fund-managers";
import { exchanges } from "./industries/exchanges";
import { bondsFixedIncome } from "./industries/bonds-fixed-income";
import { propFirms } from "./industries/prop-firms";
import { digitalAssets } from "./industries/digital-assets";
import type { IndustryContent } from "./industries/types";

export type {
  ArchitectureLayer,
  ArchitectureVariant,
  BandHeight,
  BandPosition,
  ChallengeLayout,
  FlowStep,
  HeroVariant,
  IllustrativePanel,
  IndustryBand,
  IndustryChallenge,
  IndustryContent,
  IndustryImage,
  IndustryUseCase,
  ModuleLayout,
  ModuleMapItem,
} from "./industries/types";

/** All nine industry entries, in navigation-registry order. */
export const INDUSTRIES: IndustryContent[] = [
  multiAssetBrokers,
  banks,
  securitiesDerivatives,
  wealthManagement,
  assetFundManagers,
  exchanges,
  bondsFixedIncome,
  propFirms,
  digitalAssets,
];

/** Look up an industry entry by its URL slug. Throws on unknown slugs. */
export function industryBySlug(slug: string): IndustryContent {
  const found = INDUSTRIES.find((entry) => entry.slug === slug);
  if (!found) {
    throw new Error(`Unknown industry slug: ${slug}`);
  }
  return found;
}
