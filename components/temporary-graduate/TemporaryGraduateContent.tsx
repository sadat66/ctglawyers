import Link from "next/link";
import { ServicePageSection } from "@/components/service-pages/ServicePageSection";

const quickLinks = [
  { id: "overview", label: "Overview" },
  { id: "streams", label: "Streams" },
  { id: "eligibility", label: "Eligibility" },
  { id: "next-steps", label: "After your 485" },
] as const;

export function TemporaryGraduateContent() {
  return (
    <>
      <header className="border-b border-slate-200/80 bg-[linear-gradient(180deg,#0d5078_0%,#0a4a71_100%)] py-14 text-white md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-200/90">
            Services
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            Temporary Graduate Visa (Subclass 485)
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/88 md:text-lg">
            Work full-time in Australia after completing eligible study here. The
            485 is a key bridge from graduation to employer sponsorship, skilled
            migration, or other long-term pathways.
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
          <h2 className="text-lg font-bold text-ctg-navy">At a glance</h2>
          <ul className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-4">
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <span className="font-semibold text-ctg-navy">Recent graduates</span>
              <span className="mt-1 block text-slate-600">
                For eligible qualifications completed in Australia.
              </span>
            </li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <span className="font-semibold text-ctg-navy">Full work rights</span>
              <span className="mt-1 block text-slate-600">
                Generally unrestricted work while the visa is valid.
              </span>
            </li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <span className="font-semibold text-ctg-navy">Two main streams</span>
              <span className="mt-1 block text-slate-600">
                Post-study work vs occupation-selected pathways.
              </span>
            </li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <span className="font-semibold text-ctg-navy">Next visa</span>
              <span className="mt-1 block text-slate-600">
                Often 482/186, points-tested PR, or partner routes.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <ServicePageSection
        id="overview"
        eyebrow="Subclass 485"
        title="What the Temporary Graduate visa does"
        subtitle="A structured work period after Australian study."
      >
        <p>
          The Temporary Graduate visa (subclass 485) lets eligible former students
          remain in Australia temporarily after finishing a course at an
          Australian institution. It is designed so you can gain experience,
          secure sponsorship, or prepare a skilled or family-based permanent
          application.
        </p>
        <p>
          Policy settings—including maximum age at application, length of stay,
          and eligible courses—are set in legislation and updated from time to
          time. Your outcome depends on your stream, qualification level, where
          you studied, and when you apply.
        </p>
      </ServicePageSection>

      <ServicePageSection
        id="streams"
        eyebrow="Streams"
        title="Choosing the right 485 stream"
        subtitle="Post-study work vs occupation-aligned pathways."
      >
        <p>
          Most applicants fit one of two conceptual pathways: one centred on an
          eligible Australian qualification you have completed (commonly
          described as a post-study work style stream), and one where you
          nominate an occupation and meet skills assessment and list requirements
          (sometimes described as a graduate work or occupation-selected pathway).
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800">Post-study pathway:</strong> Tied
            to completing eligible degrees or other qualifying study in Australia.
            Stay length can vary by qualification type and whether extensions or
            regional study concessions apply.
          </li>
          <li>
            <strong className="text-slate-800">Occupation-selected pathway:</strong>{" "}
            Requires a nominated occupation, skills assessment where required, and
            meeting the relevant skilled occupation criteria at the time of
            application.
          </li>
          <li>
            <strong className="text-slate-800">Second 485 (replacement):</strong>{" "}
            In limited circumstances, a further temporary graduate visa may be
            available—eligibility is narrow and fact-specific.
          </li>
        </ul>
      </ServicePageSection>

      <ServicePageSection
        id="eligibility"
        eyebrow="Requirements"
        title="Typical eligibility themes"
        subtitle="What the Department usually expects to see."
      >
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800">Australian study:</strong> You
            must have met the Australian study requirement with an eligible
            CRICOS-registered course and acceptable completion timing.
          </li>
          <li>
            <strong className="text-slate-800">English language:</strong>{" "}
            Competent English (or higher, depending on stream and rules at
            lodgment).
          </li>
          <li>
            <strong className="text-slate-800">Health insurance:</strong>{" "}
            Appropriate cover for the whole stay (not OSHC—usually overseas
            visitor cover or equivalent as specified).
          </li>
          <li>
            <strong className="text-slate-800">Apply on time:</strong> You must
            lodge within prescribed periods after your course completion or award
            date, depending on stream.
          </li>
          <li>
            <strong className="text-slate-800">Character &amp; other criteria:</strong>{" "}
            Police clearances and standard public interest criteria apply.
          </li>
        </ul>
      </ServicePageSection>

      <ServicePageSection
        id="next-steps"
        eyebrow="Strategy"
        title="After your 485: common permanent pathways"
        subtitle="Use your work rights to build the next application."
      >
        <p>
          Many graduates move from a 485 to employer-sponsored visas (such as the
          482 or 186), points-tested skilled migration (189, 190, or 491), or
          partner or other family visas. Some also use the time to sit tests,
          gather skilled employment for points, or complete skills assessments.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <Link
              href="/services/employer-sponsored"
              className="font-semibold text-ctg-navy underline decoration-sky-300/80 underline-offset-2 hover:text-ctg-sky"
            >
              Employer-sponsored visas
            </Link>
            —when an Australian employer can nominate your role.
          </li>
          <li>
            <Link
              href="/services/skilled-migration"
              className="font-semibold text-ctg-navy underline decoration-sky-300/80 underline-offset-2 hover:text-ctg-sky"
            >
              Skilled migration (points-tested)
            </Link>
            —if you can reach the points threshold and secure an invitation or
            nomination.
          </li>
          <li>
            <Link
              href="/services/family-partner-visas"
              className="font-semibold text-ctg-navy underline decoration-sky-300/80 underline-offset-2 hover:text-ctg-sky"
            >
              Family &amp; partner visas
            </Link>
            —if an eligible relationship supports a further application.
          </li>
        </ul>
      </ServicePageSection>

      <section className="border-t border-slate-200/80 bg-slate-50 py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8 lg:px-10">
          <p className="text-sm font-semibold text-ctg-navy">
            Finishing your course soon or comparing 485 streams?
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Book a consultation and we will check timing, stream choice, and your
            longer-term pathway before you lodge.
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
