import Image from "next/image";
import Link from "next/link";

const imageOne =
  "https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmclMjBoYW5kc2hha2V8ZW58MXx8fHwxNzc1NDYyMDYwfDA&ixlib=rb-4.1.0&q=80&w=1080";
const imageTwo =
  "https://images.unsplash.com/photo-1758691737124-05c5bffe46f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkaXZlcnNlJTIwdGVhbSUyMHByb2Zlc3Npb25hbHMlMjB3b3JraW5nfGVufDF8fHx8MTc3NTQ2MjA2MXww&ixlib=rb-4.1.0&q=80&w=1080";

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M12 3l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V7l8-4z" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6l4 2" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
    </svg>
  );
}

function IconThumb() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M7 11v10H4V11h3zm2 10h8.2a2 2 0 001.95-1.55l1.1-5A2 2 0 0018.3 12H14l.8-4.2A2.4 2.4 0 0012.45 5L9 10.2V21z" />
    </svg>
  );
}

function IconAward() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <circle cx="12" cy="8.5" r="4.5" />
      <path d="M8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5" />
    </svg>
  );
}

function IconHeadset() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M4 13a8 8 0 0116 0" />
      <rect x="3" y="12" width="4" height="7" rx="1.5" />
      <rect x="17" y="12" width="4" height="7" rx="1.5" />
      <path d="M21 18a3 3 0 01-3 3h-2" />
    </svg>
  );
}

const features = [
  {
    title: "Licensed & Registered",
    description:
      "Our migration agents are fully registered with OMARA, ensuring you receive expert, compliant advice.",
    icon: IconShield,
  },
  {
    title: "Fast Processing",
    description:
      "We streamline your application process to minimize delays and get you results faster.",
    icon: IconClock,
  },
  {
    title: "Comprehensive Services",
    description:
      "From visitor visas to permanent residency, we handle all types of Australian visa applications.",
    icon: IconGlobe,
  },
  {
    title: "98% Success Rate",
    description:
      "Our track record speaks for itself with thousands of successful visa applications.",
    icon: IconThumb,
  },
  {
    title: "15+ Years Experience",
    description:
      "Decades of combined expertise in Australian immigration law and policy.",
    icon: IconAward,
  },
  {
    title: "Personalized Support",
    description:
      "Dedicated case managers who guide you through every step of your journey.",
    icon: IconHeadset,
  },
] as const;

export function WhyChooseUsSection() {
  return (
    <section id="about" className="bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="mb-4">
              <span className="inline-block rounded-full bg-sky-100 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-ctg-navy">
                Why choose us
              </span>
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-ctg-navy sm:text-4xl">
              Your Trusted Partner in Australian Immigration
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              At CTG Lawyers, we understand that moving to a new country is a
              life-changing decision. That&apos;s why we&apos;re committed to making your
              immigration journey as smooth and stress free as possible.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              With over 15 years of experience and a 98% success rate, our team
              of registered migration agents has helped thousands of individuals
              and families achieve their Australian dreams.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="/#contact"
                className="inline-flex h-14 items-center justify-center rounded-xl border border-sky-200/60 bg-ctg-navy/90 px-8 text-sm font-semibold text-white shadow-lg shadow-sky-200/35 backdrop-blur-md transition-all hover:bg-ctg-navy hover:shadow-xl"
              >
                Start Your Journey Today
              </Link>
              <a
                href="https://wa.me/610424252787"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center rounded-xl border border-sky-200/70 bg-white/60 px-8 text-sm font-semibold text-slate-700 shadow-lg shadow-sky-200/25 backdrop-blur-md transition-all hover:bg-white/80 hover:shadow-xl"
              >
                WhatsApp: +61 0424 252 787
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src={imageOne}
                alt="Professional business handshake meeting"
                width={1080}
                height={720}
                className="h-full min-h-52 w-full rounded-2xl object-cover shadow-lg"
                sizes="(min-width: 1024px) 24vw, 48vw"
              />
              <Image
                src={imageTwo}
                alt="Diverse team of professionals working together"
                width={1080}
                height={720}
                className="h-full min-h-52 w-full rounded-2xl object-cover shadow-lg"
                sizes="(min-width: 1024px) 24vw, 48vw"
              />
            </div>
            <div className="absolute -bottom-6 left-6 rounded-xl bg-[#1fa0ea] px-6 py-4 text-white shadow-xl">
              <p className="text-3xl font-bold leading-none">5000+</p>
              <p className="mt-1 text-xs font-medium text-white/90">
                Happy Clients Worldwide
              </p>
            </div>
          </div>
        </div>

        <ul className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7 lg:mt-24 lg:grid-cols-3 lg:gap-8">
          {features.map(({ title, description, icon: Icon }) => (
            <li key={title}>
              <article className="h-full rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-100 sm:p-7">
                <span className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-ctg-navy text-white">
                  <span className="size-5">
                    <Icon />
                  </span>
                </span>
                <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
