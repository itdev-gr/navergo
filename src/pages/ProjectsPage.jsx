import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ClientLogos from "../components/ClientLogos";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  const { t } = useTranslation();
  const aosDurations = ["300", "500", "700", "900", "1100", "1300"];

  return (
    <>
      {/* Start Common BreadCrumb */}
      <section>
        <div className="cs-breadcrumb-wrap theme-dark" data-src="/assets/img/breadcrumb.jpg">
          <div className="container">
            <div className="row cs_center">
              <div className="cs-bread-page-title-area">
                <div className="cs-page-title">
                  <h2 className="cs_white_color">{t("projects.breadcrumb.title")}</h2>
                </div>
                <div className="breadcrumb">
                  <ul>
                    <li>
                      <Link to="/" className="cs-text_b_line"><span>{t("projects.breadcrumb.fromHome")}</span></Link>
                    </li>
                    <li>/</li>
                    <li>{t("projects.breadcrumb.current")}</li>
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

      {/* Start Projects Section*/}
      <section className="projects-list">
        <div className="container lg-gutter-control">
          <div className="row">
            {projects.map((project, idx) => {
              const to = `/project-details?project=${project.slug}`;
              const title = t(`projects.items.${project.slug}.title`);
              return (
                <div className="col-xl-6 col-md-12" key={project.slug}>
                  <div className="project-item" data-aos="fade-up" data-aos-duration={aosDurations[idx]}>
                    <div className="project-item-in">
                      <Link to={to}>
                        <img loading="lazy" src={project.images[0]} alt={title} />
                      </Link>
                    </div>
                    <div className="project-item-text">
                      <div className="tag-item">
                        <Link to={to}><span>{t(`projects.items.${project.slug}.category`)}</span></Link>
                      </div>
                      <Link to={to}><h5>{title}</h5></Link>
                      <Link to={to} className="cs-text_b_line"><span>{t("projects.viewProject")}</span>
                        <i className="flaticon-right-arrow"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="cs-height-30"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* End Projects Section*/}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      <section>
        <div className="cs-cta-wrap" data-src="/assets/img/cta-bg.jpg">
          <div className="container">
            <div className="row">
              <div className="cta-content text-center">

                <div className="cta-content max-width-800 m-auto">
                  <div className="cs-height-100"></div>
                  <h2 data-aos="fade-up" data-aos-duration="400">{t("projects.cta.headingPart1")} <span className="themecolor" data-aos="fade-up" data-aos-duration="1000">{t("projects.cta.headingPart2")}</span> {t("projects.cta.headingPart3")}</h2>

                  <div className="cs-height-15"></div>

                  <p>{t("projects.cta.paragraph")}</p>
                  <div className="cs-height-25"></div>

                  <Link to="/contact" className="cs-text_b_line"><span>{t("projects.cta.button")}</span>
                    <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>

                <div className="cs-height-100"></div>

                {/* Start Client Area Full Width */}
                <ClientLogos />
                {/* End Client Area Full Width */}

                <div className="cs-height-100"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
