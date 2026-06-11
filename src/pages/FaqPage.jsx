import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ClientLogos from "../components/ClientLogos";

export default function FaqPage() {
  const { t } = useTranslation();

  const faqItems = ["q1", "q2", "q3", "q4", "q5"];
  const journeySlides = [
    "slide1",
    "slide2",
    "slide3",
    "slide4",
    "slide5",
    "slide6",
    "slide1",
    "slide3",
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
                  <h2 className="cs_white_color">{t("faq.breadcrumb.title")}</h2>
                </div>
                <div className="breadcrumb">
                  <ul>
                    <li>
                      <Link to="/" className="cs-text_b_line"><span>{t("faq.breadcrumb.fromHome")}</span></Link>
                    </li>
                    <li>/</li>
                    <li>{t("faq.breadcrumb.current")}</li>
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

      <section>
        <div className="faq-wrap">
          <div className="container-fluid">
            <div className="row cs-faq-content-wrap cs_center">
              <div className="col-xl-6 col-md-12">
                <div className="faq-img gap-3 cs-flex-start">
                  <div className="animate-img-wrap">
                    <div className="reveal"></div>
                    <img loading="lazy" className="the-animated-image" src="/assets/img/faq01.jpg" alt="Ship repair works at the Navergo yard" />
                  </div>
                  <div className="animate-img-wrap">
                    <div className="reveal"></div>
                    <img loading="lazy" className="the-animated-image" src="/assets/img/faq02.jpg" alt="Vessel maintenance in dry dock" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-12 cs-flex-end">
                <div className="cs_accordian light-border-accordian">
                  {faqItems.map((key, idx) => (
                    <div className="cs_accordian_item cs_color_1" key={key}>
                      <div className={`cs_accordian_header${idx === 0 ? " active" : ""}`}>
                        <h6 className="cs_accordian_title cs_m0">
                          {t(`faq.items.${key}.question`)}
                        </h6>
                        <i className="flaticon-down-arrow"></i>
                      </div>

                      <div className="cs_accordian_body">
                        {t(`faq.items.${key}.answer`)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}


      {/* Start Company Journey */}
      <section>
        <div className="faq-cj-wrap">

          <div className="cs-height-40"></div>
          <div className="timeline-pagination"></div>
          <div className="timeline-progress">
            <div className="timeline-progress-bar"></div>
          </div>
          <div className="cs-section-height-half"></div>

          <div className="swiper timeline-slider">
            <div className="swiper-wrapper">

              {journeySlides.map((slideKey, idx) => (
                <div className="swiper-slide" key={`${slideKey}-${idx}`}>
                  <div className="cj-slider-item d-flex gap-5">
                    <div className="cj-slider-content">
                      <h2>{t(`faq.journey.${slideKey}.heading`)}</h2>
                      <div className="cs-height-25"></div>
                      <p>{t("faq.journey.paragraph")}</p>
                      <div className="cs-height-25"></div>
                      <p>{t("faq.journey.paragraph")}</p>
                      <div className="cs-height-40"></div>

                      <div className="feature-list d-flex">
                        <ol>
                          <li><i className="flaticon-right-arrow themecolor"></i>{t("faq.journey.features.feature1")}</li>
                          <li><i className="flaticon-right-arrow themecolor"></i>{t("faq.journey.features.feature2")}</li>
                          <li><i className="flaticon-right-arrow themecolor"></i>{t("faq.journey.features.feature3")}</li>
                        </ol>
                        <ol>
                          <li><i className="flaticon-right-arrow themecolor"></i>{t("faq.journey.features.feature1")}</li>
                          <li><i className="flaticon-right-arrow themecolor"></i>{t("faq.journey.features.feature2")}</li>
                          <li><i className="flaticon-right-arrow themecolor"></i>{t("faq.journey.features.feature3")}</li>
                        </ol>
                      </div>
                    </div>
                    <div className="cj-slider-img d-flex gap-3">
                      <img loading="lazy" src="/assets/img/about/faq-cj-slider-img01.jpg" alt="" />
                      <img loading="lazy" src={idx % 2 === 0 ? "/assets/img/about/faq-cj-slider-img02.jpg" : "/assets/img/about/faq-cj-slider-img-large03.jpg"} alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* End Company Journey */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start Client Section */}
      <ClientLogos />
      {/* End Client Section */}


      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start CTA Section */}
      <section>
        <div className="cta-wrap" data-src="/assets/img/cta-bg-small.jpg">
          <div className="container">
            <div className="cs-height-65"></div>
            <div className="row">
              <div className="cs-cta-content">

                <div className="title max-width-800">
                  <h2 data-aos="fade-up" data-aos-duration="500">{t("faq.cta.heading")}</h2>
                </div>
                <Link data-aos="fade-left" data-aos-duration="700" to="/contact" className="cs-primary-btn secondary-btn cs-color-white themecolor-bg cs-height-60 cs-width-220"><span>{t("faq.cta.button")}</span></Link>
              </div>
            </div>
            <div className="cs-height-65"></div>
          </div>
        </div>
      </section>
      {/* End CTA Section */}
    </>
  );
}
