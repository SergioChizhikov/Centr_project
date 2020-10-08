import React from "react";
import page_title from ".././assets/img/page-title/page-title.jpg";
import about_2 from ".././assets/img/about/about-2.jpg"
;
const Aboutus = () => {
    return (
        <div>
            <section className ="page__title p-relative pt-200 pb-200" data-background={page_title}>
                <div className ="container">
                    <div className ="row">
                        <div className ="col-xl-12 col-lg-12 col-md-12">
                            <div className ="page__title-inner text-center">

                                <h1>Welcome to </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className ="about__area-2 pt-120 pb-120 box-105 p-relative">
                <div className ="container-fluid">
                    <div className ="about__inner about__inner-3 p-relative">
                        <div className ="about__bg-img p-absolute" data-background={about_2}></div>
                        <div className ="row">
                            <div className ="col-xl-6 offset-xl-6">
                                <div className ="about__content-wrapper pt-20 pl-85">
                                    <div className ="section__title mb-30">
                                        <div className ="section__icon mb-10">
                                            <span className ="section__sub-title section__sub-title-2">welcome to sycho</span>
                                        </div>
                                        <h1 className ="mb-100">Patients are Happy, Cause Proper Mental Cure Support</h1>
                                    </div>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed dole there eiusmod tempor incididub labore  dolore magna aliqua denim ads minim veniam, quis nostrud exerctation ullamco nisi above murli aliquip commodo imperdet</p>

                                    <div className ="about__info-2 d-sm-flex mb-60">
                                        <div className ="about__info-experience white-bg mr-40">
                                            <h1>20 Years Professional Experience</h1>
                                        </div>
                                        <p>Lobortis facilisis potenti dictumst auctor at semper amet dis elit, neque nulla lectus. Nascetur habitasse dignissim className  ac vehicula ultricies conubia suspendisse aenean suscipit nulla verra volutpat velit orci montes maece nas lorem porttitor tortor dise montes fames nascetur auctor dui rhoncus phasellus id sagittis a praesent dui rhoncus porttitor nullam commodo ultricess</p>
                                    </div>
                                    <div className ="about-bottom d-sm-flex">
                                        <div className ="about-author mr-30 mb-30">
                                            <img src="assets/img/about/author.png" alt=""></img>
                                                <div className ="ab-author">
                                                    <h3>Dalian Machen</h3>
                                                    <span>CEO, Sycho</span>
                                                </div>
                                        </div>
                                        <div className ="about-btn mr-40 mb-30">
                                            <a href="about-us.html" className ="s-btn s-btn__square s-btn__square-2" tabindex="0">more about us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className ="testimonial__area pt-120 pb-120 grey-bg-3 box-105">
                <div className ="testimonial__inner p-relative">
                    <div className ="testimonial__img testimonial__img-2 border-radius-8 p-absolute fix" data-background="assets/img/testimonial/testimonial-img.jpg">
                        <div className ="testimonial__video p-absolute fix">
                            <div className ="testimonial__shape p-absolute">
                                <img src="assets/img/testimonial/shape-1.png" alt=""></img>
                            </div>
                            <div className ="testimonial__shape testimonial__shape-2 p-absolute">
                                <img src="assets/img/testimonial/shape-2.png" alt=""></img>
                            </div>
                            <h3>See Our Success Story</h3>
                            <a href="https://youtu.be/yJg-Y5byMMw" data-fancybox="" className ="play-btn play-btn-sm play-btn-pink play-btn-pink-white"><i className ="far fa-play"></i></a>
                        </div>
                    </div>

                    <div className ="container">
                        <div className ="row">
                            <div className ="col-xl-7 col-lg-7">
                                <div className ="testimonial__wrapper testimonial__wrapper-3 pt-50 pb-35">
                                    <div className ="section__title mb-20">
                                        <div className ="section__icon mb-10">
                                            <span className ="section__sub-title section__sub-title-2 section__sub-title-3">patients feedbak</span>
                                        </div>
                                        <h1>Happy Patient Feedback About our Service</h1>
                                    </div>
                                    <div className ="testimonial__slider-3 owl-carousel">
                                        <div className ="testimonial__item-3">
                                            <p>Malesuada imperdiet commodo nostra taciti neque arcu in sem a vivamus tempor ac sem convallis ullamcorper ac enim Massa massa porta interdum to nullam nis augue donec leo ut fermentum senectus eget. Metus lacinia turpis. Potenti in aliquet ipsum primis a pede volutpat. Feugiat hymenaeos facilisis erat morbi libero to sociosqu inte dum justo sagittis feugiat facilisis morb.</p>
                                            <div className ="testimonial__person testimonial__person-3 d-flex align-items-center">
                                                <div className ="testimonial__avater">
                                                    <img src="assets/img/testimonial/person-1.png" alt=""></img>
                                                </div>
                                                <div className ="testimonial__info testimonial__info-3">
                                                    <h3>Eleonora Morgan</h3>
                                                    <span>CEO & Founder</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className ="testimonial__item-3">
                                            <p>Malesuada imperdiet commodo nostra taciti neque arcu in sem a vivamus tempor ac sem convallis ullamcorper ac enim Massa massa porta interdum to nullam nis augue donec leo ut fermentum senectus eget. Metus lacinia turpis. Potenti in aliquet ipsum primis a pede volutpat. Feugiat hymenaeos facilisis erat morbi libero to sociosqu inte dum justo sagittis feugiat facilisis morb.</p>
                                            <div className ="testimonial__person testimonial__person-3 d-flex align-items-center">
                                                <div className ="testimonial__avater">
                                                    <img src="assets/img/testimonial/person-2.png" alt=""></img>
                                                </div>
                                                <div className ="testimonial__info testimonial__info-3">
                                                    <h3>Jeso Smith</h3>
                                                    <span>CEO & Founder</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className ="testimonial__item-3">
                                            <p>Malesuada imperdiet commodo nostra taciti neque arcu in sem a vivamus tempor ac sem convallis ullamcorper ac enim Massa massa porta interdum to nullam nis augue donec leo ut fermentum senectus eget. Metus lacinia turpis. Potenti in aliquet ipsum primis a pede volutpat. Feugiat hymenaeos facilisis erat morbi libero to sociosqu inte dum justo sagittis feugiat facilisis morb.</p>
                                            <div className ="testimonial__person testimonial__person-3 d-flex align-items-center">
                                                <div className ="testimonial__avater">
                                                    <img src="assets/img/testimonial/person-3.png" alt=""></img>
                                                </div>
                                                <div className ="testimonial__info testimonial__info-3">
                                                    <h3>Salim rana</h3>
                                                    <span>CEO & Founder</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className ="team__area pb-90 pt-110">
                <div className ="container">
                    <div className ="row">
                        <div className ="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                            <div className ="section__title mb-70 pl-50 pr-50 text-center">
                                <h1>Professional Psychologist Team Ready to Serve you</h1>
                                <div className ="section__icon mb-10">
                                    <span className ="section__sub-title section__sub-title-2 section__sub-title-3 section__sub-title-4"> Expert member</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className ="row">
                        <div className ="col-xl-4 col-lg-4 col-md-6">
                            <div className ="team__item mb-30">
                                <div className ="team__thumb w-img fix p-relative">
                                    <img className ="transition-3" src="assets/img/team/team-1.jpg" alt="team-1"></img>
                                        <div className ="team__social social pink-soft-bg p-absolute transition-3">
                                            <ul>
                                                <li><a href="#"><i className ="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i className ="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i className ="fab fa-pinterest-p"></i></a></li>
                                                <li><a href="#"><i className ="fab fa-linkedin-in"></i></a></li>
                                            </ul>
                                        </div>
                                </div>
                                <div className ="team__content text-center white-bg transition-3">
                                    <div className ="team__name">
                                        <h3>Ristopher Givera</h3>
                                        <span>Sr. Psychologist</span>
                                    </div>
                                    <div className ="team__info">
                                        <p>ristopherg@gmail.com</p>
                                        <p>420-254-2658</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className ="col-xl-4 col-lg-4 col-md-6">
                            <div className ="team__item mb-30">
                                <div className ="team__thumb w-img fix p-relative">
                                    <img className ="transition-3" src="assets/img/team/team-2.jpg" alt="team-1"></img>
                                        <div className ="team__social social pink-soft-bg p-absolute transition-3">
                                            <ul>
                                                <li><a href="#"><i className ="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i className ="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i className ="fab fa-pinterest-p"></i></a></li>
                                                <li><a href="#"><i className ="fab fa-linkedin-in"></i></a></li>
                                            </ul>
                                        </div>
                                </div>
                                <div className ="team__content text-center white-bg transition-3">
                                    <div className ="team__name">
                                        <h3>Donnie Anderson</h3>
                                        <span>Sr. Psychologist</span>
                                    </div>
                                    <div className ="team__info">
                                        <p>ristopherg@gmail.com</p>
                                        <p>420-254-2658</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className ="col-xl-4 col-lg-4 col-md-6">
                            <div className ="team__item mb-30">
                                <div className ="team__thumb w-img fix p-relative">
                                    <img className ="transition-3" src="assets/img/team/team-3.jpg" alt="team-1"></img>
                                        <div className ="team__social social pink-soft-bg p-absolute transition-3">
                                            <ul>
                                                <li><a href="#"><i className ="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i className ="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i className ="fab fa-pinterest-p"></i></a></li>
                                                <li><a href="#"><i className ="fab fa-linkedin-in"></i></a></li>
                                            </ul>
                                        </div>
                                </div>
                                <div className ="team__content text-center white-bg transition-3">
                                    <div className ="team__name">
                                        <h3>Steves Musayin</h3>
                                        <span>Sr. Psychologist</span>
                                    </div>
                                    <div className ="team__info">
                                        <p>ristopherg@gmail.com</p>
                                        <p>420-254-2658</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className ="counter__area counter__overlay pt-110 pb-60 p-relative" data-background="assets/img/counter/counter-bg.jpg">
                <div className ="container">
                    <div className ="row">
                        <div className ="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className ="counter__item p-relative text-center mb-30">
                                <div className ="counter__icon mb-25">
                                    <span className ="icon flaticon-support"></span>
                                </div>
                                <div className ="counter__content">
                                    <h3 className ="counter">2950</h3>
                                    <span>Psychologist</span>
                                </div>
                            </div>
                        </div>
                        <div className ="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className ="counter__item p-relative text-center mb-30">
                                <div className ="counter__icon mb-25">
                                    <span className ="icon flaticon-house"></span>
                                </div>
                                <div className ="counter__content">
                                    <h3 className ="counter">1520</h3>
                                    <span> All Branches</span>
                                </div>
                            </div>
                        </div>
                        <div className ="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className ="counter__item counter__item-3rd p-relative text-center mb-30">
                                <div className ="counter__icon mb-25">
                                    <span className ="icon flaticon-recovered"></span>
                                </div>
                                <div className ="counter__content">
                                    <h3 className ="counter">3250</h3>
                                    <span>Total Patient</span>
                                </div>
                            </div>
                        </div>
                        <div className ="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className ="counter__item counter__item-4th last-child-after p-relative text-center mb-30">
                                <div className ="counter__icon mb-25">
                                    <span className ="icon flaticon-medal"></span>
                                </div>
                                <div className ="counter__content">
                                    <h3 className ="counter">2150</h3>
                                    <span>Achievement</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className ="services__history pt-110 pb-55">
                <div className ="container">
                    <div className ="row">
                        <div className ="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                            <div className ="section__title mb-70 pl-50 pr-50 text-center">
                                <h1>From the Beginning Successfully Providing Best Service</h1>
                                <div className ="section__icon mb-10">
                                    <span className ="section__sub-title section__sub-title-2 section__sub-title-3 section__sub-title-4">service history</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className ="row">
                        <div className ="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className ="services__history-item text-center text-sm-left mb-60 pr-35">
                                <div className ="services__history-year mb-30">
                                    <h2>2012</h2>
                                </div>
                                <div className ="services__history-content">
                                    <h3><a href="#">Started Journey</a></h3>
                                    <p>Magnis condi mentum amet vel nonummy lacinia hac sed felis defer tobe porttitor.</p>
                                </div>
                            </div>
                        </div>
                        <div className ="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className ="services__history-item text-center text-sm-left mb-60 pr-35">
                                <div className ="services__history-year mb-30">
                                    <h2>2015</h2>
                                </div>
                                <div className ="services__history-content">
                                    <h3><a href="#">Open Branch</a></h3>
                                    <p>Magnis condi mentum amet vel nonummy lacinia hac sed felis defer tobe porttitor.</p>
                                </div>
                            </div>
                        </div>
                        <div className ="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className ="services__history-item text-center text-sm-left mb-60 pr-35">
                                <div className ="services__history-year mb-30">
                                    <h2>2017</h2>
                                </div>
                                <div className ="services__history-content">
                                    <h3><a href="#">Success Story</a></h3>
                                    <p>Magnis condi mentum amet vel nonummy lacinia hac sed felis defer tobe porttitor.</p>
                                </div>
                            </div>
                        </div>
                        <div className ="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className ="services__history-item text-center text-sm-left mb-60 pr-35">
                                <div className ="services__history-year mb-30">
                                    <h2>2020</h2>
                                </div>
                                <div className ="services__history-content">
                                    <h3><a href="#">Award Winning</a></h3>
                                    <p>Magnis condi mentum amet vel nonummy lacinia hac sed felis defer tobe porttitor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className ="faq__area p-relative box-105 pink-soft-bg pt-110 pb-120">
                <div className ="faq__bg p-absolute" data-background="assets/img/faq/faq-img.jpg"></div>
                <div className ="container-fluid">
                    <div className ="row">
                        <div className ="col-xl-6 col-lg-12">
                            <div className ="faq__wrapper pr-140">
                                <div className ="section__title mb-20">
                                    <div className ="section__icon mb-10">
                                        <span className ="section__sub-title section__sub-title-2">ASk Question</span>
                                    </div>
                                    <h1 className ="mb-100">Company Information & Any Question About us</h1>
                                </div>
                                <div className ="faq__inner mr-30">
                                    <div id="accordion">
                                        <div className ="card">
                                            <div className ="card-header white-bg" id="headingOne">
                                                <h5 className ="mb-0">
                                                    <button className ="faq-accordion-btn collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                        What do you do differently from other people?
                                                    </button>
                                                </h5>
                                            </div>

                                            <div id="collapseOne" className ="collapse " aria-labelledby="headingOne" data-parent="#accordion">
                                                <div className ="card-body">
                                                    Porttitor porta ultrices platea iaculis malesuada congue posuere sad ad nulla viverra nunc facilisis convallis platea lacnia commodo pretium for an pliatea cubilia vivamus fermentum pharetra conubia
                                                </div>
                                            </div>
                                        </div>
                                        <div className ="card">
                                            <div className ="card-header white-bg" id="headingTwo">
                                                <h5 className ="mb-0">
                                                    <button className ="faq-accordion-btn" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                        How does anger manifest itself in your body?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseTwo" className ="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">
                                                <div className ="card-body">
                                                    Porttitor porta ultrices platea iaculis malesuada congue posuere sad ad nulla viverra nunc facilisis convallis platea lacnia commodo pretium for an pliatea cubilia vivamus fermentum pharetra conubia
                                                </div>
                                            </div>
                                        </div>
                                        <div className ="card">
                                            <div className ="card-header white-bg" id="headingThree">
                                                <h5 className ="mb-0">
                                                    <button className ="faq-accordion-btn collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        What the worst thing you’ve ever been though?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseThree" className ="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                                <div className ="card-body">
                                                    Porttitor porta ultrices platea iaculis malesuada congue posuere sad ad nulla viverra nunc facilisis convallis platea lacnia commodo pretium for an pliatea cubilia vivamus fermentum pharetra conubia
                                                </div>
                                            </div>
                                        </div>
                                        <div className ="card">
                                            <div className ="card-header white-bg" id="headingFour">
                                                <h5 className ="mb-0">
                                                    <button className ="faq-accordion-btn collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                        Do you think you need to know the feel secure?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseFour" className ="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                                <div className ="card-body">
                                                    Porttitor porta ultrices platea iaculis malesuada congue posuere sad ad nulla viverra nunc facilisis convallis platea lacnia commodo pretium for an pliatea cubilia vivamus fermentum pharetra conubia
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className ="client__area-3 pt-50 pb-50">
                <div className ="container">
                    <div className ="row no-gutters">
                        <div className ="col-xl-12">
                            <div className ="client__slider client__slider-active owl-carousel text-center">
                                <div className ="client__thumb">
                                    <a href="#"><img src="assets/img/client/03/client-01.png" alt="client-1"/></a>
                                </div>
                                <div className ="client__thumb">
                                    <a href="#"><img src="assets/img/client/03/client-02.png" alt="client-1"/></a>
                                </div>
                                <div className ="client__thumb">
                                    <a href="#"><img src="assets/img/client/03/client-03.png" alt="client-1"/></a>
                                </div>
                                <div className ="client__thumb">
                                    <a href="#"><img src="assets/img/client/03/client-04.png" alt="client-1"/></a>
                                </div>
                                <div className ="client__thumb">
                                    <a href="#"><img src="assets/img/client/03/client-05.png" alt="client-1"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
    };
export default Aboutus;