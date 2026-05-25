import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ClientLogos from "../components/ClientLogos";

const personnelIcons = {
  1: "feature-icon-training",
  2: "feature-icon-anchor",
  3: "feature-icon-stopwatch",
  4: "feature-icon-regulations",
};

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

      {/* Start Company Story */}
      <section>
        <div className="cs-cj-wrap">
          <div className="cj-left">
            <div className="cs-section-height"></div>
            <div className="cj-left-content">
              <h2 data-aos="fade-up" data-aos-duration="500">{t("about.story.title")}</h2>
              <div className="cs-height-25"></div>
              <div className="max-width-600">
                <p data-aos="fade-up" data-aos-duration="700">{t("about.story.paragraph1")}</p>
                <div className="cs-height-30"></div>
                <p data-aos="fade-up" data-aos-duration="1000">{t("about.story.paragraph2")}</p>
                <div className="cs-height-40"></div>
                <div className="list-feature" data-aos="fade-up" data-aos-duration="1100">
                  <h6>{t("about.story.foundedLabel")}: {t("about.story.foundedValue")}</h6>
                  <div className="cs-list-border"></div>
                  <h6>{t("about.story.locationLabel")}: {t("about.story.locationValue")}</h6>
                </div>
              </div>
              <div className="cs-height-165"></div>
            </div>
            <img src="/assets/img/about/cj-left-img.jpg" alt="Cargo vessel docked in a shipyard with industrial cranes at sunset" />
          </div>

          <div className="cj-right">
            <div className="cs-section-height"></div>
            <div className="cs-height-40"></div>
            <div className="cj-right-content">
              <img src="/assets/img/about/story-shipyard-vessel.jpg" alt="Vessel in dry dock alongside a shipyard crane" />
              <div className="cs-height-40"></div>
              <Link className="cs-primary-btn secondary-btn cs-color-white themecolor-bg cs-height-70 cs-width-220" to="/contact"><span>{t("about.cta.button")}</span></Link>
            </div>
          </div>
        </div>
      </section>
      {/* End Company Story */}

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

      {/* Start Values Section */}
      <section>
        <div className="container">
          <div className="cs-heading-with-animation text-center max-width-800 m-auto d-flex">
            <h2 className="cs-heading">{t("about.values.heading")}</h2>
            <span className="cs-text-style-h1 cs-animated-text">{t("about.values.animatedText")}</span>
          </div>
          <div className="cs-height-50"></div>
        </div>
        <div className="cs-feature-card-wrap lg-gutter-control">
          <div className="container">
            <div className="row">
              {[1, 2, 3, 4, 5].map((i) => (
                <div className="col-xl-4 col-md-6" key={`value-${i}`}>
                  <div className="feature-card-item cs_white_bg theme-border-wrap" data-aos="fade-up" data-aos-duration={300 + i * 100}>
                    <div className="b-top-left">
                      <div className="horizontal"></div>
                      <div className="verticle"></div>
                    </div>
                    <div className="b-top-right">
                      <div className="horizontal"></div>
                      <div className="verticle"></div>
                    </div>
                    <div className="b-bottom-right">
                      <div className="horizontal"></div>
                      <div className="verticle"></div>
                    </div>
                    <div className="b-bottom-left">
                      <div className="horizontal"></div>
                      <div className="verticle"></div>
                    </div>
                    <div className="cs-feature-icon">
                      <img src="/assets/img/feature-icon-shipyard.png" alt="" />
                    </div>
                    <h5>{t(`about.values.items.${i}.title`)}</h5>
                    <p>{t(`about.values.items.${i}.description`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* End Values Section */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start Services Area Section */}
      <section>
        <div className="container">
          <div className="cs-heading-with-animation text-center max-width-800 m-auto d-flex">
            <h2 className="cs-heading">{t("about.servicesArea.heading")}</h2>
            <span className="cs-text-style-h1 cs-animated-text">{t("about.servicesArea.animatedText")}</span>
          </div>
          <div className="cs-height-50"></div>
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="feature-card-item cs_white_bg theme-border-wrap" data-aos="fade-up" data-aos-duration="400">
                <div className="b-top-left">
                  <div className="horizontal"></div>
                  <div className="verticle"></div>
                </div>
                <div className="b-top-right">
                  <div className="horizontal"></div>
                  <div className="verticle"></div>
                </div>
                <div className="b-bottom-right">
                  <div className="horizontal"></div>
                  <div className="verticle"></div>
                </div>
                <div className="b-bottom-left">
                  <div className="horizontal"></div>
                  <div className="verticle"></div>
                </div>
                <h4>{t("about.servicesArea.shipRepair.title")}</h4>
                <div className="cs-height-25"></div>
                <div className="list-feature">
                  <h6>{t("about.servicesArea.shipRepair.items.1")}</h6>
                  <div className="cs-list-border"></div>
                  <h6>{t("about.servicesArea.shipRepair.items.2")}</h6>
                  <div className="cs-list-border"></div>
                  <h6>{t("about.servicesArea.shipRepair.items.3")}</h6>
                  <div className="cs-list-border"></div>
                  <h6>{t("about.servicesArea.shipRepair.items.4")}</h6>
                  <div className="cs-list-border"></div>
                  <h6>{t("about.servicesArea.shipRepair.items.5")}</h6>
                </div>
              </div>
              <div className="cs-height-40"></div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="feature-card-item cs_white_bg theme-border-wrap" data-aos="fade-up" data-aos-duration="500">
                <div className="b-top-left">
                  <div className="horizontal"></div>
                  <div className="verticle"></div>
                </div>
                <div className="b-top-right">
                  <div className="horizontal"></div>
                  <div className="verticle"></div>
                </div>
                <div className="b-bottom-right">
                  <div className="horizontal"></div>
                  <div className="verticle"></div>
                </div>
                <div className="b-bottom-left">
                  <div className="horizontal"></div>
                  <div className="verticle"></div>
                </div>
                <h4>{t("about.servicesArea.shipMaintenance.title")}</h4>
                <div className="cs-height-25"></div>
                <div className="list-feature">
                  <h6>{t("about.servicesArea.shipMaintenance.items.1")}</h6>
                  <div className="cs-list-border"></div>
                  <h6>{t("about.servicesArea.shipMaintenance.items.2")}</h6>
                </div>
              </div>
              <div className="cs-height-40"></div>
            </div>
          </div>
          <div className="cs-height-20"></div>
          <p className="text-center">{t("about.servicesArea.footnote")}</p>
        </div>
      </section>
      {/* End Services Area Section */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start Personnel & Know-how Section */}
      <section>
        <div className="container">
          <div className="cs-heading-with-animation text-center max-width-800 m-auto d-flex">
            <h2 className="cs-heading">{t("about.personnel.heading")}</h2>
            <span className="cs-text-style-h1 cs-animated-text">{t("about.personnel.animatedText")}</span>
          </div>
          <div className="cs-height-30"></div>
          <p className="text-center max-width-800 m-auto">{t("about.personnel.paragraph")}</p>
          <div className="cs-height-50"></div>
          <div className="row">
            {[1, 2, 3, 4].map((i) => (
              <div className="col-xl-3 col-md-6" key={`personnel-${i}`}>
                <div className="feature-card-item cs_white_bg theme-border-wrap" data-aos="fade-up" data-aos-duration={300 + i * 100}>
                  <div className="b-top-left">
                    <div className="horizontal"></div>
                    <div className="verticle"></div>
                  </div>
                  <div className="b-top-right">
                    <div className="horizontal"></div>
                    <div className="verticle"></div>
                  </div>
                  <div className="b-bottom-right">
                    <div className="horizontal"></div>
                    <div className="verticle"></div>
                  </div>
                  <div className="b-bottom-left">
                    <div className="horizontal"></div>
                    <div className="verticle"></div>
                  </div>
                  <div className="cs-feature-icon">
                    <img src={`/assets/img/${personnelIcons[i]}.svg`} alt="" />
                  </div>
                  <h6>{t(`about.personnel.items.${i}`)}</h6>
                </div>
                <div className="cs-height-30"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Personnel & Know-how Section */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start Pillars of Growth Section */}
      <section>
        <div className="cs-bg-black theme-dark">
          <div className="cs-height-150"></div>
          <div className="container">
            <div className="cs-heading-with-animation text-center max-width-800 m-auto d-flex">
              <h2 className="cs-heading cs_white_color">{t("about.pillars.heading")}</h2>
              <span className="cs-text-style-h1 cs-animated-text">{t("about.pillars.animatedText")}</span>
            </div>
            <div className="cs-height-50"></div>
            <div className="row">
              {[1, 2, 3, 4].map((i) => (
                <div className="col-xl-3 col-md-6" key={`pillar-${i}`}>
                  <div className="feature-card-item theme-border-wrap" data-aos="fade-up" data-aos-duration={300 + i * 100}>
                    <div className="b-top-left">
                      <div className="horizontal"></div>
                      <div className="verticle"></div>
                    </div>
                    <div className="b-top-right">
                      <div className="horizontal"></div>
                      <div className="verticle"></div>
                    </div>
                    <div className="b-bottom-right">
                      <div className="horizontal"></div>
                      <div className="verticle"></div>
                    </div>
                    <div className="b-bottom-left">
                      <div className="horizontal"></div>
                      <div className="verticle"></div>
                    </div>
                    <span className="cs-text-style-h2 themecolor">0{i}</span>
                    <div className="cs-height-15"></div>
                    <h5 className="cs_white_color">{t(`about.pillars.items.${i}.title`)}</h5>
                    <p>{t(`about.pillars.items.${i}.description`)}</p>
                  </div>
                  <div className="cs-height-30"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="cs-height-100"></div>
        </div>
      </section>
      {/* End Pillars of Growth Section */}

      {/* Start Client Area Full Width */}
      <ClientLogos />
      {/* End Client Area Full Width */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start Counter With CTA Section */}
      <section>
        <div className="cs-counter-wrap">
          <div className="theme-black-bg theme-dark">
            <div className="cs-height-100"></div>
            <div className="container">
              <div className="cs-couter-items">
                <div className="counter-item" data-aos="fade-top" data-aos-duration="400">
                  <h6>{t("about.counter.shipsServiced")}</h6>
                  <span id="count1" className="amin_auto_count cs-text-style-h2">76</span><span className="cs-text-style-h2">+</span>
                  <p>{t("about.counter.description")}</p>
                </div>
                <div className="counter-sep"></div>
                <div className="counter-item" data-aos="fade-top" data-aos-duration="600">
                  <h6>{t("about.counter.yearsExperience")}</h6>
                  <span id="count2" className="amin_auto_count cs-text-style-h2">5</span><span className="cs-text-style-h2">+</span>
                  <p>{t("about.counter.description")}</p>
                </div>
                <div className="counter-sep"></div>
                <div className="counter-item" data-aos="fade-top" data-aos-duration="800">
                  <h6>{t("about.counter.repairProjects")}</h6>
                  <span id="count3" className="amin_auto_count cs-text-style-h2">140</span>
                  <p>{t("about.counter.description")}</p>
                </div>
              </div>
            </div>
            <div className="cs-height-100"></div>
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
                  <Link to="/team-details?member=1">
                    <img className="animated-img" src="/assets/img/member/team-member-1.jpg" alt="" />
                  </Link>
                </div>
                <div className="member-in">
                  <div className="content">
                    <Link to="/team-details?member=1">
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
                  <Link to="/team-details?member=2">
                    <img className="animated-img" src="/assets/img/member/team-member-2.jpg" alt="" />
                  </Link>
                </div>
                <div className="member-in">
                  <div className="content">
                    <Link to="/team-details?member=2">
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
                  <Link to="/team-details?member=3">
                    <img className="animated-img" src="/assets/img/member/team-member-3.jpg" alt="" />
                  </Link>
                </div>
                <div className="member-in">
                  <div className="content">
                    <Link to="/team-details?member=3">
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
                  <Link to="/team-details?member=4">
                    <img className="animated-img" src="/assets/img/member/team-member-4.jpg" alt="" />
                  </Link>
                </div>
                <div className="member-in">
                  <div className="content">
                    <Link to="/team-details?member=4">
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
