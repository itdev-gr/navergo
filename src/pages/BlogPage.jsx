import { Link } from "react-router-dom";

export default function BlogPage() {
  return (
    <>
      {/* Start Common BreadCrumb */}
      <section>
        <div className="cs-breadcrumb-wrap theme-dark" data-src="/assets/img/breadcrumb.jpg">
          <div className="container">
            <div className="row cs_center">
              <div className="cs-bread-page-title-area">
                <div className="cs-page-title">
                  <h2 className="cs_white_color">Recent Blog</h2>
                </div>
                <div className="breadcrumb">
                  <ul>
                    <li>
                      <Link to="/" className="cs-text_b_line"><span>HOME</span></Link>
                    </li>
                    <li>/</li>
                    <li>RECENT BLOG</li>
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

      {/* Start Blog Content */}
      <section>
        <div className="container blog-container lg-gutter-control">
          <div className="blog-container">
            <div className="blog-grid">
              <div className="grid-sizer"></div>
              <div className="blog-item masonry-item blog-quote-item theme-dark">

                <Link to="/blog-details">
                  <blockquote className="themecolor-bg">
                    “The Lorem Ipsum Future of Sustainable Construc Trends to Watch”
                  </blockquote>
                  <div className="cs-height-65"></div>
                  <div className="author-data">
                    <p>Devid Walker</p>
                    <svg width="105" height="107" viewBox="0 0 105 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.2">
                        <path
                          d="M68.5212 53.8359H84.543V66.7754C84.543 73.9124 78.7952 79.7149 71.7256 79.7149H70.1235C67.46 79.7149 65.3169 81.8781 65.3169 84.5672V94.2718C65.3169 96.9608 67.4598 99.1242 70.1235 99.1242H71.7256C89.4296 99.1242 103.769 84.6482 103.769 66.7756V18.2524C103.769 12.8947 99.4632 8.54785 94.156 8.54785H68.5212C63.214 8.54785 58.9082 12.8947 58.9082 18.2524V44.1314C58.9082 49.4891 63.214 53.8359 68.5212 53.8359Z"
                          fill="white" />
                        <path
                          d="M10.8435 53.8359H26.8652V66.7754C26.8652 73.9124 21.1175 79.7149 14.0479 79.7149H12.4458C9.78223 79.7149 7.63916 81.8781 7.63916 84.5672V94.2718C7.63916 96.9608 9.78202 99.1242 12.4458 99.1242H14.0479C31.7518 99.1242 46.0913 84.6482 46.0913 66.7756V18.2524C46.0913 12.8947 41.7855 8.54785 36.4783 8.54785H10.8435C5.53629 8.54785 1.23047 12.8947 1.23047 18.2524V44.1314C1.23047 49.4891 5.53629 53.8359 10.8435 53.8359Z"
                          fill="white" />
                      </g>
                    </svg>

                  </div>
                </Link>

              </div>

              <div className="blog-item masonry-item">
                <div className="blog-item-header">
                  <div className="blog-item-img">
                    <Link to="/blog-details">
                      <img src="/assets/img/blog/blog-item-masonary-1.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="date">
                    <span>15 Aug</span>
                  </div>
                </div>
                <div className="blog-item-data">
                  <div className="tag-item">
                    <a href="#"><span>Project Management</span></a>
                  </div>
                  <div className="title">
                    <Link to="/blog-details">
                      <h6>
                        Top 10 Trends in Modern Construction and Design.
                      </h6>
                    </Link>
                  </div>
                  <div className="border-1px"></div>
                  <div className="cs-height-20"></div>
                  <Link to="/blog-details" className="cs-text_b_line"><span>Read More</span>
                    <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>

              <div className="blog-item masonry-item">
                <div className="blog-item-header">
                  <div className="blog-item-img">
                    <Link to="/blog-details">
                      <img src="/assets/img/blog/blog-item-masonary-2.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="date">
                    <span>15 Aug</span>
                  </div>
                </div>
                <div className="blog-item-data">
                  <div className="tag-item">
                    <Link to="/blog-details"><span>Building</span></Link>
                  </div>
                  <div className="title">
                    <Link to="/blog-details">
                      <h6>
                        Sustainable Construction Building for a Greener Future.
                      </h6>
                    </Link>
                  </div>
                  <div className="border-1px"></div>
                  <div className="cs-height-20"></div>
                  <Link to="/blog-details" className="cs-text_b_line"><span>Read More</span>
                    <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>

              <div className="blog-item masonry-item">
                <div className="blog-item-header">
                  <div className="blog-item-img position-relative">
                    <Link to="/blog-details">

                      <div className="image-slider">
                        <div className="swiper common-slider">
                          <div className="swiper-wrapper" data-aos="fade-top" data-aos-duration="400">
                            <div className="swiper-slide">
                              <img src="/assets/img/blog/blog-item-img01.jpg" alt="" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/blog/blog-item-img02.jpg" alt="" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/blog/blog-item-img03.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="cs-arrow-style-fill">
                          <div className="cs-left-arrow cs-ps-swiper-btn-prev">
                            <i className="flaticon-left-arrow"></i>
                          </div>
                          <div className="cs-right-arrow cs-ps-swiper-btn-next">
                            <i className="flaticon-right-chevron"></i>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="date">
                    <span>15 Aug</span>
                  </div>
                </div>
                <div className="blog-item-data">
                  <div className="tag-item">
                    <Link to="/blog-standard"><span>Project Management</span></Link>
                  </div>
                  <div className="title">
                    <Link to="/blog-details">
                      <h6>
                        A Step-by-Step Professional Guide to the Construction Process.
                      </h6>
                    </Link>
                  </div>
                  <div className="border-1px"></div>
                  <div className="cs-height-20"></div>
                  <Link to="/blog-details" className="cs-text_b_line"><span>Read More</span>
                    <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>

              <div className="blog-item masonry-item">
                <div className="blog-item-header">
                  <div className="blog-item-img">
                    <Link to="/blog-details">
                      <img src="/assets/img/blog/blog-item-masonary-3.jpg" alt="" />
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
                        Why Communication is Key in Success Construction Projects.
                      </h6>
                    </Link>
                  </div>
                  <div className="border-1px"></div>
                  <div className="cs-height-20"></div>
                  <Link to="/blog-details" className="cs-text_b_line"><span>Read More</span>
                    <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>

              <div className="blog-item masonry-item">
                <div className="blog-item-header">
                  <div className="blog-item-img">
                    <Link to="/blog-details">
                      <img src="/assets/img/blog/blog-item-masonary-4.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="date">
                    <span>15 Aug</span>
                  </div>
                </div>
                <div className="blog-item-data">
                  <div className="tag-item">
                    <a href="#"><span>Project Management</span></a>
                  </div>
                  <div className="title">
                    <Link to="/blog-details">
                      <h6>
                        Key Factors in Choosing the Right Construction Agency.
                      </h6>
                    </Link>
                  </div>
                  <div className="border-1px"></div>
                  <div className="cs-height-20"></div>
                  <Link to="/blog-details" className="cs-text_b_line"><span>Read More</span>
                    <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>

              <div className="blog-item masonry-item">
                <div className="blog-item-header">
                  <div className="blog-item-img">
                    <Link to="/blog-details">
                      <img src="/assets/img/member/team-member-7.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="date">
                    <span>15 Aug</span>
                  </div>
                </div>
                <div className="blog-item-data">
                  <div className="tag-item">
                    <Link to="/blog-details"><span>Future Construction</span></Link>
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
                  <Link to="/blog-details" className="cs-text_b_line"><span>Read More</span>
                    <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>

              <div className="blog-item masonry-item">
                <div className="blog-item-header">
                  <div className="blog-item-img">
                    <Link to="/blog-details">
                      <img src="/assets/img/blog/blog-item-masonary-6.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="date">
                    <span>15 Aug</span>
                  </div>
                </div>
                <div className="blog-item-data">
                  <div className="tag-item">
                    <Link to="/blog-details"><span>Future Construction</span></Link>
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
                  <Link to="/blog-details" className="cs-text_b_line"><span>Read More</span>
                    <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>

              <div className="blog-item masonry-item">
                <div className="blog-item-header">
                  <div className="blog-item-img">
                    <Link to="/blog-details">
                      <img src="/assets/img/blog/blog-item-masonary-7.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="date">
                    <span>15 Aug</span>
                  </div>
                </div>
                <div className="blog-item-data">
                  <div className="tag-item">
                    <Link to="/blog-standard"><span>Project Management</span></Link>
                  </div>
                  <div className="title">
                    <Link to="/blog-details">
                      <h6>
                        A Step-by-Step Professional Guide to the Construction Process.
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

              <div className="blog-item masonry-item">
                <div className="blog-item-header">
                  <div className="blog-item-img">
                    <Link to="/blog-details">
                      <img src="/assets/img/blog/blog-item-masonary-5.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="date">
                    <span>15 Aug</span>
                  </div>
                </div>
                <div className="blog-item-data">
                  <div className="tag-item">
                    <Link to="/blog-details"><span>Project Management</span></Link>
                  </div>
                  <div className="title">
                    <Link to="/blog-details">
                      <h6>
                        A Step-by-Step Professional Guide to the Construction Process.
                      </h6>
                    </Link>
                  </div>
                  <div className="border-1px"></div>
                  <div className="cs-height-20"></div>
                  <Link to="/blog-details" className="cs-text_b_line"><span>Read More</span>
                    <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>

              <div className="blog-item masonry-item blog-quote-item theme-dark">

                <Link to="/blog-details">
                  <blockquote className="theme-black-bg">
                    “Construc Trends to Watch The Lorem Ipsum Future of Sustainable”
                  </blockquote>
                  <div className="author-data theme-black-bg">
                    <p>Walker Devid</p>
                    <svg width="105" height="107" viewBox="0 0 105 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.2">
                        <path
                          d="M68.5212 53.8359H84.543V66.7754C84.543 73.9124 78.7952 79.7149 71.7256 79.7149H70.1235C67.46 79.7149 65.3169 81.8781 65.3169 84.5672V94.2718C65.3169 96.9608 67.4598 99.1242 70.1235 99.1242H71.7256C89.4296 99.1242 103.769 84.6482 103.769 66.7756V18.2524C103.769 12.8947 99.4632 8.54785 94.156 8.54785H68.5212C63.214 8.54785 58.9082 12.8947 58.9082 18.2524V44.1314C58.9082 49.4891 63.214 53.8359 68.5212 53.8359Z"
                          fill="white" />
                        <path
                          d="M10.8435 53.8359H26.8652V66.7754C26.8652 73.9124 21.1175 79.7149 14.0479 79.7149H12.4458C9.78223 79.7149 7.63916 81.8781 7.63916 84.5672V94.2718C7.63916 96.9608 9.78202 99.1242 12.4458 99.1242H14.0479C31.7518 99.1242 46.0913 84.6482 46.0913 66.7756V18.2524C46.0913 12.8947 41.7855 8.54785 36.4783 8.54785H10.8435C5.53629 8.54785 1.23047 12.8947 1.23047 18.2524V44.1314C1.23047 49.4891 5.53629 53.8359 10.8435 53.8359Z"
                          fill="white" />
                      </g>
                    </svg>

                  </div>
                </Link>

              </div>

            </div>
          </div>
          <div className="cs-height-60"></div>
          <div className="blog-navigation">
            <div className="next"><i className="flaticon-left-arrow"></i>
            </div>
            <ul>
              <li className="themecolor active"><a href="#">01</a></li>
              <li><a href="#">02</a></li>
              <li><a href="#">03</a></li>
              <li><a href="#">04</a></li>
              <li><a href="#">05</a></li>
              <li><a href="#">06</a></li>
            </ul>
            <div className="prev"><i className="flaticon-right-chevron"></i>
            </div>
          </div>
        </div>
      </section>
      {/* End Blog Content */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}
    </>
  );
}
