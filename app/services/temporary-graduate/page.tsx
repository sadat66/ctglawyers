import type { Metadata } from "next";
import { MarketingShell } from "@/components/MarketingShell";
import { TemporaryGraduateContent } from "@/components/temporary-graduate/TemporaryGraduateContent";

export const metadata: Metadata = {
  title: "Temporary Graduate Visa (Subclass 485) | CTG Lawyers",
  description:
    "Post-study work in Australia: Subclass 485 streams, eligibility themes, and pathways to sponsorship or skilled migration. Guidance from CTG Lawyers.",
};

export default function TemporaryGraduatePage() {
  return (
    <MarketingShell>
      <TemporaryGraduateContent />
    </MarketingShell>
  );
}
