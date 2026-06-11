import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const { t } = useTranslation();
  return (
    <header className="cs_site_header cs-header-with-bg cs_style1 cs_sticky_header">
      <div className="cs_main_header">
        <div className="cs_main_header_in">
          <div className="cs_main_header_left">
            <div className="cs-constr-header-logo">
              <Link
                className="cs_site_branding"
                to="/"
                style={{
                  color: "#7c1d1f",
                  fontWeight: 800,
                  fontSize: "36px",
                  letterSpacing: "2px",
                  lineHeight: 1,
                  textDecoration: "none",
                }}
              >
                NAVERGO
              </Link>
            </div>
          </div>

          <div className="cs-constr-header-middle">
            <div className="cs_nav cs_medium">
              <ul className="cs_nav_list">
                <li>
                  <Link to="/" className="cs-text_b_line"><span>{t("common.nav.home")}</span></Link>
                </li>
                <li className="menu-item-has-children">
                  <Link to="/about" className="cs-text_b_line"><span>{t("common.nav.about")}</span></Link>
                  <ul>
                    <li>
                      <Link to="/team" className="cs-text_b_line"><span>{t("common.nav.team")}</span></Link>
                    </li>
                    <li>
                      <Link to="/faq" className="cs-text_b_line"><span>{t("common.nav.faq")}</span></Link>
                    </li>
                    <li>
                      <Link to="/gallery" className="cs-text_b_line"><span>{t("common.nav.gallery")}</span></Link>
                    </li>
                  </ul>
                  <span className="cs_munu_dropdown_toggle"></span>
                </li>
                <li>
                  <Link to="/service" className="cs-text_b_line"><span>{t("common.nav.services")}</span></Link>
                </li>
                <li>
                  <Link to="/projects" className="cs-text_b_line"><span>{t("common.nav.projects")}</span></Link>
                </li>
                <li>
                  <Link to="/contact" className="cs-text_b_line"><span>{t("common.nav.contact")}</span></Link>
                </li>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <LanguageToggle />
                </li>
              </ul>
            </div>
          </div>

          <div className="cs_main_header_right">
            <div className="header-contact">
              <div className="cs-header-email">
                <span>{t("common.header.emailUs")}</span>
                <a href="mailto:navergozk@gmail.com" className="cs-text_b_line"><span>navergozk@gmail.com</span></a>
              </div>
            </div>

            <div className="cs_toolbox">
              <button
                type="button"
                className="cs_icon_btn"
                aria-label={t("common.header.menuToggle", { defaultValue: "Menu" })}
                style={{ background: "none", border: "none", padding: 0 }}
              >
                <span className="cs_icon_btn_in">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
