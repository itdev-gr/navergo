import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ClientLogos from "../components/ClientLogos";
import ContactForm from "../components/ContactForm";
import ConsentMap from "../components/ConsentMap";

export default function ContactPage() {
  const { t } = useTranslation();
  return (
    <>
      {/* Start Common BreadCrumb */}
      <section>
        <div className="cs-breadcrumb-wrap theme-dark" data-src="/assets/img/breadcrumb.jpg">
          <div className="container">
            <div className="row cs_center">
              <div className="cs-bread-page-title-area">
                <div className="cs-page-title">
                  <h2 className="cs_white_color">{t("contact.breadcrumb.title")}</h2>
                </div>
                <div className="breadcrumb">
                  <ul>
                    <li>
                      <Link to="/" className="cs-text_b_line"><span>{t("contact.breadcrumb.fromHome")}</span></Link>
                    </li>
                    <li>/</li>
                    <li>{t("contact.breadcrumb.current")}</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* End Common BreadCrumb */}

      {/* Start Contact Form & Map */}
      <section>
        <div className="cs-contact-map-and-form">
          <div className="container-fluid">
            <div className="row cs_center" data-src="/assets/img/pattern-bg-for-light.png">

              <div className="col-xl-7 col-lg-6 col-md-12">
                <ConsentMap />
              </div>

              <div className="col-xl-5 col-lg-6 col-md-12">
                <div className="cs-contact-form-wrap">
                  <div className="position-relative" data-aos="fade-up" data-aos-duration="500">
                    <h2 className="cs-heading">{t("contact.form.heading")}</h2>
                    <span className="cs-text-style-h1 cs-animated-text">{t("contact.form.animatedText")}</span>
                  </div>

                  <div className="cs-height-35"></div>
                  <ContactForm />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* End Contact Form & Map */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start Client Area Full Width */}
      <ClientLogos />
      {/* End Client Area Full Width */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}
    </>
  );
}
