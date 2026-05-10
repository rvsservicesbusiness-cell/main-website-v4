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
        description="The live RVS site covers a broad service mix. This page brings those offerings together inside the existing React theme with dedicated detail pages for each service."
      />
      <BestServicesSection />
      <ServicesSection introOnly />
      <CapabilitySection />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
