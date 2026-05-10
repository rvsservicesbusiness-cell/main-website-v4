import { company, termsSections } from "../content";
import { PageHero } from "../components/Sections";

export function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms & Conditions"
        title="Our Terms & conditions."
        description="This page replaces the earlier placeholder terms with the broader RVS Info Tech terms and conditions currently represented on the live website."
      />
      <section className="section-light">
        <div className="section-inner narrow-content reveal visible">
          {termsSections.map((section) => (
            <div className="legal-block" key={section.title}>
              <h2>{section.title}</h2>
              {section.body ? (
                <p className="body-copy">
                  {section.body.includes(company.email) ? (
                    <>
                      For questions or notices regarding these Terms, please
                      contact us at{" "}
                      <a href={`mailto:${company.email}`}>{company.email}</a>.
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
