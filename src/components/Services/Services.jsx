import React from "react";
import Carousel_1 from "../Carousel/Carousel_1";


const Services = () => {
    return (
        <div>
            <main>
                <section className="page__title p-relative pt-90 pb-100"
                >
                    <Carousel_1/>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="page__title-inner text-center">

                                    <h1>Что мы предлагаем</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="case__area pt-110 ">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 offset-xl-2">
                                <div className="section__title mb-60 pl-50 pr-50 text-center">
                                    <h1>Команда профессиональных психологов на службе ваших интересов</h1>
                                    <div className="section__icon mb-10">
                                <span
                                    className="section__sub-title section__sub-title-2 section__sub-title-3 section__sub-title-4">Наши услуги</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                {/*<div className="masonary-menu case__menu filter-button-group text-center mb-20">*/}
                                {/*    <button className="active" data-filter="*">All Department</button>*/}
                                {/*    <button data-filter=".cat1">Family Problem</button>*/}
                                {/*    <button data-filter=".cat2">Depression</button>*/}
                                {/*    <button data-filter=".cat3">Personal</button>*/}
                                {/*    <button data-filter=".cat4">Breakup</button>*/}
                                {/*    <button data-filter=".cat5">Frustation</button>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                        <div className="row grid">
                            <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat1 cat4 cat3">
                                <div className="case__item-2 p-relative mb-30">
                                    <div className="case__thumb-2 w-img">
                                        <img src="assets/img/case/02/case-04.jpg" alt="case-01"/>
                                    </div>
                                    <div className="case__content-2 transition-3 grey-bg-3 p-relative">
                                        <h3><a href="case-details.html">Индивидуальная консультация</a></h3>
                                        <p>текст текст текст Услуга</p>
                                        <a href="case-details.html" className="link-btn">Подробности</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat2 cat5">
                                <div className="case__item-2 p-relative mb-30">
                                    <div className="case__thumb-2 w-img">
                                        <img src="assets/img/case/02/case-05.jpg" alt="case-01"/>
                                    </div>
                                    <div className="case__content-2 transition-3 grey-bg-3 p-relative">
                                        <h3><a href="case-details.html">Терапия пар</a></h3>
                                        <p>текст текст текст Услуга</p>
                                        <a href="case-details.html" className="link-btn">explore more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat3 cat4 cat1">
                                <div className="case__item-2 p-relative mb-30">
                                    <div className="case__thumb-2 w-img">
                                        <img src="assets/img/case/02/case-06.jpg" alt="case-01"/>
                                    </div>
                                    <div className="case__content-2 transition-3 grey-bg-3 p-relative">
                                        <h3><a href="case-details.html">Семейная консультация</a></h3>
                                        <p>Семейная консультация (на приеме вся семья).</p>
                                        <a href="case-details.html" className="link-btn">Подробности</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 grid-item  cat3 cat5">
                                <div className="case__item-2 p-relative mb-30">
                                    <div className="case__thumb-2 w-img">
                                        <img src="assets/img/case/02/case-01.jpg" alt="case-01"/>
                                    </div>
                                    <div className="case__content-2 transition-3 grey-bg-3 p-relative">
                                        <h3><a href="case-details.html">Отношения. Услышать и понять.</a></h3>
                                        <p>Тренинг. Отношения: услышать и понять</p>
                                        <a href="case-details.html" className="link-btn">Подробности</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat4 cat3">
                                <div className="case__item-2 p-relative mb-30">
                                    <div className="case__thumb-2 w-img">
                                        <img src="assets/img/case/02/case-02.jpg" alt="case-01"/>
                                    </div>
                                    <div className="case__content-2 transition-3 grey-bg-3 p-relative">
                                        <h3><a href="case-details.html">Для детей и их родителей.</a></h3>
                                        <p>Тренинг. Послушания. Для детей и их родителей.</p>
                                        <a href="case-details.html" className="link-btn">Подробности</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat3 cat5">
                                <div className="case__item-2 p-relative mb-30">
                                    <div className="case__thumb-2 w-img">
                                        <img src="assets/img/case/02/case-03.jpg" alt="case-01"/>
                                    </div>
                                    <div className="case__content-2 transition-3 grey-bg-3 p-relative">
                                        <h3><a href="case-details.html">Ваша тема консультации</a></h3>
                                        <p>Консультация на тему вашей проблемы, вопроса.</p>
                                        <a href="case-details.html" className="link-btn">Подробности</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="client__area-3 pt-20 pb-50">
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-xl-12">
                                <div className="client__slider client__slider-active owl-carousel text-center">
                                    <div className="client__thumb">
                                        <a href="#"><img src="assets/img/client/03/client-01.png" alt="client-1"/></a>
                                    </div>
                                    <div className="client__thumb">
                                        <a href="#"><img src="assets/img/client/03/client-02.png" alt="client-1"/></a>
                                    </div>
                                    <div className="client__thumb">
                                        <a href="#"><img src="assets/img/client/03/client-03.png" alt="client-1"/></a>
                                    </div>
                                    <div className="client__thumb">
                                        <a href="#"><img src="assets/img/client/03/client-04.png" alt="client-1"/></a>
                                    </div>
                                    <div className="client__thumb">
                                        <a href="#"><img src="assets/img/client/03/client-05.png" alt="client-1"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </main>


        </div>

    );
};
export default Services;