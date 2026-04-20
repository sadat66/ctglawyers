import { ContactSection } from "@/components/ContactSection";
import { CtaTestimonialsSection } from "@/components/CtaTestimonialsSection";
import { FaqSection } from "@/components/FaqSection";
import { Hero } from "@/components/Hero";
import { MarketingShell } from "@/components/MarketingShell";
import { ProcessSection } from "@/components/ProcessSection";
import { SuccessStoriesSection } from "@/components/SuccessStoriesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustFeatures } from "@/components/TrustFeatures";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";

export default function Home() {
  return (
    <MarketingShell>
      <Hero />
      <TrustFeatures />

      <ServicesSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <SuccessStoriesSection />
      <CtaTestimonialsSection />
      <FaqSection />
      <ContactSection />
    </MarketingShell>
  );
}
