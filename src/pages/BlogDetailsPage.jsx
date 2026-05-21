import { Link } from "react-router-dom";

export default function BlogDetailsPage() {
  return (
    <>
      {/* Start Common BreadCrumb */}
      <section>
        <div className="cs-breadcrumb-wrap theme-dark" data-src="/assets/img/breadcrumb.jpg">
          <div className="container">
            <div className="row cs_center">
              <div className="cs-bread-page-title-area">
                <div className="cs-page-title">
                  <h2 className="cs_white_color">Blog Details</h2>
                </div>
                <div className="breadcrumb">
                  <ul>
                    <li>
                      <Link to="/" className="cs-text_b_line"
                      ><span>HOME</span></Link>
                    </li>
                    <li>/</li>
                    <li>BLOG SINGLE</li>
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

      {/* Start Post Section */}
      <article className="blog-single">
        <div className="container">
          <div className="row">
            <div className="">
              <div className="border-left-right">
                <div className="image-slider">
                  <div className="swiper common-slider">
                    <div
                      className="swiper-wrapper"
                      data-aos="fade-top"
                      data-aos-duration="400"
                    >
                      <div className="swiper-slide">
                        <img
                          src="/assets/img/blog/blog-image-full-size3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/img/blog/blog-image-full-size.jpg"
                          alt=""
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/img/blog/blog-image-full-size2.jpg"
                          alt=""
                        />
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

                <div className="cs-height-60"></div>

                <div className="max-width-1120 m-auto">
                  <div className="article-meta d-flex gap-5">
                    <div className="author">
                      <p>Posted By:</p>
                      <a href="#"><span>Shelly K. Golden</span></a>
                    </div>
                    <div className="article-date">
                      <p>Date:</p>
                      <a href="#"><span>12 Aug 2024</span></a>
                    </div>
                  </div>
                  <h4>
                    How to Choose the Right Construction Company for Your
                    Construction Project?
                  </h4>

                  <div className="cs-height-30"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley.
                  </p>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley.
                  </p>

                  <div className="cs-height-40"></div>

                  <h5>Licensing and Insurance</h5>
                  <div className="cs-height-10"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley. Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley.
                  </p>
                  <div className="cs-height-10"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley.
                  </p>

                  <div className="cs-height-50"></div>

                  <blockquote className="theme-border-wrap blog-single-blockquote">
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
                    “Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley.”
                  </blockquote>

                  <div className="cs-height-65"></div>

                  <h5>Experience and Expertise</h5>
                  <div className="cs-height-10"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley.
                  </p>
                  <div className="cs-height-10"></div>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley.
                  </p>

                  <div className="cs-height-40"></div>

                  <h5>Budget and Cost Transparency</h5>
                  <div className="cs-height-10"></div>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley.
                  </p>

                  <div className="cs-height-40"></div>
                </div>

                <div className="article-double-media">
                  <div className="cs-common-video position-relative cs_center">
                    <img
                      data-aos="fade-up"
                      data-aos-duration="400"
                      src="/assets/img/blog/blog-single-video.jpg"
                      alt=""
                    />
                    <div className="cs-video-btn position-absoulute">
                      <a
                        href="https://www.youtube.com/watch?v=4BzjUq921Y4"
                        className="cs_video_open"
                      ><svg
                        width="26"
                        height="30"
                        viewBox="0 0 26 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                          <path
                            d="M25.7939 15.2383L0.293944 29.9607L0.293945 0.515848L25.7939 15.2383Z"
                            fill="#7c1d1f"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <img
                    data-aos="fade-up"
                    data-aos-duration="600"
                    src="/assets/img/blog/blog-single-sm-2.jpg"
                    alt=""
                  />
                </div>

                <div className="max-width-1120 m-auto">
                  <div className="cs-height-40"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type.
                  </p>
                  <div className="cs-height-40"></div>
                  <h5>Sustainability and Environmental Practices</h5>
                  <div className="cs-height-10"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley.
                  </p>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley.
                  </p>
                </div>

                <div className="cs-height-40"></div>

                <div className="cs-container-border"></div>
              </div>
            </div>
          </div>
        </div>
      </article>
      {/* Start Post Section */}

      {/* Start Article Footer & comment */}
      <div className="container">
        <div>
          <div className="border-left-right">
            <div className="cs-height-50"></div>
            <div className="max-width-1120 m-auto cs-post-share-tag">
              <div className="tag d-flex align-items-center gap-3">
                <span>Tag:</span>
                <div className="d-flex gap-3">
                  <div className="tag-item">
                    <a href="#"><span>Construction</span></a>
                  </div>
                  <div className="tag-item">
                    <a href="#"><span>Construction</span></a>
                  </div>
                  <div className="tag-item">
                    <a href="#"><span>Construction</span></a>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3">
                <span>Share:</span>
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

            <div className="container">
              <div className="max-width-1120 m-auto">
                <div className="cs-height-100"></div>

                <h5>Comment</h5>

                <div className="cs-height-40"></div>

                <div className="max-width-740">
                  <div className="cs-comment-item">
                    <div className="cs-comment-user-info">
                      <img src="/assets/img/blog/avatar-1.png" alt="" />
                      <div className="blog-user-content">
                        <span className="cs-text-style-h6 cs-color-black"
                        >William L. Booth</span>
                        <p>3 Hours ago</p>
                      </div>
                    </div>
                    <div className="cs-height-20"></div>
                    <div className="cs-comment-text">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when looking
                        at its layout. The point of using Lorem Ipsum is that.
                      </p>
                    </div>
                    <div className="cs-height-20"></div>
                    <div className="cs-reply-btn">
                      <a href="#" className="cs-text_b_line"
                      ><span>Reply</span>
                        <i className="flaticon-right-arrow"></i>
                      </a>
                    </div>
                  </div>
                  <div className="cs-height-50"></div>
                  <div className="cs-comment-item comment-reply">
                    <div className="cs-comment-user-info">
                      <img src="/assets/img/blog/avatar-2.png" alt="" />
                      <div className="blog-user-content">
                        <span className="cs-text-style-h6 cs-color-black"
                        >Nathaniel Carter</span>
                        <p>3 Hours ago</p>
                      </div>
                    </div>
                    <div className="cs-height-20"></div>
                    <div className="cs-comment-text">
                      <p>
                        Lorem Ipsum established fact that a reader will be
                        distracted by the readable content of a page when looking
                        at its layout. The point of using Lorem Ipsum is that.
                      </p>
                    </div>
                    <div className="cs-height-20"></div>
                    <div className="cs-reply-btn">
                      <a href="#" className="cs-text_b_line"
                      ><span>Reply</span>
                        <i className="flaticon-right-arrow"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="cs-section-height-half"></div>

                <div className="max-width-740">
                  <h5>Leave a Comment</h5>
                  <div className="cs-height-50"></div>
                  <form>
                    <div className="d-flex gap-3">
                      <input type="text" placeholder="First name*" required="" />

                      <input
                        type="email"
                        placeholder="Email address*"
                        required=""
                      />
                    </div>

                    <textarea
                      id="message"
                      rows="4"
                      placeholder="Write your comment..."
                      required=""
                    ></textarea>

                    <button
                      type="submit"
                      className="cs-primary-btn secondary-btn cs-color-white themecolor-bg cs-height-70 cs-width-220"
                    >
                      <span>Post Comment</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="cs-height-100 lg-d-none"></div>
            <div className="cs-container-border lg-d-none"></div>
          </div>
        </div>
      </div>
      {/* End Article Footer & comment */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}

      {/* Start Similar Blog Section */}
      <section className="lg-gutter-control">
        <div className="container">
          <div
            className="cs-heading-with-animation text-center max-width-800 m-auto d-flex"
          >
            <h2 className="cs-heading">
              Explore Our Most Recent Similar Blog Posts and Insights
            </h2>
            <span className="cs-text-style-h1 cs-animated-text">SIMILAR NEWS</span>
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
                    <Link to="/blog-standard"
                    ><span>Project Management</span></Link>
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
      {/* Start Similar Blog Section */}

      <div className="cs-section-height"></div>
      {/* Section to Section Gap */}
    </>
  );
}
