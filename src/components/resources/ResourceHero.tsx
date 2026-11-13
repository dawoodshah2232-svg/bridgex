/**
 * ResourceHero — the shared inner-page hero for the Resources section.
 *
 * Two tones, two light layouts, one job: clear the fixed 72px header,
 * show accurate breadcrumbs, and open each page with its own message.
 * Dark heroes render the photo under a heavy maroon overlay (white
 * headline contrast); light heroes keep ink-on-ivory editorial type.
 */
import type { ReactNode } from "react";
import Breadcrumbs from "@/components/chrome/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { asset } from "@/lib/paths";

export default function ResourceHero({
  href,
  eyebrow,
  title,
  copy,
  dark = false,
  image,
  imageAlt = "",
  imageWidth = 1600,
  imageHeight = 1067,
  layout = "banner",
}: {
  href: string;
  eyebrow: string;
  title: ReactNode;
  copy: string;
  dark?: boolean;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  /** "banner": image below the text · "split": image beside the text (light only). */
  layout?: "banner" | "split";
}) {
  if (dark) {
    return (
      <header className="relative overflow-hidden bg-bx-maroon-950 pt-[72px] text-bx-ivory">
        {image && (
          <div className="absolute inset-0" aria-hidden="true">
            <img
              src={asset(image)}
              alt=""
              width={imageWidth}
              height={imageHeight}
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-bx-maroon-950/85" />
          </div>
        )}
        <Container className="relative pb-16 pt-10 sm:pb-20 sm:pt-14">
          <Breadcrumbs href={href} dark />
          <p className="mt-8 text-[13px] font-sans font-bold uppercase tracking-[0.22em] text-bx-gold-400">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl font-sans text-[40px] font-extrabold leading-[1.05] tracking-[-0.02em] text-balance sm:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-bx-champagne/90 sm:text-lg">
            {copy}
          </p>
        </Container>
      </header>
    );
  }

  if (layout === "split" && image) {
    return (
      <header className="bg-bx-ivory pt-[72px] text-bx-ink">
        <Container className="pb-16 pt-10 sm:pb-20 sm:pt-14">
          <Breadcrumbs href={href} />
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="text-[13px] font-sans font-bold uppercase tracking-[0.22em] text-bx-maroon-700">
                {eyebrow}
              </p>
              <h1 className="mt-4 font-sans text-[40px] font-extrabold leading-[1.05] tracking-[-0.02em] text-balance sm:text-6xl">
                {title}
              </h1>
              <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-bx-muted sm:text-lg">
                {copy}
              </p>
            </div>
            <div className="overflow-hidden border border-bx-gold-500/30">
              <img
                src={asset(image)}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                fetchPriority="high"
                className="aspect-[3/2] w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </header>
    );
  }

  return (
    <header className="bg-bx-ivory pt-[72px] text-bx-ink">
      <Container className="pb-16 pt-10 sm:pb-20 sm:pt-14">
        <Breadcrumbs href={href} />
        <p className="mt-8 text-[13px] font-sans font-bold uppercase tracking-[0.22em] text-bx-maroon-700">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl font-sans text-[40px] font-extrabold leading-[1.05] tracking-[-0.02em] text-balance sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-bx-muted sm:text-lg">
          {copy}
        </p>
        {image && (
          <div className="mt-10 overflow-hidden border border-bx-gold-500/30">
            <img
              src={asset(image)}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              fetchPriority="high"
              className="aspect-[21/9] w-full object-cover"
            />
          </div>
        )}
      </Container>
    </header>
  );
}
