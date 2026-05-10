import { company, privacySections } from "../content";
import { PageHero } from "../components/Sections";

export function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="Our Privacy Policy"
        description="This page now reflects the fuller legal content published on rvsaihub.com while keeping the existing visual system of the React site."
      />
      <section className="section-white">
        <div className="section-inner narrow-content reveal visible">
          {privacySections.map((section) => (
            <div className="legal-block" key={section.title}>
              <h2>{section.title}</h2>
              {section.body ? (
                <p className="body-copy">
                  {section.body.includes(company.privacyEmail) ? (
                    <>
                      If you have questions, concerns, or requests regarding
                      this Privacy Policy, please reach out to {company.name} at{" "}
                      <a href={`mailto:${company.privacyEmail}`}>{company.privacyEmail}</a>.
                    </>
                  ) : (
                    section.body
                  )}
                </p>
              ) : null}
              {section.bullets ? (
                <div className="check-list legal-list">
                  {section.bullets.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
