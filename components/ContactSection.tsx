import Image from "next/image";

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden>
      <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

type ContactInfoItem = {
  title: string;
  lines: string[];
  icon: () => React.ReactNode;
};

const contactInfo: ContactInfoItem[] = [
  {
    title: "WhatsApp",
    lines: ["+61 0424 252 787"],
    icon: IconPhone,
  },
  {
    title: "Email",
    lines: ["info@ctglawyers.com.au"],
    icon: IconMail,
  },
  {
    title: "Office",
    lines: [
      "Suite 04, 108 Haldon St., Lakemba",
      "Sydney, NSW, Australia, 2195",
    ],
    icon: IconMapPin,
  },
  {
    title: "Business Hours",
    lines: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 2:00 PM"],
    icon: IconClock,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-slate-200/70 bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <p className="mb-10 text-center md:mb-12">
          <span className="inline-flex h-12 items-center justify-center rounded-xl border border-sky-200/50 bg-ctg-navy/90 px-7 text-xs font-semibold text-white shadow-lg shadow-sky-200/30 backdrop-blur-md">
            Schedule a Free Consultation
          </span>
        </p>

        <div className="max-w-2xl">
          <p className="mb-4">
              <span className="inline-block rounded-full bg-sky-100 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-ctg-navy">
                Get in touch
              </span>
            </p>
            <h2 className="text-balance text-4xl font-bold leading-tight tracking-tight text-ctg-navy sm:text-5xl">
              Ready to Start Your
              <br />
              Australian Journey?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              Book a free consultation with our expert migration agents today.
              We&apos;ll assess your situation and provide clear guidance on the best
              visa pathway for you.
            </p>

            <ul className="mt-10 space-y-5">
              {contactInfo.map(({ title, lines, icon: Icon }) => (
                <li key={title} className="flex items-start gap-3">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-ctg-navy text-white">
                    <span className="size-5">
                      <Icon />
                    </span>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{title}</p>
                    {lines.map((line) => (
                      <p key={line} className="text-sm text-slate-600">
                        {line}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/ctglawyers?fbclid=IwY2xjawRS0f9leHRuA2FlbQIxMABicmlkETFlSmJNdGc1ZFA1ZFlvT1p6c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHpD-On8M145RQxgd8TLhmHPIC8_UNobo_ov_Uw73GzdBMta39dY9bBWa9LIS_aem_6QN6Hw8hhgbqT-FhBi5bpg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-sky-200/70 bg-white/75 px-5 text-sm font-semibold text-ctg-navy shadow-md shadow-sky-200/35 backdrop-blur-md transition-all hover:bg-white"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@CTGLawyersAustralia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-sky-200/70 bg-white/75 px-5 text-sm font-semibold text-ctg-navy shadow-md shadow-sky-200/35 backdrop-blur-md transition-all hover:bg-white"
              >
                YouTube
              </a>
              <a
                href="https://x.com/ctg_lawyers?fbclid=IwY2xjawRS0itleHRuA2FlbQIxMABicmlkETFlSmJNdGc1ZFA1ZFlvT1p6c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHsLDZQtDtfYRKKAvcxC5cw6V_JB37sAG5F9ft95NwE5QKoJaQFIcEVaTiXL-_aem_UOIgzzNEhCzuFOfxCkSbrQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-sky-200/70 bg-white/75 px-5 text-sm font-semibold text-ctg-navy shadow-md shadow-sky-200/35 backdrop-blur-md transition-all hover:bg-white"
              >
                X
              </a>
              <a
                href="https://www.tiktok.com/@ctglawyers?fbclid=IwY2xjawRS0kJleHRuA2FlbQIxMABicmlkETFlSmJNdGc1ZFA1ZFlvT1p6c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHsLDZQtDtfYRKKAvcxC5cw6V_JB37sAG5F9ft95NwE5QKoJaQFIcEVaTiXL-_aem_UOIgzzNEhCzuFOfxCkSbrQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-sky-200/70 bg-white/75 px-5 text-sm font-semibold text-ctg-navy shadow-md shadow-sky-200/35 backdrop-blur-md transition-all hover:bg-white"
              >
                TikTok
              </a>
            </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-xl shadow-sky-200/40 md:mt-14 lg:mt-16">
          <Image
            src="/ctg.png"
            alt="CTG Lawyers consultation banner"
            width={2048}
            height={8198}
            className="h-auto w-full"
            sizes="(min-width: 1280px) 1240px, (min-width: 1024px) 920px, 100vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
