import { Link, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useEffect } from "react";
import "./BlogDetails.scss";
import "./Blog.scss";
import "./Comment.scss";
import "../Contact/Contact.scss";
import Carousel from "../Slider/Carousel";
import data from "../../Data.json";
import Slider from "react-slick";

const BlogDetails = () => {
  const { id } = useParams(); // Get the 'id' from the URL

  const { blogData, carouselData } = data;
  const blogPost = blogData.informations.find(
    (post) => post.href === `/blog/blog-details/${id}`
  );

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);

  // If blog post is not found, render 404 page or a fallback message
  // if (!blogPost) {
  //   return <Page404 />;
  // }

  const { title, author, date, imgLink, description, tags } = blogPost;

  console.log(description);
  return (
    <section className="st-content">
      <div
        className="st-page-heading st-bg"
        style={{ backgroundImage: `url(/${imgLink})` }}
      >
        <div className="container">
          <div className="st-page-heading-in text-center">
            <h1 className="st-page-heading-title">{title}</h1>
            <div className="st-post-label">
              <span>
                By <Link to="#">{author}</Link>
              </span>
              <span>{date}</span>
            </div>
          </div>
        </div>
      </div>
      {/* .st-page-heading */}
      <div className="st-height-b100 st-height-lg-b80" />
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-md-1">
            <div className="st-post-details st-style1">
              <p>{description.para1}</p>
              {description.para2 && (
                <>
                  <h2>{description.para2.title}</h2>
                  <p>{description.para2.desc}</p>
                  {description.para2.img && (
                    <img
                      className="st-zoom-in"
                      src={description.para2.img}
                      alt="blog-image"
                    />
                  )}
                </>
              )}
              {description.para3 && (
                <>
                  <h2>{description.para3.title}</h2>
                  <p>{description.para3.desc}</p>
                  {description.para3.videoLink ? (
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        className="embed-responsive-item"
                        width="100%"
                        height={459}
                        src={description.para3.videoLink}
                        // src="https://www.youtube.com/watch?v=Ib_L3vuUX5k&list=RDIb_L3vuUX5k&start_radio=1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                      {/* <iframe
                        className="embed-responsive-item"
                        width="100%"
                        height={459}
                        src={description.para3.videoLink}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe> */}
                    </div>
                  ) : (
                    ""
                  )}
                  {description.para3.quote && (
                    <blockquote>
                      {description.para3.quote.text}
                      <small>
                        by: <span>{description.para3.quote.quotedBy}</span>
                      </small>
                    </blockquote>
                  )}
                </>
              )}
              {description.para4 && (
                <>
                  <h2>{description.para4.title}</h2>
                  <p>{description.para4.desc}</p>
                  {description.para4.img.length > 0 && (
                    <Slider sliderSetting={blogData.sliderSetting}>
                      {description.para4.img.map((item, index) => (
                        <img src={`/${item}`} key={index} alt="" />
                      ))}
                    </Slider>
                  )}
                </>
              )}
              <div className="st-height-b35 st-height-lg-b35" />
              <div className="st-post-meta">
                <div className="st-post-tages">
                  <h4 className="st-post-tage-title">Tags:</h4>
                  <ul className="st-post-tage-list st-mp0">
                    {tags.map((tag, index) => (
                      <li key={`tag-${index}`}>
                        <Link to="#">{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="st-post-share">
                  <h4 className="st-post-share-title">Share:</h4>
                  <div className="st-post-share-btn-list">
                    <Link to="#">
                      <Icon icon="fa6-brands:facebook-f" />
                    </Link>
                    <Link to="#">
                      <Icon icon="fa6-brands:twitter" />
                    </Link>
                    <Link to="#">
                      <Icon icon="fa6-brands:behance" />
                    </Link>
                    <Link to="#">
                      <Icon icon="fa6-brands:instagram" />
                    </Link>
                    <Link to="#">
                      <Icon icon="fa6-brands:pinterest-p" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="st-height-b60 st-height-lg-b60" />
              <div className="st-post-btn-gropu">
                <Link
                  to="#"
                  className="st-btn st-style2 st-color1 st-size-medium"
                >
                  Previous Post
                </Link>
                <Link
                  to="#"
                  className="st-btn st-style2 st-color1 st-size-medium"
                >
                  Next Post
                </Link>
              </div>
            </div>
            <div className="st-height-b60 st-height-lg-b60" />
            <div className="comments-area">
              <div className="comment-list-outer">
                <h2 className="comments-title">Comments(3)</h2>
                <ol className="comment-list">
                  <li className="comment">
                    <div className="comment-body">
                      <div className="comment-meta">
                        <div className="comment-author">
                          <img
                            src="/images/comment1.jpg"
                            alt="comment1"
                            className="avatar"
                          />
                          <Link to="" className="nm">
                            Smith Jhon
                          </Link>
                        </div>
                        <div className="comment-metadata">
                          <Link to="">
                            <span>15 Jan, 2020</span>
                          </Link>
                        </div>
                      </div>
                      <div className="comment-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit.
                        </p>
                      </div>
                      <div className="reply">
                        <Link to="" className="comment-reply-link">
                          Reply
                        </Link>
                      </div>
                    </div>
                    <ol className="children">
                      <li className="comment">
                        <div className="comment-body">
                          <div className="comment-meta">
                            <div className="comment-author">
                              <img
                                src="/images/comment2.jpg"
                                alt="comment1"
                                className="avatar"
                              />
                              <span className="nm">
                                <Link to="">Robat Newman</Link>
                              </span>
                            </div>
                            <div className="comment-metadata">
                              <Link to="">
                                <span>15 Jan, 2020</span>
                              </Link>
                            </div>
                          </div>
                          <div className="comment-content">
                            <p>
                              Consectetuer adipiscing elit. Lorem ipsum dolor
                              sit amet, consectetuer.
                            </p>
                          </div>
                          <div className="reply">
                            <Link to="" className="comment-reply-link">
                              Reply
                            </Link>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </li>
                  <li className="comment">
                    <div className="comment-body">
                      <div className="comment-meta">
                        <div className="comment-author">
                          <img
                            src="/images/comment1.jpg"
                            alt="comment1"
                            className="avatar"
                          />
                          <span className="nm">
                            <Link to="">Hannibal Lecter</Link>
                          </span>
                        </div>
                        <div className="comment-metadata">
                          <Link to="">
                            <span>26 Jan, 2016</span>
                          </Link>
                        </div>
                      </div>
                      <div className="comment-content">
                        <p>
                          Lorem ipsum dolor sit amet. Lorem ipsum adipiscing
                          elit.
                        </p>
                      </div>
                      <div className="reply">
                        <Link to="" className="comment-reply-link">
                          Reply
                        </Link>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="comment-respond">
                <h2 className="comment-reply-title">Add your comment</h2>
                <form method="post" className="comment-form">
                  <p className="comment-form-author">
                    <input
                      name="author"
                      type="text"
                      placeholder="Name*"
                      required=""
                    />
                  </p>
                  <p className="comment-form-email">
                    <input
                      name="email"
                      type="email"
                      placeholder="E-mail*"
                      required=""
                    />
                  </p>
                  <p className="comment-form-url">
                    <input
                      id="url"
                      name="url"
                      type="url"
                      placeholder="Website"
                    />
                  </p>
                  <p className="comment-form-comment">
                    <textarea
                      name="comment"
                      cols={40}
                      rows={5}
                      placeholder="Write here...*"
                      required=""
                      defaultValue={""}
                    />
                  </p>
                  <p className="form-submit">
                    <button
                      type="submit"
                      className="st-btn st-style1 st-color1 st-size-medium"
                    >
                      Post Comment
                    </button>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80" />
    </section>
  );
};

export default BlogDetails;
