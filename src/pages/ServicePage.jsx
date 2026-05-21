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
                        <img src={serviceImages[idx]} alt="" />
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

      {/* Start Testimonial */}
      <section>
        <div className="testi-wrapper themecolor-bg-primary">
          <div className="cs-height-175"></div>
          <div className="container">
            <div className="row">
              <div className="swiper home1-testi-slider1">

                <div className="swiper-wrapper">
                  {["1", "2"].map((id) => (
                    <div className="swiper-slide" key={id}>
                      <div className="testi-slider-item-wrap">
                        <div className="testi-user">
                          <img src="/assets/img/avatar-testi.png" alt="" />
                          <h6>{t(`service.testimonials.${id}.name`)}</h6>
                          <p>{t(`service.testimonials.${id}.location`)}</p>
                        </div>
                        <div className="testi-border">
                          <svg width="48" height="236" viewBox="0 0 48 236" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5" d="M1 0V60.9809H46.3727L1 99.5681V236" stroke="#C1C1C1"/>
                          </svg>
                        </div>
                        <div className="testi-content">
                          <h4>{t(`service.testimonials.${id}.quote`)}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="testi-pagi-wrap">
            <div className="testi-pagination swiper-pagination-vertical"></div>
          </div>
          <div className="cs-height-175"></div>
        </div>
      </section>
      {/* End Testimonial */}

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
