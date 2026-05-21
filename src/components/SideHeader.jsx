import { Link } from "react-router-dom";

export default function SideHeader() {
  return (
    <div className="cs_side_header">
      <button className="cs_close"></button>
      <div className="cs_side_header_overlay"></div>
      <div className="cs_side_header_in">
        <div className="cs-sidebar-about-brand">
          <Link className="cs_site_branding" to="/">
            <img src="/assets/img/logo_main.png" alt="Logo" />
          </Link>
          <div className="cs-height-20"></div>
          <p>We believe construction is more than building structures.</p>
          <div className="cs-height-35"></div>
          <img src="/assets/img/header-sidebar/header-sidebar.jpg" alt="" />
        </div>

        <div className="cs-height-150"></div>
        <div className="cs-sidebar-middle-area">
          <p>Say hello!</p>
          <a href="tel:+14065550120"><h6>(406) 555-0120</h6></a>
          <div className="cs-height-20"></div>
          <p>Say hello!</p>
          <a href="mailto:info@email.com"><h6>info@email.com</h6></a>
          <div className="cs-height-20"></div>
          <p>Meet Us:</p>
          <span className="cs-text-style-h6">Leof. Dimokratias 397 <br /> Perama 188 63, Greece</span>

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
