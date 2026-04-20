function IconShield({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V7l8-4z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconRibbon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 3h12v7a4 4 0 01-4 4h-1l-2 3-2-3H10a4 4 0 01-4-4V3z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconUsers({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const items = [
  {
    icon: IconShield,
    title: "OMARA Registered",
    description: "Fully licensed migration agents",
  },
  {
    icon: IconRibbon,
    title: "MIA Member",
    description: "Migration Institute of Australia",
  },
  {
    icon: IconCheck,
    title: "98% Success Rate",
    description: "Proven track record",
  },
  {
    icon: IconUsers,
    title: "5000+ Clients",
    description: "Trusted by thousands",
  },
] as const;

export function TrustFeatures() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <ul className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 lg:gap-10">
          {items.map(({ icon: Icon, title, description }) => (
            <li key={title} className="flex flex-col items-center text-center">
              <span className="mb-5 flex size-14 items-center justify-center rounded-full border-2 border-ctg-navy text-ctg-navy">
                <Icon className="size-7" />
              </span>
              <h3 className="text-base font-bold text-ctg-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
