import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <div className="cs-height-100"></div>

      {/* Start 404 */}
      <section className="cs_gray_bg" data-src="/assets/img/footer-bg.png">
        <div className="error-wrap" data-src="/assets/img/error-bg.png">
          <div className="error-section-wrap">
            <div className="container">
              <div className="error-content">

                <h1 className="error-title">404</h1>
                <h2 className="erro-sub-title cs_semi_bold">Sorry! The Page isn't Found Here</h2>
                <p className="erro-desp">Fortunately, since it is mainly a client-side issue, it is relatively easy for website
                  owners to fix the
                  404 error. This article will explain the possible causes of error 404 and show four effective methods to
                  resolve it.Fortunately, since it is mainly a client-side issue.</p>

                <Link to="/" className="cs-primary-btn secondary-btn cs-color-white themecolor-bg cs-height-60 cs-width-180"><span>Back to Home</span></Link>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End 404 */}
    </>
  );
}
