import Link from "next/link";

function IconAirplane({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
    </svg>
  );
}

function IconGradCap({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
    </svg>
  );
}

function IconMedalRibbon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-5.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
    </svg>
  );
}

function IconBuilding({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
    </svg>
  );
}

function IconSuitcase({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
    </svg>
  );
}

function IconUserPlus({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );
}

function IconHeart({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function IconDocument({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

const services = [
  {
    title: "Visitor Visa",
    description:
      "Visit Australia for tourism, business, or to see family and friends.",
    icon: IconAirplane,
    iconWrap: "bg-blue-500",
  },
  {
    title: "Student Visa",
    description:
      "Study in Australia and obtain world-class education.",
    icon: IconGradCap,
    iconWrap: "bg-violet-600",
  },
  {
    title: "Temporary Graduate Visa",
    description:
      "Recently finished a course in Australia? Start your career with unrestricted post-study work opportunities.",
    icon: IconMedalRibbon,
    iconWrap: "bg-orange-500",
  },
  {
    title: "Employer Sponsored Visas",
    description:
      "Migration is easy when an Australian business is interested in sponsoring you. These sponsored visas let you live and work in Australia permanently.",
    icon: IconBuilding,
    iconWrap: "bg-emerald-600",
  },
  {
    title: "Skilled Migration Visas",
    description:
      "Live and work in Australia permanently based on your skills and qualifications.",
    icon: IconSuitcase,
    iconWrap: "bg-indigo-400",
  },
  {
    title: "Parent Visas",
    description:
      "Bring your parents to Australia and reunite your family.",
    icon: IconUserPlus,
    iconWrap: "bg-rose-500",
  },
  {
    title: "Partner Visas",
    description:
      "Reunite with your spouse or partner in Australia.",
    icon: IconHeart,
    iconWrap: "bg-pink-500",
  },
  {
    title: "Other Visas",
    description:
      "If you can’t find your expected visa, then click here to find the right visa for your unique circumstances.",
    icon: IconDocument,
    iconWrap: "bg-teal-600",
  },
] as const;

export function ServicesSection() {
  return (
    <section
      id="services"
      className="border-t border-slate-200/80 bg-slate-50 py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <header className="mb-12 text-center md:mb-16">
          <p className="mb-5">
            <span className="inline-block rounded-full bg-sky-100 px-5 py-2 text-xs font-bold uppercase tracking-widest text-ctg-navy">
              Our services
            </span>
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-ctg-navy sm:text-4xl">
            Visa Services We Offer
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            Comprehensive immigration solutions tailored to your unique needs.
            Let us guide you through your Australian journey.
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-4 lg:gap-8">
          {services.map(({ title, description, icon: Icon, iconWrap }) => (
            <li key={title}>
              <article className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-md shadow-slate-200/60 ring-1 ring-slate-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/80 sm:p-7">
                <div
                  className={`mb-4 flex size-12 shrink-0 items-center justify-center rounded-xl text-white ${iconWrap}`}
                >
                  <Icon className="size-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {description}
                </p>
                <Link
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-0.5 text-sm font-semibold text-ctg-navy transition-colors hover:text-ctg-sky"
                >
                  Learn more
                  <ChevronRight className="size-4" />
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
