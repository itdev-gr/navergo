import { Link } from "react-router-dom";

export default function ProjectsPage() {
  return (
    <>
      {/* Start Common BreadCrumb */}
      <section>
        <div className="cs-breadcrumb-wrap theme-dark" data-src="/assets/img/breadcrumb.jpg">
          <div className="container">
            <div className="row cs_center">
              <div className="cs-bread-page-title-area">
                <div className="cs-page-title">
                  <h2 className="cs_white_color">Projects</h2>
                </div>
                <div className="breadcrumb">
                  <ul>
                    <li>
                      <Link to="/" className="cs-text_b_line"><span>HOME</span></Link>
                    </li>
                    <li>/</li>
                    <li>PROJECTS</li>
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

      {/* Start Projects Section*/}
      <section className="projects-list">
        <div className="container lg-gutter-control">
          <div className="row">
            <div className="col-xl-6 col-md-12">
              <div className="project-item" data-aos="fade-up" data-aos-duration="300">
                <div className="project-item-in">
                  <Link to="/project-details">
                    <img src="/assets/img/projects/project-img01.jpg" alt="" />
                  </Link>
                </div>
                <div className="project-item-text">
                  <div className="tag-item">
                    <a href="#"><span>Construction</span></a>
                  </div>
                  <Link to="/project-details"><h5>Greenfield Industrial Park</h5></Link>
                  <Link to="/project-details" className="cs-text_b_line"><span>VIEW PROJECT</span>
                    <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
              <div className="cs-height-30"></div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="project-item" data-aos="fade-up" data-aos-duration="500">
                <div className="project-item-in">
                  <Link to="/project-details">
                    <img src="/assets/img/projects/project-img02.jpg" alt="" />
                  </Link>
                </div>
                <div className="project-item-text">
                  <div className="tag-item">
                    <a href="#"><span>Construction</span></a>
                  </div>
                  <Link to="/project-details"><h5>Greenfield Industrial Park</h5></Link>
                  <Link to="/project-details" className="cs-text_b_line"><span>VIEW PROJECT</span>
                    <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
              <div className="cs-height-30"></div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="project-item" data-aos="fade-up" data-aos-duration="700">
                <div className="project-item-in">
                  <Link to="/project-details">
                    <img src="/assets/img/projects/project-img03.jpg" alt="" />
                  </Link>
                </div>
                <div className="project-item-text">
                  <div className="tag-item">
                    <a href="#"><span>Construction</span></a>
                  </div>
                  <Link to="/project-details"><h5>Greenfield Industrial Park</h5></Link>
                  <Link to="/project-details" className="cs-text_b_line"><span>VIEW PROJECT</span>
                    <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
              <div className="cs-height-30"></div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="project-item" data-aos="fade-up" data-aos-duration="900">
                <div className="project-item-in">
                  <Link to="/project-details">
                    <img src="/assets/img/projects/project-img04.jpg" alt="" />
                  </Link>
                </div>
                <div className="project-item-text">
                  <div className="tag-item">
                    <a href="#"><span>Construction</span></a>
                  </div>
                  <Link to="/project-details"><h5>Greenfield Industrial Park</h5></Link>
                  <Link to="/project-details" className="cs-text_b_line"><span>VIEW PROJECT</span>
                    <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
              <div className="cs-height-30"></div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="project-item" data-aos="fade-up" data-aos-duration="1100">
                <div className="project-item-in">
                  <Link to="/project-details">
                    <img src="/assets/img/projects/project-img05.jpg" alt="" />
                  </Link>
                </div>
                <div className="project-item-text">
                  <div className="tag-item">
                    <a href="#"><span>Construction</span></a>
                  </div>
                  <Link to="/project-details"><h5>Greenfield Industrial Park</h5></Link>
                  <Link to="/project-details" className="cs-text_b_line"><span>VIEW PROJECT</span>
                    <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
              <div className="cs-height-30"></div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="project-item" data-aos="fade-up" data-aos-duration="1300">
                <div className="project-item-in">
                  <Link to="/project-details">
                    <img src="/assets/img/projects/project-img06.jpg" alt="" />
                  </Link>
                </div>
                <div className="project-item-text">
                  <div className="tag-item">
                    <a href="#">
                      <span>Construction</span>
                    </a>
                  </div>
                  <Link to="/project-details">
                    <h5>Greenfield Industrial Park</h5>
                  </Link>
                  <Link to="/project-details" className="cs-text_b_line">
                    <span>VIEW PROJECT</span>
                    <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
              <div className="cs-height-30"></div>
            </div>
          </div>
        </div>
      </section>
      {/* End Projects Section*/}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      <section>
        <div className="cs-cta-wrap" data-src="/assets/img/cta-bg.jpg">
          <div className="container">
            <div className="row">
              <div className="cta-content text-center">

                <div className="cta-content max-width-800 m-auto">
                  <div className="cs-height-100"></div>
                  <h2 data-aos="fade-up" data-aos-duration="400">Start Your <span className="themecolor" data-aos="fade-up" data-aos-duration="1000">Construction</span> Journey with Us Today!</h2>

                  <div className="cs-height-15"></div>

                  <p>From concept to completion, we deliver exceptional construction services tailored to your needs. Contact us now for a free consultation!</p>
                  <div className="cs-height-25"></div>

                  <a href="#" className="cs-text_b_line"><span>Get Consultation</span>
                    <i className="flaticon-right-arrow"></i>
                  </a>
                </div>

                <div className="cs-height-100"></div>

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

                <div className="cs-height-100"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
