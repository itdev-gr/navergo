import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ClientLogos from "../components/ClientLogos";
import ContactForm from "../components/ContactForm";
import CountUp from "../components/CountUp";
import { projects } from "../data/projects";
import { homeServiceSlug } from "../data/services";

const homeServiceKeys = ["01", "02", "03", "04", "05", "06", "07"];
const homeServiceImages = {
  "01": { src: "/assets/img/service/steelwork/steelwork-03.jpg", alt: "Steel Plate Works" },
  "02": { src: "/assets/img/service/steelwork/steelwork-01.jpg", alt: "Metal Structure Repairs" },
  "03": { src: "/assets/img/service/piping/piping-03.jpg",       alt: "Piping Works" },
  "04": { src: "/assets/img/projects/laskaro-1.jpg",             alt: "Tank Works" },
  "05": { src: "/assets/img/service/steelwork/steelwork-02.jpg", alt: "Structural Reinforcements" },
  "06": { src: "/assets/img/service/piping/piping-engine-room.jpg", alt: "Pneumatic and Hydraulic Systems" },
  "07": { src: "/assets/img/service/steelwork/steelwork-05.jpg", alt: "Wear Restoration" },
};

export default function HomePage() {
  const { t } = useTranslation();
  const [openFeature, setOpenFeature] = useState(0);
  const journeyFeatures = t("home.journey.features", { returnObjects: true }) || [];
  return (
    <>
      {/* Start Hero Section */}
      <section>
        <div className="cs-height-100"></div>
        <div className="cs-hero-wrap">
          <div className="cs-hero-wrap-in">
            <div className="swiper hero-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="hero-slider-item" data-src="/assets/img/hero/hero-shipyard-01.jpg">
                    <div className="slider-item-content">
                     <div className="cs-hero-title">
                      <div className="cs-hero-title-in cs-head">
                        <h1><span className="hero-strong-title constr-splite">{t("home.hero.slide1.strong")}</span> <span className="cs-hero-title-normal hero-second-splite">{t("home.hero.slide1.normal")}</span></h1>
                      </div>
                      <div className="ae-title hero-backdrop-text constr-splite">
                        <h2>{t("home.hero.slide1.backdrop")}</h2>
                      </div>
                     </div>
                      <p className="hero-subtitle">{t("home.hero.slide1.subtitle")}</p>
                      <div className="cs-couple-btn d-flex gap-3">
                        <Link to="/contact" className="cs-primary-btn secondary-btn cs-color-white themecolor-bg cs-height-60 cs-width-180"><span>{t("common.cta.startProject")}</span></Link>
                        <Link to="/contact" className="cs-primary-btn cs-color-white theme-black-bg cs-height-60 cs-width-180"><span>{t("common.cta.contactUs")}</span></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="hero-slider-item" data-src="/assets/img/hero/hero-shipyard-02.jpg">
                    <div className="slider-item-content">
                     <div className="cs-hero-title">
                      <div className="cs-hero-title-in">
                        <h2><span className="hero-strong-title constr-splite">{t("home.hero.slide2.strong")}</span> <span className="cs-hero-title-normal hero-second-splite">{t("home.hero.slide2.normal")}</span></h2>
                      </div>
                      <div className="ae-title hero-backdrop-text constr-splite">
                        <h2>{t("home.hero.slide2.backdrop")}</h2>
                      </div>
                     </div>
                      <p className="hero-subtitle">{t("home.hero.slide2.subtitle")}</p>
                      <div className="cs-couple-btn d-flex gap-3">
                        <Link to="/contact" className="cs-primary-btn secondary-btn cs-color-white themecolor-bg cs-height-60 cs-width-180"><span>{t("common.cta.startProject")}</span></Link>
                        <Link to="/contact" className="cs-primary-btn cs-color-white theme-black-bg cs-height-60 cs-width-180"><span>{t("common.cta.contactUs")}</span></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="hero-slider-item" data-src="/assets/img/hero/hero-shipyard-03.jpg">
                    <div className="slider-item-content">
                     <div className="cs-hero-title">
                      <div className="cs-hero-title-in">
                        <h2><span className="hero-strong-title constr-splite">{t("home.hero.slide3.strong")}</span> <span className="cs-hero-title-normal hero-second-splite">{t("home.hero.slide3.normal")}</span></h2>
                      </div>
                      <div className="ae-title hero-backdrop-text constr-splite">
                        <h2>{t("home.hero.slide3.backdrop")}</h2>
                      </div>
                     </div>
                      <p className="hero-subtitle">{t("home.hero.slide3.subtitle")}</p>
                      <div className="cs-couple-btn d-flex gap-3">
                        <Link to="/contact" className="cs-primary-btn secondary-btn cs-color-white themecolor-bg cs-height-60 cs-width-180"><span>{t("common.cta.startProject")}</span></Link>
                        <Link to="/contact" className="cs-primary-btn cs-color-white theme-black-bg cs-height-60 cs-width-180"><span>{t("common.cta.contactUs")}</span></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cs-hero-social">
            <ul>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">{t("home.hero.social.instagram")}</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">{t("home.hero.social.linkedin")}</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">{t("home.hero.social.facebook")}</a></li>
            </ul>
          </div>
          <div className="cs-arrow-style-fill">
            <div className="cs-left-arrow hero-swiper-button-prev">
              <i className="flaticon-left-arrow"></i>
            </div>
            <div className="cs-right-arrow hero-swiper-button-next">
              <i className="flaticon-right-chevron"></i>
            </div>
          </div>
          <div className="cs-slider-pagi">

          </div>
        </div>
      </section>
      {/* End Hero Section */}

      {/* Start Company Journey */}
      <section>
        <div className="cs-about-wrap">
          <div className="container-fluid cs-about-wrap-in">
            <div className="col-xl-5 col-lg-12 col-md-12">
              <div className="cs-about-img">
                <div className="cs-section-height"></div>
                  {/* Section to Section Gap */}
                <div className="animate-img-wrap">
                  <div className="reveal"></div>
                  <img loading="lazy" className="the-animated-image" src="/assets/img/service/steelwork/steelwork-01.jpg" alt={t("home.journey.title", { defaultValue: "Navergo shipyard works" })} />
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-12 col-md-12">
              <div className="cs-about-content">
                <div className="cs-about-content">

                  <div className="cs-section-height"></div>
                  {/* Section to Section Gap */}
                  <div className="cs-heading-with-animation">
                    <h2 className="cs-heading">{t("home.journey.heading")}</h2>
                    <span className="cs-text-style-h1 cs-animated-text">{t("home.journey.animatedText")}</span>
                  </div>
                  <div className="cs-height-10"></div>
                  <p>{t("home.journey.paragraph")}</p>
                  <div className="cs-height-90"></div>
                  <div className="list-feature">
                    {journeyFeatures.map((feature, idx) => {
                      const isOpen = openFeature === idx;
                      return (
                        <div key={idx}>
                          <h6
                            data-aos="fade-up"
                            data-aos-duration={300 + idx * 100}
                            onClick={() => setOpenFeature(isOpen ? null : idx)}
                            style={{ cursor: "pointer" }}
                            role="button"
                            aria-expanded={isOpen}
                          >
                            {feature.title}
                          </h6>
                          <div
                            className={`cs-feature-bullets-wrap${isOpen ? " is-open" : ""}`}
                            aria-hidden={!isOpen}
                          >
                            <ul className="cs-feature-bullets">
                              {feature.items.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          {idx < journeyFeatures.length - 1 && (
                            <div className="cs-list-border"></div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div className="cs-height-40"></div>
                  <Link to="/about" className="cs-primary-btn secondary-btn cs-color-white themecolor-bg cs-height-70 cs-width-220"><span>{t("common.cta.viewMore")}</span></Link>
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
              <h2>{t("home.marquee")}</h2>
            </div>
            <div className="cs_text-moving">
              <h2>{t("home.marquee")}</h2>
            </div>
          </div>
        </div>
      </section>
      {/* End Moving Text */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start Service Section */}
      <section>
        <div className="cs-heading-with-animation text-center max-width-800 m-auto d-flex">
          <h2 className="cs-heading">{t("home.services.heading")}</h2>
          <span className="cs-text-style-h1 cs-animated-text">{t("home.services.animatedText")}</span>
        </div>
        <div className="cs-height-50"></div>

        <div className="services-wrapper">
          <div className="container">
            <div className="swiper service-slider">
              <div className="swiper-wrapper">
                {homeServiceKeys.map((key, idx) => {
                  const to = `/service-details?service=${homeServiceSlug[key]}`;
                  return (
                    <div className="swiper-slide" key={key}>
                      <div className="service-item" data-aos="fade-up" data-aos-duration={300 + idx * 100}>
                        <div className="srv-img">
                          <Link to={to}>
                            <img loading="lazy" src={homeServiceImages[key].src} alt={homeServiceImages[key].alt} />
                          </Link>
                        </div>
                        <div className="services-content">
                          <Link to={to} className="the-srv-title cs-text-style-h6">{t(`home.services.items.${key}.title`)}</Link>
                          <h4 className="the-plus">+</h4>
                          <div className="srv-the-hover">
                            <p>{t(`home.services.items.${key}.description`)}</p>
                            <Link to={to} className="cs-primary-btn cs-color-black cs_white_color-bg cs-height-50 cs-width-160"><span>{t("common.cta.moreDetails")}</span></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
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

      {/* Start Projects Section */}
      <section>
        <div className="cs-project-wrap themecolor-bg-primary">
          <div className="container-fluid">
            <div className="cs-section-height"></div>
            <div className="cs-heading-with-animation text-center max-width-700 m-auto d-flex">
              <h2 className="cs-heading">{t("home.projects.heading")}</h2>
              <span className="cs-text-style-h1 cs-animated-text">{t("home.projects.animatedText")}</span>
            </div>

            <div className="cs-height-50"></div>
          </div>

          <div className="project-masonry">
            <div className="cs-project-item third">
              {[projects[0], projects[1]].map((p, i) => {
                const title = t(`home.projects.item${i + 1}.title`);
                return (
                  <Link key={p.slug} to={`/project-details?project=${p.slug}`} className="cs-project-item-content-in" data-aos="fade-top" data-aos-duration={300 + i * 100}>
                    <img loading="lazy" src={p.images[0]} alt={title} />
                    <div className="project-meta-data">
                      <div className="cs-project-content">
                        <h5>{title}</h5>
                        <span className="view-project">{t("home.projects.viewProject")} <i className="flaticon-right-arrow"></i></span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="cs-project-item second">
              <Link to={`/project-details?project=${projects[2].slug}`} className="cs-project-item-content-in" data-aos="fade-top" data-aos-duration="500">
                <img loading="lazy" src={projects[2].images[0]} alt={t("home.projects.item3.title")} />
                <div className="project-meta-data">
                  <div className="cs-project-content">
                    <h4>{t("home.projects.item3.title")}</h4>
                    <span className="view-project">{t("home.projects.viewProject")} <i className="flaticon-right-arrow"></i></span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="cs-project-item third">
              {[projects[3], projects[4]].map((p, i) => {
                const title = t(`home.projects.item${i + 4}.title`);
                return (
                  <Link key={p.slug} to={`/project-details?project=${p.slug}`} className="cs-project-item-content-in" data-aos="fade-top" data-aos-duration={600 + i * 100}>
                    <img loading="lazy" src={p.images[0]} alt={title} />
                    <div className="project-meta-data">
                      <div className="cs-project-content">
                        <h5>{title}</h5>
                        <span className="view-project">{t("home.projects.viewProject")} <i className="flaticon-right-arrow"></i></span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* End Projects Section */}

      <div className="cs-section-height"></div>

      {/* Start Client Area Full Width */}
      <ClientLogos />
      {/* End Client Area Full Width */}

      <div className="cs-section-height"></div>

      {/* Start Features Section */}
      <section className="themecolor-bg-primary">
        <div className="cs-section-height"></div>
        <div className="cs-feature-card-wrap lg-gutter-control">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-md-6">
                <div  data-aos="fade-up" data-aos-duration="300" className="feature-card-item cs_white_bg theme-border-wrap">
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

                  <div className="cs-feature-icon">
                    <img loading="lazy" src="/assets/img/feature-icon-shipyard.svg" alt="Shipyard construction" />
                  </div>
                  <h5>{t("home.features.card1.title")}</h5>
                  <p>{t("home.features.card1.description")}</p>
                </div>
                <div className="cs-height-30"></div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div  data-aos="fade-up" data-aos-duration="400" className="feature-card-item cs_white_bg theme-border-wrap">
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

                  <div className="cs-feature-icon">
                    <img loading="lazy" src="/assets/img/feature-icon-crane-hull.svg" alt="" />
                  </div>
                  <h5>{t("home.features.card2.title")}</h5>
                  <p>{t("home.features.card2.description")}</p>
                </div>
                <div className="cs-height-30"></div>
              </div>
              <div className="col-xl-4 col-md-12">
                <div  data-aos="fade-up" data-aos-duration="500" className="feature-card-item cs_white_bg theme-border-wrap">
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

                  <div className="cs-feature-icon">
                    <img loading="lazy" src="/assets/img/feature-icon-checklist.svg" alt="" />
                  </div>
                  <h5>{t("home.features.card3.title")}</h5>
                  <p>{t("home.features.card3.description")}</p>
                </div>
                <div className="cs-height-30"></div>
              </div>
            </div>
          </div>
        </div>

      </section>
      {/* Start Features Section */}

      {/* Start Counter With CTA Section */}
      <section>
        <div className="cs-counter-wrap">
          <div className="theme-black-bg theme-dark">
            <div className="cs-height-100"></div>
            <div className="container">
              <div className="cs-couter-items">
                <div className="counter-item" data-aos="fade-top" data-aos-duration="400">
                  <h6>{t("home.funfact.1.label")}</h6>
                  <CountUp end={76} className="cs-text-style-h2" /><span className="cs-text-style-h2">+</span>
                  <p>{t("home.funfact.1.description")}</p>
                </div>
                <div className="counter-sep"></div>
                <div className="counter-item" data-aos="fade-top" data-aos-duration="600">
                  <h6>{t("home.funfact.2.label")}</h6>
                  <CountUp end={5} className="cs-text-style-h2" /><span className="cs-text-style-h2">+</span>
                  <p>{t("home.funfact.2.description")}</p>
                </div>
                <div className="counter-sep"></div>
                <div className="counter-item" data-aos="fade-top" data-aos-duration="800">
                  <h6>{t("home.funfact.3.label")}</h6>
                  <CountUp end={140} className="cs-text-style-h2" />
                  <p>{t("home.funfact.3.description")}</p>
                </div>
              </div>
            </div>
            <div className="cs-height-100"></div>
          </div>
        </div>
      </section>
      {/* End Counter With CTA Section */}

      {/* Start Why Choose Us & Video */}
      <section>
        <div className="cs-working-process-wrap themecolor-bg theme-dark">
          <div className="cs-height-100"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-md-6">
                <div className="cs-process-item" data-aos="fade-top" data-aos-duration="300">
                  <div className="cs-wp-icon">
                    <img loading="lazy" src="/assets/img/one.svg" alt="" />
                  </div>
                  <h6>{t("home.process.step1.title")}</h6>
                  <p>{t("home.process.step1.description")}</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="cs-process-item" data-aos="fade-top" data-aos-duration="500">
                  <div className="cs-wp-icon">
                    <img loading="lazy" src="/assets/img/two.svg" alt="" />
                  </div>
                  <h6>{t("home.process.step2.title")}</h6>
                  <p>{t("home.process.step2.description")}</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="cs-process-item" data-aos="fade-top" data-aos-duration="700">
                  <div className="cs-wp-icon">
                    <img loading="lazy" src="/assets/img/three.svg" alt="" />
                  </div>
                  <h6>{t("home.process.step3.title")}</h6>
                  <p>{t("home.process.step3.description")}</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="cs-process-item" data-aos="fade-top" data-aos-duration="900">
                  <div className="cs-wp-icon">
                    <img loading="lazy" src="/assets/img/four.svg" alt="" />
                  </div>
                  <h6>{t("home.process.step4.title")}</h6>
                  <p>{t("home.process.step4.description")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cs-height-100"></div>
        </div>
      </section>
      {/* End Why Choose Us & Video */}

      {/* Start Experience & Image Section */}
      <section>
        <div className="about-experience-wrap bottom-align">
          <div className="img-ae background-parallax">
            <div className="parallax-image max-height-750">
              <img loading="lazy" src="/assets/img/about/ship-repair-experience.jpg" alt="Cargo ship undergoing repair in dry dock at shipyard" />
            </div>
          </div>
          <div className="content-for-parallax">
            <div className="ae-content theme-dark">
              <div className="cs-experience" data-aos="fade-right" data-aos-duration="400">
                <img loading="lazy" src="/assets/img/about/27.svg" alt="" />
                <div className="cs-height-15"></div>
                <h4 className="cs-uppercase">{t("home.experience.yearsLine1")} <br /> {t("home.experience.yearsLine2")}</h4>
              </div>
              <div className="aec-line"></div>
              <h3 data-aos="fade-left" data-aos-duration="400" className="cs-uppercase">{t("home.experience.leadingLine1")} <br /> {t("home.experience.leadingLine2")}</h3>
            </div>
          </div>
        </div>
      </section>
      {/* Start Experience & Image Section */}

      {/* Start Contact Form */}
      <section>
        <div className="cs-contact-section">
          <div className="container-fluid">
            <div className="row cs_center" data-src="/assets/img/pattern-bg-for-light.png">

              <div className="col-xl-7">
                <div className="contact-img">
                  <div className="animate-img-wrap">
                    <div className="reveal"></div>
                    <img loading="lazy" className="the-animated-image" src="/assets/img/about/story-shipyard-vessel.jpg" alt="Πλοίο σε εργασίες ναυπηγοεπισκευής στο ναυπηγείο της Navergo" />
                  </div>
                </div>
              </div>

              <div className="col-xl-5">
                <div className="position-relative" data-aos="fade-up" data-aos-duration="300">
                  <h2 className="cs-heading">{t("home.contact.heading")}</h2>
                  <span className="cs-text-style-h1 cs-animated-text">{t("home.contact.animatedText")}</span>
                </div>

                <div className="cs-height-35"></div>
                <ContactForm tPrefix="home.contact.form" />
              </div>

            </div>
            <div className="cs-section-height"></div>
          </div>
        </div>
      </section>
      {/* End Contact Form */}
    </>
  );
}
