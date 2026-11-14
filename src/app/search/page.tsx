/**
 * /search — site search (spec §4/§12).
 *
 * NOT one of the 44 registry routes: it is deliberately absent from
 * src/content/navigation.ts and from the sitemap. The search index is
 * client-side (routes + insights + guides); the ?q= deep-link is read
 * inside <Suspense> by SearchExperience — required for static export.
 */
import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import HeroMedia from "@/components/ui/HeroMedia";
import SearchBox from "@/components/search/SearchBox";
import SearchExperience from "@/components/search/SearchExperience";

export const metadata: Metadata = {
  title: "Search",
  description:
    "Search every BridgeX page, insight and guide — platform, solutions, industries, services and resources.",
};

export default function SearchPage() {
  return (
    <>
      {/* Dark hero — clears the fixed 72px header. */}
      <section className="relative overflow-hidden bg-bx-navy-900 pb-14 pt-[72px] text-bx-white sm:pb-16">
        <HeroMedia
          image="/images/abstract-glass-ceiling.jpg"
          alt="Hand pointing at a candlestick chart on a dark trading monitor"
          scrim="strong"
          imageWidth={1920}
          imageHeight={1080}
        />
        <Container className="relative pt-14 sm:pt-20">
          <p className="font-sans text-[13px] font-bold uppercase tracking-[0.25em] text-bx-teal-400">
            Search BridgeX
          </p>
          <h1 className="mt-4 max-w-[16ch] font-sans text-[42px] font-extrabold leading-[1.05] tracking-[-0.02em] text-balance sm:text-[56px]">
            Find the page you’re looking for.
          </h1>
          <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-bx-slate-300/85">
            Every platform page, solution, industry, guide and insight — in
            one place, searched as you type.
          </p>
        </Container>
      </section>

      <section className="bg-bx-white py-14 sm:py-16">
        <Container>
          <Suspense fallback={<SearchBox initialQuery="" />}>
            <SearchExperience />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
