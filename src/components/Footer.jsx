import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NEWSLETTER_ENDPOINT = "https://formsubmit.co/ajax/navergozk@gmail.com";

export default function Footer() {
  const { t } = useTranslation();
  const [newsletterStatus, setNewsletterStatus] = useState("idle");

  async function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.elements.newsletterEmail.value;
    setNewsletterStatus("sending");
    try {
      const res = await fetch(NEWSLETTER_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, _subject: "Navergo newsletter subscription" }),
      });
      if (!res.ok) throw new Error("send failed");
      setNewsletterStatus("success");
      e.target.reset();
    } catch {
      setNewsletterStatus("error");
    }
  }
  return (
    <footer>
      <div
        className="cs-constr-footer-container theme-dark"
        style={{
          backgroundColor: "#7c1d1f",
          backgroundImage: "url('/assets/img/footer-bg.png')",
          backgroundBlendMode: "screen",
        }}
      >
        <div className="cs-height-150"></div>

        <div className="cs-constr-footer-content">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-8 cs-lg-bootm-p30">
                <div className="cs-footer-widget">
                  <div>
                    <Link to="/"><img loading="lazy" src="/assets/img/navergo-logo.png" alt="Navergo" width="240" style={{ borderRadius: "6px", border: "1px solid rgba(255,255,255,0.18)", boxShadow: "0 8px 24px rgba(0,0,0,0.25)" }} /></Link>
                    <div className="cs-height-20"></div>
                    <p>{t("about.intro")}</p>
                  </div>
                  <div className="cs-height-30"></div>
                  <div className="cs-footer-newsletter-cert" style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
                    <div style={{ flex: "1 1 220px" }}>
                      <div className="cs-footer-widget-title">
                        <h6>{t("footer.newsletter")}</h6>
                        <div className="cs-height-10"></div>
                      </div>
                      <form className="cs-constr-newsletter" onSubmit={handleNewsletterSubmit}>
                        <input
                          className="cs-newsletter-email"
                          type="email"
                          name="newsletterEmail"
                          aria-label={t("footer.newsletterPlaceholder")}
                          placeholder={t("footer.newsletterPlaceholder")}
                          required
                        />
                        <button className="cs-newsletter-btn cs_center" type="submit" disabled={newsletterStatus === "sending"}>
                          {t("common.cta.subscribe")}
                        </button>
                      </form>
                      {newsletterStatus === "success" && (
                        <p role="status" style={{ marginTop: "8px", color: "#fff" }}>{t("footer.newsletterSuccess")}</p>
                      )}
                      {newsletterStatus === "error" && (
                        <p role="alert" style={{ marginTop: "8px", color: "#ffd6d6" }}>{t("footer.newsletterError")}</p>
                      )}
                    </div>
                    <img loading="lazy"
                      src="/assets/img/iso-9001-certification.png"
                      alt="LRQA Certified — ISO 9001 — UKAS Management Systems"
                      style={{ height: "auto", maxWidth: "120px", flex: "0 0 auto" }}
                    />
                  </div>

                  <div className="cs-height-30"></div>

                  <div className="theme-social">
                    <ul>
                      <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer"><i className="flaticon-facebook-app-symbol"></i></a></li>
                      <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><i className="flaticon-linkedin-big-logo"></i></a></li>
                      <li><a href="https://x.com" target="_blank" rel="noreferrer"><i className="flaticon-twitter"></i></a></li>
                      <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer"><i className="flaticon-instagram"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-6 col-md-4">
                <div className="cs-footer-widget padding-lg-50">
                  <div className="cs-footer-widget-title">
                    <h6>{t("footer.usefulLinks")}</h6>
                    <div className="cs-height-30"></div>
                  </div>
                  <div className="cs-constr-footer-menu">
                    <ul>
                      <li><i className="flaticon-right-arrow themecolor"></i><Link to="/about" className="cs-text_b_line"><span>{t("footer.links.aboutUs")}</span></Link></li>
                      <li><i className="flaticon-right-arrow themecolor"></i><Link to="/service" className="cs-text_b_line"><span>{t("footer.links.ourServices")}</span></Link></li>
                      <li><i className="flaticon-right-arrow themecolor"></i><Link to="/projects" className="cs-text_b_line"><span>{t("footer.links.recentPortfolio")}</span></Link></li>
                      {/* <li><i className="flaticon-right-arrow themecolor"></i> <Link to="/blog" className="cs-text_b_line"><span>NEWS &amp; INSIGHTS</span></Link></li> */}
                      <li><i className="flaticon-right-arrow themecolor"></i><Link to="/contact" className="cs-text_b_line"><span>{t("footer.links.contactUs")}</span></Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-5 col-md-6">
                <div className="cs-footer-widget">
                  <div className="cs-footer-widget-title">
                    <h6>{t("footer.ourServices")}</h6>
                    <div className="cs-height-30"></div>
                  </div>
                  <div className="cs-constr-footer-menu">
                    <ul>
                      <li><i className="flaticon-right-arrow themecolor"></i><Link to="/service-details" className="cs-text_b_line"><span>{t("footer.services.aluminum")}</span></Link></li>
                      <li><i className="flaticon-right-arrow themecolor"></i><Link to="/service-details" className="cs-text_b_line"><span>{t("footer.services.steel")}</span></Link></li>
                      <li><i className="flaticon-right-arrow themecolor"></i><Link to="/service-details" className="cs-text_b_line"><span>{t("footer.services.piping")}</span></Link></li>
                      <li><i className="flaticon-right-arrow themecolor"></i><Link to="/service-details" className="cs-text_b_line"><span>{t("footer.services.consulting")}</span></Link></li>
                      <li><i className="flaticon-right-arrow themecolor"></i><Link to="/service-details" className="cs-text_b_line"><span>{t("footer.services.industrial")}</span></Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-7 col-md-6">
                <div className="cs-footer-widget">
                  <p>{t("sidebar.sayHello")}</p>
                  <a href="mailto:navergozk@gmail.com" className="cs-text-style-h4">navergozk@gmail.com</a>
                  <div className="cs-height-30"></div>
                  <p>{t("sidebar.meetUs")}</p>
                  <div className="cs-height-5"></div>
                  <span className="cs-font-size-20">{t("sidebar.address")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cs-height-130"></div>

        <div className="cs-theme-copyright">
          <div className="cs-footer-copy-text">
            <p>© {new Date().getFullYear()} <Link to="/" className="cs-copyright-link">Navergo.</Link> {t("footer.rights")}</p>
            <p>
              <Link to="/privacy-policy" className="cs-copyright-link">{t("footer.privacy")}</Link>
              {" · "}
              <Link to="/terms" className="cs-copyright-link">{t("footer.terms")}</Link>
            </p>
            <p>{t("footer.credit")} <a href="https://www.itdev.gr" target="_blank" rel="noopener noreferrer" className="cs-copyright-link">ITDEV — www.itdev.gr</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
