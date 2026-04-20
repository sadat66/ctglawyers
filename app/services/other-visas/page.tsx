import type { Metadata } from "next";
import { MarketingShell } from "@/components/MarketingShell";
import { OtherVisasContent } from "@/components/other-visas/OtherVisasContent";

export const metadata: Metadata = {
  title: "Other Visas & Bespoke Advice | CTG Lawyers",
  description:
    "Visa pathways beyond the main categories: browse CTG Lawyers services or get help with bridging, waivers, and complex cases.",
};

export default function OtherVisasPage() {
  return (
    <MarketingShell>
      <OtherVisasContent />
    </MarketingShell>
  );
}
