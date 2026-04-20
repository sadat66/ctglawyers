import type { Metadata } from "next";
import { MarketingShell } from "@/components/MarketingShell";
import { EmployerSponsoredContent } from "@/components/employer-sponsored/EmployerSponsoredContent";

export const metadata: Metadata = {
  title: "Employer-Sponsored Visas | CTG Lawyers",
  description:
    "TSS 482, ENS 186, regional 494, and DAMA pathways. Employer nomination and sponsorship guidance from CTG Lawyers.",
};

export default function EmployerSponsoredPage() {
  return (
    <MarketingShell>
      <EmployerSponsoredContent />
    </MarketingShell>
  );
}
