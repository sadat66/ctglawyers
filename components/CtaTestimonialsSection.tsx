import Image from "next/image";
import Link from "next/link";

type Testimonial = {
  quote: string;
  name: string;
  visaType: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "CTG Lawyers made my skilled migration process incredibly smooth. Their team was professional, responsive, and guided me through every step.",
    name: "Sarah Johnson",
    visaType: "Skilled Migration Visa",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    quote:
      "I was overwhelmed with the student visa application process, but CTG Lawyers simplified everything. They handled my application with care and speed.",
    name: "Rajesh Patel",
    visaType: "Student Visa",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    quote:
      "The team at CTG Lawyers helped me reunite my husband in Australia. Their attention to detail and genuine care made all the difference.",
    name: "Maria Rodriguez",
    visaType: "Partner Visa",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
  },
  {
    quote:
      "Our employer-sponsored visa had strict timelines. CTG coordinated all documents and delivered a clean application that got approved quickly.",
    name: "Daniel Lee",
    visaType: "Employer Sponsored Visa",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  },
  {
    quote:
      "From consultation to lodgement, they explained every step in plain language. I always felt supported and informed throughout the process.",
    name: "Aisha Khan",
    visaType: "Visitor to Partner Pathway",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
  {
    quote:
      "Excellent service and deep immigration expertise. Their strategy for my case was practical and effective, and my visa was granted successfully.",
    name: "Ahmed Hassan",
    visaType: "Permanent Residency",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
  },
];

function Stars() {
  return <p className="text-sm tracking-[0.15em] text-amber-400">★★★★★</p>;
}

export function CtaTestimonialsSection() {
  return (
    <section id="testimonials" className="bg-slate-50">
      <div className="bg-[radial-gradient(ellipse_at_top,rgba(29,123,184,0.24),transparent_55%),linear-gradient(180deg,#0d5078_0%,#0a4a71_100%)] py-12 md:py-14 lg:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-10">
          <div>
            <h2 className="text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Ready to Start Your
              <br />
              Australian Journey?
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-white/85">
              Book a consultation today and get expert guidance on your visa
              options. Limited consultation slots available this month.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-4 sm:flex-row sm:flex-wrap lg:justify-end">
            <Link
              href="/#contact"
              className="inline-flex h-14 items-center justify-center rounded-xl border border-white/55 bg-white/80 px-8 text-sm font-semibold text-ctg-navy shadow-lg shadow-sky-900/20 backdrop-blur-md transition-all hover:bg-white hover:shadow-xl"
            >
              Book Consultation →
            </Link>
            <a
              href="https://wa.me/610424252787"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-xl border border-white/35 bg-white/15 px-8 text-sm font-semibold text-white shadow-lg shadow-sky-900/20 backdrop-blur-md transition-all hover:bg-white/25 hover:shadow-xl"
            >
              WhatsApp: +61 0424 252 787
            </a>
          </div>
        </div>
      </div>

      <div className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <header className="mb-12 text-center md:mb-14">
            <p className="mb-4">
              <span className="inline-block rounded-full bg-sky-100 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-ctg-navy">
                Testimonials
              </span>
            </p>
            <h3 className="text-balance text-3xl font-bold tracking-tight text-ctg-navy sm:text-4xl">
              What Our Clients Say
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
              Don&apos;t just take our word for it. Here&apos;s what our successful
              clients have to say about their experience with CTG Lawyers.
            </p>
          </header>

          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-8">
            {testimonials.map((item) => (
              <li key={`${item.name}-${item.visaType}`}>
                <article className="h-full rounded-2xl bg-white p-6 shadow-md shadow-slate-200 ring-1 ring-slate-100 sm:p-7">
                  <p className="mb-2 text-3xl font-bold leading-none text-sky-200">
                    &ldquo;
                  </p>
                  <Stars />
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.quote}
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="size-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {item.name}
                      </p>
                      <p className="text-xs text-slate-500">{item.visaType}</p>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
