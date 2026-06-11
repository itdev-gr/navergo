import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ClientLogos from "../components/ClientLogos";

export default function ServicePage() {
  const { t } = useTranslation();

  const serviceItems = ["01", "02", "03", "04", "05", "06"];
  // Match the homepage service tiles 1:1 — same real shipyard photos.
  const serviceImages = [
    "/assets/img/service/steelwork/steelwork-01.jpg",
    "/assets/img/service/aluminum/aluminum-03.jpg",
    "/assets/img/service/piping/piping-03.jpg",
    "/assets/img/service/steelwork/steelwork-04.jpg",
    "/assets/img/service/steelwork/steelwork-02.jpg",
    "/assets/img/service/piping/piping-01.jpg",
  ];

  return (
    <>
      {/* Start Common BreadCrumb */}
      <section>
        <div className="cs-breadcrumb-wrap theme-dark" data-src="/assets/img/breadcrumb.jpg">
          <div className="container">
            <div className="row cs_center">
              <div className="cs-bread-page-title-area">
                <div className="cs-page-title">
                  <h2 className="cs_white_color">{t("service.breadcrumb.title")}</h2>
                </div>
                <div className="breadcrumb">
                  <ul>
                    <li>
                      <Link to="/" className="cs-text_b_line"><span>{t("service.breadcrumb.fromHome")}</span></Link>
                    </li>
                    <li>/</li>
                    <li>{t("service.breadcrumb.current")}</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* End Common BreadCrumb */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start Where We Work */}
      <section>
        <div className="cs-working-process-wrap themecolor-bg theme-dark">
          <div className="cs-height-100"></div>
          <div className="container">
            <div className="cs-heading-with-animation text-center max-width-700 m-auto">
              <h2 className="cs-heading cs_white_color">{t("service.delivery.heading")}</h2>
            </div>
            <div className="cs-height-50"></div>
            <div className="row">
              {["1", "2", "3"].map((id, idx) => (
                <div className="col-xl-4 col-md-6" key={id}>
                  <div className="cs-process-item" data-aos="fade-top" data-aos-duration={300 + idx * 200}>
                    <div className="cs-wp-icon">
                      <img loading="lazy" src={`/assets/img/${["one", "two", "three"][idx]}.svg`} alt="" />
                    </div>
                    <h6>{t(`service.delivery.items.${id}.title`)}</h6>
                    <p>{t(`service.delivery.items.${id}.description`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cs-height-100"></div>
        </div>
      </section>
      {/* End Where We Work */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start Service Section */}
      <section>
        <div className="services-wrapper lg-gutter-control">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-md-6">
                <div className="cs-heading-with-animation">
                  <h2 className="cs-heading">{t("service.intro.heading")}</h2>
                  <span className="cs-text-style-h1 cs-animated-text">{t("service.intro.animatedText")}</span>
                </div>
                <div className="cs-height-20"></div>
                <p>{t("service.intro.paragraph")}</p>
                <div className="cs-height-30"></div>
              </div>
              {serviceItems.map((key, idx) => (
                <div className="col-xl-4 col-md-6" key={key}>
                  <div className="service-item" data-aos="fade-up" data-aos-duration={300 + idx * 100}>
                    <div className="srv-img">
                      <Link to="/service-details">
                        <img loading="lazy" src={serviceImages[idx]} alt={t(`service.items.${key}.title`)} />
                      </Link>
                    </div>
                    <div className="services-content">
                      <Link to="/service-details" className="the-srv-title cs-text-style-h6">{t(`service.items.${key}.title`)}</Link>
                      <h4 className="the-plus">+</h4>
                      <div className="srv-the-hover">
                        <p>{t(`service.items.${key}.description`)}</p>
                        <Link className="cs-primary-btn cs-color-black cs_white_color-bg cs-height-50 cs-width-160" to="/service-details"><span>{t("common.cta.moreDetails")}</span></Link>
                      </div>
                    </div>
                  </div>
                  <div className="cs-height-30"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* End Service Section */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}


      {/* Start Clients */}
      <ClientLogos />
      {/* End Clients */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start CTA */}
      <section>
        <div className="cta-wrap themecolor-bg theme-dark">
          <div className="container">
            <div className="cs-height-65"></div>
            <div className="row">
              <div className="cs-cta-content">

                <div className="title max-width-800">
                  <h2 data-aos="fade-up" data-aos-duration="500">{t("service.cta.heading")}</h2>
                </div>
                <Link data-aos="fade-left" data-aos-duration="700" className="cs-primary-btn secondary-btn cs_white_color-bg cs-color-white cs-width-220 cs-height-70" to="/contact"><span>{t("common.cta.contactUs")}</span></Link>
              </div>
            </div>
            <div className="cs-height-65"></div>
          </div>
        </div>
      </section>
      {/* End CTA */}
    </>
  );
}
