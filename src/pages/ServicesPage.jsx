import {
  BestServicesSection,
  CapabilitySection,
  CtaSection,
  PageHero,
  ProcessSection,
  ServicesSection,
} from "../components/Sections";

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Automation, design, web delivery, and growth content."
        description="From AI-powered automation to creative digital solutions, RVS AI Hub delivers scalable technology services designed to improve efficiency, engagement, productivity, and business growth."
      />
      <BestServicesSection />
      <ServicesSection introOnly />
      <CapabilitySection />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
