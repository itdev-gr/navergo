import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      {/* Start Hero Section */}
      <section>
        <div className="cs-height-100"></div>
        <div className="cs-hero-wrap">
          <div className="cs-hero-wrap-in">
            <div className="swiper hero-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="hero-slider-item" data-src="/assets/img/hero/hero-shipyard-01.jpg">
                    <div className="slider-item-content">
                     <div className="cs-hero-title">
                      <div className="cs-hero-title-in cs-head">
                        <h1><span className="hero-strong-title constr-splite">Construction</span> <span className="cs-hero-title-normal hero-second-splite">Solutions for Your Modern Living</span></h1>
                      </div>
                      <div className="ae-title hero-backdrop-text constr-splite">
                        <h2>NAVERGO NAVERGO NAVE</h2>
                      </div>
                     </div>
                      <p className="hero-subtitle">Your Partner in Creating Sustainable and Innovative Structures Your Partner in Creating Sustainable and Innovative Structures</p>
                      <div className="cs-couple-btn d-flex gap-3">
                        <Link to="/contact" className="cs-primary-btn secondary-btn cs-color-white themecolor-bg cs-height-60 cs-width-180"><span>Start Project</span></Link>
                        <Link to="/contact" className="cs-primary-btn cs-color-white theme-black-bg cs-height-60 cs-width-180"><span>Contact Us</span></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="hero-slider-item" data-src="/assets/img/hero/hero-shipyard-02.jpg">
                    <div className="slider-item-content">
                     <div className="cs-hero-title">
                      <div className="cs-hero-title-in">
                        <h1><span className="hero-strong-title constr-splite">Construction</span> <span className="cs-hero-title-normal hero-second-splite">Solutions for Modern Excellence</span></h1>
                      </div>
                      <div className="ae-title hero-backdrop-text constr-splite">
                        <h2>NAVERGO NAVERGO NAVE</h2>
                      </div>
                     </div>
                      <p className="hero-subtitle">Your Partner in Creating Sustainable and Innovative Structures Your Partner in Creating Sustainable and Innovative Structures</p>
                      <div className="cs-couple-btn d-flex gap-3">
                        <Link to="/contact" className="cs-primary-btn secondary-btn cs-color-white themecolor-bg cs-height-60 cs-width-180"><span>Start Project</span></Link>
                        <Link to="/contact" className="cs-primary-btn cs-color-white theme-black-bg cs-height-60 cs-width-180"><span>Contact Us</span></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="hero-slider-item" data-src="/assets/img/hero/hero-shipyard-03.jpg">
                    <div className="slider-item-content">
                     <div className="cs-hero-title">
                      <div className="cs-hero-title-in">
                        <h1><span className="hero-strong-title constr-splite">Construction</span> <span className="cs-hero-title-normal hero-second-splite">That Stands the <br /> Test  of Time</span></h1>
                      </div>
                      <div className="ae-title hero-backdrop-text constr-splite">
                        <h2>NAVERGO NAVERGO NAVE</h2>
                      </div>
                     </div>
                      <p className="hero-subtitle">Your Partner in Creating Sustainable and Innovative Structures Your Partner in Creating Sustainable and Innovative Structures</p>
                      <div className="cs-couple-btn d-flex gap-3">
                        <Link to="/contact" className="cs-primary-btn secondary-btn cs-color-white themecolor-bg cs-height-60 cs-width-180"><span>Start Project</span></Link>
                        <Link to="/contact" className="cs-primary-btn cs-color-white theme-black-bg cs-height-60 cs-width-180"><span>Contact Us</span></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cs-hero-social">
            <ul>
              <li><a href="https://instagram.com" target="_blank">INSTAGRAM</a></li>
              <li><a href="https://linkedin.com" target="_blank">LINKEDIN</a></li>
              <li><a href="https://facebook.com" target="_blank">FACEBOOK</a></li>
            </ul>
          </div>
          <div className="cs-arrow-style-fill">
            <div className="cs-left-arrow hero-swiper-button-prev">
              <i className="flaticon-left-arrow"></i>
            </div>
            <div className="cs-right-arrow hero-swiper-button-next">
              <i className="flaticon-right-chevron"></i>
            </div>
          </div>
          <div className="cs-slider-pagi">

          </div>
        </div>
      </section>
      {/* End Hero Section */}

      {/* Start Company Journey */}
      <section>
        <div className="cs-about-wrap">
          <div className="container-fluid cs-about-wrap-in">
            <div className="col-xl-5 col-lg-12 col-md-12">
              <div className="cs-about-img">
                <div className="cs-section-height"></div>
                  {/* Section to Section Gap */}
                <div className="animate-img-wrap">
                  <div className="reveal"></div>
                  <img className="the-animated-image" src="/assets/img/service/steelwork/steelwork-01.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-12 col-md-12">
              <div className="cs-about-content">
                <div className="cs-about-content">

                  <div className="cs-section-height"></div>
                  {/* Section to Section Gap */}
                  <div className="cs-heading-with-animation">
                    <h2 className="cs-heading">Navergo</h2>
                    <span className="cs-text-style-h1 cs-animated-text">ABOUT US</span>
                  </div>
                  <div className="cs-height-10"></div>
                  <p>We believe construction is more than building structures; it's about creating spaces that inspire and
                    enrich lives. Our skilled professionals bring expertise and a passion for excellence to every project.
                  </p>
                  <div className="cs-height-90"></div>
                  <div className="list-feature">
                    <h6 data-aos="fade-up" data-aos-duration="300">1. Aluminum Works</h6>
                    <div className="cs-list-border"></div>
                    <h6 data-aos="fade-up" data-aos-duration="400">2. Steel Plate Works</h6>
                    <div className="cs-list-border"></div>
                    <h6 data-aos="fade-up" data-aos-duration="500">3. Piping Works</h6>
                  </div>
                  <div className="cs-height-40"></div>
                  <Link to="/about" className="cs-primary-btn secondary-btn cs-color-white themecolor-bg cs-height-70 cs-width-220"><span>View More</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Company Journey */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start Moving Text */}
      <section>
        <div className="cs-text-moving-wrap">
          <div className="cs_text-moving_in">
            <div className="cs_text-moving">
              <h2>Quality Construction, On Time, Every Time.</h2>
            </div>
            <div className="cs_text-moving">
              <h2>Quality Construction, On Time, Every Time.</h2>
            </div>
          </div>
        </div>
      </section>
      {/* End Moving Text */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start Service Section */}
      <section>
        <div className="cs-heading-with-animation text-center max-width-800 m-auto d-flex">
          <h2 className="cs-heading">Maintenance Services Tailored to Build Your Success</h2>
          <span className="cs-text-style-h1 cs-animated-text">SERVICES</span>
        </div>
        <div className="cs-height-50"></div>

        <div className="services-wrapper">
          <div className="container">
            <div className="swiper service-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="service-item" data-aos="fade-up" data-aos-duration="300">
                    <div className="srv-img">
                      <Link to="/service-details">
                        <img src="/assets/img/service/aluminum/aluminum-03.jpg" alt="Aluminum Works" />
                      </Link>
                    </div>
                    <div className="services-content">
                      <Link to="/service-details" className="the-srv-title cs-text-style-h6">01. Aluminum Works</Link>
                        <h4 className="the-plus">+</h4>
                        <div className="srv-the-hover">
                          <p>Precision aluminum fabrication for facades, frames,
                            and structural assemblies built to spec.</p>
                            <Link to="/service-details" className="cs-primary-btn cs-color-black cs_white_color-bg cs-height-50 cs-width-160"><span>More Details</span></Link>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-item"  data-aos="fade-up" data-aos-duration="400">
                    <div className="srv-img">
                      <Link to="/service-details">
                        <img src="/assets/img/service/steelwork/steelwork-01.jpg" alt="Steel Plate Works" />
                      </Link>
                    </div>
                    <div className="services-content">
                      <Link to="/service-details" className="the-srv-title cs-text-style-h6">02. Steel Plate Works</Link>
                        <h4 className="the-plus">+</h4>
                        <div className="srv-the-hover">
                          <p>Precision-cut steel plates engineered for structural strength and lasting durability.</p>
                            <Link className="cs-primary-btn cs-color-black cs_white_color-bg cs-height-50 cs-width-160" to="/service-details"><span>More Details</span></Link>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-item"  data-aos="fade-up" data-aos-duration="500">
                    <div className="srv-img">
                      <Link to="/service-details">
                        <img src="/assets/img/service/piping/piping-03.jpg" alt="Piping Works" />
                      </Link>
                    </div>
                    <div className="services-content">
                      <Link to="/service-details" className="the-srv-title cs-text-style-h6">03. Piping Works</Link>
                        <h4 className="the-plus">+</h4>
                        <div className="srv-the-hover">
                          <p>Industrial piping systems fabricated and installed for reliable flow, pressure, and long-term performance.</p>
                            <Link to="/service-details" className="cs-primary-btn cs-color-black cs_white_color-bg cs-height-50 cs-width-160"><span>More Details</span></Link>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs-height-50"></div>
            <div className="srv-pagination">
              <div className="srv-swiper-pagination"></div>
            </div>
          </div>
        </div>
      </section>
      {/* End Service Section */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start Projects Section */}
      <section>
        <div className="cs-project-wrap themecolor-bg-primary">
          <div className="container-fluid">
            <div className="cs-section-height"></div>
            <div className="cs-heading-with-animation text-center max-width-700 m-auto d-flex">
              <h2 className="cs-heading">Explore Our Most Recent Projects</h2>
              <span className="cs-text-style-h1 cs-animated-text">PORTFOLIO</span>
            </div>

            <div className="cs-height-50"></div>
          </div>

          <div className="project-masonry">
            <div className="cs-project-item first" data-aos="fade-top" data-aos-duration="300">
              <Link to="/project-details" className="cs-project-item-content-in">
                <img src="/assets/img/service/steelwork/steelwork-01.jpg" alt="" />
                <div className="project-meta-data">
                  <div className="cs-project-content">
                    <h4>Stronghold construction</h4>
                    <span className="view-project">VIEW PROJECT <i className="flaticon-right-arrow"></i></span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="cs-project-item second">
              <Link to="/project-details" className="cs-project-item-content-in" data-aos="fade-top" data-aos-duration="500">
                <img src="/assets/img/service/aluminum/aluminum-01.jpg" alt="" />
                <div className="project-meta-data">
                  <div className="cs-project-content">
                    <h4>The Future of Sustainable Construction Trends to Watch</h4>
                    <span className="view-project">VIEW PROJECT</span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="cs-project-item third">
              <Link to="/project-details" className="cs-project-item-content-in" data-aos="fade-top" data-aos-duration="600">
                <img src="/assets/img/service/steelwork/steelwork-02.jpg" alt="" />
                <div className="project-meta-data">
                  <div className="cs-project-content">
                    <h5>The Future of Sustainable Construction Trends to Watch</h5>
                    <span className="view-project">VIEW PROJECT</span>
                  </div>
                </div>
              </Link>

              <Link to="/project-details" className="cs-project-item-content-in" data-aos="fade-top" data-aos-duration="700">
                <img src="/assets/img/service/piping/piping-01.jpg" alt="" />
                <div className="project-meta-data">
                  <div className="cs-project-content">
                    <h5>The Future of Sustainable Construction Trends to Watch</h5>
                    <span className="view-project">VIEW PROJECT</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* End Projects Section */}

      {/* Start Features Section */}
      <section className="themecolor-bg-primary">
        <div className="cs-section-height"></div>
        <div className="cs-feature-card-wrap lg-gutter-control">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-md-6">
                <div  data-aos="fade-up" data-aos-duration="300" className="feature-card-item cs_white_bg theme-border-wrap">
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

                  <div className="cs-feature-icon">
                    <img src="/assets/img/feature-icon-shipyard.png" alt="Shipyard construction" />
                  </div>
                  <h5>Optimized Construction</h5>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="cs-height-30"></div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div  data-aos="fade-up" data-aos-duration="400" className="feature-card-item cs_white_bg theme-border-wrap">
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

                  <div className="cs-feature-icon">
                    <img src="/assets/img/feature-icon-2.svg" alt="" />
                  </div>
                  <h5>Shipbuilding & Marine Construction</h5>
                  <p>From keel laying to sea trials, we deliver precision-engineered vessels and marine structures built to navigate every challenge.</p>
                </div>
                <div className="cs-height-30"></div>
              </div>
              <div className="col-xl-4 col-md-12">
                <div  data-aos="fade-up" data-aos-duration="500" className="feature-card-item cs_white_bg theme-border-wrap">
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

                  <div className="cs-feature-icon">
                    <img src="/assets/img/feature-icon-ship.svg" alt="" />
                  </div>
                  <h5>Full-Service Contracting</h5>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="cs-height-30"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="cs-section-height"></div>
        {/* Section to Section Gap */}

        <div className="container client-wrap">
            <div className="swiper clients-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <a className="client-item" href="#"><img src="/assets/img/clients/logo05.png" alt="" /></a>
                </div>
                <div className="swiper-slide">
                  <a className="client-item" href="#"><img src="/assets/img/clients/logo04.png" alt="" /></a>
                </div>
                <div className="swiper-slide">
                  <a className="client-item" href="#"><img src="/assets/img/clients/logo03.png" alt="" /></a>
                </div>
                <div className="swiper-slide">
                  <a className="client-item" href="#"><img src="/assets/img/clients/logo02.png" alt="" /></a>
                </div>
                <div className="swiper-slide">
                  <a className="client-item" href="#"><img src="/assets/img/clients/logo01.png" alt="" /></a>
                </div>
                <div className="swiper-slide">
                  <a className="client-item" href="#"><img src="/assets/img/clients/logo05.png" alt="" /></a>
                </div>
                <div className="swiper-slide">
                  <a className="client-item" href="#"><img src="/assets/img/clients/logo04.png" alt="" /></a>
                </div>
              </div>
            </div>
        </div>

        <div className="cs-section-height"></div>
        {/* Section to Section Gap */}
      </section>
      {/* Start Features Section */}

      {/* Start Counter With CTA Section */}
      <section>
        <div className="cs-counter-wrap">
          <div className="theme-black-bg theme-dark">
            <div className="cs-height-100"></div>
            <div className="container">
              <div className="cs-couter-items">
                <div className="counter-item" data-aos="fade-top" data-aos-duration="400">
                  <h6>Happy Customers</h6>
                  <span id="count1" className="amin_auto_count cs-text-style-h2">126</span><span className="cs-text-style-h2">+</span>
                  <p>We believe construction is more than building structures.</p>
                </div>
                <div className="counter-sep"></div>
                <div className="counter-item" data-aos="fade-top" data-aos-duration="600">
                  <h6>On-Going Projects</h6>
                  <span id="count2" className="amin_auto_count cs-text-style-h2">32</span><span className="cs-text-style-h2">+</span>
                  <p>We believe construction is more than building structures.</p>
                </div>
                <div className="counter-sep"></div>
                <div className="counter-item" data-aos="fade-top" data-aos-duration="800">
                  <h6>Happy Customers</h6>
                  <span id="count3" className="amin_auto_count cs-text-style-h2">50</span><span className="cs-text-style-h2">k</span>
                  <p>We believe construction is more than building structures.</p>
                </div>
                <div className="counter-sep"></div>
                <div className="counter-item" data-aos="fade-top" data-aos-duration="1000">
                  <h6>Awards Achievement</h6>
                  <span id="count4" className="amin_auto_count cs-text-style-h2">50+</span><span className="cs-text-style-h2">+</span>
                  <p>We believe construction is more than building structures.</p>
                </div>
              </div>
            </div>
            <div className="cs-height-100"></div>
          </div>
        </div>
      </section>
      {/* End Counter With CTA Section */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start Team Section */}
      <section>
        <div className="team-wrap">
          <div className="container">
            <div className="cs-heading-with-animation max-width-700">
              <h2 className="cs-heading">Get to Know Our Dedicated Team Members</h2>
              <span className="cs-text-style-h1 cs-animated-text">TEAM</span>
              <div className="cs-height-50"></div>
            </div>
            <div className="row">
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

            </div>
          </div>
        </div>
      </section>
      {/* End Team Section */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start Testimonial */}
      <section>
        <div className="testi-wrapper">
          <div className="container for-quote-mark">
            <div className="row">
              <div className="swiper home1-testi-slider1">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testi-slider-item-wrap">
                      <div className="testi-user" data-aos="fade-up" data-aos-duration="300">
                        <img className="testi-img" src="/assets/img/avatar-testi.png" alt="" />
                        <h6>Sarah Johnson</h6>
                        <p>Los Angeles, CA</p>
                      </div>
                      <div className="testi-border">
                        <svg width="48" height="236" viewBox="0 0 48 236" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.5" d="M1 0V60.9809H46.3727L1 99.5681V236" stroke="#C1C1C1" />
                        </svg>
                      </div>
                      <div className="testi-content">
                        <img src="/assets/img/star.svg" alt="" />
                        <div className="cs-height-20"></div>
                        <h4 className="testi-main-content">We were incredibly impressed with work on our project. They were professional, efficient, and
                          delivered a high-quality product on time and within budget. We would definitely recommend them to
                          others. Definitely recommend them.</h4>
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
                          <path opacity="0.5" d="M1 0V60.9809H46.3727L1 99.5681V236" stroke="#C1C1C1" />
                        </svg>
                      </div>
                      <div className="testi-content">
                        <img src="/assets/img/star.svg" alt="" />
                        <div className="cs-height-20"></div>
                        <h4 className="testi-main-content">We were incredibly impressed with work on our project. They were professional, efficient, and
                          delivered a high-quality product on time and within budget. We would definitely recommend them to
                          others. Definitely recommend them.</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testi-quote-mark opacity01">
              <img src="/assets/img/quotation-mark.svg" alt="" />
            </div>
          </div>
          <div className="testi-pagi-wrap">
            <div className="testi-pagination swiper-pagination-vertical"></div>
          </div>
        </div>
      </section>
      {/* End Testimonial */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start Why Choose Us & Video */}
      <section>
        <div className="cs-com-strength theme-black-bg theme-dark">
          <div className="cs-height-140"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-7">
                <h2><span data-aos="fade-up" data-aos-duration="500">Building Beyond Expectations</span> <span data-aos="fade-up" data-aos-duration="1000">with Innovation &amp; Precision</span>  </h2>
                <div className="cs-height-10"></div>
                <p>Construction is more than building structures — it's about crafting spaces that inspire and enrich lives. Our skilled professionals bring expertise and a passion for excellence to every project we deliver.</p>
                <div className="cs-height-35"></div>
                <div className="d-flex gap-3">
                  <div className="cs-couple-btn d-flex gap-3">
                    <Link to="/about" data-aos="fade-top" data-aos-duration="900" className="cs-primary-btn cs-color-white themecolor-bg cs-height-70 cs-width-220"><span>Read More</span></Link>
                    <Link to="/contact" data-aos="fade-top" data-aos-duration="1500" className="cs-primary-btn cs_white_color-bg cs-height-70 cs-width-220"><span>Contact Us</span></Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-5">
                <div className="cs-video-area">
                  <div className="cs-video" data-aos="fade-top" data-aos-duration="1000">
                    <img src="/assets/img/about/video-thumb.jpg" alt="" />
                    <div className="cs-video-btn">
                      <a href="https://www.youtube.com/watch?v=4BzjUq921Y4" className="cs_video_open"><svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.7939 15.2383L0.293944 29.9607L0.293945 0.515848L25.7939 15.2383Z" fill="#7c1d1f"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="cs-height-50"></div>
                  <div className="list-feature" data-aos="fade-up" data-aos-duration="600">
                    <h6>Comprehensive Project Management</h6>
                    <div className="cs-list-border"></div>
                    <h6>High-Quality Craftsmanship</h6>
                    <div className="cs-list-border"></div>
                    <h6>Sustainable and Innovative Solutions</h6>
                  </div>
                  <div className="cs-height-140"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="com-strength-img" data-aos="fade-right" data-aos-duration="500">
            <img src="/assets/img/about/transparent-img-about-com.png" alt="" />
          </div>
        </div>

        <div className="cs-working-process-wrap themecolor-bg theme-dark">
          <div className="cs-height-100"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-md-6">
                <div className="cs-process-item" data-aos="fade-top" data-aos-duration="300">
                  <div className="cs-wp-icon">
                    <img src="/assets/img/one.svg" alt="" />
                  </div>
                  <h6>Project Planning</h6>
                  <p>We map out your vision, budget, and timeline across residential, commercial, and infrastructure projects through detailed feasibility studies and site assessments.</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="cs-process-item" data-aos="fade-top" data-aos-duration="500">
                  <div className="cs-wp-icon">
                    <img src="/assets/img/two.svg" alt="" />
                  </div>
                  <h6>Design Development</h6>
                  <p>Our architects and engineers turn your goals into precise blueprints, structural plans, and material specifications tailored to new builds, renovations, and remodels.</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="cs-process-item" data-aos="fade-top" data-aos-duration="700">
                  <div className="cs-wp-icon">
                    <img src="/assets/img/three.svg" alt="" />
                  </div>
                  <h6>Pre-Construction</h6>
                  <p>We secure permits, coordinate subcontractors, and prepare the site so every residential, commercial, or industrial build starts on solid ground.</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="cs-process-item" data-aos="fade-top" data-aos-duration="900">
                  <div className="cs-wp-icon">
                    <img src="/assets/img/four.svg" alt="" />
                  </div>
                  <h6>Project Completion</h6>
                  <p>We deliver finished spaces with full quality inspections, final walkthroughs, and ongoing support — from new construction to project management and consulting.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cs-height-100"></div>
        </div>
      </section>
      {/* End Why Choose Us & Video */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start Experience & Image Section */}
      <section>
        <div className="about-experience-wrap bottom-align">
          <div className="img-ae background-parallax">
            <div className="parallax-image max-height-750">
              <img src="/assets/img/about/about-experience.jpg" alt="" />
              <div className="ae-title">
                <h2>NAVERGO NAVERGO NAVE</h2>
              </div>
            </div>
          </div>
          <div className="content-for-parallax">
            <div className="ae-content theme-dark">
              <div className="cs-experience" data-aos="fade-right" data-aos-duration="400">
                <img src="/assets/img/about/27.svg" alt="" />
                <div className="cs-height-15"></div>
                <h4 className="cs-uppercase">Years of <br /> Experience</h4>
              </div>
              <div className="aec-line"></div>
              <h3 data-aos="fade-left" data-aos-duration="400" className="cs-uppercase">We are Leading <br /> Company</h3>
            </div>
          </div>
        </div>
      </section>
      {/* Start Experience & Image Section */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start Blog Section */}
      <section>
        <div className="container">

          <div className="cs-heading-with-animation text-center max-width-800 m-auto d-flex">
            <h2 className="cs-heading">Explore Our Most Recent Blog Posts and Insights</h2>
            <span className="cs-text-style-h1 cs-animated-text">RECENT NEWS</span>
          </div>
          <div className="cs-height-50"></div>

          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="blog-item" data-aos="fade-up" data-aos-duration="300">
                <div className="blog-item-header">
                  <div className="blog-item-img">
                    <Link to="/blog-details">
                      <img src="/assets/img/blog/blog-item-img01.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="date">
                    <span>15 Aug</span>
                  </div>
                </div>
                <div className="blog-item-data">
                  <div className="tag-item">
                    <Link to="/blog-standard"><span>Construction</span></Link>
                  </div>
                  <div className="title">
                    <Link to="/blog-details">
                      <h6>
                        The Future of Sustainable Construction Trends to Watch
                      </h6>
                    </Link>
                  </div>
                  <div className="border-1px"></div>
                  <div className="cs-height-20"></div>
                  <Link to="/blog-details" className="cs-text_b_line"
                    ><span>Read More</span>
                    <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
              <div className="cs-height-30"></div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item" data-aos="fade-up" data-aos-duration="400">
                <div className="blog-item-header">
                  <div className="blog-item-img">
                    <Link to="/blog-details">
                      <img src="/assets/img/blog/blog-item-img02.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="date">
                    <span>17 Dec</span>
                  </div>
                </div>
                <div className="blog-item-data">
                  <div className="tag-item">
                    <Link to="/blog-standard"><span>Project Management</span></Link>
                  </div>
                  <div className="title">
                    <Link to="/blog-details">
                      <h6>
                        Key Factors in Choosing the Right Construction Agency
                      </h6>
                    </Link>
                  </div>
                  <div className="border-1px"></div>
                  <div className="cs-height-20"></div>
                  <Link to="/blog-details" className="cs-text_b_line"
                    ><span>Read More</span>
                    <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
              <div className="cs-height-30"></div>
            </div>
            <div className="col-xl-4 col-md-12">
              <div className="blog-item" data-aos="fade-up" data-aos-duration="500">
                <div className="blog-item-header">
                  <div className="blog-item-img">
                    <Link to="/blog-details">
                      <img src="/assets/img/blog/blog-item-img03.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="date">
                    <span>07 Jan</span>
                  </div>
                </div>
                <div className="blog-item-data">
                  <div className="tag-item">
                    <Link to="/blog-standard"><span>Commercial</span></Link>
                  </div>
                  <div className="title">
                    <Link to="/blog-details">
                      <h6>
                        How Our Construction Agency Turns Visions into Reality
                      </h6>
                    </Link>
                  </div>
                  <div className="border-1px"></div>
                  <div className="cs-height-20"></div>
                  <Link to="/blog-details" className="cs-text_b_line"
                    ><span>Read More</span>
                    <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
              <div className="cs-height-30"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Start Blog Section */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start Contact Form */}
      <section>
        <div className="cs-contact-section">
          <div className="container-fluid">
            <div className="row cs_center" data-src="/assets/img/pattern-bg-for-light.png">

              <div className="col-xl-7">
                <div className="contact-img">
                  <div className="animate-img-wrap">
                    <div className="reveal"></div>
                    <img className="the-animated-image" src="/assets/img/contact/contact-image.jpg" alt="" />
                  </div>
                </div>
              </div>

              <div className="col-xl-5">
                <div className="position-relative" data-aos="fade-up" data-aos-duration="300">
                  <h2 className="cs-heading">Send Us a Message Use Our Contact Form to Get in Touch</h2>
                  <span className="cs-text-style-h1 cs-animated-text">CONTACT US</span>
                </div>

                <div className="cs-height-35"></div>
                <form>
                  <div className="input-col-two">
                    <input type="text" placeholder="First Name*" required />
                    <input type="text" placeholder="Last Name" required />
                  </div>
                  <div className="input-col-two">
                    <input type="tel" placeholder="Phone*" required />
                    <input type="email" placeholder="Email Address*" required />
                  </div>
                  <input type="text" placeholder="Subject" required />
                  <textarea id="message" rows="4" placeholder="Write your message..." required></textarea>
                  <button type="submit" className="cs-primary-btn secondary-btn cs-color-white themecolor-bg cs-height-60 cs-width-220"><span>Send Message</span></button>
                </form>
              </div>

            </div>
            <div className="cs-section-height"></div>
          </div>
        </div>
      </section>
      {/* End Contact Form */}
    </>
  );
}
