import Link from "next/link";
import { ServicePageSection } from "@/components/service-pages/ServicePageSection";

const serviceRoutes = [
  {
    href: "/services/visitor-short-stay",
    title: "Visitor & short-stay visas",
    blurb: "Tourism, business visitor, and frequent traveller streams.",
  },
  {
    href: "/services/student-education-visas",
    title: "Student & education visas",
    blurb: "Study, guardian, training, and counseling support.",
  },
  {
    href: "/services/temporary-graduate",
    title: "Temporary Graduate (485)",
    blurb: "Post-study work and related graduate pathways.",
  },
  {
    href: "/services/employer-sponsored",
    title: "Employer-sponsored visas",
    blurb: "482, 186, 494, and DAMA.",
  },
  {
    href: "/services/skilled-migration",
    title: "Skilled migration (points-tested)",
    blurb: "189, 190, 491, 191, and skills assessments.",
  },
  {
    href: "/services/family-partner-visas",
    title: "Family & partner visas",
    blurb: "Partners, parents, children, and prospective marriage.",
  },
  {
    href: "/services/business-talent-visas",
    title: "Business & talent visas",
    blurb: "858, 188, and resident return (155/157).",
  },
] as const;

const quickLinks = [
  { id: "browse", label: "Browse pathways" },
  { id: "beyond", label: "Beyond the list" },
] as const;

export function OtherVisasContent() {
  return (
    <>
      <header className="border-b border-slate-200/80 bg-[linear-gradient(180deg,#0d5078_0%,#0a4a71_100%)] py-14 text-white md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-200/90">
            Services
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            Other visas &amp; bespoke advice
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/88 md:text-lg">
            If your situation doesn&apos;t match a single grid card, start here:
            browse our main service pages or tell us your story—we map obscure
            subclasses, bridging, waivers, and multi-step strategies the same way
            we handle mainstream applications.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {quickLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-full border border-white/35 bg-white/12 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:text-sm"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <ServicePageSection
        id="browse"
        eyebrow="Start here"
        title="Browse our main visa services"
        subtitle="Most clients find the right chapter in one of these pages."
      >
        <ul className="space-y-3">
          {serviceRoutes.map(({ href, title, blurb }) => (
            <li
              key={href}
              className="rounded-xl border border-slate-200/90 bg-slate-50/80 px-4 py-3 sm:px-5 sm:py-4"
            >
              <Link
                href={href}
                className="text-base font-semibold text-ctg-navy hover:text-ctg-sky"
              >
                {title}
              </Link>
              <p className="mt-1 text-sm text-slate-600">{blurb}</p>
            </li>
          ))}
        </ul>
      </ServicePageSection>

      <ServicePageSection
        id="beyond"
        eyebrow="Complex matters"
        title="When your visa isn’t on the homepage"
        subtitle="We still structure evidence, timing, and submissions around your facts."
      >
        <p>
          Australian migration law covers dozens of subclasses and frequent
          updates. You might be juggling bridging visas, schedule 3 criteria,
          health or character issues, cancellations, ministerial intervention
          requests, or a sequence of applications that has to land in a precise
          order.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800">Bridging &amp; timing:</strong>{" "}
            Keeping you lawful while a decision is pending or while you move from
            one substantive visa to another.
          </li>
          <li>
            <strong className="text-slate-800">Waivers &amp; compelling circumstances:</strong>{" "}
            Where policy or discretion may apply to health, character, or prior
            visa history.
          </li>
          <li>
            <strong className="text-slate-800">Unusual subclasses:</strong>{" "}
            Maritime, domestic worker, diplomatic, or other low-volume programs
            when they match your facts.
          </li>
          <li>
            <strong className="text-slate-800">Citizenship &amp; long-term planning:</strong>{" "}
            Eligibility and residence calculations once PR is in place.
          </li>
        </ul>
        <p>
          If you are unsure where you fit, the fastest path is a consultation:
          we identify the viable subclasses first, then build the evidence list
          and lodgment sequence.
        </p>
      </ServicePageSection>

      <section className="border-t border-slate-200/80 bg-slate-50 py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8 lg:px-10">
          <p className="text-sm font-semibold text-ctg-navy">
            Don’t see your visa named above?
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Send your timeline, current visa, and goal—we’ll reply with the
            narrowest list of realistic next steps.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-sky-200/60 bg-ctg-navy/90 px-8 text-sm font-semibold text-white shadow-lg shadow-sky-200/35 backdrop-blur-md transition-all hover:bg-ctg-navy"
            >
              Book consultation
            </Link>
            <Link
              href="/#services"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-300 bg-white/80 px-8 text-sm font-semibold text-slate-700 shadow-md backdrop-blur-sm transition-colors hover:bg-white"
            >
              All services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
