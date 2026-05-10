import { Link } from "react-router-dom";
import {
  aboutIntro,
  aboutPillars,
  bestServices,
  company,
  contactOptions,
  featuredCapabilities,
  hero,
  serviceApproach,
  services,
  whyChooseItems,
} from "../content";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-photo-overlay"></div>
      <div className="hero-gradient"></div>
      <div className="hero-grid"></div>
      <div className="hero-inner reveal visible">
        <div className="hero-badge">
          <span></span> {hero.badge}
        </div>
        <h1>{hero.title}</h1>
        <p className="hero-sub">{hero.description}</p>
        <div>
          <a
            href={hero.primaryCta.href}
            className="btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            {hero.primaryCta.label}
          </a>
          <Link to={hero.secondaryCta.href} className="btn-outline">
            {hero.secondaryCta.label}
          </Link>
        </div>
        <div className="trust-bar">
          <span className="trust-label">{hero.trustLabel}</span>
          <div className="trust-items">
            {hero.trustItems.map((item) => (
              <span className="trust-item" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutPreviewSection() {
  return (
    <section className="section-white">
      <div className="section-inner">
        <div className="reveal visible">
          <div className="section-eyebrow">{aboutIntro.eyebrow}</div>
          <h2>
            Technology that is scalable,
            <br />
            <span>intuitive, and built to last.</span>
          </h2>
          <p className="section-sub">{aboutIntro.description}</p>
        </div>
        <div className="content-grid reveal visible">
          <article className="content-card">
            <div className="section-eyebrow">Who We Are</div>
            <h2>Innovation, collaboration, and quality in every build.</h2>
            <p className="body-copy">{aboutIntro.story}</p>
          </article>
          <article className="content-card">
            <div className="section-eyebrow">Why It Matters</div>
            <h2>We help organizations engage, operate, and grow.</h2>
            <p className="body-copy">
              Our work is grounded in scalable software, dependable delivery,
              and thoughtful user experiences that support long-term business
              value instead of one-off launches.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection({ introOnly = false }) {
  return (
    <section className="section-light">
      <div className="section-inner">
        <div className="reveal visible">
          <div className="section-eyebrow">Services</div>
          <h2>
            End-to-end digital delivery.
            <br />
            <span>Built for growth, automation, and brand clarity.</span>
          </h2>
          <p className="section-sub">
            The live RVS site spans AI workflows, UX, websites, and content
            production. This React version keeps the same theme while bringing
            that broader service story into one consistent experience.
          </p>
        </div>
        <div className="cards-grid reveal visible">
          {services.map((service) => (
            <article className="engine-card" key={service.slug}>
              <span className={`card-status ${service.statusClass}`}>
                {service.status}
              </span>
              <div className="card-vertical">{service.vertical}</div>
              <div className="card-title">{service.title}</div>
              <div className="card-focus">{service.focus}</div>
              <div className="card-divider"></div>
              <p className="card-promise">{service.summary}</p>
              <Link className="card-link" to={`/services/${service.slug}`}>
                {introOnly ? "Learn More" : "View Service Details"}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BestServicesSection() {
  return (
    <section className="section-white">
      <div className="section-inner">
        <div className="reveal visible">
          <div className="section-eyebrow">Best Services</div>
          <h2>
            Intelligence services built for
            <br />
            <span>hospitality, healthcare, and logistics leaders.</span>
          </h2>
          <p className="section-sub">
            These featured DecisionIntel services are designed for organizations
            that need sharper weekly decisions, better operational visibility,
            and more confident leadership action in high-stakes environments.
          </p>
        </div>
        <div className="cards-grid reveal visible">
          {bestServices.map((service) => (
            <article className="engine-card" key={service.slug}>
              <span className={`card-status ${service.statusClass}`}>
                {service.status}
              </span>
              <div className="card-vertical">{service.vertical}</div>
              <div className="card-title">{service.title}</div>
              <div className="card-focus">{service.focus}</div>
              <div className="card-divider"></div>
              <p className="card-promise">{service.summary}</p>
              <Link className="card-link" to={`/services/${service.slug}`}>
                View Service Details
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CapabilitySection() {
  return (
    <section className="section-white">
      <div className="section-inner">
        <div className="reveal visible">
          <div className="section-eyebrow">Capabilities</div>
          <h2>
            One team across automation, design, and delivery.
            <br />
            <span>Structured for modern digital work.</span>
          </h2>
        </div>
        <div className="content-grid reveal visible">
          {featuredCapabilities.map((item) => (
            <article className="content-card" key={item.title}>
              <div className="section-eyebrow">Focus Area</div>
              <h2>{item.title}</h2>
              <p className="body-copy">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="section-white">
      <div className="section-inner">
        <div className="reveal visible">
          <div className="section-eyebrow">How We Work</div>
          <h2>
            A practical delivery rhythm.
            <br />
            <span>From discovery to measurable improvement.</span>
          </h2>
          <p className="section-sub">
            We use a simple, collaborative process that keeps strategy,
            execution, and refinement connected from the start.
          </p>
        </div>
        <div className="process-grid reveal visible">
          {serviceApproach.map((step) => (
            <article className="process-step" key={step.number}>
              <div className="step-number">{step.number}</div>
              <div className="step-day">{step.day}</div>
              <div className="step-title">{step.title}</div>
              <p className="step-desc">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseSection() {
  return (
    <section className="section-navy">
      <div className="section-inner">
        <div className="reveal visible">
          <div className="section-eyebrow section-eyebrow-light">Why RVS</div>
          <h2 className="heading-light">
            Solutions that are built to perform.
            <br />
            <span>Designed around real business goals.</span>
          </h2>
          <p className="section-sub section-sub-light">
            The live site repeatedly emphasizes responsive delivery, modern
            tooling, clear navigation, security, scalability, and business
            alignment. We turned that into a concise trust section here.
          </p>
        </div>
        <div className="compliance-grid reveal visible">
          {whyChooseItems.map((item) => (
            <article className="compliance-item" key={item}>
              <div className="compliance-title">{item}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactOptionsSection() {
  return (
    <section className="section-light">
      <div className="section-inner">
        <div className="content-grid reveal visible">
          <article className="content-card">
            <div className="section-eyebrow">Connect With Us</div>
            <h2>Send us a message.</h2>
            <p className="body-copy">
              Fill out the live RVS contact form and we will get back to you as
              soon as possible.
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
          <article className="content-card">
            <div className="section-eyebrow">How Can We Help?</div>
            <h2>Technology needs, partnerships, and support.</h2>
            <div className="check-list">
              {contactOptions.map((item) => (
                <p key={item.title}>
                  <strong>{item.title}:</strong> {item.description}
                </p>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="cta-band">
      <div className="cta-band-inner reveal visible">
        <div className="section-eyebrow section-eyebrow-center section-eyebrow-faded">
          Ready to Start
        </div>
        <h2>
          Build with confidence.
          <br />
          <span>Launch with a stronger digital foundation.</span>
        </h2>
        <p>
          Ready to transform your business with innovative technology solutions?
          We are here to help you succeed.
        </p>
        <a
          href={company.calendly}
          className="btn-white"
          target="_blank"
          rel="noreferrer"
        >
          Book a Demo
        </a>
        <p className="cta-scarcity">
          Software, automation, design, and content support in one delivery
          flow
        </p>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, description, dark = false }) {
  return (
    <section className={dark ? "page-hero page-hero-dark" : "page-hero"}>
      <div className="section-inner">
        <div className="reveal visible">
          <div className={dark ? "section-eyebrow section-eyebrow-light" : "section-eyebrow"}>
            {eyebrow}
          </div>
          <h1 className={dark ? "page-hero-title page-hero-title-light" : "page-hero-title"}>
            {title}
          </h1>
          <p className={dark ? "page-hero-copy page-hero-copy-light" : "page-hero-copy"}>
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export function AboutPillarsSection() {
  return (
    <section className="section-white">
      <div className="section-inner">
        <div className="content-grid reveal visible">
          {aboutPillars.map((item) => (
            <article className="content-card" key={item.title}>
              <div className="section-eyebrow">{item.title}</div>
              <h2>{item.title}</h2>
              <p className="body-copy">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
