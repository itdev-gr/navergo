import { Link } from "react-router-dom";

export default function BlogStandardPage() {
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
        <div className="container">
          <div className="row stickysec-wrap clearfix">
            <div className="col-xl-8 scolling-content">
              <div className="blog-item-wrap">
                <div className="blog-item">
                  <div className="blog-item-header">

                    <div className="blog-item-img">
                      <Link to="/blog-details">
                        <img src="/assets/img/blog/blog-image-standard-size01.jpg" alt="" />
                      </Link>
                    </div>

                    <div className="date">
                      <span>15 Aug</span>
                    </div>

                  </div>

                  <div className="blog-item-content">
                    <Link to="/blog-details">
                      <h4>
                        Sustainable Construction Building for a Greener Future.
                      </h4>
                    </Link>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

                    <div className="cs-height-20"></div>

                    <div className="cs_vertical_middle jcb">
                      <Link to="/blog-details" className="cs-text_b_line"><span>Read More</span>
                        <i className="flaticon-right-arrow"></i>
                      </Link>
                      <div className="meta-admin cs_vertical_middle gap-2">
                        <div className="blog-meta-border"></div>
                        <span className="mp-0">Posted By:</span>
                        <p className="mp-0">Shelly Golden</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cs-height-50"></div>
              </div>
              <div className="blog-item-wrap">
                <div className="blog-item">
                  <div className="blog-item-header">

                    <div className="blog-item-img">
                      <Link to="/blog-details">
                        <img src="/assets/img/blog/blog-image-standard-size02.jpg" alt="" />
                      </Link>
                    </div>

                    <div className="date">
                      <span>15 Aug</span>
                    </div>

                  </div>

                  <div className="blog-item-content">
                    <Link to="/blog-details">
                      <h4>
                        Sustainable Construction Building for a Greener Future.
                      </h4>
                    </Link>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

                    <div className="cs-height-20"></div>

                    <div className="cs_vertical_middle jcb">
                      <a href="#" className="cs-text_b_line"><span>Read More</span>
                        <i className="flaticon-right-arrow"></i>
                      </a>
                      <div className="meta-admin cs_vertical_middle gap-2">
                        <div className="blog-meta-border"></div>
                        <span className="mp-0">Posted By:</span>
                        <p className="mp-0">Shelly Golden</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cs-height-50"></div>
              </div>
              <div className="blog-item-wrap">
                <div className="blog-item">
                  <div className="blog-item-header">

                    <div className="blog-item-img">
                      <Link to="/blog-details">
                        <img src="/assets/img/blog/blog-image-standard-size03.jpg" alt="" />
                      </Link>
                    </div>

                    <div className="date">
                      <span>15 Aug</span>
                    </div>

                  </div>

                  <div className="blog-item-content">
                    <Link to="/blog-details">
                      <h4>
                        Sustainable Construction Building for a Greener Future.
                      </h4>
                    </Link>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

                    <div className="cs-height-20"></div>

                    <div className="cs_vertical_middle jcb">
                      <a href="#" className="cs-text_b_line"><span>Read More</span>
                        <i className="flaticon-right-arrow"></i>
                      </a>
                      <div className="meta-admin cs_vertical_middle gap-2">
                        <div className="blog-meta-border"></div>
                        <span className="mp-0">Posted By:</span>
                        <p className="mp-0">Shelly Golden</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cs-height-50"></div>
              </div>
              <div className="blog-item-wrap">
                <div className="blog-item">
                  <div className="blog-item-header">

                    <div className="blog-item-img">
                      <Link to="/blog-details">
                        <img src="/assets/img/blog/blog-image-standard-size04.jpg" alt="" />
                      </Link>
                    </div>

                    <div className="date">
                      <span>15 Aug</span>
                    </div>

                  </div>

                  <div className="blog-item-content">
                    <Link to="/blog-details">
                      <h4>
                        Sustainable Construction Building for a Greener Future.
                      </h4>
                    </Link>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

                    <div className="cs-height-20"></div>

                    <div className="cs_vertical_middle jcb">
                      <Link to="/blog-details" className="cs-text_b_line"><span>Read More</span>
                        <i className="flaticon-right-arrow"></i>
                      </Link>
                      <div className="meta-admin cs_vertical_middle gap-2">
                        <div className="blog-meta-border"></div>
                        <span className="mp-0">Posted By:</span>
                        <p className="mp-0">Shelly Golden</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cs-height-70"></div>
              </div>
              <a href="#" className="cs-primary-btn secondary-btn cs-color-white themecolor-bg cs-height-60 cs-width-220"><span>Load More Posts</span></a>
            </div>
            <div className="col-xl-4 sticky-box">
              <div className="widget-sidebar blog-widget sticky-box-child">
                <div className="search-widget widget-item theme_bg_primary">
                  <div className="search-widget">
                    <input type="text" placeholder="Search here..." />
                    <div className="search-icon">
                      <i className="flaticon-magnifying-glass"></i>
                    </div>
                  </div>

                </div>

                <div className="cs-height-40"></div>

                <div className="category widget-item theme_bg_primary">
                  <h6 className="cat-w-title">Category</h6>
                  <ul>
                    <li><a href="#"><i className="flaticon-right-arrow"></i>Project Consulting</a></li>
                    <li><a href="#"><i className="flaticon-right-arrow"></i>Construction Technology</a></li>
                    <li><a href="#"><i className="flaticon-right-arrow"></i>Safety &amp; Compliance</a></li>
                    <li><a href="#"><i className="flaticon-right-arrow"></i>Materials &amp; Resources</a></li>
                    <li><a href="#"><i className="flaticon-right-arrow"></i>Budgeting &amp; Finance</a></li>
                    <li><a href="#"><i className="flaticon-right-arrow"></i>Expert Interviews</a></li>
                    <li><a href="#"><i className="flaticon-right-arrow"></i>Sustainable Building</a></li>
                  </ul>
                </div>

                <div className="cs-height-40"></div>

                <div className="tag widget-item theme_bg_primary">
                  <h6 className="tag-w-title">Tag</h6>
                  <div className="tag-items">
                    <a href="#">ConstructionTrends</a>
                    <a href="#">SafetyFirst</a>
                    <a href="#">SmartHomes</a>
                    <a href="#">GreenBuilding</a>
                    <a href="#">EcoFriendly</a>
                    <a href="#">GreenBuilding</a>
                    <a href="#">ContractorTips</a>
                    <a href="#">EnergyEfficiency</a>
                  </div>
                </div>

              </div>
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
