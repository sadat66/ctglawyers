function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export function TopBar() {
  return (
    <div className="bg-ctg-navy text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 px-6 py-3 text-xs sm:px-8 sm:text-sm lg:px-10">
        <a
          href="https://wa.me/61424252787"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white/95 transition-opacity hover:opacity-80"
        >
          <PhoneIcon className="shrink-0 opacity-90" />
          <span>WhatsApp: +61 424 252 787</span>
        </a>
        <a
          href="mailto:info@ctglawyers.com.au"
          className="inline-flex items-center gap-2 text-white/95 transition-opacity hover:opacity-80"
        >
          <MailIcon className="shrink-0 opacity-90" />
          <span className="hidden sm:inline">info@ctglawyers.com.au</span>
          <span className="sm:hidden">Email us</span>
        </a>
      </div>
    </div>
  );
}
