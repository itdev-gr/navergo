import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <section className="cs-not-found-section">
      <div className="container">
        <div className="cs-not-found-inner">
          <div className="cs-not-found-badge" aria-hidden="true">
            <svg viewBox="0 0 48 48" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 34c3-2 6-2 9 0s6 2 9 0 6-2 9 0 6 2 9 0" />
              <path d="M6 40c3-2 6-2 9 0s6 2 9 0 6-2 9 0 6 2 9 0" />
              <path d="M12 28V16l12-8 12 8v12" />
              <path d="M18 28v-6h12v6" />
            </svg>
          </div>
          <span className="cs-not-found-eyebrow">{t("notFound.code")}</span>
          <h1 className="cs-not-found-title">{t("notFound.title")}</h1>
          <p className="cs-not-found-desc">{t("notFound.description")}</p>
          <div className="cs-not-found-actions">
            <Link to="/" className="cs-primary-btn secondary-btn cs-color-white themecolor-bg cs-height-60 cs-width-180">
              <span>{t("notFound.backToHome")}</span>
            </Link>
            <Link to="/contact" className="cs-not-found-secondary">
              {t("notFound.contactUs")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
