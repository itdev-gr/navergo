import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function GalleryPage() {
  const { t } = useTranslation();
  const imageAlt = t("gallery.imageAlt");

  return (
    <>
      {/* Start Common BreadCrumb */}
      <section>
        <div className="cs-breadcrumb-wrap theme-dark" data-src="/assets/img/breadcrumb.jpg">
          <div className="container">
            <div className="row cs_center">
              <div className="cs-bread-page-title-area">
                <div className="cs-page-title">
                  <h2 className="cs_white_color">{t("gallery.breadcrumb.title")}</h2>
                </div>
                <div className="breadcrumb">
                  <ul>
                    <li>
                      <Link to="/" className="cs-text_b_line"><span>{t("gallery.breadcrumb.fromHome")}</span></Link>
                    </li>
                    <li>/</li>
                    <li>{t("gallery.breadcrumb.current")}</li>
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

      {/* Start Gallery */}
      <section className="container">
        <div className="gallery" id="static-thumbnails">

          <div className="item gallery-horizontal">
            <a href="/assets/img/gallery_3.jpg">
              <img src="/assets/img/gallery_3.jpg" alt={imageAlt} />
              <div className="frame gallery-hover-icon">
                <i className="flaticon-magnifying-glass"></i>
              </div>
            </a>
          </div>

          <div className="item">
            <a href="/assets/img/gallery_4.jpg">
              <img src="/assets/img/gallery_4.jpg" alt={imageAlt} />
              <div className="frame gallery-hover-icon">
                <i className="flaticon-magnifying-glass"></i>
              </div>
            </a>
          </div>

          <div className="item">
            <a href="/assets/img/gallery_5.jpg">
              <img src="/assets/img/gallery_5.jpg" alt={imageAlt} />
              <div className="frame gallery-hover-icon">
                <i className="flaticon-magnifying-glass"></i>
              </div>
            </a>
          </div>

          <div className="item gallery-horizontal">
            <a href="/assets/img/gallery_6.jpg">
              <img src="/assets/img/gallery_6.jpg" alt={imageAlt} />
              <div className="frame gallery-hover-icon">
                <i className="flaticon-magnifying-glass"></i>
              </div>
            </a>
          </div>

          <div className="item">
            <a href="/assets/img/gallery_7.jpg">
              <img src="/assets/img/gallery_7.jpg" alt={imageAlt} />
              <div className="frame gallery-hover-icon">
                <i className="flaticon-magnifying-glass"></i>
              </div>
            </a>
          </div>

          <div className="item">
            <a href="/assets/img/gallery_1.jpg">
              <img src="/assets/img/gallery_1.jpg" alt={imageAlt} />
              <div className="frame gallery-hover-icon">
                <i className="flaticon-magnifying-glass"></i>
              </div>
            </a>
          </div>

          <div className="item gallery-vertical">
            <a href="/assets/img/gallery_2.jpg">
              <img src="/assets/img/gallery_2.jpg" alt={imageAlt} />
              <div className="frame gallery-hover-icon">
                <i className="flaticon-magnifying-glass"></i>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* Snd Gallery */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}
    </>
  );
}
