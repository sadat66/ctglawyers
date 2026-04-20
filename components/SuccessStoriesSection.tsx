import Image from "next/image";
import Link from "next/link";

const storyImage1 =
  "https://images.unsplash.com/photo-1758691737124-05c5bffe46f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkaXZlcnNlJTIwdGVhbSUyMHByb2Zlc3Npb25hbHMlMjB3b3JraW5nfGVufDF8fHx8MTc3NTQ2MjA2MXww&ixlib=rb-4.1.0&q=80&w=1080";
const storyImage2 =
  "https://images.unsplash.com/photo-1766818437075-4009083a46b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxmYW1pbHklMjByZXVuaW9uJTIwaGFwcHklMjB0b2dldGhlcnxlbnwxfHx8fDE3NzU0NjE2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080";
const storyImage3 =
  "https://images.unsplash.com/photo-1551801746-ce367c4c5d91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxpbnRlcm5hdGlvbmFsJTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NzU0NjE2NDd8MA&ixlib=rb-4.1.0&q=80&w=1080";

type Story = {
  image: string;
  visaType: string;
  duration: string;
  title: string;
  client: string;
  challenge: string;
  solution: string;
  result: string;
};

const stories: Story[] = [
  {
    image: storyImage1,
    visaType: "Skilled Independent Visa (189)",
    duration: "8 months",
    title: "Tech Professional's Skilled Migration Success",
    client: "Software Engineer from India",
    challenge: "Complex work experience documentation across multiple countries.",
    solution:
      "Our team organized and verified records, secured skills assessment guidance, and prepared a strong points-tested application.",
    result:
      "Visa granted with full points score. Client now works at a leading tech company in Sydney.",
  },
  {
    image: storyImage2,
    visaType: "Partner Visa (820/801)",
    duration: "14 months",
    title: "Family Reunion After Visa Refusal",
    client: "Partner Visa from Philippines",
    challenge:
      "Previous refusal and insufficient relationship evidence in the first application.",
    solution:
      "We rebuilt the case strategy with detailed declarations, timeline evidence, and compliance-focused submissions.",
    result:
      "Partner visa approved and family reunited in Australia with full work rights.",
  },
  {
    image: storyImage3,
    visaType: "Employer Sponsored Visa (482)",
    duration: "6 months",
    title: "Critical Skills Pathway to Long-Term Residency",
    client: "Mechanical Engineer from UK",
    challenge:
      "Tight employer deadlines and occupation-specific nomination requirements.",
    solution:
      "We coordinated with employer and applicant, handled nomination paperwork, and managed end-to-end lodgement.",
    result:
      "482 visa approved on schedule with a clear roadmap toward permanent residency.",
  },
];

export function SuccessStoriesSection() {
  return (
    <section
      id="success-stories"
      className="border-t border-slate-200/70 bg-slate-50 py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <header className="mb-12 text-center md:mb-14">
          <p className="mb-4">
            <span className="inline-block rounded-full bg-sky-100 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-ctg-navy">
              Success stories
            </span>
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-ctg-navy sm:text-4xl">
            Real Success Stories from Real Clients
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            See how we&apos;ve helped clients overcome challenges and achieve
            their Australian immigration goals.
          </p>
        </header>

        <ul className="space-y-8 lg:space-y-10">
          {stories.map((story, idx) => (
            <li key={story.title}>
              <article className="overflow-hidden rounded-2xl bg-white shadow-md shadow-slate-200 ring-1 ring-slate-100">
                <div
                  className={`grid gap-0 md:grid-cols-2 ${
                    idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative min-h-72 md:min-h-80">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>

                  <div className="flex flex-col justify-center p-6 md:p-9 lg:p-10">
                    <div className="mb-4 flex flex-wrap items-center gap-3 text-xs">
                      <span className="rounded-full bg-sky-100 px-3 py-1 font-semibold text-ctg-navy">
                        {story.visaType}
                      </span>
                      <span className="text-slate-500">{story.duration}</span>
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                      {story.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500">{story.client}</p>

                    <div className="mt-5 space-y-4 text-sm leading-relaxed">
                      <p className="text-slate-700">
                        <span className="font-bold text-slate-900">Challenge: </span>
                        {story.challenge}
                      </p>
                      <p className="text-slate-700">
                        <span className="font-bold text-slate-900">Our Solution: </span>
                        {story.solution}
                      </p>
                      <p className="text-slate-700">
                        <span className="font-bold text-slate-900">Result: </span>
                        {story.result}
                      </p>
                    </div>

                    <Link
                      href="#contact"
                      className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-ctg-navy transition-colors hover:text-ctg-sky"
                    >
                      Start Your Success Story
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
