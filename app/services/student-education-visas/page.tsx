import type { Metadata } from "next";
import { MarketingShell } from "@/components/MarketingShell";
import { StudentEducationVisasContent } from "@/components/student-education/StudentEducationVisasContent";

export const metadata: Metadata = {
  title: "Student & Education Visas | CTG Lawyers",
  description:
    "Student Visa (500), Student Guardian (590), Training Visa (407), and education counseling including GS/GTE support. Guidance from CTG Lawyers.",
};

export default function StudentEducationVisasPage() {
  return (
    <MarketingShell>
      <StudentEducationVisasContent />
    </MarketingShell>
  );
}
