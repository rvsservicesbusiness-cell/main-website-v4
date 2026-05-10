import { Navigate, useParams } from "react-router-dom";
import { CtaSection, PageHero, ProcessSection } from "../components/Sections";
import { allServices } from "../content";

export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = allServices.find((item) => item.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <PageHero
        eyebrow={service.vertical}
        title={service.title}
        description={service.detailBody}
      />
      <section className="section-white">
        <div className="section-inner">
          <div className="content-grid reveal visible">
            <article className="content-card">
              <div className={`card-status ${service.statusClass}`}>{service.status}</div>
              <h2>{service.detailHeading}</h2>
              <p className="body-copy">{service.summary}</p>
            </article>
            <article className="content-card">
              <div className="section-eyebrow">What We Deliver</div>
              <h2>{service.focus}</h2>
              <div className="check-list">
                {service.highlights.map((highlight) => (
                  <p key={highlight}>{highlight}</p>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section-light">
        <div className="section-inner">
          <div className="reveal visible">
            <div className="section-eyebrow">Service Modules</div>
            <h2>
              Built to match your exact workflow.
              <br />
              <span>Delivered as a tailored engagement.</span>
            </h2>
          </div>
          <div className="content-grid reveal visible">
            {service.offerings.map((offering) => (
              <article className="content-card" key={offering}>
                <div className="section-eyebrow">Included</div>
                <h2>{offering}</h2>
                <p className="body-copy">
                  This service module is part of the live RVS offering set and
                  can be tailored around your business goals, audience, systems,
                  and delivery requirements.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ProcessSection />
      <CtaSection />
    </>
  );
}
