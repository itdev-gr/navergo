import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <>
      <div className="cs-height-100"></div>

      {/* Start 404 */}
      <section className="cs_gray_bg" data-src="/assets/img/footer-bg.png">
        <div className="error-wrap" data-src="/assets/img/error-bg.png">
          <div className="error-section-wrap">
            <div className="container">
              <div className="error-content">

                <h1 className="error-title">{t("notFound.code")}</h1>
                <h2 className="erro-sub-title cs_semi_bold">{t("notFound.title")}</h2>
                <p className="erro-desp">{t("notFound.description")}</p>

                <Link to="/" className="cs-primary-btn secondary-btn cs-color-white themecolor-bg cs-height-60 cs-width-180"><span>{t("notFound.backToHome")}</span></Link>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End 404 */}
    </>
  );
}
