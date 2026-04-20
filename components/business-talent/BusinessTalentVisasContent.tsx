import Link from "next/link";
import { ServicePageSection } from "@/components/service-pages/ServicePageSection";

const quickLinks = [
  { id: "subclass-858", label: "Global Talent (858)" },
  { id: "subclass-188", label: "Business & Investment (188)" },
  { id: "rrv", label: "RRV (155/157)" },
] as const;

export function BusinessTalentVisasContent() {
  return (
    <>
      <header className="border-b border-slate-200/80 bg-[linear-gradient(180deg,#0d5078_0%,#0a4a71_100%)] py-14 text-white md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-200/90">
            Services
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            Business &amp; Talent Visas
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/88 md:text-lg">
            Global Talent (Subclass 858), Business Innovation &amp; Investment
            (Subclass 188), and Resident Return Visas (Subclass 155/157) for
            maintaining your right to return as a permanent resident.
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
          <ul className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <span className="font-semibold text-ctg-navy">Subclass 858</span>
              <span className="mt-1 block text-slate-600">
                High-priority PR for globally recognised talent.
              </span>
            </li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <span className="font-semibold text-ctg-navy">Subclass 188</span>
              <span className="mt-1 block text-slate-600">
                Provisional business and investment streams.
              </span>
            </li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <span className="font-semibold text-ctg-navy">155 / 157</span>
              <span className="mt-1 block text-slate-600">
                Resident return: keep your travel facility as PR.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <ServicePageSection
        id="subclass-858"
        eyebrow="Subclass 858"
        title="Global Talent Visa (Subclass 858)"
        subtitle="The fast-track for the world&apos;s brightest minds."
      >
        <p>
          The Global Talent visa is a high-priority, permanent residency pathway
          for individuals who are internationally recognised as being at the top
          of their field. It is designed to bring unique skills to Australia that
          can help grow the economy and create jobs.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800">Target sectors:</strong> Includes
            advanced manufacturing, DigiTech, energy (renewables), health
            industries, and agri-food.
          </li>
          <li>
            <strong className="text-slate-800">The nominator rule:</strong> You
            must be nominated by a nationally recognised Australian individual or
            organisation in your same field.
          </li>
          <li>
            <strong className="text-slate-800">High income threshold:</strong>{" "}
            Applicants must generally demonstrate the ability to earn at least
            $175,000 AUD (this figure is indexed annually).
          </li>
          <li>
            <strong className="text-slate-800">Key advantage:</strong> One of the
            fastest processing times in the entire migration program, often
            resulting in PR within weeks.
          </li>
        </ul>
      </ServicePageSection>

      <ServicePageSection
        id="subclass-188"
        eyebrow="Subclass 188"
        title="Business Innovation &amp; Investment (Subclass 188)"
        subtitle="Fueling Australia&apos;s economy through capital and ideas."
      >
        <p>
          The 188 visa is a provisional visa for people who have a successful
          business or investment history and want to move to Australia to manage
          a new or existing business.
        </p>
        <p className="font-medium text-slate-700">The three key streams</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800">Business Innovation stream:</strong>{" "}
            For entrepreneurs with a history of running a successful business.
            You must be nominated by a state or territory government.
          </li>
          <li>
            <strong className="text-slate-800">Investor stream:</strong> For
            people who want to maintain at least $2.5 million AUD in designated
            Australian investments.
          </li>
          <li>
            <strong className="text-slate-800">Significant Investor stream (SIV):</strong>{" "}
            For people who invest at least $5 million AUD into complying
            Australian investments. This stream offers the most flexible residency
            requirements (you don&apos;t have to live in Australia for long
            periods).
          </li>
          <li>
            <strong className="text-slate-800">PR pathway:</strong> After meeting
            the investment or business activity requirements over a set period,
            you transition to the Subclass 888 permanent visa.
          </li>
        </ul>
      </ServicePageSection>

      <ServicePageSection
        id="rrv"
        eyebrow="Subclass 155 / 157"
        title="Resident Return Visa (RRV – 155/157)"
        subtitle="Protecting your permanent residency status."
      >
        <p>
          Australian permanent residency technically expires every five years in
          terms of travel rights. If you want to travel overseas and return to
          Australia as a resident, you must hold a valid Resident Return Visa.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800">Subclass 155:</strong> The standard
            five-year RRV. To qualify easily, you must have lived in Australia
            for at least two years out of the last five.
          </li>
          <li>
            <strong className="text-slate-800">Subclass 157:</strong> A short-term
            (three-month) RRV for those who have not lived in Australia for two
            years but have compelling and compassionate reasons for their absence
            or have substantial ties to Australia (family, business, or
            employment).
          </li>
          <li>
            <strong className="text-slate-800">Why it matters:</strong> If you
            leave Australia without a valid RRV, you may lose your right to
            return as a permanent resident and be forced to apply for a different
            visa.
          </li>
        </ul>
      </ServicePageSection>

      <section className="border-t border-slate-200/80 bg-slate-50 py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8 lg:px-10">
          <p className="text-sm font-semibold text-ctg-navy">
            Exploring talent, investment, or return travel options?
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Book a consultation and we will align your profile with the right
            stream and evidence strategy.
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
