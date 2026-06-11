import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SideHeader() {
  const { t } = useTranslation();
  return (
    <div className="cs_side_header">
      <button className="cs_close"></button>
      <div className="cs_side_header_overlay"></div>
      <div className="cs_side_header_in">
        <div className="cs-sidebar-about-brand">
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
          <div className="cs-height-20"></div>
          <p>{t("common.brand.tagline")}</p>
          <div className="cs-height-35"></div>
          <img loading="lazy" src="/assets/img/header-sidebar/header-sidebar.jpg" alt="" />
        </div>

        <div className="cs-height-150"></div>
        <div className="cs-sidebar-middle-area">
          <p>{t("sidebar.sayHello")}</p>
          <a href="mailto:navergozk@gmail.com"><h6>navergozk@gmail.com</h6></a>
          <div className="cs-height-20"></div>
          <p>{t("sidebar.meetUs")}</p>
          <span className="cs-text-style-h6">{t("sidebar.address")}</span>

          <div className="cs-height-30"></div>

          <div className="theme-social">
            <ul>
              <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer"><i className="flaticon-facebook-app-symbol"></i></a></li>
              <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><i className="flaticon-linkedin-big-logo"></i></a></li>
              <li><a href="https://x.com" target="_blank" rel="noreferrer"><i className="flaticon-twitter"></i></a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer"><i className="flaticon-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
