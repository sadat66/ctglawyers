"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About Us" },
  { href: "#testimonials", label: "Testimonials" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/90 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5 sm:px-8 lg:px-10">
        <Link
          href="#top"
          className="flex shrink-0 items-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/LOGO.jpeg"
            alt="CTG Lawyers"
            width={220}
            height={64}
            className="h-11 w-auto max-w-[200px] object-contain object-left sm:h-12 sm:max-w-[240px]"
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-zinc-800 transition-colors hover:text-ctg-navy"
            >
              {label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-sky-200/30 bg-ctg-navy/90 px-6 text-sm font-semibold text-white shadow-lg shadow-sky-300/25 backdrop-blur-md transition-all hover:bg-ctg-navy hover:shadow-xl"
          >
            Book Consultation
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-sky-200/30 bg-ctg-navy/90 px-4 text-xs font-semibold text-white shadow-md shadow-sky-300/25 backdrop-blur-md"
          >
            Book
          </Link>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-sky-200/70 bg-white/70 text-ctg-navy shadow-md shadow-sky-200/40 backdrop-blur-md"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-zinc-100 bg-white px-6 py-5 sm:px-8 lg:hidden"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-zinc-800"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-2 inline-flex h-12 items-center justify-center rounded-xl border border-sky-200/30 bg-ctg-navy/90 px-6 text-center text-sm font-semibold text-white shadow-lg shadow-sky-300/25 backdrop-blur-md transition-all hover:bg-ctg-navy"
              onClick={() => setOpen(false)}
            >
              Book Consultation
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
