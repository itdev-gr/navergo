import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function TeamPage() {
  const { t } = useTranslation();
  const members = [{ key: "1" }, { key: "2" }];

  return (
    <>
      {/* Start Common BreadCrumb */}
      <section>
        <div className="cs-breadcrumb-wrap theme-dark" data-src="/assets/img/breadcrumb.jpg">
          <div className="container">
            <div className="row cs_center">
              <div className="cs-bread-page-title-area">
                <div className="cs-page-title">
                  <h2 className="cs_white_color">{t("team.breadcrumb.title")}</h2>
                </div>
                <div className="breadcrumb">
                  <ul>
                    <li>
                      <Link to="/" className="cs-text_b_line"><span>{t("team.breadcrumb.fromHome")}</span></Link>
                    </li>
                    <li>/</li>
                    <li>{t("team.breadcrumb.current")}</li>
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

      {/* Start Team Section */}
      <section>
        <div className="team-wrap">
          <div className="container">
            <div className="row team-no-photos cs-exclude-top-40">
              {members.map((m) => (
                <div className="col-xl-6 col-md-6" key={m.key}>
                  <div className="team-card-plain">
                    <div className="content">
                      <h6>{t(`team.members.${m.key}.name`)}</h6>
                      <p>{t(`team.members.${m.key}.role`)}</p>
                    </div>
                    <div className="theme-social">
                      <ul>
                        <li>
                          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <i className="flaticon-facebook-app-symbol"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="flaticon-linkedin-big-logo"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">
                            <i className="flaticon-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <i className="flaticon-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}

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
