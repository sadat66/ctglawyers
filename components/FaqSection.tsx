"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "How long does the visa application process take?",
    answer:
      "Processing times vary depending on the visa type. Visitor visas can take 3-6 weeks, while skilled migration visas typically take 6-12 months. We work diligently to ensure your application is submitted correctly to avoid delays.",
  },
  {
    question: "What is the success rate of visa applications?",
    answer:
      "Our team maintains a high success rate through careful eligibility assessment, complete documentation, and compliance-focused submissions tailored to Department requirements.",
  },
  {
    question: "Do I need to hire a migration agent?",
    answer:
      "You can apply independently, but a registered migration agent can reduce errors, improve application quality, and guide you through complex cases or changing policy requirements.",
  },
  {
    question: "How much does your service cost?",
    answer:
      "Fees depend on visa type and case complexity. We provide transparent pricing after your initial consultation so you know exactly what is included.",
  },
  {
    question: "Can you help if my visa application was refused?",
    answer:
      "Yes. We review refusal reasons, assess available options, and create a strategy for appeal, review, or re-application based on your circumstances.",
  },
  {
    question: "What documents do I need for a visa application?",
    answer:
      "Typical documents include identity records, financial evidence, employment or study documents, relationship evidence (if applicable), and health/character checks.",
  },
  {
    question: "Can my family come with me to Australia?",
    answer:
      "Many visa categories allow eligible dependants. We assess who can be included and prepare all supporting documentation for family members.",
  },
  {
    question: "What is MARN and why is it important?",
    answer:
      "MARN stands for Migration Agent Registration Number. It confirms your representative is officially registered and authorized to provide Australian migration advice.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" className="border-t border-slate-200/70 bg-slate-50 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-10">
        <header className="mb-10 text-center md:mb-12">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-ctg-navy sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
            Find answers to common questions about Australian visa applications.
          </p>
        </header>

        <ul className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <li key={item.question}>
                <article className="overflow-hidden rounded-xl bg-sky-50/40 shadow-sm shadow-slate-300/40 ring-1 ring-sky-200/80">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-6 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span className="text-sm font-semibold text-slate-800 sm:text-base">
                      {item.question}
                    </span>
                    <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-ctg-navy text-white">
                      {isOpen ? (
                        <svg
                          viewBox="0 0 24 24"
                          className="size-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden
                        >
                          <path d="M6 12h12" />
                        </svg>
                      ) : (
                        <svg
                          viewBox="0 0 24 24"
                          className="size-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      )}
                    </span>
                  </button>

                  {isOpen ? (
                    <div className="border-t border-sky-200/80 px-5 py-6">
                      <p className="text-sm leading-relaxed text-slate-600">
                        {item.answer}
                      </p>
                    </div>
                  ) : null}
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
