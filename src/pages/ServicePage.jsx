import { Link } from "react-router-dom";

export default function ServicePage() {
  return (
    <>
      {/* Start Common BreadCrumb */}
      <section>
        <div className="cs-breadcrumb-wrap theme-dark" data-src="/assets/img/breadcrumb.jpg">
          <div className="container">
            <div className="row cs_center">
              <div className="cs-bread-page-title-area">
                <div className="cs-page-title">
                  <h2 className="cs_white_color">Services</h2>
                </div>
                <div className="breadcrumb">
                  <ul>
                    <li>
                      <Link to="/" className="cs-text_b_line"><span>HOME</span></Link>
                    </li>
                    <li>/</li>
                    <li>SERVICES</li>
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

      {/* Start Service Section */}
      <section>
        <div className="services-wrapper lg-gutter-control">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-md-6">
                <div className="cs-heading-with-animation">
                  <h2 className="cs-heading">Construction Services Tailored to Build Your Success</h2>
                  <span className="cs-text-style-h1 cs-animated-text">SERVICES</span>
                </div>
                <div className="cs-height-20"></div>
                <p>Lorem construction is more than building structures it's about creating spaces that inspire.</p>
                <div className="cs-height-30"></div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="service-item" data-aos="fade-up" data-aos-duration="300">
                  <div className="srv-img">
                    <Link to="/service-details">
                      <img src="/assets/img/service/service-img01.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="services-content">
                    <Link to="/service-details" className="the-srv-title cs-text-style-h6">01. Residential Construction</Link>
                      <h4 className="the-plus">+</h4>
                      <div className="srv-the-hover">
                        <p>Lorem is simply text you can
                          just replace.</p>
                          <Link className="cs-primary-btn cs-color-black cs_white_color-bg cs-height-50 cs-width-160" to="/service-details"><span>More Details</span></Link>
                      </div>
                  </div>
                </div>
                <div className="cs-height-30"></div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="service-item" data-aos="fade-up" data-aos-duration="400">
                  <div className="srv-img">
                    <Link to="/service-details">
                      <img src="/assets/img/service/service-img02.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="services-content">
                    <Link to="/service-details" className="the-srv-title cs-text-style-h6">02. Commercial Construction</Link>
                      <h4 className="the-plus">+</h4>
                      <div className="srv-the-hover">
                        <p>Lorem is simply text you can
                          just replace.</p>
                          <Link className="cs-primary-btn cs-color-black cs_white_color-bg cs-height-50 cs-width-160" to="/service-details"><span>More Details</span></Link>
                      </div>
                  </div>
                </div>
                <div className="cs-height-30"></div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="service-item" data-aos="fade-up" data-aos-duration="500">
                  <div className="srv-img">
                    <Link to="/service-details">
                      <img src="/assets/img/service/service-img03.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="services-content">
                    <Link to="/service-details" className="the-srv-title cs-text-style-h6">03. Project Management</Link>
                      <h4 className="the-plus">+</h4>
                      <div className="srv-the-hover">
                        <p>Lorem is simply text you can
                          just replace.</p>
                          <Link className="cs-primary-btn cs-color-black cs_white_color-bg cs-height-50 cs-width-160" to="/service-details"><span>More Details</span></Link>
                      </div>
                  </div>
                </div>
                <div className="cs-height-30"></div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="service-item" data-aos="fade-up" data-aos-duration="600">
                  <div className="srv-img">
                    <Link to="/service-details">
                      <img src="/assets/img/service/service-img04.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="services-content">
                    <Link to="/service-details" className="the-srv-title cs-text-style-h6">04. Renovation and Remodeling</Link>
                      <h4 className="the-plus">+</h4>
                      <div className="srv-the-hover">
                        <p>Lorem is simply text you can
                          just replace.</p>
                          <Link className="cs-primary-btn cs-color-black cs_white_color-bg cs-height-50 cs-width-160" to="/service-details"><span>More Details</span></Link>
                      </div>
                  </div>
                </div>
                <div className="cs-height-30"></div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="service-item" data-aos="fade-up" data-aos-duration="700">
                  <div className="srv-img">
                    <Link to="/service-details">
                      <img src="/assets/img/service/service-img05.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="services-content">
                    <Link to="/service-details" className="the-srv-title cs-text-style-h6">05. Infrastructure Development</Link>
                      <h4 className="the-plus">+</h4>
                      <div className="srv-the-hover">
                        <p>Lorem is simply text you can
                          just replace.</p>
                          <Link className="cs-primary-btn cs-color-black cs_white_color-bg cs-height-50 cs-width-160" to="/service-details"><span>More Details</span></Link>
                      </div>
                  </div>
                </div>
                <div className="cs-height-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Service Section */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start Testimonial */}
      <section>
        <div className="testi-wrapper themecolor-bg-primary">
          <div className="cs-height-175"></div>
          <div className="container">
            <div className="row">
              <div className="swiper home1-testi-slider1">

                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testi-slider-item-wrap">
                      <div className="testi-user">
                        <img src="/assets/img/avatar-testi.png" alt="" />
                        <h6>Sarah Johnson</h6>
                        <p>Los Angeles, CA</p>
                      </div>
                      <div className="testi-border">
                        <svg width="48" height="236" viewBox="0 0 48 236" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.5" d="M1 0V60.9809H46.3727L1 99.5681V236" stroke="#C1C1C1"/>
                        </svg>
                      </div>
                      <div className="testi-content">
                        <h4>We were incredibly impressed with work on our project. They were professional, efficient, and delivered a high-quality product on time and within budget. We would definitely recommend them to others. Definitely recommend them.</h4>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testi-slider-item-wrap">
                      <div className="testi-user">
                        <img src="/assets/img/avatar-testi.png" alt="" />
                        <h6>Sarah Johnson</h6>
                        <p>Los Angeles, CA</p>
                      </div>
                      <div className="testi-border">
                        <svg width="48" height="236" viewBox="0 0 48 236" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.5" d="M1 0V60.9809H46.3727L1 99.5681V236" stroke="#C1C1C1"/>
                        </svg>
                      </div>
                      <div className="testi-content">
                        <h4>We were incredibly impressed with work on our project. They were professional, efficient, and delivered a high-quality product on time and within budget. We would definitely recommend them to others. Definitely recommend them.</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="testi-pagi-wrap">
            <div className="testi-pagination swiper-pagination-vertical"></div>
          </div>
          <div className="cs-height-175"></div>
        </div>
      </section>
      {/* End Testimonial */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start Pricing */}
      <section>
        <div className="pricing-wrap ">
          <div className="container lg-gutter-control">

            <div className="cs-heading-with-animation text-center max-width-700 m-auto d-flex">
              <h2 className="cs-heading">Find the Right Plan for Your Project</h2>
              <span className="cs-text-style-h1 cs-animated-text">PRICING PLAN</span>
            </div>

            <div className="cs-height-50"></div>

            <div className="row">
              <div className="col-xl-4 col-md-6">
                <div className="pricing-item theme-border-wrap cs-hover-card-anim" data-aos="fade-up" data-aos-duration="300"
                  data-ser="hover-reveal">

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

                  <div className="content-for-top">
                    <div className="cs-height-50"></div>

                    <h5>Standard</h5>
                    <p>Lorem Ipsum is simply.</p>
                    <div className="cs-pricing-border-with-margin"></div>
                    <h2>$250M</h2>

                    <div className="cs-height-20"></div>

                    <div className="pricing-feature-list body-text-color">
                      <ul className="cs-text-lh-200">
                        <li>Nam semper leo ac arcu ultricies ultricies.</li>
                        <li>Suspendisse interdum nisi ut aliquam.</li>
                        <li>Maecenas cursus eros sed nulla facilisis.</li>
                        <li>Sed sit amet velit egestas, luctus dolor vel.</li>
                        <li>Pellentesque mattis urna vitae tortor.</li>
                      </ul>
                    </div>
                    <div className="cs-height-70"></div>
                    <Link className="cs-primary-btn cs-color-black cs_white_color-bg cs-height-50" to="/contact">
                      <span>Get Start</span>
                    </Link>
                    <div className="cs-height-50"></div>
                  </div>
                  <div className="magic" data-src="/assets/img/contact/contact-office-bg.jpg"></div>
                </div>
                <div className="cs-height-30"></div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="pricing-item theme-border-wrap theme-dark themecolor-bg" data-aos="fade-up"
                  data-aos-duration="500">

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

                  <div className="cs-height-50"></div>

                  <h5>Professional</h5>
                  <p>Lorem Ipsum is simply.</p>
                  <div className="cs-pricing-border-with-margin"></div>
                  <h2>$350M</h2>

                  <div className="cs-height-20"></div>

                  <div className="pricing-feature-list body-text-color">
                    <ul className="cs-text-lh-200">
                      <li>Nam semper leo ac arcu ultricies ultricies.</li>
                      <li>Suspendisse interdum nisi ut aliquam.</li>
                      <li>Maecenas cursus eros sed nulla facilisis.</li>
                      <li>Sed sit amet velit egestas, luctus dolor vel.</li>
                      <li>Pellentesque mattis urna vitae tortor.</li>
                    </ul>
                  </div>

                  <div className="cs-height-70"></div>

                  <Link className="cs-primary-btn cs-color-black cs_white_color-bg cs-height-50" to="/contact"><span>Get Start</span>
                    </Link>

                  <div className="cs-height-50"></div>

                </div>
                <div className="cs-height-30"></div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="pricing-item theme-border-wrap cs-hover-card-anim" data-aos="fade-up" data-aos-duration="900"
                  data-ser="hover-reveal">

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

                  <div className="content-for-top">
                    <div className="cs-height-50"></div>
                    <h5>Enterprise</h5>
                    <p>Lorem Ipsum is simply.</p>
                    <div className="cs-pricing-border-with-margin"></div>
                    <h2>$550M</h2>

                    <div className="cs-height-20"></div>

                    <div className="pricing-feature-list body-text-color">
                      <ul className="cs-text-lh-200">
                        <li>Nam semper leo ac arcu ultricies ultricies.</li>
                        <li>Suspendisse interdum nisi ut aliquam.</li>
                        <li>Maecenas cursus eros sed nulla facilisis.</li>
                        <li>Sed sit amet velit egestas, luctus dolor vel.</li>
                        <li>Pellentesque mattis urna vitae tortor.</li>
                      </ul>
                    </div>

                    <div className="cs-height-70"></div>

                    <Link className="cs-primary-btn cs-color-black cs_white_color-bg cs-height-50" to="/contact">
                      <span>Get Start</span>
                    </Link>
                    <div className="cs-height-50"></div>
                  </div>
                  <div className="magic" data-src="/assets/img/contact/contact-office-bg.jpg"></div>
                </div>
                <div className="cs-height-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Pricing */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start Clients */}
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
      {/* End Clients */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start CTA */}
      <section>
        <div className="cta-wrap themecolor-bg theme-dark">
          <div className="container">
            <div className="cs-height-65"></div>
            <div className="row">
              <div className="cs-cta-content">

                <div className="title max-width-800">
                  <h2 data-aos="fade-up" data-aos-duration="500">Start Your Construction Journey with Us Today!</h2>
                </div>
                <Link data-aos="fade-left" data-aos-duration="700" className="cs-primary-btn secondary-btn cs_white_color-bg cs-color-white cs-width-220 cs-height-70" to="/contact"><span>Contact Us</span></Link>
              </div>
            </div>
            <div className="cs-height-65"></div>
          </div>
        </div>
      </section>
      {/* End CTA */}
    </>
  );
}
