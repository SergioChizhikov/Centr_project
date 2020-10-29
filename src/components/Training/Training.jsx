import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import slider2 from "../assets/img/slider/03/slider-01.jpg";
import {NavLink} from "react-router-dom";
import chekalina from "../assets/img/testimonial/chekalina_75.jpg";
import rodina from "../assets/img/testimonial/rodina_75.jpg";



const Training = () => {
    return (
        <div>
            <div className='slider-area p-relative'>
                <div className='slider-arrow p-absolute bounce smooth-scroll'>
                    <AnchorLink href='#page' className='slider-arrow-btn'>
                        <i className='fal fa-long-arrow-down'></i>
                    </AnchorLink>
                </div>
                <div className=' '>
                    <div
                        className='single-slider slider-height-3 slider-overlay p-relative slider-height d-flex align-items-center'
                        style={{backgroundImage: `url(${slider2})`}}
                    >
                        <div className='container'>
                            <div className='row align-items-center'>
                                <div className='col-xl-9'>
                                    <div className='slider-content slider-content-3'>
										<span data-animation='fadeInUp' data-delay='.2s'>
											5 шагов - 5 суббот - 5 встреч
										</span>
                                        <h2 data-animation='fadeInUp' data-delay='.4s'>
                                            Тренинг.
                                            "Отношения:
                                            Услышать и понять"
                                        </h2>
                                        <p data-animation='fadeInUp' data-delay='.6s'>
                                            СТАРТ НОВОГО ПОТОКА 16 НОЯБРЯ!
                                        </p>
                                        <div className='slider-btn' data-animation='fadeInUp' data-delay='.8s'>
                                            <AnchorLink href ='#form' className='s-btn s-btn__square'>
                                                Не читать и сразу записаться.
                                            </AnchorLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <section id='page' className="services__area-2 pb-20 pink-soft-bg pt-40 mt-50 p-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                            <div className="section__title mb-70 pl-50 pr-40 text-center">
                                <h1>Отношения не складываются?
                                    Устали от взаимных претензий и проблем?
                                    Чувствуете одиночество в отношениях?

                                    Мы поможем!</h1>
                                <div className="section__icon mb-10 mt-15">
                                    <span
                                        className=""><h2>Программа тренинга:</h2></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex align-items-stretch">
                            <div className="services__item-2 services__item-4 transition-3 mb-30 text-center white-bg">
                                <div className="services__icon mb-30">
                                    <span className="icon flaticon-relationship"></span>
                                </div>
                                <div className="services__content-2 transition-3">
                                    <h3>Первая встреча</h3>
                                    <p>Вы поймёте какие отношения Вам нужны и разберетесь как взаимодействуете с людьми сейчас</p>
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex align-items-stretch">
                            <div className="services__item-2 services__item-4 transition-3 mb-30 text-center white-bg">
                                <div className="services__icon mb-30">
                                    <span className="icon flaticon-family"></span>
                                </div>
                                <div className="services__content-2 transition-3">
                                    <h3>Вторая встреча</h3>
                                    <p>Вы выявите различные установки, влияющие на отношения, и сможете лучше понять себя</p>

                                </div>
                            </div>
                        </div>
                        <div className="col d-flex align-items-stretch">
                            <div className="services__item-2 services__item-4 transition-3 mb-30 text-center white-bg">
                                <div className="services__icon mb-30">
                                    <span className="icon flaticon-support"></span>
                                </div>
                                <div className="services__content-2 transition-3">
                                    <h3>Третья встреча</h3>
                                    <p>Вы овладеете техниками самопомощи для стабилизации эмоционального состояния</p>

                                </div>
                            </div>
                        </div>
                        <div className="col d-flex align-items-stretch">
                            <div className="services__item-2 services__item-4 transition-3 mb-30 text-center white-bg">
                                <div className="services__icon mb-30">
                                    <span className="icon flaticon-psychosis"></span>
                                </div>
                                <div className="services__content-2 transition-3">
                                    <h3>Четвертая встреча</h3>
                                    <p>Вы научитесь выстраивать коммуникацию, устранив ошибки, что позволит сделать её более эффективной</p>


                                </div>
                            </div>
                        </div>
                        <div className="col d-flex align-items-stretch">
                            <div className="services__item-2 services__item-4 transition-3 mb-30 text-center white-bg">
                                <div className="services__icon mb-30">
                                    <span className="icon flaticon-recovered"></span>
                                </div>
                                <div className="services__content-2 transition-3">
                                    <h3>Пятая встреча</h3>
                                    <p>Вы узнаете о роли привязанности во взрослых отношениях и научитесь справляться с напряжением в Вашей паре или семье</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonial__area-2 pt-110 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-9">
                            <div className="section__title mb-65">
                                <div className="section__icon mb-10">
                                    <span className="section__sub-title section__sub-title-2">Давайте познакомимся</span>
                                </div>
                                <h2 className="mb-100">Мы - авторы и ведущие тренинга
                                    <b>"Отношения: услышать и понять"</b>,
                                    результаты которого научно подтверждены и были представлены на нескольких международных научно-практических конференциях.
                                    Мы практикующие психологи со степенью магистра в области системной семейной психотерапии.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="testimonial__slider-2">
                                <div className="testimonial__slider-2-active">
                                    <div className="testimonial__item-2">
                                        <div className="testimonial__item-inner green-bg-2 p-relative">
                                            <p>Здесь нужен текст о себе</p>

                                            <div
                                                className="testimonial__person testimonial__person-2 d-flex align-items-center">
                                                <div className="testimonial__avater">
                                                    <img src={chekalina} alt="Chekalina photo" />
                                                </div>
                                                <div className="testimonial__info">
                                                    <h3>Елена Чекалина</h3>
                                                    <span>Системная семейная психотерапия</span>
                                                </div>
                                            </div>

                                            <div className="testimonial__quote-2 p-absolute">
                                                <span className="icon flaticon-quotation"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial__item-2">
                                        <div className="testimonial__item-inner green-bg-2 p-relative">
                                            <p>Здесь нужен текст о себе</p>

                                            <div
                                                className="testimonial__person testimonial__person-2 d-flex align-items-center">
                                                <div className="testimonial__avater">
                                                    <img src={rodina} alt="Rodina photo" />
                                                </div>
                                                <div className="testimonial__info">
                                                    <h3>Екатерина Родина</h3>
                                                    <span>Психолог</span>
                                                </div>
                                            </div>

                                            <div className="testimonial__quote-2 p-absolute">
                                                <span className="icon flaticon-quotation"></span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="why__area pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <div className="why__area-3">
                                <div className="section__title mb-45">
                                    <div className="section__icon mb-10">
                                        <span className="section__sub-title section__sub-title-2 section__sub-title-3">Что вы получите</span>
                                    </div>
                                    <h1>Пройдя тренинг, Вы:</h1>
                                </div>
                                <div className="why__list">
                                    <ul>
                                        <li><h3>сможете принять решение после первой встречи, хотите ли продолжать работу вместе с группой (со второй встречи группа становится закрытой)</h3></li>
                                        <li><h3>увидите фрагменты фильмов, наглядно иллюстрирующие обсуждаемые вопросы и темы</h3></li>
                                        <li><h3>отработаете приобретенные навыки, выполняя интересные упражнения в мини-группах</h3></li>
                                        <li><h3>получите памятку с практическими рекомендациями, которая останется у Вас навсегда</h3></li>
                                        <li><h3>получите сертификат о прохождении тренинга, подтверждающий приобретенные компетенции в вопросах построения отношений</h3></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="why__img w-img">
                                <img src="assets/img/why/why-img-03.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonial__area pt-120 pb-120 grey-bg-3 box-105">
                <div id='form' className="testimonial__inner p-relative">
                    <div className="testimonial__img border-radius-8 p-absolute "
                         data-background="assets/img/testimonial/testimonial-img.jpg">
                        <div className="testimonial__video p-absolute">


                            <h3>Записаться на трениг</h3>
                            <a href="https://forms.gle/4f6fShQAzuMBo6H4A"
                               className="play-btn play-btn-sm play-btn-pink play-btn-pink-white"><i
                                className="far fa-play"></i></a>
                        </div>
                    </div>
                           </div>
                </section>

        </div>
    );
};

export default Training;
