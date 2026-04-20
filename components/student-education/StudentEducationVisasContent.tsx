import Link from "next/link";
import { ServicePageSection } from "@/components/service-pages/ServicePageSection";

const quickLinks = [
  { id: "subclass-500", label: "Student (500)" },
  { id: "subclass-590", label: "Guardian (590)" },
  { id: "subclass-407", label: "Training (407)" },
  { id: "education-counseling", label: "Education counseling" },
] as const;

export function StudentEducationVisasContent() {
  return (
    <>
      <header className="border-b border-slate-200/80 bg-[linear-gradient(180deg,#0d5078_0%,#0a4a71_100%)] py-14 text-white md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-200/90">
            Services
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            Student &amp; Education Visas
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/88 md:text-lg">
            Student Visa (Subclass 500) across all sectors—ELICOS, VET, higher
            education, and research. Student Guardian (Subclass 590) for parents
            of minor students. Training Visa (Subclass 407) for occupational
            training and professional development. Plus education counseling for
            course selection and Genuine Student (GS) / GTE-aligned support.
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
              <span className="font-semibold text-ctg-navy">Subclass 500</span>
              <span className="mt-1 block text-slate-600">
                Full-time study at a recognised provider; all education sectors.
              </span>
            </li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <span className="font-semibold text-ctg-navy">Subclass 590</span>
              <span className="mt-1 block text-slate-600">
                Guardian for students under 18 (or exceptional cases over 18).
              </span>
            </li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <span className="font-semibold text-ctg-navy">Subclass 407</span>
              <span className="mt-1 block text-slate-600">
                Workplace-based occupational training; sponsored nomination.
              </span>
            </li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <span className="font-semibold text-ctg-navy">Counseling</span>
              <span className="mt-1 block text-slate-600">
                Course fit, GS statements, documents, and provider matching.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <ServicePageSection
        id="subclass-500"
        eyebrow="Subclass 500"
        title="Student Visa (Subclass 500)"
        subtitle="The primary gateway for international education in Australia."
      >
        <p>
          This visa allows you to stay in Australia for up to five years to
          participate in a full-time course of study at a recognised education
          provider. It covers all sectors including ELICOS (English language), VET
          (vocational), higher education (bachelor and masters), and
          post-graduate research.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800">2026 financial requirement:</strong>{" "}
            You must demonstrate access to at least $29,710 AUD for living
            expenses, plus the cost of your first year&apos;s tuition and return
            travel.
          </li>
          <li>
            <strong className="text-slate-800">Mandatory health cover:</strong>{" "}
            You must maintain Overseas Student Health Cover (OSHC) for the
            entire duration of your stay.
          </li>
          <li>
            <strong className="text-slate-800">Work rights:</strong> Generally
            limited to 48 hours per fortnight while your course is in session
            (unrestricted during scheduled breaks).
          </li>
          <li>
            <strong className="text-slate-800">Sector flexibility:</strong> You
            can package courses (for example ELICOS plus a bachelor) under a
            single visa application.
          </li>
        </ul>
      </ServicePageSection>

      <ServicePageSection
        id="subclass-590"
        eyebrow="Subclass 590"
        title="Student Guardian Visa (Subclass 590)"
        subtitle="Ensuring the welfare of younger learners."
      >
        <p>
          This visa is designed for parents, legal custodians, or relatives (over
          21) who need to accompany an international student under the age of 18.
          In exceptional circumstances, it can also be granted for students over
          18 who have physical or mental health needs.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800">The &quot;no work&quot; rule:</strong>{" "}
            Unlike the Student Visa, the Guardian Visa does not allow you to work
            in Australia.
          </li>
          <li>
            <strong className="text-slate-800">Residency requirement:</strong> You
            must live with the student and provide for their accommodation,
            welfare, and general support.
          </li>
          <li>
            <strong className="text-slate-800">Travel restriction:</strong> You
            cannot leave Australia without the student unless you make alternative
            welfare arrangements approved by the Department.
          </li>
          <li>
            <strong className="text-slate-800">Duration:</strong> Valid for the
            same period as the student&apos;s visa or until the student turns 18.
          </li>
        </ul>
      </ServicePageSection>

      <ServicePageSection
        id="subclass-407"
        eyebrow="Subclass 407"
        title="Training Visa (Subclass 407)"
        subtitle="Professional development through occupational training."
      >
        <p>
          The 407 visa is a &quot;work-to-learn&quot; visa that allows you to take
          part in workplace-based occupational training activities to improve your
          skills for your job, area of tertiary study, or field of expertise.
        </p>
        <p className="font-medium text-slate-700">Three main streams</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800">Occupational training for registration:</strong>{" "}
            Necessary to get registration or licensing in Australia or your home
            country.
          </li>
          <li>
            <strong className="text-slate-800">Occupational training to improve skills:</strong>{" "}
            Specifically for people in eligible occupations.
          </li>
          <li>
            <strong className="text-slate-800">Capacity building overseas:</strong>{" "}
            Includes professional development for overseas managers or
            government-supported training.
          </li>
          <li>
            <strong className="text-slate-800">Sponsorship:</strong> Requires a
            Temporary Activities Sponsor (usually an Australian organisation) to
            nominate you.
          </li>
          <li>
            <strong className="text-slate-800">Validity:</strong> Granted for up
            to two years.
          </li>
        </ul>
      </ServicePageSection>

      <ServicePageSection
        id="education-counseling"
        eyebrow="Counseling &amp; GS support"
        title="Education Counseling &amp; GS / GTE Support"
        subtitle="Navigating the path from application to arrival."
      >
        <p>
          The transition from GTE to the Genuine Student (GS) requirement in
          2024–2025 means applicants are now assessed on their academic trajectory
          and the career value of their chosen course, rather than just their
          temporary intent.
        </p>
        <p className="font-medium text-slate-700">Our support services</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800">Course selection:</strong> We help
            align your previous academic history with Australian programs that
            offer the highest career return and professional recognition.
          </li>
          <li>
            <strong className="text-slate-800">The GS statement:</strong> As of
            2026, the GS requirement involves answering four specific questions
            (150 words each) regarding your circumstances, course choice, and
            future benefits. We provide expert drafting support to ensure your
            answers are evidence-backed.
          </li>
          <li>
            <strong className="text-slate-800">Document verification:</strong>{" "}
            Pre-screening financial documents, English test scores (IELTS/PTE),
            and employment history to meet the &quot;Priority 1&quot; processing
            standards used by top-tier Australian institutions.
          </li>
          <li>
            <strong className="text-slate-800">Institution matching:</strong> We
            identify &quot;Category 1&quot; providers that currently benefit from
            faster visa processing times under the 2026 National Planning Level
            caps.
          </li>
        </ul>
      </ServicePageSection>

      <section className="border-t border-slate-200/80 bg-slate-50 py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8 lg:px-10">
          <p className="text-sm font-semibold text-ctg-navy">
            Planning study, training, or a guardian pathway?
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Book a consultation and we will align your course, documents, and visa
            strategy with current Department requirements.
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
