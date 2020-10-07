import React from "react";
import logo from ".././assets/img/logo/logo.png";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className='header-area'>
                <div className='header__top box-105'>
                    <div className='container-fluid'>
                        <div className='row align-items-center'>
                            <div className='col-xl-6 col-lg-6 col-md-4 col-sm-6 d-none d-sm-block'>
                                <div className='header__top-left'>
                                    <div className='social'>
                                        <ul>
                                            <li>
                                                <NavLink to=''>
                                                    <i className='fab fa-facebook-f'></i>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to=''>
                                                    <i className='fab fa-twitter'></i>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to=''>
                                                    <i className='fab fa-pinterest-p'></i>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to=''>
                                                    <i className='fab fa-linkedin-in'></i>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-8 col-sm-6 col-12'>
                                <div className='header__top-right d-flex justify-content-end'>
                                    <div className='header__info d-none d-sm-none d-md-flex'>
                                        <div className='header__info-icon'>
                                            <span className='icon flaticon-24-hours-support'></span>
                                        </div>
                                        <div className='header__info-text'>
                                            <span>Всегда на связи:</span>
                                            <span>+7(499) 588-6500</span>
                                        </div>
                                    </div>
                                    <div className='header__info d-none d-sm-flex'>
                                        <div className='header__info-icon'>
                                            <span className='icon flaticon-envelope'></span>
                                        </div>
                                        <div className='header__info-text'>
                                            <span>Мы читаем почту:</span>
                                            <span>info@cfhr.ru</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='header__bottom box-105'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-8'>
                                <div className='logo-2'>
                                    <NavLink to='index'>< img src={logo}></ img></NavLink>
                                </div>
                            </div>
                            <div className='col-xl-10 col-lg-9 col-md-8 col-sm-6 col-4'>
                                <div
                                    className='header__bottom-right pink-soft-bg d-flex justify-content-end justify-content-lg-between align-items-center'>
                                    <div className='main-menu main-menu-2 d-none d-lg-block'>
                                        <nav>
                                            <ul>
                                                <li>
                                                    <NavLink to='index'>Главная</NavLink>

                                                </li>
                                                <li>
                                                    <NavLink to='about'>Кто мы</NavLink>

                                                </li>
                                                <li>
                                                    <NavLink to='services'>Наши услуги</NavLink>

                                                </li>
                                                <li>
                                                    <a href='blog.html'>Статьи</a>
                                                    {/*<ul className='submenu'>*/}
                                                    {/*    <li>*/}
                                                    {/*        <a href='blog.html'>Блог</a>*/}
                                                    {/*    </li>*/}
                                                    {/*     <li><a href="blog-left-sidebar.html">blog Left Sidebar</a></li>*/}
                                                    {/*<li><a href="blog-no-sidebar.html">blog no sidebar</a></li>*/}
                                                    {/*<li><a href="blog-2-col.html">blog 2 column</a></li>*/}
                                                    {/*<li><a href="blog-2-col-mas.html">blog 2 col masonary</a></li>*/}
                                                    {/*<li><a href="blog-3-col.html">blog 3 column</a></li>*/}
                                                    {/*<li><a href="blog-3-col-mas.html">blog 3 col mas</a></li>*/}
                                                    {/*<li><a href="blog-details.html">blog details</a></li>*/}
                                                    {/*<li><a href="blog-details-left.html">details left sidebar</a></li>*/}
                                                    {/*<li><a href="blog-details-video.html">details video</a></li>*/}
                                                    {/*<li><a href="blog-details-audio.html">details audio</a></li>*/}
                                                    {/*<li><a href="blog-details-gallery.html">details gallery</a></li> */}
                                                    {/*</ul>*/}
                                                </li>
                                                <li>
                                                    <NavLink to ='contact'>Контакты</NavLink>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className='header-bar info-toggle-btn d-lg-none f-right'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className='header__btn d-none d-xl-block'>
                                        <NavLink to ='contact' className='s-btn s-btn__square'>
                                            Записаться
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className='info__area transition-3'>
                <div className='info__area-inner'>
                    <nav className='side-mobile-menu'>
                        <div className='info__close-icon text-right mb-20'>
                            <button className='info-close-btn'>
                                <i className='fal fa-times'></i>
                            </button>
                        </div>
                        <ul id='mobile-menu-active'>
                            <li className='has-dropdown'>
                                <a href='index.html'>Главная</a>
                                <ul className='submenu'>
                                    <li>
                                        <a href='index.html'>home style one</a>
                                    </li>
                                    <li>
                                        <a href='index-2.html'>home style two</a>
                                    </li>
                                    <li>
                                        <a href='index-3.html'>home style three</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='has-dropdown'>
                                <a href='about-us.html'>Кто мы</a>
                                <ul className='submenu'>
                                    <li>
                                        <a href='about-us.html'>about us</a>
                                    </li>
                                    <li>
                                        <a href='about-me.html'>about me</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='has-dropdown'>
                                {" "}
                                <a href='services.html'>Наши услуги</a>
                                <ul className='submenu'>
                                    <li>
                                        <a href='services.html'>services</a>
                                    </li>
                                    <li>
                                        <a href='services-details.html'>service details</a>
                                    </li>
                                </ul>
                            </li>
                            {/* <li className ="has-dropdown"><a href="case.html">cases</a>
                    <ul className ="submenu">
                        <li><a href="case.html">case </a></li>
                        <li><a href="case-details.html">case details</a></li>
                    </ul>
                </li> */}
                            {/* <li className ="has-dropdown"><a href="#">pages</a>
                    <ul className ="submenu">
                        <li><a href="team.html">our team</a></li>
                        <li><a href="team-details.html">team details</a></li>
                        <li><a href="events.html">events and offers</a></li>
                        <li><a href="appointment.html">appointment</a></li>
                    </ul>
                </li> */}
                            <li className='has-dropdown'>
                                <a href='blog.html'>Статьи</a>
                                <ul className='submenu'>
                                    <li>
                                        <a href='blog.html'>Блог </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href='contact.html'>contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <div className='body-overlay transition-3'></div>

            <div className='scroll-up' id='scroll' style={{display: 'none'}}>
                <a href='javascript:void(0);'>
                    <i className='far fa-angle-up'></i>
                </a>
            </div>
        </header>
    );
};

export default Header;
