import { useTranslation } from "react-i18next";

export default function ComingPage() {
  const { t } = useTranslation();

  return (
    <>
      {/* Start Coming Section */}
      <section className="coming-wrapper" data-src="/assets/img/coming-bg.jpg">
        <div className="container coming-wrap">
          <h1 className="comming-title">{t("coming.title")}</h1>
          <div id="comming-section" className="row comin-wrap-in">
            <div className="col-lg-1"></div>
            <div className="col-lg-2 col-md-6">
              <div className="time-card">
                <h1 className="time-text ak-stroke-number color-white" id="months">5</h1>
                <p>{t("coming.labels.months")}</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="time-card">
                <h1 className="time-text ak-stroke-number color-white" id="days">27</h1>
                <p>{t("coming.labels.days")}</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="time-card">
                <h1 className="time-text ak-stroke-number color-white" id="hours">12</h1>
                <p>{t("coming.labels.hours")}</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="time-card">
                <h1 className="time-text ak-stroke-number color-white" id="minutes">34</h1>
                <p>{t("coming.labels.minutes")}</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="time-card">
                <h1 className="time-text ak-stroke-number color-white" id="secound">45</h1>
                <p>{t("coming.labels.seconds")}</p>
              </div>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      </section>
      {/* End Coming Section */}
    </>
  );
}
