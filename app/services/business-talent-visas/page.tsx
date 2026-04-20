import type { Metadata } from "next";
import { MarketingShell } from "@/components/MarketingShell";
import { BusinessTalentVisasContent } from "@/components/business-talent/BusinessTalentVisasContent";

export const metadata: Metadata = {
  title: "Business & Talent Visas | CTG Lawyers",
  description:
    "Global Talent 858, Business Innovation & Investment 188, and Resident Return 155/157. Guidance from CTG Lawyers.",
};

export default function BusinessTalentVisasPage() {
  return (
    <MarketingShell>
      <BusinessTalentVisasContent />
    </MarketingShell>
  );
}
