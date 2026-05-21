import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ContactPage() {
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
                  <h2 className="cs_white_color">{t("contact.breadcrumb.title")}</h2>
                </div>
                <div className="breadcrumb">
                  <ul>
                    <li>
                      <Link to="/" className="cs-text_b_line"><span>{t("contact.breadcrumb.fromHome")}</span></Link>
                    </li>
                    <li>/</li>
                    <li>{t("contact.breadcrumb.current")}</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* End Common BreadCrumb */}

      {/* Start Contact Form & Map */}
      <section>
        <div className="cs-contact-map-and-form">
          <div className="container-fluid">
            <div className="row cs_center" data-src="/assets/img/pattern-bg-for-light.png">

              <div className="col-xl-7 col-lg-6 col-md-12">
                <iframe
                  src="https://www.google.com/maps?q=Leof.+Dimokratias+397,+Perama+188+63,+Greece&output=embed"
                  allowFullScreen="">
                </iframe>
              </div>

              <div className="col-xl-5 col-lg-6 col-md-12">
                <div className="cs-contact-form-wrap">
                  <div className="position-relative" data-aos="fade-up" data-aos-duration="500">
                    <h2 className="cs-heading">{t("contact.form.heading")}</h2>
                    <span className="cs-text-style-h1 cs-animated-text">{t("contact.form.animatedText")}</span>
                  </div>

                  <div className="cs-height-35"></div>
                  <form>
                      <div className="input-col-two">
                        <input type="text" placeholder={t("contact.form.firstName")} required />
                        <input type="text" placeholder={t("contact.form.lastName")} required />
                      </div>
                      <div className="input-col-two">
                        <input type="tel" placeholder={t("contact.form.phone")} required />
                        <input type="email" placeholder={t("contact.form.email")} required />
                      </div>
                      <input type="text" placeholder={t("contact.form.subject")} required />
                      <textarea id="message" rows="4" placeholder={t("contact.form.message")} required></textarea>
                      <button type="submit" className="cs-primary-btn secondary-btn cs-color-white themecolor-bg cs-height-60 cs-width-220"><span>{t("contact.form.send")}</span></button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* End Contact Form & Map */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start Client Area Full Width */}
        <div className="container client-wrap">
          <div className="swiper clients-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide" data-aos="fade-up" data-aos-duration="300">
                <a className="client-item" href="#"><img src="/assets/img/clients/logo05.png" alt="" /></a>
              </div>
              <div className="swiper-slide" data-aos="fade-up" data-aos-duration="500">
                <a className="client-item" href="#"><img src="/assets/img/clients/logo04.png" alt="" /></a>
              </div>
              <div className="swiper-slide" data-aos="fade-up" data-aos-duration="700">
                <a className="client-item" href="#"><img src="/assets/img/clients/logo03.png" alt="" /></a>
              </div>
              <div className="swiper-slide" data-aos="fade-up" data-aos-duration="900">
                <a className="client-item" href="#"><img src="/assets/img/clients/logo02.png" alt="" /></a>
              </div>
              <div className="swiper-slide" data-aos="fade-up" data-aos-duration="1100">
                <a className="client-item" href="#"><img src="/assets/img/clients/logo01.png" alt="" /></a>
              </div>
              <div className="swiper-slide" data-aos="fade-up" data-aos-duration="1300">
                <a className="client-item" href="#"><img src="/assets/img/clients/logo05.png" alt="" /></a>
              </div>
              <div className="swiper-slide" data-aos="fade-up" data-aos-duration="1500">
                <a className="client-item" href="#"><img src="/assets/img/clients/logo04.png" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      {/* End Client Area Full Width */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}
    </>
  );
}
