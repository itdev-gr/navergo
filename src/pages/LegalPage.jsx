import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Renders the privacy policy or terms of use from the `legal.{doc}` i18n
// tree, so both languages stay in the locale files.
export default function LegalPage({ doc }) {
  const { t } = useTranslation();
  const sections = t(`legal.${doc}.sections`, { returnObjects: true });

  return (
    <>
      {/* Start Common BreadCrumb */}
      <section>
        <div className="cs-breadcrumb-classic cs_gray_bg cs_center">
          <div className="container">
            <div className="cs-bc-classic-content">
              <div className="cs-page-title">
                <h4>{t(`legal.${doc}.title`)}</h4>
              </div>
              <div className="breadcrumb">
                <ul>
                  <li>
                    <Link to="/" className="cs-text_b_line"><span>{t("contact.breadcrumb.fromHome")}</span></Link>
                  </li>
                  <li>/</li>
                  <li>{t(`legal.${doc}.title`)}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Common BreadCrumb */}

      <div className="cs-section-height"></div>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <p className="cs_light">{t(`legal.${doc}.updated`)}</p>
              <div className="cs-height-30"></div>
              {Array.isArray(sections) &&
                sections.map((section, i) => (
                  <div key={i}>
                    <h4>{section.h}</h4>
                    <div className="cs-height-10"></div>
                    <p>{section.p}</p>
                    <div className="cs-height-30"></div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <div className="cs-section-height"></div>
    </>
  );
}
