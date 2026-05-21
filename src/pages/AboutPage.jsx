import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
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
                  <h2 className="cs_white_color">{t("about.breadcrumb.title")}</h2>
                </div>
                <div className="breadcrumb">
                  <ul>
                    <li>
                      <Link to="/" className="cs-text_b_line"><span>{t("about.breadcrumb.fromHome")}</span></Link>
                    </li>
                    <li>/</li>
                    <li>{t("about.breadcrumb.current")}</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* End Common BreadCrumb */}

      {/* Start Company Journey */}
      <section>
        <div className="cs-cj-wrap">
          <div className="cj-left">
            <div className="cs-section-height"></div>
            <div className="cj-left-content">
              <h2 data-aos="fade-up" data-aos-duration="500">{t("about.journey.heading")}</h2>
              <div className="cs-height-25"></div>
              <div className="max-width-600">
                <p  data-aos="fade-up" data-aos-duration="700">{t("about.journey.paragraph1")}</p>
                <div className="cs-height-30"></div>
                <p data-aos="fade-up" data-aos-duration="1000">{t("about.journey.paragraph2")}</p>
              </div>
                <div className="cs-height-165"></div>
            </div>
            <img src="/assets/img/about/cj-left-img.jpg" alt="" />
          </div>

          <div className="cj-right">
            <div className="cs-section-height"></div>
            <div className="cs-height-40"></div>

            <div className="timeline-pagination"></div>
            <div className="timeline-progress">
              <div className="timeline-progress-bar"></div>
            </div>

            <div className="swiper timeline-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="cs-height-50"></div>
                  <img src="/assets/img/about/cj-right-img2.jpg" alt="" />
                  <div className="cj-right-content">

                    <div className="cs-height-40"></div>
                    <div className="cs-heading-with-animation text-left m-auto d-flex">
                      <h2 className="cs-heading">{t("about.journey.slide1.heading")}</h2>
                      <span className="cs-text-style-h1 cs-animated-text">{t("about.journey.slide1.animatedText")}</span>
                    </div>
                    <p>{t("about.journey.slide1.paragraph")}</p>
                    <div className="cs-height-100"></div>
                    <div className="list-feature">
                      <h6>{t("about.journey.features.feature1")}</h6>
                      <div className="cs-list-border"></div>
                      <h6>{t("about.journey.features.feature2")}</h6>
                      <div className="cs-list-border"></div>
                      <h6>{t("about.journey.features.feature3")}</h6>
                    </div>
                    <div className="cs-height-50"></div>
                    <Link className="cs-primary-btn secondary-btn cs-color-white themecolor-bg cs-height-70 cs-width-220" to="/contact"><span>{t("common.cta.startProject")}</span></Link>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="cs-height-50"></div>
                  <img src="/assets/img/about/cj-right-img4.jpg" alt="" />
                  <div className="cj-right-content">

                    <div className="cs-height-40"></div>
                    <div className="cs-heading-with-animation text-left m-auto d-flex">
                      <h2 className="cs-heading">{t("about.journey.slide2.heading")}</h2>
                      <span className="cs-text-style-h1 cs-animated-text">{t("about.journey.slide2.animatedText")}</span>
                    </div>
                    <p>{t("about.journey.slide2.paragraph")}</p>
                    <div className="cs-height-100"></div>
                    <div className="list-feature">
                      <h6>{t("about.journey.features.feature1")}</h6>
                      <div className="cs-list-border"></div>
                      <h6>{t("about.journey.features.feature2")}</h6>
                      <div className="cs-list-border"></div>
                      <h6>{t("about.journey.features.feature3")}</h6>
                    </div>
                    <div className="cs-height-50"></div>
                    <Link className="cs-primary-btn secondary-btn cs-color-white themecolor-bg cs-height-70 cs-width-220" to="/contact"><span>{t("common.cta.startProject")}</span></Link>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="cs-height-50"></div>
                  <img src="/assets/img/about/cj-right-img3.jpg" alt="" />
                  <div className="cj-right-content">

                    <div className="cs-height-40"></div>
                    <div className="cs-heading-with-animation text-left m-auto d-flex">
                      <h2 className="cs-heading">{t("about.journey.slide3.heading")}</h2>
                      <span className="cs-text-style-h1 cs-animated-text">{t("about.journey.slide3.animatedText")}</span>
                    </div>
                    <p>{t("about.journey.slide3.paragraph")}</p>
                    <div className="cs-height-100"></div>
                    <div className="list-feature">
                      <h6>{t("about.journey.features.feature1")}</h6>
                      <div className="cs-list-border"></div>
                      <h6>{t("about.journey.features.feature2")}</h6>
                      <div className="cs-list-border"></div>
                      <h6>{t("about.journey.features.feature3")}</h6>
                    </div>
                    <div className="cs-height-50"></div>
                    <Link className="cs-primary-btn secondary-btn cs-color-white themecolor-bg cs-height-70 cs-width-220" to="/contact"><span>{t("common.cta.startProject")}</span></Link>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="cs-height-50"></div>
                  <img src="/assets/img/about/cj-right-img.jpg" alt="" />
                  <div className="cj-right-content">

                    <div className="cs-height-40"></div>
                    <div className="cs-heading-with-animation text-left m-auto d-flex">
                      <h2 className="cs-heading">{t("about.journey.slide4.heading")}</h2>
                      <span className="cs-text-style-h1 cs-animated-text">{t("about.journey.slide4.animatedText")}</span>
                    </div>
                    <p>{t("about.journey.slide4.paragraph")}</p>
                    <div className="cs-height-100"></div>
                    <div className="list-feature">
                      <h6>{t("about.journey.features.feature1")}</h6>
                      <div className="cs-list-border"></div>
                      <h6>{t("about.journey.features.feature2")}</h6>
                      <div className="cs-list-border"></div>
                      <h6>{t("about.journey.features.feature3")}</h6>
                    </div>
                    <div className="cs-height-50"></div>
                    <Link className="cs-primary-btn secondary-btn cs-color-white themecolor-bg cs-height-70 cs-width-220" to="/contact"><span>{t("common.cta.startProject")}</span></Link>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="cs-height-50"></div>
                  <img src="/assets/img/about/cj-right-img1.jpg" alt="" />
                  <div className="cj-right-content">

                    <div className="cs-height-40"></div>
                    <div className="cs-heading-with-animation text-left m-auto d-flex">
                      <h2 className="cs-heading">{t("about.journey.slide5.heading")}</h2>
                      <span className="cs-text-style-h1 cs-animated-text">{t("about.journey.slide5.animatedText")}</span>
                    </div>
                    <p>{t("about.journey.slide5.paragraph")}</p>
                    <div className="cs-height-100"></div>
                    <div className="list-feature">
                      <h6>{t("about.journey.features.feature1")}</h6>
                      <div className="cs-list-border"></div>
                      <h6>{t("about.journey.features.feature2")}</h6>
                      <div className="cs-list-border"></div>
                      <h6>{t("about.journey.features.feature3")}</h6>
                    </div>
                    <div className="cs-height-50"></div>
                    <Link className="cs-primary-btn secondary-btn cs-color-white themecolor-bg cs-height-70 cs-width-220" to="/contact"><span>{t("common.cta.startProject")}</span></Link>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="cs-height-50"></div>
                  <img src="/assets/img/about/cj-right-img4.jpg" alt="" />
                  <div className="cj-right-content">

                    <div className="cs-height-40"></div>
                    <div className="cs-heading-with-animation text-left m-auto d-flex">
                      <h2 className="cs-heading">{t("about.journey.slide6.heading")}</h2>
                      <span className="cs-text-style-h1 cs-animated-text">{t("about.journey.slide6.animatedText")}</span>
                    </div>
                    <p>{t("about.journey.slide6.paragraph")}</p>
                    <div className="cs-height-100"></div>
                    <div className="list-feature">
                      <h6>{t("about.journey.features.feature1")}</h6>
                      <div className="cs-list-border"></div>
                      <h6>{t("about.journey.features.feature2")}</h6>
                      <div className="cs-list-border"></div>
                      <h6>{t("about.journey.features.feature3")}</h6>
                    </div>
                    <div className="cs-height-50"></div>
                    <Link className="cs-primary-btn secondary-btn cs-color-white themecolor-bg cs-height-70 cs-width-220" to="/contact"><span>{t("common.cta.startProject")}</span></Link>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="cs-height-50"></div>
                  <img src="/assets/img/about/cj-right-img2.jpg" alt="" />
                  <div className="cj-right-content">

                    <div className="cs-height-40"></div>
                    <div className="cs-heading-with-animation text-left m-auto d-flex">
                      <h2 className="cs-heading">{t("about.journey.slide7.heading")}</h2>
                      <span className="cs-text-style-h1 cs-animated-text">{t("about.journey.slide7.animatedText")}</span>
                    </div>
                    <p>{t("about.journey.slide7.paragraph")}</p>
                    <div className="cs-height-100"></div>
                    <div className="list-feature">
                      <h6>{t("about.journey.features.feature1")}</h6>
                      <div className="cs-list-border"></div>
                      <h6>{t("about.journey.features.feature2")}</h6>
                      <div className="cs-list-border"></div>
                      <h6>{t("about.journey.features.feature3")}</h6>
                    </div>
                    <div className="cs-height-50"></div>
                    <Link className="cs-primary-btn secondary-btn cs-color-white themecolor-bg cs-height-70 cs-width-220" to="/contact"><span>{t("common.cta.startProject")}</span></Link>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="cs-height-50"></div>
                  <img src="/assets/img/about/cj-right-img3.jpg" alt="" />
                  <div className="cj-right-content">

                    <div className="cs-height-40"></div>
                    <div className="cs-heading-with-animation text-left m-auto d-flex">
                      <h2 className="cs-heading">{t("about.journey.slide8.heading")}</h2>
                      <span className="cs-text-style-h1 cs-animated-text">{t("about.journey.slide8.animatedText")}</span>
                    </div>
                    <p>{t("about.journey.slide8.paragraph")}</p>
                    <div className="cs-height-100"></div>
                    <div className="list-feature">
                      <h6>{t("about.journey.features.feature1")}</h6>
                      <div className="cs-list-border"></div>
                      <h6>{t("about.journey.features.feature2")}</h6>
                      <div className="cs-list-border"></div>
                      <h6>{t("about.journey.features.feature3")}</h6>
                    </div>
                    <div className="cs-height-50"></div>
                    <Link className="cs-primary-btn secondary-btn cs-color-white themecolor-bg cs-height-70 cs-width-220" to="/contact"><span>{t("common.cta.startProject")}</span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Company Journey */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start Moving Text */}
      <section>
        <div className="cs-text-moving-wrap">
          <div className="cs_text-moving_in">
            <div className="cs_text-moving">
              <h2>{t("about.marquee")}</h2>
            </div>
            <div className="cs_text-moving">
              <h2>{t("about.marquee")}</h2>
            </div>
          </div>
        </div>
      </section>
      {/* End Moving Text */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start Testimonial */}
      <section>
        <div className="testi-wrapper cs-bg-black theme-dark">
          <div className="cs-height-175"></div>
          <div className="container for-quote-mark">
            <div className="row">
              <div className="swiper home1-testi-slider1">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testi-slider-item-wrap">
                      <div className="testi-user">
                        <img src="/assets/img/avatar-testi.png" alt="" />
                        <h6>{t("about.testimonials.1.name")}</h6>
                        <p>{t("about.testimonials.1.location")}</p>
                      </div>
                      <div className="testi-border">
                        <svg width="48" height="236" viewBox="0 0 48 236" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.5" d="M1 0V60.9809H46.3727L1 99.5681V236" stroke="#C1C1C1" />
                        </svg>
                      </div>
                      <div className="testi-content">
                        <img src="/assets/img/star.svg" alt="" />
                        <div className="cs-height-20"></div>
                        <h4>{t("about.testimonials.1.quote")}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testi-slider-item-wrap">
                      <div className="testi-user">
                        <img src="/assets/img/avatar-testi.png" alt="" />
                        <h6>{t("about.testimonials.2.name")}</h6>
                        <p>{t("about.testimonials.2.location")}</p>
                      </div>
                      <div className="testi-border">
                        <svg width="48" height="236" viewBox="0 0 48 236" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.5" d="M1 0V60.9809H46.3727L1 99.5681V236" stroke="#C1C1C1" />
                        </svg>
                      </div>
                      <div className="testi-content">
                        <img src="/assets/img/star.svg" alt="" />
                        <div className="cs-height-20"></div>
                        <h4>{t("about.testimonials.2.quote")}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testi-quote-mark">
              <img src="/assets/img/quotation-mark.svg" alt="" />
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

      {/* Start Service Section */}
      <section>
        <div className="cs-heading-with-animation text-center max-width-800 m-auto d-flex">
          <h2 className="cs-heading">{t("about.services.heading")}</h2>
          <span className="cs-text-style-h1 cs-animated-text">{t("about.services.animatedText")}</span>
        </div>
        <div className="cs-height-50"></div>

        <div className="services-wrapper">
          <div className="container">
            <div className="swiper service-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="service-item" data-aos="fade-up" data-aos-duration="300">
                    <div className="srv-img">
                      <Link to="/service-details">
                        <img src="/assets/img/service/service-img01.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="services-content">
                      <Link to="/service-details" className="the-srv-title cs-text-style-h6">{t("about.services.items.01.title")}</Link>
                        <h4 className="the-plus">+</h4>
                        <div className="srv-the-hover">
                          <p>{t("about.services.items.01.description")}</p>
                            <Link to="/service-details" className="cs-primary-btn cs-color-black cs_white_color-bg cs-height-50 cs-width-160"><span>{t("common.cta.moreDetails")}</span></Link>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-item"  data-aos="fade-up" data-aos-duration="400">
                    <div className="srv-img">
                      <Link to="/service-details">
                        <img src="/assets/img/service/service-img02.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="services-content">
                      <Link to="/service-details" className="the-srv-title cs-text-style-h6">{t("about.services.items.02.title")}</Link>
                        <h4 className="the-plus">+</h4>
                        <div className="srv-the-hover">
                          <p>{t("about.services.items.02.description")}</p>
                            <Link className="cs-primary-btn cs-color-black cs_white_color-bg cs-height-50 cs-width-160" to="/service-details"><span>{t("common.cta.moreDetails")}</span></Link>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-item"  data-aos="fade-up" data-aos-duration="500">
                    <div className="srv-img">
                      <Link to="/service-details">
                        <img src="/assets/img/service/service-img03.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="services-content">
                      <Link to="/service-details" className="the-srv-title cs-text-style-h6">{t("about.services.items.03.title")}</Link>
                        <h4 className="the-plus">+</h4>
                        <div className="srv-the-hover">
                          <p>{t("about.services.items.03.description")}</p>
                            <Link to="/service-details" className="cs-primary-btn cs-color-black cs_white_color-bg cs-height-50 cs-width-160"><span>{t("common.cta.moreDetails")}</span></Link>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-item"  data-aos="fade-up" data-aos-duration="600">
                    <div className="srv-img">
                      <Link to="/service-details">
                        <img src="/assets/img/service/service-img04.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="services-content">
                      <Link to="/service-details" className="the-srv-title cs-text-style-h6">{t("about.services.items.04.title")}</Link>
                        <h4 className="the-plus">+</h4>
                        <div className="srv-the-hover">
                          <p>{t("about.services.items.04.description")}</p>
                            <Link to="/service-details" className="cs-primary-btn cs-color-black cs_white_color-bg cs-height-50 cs-width-160"><span>{t("common.cta.moreDetails")}</span></Link>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-item"  data-aos="fade-up" data-aos-duration="700">
                    <div className="srv-img">
                      <Link to="/service-details">
                        <img src="/assets/img/service/service-img05.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="services-content">
                      <Link to="/service-details" className="the-srv-title cs-text-style-h6">{t("about.services.items.05.title")}</Link>
                        <h4 className="the-plus">+</h4>
                        <div className="srv-the-hover">
                          <p>{t("about.services.items.05.description")}</p>
                            <Link to="/service-details" className="cs-primary-btn cs-color-black cs_white_color-bg cs-height-50 cs-width-160"><span>{t("common.cta.moreDetails")}</span></Link>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs-height-50"></div>
            <div className="srv-pagination">
              <div className="srv-swiper-pagination"></div>
            </div>
          </div>
        </div>
      </section>
      {/* End Service Section */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start Client Area Full Width */}
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
      {/* End Client Area Full Width */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start Counter With CTA Section */}
      <section>
        <div className="counter-with-cta themecolor-bg-primary">
          <div className="container-fluid counter-with-cta-in" data-src="/assets/img/about/construction-stoke-home.svg">
            <div className="counter-alone">
              <div className="row cs_center">
                <div className="col-xl-5 col-md-6">
                  <div className="counter-item" data-aos="fade-up" data-aos-duration="300">
                    <span id="count1" className="amin_auto_count cs-text-style-h2">50</span><span className="cs-text-style-h2">k</span>
                    <div className="cs-height-10"></div>
                    <h6>{t("about.counter.happyCustomers")}</h6>
                    <p>{t("about.counter.description")}</p>
                  </div>
                  <div className="cs-height-40"></div>
                </div>
                <div className="col-xl-1">
                  <div className="cs-counter-border"></div>
                </div>
                <div className="col-xl-5 col-md-6">
                  <div className="counter-item" data-aos="fade-up" data-aos-duration="400">
                    <span id="count2" className="amin_auto_count cs-text-style-h2">50</span>
                    <div className="cs-height-10"></div>
                    <h6>{t("about.counter.awards")}</h6>
                    <p>{t("about.counter.description")}</p>
                  </div>
                  <div className="cs-height-40"></div>
                </div>
                <div className="col-xl-5 col-md-6">
                  <div className="counter-item" data-aos="fade-up" data-aos-duration="500">
                    <span id="count3" className="amin_auto_count cs-text-style-h2">126</span><span className="cs-text-style-h2">+</span>
                    <div className="cs-height-10"></div>
                    <h6>{t("about.counter.projectsCompleted")}</h6>
                    <p>{t("about.counter.description")}</p>
                  </div>
                  <div className="cs-height-40"></div>
                </div>
                <div className="col-xl-1">
                  <div className="cs-counter-border"></div>
                </div>
                <div className="col-xl-5 col-md-6">
                  <div className="counter-item"  data-aos="fade-up" data-aos-duration="600">
                    <span id="count4" className="amin_auto_count cs-text-style-h2">32</span><span className="cs-text-style-h2">+</span>
                    <div className="cs-height-10"></div>
                    <h6>{t("about.counter.ongoingProjects")}</h6>
                    <p>{t("about.counter.description")}</p>
                  </div>
                  <div className="cs-height-40"></div>
                </div>
              </div>
            </div>
            <div className="cta-alone theme-dark">
              <div className="cs-cta-in">
                <div className="cs-height-200"></div>
                <h2 data-aos="fade-top" data-aos-duration="500">{t("about.cta.heading")}</h2>
                <div className="cs-height-20"></div>
                <p>{t("about.cta.paragraph")}</p>
                <div className="cs-height-30"></div>
                <Link to="/contact" data-aos="fade-up" data-aos-duration="500" className="cs-primary-btn cs-color-black cs_white_color-bg cs-height-60 cs-width-220"><span>{t("about.cta.button")}</span></Link>
                <div className="cs-height-200"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Counter With CTA Section */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start Team Section */}
      <section>
        <div className="team-wrap">
          <div className="container">
            <div className="cs-heading-with-animation max-width-700">
              <h2 className="cs-heading">{t("about.team.heading")}</h2>
              <span className="cs-text-style-h1 cs-animated-text">{t("about.team.animatedText")}</span>
              <div className="cs-height-50"></div>
            </div>
            <div className="row">
              <div className="team-member">
                <div className="member-img">
                  <Link to="/team-details">
                    <img className="animated-img" src="/assets/img/member/team-member-1.jpg" alt="" />
                  </Link>
                </div>
                <div className="member-in">
                  <div className="content">
                    <Link to="/team-details">
                      <h6>{t("about.team.members.1.name")}</h6>
                    </Link>
                    <p>{t("about.team.members.1.role")}</p>
                  </div>
                  <div className="theme-social">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com" target="_blank">
                          <i className="flaticon-facebook-app-symbol"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com" target="_blank">
                          <i className="flaticon-linkedin-big-logo"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com" target="_blank">
                          <i className="flaticon-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com" target="_blank">
                          <i className="flaticon-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="team-member">
                <div className="member-img">
                  <Link to="/team-details">
                    <img className="animated-img" src="/assets/img/member/team-member-2.jpg" alt="" />
                  </Link>
                </div>
                <div className="member-in">
                  <div className="content">
                    <Link to="/team-details">
                      <h6>{t("about.team.members.2.name")}</h6>
                    </Link>
                    <p>{t("about.team.members.2.role")}</p>
                  </div>
                  <div className="theme-social">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com" target="_blank">
                          <i className="flaticon-facebook-app-symbol"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com" target="_blank">
                          <i className="flaticon-linkedin-big-logo"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com" target="_blank">
                          <i className="flaticon-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com" target="_blank">
                          <i className="flaticon-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="team-member">
                <div className="member-img">
                  <Link to="/team-details">
                    <img className="animated-img" src="/assets/img/member/team-member-3.jpg" alt="" />
                  </Link>
                </div>
                <div className="member-in">
                  <div className="content">
                    <Link to="/team-details">
                      <h6>{t("about.team.members.3.name")}</h6>
                    </Link>
                    <p>{t("about.team.members.3.role")}</p>
                  </div>
                  <div className="theme-social">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com" target="_blank">
                          <i className="flaticon-facebook-app-symbol"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com" target="_blank">
                          <i className="flaticon-linkedin-big-logo"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com" target="_blank">
                          <i className="flaticon-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com" target="_blank">
                          <i className="flaticon-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="team-member">
                <div className="member-img">
                  <Link to="/team-details">
                    <img className="animated-img" src="/assets/img/member/team-member-4.jpg" alt="" />
                  </Link>
                </div>
                <div className="member-in">
                  <div className="content">
                    <Link to="/team-details">
                      <h6>{t("about.team.members.4.name")}</h6>
                    </Link>
                    <p>{t("about.team.members.4.role")}</p>
                  </div>
                  <div className="theme-social">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com" target="_blank">
                          <i className="flaticon-facebook-app-symbol"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com" target="_blank">
                          <i className="flaticon-linkedin-big-logo"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com" target="_blank">
                          <i className="flaticon-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com" target="_blank">
                          <i className="flaticon-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* End Team Section */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start Experience Section */}
      <section>
        <div className="about-experience-wrap">
          <div className="img-ae background-parallax">
            <div className="parallax-image max-height-750">
              <img src="/assets/img/about/about-experience.jpg" alt="" />
              <div className="ae-title">
                <h2>{t("about.experience.imageTitle")}</h2>
              </div>
            </div>
          </div>
          <div className="content-for-parallax">

            <div className="ae-content theme-dark">
              <div className="cs-experience" data-aos="fade-right" data-aos-duration="400">
                <img src="/assets/img/about/27.svg" alt="" />
                <div className="cs-height-15"></div>
                <h4 className="cs-uppercase">{t("about.experience.yearsLine1")} <br /> {t("about.experience.yearsLine2")}</h4>
              </div>
              <div className="aec-line"></div>
              <h3 data-aos="fade-left" data-aos-duration="400" className="cs-uppercase">{t("about.experience.leadingLine1")} <br /> {t("about.experience.leadingLine2")}</h3>
            </div>
          </div>
        </div>
      </section>
      {/* End Experience Section */}
    </>
  );
}
