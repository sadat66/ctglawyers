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

function IconStar({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
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
    title: "Visitor & short-stay visas",
    description:
      "eVisitor (651), ETA (601), and Visitor (600) streams for tourism, family visits, and business visitors.",
    icon: IconAirplane,
    iconWrap: "bg-blue-500",
    href: "/services/visitor-short-stay",
  },
  {
    title: "Student & education visas",
    description:
      "Subclass 500 (all sectors), Guardian 590, Training 407, and course/GS counseling.",
    icon: IconGradCap,
    iconWrap: "bg-violet-600",
    href: "/services/student-education-visas",
  },
  {
    title: "Temporary Graduate Visa",
    description:
      "Subclass 485: post-study work, stream choice, and pathways to sponsorship or skilled PR.",
    icon: IconMedalRibbon,
    iconWrap: "bg-orange-500",
    href: "/services/temporary-graduate",
  },
  {
    title: "Employer-sponsored visas",
    description:
      "Subclass 482 (TSS), 186 (ENS), 494 (regional), and DAMA agreements for genuine employer need.",
    icon: IconBuilding,
    iconWrap: "bg-emerald-600",
    href: "/services/employer-sponsored",
  },
  {
    title: "Skilled migration (points-tested)",
    description:
      "Subclass 189, 190, 491, and 191—plus ACS, Engineers Australia, VETASSESS, and TRA assessment support.",
    icon: IconSuitcase,
    iconWrap: "bg-indigo-400",
    href: "/services/skilled-migration",
  },
  {
    title: "Family & partner visas",
    description:
      "Partner 820/801 & 309/100, prospective marriage 300, parent pathways, and child 101/802.",
    icon: IconHeart,
    iconWrap: "bg-pink-500",
    href: "/services/family-partner-visas",
  },
  {
    title: "Business & talent visas",
    description:
      "Global Talent 858, Business Innovation & Investment 188, and Resident Return 155/157.",
    icon: IconStar,
    iconWrap: "bg-amber-500",
    href: "/services/business-talent-visas",
  },
  {
    title: "Other visas",
    description:
      "Browse all service pages, or get help with bridging, waivers, and matters that don’t fit a single card.",
    icon: IconDocument,
    iconWrap: "bg-teal-600",
    href: "/services/other-visas",
  },
];

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
          {services.map(({ title, description, icon: Icon, iconWrap, href }) => (
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
                  href={href}
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
