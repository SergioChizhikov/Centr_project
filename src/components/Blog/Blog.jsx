import React from "react";
import {NavLink} from "react-router-dom";
import blogBig from ".././assets/img/blog/blog-big-1.jpg";
import blogVideo from ".././assets/img/blog/video/blog-video.jpg";
import blogGallery_1 from ".././assets/img/blog/gallery/blog-gallary-1.jpg";
import blogGallery_2 from ".././assets/img/blog/gallery/blog-gallary-2.jpg";
import blogGallery_3 from ".././assets/img/blog/gallery/blog-gallary-3.jpg";

const Blog = () => {
    return (
        <div>
            <section className="blog__area pt-120 pb-75">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 offset-xl-2 offset-lg-2">
                            <div className="blog__wrapper">
                                <article className="postbox mb-40">
                                    <div className="postbox__thumb w-img">
                                        <NavLink to="blog-details">
                                            <img src={blogBig} alt="blog image"></img>
                                        </NavLink>
                                    </div>
                                    <div className="postbox__content grey-bg">
                                        <div className="blog__meta blog__meta-2 blog__meta-4 mb-15">
                                            <span><i className="far fa-calendar-check"></i> September 15, 2018</span>
                                            <span><a href="#"><i className="far fa-user"></i> Diboli B. Joly</a></span>
                                            <span><a href="#"><i className="far fa-comments"></i> 23 Comments</a></span>
                                        </div>
                                        <h3 className="postbox__title postbox__title-2 mb-20">
                                            <NavLink to ="blog_details">But there is a downside. Simply running a search
                                                for medical
                                                blogs.</NavLink>
                                        </h3>
                                        <div className="postbox__text mb-25">
                                            <p>There’s a good chance Everyday Health is the most appropriately named
                                                blog on this
                                                list because it focuses on the health
                                                topics that consistently affect a wide range of people. They also get
                                                kudos for
                                                addressing the emotional challenges
                                                folks face when managing conditions.</p>
                                        </div>
                                        <div className="read-more">
                                            <NavLink to ="blog_details"
                                               className="s-btn s-btn__square s-btn__square-green">read
                                                more</NavLink>
                                        </div>
                                    </div>
                                </article>
                                <article className="postbox format-video mb-40">
                                    <div className="postbox__video p-relative w-img">
                                        <img src={blogVideo} alt="blog image"></img>
                                        <a className="postbox__video-btn play-btn play-btn-pink"
                                           href="https://youtu.be/" data-fancybox><i
                                            className="fas fa-play"></i></a>
                                    </div>
                                    <div className="postbox__content grey-bg">
                                        <div className="blog__meta blog__meta-2 blog__meta-4 mb-15">
                                            <span><i className="far fa-calendar-check"></i> November 05, 2018</span>
                                            <span><a href="#"><i className="far fa-user"></i> Salim Rana</a></span>
                                            <span><a href="#"><i className="far fa-comments"></i> 05 Comments</a></span>
                                        </div>
                                        <h3 className="postbox__title postbox__title-2 mb-20">
                                            <NavLink to ="blog-details.html">To help ease the process, we identified 75 of
                                                our favorite
                                                medical blogs.</NavLink>
                                        </h3>
                                        <div className="postbox__text mb-25">
                                            <p>There’s a good chance Everyday Health is the most appropriately named
                                                blog on this
                                                list because it focuses on the health
                                                topics that consistently affect a wide range of people. They also get
                                                kudos for
                                                addressing the emotional challenges
                                                folks face when managing conditions.</p>
                                        </div>
                                        <div className="read-more">
                                            <NavLink to ="blog-details.html"
                                               className="s-btn s-btn__square s-btn__square-green">read
                                                more</NavLink>
                                        </div>
                                    </div>
                                </article>
                                <article className="postbox format-gallery mb-40">
                                    <div className="postbox__gallery owl-carousel">
                                        <img src={blogGallery_1} alt="blog image"></img>
                                        <img src={blogGallery_2} alt="blog image"></img>
                                        <img src={blogGallery_3} alt="blog image"></img>
                                    </div>
                                    <div className="postbox__content grey-bg">
                                        <div className="blog__meta blog__meta-2 blog__meta-4 mb-15">
                                            <span><i className="far fa-calendar-check"></i> November 23, 2018</span>
                                            <span><a href="#"><i className="far fa-user"></i> Shahnewaz Sakil</a></span>
                                            <span><a href="#"><i className="far fa-comments"></i> 15 Comments</a></span>
                                        </div>
                                        <h3 className="postbox__title postbox__title-2 mb-20">
                                            <NavLink to ="blog_details">The well known health website has quite a
                                                collection of
                                                blogs.</NavLink>
                                        </h3>
                                        <div className="postbox__text mb-25">
                                            <p>There’s a good chance Everyday Health is the most appropriately named
                                                blog on this
                                                list because it focuses on the health
                                                topics that consistently affect a wide range of people. They also get
                                                kudos for
                                                addressing the emotional challenges
                                                folks face when managing conditions.</p>
                                        </div>
                                        <div className="read-more">
                                            <NavLink to ="blog_details"
                                               className="s-btn s-btn__square s-btn__square-green">read
                                                more</NavLink>
                                        </div>
                                    </div>
                                </article>
                                <article className="postbox format-audio mb-40">
                                    <div className="postbox__audio">
                                        <iframe
                                            src=" URL"></iframe>
                                    </div>
                                    <div className="postbox__content grey-bg">
                                        <div className="blog__meta blog__meta-2 blog__meta-4 mb-15">
                                            <span><i className="far fa-calendar-check"></i> November 23, 2018</span>
                                            <span><a href="#"><i className="far fa-user"></i> Shahnewaz Sakil</a></span>
                                            <span><a href="#"><i className="far fa-comments"></i> 15 Comments</a></span>
                                        </div>
                                        <h3 className="postbox__title postbox__title-2 mb-20">
                                            <NavLink to ="blog_details">If you find yourself constantly bookmarking
                                                health sections
                                                on news.</NavLink>
                                        </h3>
                                        <div className="postbox__text mb-25">
                                            <p>There’s a good chance Everyday Health is the most appropriately named
                                                blog on this
                                                list because it focuses on the health
                                                topics that consistently affect a wide range of people. They also get
                                                kudos for
                                                addressing the emotional challenges
                                                folks face when managing conditions.</p>
                                        </div>
                                        <div className="read-more">
                                            <NavLink to ="blog_details"
                                               className="s-btn s-btn__square s-btn__square-green">read
                                                more</NavLink>
                                        </div>
                                    </div>
                                </article>
                                <article className="postbox format-quote mb-40">
                                    <div className="postbox__quote">
                                        <blockquote>
                                            <p>This health blog from NPR takes a fairly broad look at the medical
                                                world,.</p>
                                            <footer>- Rosalina Pong</footer>
                                        </blockquote>
                                    </div>
                                </article>
                                <div className="basic-pagination mb-40">
                                    <ul>
                                        <li><a href="#"><i className="fas fa-angle-double-left"></i></a></li>
                                        <li><a href="#">01</a></li>
                                        <li className="active"><a href="#">02</a></li>
                                        <li><a href="#">03</a></li>
                                        <li><a href="#"><i className="fas fa-ellipsis-h"></i></a></li>
                                        <li><a href="#"><i className="fas fa-angle-double-right"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>);
};


export default Blog;