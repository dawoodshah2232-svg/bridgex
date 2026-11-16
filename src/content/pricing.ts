/**
 * Pricing page content — figures as published on bridgexapps.com,
 * November 2026 (verified live 16 Nov 2026).
 *
 * VERIFIED FACTS ONLY. No feature lists are claimed for tiers whose
 * comparison details were not published — the page says so and points
 * to bridgexapps.com / Book a Demo instead. No tier is marked "most
 * popular": bridgexapps.com does not say so.
 */
import type { IconName } from "@/components/icons";

export const PRICING_SOURCE =
  "Prices as published on bridgexapps.com, November 2026.";

export interface ForexTier {
  name: string;
  /** The platform / tenant scope, as published. */
  scope: string;
  monthly: number;
  /** Annual price per year (annual billing saves 15%). */
  annual: number;
  icon: IconName;
}

export const FOREX_TIERS: ForexTier[] = [
  { name: "Starter", scope: "1 platform + 1 tenant", monthly: 499, annual: 5090, icon: "layers" },
  { name: "Professional", scope: "Up to 3 platforms", monthly: 999, annual: 10189, icon: "chart" },
  { name: "Business", scope: "Up to 5 platforms", monthly: 1499, annual: 15290, icon: "users" },
  { name: "Enterprise", scope: "Unlimited platforms", monthly: 2499, annual: 25489, icon: "globe" },
];

export interface BrixTier {
  name: string;
  monthly: number;
  icon: IconName;
}

/** BriX AI tiers — names and prices only; no feature lists published. */
export const BRIX_TIERS: BrixTier[] = [
  { name: "Starter", monthly: 49, icon: "spark" },
  { name: "Growth", monthly: 99, icon: "chart" },
  { name: "Scale", monthly: 199, icon: "workflow" },
  { name: "Scale Plus", monthly: 299, icon: "intelligence" },
];

export interface AppPriceGroup {
  /** Monthly price per app in this group. */
  price: number;
  apps: string[];
  icon: IconName;
}

/** Build-your-package per-app pricing, grouped by monthly price. */
export const BUILD_YOUR_PACKAGE: AppPriceGroup[] = [
  {
    price: 29,
    apps: ["LeadX", "SalesX", "Campaigns", "Email", "SMS", "Live Chat"],
    icon: "funnel",
  },
  {
    price: 49,
    apps: [
      "TradeX",
      "BinaryX",
      "LeagueX",
      "Academy",
      "FinanceX",
      "HRX",
      "ProjectsX",
      "SupportX",
      "ReportsX",
      "VoIP",
    ],
    icon: "layers",
  },
  { price: 79, apps: ["PropX"], icon: "prop" },
  {
    price: 99,
    apps: ["Copy Trading", "MT5 / MT4 / cTrader / Vertex Manager"],
    icon: "pamm",
  },
];

/** White-label add-ons as published on the Build page. */
export interface WhiteLabelAddOn {
  name: string;
  monthly: number;
  /** One-line restatement of the add-on name — nothing beyond it. */
  description: string;
  icon: IconName;
}

export const WHITE_LABEL_ADD_ONS: WhiteLabelAddOn[] = [
  {
    name: "Branded Client Portal",
    monthly: 49,
    description: "Your clients' portal, carrying your brand.",
    icon: "experience",
  },
  {
    name: "Custom Branding",
    monthly: 49,
    description: "Your logo, colours and identity across the platform.",
    icon: "sliders",
  },
  {
    name: "Custom domain",
    monthly: 9,
    description: "The platform on your own domain.",
    icon: "globe",
  },
  {
    name: "TechX Grey-label MT5",
    monthly: 149,
    description: "MT5 under your brand, through TechX.",
    icon: "brokers",
  },
];
