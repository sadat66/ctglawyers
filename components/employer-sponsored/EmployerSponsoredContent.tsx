import Link from "next/link";
import { ServicePageSection } from "@/components/service-pages/ServicePageSection";

const quickLinks = [
  { id: "subclass-482", label: "TSS (482)" },
  { id: "subclass-186", label: "ENS (186)" },
  { id: "subclass-494", label: "SESR (494)" },
  { id: "dama", label: "DAMA" },
] as const;

export function EmployerSponsoredContent() {
  return (
    <>
      <header className="border-b border-slate-200/80 bg-[linear-gradient(180deg,#0d5078_0%,#0a4a71_100%)] py-14 text-white md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-200/90">
            Services
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            Employer-Sponsored Visas
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/88 md:text-lg">
            Temporary Skill Shortage (Subclass 482), Employer Nomination Scheme
            (Subclass 186), Skilled Employer Sponsored Regional (Subclass 494),
            and Designated Area Migration Agreements (DAMA)—pathways tied to
            genuine employer need.
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
          <ul className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-4">
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <span className="font-semibold text-ctg-navy">Subclass 482</span>
              <span className="mt-1 block text-slate-600">
                Short-, medium-term, and labour agreement skilled sponsorship.
              </span>
            </li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <span className="font-semibold text-ctg-navy">Subclass 186</span>
              <span className="mt-1 block text-slate-600">
                Employer-nominated permanent residency (DE or TRT).
              </span>
            </li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <span className="font-semibold text-ctg-navy">Subclass 494</span>
              <span className="mt-1 block text-slate-600">
                Regional employer sponsorship with a route to PR.
              </span>
            </li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <span className="font-semibold text-ctg-navy">DAMA</span>
              <span className="mt-1 block text-slate-600">
                Local agreements with tailored lists and concessions.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <ServicePageSection
        id="subclass-482"
        eyebrow="Subclass 482"
        title="Temporary Skill Shortage (Subclass 482)"
        subtitle="Address immediate labour gaps with global talent."
      >
        <p>
          The 482 visa allows employers to address labour shortages by bringing in
          genuinely skilled workers where they cannot find an appropriately
          skilled Australian worker. It is the most common &quot;work visa&quot; in
          Australia.
        </p>
        <p className="font-medium text-slate-700">The three main streams</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800">Short-term stream:</strong> For
            occupations on the Short-term Skilled Occupation List (STSOL).
            Typically granted for up to two years.
          </li>
          <li>
            <strong className="text-slate-800">Medium-term stream:</strong> For
            high-demand occupations on the Medium and Long-term Strategic Skills
            List (MLTSSL). Granted for up to four years.
          </li>
          <li>
            <strong className="text-slate-800">Labour Agreement stream:</strong>{" "}
            For employers who have a specific, formal agreement with the
            government to source talent outside the standard visa programs (often
            used for niche industries or semi-skilled roles).
          </li>
          <li>
            <strong className="text-slate-800">Key 2026 update:</strong> All 482
            visa holders, regardless of their stream, now have a clear pathway to
            permanent residency (PR) after two years of working with their
            sponsoring employer.
          </li>
        </ul>
      </ServicePageSection>

      <ServicePageSection
        id="subclass-186"
        eyebrow="Subclass 186"
        title="Employer Nomination Scheme (Subclass 186)"
        subtitle="The premier pathway to permanent residency via employment."
      >
        <p>
          This is a permanent residency visa for skilled workers who are nominated
          by an Australian employer. It allows you to live and work in Australia
          indefinitely.
        </p>
        <p className="font-medium text-slate-700">The two primary pathways</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800">Direct Entry (DE) stream:</strong>{" "}
            For applicants who may not have worked in Australia before but have
            at least three years of relevant experience and a formal skills
            assessment. This is &quot;straight to PR.&quot;
          </li>
          <li>
            <strong className="text-slate-800">
              Temporary Residence Transition (TRT) stream:
            </strong>{" "}
            For workers who have held a 482 visa and worked for their employer for
            at least two years. The employer then transitions them to permanent
            status.
          </li>
          <li>
            <strong className="text-slate-800">Benefit:</strong> As a PR holder,
            you gain access to Medicare (Australia&apos;s healthcare system) and
            can eventually apply for Australian citizenship.
          </li>
        </ul>
      </ServicePageSection>

      <ServicePageSection
        id="subclass-494"
        eyebrow="Subclass 494"
        title="Skilled Employer Sponsored Regional (Subclass 494)"
        subtitle="Targeting growth in Australia&apos;s regional hubs."
      >
        <p>
          The 494 visa is designed to help regional employers who cannot find
          local workers. This visa provides a five-year stay and prioritises
          processing for businesses located outside major cities like Sydney,
          Melbourne, and Brisbane.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800">Regional priority:</strong> These
            applications are fast-tracked to support regional economic
            development.
          </li>
          <li>
            <strong className="text-slate-800">PR pathway:</strong> After living
            and working in the regional area for three years on this visa, you
            become eligible for the Subclass 191 permanent residency visa.
          </li>
          <li>
            <strong className="text-slate-800">Employer commitment:</strong> The
            employer must demonstrate that the position is genuine and located in
            a designated regional area.
          </li>
        </ul>
      </ServicePageSection>

      <ServicePageSection
        id="dama"
        eyebrow="DAMA"
        title="Designated Area Migration Agreements (DAMA)"
        subtitle="Tailored solutions for local economic needs."
      >
        <p>
          A DAMA is a formal agreement between the Australian Government and a
          specific regional authority (for example the Northern Territory,
          Orana, or South West WA).
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800">Customised lists:</strong> DAMAs
            often include occupations that are not on the standard national
            skilled lists.
          </li>
          <li>
            <strong className="text-slate-800">Concessions:</strong> These
            agreements may offer concessions for the employer and worker, such as
            lower English language requirements, higher age limits (up to 55), or
            lower salary thresholds.
          </li>
          <li>
            <strong className="text-slate-800">Local focus:</strong> It is
            specifically designed to ensure that unique regional industries—like
            specialised agriculture or remote mining—have the staff they need to
            operate.
          </li>
        </ul>
      </ServicePageSection>

      <section className="border-t border-slate-200/80 bg-slate-50 py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8 lg:px-10">
          <p className="text-sm font-semibold text-ctg-navy">
            Need a sponsorship or nomination strategy?
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Book a consultation and we will align your role, employer, and visa
            stream with current requirements.
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
