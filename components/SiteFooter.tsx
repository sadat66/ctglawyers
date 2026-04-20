export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/90 bg-slate-50/90">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-14 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-ctg-navy">
              CTG Lawyers
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">
              Suite 04, 108 Haldon St., Lakemba, Sydney NSW 2195, Australia
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Quick links</p>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
              <li>
                <a href="/#services" className="transition-colors hover:text-ctg-navy">
                  Services
                </a>
              </li>
              <li>
                <a href="/#about" className="transition-colors hover:text-ctg-navy">
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#success-stories"
                  className="transition-colors hover:text-ctg-navy"
                >
                  Success stories
                </a>
              </li>
              <li>
                <a href="/#faq" className="transition-colors hover:text-ctg-navy">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/#contact" className="transition-colors hover:text-ctg-navy">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Connect</p>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
              <li>
                <a
                  href="https://wa.me/61424252787"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-ctg-navy"
                >
                  WhatsApp +61 424 252 787
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ctglawyers.com.au"
                  className="transition-colors hover:text-ctg-navy"
                >
                  info@ctglawyers.com.au
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-slate-200/80 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} CTG Lawyers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
