import Link from "next/link";
import { ServicePageSection } from "@/components/service-pages/ServicePageSection";

const quickLinks = [
  { id: "evisitor", label: "eVisitor (651)" },
  { id: "eta", label: "ETA (601)" },
  { id: "tourist-600", label: "Tourist stream (600)" },
  { id: "business-600", label: "Business visitor (600)" },
  { id: "sponsored-family", label: "Sponsored family" },
  { id: "frequent-traveller", label: "Frequent traveller" },
] as const;

export function VisitorShortStayContent() {
  return (
    <>
      <header className="border-b border-slate-200/80 bg-[linear-gradient(180deg,#0d5078_0%,#0a4a71_100%)] py-14 text-white md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-200/90">
            Services
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            Visitor &amp; Short-Stay Visas
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/88 md:text-lg">
            Short-stay pathways for tourism, family visits, and business visitors
            who are not undertaking paid work in Australia. Choose the stream
            that matches your passport, purpose, and length of stay.
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

      <section className="bg-slate-50 py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <h2 className="text-lg font-bold text-ctg-navy">Visa types at a glance</h2>
          <ul className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-3">
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <span className="font-semibold text-ctg-navy">eVisitor (651)</span>
              <span className="mt-1 block text-slate-600">
                Free for eligible European passport holders.
              </span>
            </li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <span className="font-semibold text-ctg-navy">ETA (601)</span>
              <span className="mt-1 block text-slate-600">
                Fast-track for specific countries via the ETA app.
              </span>
            </li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <span className="font-semibold text-ctg-navy">
                Tourist stream (600)
              </span>
              <span className="mt-1 block text-slate-600">
                General tourism or visiting family.
              </span>
            </li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <span className="font-semibold text-ctg-navy">
                Business visitor (600)
              </span>
              <span className="mt-1 block text-slate-600">
                Conferences and negotiations (no paid work).
              </span>
            </li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <span className="font-semibold text-ctg-navy">
                Sponsored family stream
              </span>
              <span className="mt-1 block text-slate-600">
                Australian relative as guarantor.
              </span>
            </li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <span className="font-semibold text-ctg-navy">
                Frequent traveller stream
              </span>
              <span className="mt-1 block text-slate-600">
                Up to 10-year validity (eligible nationalities).
              </span>
            </li>
          </ul>
        </div>
      </section>

      <ServicePageSection
        id="evisitor"
        eyebrow="Subclass 651"
        title="eVisitor (Subclass 651)"
        subtitle="The hassle-free option for European travelers."
      >
        <p>
          The eVisitor is a high-speed, digital authorization designed for
          citizens of the European Union and several other European nations. It
          is strictly for those outside Australia at the time of application and
          offers one of the most streamlined entry processes in the world.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800">Eligibility:</strong> Holders of
            eligible passports (for example UK, France, Germany, Italy, and
            other listed countries).
          </li>
          <li>
            <strong className="text-slate-800">Cost:</strong> Free (no
            application fee).
          </li>
          <li>
            <strong className="text-slate-800">Stay duration:</strong> Valid for
            12 months; allows stays of up to 3 months at a time.
          </li>
          <li>
            <strong className="text-slate-800">Permitted activities:</strong>{" "}
            Tourism, visiting family, or business visitor activities (contract
            negotiations, attending conferences).
          </li>
          <li>
            <strong className="text-slate-800">Key restriction:</strong> You
            cannot work for an Australian business or sell goods or services to
            the public.
          </li>
        </ul>
      </ServicePageSection>

      <ServicePageSection
        id="eta"
        eyebrow="Subclass 601"
        title="Electronic Travel Authority (Subclass 601)"
        subtitle="Instant travel for selected global citizens."
      >
        <p>
          The ETA is a digitally stored authority that replaces the need for a
          traditional paper visa or passport stamp. Most applicants apply via
          the Australian ETA app, making it the go-to for spontaneous trips from
          eligible countries such as the USA, Canada, Singapore, and Japan.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800">Eligibility:</strong> Selected
            passport holders outside Australia.
          </li>
          <li>
            <strong className="text-slate-800">Cost:</strong> Base visa is free,
            but a $20 AUD service fee applies via the app.
          </li>
          <li>
            <strong className="text-slate-800">Stay duration:</strong> Up to 3
            months per visit over a 12-month period (multiple entries).
          </li>
          <li>
            <strong className="text-slate-800">Processing:</strong> Usually
            processed within minutes or hours.
          </li>
          <li>
            <strong className="text-slate-800">Best for:</strong> Fast-tracked
            tourism or short-term business meetings without an embassy visit.
          </li>
        </ul>
      </ServicePageSection>

      <ServicePageSection
        id="tourist-600"
        eyebrow="Subclass 600 · Tourist stream"
        title="Visitor Visa: Tourist Stream (Subclass 600)"
        subtitle="The versatile choice for longer stays and family visits."
      >
        <p>
          This is a standard visitor visa for people who are not eligible for
          the eVisitor or ETA, or who need to stay in Australia longer than
          three months. It involves a more formal application, including proof of
          financial capacity.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800">Stay duration:</strong> Options
            for 3, 6, or 12 months depending on your needs and profile.
          </li>
          <li>
            <strong className="text-slate-800">Requirements:</strong> You must
            show you have enough money to support yourself and a genuine
            intention to return home (for example employment, property, or family
            ties).
          </li>
          <li>
            <strong className="text-slate-800">Application location:</strong>{" "}
            Can be lodged from outside or inside Australia (including to extend
            a current stay).
          </li>
          <li>
            <strong className="text-slate-800">Cost:</strong> From $190 AUD
            (outside Australia) or $490 AUD (inside Australia).
          </li>
        </ul>
      </ServicePageSection>

      <ServicePageSection
        id="business-600"
        eyebrow="Subclass 600 · Business visitor stream"
        title="Visitor Visa: Business Visitor Stream (Subclass 600)"
        subtitle="Professional entry for global networking."
      >
        <p>
          Designed for professionals travelling to Australia for business
          purposes that do not involve work or labour in the Australian labour
          market—such as attending a summit or scouting a new office location.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800">Allowed activities:</strong>{" "}
            General business inquiries, negotiating contracts, and participating
            in seminars or trade fairs (where you are not being paid by the
            organiser).
          </li>
          <li>
            <strong className="text-slate-800">Restrictions:</strong> No paid
            work. You cannot provide services to an Australian company or sell
            goods.
          </li>
          <li>
            <strong className="text-slate-800">Stay duration:</strong>{" "}
            Generally up to 3 months per visit.
          </li>
          <li>
            <strong className="text-slate-800">Evidence:</strong> An invitation
            letter from an Australian organisation is often required.
          </li>
        </ul>
      </ServicePageSection>

      <ServicePageSection
        id="sponsored-family"
        eyebrow="Subclass 600 · Sponsored family stream"
        title="Visitor Visa: Sponsored Family Stream (Subclass 600)"
        subtitle="Bridging the gap for family reunions."
      >
        <p>
          For travellers who have an eligible relative in Australia willing to
          sponsor them. Often used when a visitor may find it harder to
          demonstrate sufficient funds alone, because the sponsor accepts a
          level of responsibility.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800">Sponsorship:</strong> The sponsor
            is usually an Australian citizen or permanent resident (a settled
            relative).
          </li>
          <li>
            <strong className="text-slate-800">Security bond:</strong> The
            Department of Home Affairs may require a security bond (often between
            $5,000 and $15,000 AUD) paid by the sponsor, refundable after the
            visitor departs as required.
          </li>
          <li>
            <strong className="text-slate-800">Stay duration:</strong> Often up
            to 12 months.
          </li>
          <li>
            <strong className="text-slate-800">Condition:</strong> Frequently
            includes a &quot;No Further Stay&quot; condition, meaning you cannot
            apply for most further visas while in Australia.
          </li>
        </ul>
      </ServicePageSection>

      <ServicePageSection
        id="frequent-traveller"
        eyebrow="Subclass 600 · Frequent traveller stream"
        title="Visitor Visa: Frequent Traveller Stream (Subclass 600)"
        subtitle="The 10-year gateway for regular visitors."
      >
        <p>
          Originally launched for citizens of the People&apos;s Republic of
          China, this stream has expanded to include other eligible nationalities
          (such as Thailand and Vietnam). It suits high-value travellers who
          visit Australia often for business or leisure.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800">Validity:</strong> Up to 10
            years.
          </li>
          <li>
            <strong className="text-slate-800">Stay per visit:</strong> Up to 3
            months per entry.
          </li>
          <li>
            <strong className="text-slate-800">Eligibility:</strong> Limited to
            specific nationalities; higher application fee ($1,480 AUD as of
            2026).
          </li>
          <li>
            <strong className="text-slate-800">Cumulative stay:</strong> You
            cannot remain in Australia for more than 12 months in any 24-month
            period.
          </li>
          <li>
            <strong className="text-slate-800">Benefit:</strong> Avoids
            re-applying for a visa for each trip across the validity period.
          </li>
        </ul>
      </ServicePageSection>

      <section className="border-t border-slate-200/80 bg-slate-50 py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8 lg:px-10">
          <p className="text-sm font-semibold text-ctg-navy">
            Not sure which stream fits your situation?
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Book a consultation and we will map the right pathway for your
            passport, travel history, and plans.
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
