import {
  AboutPillarsSection,
  PageHero,
  ProcessSection,
  WhyChooseSection,
} from "../components/Sections";
import { aboutIntro } from "../content";

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutIntro.eyebrow}
        title={aboutIntro.title}
        description={aboutIntro.description}
      />
      <AboutPillarsSection />
      <ProcessSection />
      <WhyChooseSection />
    </>
  );
}
