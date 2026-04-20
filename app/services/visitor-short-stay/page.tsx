import type { Metadata } from "next";
import { MarketingShell } from "@/components/MarketingShell";
import { VisitorShortStayContent } from "@/components/visitor-short-stay/VisitorShortStayContent";

export const metadata: Metadata = {
  title: "Visitor & Short-Stay Visas | CTG Lawyers",
  description:
    "eVisitor (651), ETA (601), and Visitor visa (600) streams: tourist, business visitor, sponsored family, and frequent traveller. Guidance from CTG Lawyers.",
};

export default function VisitorShortStayPage() {
  return (
    <MarketingShell>
      <VisitorShortStayContent />
    </MarketingShell>
  );
}
