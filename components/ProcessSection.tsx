import Link from "next/link";

function IconHandshake({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 12.9l2.55-2.54a2.75 2.75 0 013.89 0l2.2 2.2a1.75 1.75 0 11-2.47 2.47l-2.2-2.2a.25.25 0 00-.35 0L13.8 14.6a2.55 2.55 0 01-3.6 0L6.05 10.45a.25.25 0 00-.35 0l-2.2 2.2a1.75 1.75 0 01-2.47-2.47l2.2-2.2a2.75 2.75 0 013.89 0L12 12.9z" />
      <path d="M9.95 8.25l1.7-1.68a3.3 3.3 0 014.66 0l.76.76a1 1 0 01-1.42 1.42l-.76-.76a1.3 1.3 0 00-1.83 0l-1.7 1.68a1 1 0 01-1.41-1.42z" />
    </svg>
  );
}

function IconDocuments({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7 2h8l4 4v13a3 3 0 01-3 3H7a3 3 0 01-3-3V5a3 3 0 013-3zm7 1.5V7h3.5L14 3.5zM8 10h8v1.75H8V10zm0 3.75h8v1.75H8v-1.75zM8 17.5h5v1.75H8V17.5z" />
    </svg>
  );
}

function IconClipboard({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M15 2a2 2 0 012 2h2a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h2a2 2 0 012-2h6zm0 2H9v2h6V4zm2 6H7v2h10v-2zm0 4H7v2h10v-2z" />
    </svg>
  );
}

function IconPlaneCheck({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M21 15.5v-2l-8-4.5V4.2c0-.66-.54-1.2-1.2-1.2s-1.2.54-1.2 1.2V9L2 13.5v2l8.6-2.1V18l-2.2 1.5V21l3.4-1 3.4 1v-1.5L13 18v-4.6l8 2.1z" />
      <path d="M17.2 6.8l-2 2 1.2 1.2 3.2-3.2a1 1 0 10-1.4-1.4l-1 1-.6-.6a1 1 0 10-1.4 1.4l1 1z" />
    </svg>
  );
}

type ProcessStep = {
  id: number;
  title: string;
  description: string;
  icon: (props: { className?: string }) => React.ReactNode;
  iconWrap: string;
};

const steps: ProcessStep[] = [
  {
    id: 1,
    title: "Initial Consultation",
    description:
      "Book a free consultation where we assess your eligibility and discuss your visa options.",
    icon: IconHandshake,
    iconWrap: "bg-blue-500",
  },
  {
    id: 2,
    title: "Document Preparation",
    description:
      "We guide you through gathering and preparing all required documents for your application.",
    icon: IconDocuments,
    iconWrap: "bg-violet-500",
  },
  {
    id: 3,
    title: "Application Lodgement",
    description:
      "Our experts lodge your application with precision and attention to detail and compliance.",
    icon: IconClipboard,
    iconWrap: "bg-orange-500",
  },
  {
    id: 4,
    title: "Visa Approval",
    description:
      "We track your application and keep you updated until you receive your visa approval.",
    icon: IconPlaneCheck,
    iconWrap: "bg-emerald-500",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="bg-[radial-gradient(ellipse_at_top,rgba(29,123,184,0.25),transparent_60%),linear-gradient(180deg,#0d5078_0%,#0a4a71_100%)] py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <header className="mb-12 text-center md:mb-14">
          <p className="mb-4">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white/90">
              Our Process
            </span>
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How We Make Your Visa Journey Simple
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            Our proven 4-step process ensures a smooth and successful visa
            application experience.
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-4 lg:gap-8">
          {steps.map(({ id, title, description, icon: Icon, iconWrap }) => (
            <li key={title}>
              <article className="relative h-full rounded-2xl border border-white/15 bg-white/10 p-6 text-center shadow-lg shadow-black/10 backdrop-blur-sm sm:p-7">
                <span className="absolute right-4 top-4 inline-flex size-6 items-center justify-center rounded-full bg-white text-xs font-bold text-slate-800 shadow">
                  {id}
                </span>
                <div
                  className={`mx-auto mb-4 flex size-12 items-center justify-center rounded-xl text-white ${iconWrap}`}
                >
                  <Icon className="size-6" />
                </div>
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  {description}
                </p>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center md:mt-14">
          <Link
            href="#contact"
            className="inline-flex h-14 items-center justify-center rounded-xl border border-white/55 bg-white/80 px-8 text-sm font-semibold text-ctg-navy shadow-lg shadow-sky-900/20 backdrop-blur-md transition-all hover:bg-white hover:shadow-xl"
          >
            Start Your Application Today
          </Link>
        </div>
      </div>
    </section>
  );
}
