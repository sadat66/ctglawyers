import type { ReactNode } from "react";

export function ServicePageSection({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-slate-200/80 bg-white py-14 md:py-16 lg:scroll-mt-32"
    >
      <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-10">
        <p className="text-xs font-bold uppercase tracking-widest text-ctg-sky">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-ctg-navy sm:text-3xl">
          {title}
        </h2>
        <p className="mt-3 text-base font-medium text-slate-700">{subtitle}</p>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
          {children}
        </div>
      </div>
    </section>
  );
}
