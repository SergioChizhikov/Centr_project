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
                                            <span><i className="far fa-calendar-check"></i> Date</span>
                                            <span><a href="#"><i className="far fa-user"></i>Author</a></span>
                                                                                   </div>
                                        <h3 className="postbox__title postbox__title-2 mb-20">
                                            <NavLink to ="blog_details">Текст текст текст ссылка                                            </NavLink>
                                        </h3>
                                        <div className="postbox__text mb-25">
                                            <p>"Lorem Это в наших научных работах. Почитать."
                                            </p>
                                        </div>
                                        <div className="read-more">
                                            <NavLink to ="blog_details"
                                                     className="s-btn s-btn__square s-btn__square-green">Подробнее</NavLink>
                                        </div>
                                    </div>
                                </article>

                                <article className="postbox mb-40">
                                    <div className="postbox__thumb w-img">
                                        <NavLink to="blog-details">
                                            <img src={blogBig} alt="blog image"></img>
                                        </NavLink>
                                    </div>
                                    <div className="postbox__content grey-bg">
                                        <div className="blog__meta blog__meta-2 blog__meta-4 mb-15">
                                            <span><i className="far fa-calendar-check"></i> Date</span>
                                            <span><a href="#"><i className="far fa-user"></i>Author</a></span>
                                        </div>
                                        <h3 className="postbox__title postbox__title-2 mb-20">
                                            <NavLink to ="blog_details">Текст текст текст ссылка                                            </NavLink>
                                        </h3>
                                        <div className="postbox__text mb-25">
                                            <p>"Lorem Это в наших научных работах. Почитать."
                                            </p>
                                        </div>
                                        <div className="read-more">
                                            <NavLink to ="blog_details"
                                                     className="s-btn s-btn__square s-btn__square-green">Подробнее</NavLink>
                                        </div>
                                    </div>
                                </article>

                                <article className="postbox mb-40">
                                    <div className="postbox__thumb w-img">
                                        <NavLink to="blog-details">
                                            <img src={blogBig} alt="blog image"></img>
                                        </NavLink>
                                    </div>
                                    <div className="postbox__content grey-bg">
                                        <div className="blog__meta blog__meta-2 blog__meta-4 mb-15">
                                            <span><i className="far fa-calendar-check"></i> Date</span>
                                            <span><a href="#"><i className="far fa-user"></i>Author</a></span>
                                        </div>
                                        <h3 className="postbox__title postbox__title-2 mb-20">
                                            <NavLink to ="blog_details">Текст текст текст ссылка                                            </NavLink>
                                        </h3>
                                        <div className="postbox__text mb-25">
                                            <p>"Lorem Это в наших научных работах. Почитать."
                                            </p>
                                        </div>
                                        <div className="read-more">
                                            <NavLink to ="blog_details"
                                                     className="s-btn s-btn__square s-btn__square-green">Подробнее</NavLink>
                                        </div>
                                    </div>
                                </article>



                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>);
};


export default Blog;