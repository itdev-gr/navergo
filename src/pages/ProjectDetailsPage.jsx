import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ProjectDetailsPage() {
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
                  <h2 className="cs_white_color">{t("projectDetails.breadcrumb.title")}</h2>
                </div>
                <div className="breadcrumb">
                  <ul>
                    <li>
                      <Link to="/" className="cs-text_b_line"><span>{t("projectDetails.breadcrumb.fromHome")}</span></Link>
                    </li>
                    <li>/</li>
                    <li>{t("projectDetails.breadcrumb.current")}</li>
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

      {/* Start Project Details content */}
      <section>
        <div className="container">
          <div className="row stickysec-wrap">
            <div className="col-lg-8 col-md-12 scolling-content">
              <div className="scolling-content">
                <img data-aos="fade-top" data-aos-duration="400" src="/assets/img/projects/project-single-main.jpg" alt="" />
                <div className="cs-height-50"></div>
                <h3>{t("projectDetails.content.title")}</h3>
                <div className="cs-height-10"></div>
                <p>{t("projectDetails.content.intro1")}</p>
                <p>{t("projectDetails.content.intro2")}</p>

                <div className="cs-height-30"></div>

                <h5>{t("projectDetails.content.overviewTitle")}</h5>
                <div className="cs-height-10"></div>
                <p>{t("projectDetails.content.overviewParagraph")}</p>
                <div className="cs-height-35"></div>

                <blockquote className="theme-border-wrap" data-src="/assets/img/cta-bg.jpg">

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

                  {t("projectDetails.content.blockquote")}
                </blockquote>

                <div className="cs-height-50"></div>

                <h5>{t("projectDetails.content.designTitle")}</h5>
                <div className="cs-height-10"></div>
                <p>{t("projectDetails.content.designParagraph1")}</p>
                <div className="cs-height-10"></div>

                <p>{t("projectDetails.content.designParagraph2")}</p>

                <div className="cs-height-40"></div>

                <h5>{t("projectDetails.content.processTitle")}</h5>
                <div className="cs-height-10"></div>

                <p>{t("projectDetails.content.processParagraph")}</p>

                <div className="cs-height-30"></div>

                <div className="cs-constr-process">
                  <div className="row">
                    <div className="col-xl-6 col-md-6">
                      <div className="process-item" data-aos="fade-top" data-aos-duration="400">
                        <h6>{t("projectDetails.process.step1.title")}</h6>
                        <p>{t("projectDetails.process.step1.description")}</p></div>
                      <div className="cs-height-30"></div>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <div className="process-item" data-aos="fade-top" data-aos-duration="500">
                        <h6>{t("projectDetails.process.step2.title")}</h6>
                        <p>{t("projectDetails.process.step2.description")}</p></div>
                      <div className="cs-height-30"></div>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <div className="process-item" data-aos="fade-top" data-aos-duration="600">
                        <h6>{t("projectDetails.process.step3.title")}</h6>
                        <p>{t("projectDetails.process.step3.description")}</p></div>
                      <div className="cs-height-30"></div>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <div className="process-item" data-aos="fade-top" data-aos-duration="700">
                        <h6>{t("projectDetails.process.step4.title")}</h6>
                        <p>{t("projectDetails.process.step4.description")}</p></div>
                      <div className="cs-height-30"></div>
                    </div>
                  </div>
                </div>

                <div className="cs-height-15"></div>

                <h5>{t("projectDetails.content.challengesTitle")}</h5>
                <div className="cs-height-10"></div>

                <p>{t("projectDetails.content.challengesParagraph")}</p>

                <div className="cs-height-30"></div>

                <div className="cs-constr-process">
                  <div className="row">
                    <div className="col-xl-5 col-md-5" data-aos="fade-top" data-aos-duration="400">
                      <h6>{t("projectDetails.challenges.urban.title")}</h6>
                      <p>{t("projectDetails.challenges.urban.description")}</p>
                    </div>
                    <div className="col-xl-2">
                      <div className="cs-border-pr"></div>
                    </div>
                    <div className="col-xl-5 col-md-5" data-aos="fade-top" data-aos-duration="600">
                      <h6>{t("projectDetails.challenges.sustainability.title")}</h6>
                      <p>{t("projectDetails.challenges.sustainability.description")}</p>
                    </div>
                  </div>
                </div>


                <div className="cs-height-40"></div>

                <h5>{t("projectDetails.content.outcomeTitle")}</h5>
                <div className="cs-height-10"></div>

                <p>{t("projectDetails.content.outcomeParagraph")}</p>

                <div className="cs-height-30"></div>
                <img data-aos="fade-top" data-aos-duration="400" src="/assets/img/projects/project-single-image-2.jpg" alt="" />


                <div className="cs-height-50"></div>

                <p>{t("projectDetails.content.closingParagraph1")}</p>

                <p>{t("projectDetails.content.closingParagraph2")}</p>


              </div>
            </div>
            <div className="col-lg-4 col-md-12 sticky-box">
              <div className="widget-item widget-sidebar pw theme-dark sticky-box-child">
                <h6>{t("projectDetails.sidebar.heading")}</h6>
                <div className="cs-height-30"></div>
                <div className="project-info">
                  <div className="p-info-item">
                    <p>{t("projectDetails.sidebar.projectName")}</p>
                    <h6>{t("projectDetails.sidebar.projectNameValue")}</h6>
                  </div>
                  <div className="p-info-item">
                    <p>{t("projectDetails.sidebar.location")}</p>
                    <h6>{t("projectDetails.sidebar.locationValue")}</h6>
                  </div>
                  <div className="p-info-item">
                    <p>{t("projectDetails.sidebar.client")}</p>
                    <h6>{t("projectDetails.sidebar.clientValue")}</h6>
                  </div>
                  <div className="p-info-item">
                    <p>{t("projectDetails.sidebar.completionDate")}</p>
                    <h6>{t("projectDetails.sidebar.completionDateValue")}</h6>
                  </div>
                  <div className="p-info-item">
                    <p>{t("projectDetails.sidebar.projectValue")}</p>
                    <h6>{t("projectDetails.sidebar.projectValueValue")}</h6>
                  </div>
                  <div className="p-info-item">
                    <p>{t("projectDetails.sidebar.scope")}</p>
                    <h6>{t("projectDetails.sidebar.scopeValue")}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Project Details content */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start CTA Section */}
      <section>
        <div className="cs-cta-wrap" data-src="/assets/img/cta-bg.jpg">
          <div className="container">
            <div className="row">
              <div className="cta-content text-center">

                <div className="cta-content max-width-800 m-auto">
                  <div className="cs-height-100"></div>
                  <h2 data-aos="fade-up" data-aos-duration="400">{t("projectDetails.cta.headingPart1")} <span className="themecolor" data-aos="fade-up" data-aos-duration="1000">{t("projectDetails.cta.headingPart2")}</span> {t("projectDetails.cta.headingPart3")}</h2>

                  <div className="cs-height-15"></div>

                  <p>{t("projectDetails.cta.paragraph")}</p>
                  <div className="cs-height-25"></div>

                  <Link to="/contact" className="cs-text_b_line"><span>{t("projectDetails.cta.button")}</span>
                    <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>

                <div className="cs-height-100"></div>

                {/* start client slider */}
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
                {/* End Clients Slider */}

                <div className="cs-height-100"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End CTA Section */}
    </>
  );
}
