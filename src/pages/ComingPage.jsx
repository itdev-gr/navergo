import { Link } from "react-router-dom";

export default function ComingPage() {
  return (
    <>
      {/* Start Coming Section */}
      <section className="coming-wrapper" data-src="/assets/img/coming-bg.jpg">
        <div className="container coming-wrap">
          <h1 className="comming-title">Coming Soon</h1>
          <div id="comming-section" className="row comin-wrap-in">
            <div className="col-lg-1"></div>
            <div className="col-lg-2 col-md-6">
              <div className="time-card">
                <h1 className="time-text ak-stroke-number color-white" id="months">5</h1>
                <p>Months</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="time-card">
                <h1 className="time-text ak-stroke-number color-white" id="days">27</h1>
                <p>Days</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="time-card">
                <h1 className="time-text ak-stroke-number color-white" id="hours">12</h1>
                <p>Hours</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="time-card">
                <h1 className="time-text ak-stroke-number color-white" id="minutes">34</h1>
                <p>Minutes</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="time-card">
                <h1 className="time-text ak-stroke-number color-white" id="secound">45</h1>
                <p>Seconds</p>
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
