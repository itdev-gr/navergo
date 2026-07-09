import { Link, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ClientLogos from "../components/ClientLogos";
import { ZoomImage } from "../components/Lightbox";
import { services, serviceSlugs, getService } from "../data/services";

// Service titles in i18n are prefixed "01. ", "02. " … — strip that for the
// detail-page heading and breadcrumb.
const stripIndex = (title) => title.replace(/^\s*\d+\.\s*/, "");

export default function ServiceDetailsPage() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();

  const rawSlug = searchParams.get("service");
  const slug = serviceSlugs.includes(rawSlug) ? rawSlug : services[0].slug;
  const service = getService(slug);

  const title = stripIndex(t(`${service.base}.title`));
  const description = t(`${service.base}.description`);

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
                  <h2 className="cs_white_color">{title}</h2>
                </div>
                <div className="breadcrumb">
                  <ul>
                    <li>
                      <Link to="/" className="cs-text_b_line"><span>{t("serviceDetails.breadcrumb.fromHome")}</span></Link>
                    </li>
                    <li>/</li>
                    <li>
                      <Link to="/service" className="cs-text_b_line"><span>{t("service.breadcrumb.current")}</span></Link>
                    </li>
                    <li>/</li>
                    <li>{title}</li>
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
                <div className="srv-single-content">
                  <ZoomImage images={[{ src: service.image, alt: title }]} index={0} loading="lazy" className="project-main-img" data-aos="fade-top" data-aos-duration="400" src={service.image} alt={title} />
                  <div className="cs-height-50"></div>
                  <h3>{title}</h3>
                  <div className="cs-height-10"></div>
                  <p>{description}</p>
                  <p>{t("serviceDetails.content.intro2")}</p>

                  <div className="cs-height-45"></div>

                  <h5>{t("serviceDetails.content.whyChoose")}</h5>
                  <div className="cs-height-10"></div>
                  <p>{t("serviceDetails.content.whyChooseParagraph")}</p>
                  <div className="cs-height-50"></div>

                  <div className="cs-constr-process">
                    <div className="row">
                      {["comprehensive", "sustainable", "timely", "quality"].map((card, idx) => (
                        <div className="col-xl-6 col-md-6" key={card}>
                          <div data-aos="fade-top" data-aos-duration={400 + idx * 100} className="wcu-item theme-border-wrap" data-src="/assets/img/common-pattern-bg-small.jpg">
                            <div className="b-top-left"><div className="horizontal"></div><div className="verticle"></div></div>
                            <div className="b-top-right d-flex"><div className="horizontal"></div><div className="verticle"></div></div>
                            <div className="b-bottom-right d-flex flex-end"><div className="horizontal"></div><div className="verticle"></div></div>
                            <div className="b-bottom-left"><div className="verticle"></div><div className="horizontal"></div></div>
                            <h6>{t(`serviceDetails.whyChooseCards.${card}.title`)}</h6>
                            <div className="cs-height-5"></div>
                            <p>{t(`serviceDetails.whyChooseCards.${card}.description`)}</p>
                          </div>
                          <div className="cs-height-30"></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="cs-height-45"></div>
                  <h5>{t("serviceDetails.content.workingProcess")}</h5>
                  <div className="cs-height-10"></div>
                  <p>{t("serviceDetails.content.workingProcessParagraph")}</p>
                  <div className="cs-height-50"></div>

                  <div className="cs-constr-process">
                    <div className="row">
                      {["step1", "step2", "step3", "step4"].map((step, idx) => (
                        <div className="col-xl-6 col-md-6" key={step}>
                          <div data-aos="fade-top" data-aos-duration={400 + idx * 100} className="process-item cs-hover-card-anim" data-ser="hover-reveal">
                            <div className="content-for-top">
                              <div className="cs-border-icon">
                                <img loading="lazy" src={`/assets/img/${["one", "two", "three", "four"][idx]}.svg`} alt="" />
                              </div>
                              <h6>{t(`serviceDetails.process.${step}.title`)}</h6>
                              <div className="cs-height-5"></div>
                              <p>{t(`serviceDetails.process.${step}.description`)}</p>
                            </div>
                            <div className="magic" data-src="/assets/img/common-pattern-bg-small.jpg"></div>
                          </div>
                          <div className="cs-height-30"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-12 sticky-box">
              <div className="widget-sidebar sticky-box-child">
                <div className="category service-list widget-item theme-dark themecolor-bg">
                  <h6 className="cat-w-title">{t("serviceDetails.sidebar.otherServices")}</h6>
                  <ul>
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link to={`/service-details?service=${s.slug}`}>
                          <i className="flaticon-right-arrow"></i>{stripIndex(t(`${s.base}.title`))}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="cs-height-50"></div>

                <div className="theme-dark" data-src="/assets/img/service/steelwork/steelwork-04.jpg">
                  <h6 className="contact-widget-title">{t("serviceDetails.sidebar.contactTitle")}</h6>
                  <div className="border-100"></div>
                  <div className="cs-height-30"></div>
                  <div className="contact-items">
                    <div className="contact-item">
                      <p>{t("serviceDetails.sidebar.sayHello")}</p>
                      <a href="mailto:navergozk@gmail.com"><h6>navergozk@gmail.com</h6></a>
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
