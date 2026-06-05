import { Link, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ClientLogos from "../components/ClientLogos";
import { projects, projectSlugs, getProject } from "../data/projects";

export default function ProjectDetailsPage() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();

  const rawSlug = searchParams.get("project");
  const slug = projectSlugs.includes(rawSlug) ? rawSlug : projects[0].slug;
  const project = getProject(slug);

  const base = `projects.items.${slug}`;
  const title = t(`${base}.title`);
  const category = t(`${base}.category`);
  const introRaw = t(`${base}.intro`, { returnObjects: true });
  const introParas = Array.isArray(introRaw) ? introRaw : [introRaw];
  const sidebarScope = t(`${base}.sidebarScope`);
  const period = t(`${base}.period`);
  const scope = t(`${base}.scope`, { returnObjects: true });
  const scopeList = Array.isArray(scope) ? scope : [];
  const galleryImages = project.images.slice(1);

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
                      <Link to="/" className="cs-text_b_line"><span>{t("projectDetails.breadcrumb.fromHome")}</span></Link>
                    </li>
                    <li>/</li>
                    <li>
                      <Link to="/projects" className="cs-text_b_line"><span>{t("projects.breadcrumb.current")}</span></Link>
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

      {/* Start Project Details content */}
      <section>
        <div className="container">
          <div className="row stickysec-wrap">
            <div className="col-lg-8 col-md-12 scolling-content">
              <div className="scolling-content">
                <img data-aos="fade-top" data-aos-duration="400" src={project.images[0]} alt={title} />
                <div className="cs-height-50"></div>
                <h3>{title}</h3>
                <div className="cs-height-10"></div>
                {introParas.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}

                <div className="cs-height-35"></div>

                <h5>{t("projectDetails.scopeHeading")}</h5>
                <div className="cs-height-20"></div>
                <ul className="project-scope-list">
                  {scopeList.map((item, idx) => (
                    <li key={idx} data-aos="fade-top" data-aos-duration={300 + idx * 100}>{item}</li>
                  ))}
                </ul>

                <div className="cs-height-40"></div>
                {galleryImages.length > 1 ? (
                  <div className="row project-gallery">
                    {galleryImages.map((src, i) => (
                      <div className="col-md-6" key={i}>
                        <img className="project-gallery-img" data-aos="fade-top" data-aos-duration={400 + i * 100} src={src} alt={title} />
                        <div className="cs-height-30"></div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <img data-aos="fade-top" data-aos-duration="400" src={galleryImages[0]} alt={title} />
                )}
              </div>
            </div>
            <div className="col-lg-4 col-md-12 sticky-box">
              <div className="widget-item widget-sidebar pw theme-dark sticky-box-child">
                <h6>{t("projectDetails.sidebar.heading")}</h6>
                <div className="cs-height-30"></div>
                <div className="project-info">
                  <div className="p-info-item">
                    <p>{t("projectDetails.sidebar.projectName")}</p>
                    <h6>{title}</h6>
                  </div>
                  <div className="p-info-item">
                    <p>{t("projectDetails.sidebar.typeOfWorks")}</p>
                    <h6>{category}</h6>
                  </div>
                  <div className="p-info-item">
                    <p>{t("projectDetails.sidebar.period")}</p>
                    <h6>{period}</h6>
                  </div>
                  <div className="p-info-item">
                    <p>{t("projectDetails.sidebar.scope")}</p>
                    <h6>{sidebarScope}</h6>
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
                <ClientLogos />
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
