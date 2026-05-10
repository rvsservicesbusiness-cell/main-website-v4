import { company } from "../content";
import { ContactOptionsSection, CtaSection, PageHero } from "../components/Sections";

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Ready to transform your business with innovative technology solutions?"
        description="We are here to help with all your technology needs and innovative solutions. Reach out for general inquiries, partnerships, or technical support."
      />
      <ContactOptionsSection />
      <section className="section-white">
        <div className="section-inner">
          <div className="content-grid reveal visible">
            <article className="content-card">
              <div className="section-eyebrow">Email</div>
              <h2>{company.email}</h2>
              <p className="body-copy">
                Prefer direct outreach? Email the team and we will get back to
                you within 24 hours.
              </p>
              <a className="btn-primary btn-inline" href={`mailto:${company.email}`}>
                Email RVS Info Tech
              </a>
            </article>
            <article className="content-card">
              <div className="section-eyebrow">Book a Demo</div>
              <h2>Schedule time with the RVS team.</h2>
              <p className="body-copy">
                Use the shared Calendly link to book a demo and talk through
                your project, workflow, or support needs directly.
              </p>
              <a
                className="btn-primary btn-inline"
                href={company.calendly}
                target="_blank"
                rel="noreferrer"
              >
                Book a Demo
              </a>
            </article>
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
