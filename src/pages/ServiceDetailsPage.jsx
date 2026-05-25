import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ClientLogos from "../components/ClientLogos";

export default function ServiceDetailsPage() {
  const { t } = useTranslation();

  const sidebarLinks = [
    "metalRepairs",
    "metalConstruction",
    "piping",
    "tankWorks",
    "structuralReinforcement",
    "pneumaticHydraulic",
    "wearRestoration",
  ];

  const addressLines = t("serviceDetails.sidebar.address").split("\n");

  return (
    <>
      {/* Start Common BreadCrumb */}
      <section>
        <div className="cs-breadcrumb-wrap theme-dark" data-src="/assets/img/breadcrumb.jpg">
          <div className="container">
            <div className="row cs_center">
              <div className="cs-bread-page-title-area">
                <div className="cs-page-title">
                  <h2 className="cs_white_color">{t("serviceDetails.breadcrumb.title")}</h2>
                </div>
                <div className="breadcrumb">
                  <ul>
                    <li>
                      <Link to="/" className="cs-text_b_line"><span>{t("serviceDetails.breadcrumb.fromHome")}</span></Link>
                    </li>
                    <li>/</li>
                    <li>{t("serviceDetails.breadcrumb.current")}</li>
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

      {/* Start Content */}
      <section>
        <div className="container">
          <div className="row stickysec-wrap clearfix">
            <div className="col-xl-8 col-md-12">
              <div className="scolling-content">
                <div className="container">
                  <div className="row">
                    <div className="srv-single-content">
                      <div className="">
                        <img data-aos="fade-top" data-aos-duration="400" src="/assets/img/projects/project-single-main.jpg" alt="" />
                        <div className="cs-height-50"></div>
                        <h3>{t("serviceDetails.content.title")}</h3>
                        <div className="cs-height-10"></div>
                        <p>{t("serviceDetails.content.intro1")}</p>
                        <p>{t("serviceDetails.content.intro2")}</p>

                        <div className="cs-height-45"></div>

                        <h5>{t("serviceDetails.content.whyChoose")}</h5>
                        <div className="cs-height-10"></div>
                        <p>{t("serviceDetails.content.whyChooseParagraph")}</p>
                        <div className="cs-height-50"></div>

                        <div className="cs-constr-process">
                          <div className="row">
                            <div className="col-xl-6 col-md-6">
                              <div data-aos="fade-top" data-aos-duration="400" className="wcu-item theme-border-wrap" data-src="/assets/img/common-pattern-bg-small.jpg">
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
                              <h6>{t("serviceDetails.whyChooseCards.comprehensive.title")}</h6>
                              <div className="cs-height-5"></div>
                              <p>{t("serviceDetails.whyChooseCards.comprehensive.description")}</p>

                            </div>
                            <div className="cs-height-30"></div>
                            </div>
                            <div className="col-xl-6 col-md-6">
                              <div data-aos="fade-top" data-aos-duration="500" className="wcu-item theme-border-wrap" data-src="/assets/img/common-pattern-bg-small.jpg">

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
                              <h6>{t("serviceDetails.whyChooseCards.sustainable.title")}</h6>
                              <div className="cs-height-5"></div>
                              <p>{t("serviceDetails.whyChooseCards.sustainable.description")}</p>

                            </div>
                            <div className="cs-height-30"></div>
                            </div>
                            <div className="col-xl-6 col-md-6">
                              <div data-aos="fade-top" data-aos-duration="600" className="wcu-item theme-border-wrap" data-src="/assets/img/common-pattern-bg-small.jpg">
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
                              <h6>{t("serviceDetails.whyChooseCards.timely.title")}</h6>
                              <div className="cs-height-5"></div>
                              <p>{t("serviceDetails.whyChooseCards.timely.description")}</p>
                            </div>
                            <div className="cs-height-30"></div>
                            </div>

                            <div className="col-xl-6 col-md-6">
                              <div data-aos="fade-top" data-aos-duration="700" className="wcu-item theme-border-wrap" data-src="/assets/img/common-pattern-bg-small.jpg">
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
                              <h6>{t("serviceDetails.whyChooseCards.quality.title")}</h6>
                              <div className="cs-height-5"></div>
                              <p>{t("serviceDetails.whyChooseCards.quality.description")}</p>
                            </div>
                            <div className="cs-height-30"></div>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className="cs-height-45"></div>
                        <h5>{t("serviceDetails.content.workingProcess")}</h5>
                        <div className="cs-height-10"></div>
                        <p>{t("serviceDetails.content.workingProcessParagraph")}</p>
                        <div className="cs-height-50"></div>

                        <div className="cs-constr-process">
                          <div className="row">
                            <div className="col-xl-6 col-md-6">
                              <div data-aos="fade-top" data-aos-duration="400" className="process-item cs-hover-card-anim" data-ser="hover-reveal">
                                <div className="content-for-top">
                                  <div className="cs-border-icon">
                                    <img src="/assets/img/one.svg" alt="" />
                                  </div>
                                  <h6>{t("serviceDetails.process.step1.title")}</h6>
                                  <div className="cs-height-5"></div>
                                  <p>{t("serviceDetails.process.step1.description")}</p>
                                </div>

                              <div className="magic" data-src="/assets/img/common-pattern-bg-small.jpg"></div>
                            </div>
                            <div className="cs-height-30"></div>
                            </div>
                            <div className="col-xl-6 col-md-6">
                              <div data-aos="fade-top" data-aos-duration="500" className="process-item cs-hover-card-anim" data-ser="hover-reveal">
                                <div className="content-for-top">
                                  <div className="cs-border-icon">
                                    <img src="/assets/img/two.svg" alt="" />
                                  </div>
                                  <h6>{t("serviceDetails.process.step2.title")}</h6>
                                  <div className="cs-height-5"></div>
                                  <p>{t("serviceDetails.process.step2.description")}</p></div>

                                  <div className="magic" data-src="/assets/img/common-pattern-bg-small.jpg"></div>
                                </div>
                                <div className="cs-height-30"></div>
                            </div>
                            <div className="col-xl-6 col-md-6">
                              <div data-aos="fade-top" data-aos-duration="600" className="process-item cs-hover-card-anim" data-ser="hover-reveal">
                                <div className="content-for-top">
                                  <div className="cs-border-icon">
                                    <img src="/assets/img/three.svg" alt="" />
                                  </div>
                                  <h6>{t("serviceDetails.process.step3.title")}</h6>
                                  <div className="cs-height-5"></div>
                                  <p>{t("serviceDetails.process.step3.description")}</p>
                                </div>
                              <div className="magic" data-src="/assets/img/common-pattern-bg-small.jpg"></div>

                            </div>
                            <div className="cs-height-30"></div>
                            </div>
                            <div className="col-xl-6 col-md-6">
                              <div data-aos="fade-top" data-aos-duration="700" className="process-item cs-hover-card-anim" data-ser="hover-reveal">
                                <div className="content-for-top">
                                  <div className="cs-border-icon">
                                    <img src="/assets/img/four.svg" alt="" />
                                  </div>
                                  <h6>{t("serviceDetails.process.step4.title")}</h6>
                                  <div className="cs-height-5"></div>
                                  <p>{t("serviceDetails.process.step4.description")}</p>

                                </div>
                              <div className="magic" data-src="/assets/img/common-pattern-bg-small.jpg"></div>
                            </div>
                            <div className="cs-height-30"></div>
                            </div>
                          </div>
                        </div>

                      </div>

                      <div className="cs-height-40"></div>

                      <h5>{t("serviceDetails.content.detailsTitle")}</h5>
                      <div className="cs-height-10"></div>

                      <p>{t("serviceDetails.content.detailsParagraph1")}</p>

                      <div className="cs-height-30"></div>
                      <img data-aos="fade-top" data-aos-duration="400" src="/assets/img/projects/project-single-image-2.jpg" alt="" />


                        <div className="cs-height-50"></div>

                        <p>{t("serviceDetails.content.detailsParagraph2")}</p>

                        <p>{t("serviceDetails.content.detailsParagraph3")}</p>
                      </div>

                  </div>
                </div>

              </div>
              <div className="col-xl-4 col-md-12 sticky-box">
                <div className="widget-sidebar sticky-box-child">
                  <div className="category service-list widget-item theme-dark themecolor-bg">
                    <h6 className="cat-w-title">{t("serviceDetails.sidebar.otherServices")}</h6>
                    <ul>
                      {sidebarLinks.map((key, idx) => (
                        <li key={idx}><a href="#"><i className="flaticon-right-arrow"></i>{t(`serviceDetails.sidebar.links.${key}`)}</a></li>
                      ))}
                    </ul>

                  </div>
                  <div className="cs-height-50"></div>

                  <div className="theme-dark" data-src="/assets/img/service/contact-widget-bg.jpg">
                    <h6 className="contact-widget-title">{t("serviceDetails.sidebar.contactTitle")}</h6>
                    <div className="border-100"></div>
                    <div className="cs-height-30"></div>
                    <div className="contact-items">
                      <div className="contact-item">
                        <p>{t("serviceDetails.sidebar.sayHello")}</p>
                        <a href="tel:4065550120"><h6>(406) 555-0120</h6></a>
                      </div>
                      <div className="cs-height-20"></div>
                      <div className="contact-item">
                        <p>{t("serviceDetails.sidebar.sayHello")}</p>
                        <a href="mailto:info@email.com"><h6>info@email.com</h6></a>
                      </div>
                      <div className="cs-height-20"></div>
                      <div className="contact-item">
                        <p>{t("serviceDetails.sidebar.meetUs")}</p>
                        <h6>
                          {addressLines.map((line, idx) => (
                            <span key={idx}>
                              {line}
                              {idx < addressLines.length - 1 && <br />}
                            </span>
                          ))}
                        </h6>
                      </div>
                    </div>
                    <div className="cs-height-30"></div>
                    <div className="contact-widget-btn">
                      <Link to="/contact" className="cs-text_b_line"><span>{t("serviceDetails.sidebar.sendMessage")}</span>
                        <i className="flaticon-right-arrow"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
      {/* End Content */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start CTA */}
      <section>
        <div className="cs-cta-wrap" data-src="/assets/img/cta-bg.jpg">
          <div className="container">
            <div className="row">
              <div className="cta-content text-center">
                <div className="cta-content max-width-800 m-auto">
                  <div className="cs-height-100"></div>
                  <h2 data-aos="fade-up" data-aos-duration="400">{t("serviceDetails.cta.headingPart1")} <span className="themecolor" data-aos="fade-up" data-aos-duration="1000">{t("serviceDetails.cta.headingPart2")}</span> {t("serviceDetails.cta.headingPart3")}</h2>
                  <div className="cs-height-15"></div>
                  <p>{t("serviceDetails.cta.paragraph")}</p>
                  <div className="cs-height-25"></div>
                  <Link to="/contact" className="cs-text_b_line"><span>{t("serviceDetails.cta.button")}</span>
                    <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
                <div className="cs-height-100"></div>
                {/* Start Client Slider */}
                <ClientLogos />
                {/* End Client Slider */}
                <div className="cs-height-100"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End CTA */}
    </>
  );
}
