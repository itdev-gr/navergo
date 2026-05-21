import { Link } from "react-router-dom";

export default function TeamPage() {
  return (
    <>
      {/* Start Common BreadCrumb */}
      <section>
        <div className="cs-breadcrumb-wrap theme-dark" data-src="/assets/img/breadcrumb.jpg">
          <div className="container">
            <div className="row cs_center">
              <div className="cs-bread-page-title-area">
                <div className="cs-page-title">
                  <h2 className="cs_white_color">Team</h2>
                </div>
                <div className="breadcrumb">
                  <ul>
                    <li>
                      <Link to="/" className="cs-text_b_line"><span>HOME</span></Link>
                    </li>
                    <li>/</li>
                    <li>TEAM</li>
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

      {/* Start Team Section */}
      <section>
        <div className="team-wrap">
          <div className="container">
            <div className="row cs-exclude-top-40">
              <div className="team-member">
                <div className="member-img">
                  <Link to="/team-details">
                    <img className="animated-img" src="/assets/img/member/team-member-1.jpg" alt="" />
                  </Link>
                </div>
                <div className="member-in">
                  <div className="content">
                    <Link to="/team-details">
                      <h6>Richard Hernandez</h6>
                    </Link>
                    <p>Chief Officer (CEO)</p>
                  </div>
                  <div className="theme-social">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com" target="_blank">
                          <i className="flaticon-facebook-app-symbol"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com" target="_blank">
                          <i className="flaticon-linkedin-big-logo"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com" target="_blank">
                          <i className="flaticon-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com" target="_blank">
                          <i className="flaticon-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="team-member">
                <div className="member-img">
                  <Link to="/team-details">
                    <img className="animated-img" src="/assets/img/member/team-member-2.jpg" alt="" />
                  </Link>
                </div>
                <div className="member-in">
                  <div className="content">
                    <Link to="/team-details">
                      <h6>Robert Brown</h6>
                    </Link>
                    <p>Lead Engineer</p>
                  </div>
                  <div className="theme-social">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com" target="_blank">
                          <i className="flaticon-facebook-app-symbol"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com" target="_blank">
                          <i className="flaticon-linkedin-big-logo"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com" target="_blank">
                          <i className="flaticon-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com" target="_blank">
                          <i className="flaticon-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="team-member">
                <div className="member-img">
                  <Link to="/team-details">
                    <img className="animated-img" src="/assets/img/member/team-member-3.jpg" alt="" />
                  </Link>
                </div>
                <div className="member-in">
                  <div className="content">
                    <Link to="/team-details">
                      <h6>Michel Wilson</h6>
                    </Link>
                    <p>Site Coordinator</p>
                  </div>
                  <div className="theme-social">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com" target="_blank">
                          <i className="flaticon-facebook-app-symbol"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com" target="_blank">
                          <i className="flaticon-linkedin-big-logo"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com" target="_blank">
                          <i className="flaticon-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com" target="_blank">
                          <i className="flaticon-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="team-member">
                <div className="member-img">
                  <Link to="/team-details">
                    <img className="animated-img" src="/assets/img/member/team-member-4.jpg" alt="" />
                  </Link>
                </div>
                <div className="member-in">
                  <div className="content">
                    <Link to="/team-details">
                      <h6>Lucas Thompson</h6>
                    </Link>
                    <p>Safety Officer</p>
                  </div>
                  <div className="theme-social">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com" target="_blank">
                          <i className="flaticon-facebook-app-symbol"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com" target="_blank">
                          <i className="flaticon-linkedin-big-logo"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com" target="_blank">
                          <i className="flaticon-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com" target="_blank">
                          <i className="flaticon-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="team-member">
                <div className="member-img">
                  <Link to="/team-details">
                    <img className="animated-img" src="/assets/img/member/team-member-5.jpg" alt="" />
                  </Link>
                </div>
                <div className="member-in">
                  <div className="content">
                    <Link to="/team-details">
                      <h6>Michael Thompson</h6>
                    </Link>
                    <p>Construction Supervisor</p>
                  </div>
                  <div className="theme-social">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com" target="_blank">
                          <i className="flaticon-facebook-app-symbol"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com" target="_blank">
                          <i className="flaticon-linkedin-big-logo"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com" target="_blank">
                          <i className="flaticon-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com" target="_blank">
                          <i className="flaticon-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="team-member">
                <div className="member-img">
                  <Link to="/team-details">
                    <img className="animated-img" src="/assets/img/member/team-member-7.jpg" alt="" />
                  </Link>
                </div>
                <div className="member-in">
                  <div className="content">
                    <Link to="/team-details">
                      <h6>David Rodriguez</h6>
                    </Link>
                    <p>Lead Architect</p>
                  </div>
                  <div className="theme-social">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com" target="_blank">
                          <i className="flaticon-facebook-app-symbol"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com" target="_blank">
                          <i className="flaticon-linkedin-big-logo"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com" target="_blank">
                          <i className="flaticon-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com" target="_blank">
                          <i className="flaticon-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="team-member">
                <div className="member-img">
                  <Link to="/team-details">
                    <img className="animated-img" src="/assets/img/member/team-member-8.jpg" alt="" />
                  </Link>
                </div>
                <div className="member-in">
                  <div className="content">
                    <Link to="/team-details">
                      <h6>Karen Wilson</h6>
                    </Link>
                    <p>Client Relations</p>
                  </div>
                  <div className="theme-social">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com" target="_blank">
                          <i className="flaticon-facebook-app-symbol"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com" target="_blank">
                          <i className="flaticon-linkedin-big-logo"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com" target="_blank">
                          <i className="flaticon-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com" target="_blank">
                          <i className="flaticon-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* End Team Section */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}
    </>
  );
}
