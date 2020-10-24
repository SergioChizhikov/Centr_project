import React from "react";
import logo from ".././assets/img/logo/logo.png";
import {NavLink} from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";


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
                                            <li><a href="https://www.facebook.com/profile.php?id=100005637134889"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="https://www.instagram.com/elena_chekalina/"><i className="fab fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
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
                                            <span>m.psytherapy@gmail.com</span>
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
                                    <NavLink exact to=''>< img src={logo}></ img></NavLink>
                                </div>
                            </div>
                            <div className='col-xl-10 col-lg-9 col-md-8 col-sm-6 col-4'>
                                <div
                                    className='header__bottom-right pink-soft-bg d-flex justify-content-end justify-content-lg-between align-items-center'>
                                    <div className='main-menu main-menu-2 d-none d-lg-block'>
                                        <nav>
                                            <ul>
                                                <li>
                                                    <NavLink exact to=''>Главная</NavLink>

                                                </li>
                                                <li>
                                                    <NavLink to='about'>Кто мы</NavLink>

                                                </li>
                                                <li>
                                                    <NavLink to='services'>Наши услуги</NavLink>

                                                </li>
                                                <li>
                                                    <NavLink to='blog'>Статьи</NavLink>
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
                                                    <NavLink to='contact'>Контакты</NavLink>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>

                                    <div className='f-right'><MobileMenu /></div>
                                    {/*<div className='header-bar info-toggle-btn d-lg-none f-right'>*/}
                                    {/*    <span></span>*/}
                                    {/*    <span></span>*/}
                                    {/*    <span></span>*/}
                                    {/*</div>*/}

                                    <div className='header__btn d-none d-xl-block'>
                                        <NavLink to='contact' className='s-btn s-btn__square'>
                                            Записаться
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='body-overlay transition-3'></div>

            <div className='scroll-up' id='scroll' style={{display: 'none'}}>
                <NavLink to="#" onClick={e => e.preventDefault()} >
                    <i className='far fa-angle-up'></i>
                </NavLink>
            </div>
        </header>
    );
};

export default Header;
