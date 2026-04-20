import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1722509627844-970fda8728a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxTeWRuZXklMjBPcGVyYSUyMEhvdXNlJTIwQXVzdHJhbGlhJTIwbGFuZG1hcmt8ZW58MXx8fHwxNzc1NDYxNjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080";

function HeroWave() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 leading-[0]"
      aria-hidden
    >
      <svg
        className="block w-full text-white"
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        style={{ height: "clamp(3rem, 8vw, 5.5rem)" }}
      >
        <path
          fill="currentColor"
          d="M0,48 C240,96 480,0 720,40 C960,80 1200,16 1440,56 L1440,96 L0,96 Z"
        />
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ctg-navy pb-[clamp(5rem,12vw,7.5rem)] pt-12 text-white md:pt-16 lg:pt-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,rgba(74,159,212,0.18),transparent_55%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10">
        <div>
          <div className="mb-6 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/20 bg-sky-400/15 px-4 py-2 text-xs text-white shadow-sm backdrop-blur-md sm:text-sm">
            <span className="shrink-0" aria-hidden>
              🛡️
            </span>
            <span className="font-medium">
              Registered Migration Agents MARN: 1234567
            </span>
            <span className="text-amber-300" aria-label="Five star rating">
              ★★★★★
            </span>
          </div>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Your Gateway to Australian Dreams
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            Expert immigration lawyers helping you navigate visas, permanent
            residency, and citizenship with confidence.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/#contact"
              className="inline-flex h-14 items-center justify-center rounded-xl border border-white/60 bg-white/80 px-8 text-sm font-semibold text-ctg-navy shadow-lg shadow-sky-900/20 backdrop-blur-md transition-all hover:bg-white hover:shadow-xl"
            >
              Free Consultation →
            </Link>
            <Link
              href="/#services"
              className="inline-flex h-14 items-center justify-center rounded-xl border border-white/35 bg-white/15 px-8 text-sm font-semibold text-white shadow-lg shadow-sky-900/20 backdrop-blur-md transition-all hover:bg-white/25 hover:shadow-xl"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { label: "15+ Years Experience" },
              { label: "5000+ Visas Approved" },
              { label: "98% Success Rate" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/25 bg-white/10 px-4 py-4 text-center text-xs font-semibold text-white shadow-sm backdrop-blur-md sm:text-sm"
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none lg:justify-self-end">
          <div
            className="absolute -inset-3 rounded-3xl bg-sky-400/25 blur-2xl sm:-inset-4"
            aria-hidden
          />
          <div className="relative">
            <Image
              src={HERO_IMAGE}
              alt="Sydney Opera House, Australia"
              width={1080}
              height={720}
              className="relative z-0 aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl shadow-sky-900/40 sm:aspect-[3/2]"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
            <div className="absolute -bottom-3 left-2 z-10 max-w-[240px] rounded-xl border border-zinc-100 bg-white p-4 shadow-xl sm:-bottom-4 sm:left-4">
              <div className="flex items-start gap-3">
                <span
                  className="mt-1 size-2.5 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.35)]"
                  aria-hidden
                />
                <div>
                  <p className="text-sm font-bold text-ctg-navy">Online Now</p>
                  <p className="mt-0.5 text-xs leading-snug text-zinc-600">
                    Immigration experts ready to help
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HeroWave />
    </section>
  );
}
