import type { Metadata } from "next";
import { MarketingShell } from "@/components/MarketingShell";
import { SkilledMigrationPointsContent } from "@/components/skilled-migration/SkilledMigrationPointsContent";

export const metadata: Metadata = {
  title: "Skilled Migration (Points-Tested) | CTG Lawyers",
  description:
    "Skilled Independent (189), Skilled Nominated (190), Skilled Work Regional (491), PR Regional (191), and skills assessment support. Guidance from CTG Lawyers.",
};

export default function SkilledMigrationPage() {
  return (
    <MarketingShell>
      <SkilledMigrationPointsContent />
    </MarketingShell>
  );
}
