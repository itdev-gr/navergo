import { Link } from "react-router-dom";

export default function ProjectDetailsPage() {
  return (
    <>
      {/* Start Common BreadCrumb */}
      <section>
        <div className="cs-breadcrumb-wrap theme-dark" data-src="/assets/img/breadcrumb.jpg">
          <div className="container">
            <div className="row cs_center">
              <div className="cs-bread-page-title-area">
                <div className="cs-page-title">
                  <h2 className="cs_white_color">Project Details</h2>
                </div>
                <div className="breadcrumb">
                  <ul>
                    <li>
                      <Link to="/" className="cs-text_b_line"><span>HOME</span></Link>
                    </li>
                    <li>/</li>
                    <li>PROJECT DETAILS</li>
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

      {/* Start Project Details content */}
      <section>
        <div className="container">
          <div className="row stickysec-wrap">
            <div className="col-lg-8 col-md-12 scolling-content">
              <div className="scolling-content">
                <img data-aos="fade-top" data-aos-duration="400" src="/assets/img/projects/project-single-main.jpg" alt="" />
                <div className="cs-height-50"></div>
                <h3>Downtown Office Tower</h3>
                <div className="cs-height-10"></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                  the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem
                  Ipsum is
                  simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard
                  dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                </p>

                <div className="cs-height-30"></div>

                <h5>Project Overview</h5>
                <div className="cs-height-10"></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                </p>
                <div className="cs-height-35"></div>

                <blockquote className="theme-border-wrap" data-src="/assets/img/cta-bg.jpg">

                  <div className="b-top-left">
                    <div className="horizontal"></div>
                    <div className="verticle"></div>
                  </div>

                  <div className="b-top-right d-flex">
                    <div className="horizontal"></div>
                    <div className="verticle"></div>
                  </div>

                  <div className="b-bottom-right d-flex flex-end">

                    <div className="horizontal"></div>
                    <div className="verticle"></div>
                  </div>

                  <div className="b-bottom-left">
                    <div className="verticle"></div>
                    <div className="horizontal"></div>
                  </div>

                  “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                  the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.”
                </blockquote>

                <div className="cs-height-50"></div>

                <h5>Design &amp; Architecture</h5>
                <div className="cs-height-10"></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                  the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                <div className="cs-height-10"></div>

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                  the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

                <div className="cs-height-40"></div>

                <h5>Construction Process</h5>
                <div className="cs-height-10"></div>

                <p>The construction of the Downtown Office Tower involved extensive planning and coordination with
                  various stakeholders, including architects, engineers, and city officials. Our team utilized the
                  latest construction technologies, including Building Information Modeling (BIM) and prefabricated
                  components, to streamline the construction process and ensure the highest level of quality.</p>

                <div className="cs-height-30"></div>

                <div className="cs-constr-process">
                  <div className="row">
                    <div className="col-xl-6 col-md-6">
                      <div className="process-item" data-aos="fade-top" data-aos-duration="400">
                        <h6>Project Planning</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></div>
                      <div className="cs-height-30"></div>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <div className="process-item" data-aos="fade-top" data-aos-duration="500">
                        <h6>Design Development</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></div>
                      <div className="cs-height-30"></div>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <div className="process-item" data-aos="fade-top" data-aos-duration="600">
                        <h6>Pre-Construction</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></div>
                      <div className="cs-height-30"></div>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <div className="process-item" data-aos="fade-top" data-aos-duration="700">
                        <h6>Project Completion</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></div>
                      <div className="cs-height-30"></div>
                    </div>
                  </div>
                </div>

                <div className="cs-height-15"></div>

                <h5>Challenges &amp; Solutions</h5>
                <div className="cs-height-10"></div>

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

                <div className="cs-height-30"></div>

                <div className="cs-constr-process">
                  <div className="row">
                    <div className="col-xl-5 col-md-5" data-aos="fade-top" data-aos-duration="400">
                      <h6>Urban Location</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="col-xl-2">
                      <div className="cs-border-pr"></div>
                    </div>
                    <div className="col-xl-5 col-md-5" data-aos="fade-top" data-aos-duration="600">
                      <h6>Sustainability</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                  </div>
                </div>


                <div className="cs-height-40"></div>

                <h5>Outcome</h5>
                <div className="cs-height-10"></div>

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

                <div className="cs-height-30"></div>
                <img data-aos="fade-top" data-aos-duration="400" src="/assets/img/projects/project-single-image-2.jpg" alt="" />


                <div className="cs-height-50"></div>

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>


              </div>
            </div>
            <div className="col-lg-4 col-md-12 sticky-box">
              <div className="widget-item widget-sidebar pw theme-dark sticky-box-child">
                <h6>Project Information</h6>
                <div className="cs-height-30"></div>
                <div className="project-info">
                  <div className="p-info-item">
                    <p>Project Name:</p>
                    <h6>Downtown Office Tower</h6>
                  </div>
                  <div className="p-info-item">
                    <p>Location:</p>
                    <h6>New York City, NY</h6>
                  </div>
                  <div className="p-info-item">
                    <p>Client:</p>
                    <h6>Urban Corp</h6>
                  </div>
                  <div className="p-info-item">
                    <p>Completion Date:</p>
                    <h6>March 2024</h6>
                  </div>
                  <div className="p-info-item">
                    <p>Project Value:</p>
                    <h6>$120 Million</h6>
                  </div>
                  <div className="p-info-item">
                    <p>Scope of Work:</p>
                    <h6>Full-Service Commercial Construction</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Project Details content */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start CTA Section */}
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

                  <Link to="/contact" className="cs-text_b_line"><span>Get Consultation</span>
                    <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>

                <div className="cs-height-100"></div>

                {/* start client slider */}
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
                {/* End Clients Slider */}

                <div className="cs-height-100"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End CTA Section */}
    </>
  );
}
