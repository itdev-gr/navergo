import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Real project photos. span: "wide" -> full-width landscape (grid-column span 2),
// "tall" -> double-height portrait (grid-row span 2), "" -> single cell.
const GALLERY = [
  { src: "/assets/img/hero/hero-shipyard-01.jpg", span: "wide", alt: "Perama shipyard" },
  { src: "/assets/img/projects/anna-s-1.jpg", span: "tall", alt: "Anna S — bow in drydock" },
  { src: "/assets/img/projects/andros-king-1.jpg", span: "tall", alt: "Andros King — steel staircase" },
  { src: "/assets/img/projects/golden-princess-2.jpg", span: "tall", alt: "Golden Princess — central staircase" },
  { src: "/assets/img/projects/laskaro-2.jpg", span: "tall", alt: "Laskaro — drydock stern" },
  { src: "/assets/img/projects/north-star-1.jpg", span: "wide", alt: "North Star — vessel on hardstand" },
  { src: "/assets/img/projects/andros-king-2.jpg", span: "tall", alt: "Andros King — superstructure" },
  { src: "/assets/img/projects/anna-s-2.jpg", span: "tall", alt: "Anna S — stern and propeller" },
  { src: "/assets/img/projects/golden-princess-1.jpg", span: "", alt: "Golden Princess — anchor windlass" },
  { src: "/assets/img/projects/laskaro-3.jpg", span: "", alt: "Laskaro — piping and sea-valve works" },
  { src: "/assets/img/projects/andros-king-4.jpg", span: "tall", alt: "Andros King — under reconstruction" },
  { src: "/assets/img/projects/north-star-2.jpg", span: "tall", alt: "North Star — stern section" },
  { src: "/assets/img/projects/anna-s-3.jpg", span: "", alt: "Anna S — engine-room piping" },
  { src: "/assets/img/projects/laskaro-1.jpg", span: "", alt: "Laskaro vessel in drydock" },
  { src: "/assets/img/projects/anna-s-4.jpg", span: "tall", alt: "Anna S — sea-valve maintenance" },
];

const SPAN_CLASS = { wide: "gallery-vertical", tall: "gallery-horizontal", "": "" };

export default function GalleryPage() {
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
          {GALLERY.map((g) => (
            <div className={`item ${SPAN_CLASS[g.span]}`.trim()} key={g.src}>
              <a href={g.src}>
                <img loading="lazy" src={g.src} alt={g.alt} />
                <div className="frame gallery-hover-icon">
                  <i className="flaticon-magnifying-glass"></i>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
      {/* End Gallery */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}
    </>
  );
}
