/**
 * LegalPage — shared layout for /privacy, /cookies and /security-policy.
 *
 * Light editorial hero with breadcrumbs, the DraftNotice flag, a sticky
 * on-page contents list (anchor links), and the legal sections rendered
 * from content with semantic headings. Server component; pages pass their
 * section data in.
 *
 * Visual touch is deliberately restrained: an optional side photograph
 * in the hero (signing / compliance imagery) and nothing else — these
 * pages must stay readable documents.
 */
import type { LegalSection } from "@/content/legal";
import { Container } from "../ui/Container";
import InnerHero from "./InnerHero";
import DraftNotice from "./DraftNotice";
import TealLineDivider from "../ui/TealLineDivider";
import CtaBand from "../ui/CtaBand";
import Icon from "../icons";

export default function LegalPage({
  href,
  eyebrow,
  title,
  intro,
  updated,
  sections,
  image,
  imageAlt = "",
  imageWidth,
  imageHeight,
}: {
  href: string;
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
  /** Optional restrained hero photograph (signing / compliance imagery). */
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
}) {
  return (
    <>
      <InnerHero
        href={href}
        eyebrow={eyebrow}
        title={title}
        copy={intro}
        image={image}
        imageAlt={imageAlt}
        imageWidth={imageWidth}
        imageHeight={imageHeight}
      />
      <div className="bg-bx-white pb-16 sm:pb-20 lg:pb-24">
        <Container>
          <div className="pt-2">
            <DraftNotice updated={updated} />
          </div>
          <div className="mt-14 grid gap-12 lg:mt-16 lg:grid-cols-[280px_1fr] lg:gap-16">
            {/* On-page contents */}
            <nav
              aria-label="On this page"
              className="lg:sticky lg:top-24 lg:self-start"
            >
              <p className="text-[13px] font-sans font-bold uppercase tracking-[0.22em] text-bx-teal-700">
                On this page
              </p>
              <ul className="mt-4 space-y-1 border-l border-bx-teal-500/40">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="-ml-px block border-l-2 border-transparent py-2 pl-4 font-sans text-[15px] font-bold text-bx-slate-500 transition-colors hover:border-bx-teal-500 hover:text-bx-teal-700"
                    >
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Sections */}
            <div className="min-w-0">
              {sections.map((s, i) => (
                <section
                  key={s.id}
                  id={s.id}
                  aria-labelledby={`${s.id}-heading`}
                  className="scroll-mt-24"
                >
                  {i > 0 && <TealLineDivider className="my-10" />}
                  <h2
                    id={`${s.id}-heading`}
                    className="font-sans text-2xl font-extrabold tracking-[-0.02em] text-bx-navy-900 sm:text-[28px]"
                  >
                    {s.heading}
                  </h2>
                  {s.paragraphs.map((p, j) => (
                    <p
                      key={j}
                      className="mt-4 max-w-[70ch] font-body text-base leading-relaxed text-bx-slate-500"
                    >
                      {p}
                    </p>
                  ))}
                  {s.bullets && (
                    <ul className="mt-5 space-y-3">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 font-body text-base leading-relaxed text-bx-slate-500"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-1.5 shrink-0 text-bx-teal-600"
                          >
                            <Icon name="check" size={18} />
                          </span>
                          <span className="max-w-[66ch]">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </div>
        </Container>
      </div>
      <CtaBand
        heading="Questions about this policy?"
        copy="If anything on this page is unclear, or you want to exercise a right described here, contact us and a person will answer."
        primaryLabel="Contact Us"
        primaryHref="/company/contact"
        secondaryLabel="Book a Private Demo"
        secondaryHref="/book-demo"
      />
    </>
  );
}
