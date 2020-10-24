import React from "react";
import page_title from ".././assets/img/page-title/page-title.jpg";
import about_2 from ".././assets/img/about/about-2.jpg";


const Aboutus = () => {
    return (
        <div>
            <section className ="page__title p-relative pt-200 pb-200" style={{backgroundImage: `url(${page_title})`}}>
                <div className ="container">
                    <div className ="row">
                        <div className ="col-xl-12 col-lg-12 col-md-12">
                            <div className ="page__title-inner text-center">

                                <h1>Добро пожаловать. Команда Центра Здоровых Отношений рада вас приветствовать.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className ="about__area-2 pt-120 pb-120 box-105 p-relative">
                <div className ="container-fluid">
                    <div className ="about__inner about__inner-3 p-relative">
                        <div className ="about__bg-img p-absolute" style={{backgroundImage: `url(${about_2})`}}></div>
                        <div className ="row">
                            <div className ="col-xl-6 offset-xl-6">
                                <div className ="about__content-wrapper pt-20 pl-85">
                                    <div className ="section__title mb-30">
                                        <div className ="section__icon mb-10">
                                            <span className ="section__sub-title section__sub-title-2">Добро пожаловать в Центр здоровых отношений.</span>
                                        </div>
                                        <h1 className ="mb-100">Наши клиенты всегда удовлетворены результатом.</h1>
                                    </div>

                                    <p>Мы практикующие психологи со степенью магистра в области системной семейной психотерапии.</p>

                                    <div className ="about__info-2 d-sm-flex mb-60">
                                        <div className ="about__info-experience white-bg mr-40">
                                            <h1>20 лет практики</h1>
                                        </div>
                                        <p>Мы - авторы и ведущие тренинга
                                            "Отношения: услышать и понять",
                                            результаты которого научно подтверждены и были представлены на нескольких международных научно-практических конференциях.</p>
                                    </div>
                                    <div className ="about-bottom d-sm-flex">
                                        <div className ="about-author mr-30 mb-30">
                                            <img src="assets/img/about/author.png" alt=""></img>
                                                <div className ="ab-author">
                                                    <h3>Чекалина Елена</h3>
                                                    <span>психолог</span>
                                                </div>
                                        </div>
                                        {/*<div className ="about-btn mr-40 mb-30">*/}
                                        {/*    <a href="about-us.html" className ="s-btn s-btn__square s-btn__square-2" tabindex="0">more about us</a>*/}
                                        {/*</div>*/}
                                    </div>
                                    <div className ="about-bottom d-sm-flex">
                                        <div className ="about-author mr-30 mb-30">
                                            <img src="assets/img/about/author.png" alt=""></img>
                                            <div className ="ab-author">
                                                <h3>Родина Екатерина</h3>
                                                <span>психолог</span>
                                            </div>
                                        </div>
                                        {/*<div className ="about-btn mr-40 mb-30">*/}
                                        {/*    <a href="about-us.html" className ="s-btn s-btn__square s-btn__square-2" tabindex="0">more about us</a>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className ="testimonial__area pt-120 pb-120 grey-bg-3 box-105">
                <div className ="testimonial__inner p-relative">
                                  <div className ="container">
                        <div className ="row">
                            <div className ="col-xl-7 col-lg-7">
                                <div className ="testimonial__wrapper testimonial__wrapper-3 pt-50 pb-35">
                                    <div className ="section__title mb-20">
                                        <div className ="section__icon mb-10">
                                            <span className ="section__sub-title section__sub-title-2 section__sub-title-3"></span>
                                        </div>
                                        <h1>Отношения не складываются?
                                            Устали от взаимных претензий и проблем?
                                            Чувствуете одиночество в отношениях?<br/><br/>

                                            Мы поможем!</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
    };
export default Aboutus;