import Link from "next/link";
import { ServicePageSection } from "@/components/service-pages/ServicePageSection";

const quickLinks = [
  { id: "onshore-partner", label: "Partner 820/801" },
  { id: "offshore-partner", label: "Partner 309/100" },
  { id: "prospective-marriage", label: "Prospective 300" },
  { id: "parent-visas", label: "Parent visas" },
  { id: "child-visas", label: "Child visas" },
] as const;

export function FamilyPartnerVisasContent() {
  return (
    <>
      <header className="border-b border-slate-200/80 bg-[linear-gradient(180deg,#0d5078_0%,#0a4a71_100%)] py-14 text-white md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-200/90">
            Services
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            Family &amp; Partner Visas
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/88 md:text-lg">
            Onshore and offshore partner pathways, prospective marriage, parent
            reunification, and child visas—including adoption and orphan relative
            streams where applicable.
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
          <h2 className="text-lg font-bold text-ctg-navy">Pathways at a glance</h2>
          <ul className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <span className="font-semibold text-ctg-navy">820 / 801</span>
              <span className="mt-1 block text-slate-600">
                Onshore partner: temporary then permanent.
              </span>
            </li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <span className="font-semibold text-ctg-navy">309 / 100</span>
              <span className="mt-1 block text-slate-600">
                Offshore partner: join your sponsor from abroad.
              </span>
            </li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <span className="font-semibold text-ctg-navy">Subclass 300</span>
              <span className="mt-1 block text-slate-600">
                Prospective marriage (fiancé) pathway.
              </span>
            </li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <span className="font-semibold text-ctg-navy">Parents</span>
              <span className="mt-1 block text-slate-600">
                Contributory, aged, and long-stay temporary options.
              </span>
            </li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:col-span-2 lg:col-span-1 xl:col-span-1">
              <span className="font-semibold text-ctg-navy">101 / 802</span>
              <span className="mt-1 block text-slate-600">
                Child visas: offshore, onshore, adoption, orphan relative.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <ServicePageSection
        id="onshore-partner"
        eyebrow="Subclass 820 / 801"
        title="Onshore Partner Visa (Subclass 820/801)"
        subtitle="For couples already together in Australia."
      >
        <p>
          The 820/801 is a combined application for partners or spouses of
          Australian citizens, permanent residents, or eligible New Zealand
          citizens. You apply while physically in Australia, allowing you to stay
          on a bridging visa while the application is processed.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800">Two-stage process:</strong> You are
            first granted a temporary visa (820). Two years after your initial
            application, you submit further evidence to receive permanent
            residency (801).
          </li>
          <li>
            <strong className="text-slate-800">Benefits:</strong> Includes
            immediate work rights and access to Medicare.
          </li>
          <li>
            <strong className="text-slate-800">Eligibility:</strong> Married or
            de facto couples (living together for at least 12 months, though some
            exemptions apply if the relationship is registered).
          </li>
        </ul>
      </ServicePageSection>

      <ServicePageSection
        id="offshore-partner"
        eyebrow="Subclass 309 / 100"
        title="Offshore Partner Visa (Subclass 309/100)"
        subtitle="Bringing your partner to Australia from abroad."
      >
        <p>
          This is the equivalent of the onshore visa but for applicants located
          outside Australia at the time of lodgment.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800">Structure:</strong> Similar to the
            onshore version, it moves from a temporary (309) to a permanent (100)
            visa.
          </li>
          <li>
            <strong className="text-slate-800">Strategy:</strong> This is the
            primary route for couples currently living overseas who are planning
            their move to Australia together.
          </li>
          <li>
            <strong className="text-slate-800">Evidence required:</strong> Must
            cover four main pillars: financial aspects, nature of the household,
            social aspects, and commitment to each other.
          </li>
        </ul>
      </ServicePageSection>

      <ServicePageSection
        id="prospective-marriage"
        eyebrow="Subclass 300"
        title="Prospective Marriage Visa (Subclass 300)"
        subtitle="The fiancé visa for planning your future."
      >
        <p>
          If you are engaged to an Australian and intend to marry after arriving
          in Australia, this is the correct pathway.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800">Duration:</strong> Usually granted
            for 9 to 15 months.
          </li>
          <li>
            <strong className="text-slate-800">The next step:</strong> Once you
            are in Australia and have married your partner, you then apply for
            the onshore partner visa (820/801).
          </li>
          <li>
            <strong className="text-slate-800">Requirement:</strong> You must
            have personally met your fiancé in person as adults before applying.
          </li>
        </ul>
      </ServicePageSection>

      <ServicePageSection
        id="parent-visas"
        eyebrow="Parent pathways"
        title="Parent Visas"
        subtitle="Reuniting families across generations."
      >
        <p>
          Australia offers several pathways for parents to join their children,
          categorised mainly by cost and processing speed. All parent visas require
          the &quot;Balance of Family&quot; test (at least half of your children
          must live in Australia).
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800">
              Contributory Parent (Subclass 143/173):
            </strong>{" "}
            Features a much higher application fee (the &quot;contribution&quot;)
            but significantly faster processing times than non-contributory
            options.
          </li>
          <li>
            <strong className="text-slate-800">
              Aged Parent (Subclass 804/864):
            </strong>{" "}
            For parents who have reached the Australian pension age. These can be
            lodged while the parent is in Australia on a visitor visa.
          </li>
          <li>
            <strong className="text-slate-800">
              Sponsored Parent Temporary (Subclass 870):
            </strong>{" "}
            A non-resident option that allows parents to stay for 3, 5, or 10
            years. It does not lead to PR but is an excellent solution for
            long-term family visits without the strict Balance of Family test.
          </li>
        </ul>
      </ServicePageSection>

      <ServicePageSection
        id="child-visas"
        eyebrow="Subclass 101 / 802"
        title="Child Visas (Subclass 101/802)"
        subtitle="Securing the future for the youngest family members."
      >
        <p>
          These visas allow a child to live in Australia permanently with their
          parents.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800">Subclass 101:</strong> For children
            currently outside Australia.
          </li>
          <li>
            <strong className="text-slate-800">Subclass 802:</strong> For children
            currently inside Australia.
          </li>
          <li>
            <strong className="text-slate-800">Adoption &amp; orphan relative streams:</strong>{" "}
            Specialised pathways for children adopted outside of Australia or for
            children whose parents are deceased, permanently incapacitated, or
            whose whereabouts are unknown.
          </li>
          <li>
            <strong className="text-slate-800">Sponsorship:</strong> The child
            must be sponsored by an eligible parent (citizen/PR) and generally
            must be under 18 (though exceptions exist for full-time students up to
            age 25).
          </li>
        </ul>
      </ServicePageSection>

      <section className="border-t border-slate-200/80 bg-slate-50 py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8 lg:px-10">
          <p className="text-sm font-semibold text-ctg-navy">
            Planning a partner, parent, or child application?
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Book a consultation and we will map evidence, timing, and the right
            subclass for your family.
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
