import Link from "next/link";
import { ServicePageSection } from "@/components/service-pages/ServicePageSection";

const quickLinks = [
  { id: "subclass-189", label: "Skilled Independent (189)" },
  { id: "subclass-190", label: "Skilled Nominated (190)" },
  { id: "subclass-491", label: "Skilled Regional (491)" },
  { id: "subclass-191", label: "PR Regional (191)" },
  { id: "skills-assessment", label: "Skills assessment" },
] as const;

export function SkilledMigrationPointsContent() {
  return (
    <>
      <header className="border-b border-slate-200/80 bg-[linear-gradient(180deg,#0d5078_0%,#0a4a71_100%)] py-14 text-white md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-200/90">
            Services
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            Skilled Migration (Points-Tested)
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/88 md:text-lg">
            Skilled Independent (Subclass 189), Skilled Nominated (Subclass
            190), Skilled Work Regional (Subclass 491), and Permanent Residence
            Regional (Subclass 191)—plus skills assessment support with authorities
            such as ACS, Engineers Australia, and VETASSESS.
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
              <span className="font-semibold text-ctg-navy">Subclass 189</span>
              <span className="mt-1 block text-slate-600">
                Direct permanent residency; no sponsor; points-tested.
              </span>
            </li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <span className="font-semibold text-ctg-navy">Subclass 190</span>
              <span className="mt-1 block text-slate-600">
                State-nominated PR; +5 points; state commitments apply.
              </span>
            </li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <span className="font-semibold text-ctg-navy">Subclass 491</span>
              <span className="mt-1 block text-slate-600">
                Five-year regional provisional visa; pathway to PR.
              </span>
            </li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <span className="font-semibold text-ctg-navy">Subclass 191</span>
              <span className="mt-1 block text-slate-600">
                Permanent stage for eligible 491 holders.
              </span>
            </li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:col-span-2 lg:col-span-1 xl:col-span-1">
              <span className="font-semibold text-ctg-navy">Assessment</span>
              <span className="mt-1 block text-slate-600">
                Positive skills assessment before you can lodge an EOI.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <ServicePageSection
        id="subclass-189"
        eyebrow="Subclass 189"
        title="Skilled Independent (Subclass 189)"
        subtitle="The &quot;gold standard&quot; of Australian visas."
      >
        <p>
          The 189 visa is a points-tested permanent residency visa for skilled
          workers who are not sponsored by an employer, a state or territory, or
          a family member. It offers total geographic freedom from day one.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800">Status:</strong> Immediate
            permanent residency (PR).
          </li>
          <li>
            <strong className="text-slate-800">Flexibility:</strong> Live, work,
            and study anywhere in Australia without restriction.
          </li>
          <li>
            <strong className="text-slate-800">Selection:</strong> Based strictly
            on high points scores and occupation demand. In 2026, invitation
            rounds are strictly quarterly.
          </li>
          <li>
            <strong className="text-slate-800">Best for:</strong> Applicants with
            exceptionally high points (typically 90+) in high-demand
            &quot;Pro-Priority&quot; occupations.
          </li>
        </ul>
      </ServicePageSection>

      <ServicePageSection
        id="subclass-190"
        eyebrow="Subclass 190"
        title="Skilled Nominated (Subclass 190)"
        subtitle="The state-sponsorship advantage."
      >
        <p>
          This is a permanent visa that requires nomination by an Australian state
          or territory government. Each state has its own occupation list and
          specific requirements (such as living in that state or having a job
          offer).
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800">The bonus:</strong> You receive an
            automatic 5 points toward your points test for being nominated.
          </li>
          <li>
            <strong className="text-slate-800">Commitment:</strong> You are
            generally expected to live and work in the nominating state for the
            first two years of your residency.
          </li>
          <li>
            <strong className="text-slate-800">Selection:</strong> States often
            &quot;cherry-pick&quot; candidates from the SkillSelect pool who meet
            their specific economic needs.
          </li>
        </ul>
      </ServicePageSection>

      <ServicePageSection
        id="subclass-491"
        eyebrow="Subclass 491"
        title="Skilled Work Regional (Subclass 491)"
        subtitle="The most accessible pathway to residency."
      >
        <p>
          The 491 is a five-year provisional (temporary) visa for skilled workers
          who want to live and work in regional Australia. While not PR initially,
          it features a guaranteed pathway to permanent residency.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800">The bonus:</strong> You receive an
            automatic 15 points for state nomination or family sponsorship,
            making it the easiest way to reach the 65-point threshold.
          </li>
          <li>
            <strong className="text-slate-800">Regional definition:</strong>{" "}
            Covers almost all of Australia except Sydney, Melbourne, and Brisbane.
          </li>
          <li>
            <strong className="text-slate-800">Best for:</strong> Applicants who
            fall just short of the points needed for a 189 or 190 visa.
          </li>
        </ul>
      </ServicePageSection>

      <ServicePageSection
        id="subclass-191"
        eyebrow="Subclass 191"
        title="Permanent Residence Regional (Subclass 191)"
        subtitle="The &quot;finish line&quot; for 491 visa holders."
      >
        <p>
          This is the permanent stage of the regional pathway. You do not need to
          be invited to apply for this; it is an entitlement once you meet the
          residence and work requirements.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800">Eligibility:</strong> You must have
            held your 491 visa for at least three years.
          </li>
          <li>
            <strong className="text-slate-800">Requirements:</strong> You must
            prove you lived and worked in a designated regional area during those
            three years.
          </li>
          <li>
            <strong className="text-slate-800">Income update (2026):</strong> As
            of the latest 2025–2026 regulations, there is no minimum taxable
            income threshold required, but you must still provide three years of ATO
            (Tax Office) Notices of Assessment.
          </li>
        </ul>
      </ServicePageSection>

      <ServicePageSection
        id="skills-assessment"
        eyebrow="Foundation"
        title="Skills Assessment Support"
        subtitle="The foundation of your application."
      >
        <p>
          You cannot lodge an Expression of Interest (EOI) without a positive
          skills assessment. This is a formal review of your qualifications and
          work experience by a designated Australian authority.
        </p>
        <p className="font-medium text-slate-700">Key authorities we partner with</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800">ACS (Australian Computer Society):</strong>{" "}
            For IT professionals. As of late 2025, Data Scientists fall strictly
            under ACS rather than VETASSESS.
          </li>
          <li>
            <strong className="text-slate-800">Engineers Australia (EA):</strong>{" "}
            For all engineering disciplines. Requires a Competency Demonstration
            Report (CDR) or an accredited degree.
          </li>
          <li>
            <strong className="text-slate-800">VETASSESS:</strong> For over 350
            professional occupations (marketing, HR, project managers, and more).
          </li>
          <li>
            <strong className="text-slate-800">TRA (Trades Recognition Australia):</strong>{" "}
            For chefs, electricians, and automotive mechanics.
          </li>
        </ul>
        <p>
          <strong className="text-slate-800">Our role:</strong> We assist in
          mapping your duties to the ANZSCO (Australian and New Zealand Standard
          Classification of Occupations) so your reference letters and transcripts
          meet the strict criteria of these authorities.
        </p>
      </ServicePageSection>

      <section className="border-t border-slate-200/80 bg-slate-50 py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8 lg:px-10">
          <p className="text-sm font-semibold text-ctg-navy">
            Unsure which skilled pathway fits your points and occupation?
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Book a consultation and we will map state lists, regional options, and
            your skills assessment strategy.
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
