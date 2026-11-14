/**
 * Custom 404 (spec §12) — renders inside the root layout (header/footer
 * still show). Static export generates 404.html, which GitHub Pages
 * serves for unknown paths.
 *
 * Section links come from the route registry: groups with an overview
 * link to it, groups without one link to their featured route — no dead
 * links anywhere on this page.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { NAV_GROUPS } from "@/content/navigation";
import { Container } from "@/components/ui/Container";
import HeroMedia from "@/components/ui/HeroMedia";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you were looking for does not exist. Search BridgeX or return to the homepage.",
};

export default function NotFound() {
  const sections = NAV_GROUPS.filter((g) => g.id !== "legal");

  return (
    <>
      {/* Dark hero — clears the fixed 72px header. */}
      <section className="relative overflow-hidden bg-bx-maroon-900 pb-16 pt-[72px] text-bx-ivory sm:pb-20">
        <HeroMedia
          image="/images/hero-skyline-sf.jpg"
          alt="San Francisco financial district skyline at twilight across the bay"
          scrim="strong"
          bridgeLine
          imageWidth={1600}
          imageHeight={1067}
        />
        <Container className="relative pt-14 sm:pt-20">
          <p className="font-sans text-[13px] font-bold uppercase tracking-[0.25em] text-bx-gold-400">
            404 — Page not found
          </p>
          <h1 className="mt-4 max-w-[16ch] font-sans text-[42px] font-extrabold leading-[1.05] tracking-[-0.02em] text-balance sm:text-[56px]">
            This page isn’t here.
          </h1>
          <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-bx-champagne/85">
            The link may have moved, or the address may be mistyped. Search
            the site, or head back to the homepage and start from there.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/search" size="lg">
              Search BridgeX
            </ButtonLink>
            <ButtonLink href="/" size="lg" variant="secondaryLight" arrow={false}>
              Back to home
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="bg-bx-ivory py-14 sm:py-16">
        <Container>
          <h2 className="font-sans text-2xl font-extrabold tracking-[-0.02em] text-bx-ink sm:text-3xl">
            Or start from a section
          </h2>
          <ul className="mt-8 grid gap-x-10 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((group) => {
              const href = group.overviewHref ?? group.featuredHref;
              return (
                <li key={group.id} className="border-b border-bx-gold-500/20">
                  <Link href={href} className="group block py-4">
                    <span className="font-sans text-[16px] font-bold text-bx-ink transition-colors group-hover:text-bx-maroon-700">
                      {group.label}
                    </span>
                    <span className="mt-1 block text-[14px] leading-relaxed text-bx-muted">
                      {group.blurb}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>
    </>
  );
}
