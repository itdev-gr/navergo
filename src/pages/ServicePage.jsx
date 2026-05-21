import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ServicePage() {
  const { t } = useTranslation();

  const serviceItems = ["01", "02", "03", "04", "05", "06"];
  const serviceImages = [
    "/assets/img/service/service-img01.jpg",
    "/assets/img/service/service-img02.jpg",
    "/assets/img/service/service-img03.jpg",
    "/assets/img/service/service-img04.jpg",
    "/assets/img/service/service-img05.jpg",
    "/assets/img/service/service-img01.jpg",
  ];

  const pricingFeatures = ["f1", "f2", "f3", "f4", "f5"].map((k) =>
    t(`service.pricing.features.${k}`)
  );

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

      {/* Start Pricing */}
      <section>
        <div className="pricing-wrap ">
          <div className="container lg-gutter-control">

            <div className="cs-heading-with-animation text-center max-width-700 m-auto d-flex">
              <h2 className="cs-heading">{t("service.pricing.heading")}</h2>
              <span className="cs-text-style-h1 cs-animated-text">{t("service.pricing.animatedText")}</span>
            </div>

            <div className="cs-height-50"></div>

            <div className="row">
              <div className="col-xl-4 col-md-6">
                <div className="pricing-item theme-border-wrap cs-hover-card-anim" data-aos="fade-up" data-aos-duration="300"
                  data-ser="hover-reveal">

                  <div className="b-top-left">
                    <div className="horizontal"></div>
                    <div className="verticle"></div>
                  </div>

                  <div className="b-top-right d-flex">
                    <div className="horizontal"></div>
                    <div className="verticle"></div>
                  </div>

                  <div className="b-bottom-right d-flex flex-end">

                    <div className="horizontal"></div>
                    <div className="verticle"></div>
                  </div>

                  <div className="b-bottom-left">
                    <div className="verticle"></div>
                    <div className="horizontal"></div>
                  </div>

                  <div className="content-for-top">
                    <div className="cs-height-50"></div>

                    <h5>{t("service.pricing.plans.standard.name")}</h5>
                    <p>{t("service.pricing.tagline")}</p>
                    <div className="cs-pricing-border-with-margin"></div>
                    <h2>$250M</h2>

                    <div className="cs-height-20"></div>

                    <div className="pricing-feature-list body-text-color">
                      <ul className="cs-text-lh-200">
                        {pricingFeatures.map((feat, i) => (
                          <li key={i}>{feat}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="cs-height-70"></div>
                    <Link className="cs-primary-btn cs-color-black cs_white_color-bg cs-height-50" to="/contact">
                      <span>{t("service.pricing.getStart")}</span>
                    </Link>
                    <div className="cs-height-50"></div>
                  </div>
                  <div className="magic" data-src="/assets/img/contact/contact-office-bg.jpg"></div>
                </div>
                <div className="cs-height-30"></div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="pricing-item theme-border-wrap theme-dark themecolor-bg" data-aos="fade-up"
                  data-aos-duration="500">

                  <div className="b-top-left">
                    <div className="horizontal"></div>
                    <div className="verticle"></div>
                  </div>

                  <div className="b-top-right d-flex">
                    <div className="horizontal"></div>
                    <div className="verticle"></div>
                  </div>

                  <div className="b-bottom-right d-flex flex-end">

                    <div className="horizontal"></div>
                    <div className="verticle"></div>
                  </div>

                  <div className="b-bottom-left">
                    <div className="verticle"></div>
                    <div className="horizontal"></div>
                  </div>

                  <div className="cs-height-50"></div>

                  <h5>{t("service.pricing.plans.professional.name")}</h5>
                  <p>{t("service.pricing.tagline")}</p>
                  <div className="cs-pricing-border-with-margin"></div>
                  <h2>$350M</h2>

                  <div className="cs-height-20"></div>

                  <div className="pricing-feature-list body-text-color">
                    <ul className="cs-text-lh-200">
                      {pricingFeatures.map((feat, i) => (
                        <li key={i}>{feat}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="cs-height-70"></div>

                  <Link className="cs-primary-btn cs-color-black cs_white_color-bg cs-height-50" to="/contact"><span>{t("service.pricing.getStart")}</span>
                    </Link>

                  <div className="cs-height-50"></div>

                </div>
                <div className="cs-height-30"></div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="pricing-item theme-border-wrap cs-hover-card-anim" data-aos="fade-up" data-aos-duration="900"
                  data-ser="hover-reveal">

                  <div className="b-top-left">
                    <div className="horizontal"></div>
                    <div className="verticle"></div>
                  </div>

                  <div className="b-top-right d-flex">
                    <div className="horizontal"></div>
                    <div className="verticle"></div>
                  </div>

                  <div className="b-bottom-right d-flex flex-end">

                    <div className="horizontal"></div>
                    <div className="verticle"></div>
                  </div>

                  <div className="b-bottom-left">
                    <div className="verticle"></div>
                    <div className="horizontal"></div>
                  </div>

                  <div className="content-for-top">
                    <div className="cs-height-50"></div>
                    <h5>{t("service.pricing.plans.enterprise.name")}</h5>
                    <p>{t("service.pricing.tagline")}</p>
                    <div className="cs-pricing-border-with-margin"></div>
                    <h2>$550M</h2>

                    <div className="cs-height-20"></div>

                    <div className="pricing-feature-list body-text-color">
                      <ul className="cs-text-lh-200">
                        {pricingFeatures.map((feat, i) => (
                          <li key={i}>{feat}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="cs-height-70"></div>

                    <Link className="cs-primary-btn cs-color-black cs_white_color-bg cs-height-50" to="/contact">
                      <span>{t("service.pricing.getStart")}</span>
                    </Link>
                    <div className="cs-height-50"></div>
                  </div>
                  <div className="magic" data-src="/assets/img/contact/contact-office-bg.jpg"></div>
                </div>
                <div className="cs-height-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Pricing */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start Clients */}
        <div className="container client-wrap">
          <div className="swiper clients-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide" data-aos="fade-up" data-aos-duration="300">
                <a className="client-item" href="#"><img src="/assets/img/clients/logo05.png" alt="" /></a>
              </div>
              <div className="swiper-slide" data-aos="fade-up" data-aos-duration="500">
                <a className="client-item" href="#"><img src="/assets/img/clients/logo04.png" alt="" /></a>
              </div>
              <div className="swiper-slide" data-aos="fade-up" data-aos-duration="700">
                <a className="client-item" href="#"><img src="/assets/img/clients/logo03.png" alt="" /></a>
              </div>
              <div className="swiper-slide" data-aos="fade-up" data-aos-duration="900">
                <a className="client-item" href="#"><img src="/assets/img/clients/logo02.png" alt="" /></a>
              </div>
              <div className="swiper-slide" data-aos="fade-up" data-aos-duration="1100">
                <a className="client-item" href="#"><img src="/assets/img/clients/logo01.png" alt="" /></a>
              </div>
              <div className="swiper-slide" data-aos="fade-up" data-aos-duration="1300">
                <a className="client-item" href="#"><img src="/assets/img/clients/logo05.png" alt="" /></a>
              </div>
              <div className="swiper-slide" data-aos="fade-up" data-aos-duration="1500">
                <a className="client-item" href="#"><img src="/assets/img/clients/logo04.png" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
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
