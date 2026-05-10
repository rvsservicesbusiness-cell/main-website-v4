import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { allServices, company } from "../content";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">{company.name}</div>
          <p className="footer-desc">
            {company.tagline}
            <br />
            Scalable digital solutions across automation, design, web
            development, content production, and DecisionIntel verticals.
          </p>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <p>{company.location}</p>
          <a href={company.calendly} target="_blank" rel="noreferrer">
            Book a Demo
          </a>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          {allServices.map((service) => (
            <NavLink key={service.slug} to={`/services/${service.slug}`}>
              {service.title}
            </NavLink>
          ))}
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
          <NavLink to="/terms-and-conditions">Terms &amp; Conditions</NavLink>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">© 2026 {company.name}. All rights reserved.</p>
        <p className="footer-compliance">
          <strong>{company.name}</strong> is presented as a U.S.-based
          technology firm specializing in scalable digital solutions, custom
          software, web and mobile applications, ongoing support, and
          vertical-specific intelligence services.
        </p>
      </div>
    </footer>
  );
}

export function SiteLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <ScrollToTop />
      <nav className="site-nav">
        <div className="nav-shell">
          <NavLink to="/" className="nav-brand">
            <span className="dot"></span>
            {company.name}
          </NavLink>
          <div className="nav-left">
            <button
              type="button"
              className={`nav-toggle ${isMenuOpen ? "open" : ""}`}
              aria-expanded={isMenuOpen}
              aria-controls="site-menu"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div id="site-menu" className={`nav-links ${isMenuOpen ? "open" : ""}`}>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <a
                href={company.calendly}
                className="nav-cta nav-cta-mobile"
                target="_blank"
                rel="noreferrer"
              >
                Book a Demo
              </a>
            </div>
          </div>
          <a
            href={company.calendly}
            className="nav-cta nav-cta-desktop"
            target="_blank"
            rel="noreferrer"
          >
            Book a Demo
          </a>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}
