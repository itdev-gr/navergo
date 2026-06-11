import { Link, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ContactForm from "../components/ContactForm";

export default function TeamDetailsPage() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const rawMember = searchParams.get("member");
  const memberKey = ["1", "2"].includes(rawMember) ? rawMember : "1";
  const memberName = t(`about.team.members.${memberKey}.name`);
  const memberRole = t(`about.team.members.${memberKey}.role`);
  const memberImage = `/assets/img/member/team-member-${memberKey}.jpg`;
  return (
    <>
      {/* Start Common BreadCrumb */}
      <section>
        <div className="cs-breadcrumb-classic cs_gray_bg cs_center">
          <div className="container">
            <div className="cs-bc-classic-content">
              <div className="cs-page-title">
                <h4>{t("teamDetails.breadcrumb.title")}</h4>
              </div>
              <div className="breadcrumb">
                <ul>
                  <li>
                    <Link to="/" className="cs-text_b_line"><span>{t("teamDetails.breadcrumb.fromHome")}</span></Link>
                  </li>
                  <li>/</li>
                  <li>{t("teamDetails.breadcrumb.current")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Common BreadCrumb */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start Team Section */}
      <section>
        <div className="team-single-wrap">
          <div className="container stickysec-wrap clearfix">
            <div className="row">
              <div className="col-lg-4 sticky-box">
                <div className="sticky-box-child">
                  <div className="member-img-single">
                    <div className="animate-img-wrap">
                      <div className="reveal"></div>
                      <img loading="lazy" src={memberImage} alt={memberName} />
                    </div>
                  </div>
                  <div className="cs-height-50"></div>
                  <div className="cs_gray_bg" data-aos="fade-up" data-aos-duration="500">
                    <div className="cs-height-50"></div>
                    <div className="contact-items">
                      <div className="contact-item">
                        <p>{t("teamDetails.contact.sayHello")}</p>
                        <a href="mailto:navergozk@gmail.com">
                          <h6>navergozk@gmail.com</h6>
                        </a>
                      </div>
                      <div className="cs-height-20"></div>
                      <div className="contact-item">
                        <p>{t("teamDetails.contact.meetUs")}</p>
                        <h6 style={{ whiteSpace: "pre-line" }}>{t("teamDetails.contact.address")}</h6>
                      </div>
                    </div>
                    <div className="cs-height-30"></div>

                    <div className="theme-dark">
                      <div className="theme-social contact-items">
                        <ul>
                          <li>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                              <i className="flaticon-facebook-app-symbol"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                              <i className="flaticon-linkedin-big-logo"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                              <i className="flaticon-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                              <i className="flaticon-instagram"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="cs-height-50"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-7">
                <div className="content scolling-content">
                  <div className="member-info-single">
                    <h2 className="cs_medium">{memberName}</h2>
                    <div className="cs-height-5"></div>
                    <p className="cs-text-style-h6 cs_light">{memberRole}</p>
                    <div className="cs-height-20"></div>
                    <p>{t("teamDetails.member.bio1")}</p>
                    <p>{t("teamDetails.member.bio2")}</p>
                  </div>

                  <div className="cs-height-30"></div>


                  <blockquote>
                    {t("teamDetails.blockquote")}
                  </blockquote>


                  <div className="cs-height-70"></div>

                  <div className="skills-wrap">

                    <div className="member-skills-wrap" data-aos="fade-top" data-aos-duration="700">
                      <div className="position-relative">
                        <h4 className="cs-heading">{t("teamDetails.skills.headingPrefix")} <span>{memberName}</span></h4>
                        <span className="cs-text-style-h1 cs-animated-text">{t("teamDetails.skills.animatedText")}</span>
                      </div>

                      <div className="cs-height-35"></div>

                      <div className="cs-skill-box">
                        <div className="cs-skill-text">
                          <p className="cs-skill-title">{t("teamDetails.skills.structural")}</p>
                          <p className="cs-skill-per">99%</p>
                        </div>
                        <div className="cs-skill-bar">
                          <div className="cs-skill-fill" data-percentage="99"></div>
                        </div>
                      </div>

                      <div className="cs-height-20"></div>

                      <div className="cs-skill-box">
                        <div className="cs-skill-text">
                          <p className="cs-skill-title">{t("teamDetails.skills.quality")}</p>
                          <p className="cs-skill-per">98%</p>
                        </div>
                        <div className="cs-skill-bar">
                          <div className="cs-skill-fill" data-percentage="98"></div>
                        </div>
                      </div>

                      <div className="cs-height-20"></div>

                      <div className="cs-skill-box">
                        <div className="cs-skill-text">
                          <p className="cs-skill-title">{t("teamDetails.skills.materials")}</p>
                          <p className="cs-skill-per">90%</p>
                        </div>
                        <div className="cs-skill-bar">
                          <div className="cs-skill-fill" data-percentage="90"></div>
                        </div>
                      </div>

                      <div className="cs-height-20"></div>

                      <div className="cs-skill-box">
                        <div className="cs-skill-text">
                          <p className="cs-skill-title">{t("teamDetails.skills.leadership")}</p>
                          <p className="cs-skill-per">95%</p>
                        </div>
                        <div className="cs-skill-bar">
                          <div className="cs-skill-fill" data-percentage="95"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cs-height-70"></div>

                  <div className="member-single-form" data-aos="fade-top" data-aos-duration="800">
                    <div className="position-relative">
                      <h4>{t("teamDetails.form.headingPrefix")} <span>{memberName}</span></h4>
                      <span className="cs-text-style-h1 cs-animated-text">{t("teamDetails.form.animatedText")}</span>
                    </div>

                    <div className="cs-height-35"></div>
                    <ContactForm tPrefix="teamDetails.form" />
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
    </>
  );
}
