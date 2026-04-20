import type { Metadata } from "next";
import { MarketingShell } from "@/components/MarketingShell";
import { FamilyPartnerVisasContent } from "@/components/family-partner/FamilyPartnerVisasContent";

export const metadata: Metadata = {
  title: "Family & Partner Visas | CTG Lawyers",
  description:
    "Partner 820/801 and 309/100, prospective marriage 300, parent and child visas. Family migration guidance from CTG Lawyers.",
};

export default function FamilyPartnerVisasPage() {
  return (
    <MarketingShell>
      <FamilyPartnerVisasContent />
    </MarketingShell>
  );
}
