import React from "react";

const Contact = () => {
    return (
        <div>
<main>
    <section className ="contact__area pt-120 pb-120">
    <div className ="container">
        <div className ="row">
            <div className ="col-xl-5 col-lg-5">
                <div className ="contact__info-head mb-40">
                    <div className ="section__title mb-25">
                        <div className ="section__icon mb-10">
                            <span className ="section__sub-title section__sub-title-2 section__sub-title-3">Contact info</span>
                        </div>
                        <h1 >Have Any Questins Or Emergency Problem Contact With Us</h1>
                    </div>
                    <p>Pulvinar senectus morbi quisque nunc to towa faucibus netus etiam mone lestie nisi dis malesuada maecenas ora pretium ornare pharetra vestibulum mattis fringilla interdum cursus curae nisi pede laoreet placerat </p>
                </div>
            </div>
            <div className ="col-xl-6 offset-xl-1 col-lg-6 offset-lg-1">
                <div className ="contact__form">
                    <form id="contact-form" action="assets/mail.php" method="POST">
                        <div className ="row">
                            <div className ="col-xl-6">
                                <input name="name" className ="contact__input contact__input-3 contact__input-4" type="text" placeholder="Your Name"></input>
                            </div>
                            <div className ="col-xl-6">
                                <input name="email" className ="contact__input contact__input-3 contact__input-4" type="email" placeholder="E-mail Address"></input>
                            </div>
                        </div>
                        <div className ="row">
                            <div className ="col-xl-6">
                                <input name="subject" className ="contact__input contact__input-3 contact__input-4" type="text" placeholder="Phone Number"></input>
                            </div>
                            <div className ="col-xl-6">
                                <select className ="contact__input contact__input-3 contact__input-4">
                                    <option value="">Choose Problem</option>
                                    <option value="">Option 1</option>
                                    <option value="">Option 2</option>
                                    <option value="">Option 3</option>
                                    <option value="">Option 4</option>
                                    <option value="">Option 5</option>
                                </select>
                            </div>
                        </div>
                        <div className ="row">
                            <div className ="col-xl-12">
                                <textarea name="message" className ="contact__input contact__input-3 contact__input-4 txt-area " cols="30" rows="10" placeholder="Write Message"></textarea>
                            </div>
                        </div>
                        <div className ="row">
                            <div className ="col-xl-12">
                                <button className ="s-btn s-btn__square" type="submit">submit message</button>
                            </div>
                        </div>
                    </form>
                    <p className ="ajax-response"></p>
                </div>
            </div>
        </div>
    </div>
</section>

    <section className ="contact__info p-relative">
        <div className ="container">
            <div className ="contact__info-inner green-bg-2">
                <div className ="row">
                    <div className ="col-xl-4 col-lg-4 col-md-6">
                        <div className ="contact__info-item text-center text-sm-left d-sm-flex justify-content-lg-center mb-30">
                            <div className ="contact__icon mr-20">
                                <span className ="icon flaticon-house"></span>
                            </div>
                            <div className ="contact__info-content">
                                <h3>Our Address</h3>
                                <span>24 Broadcast Drive Charlotte</span>
                                <span> NC 28202, USA</span>
                            </div>
                        </div>
                    </div>
                    <div className ="col-xl-4 col-lg-4 col-md-6">
                        <div className ="contact__info-item text-center text-sm-left d-sm-flex justify-content-lg-center mb-30">
                            <div className ="contact__icon mr-20">
                                <span className ="icon flaticon-support-1"></span>
                            </div>
                            <div className ="contact__info-content">
                                <h3>Phone Number</h3>
                                <span>(+06) 325 - 635 - 3265 </span>
                                <span>(+02) 653 - 352 - 6524</span>
                            </div>
                        </div>
                    </div>
                    <div className ="col-xl-4 col-lg-4 col-md-6">
                        <div className ="contact__info-item text-center text-sm-left d-sm-flex justify-content-lg-center mb-30">
                            <div className ="contact__icon mr-20">
                                <span className ="icon flaticon-email"></span>
                            </div>
                            <div className ="contact__info-content">
                                <h3>Email Support</h3>
                                <span>patient@basicme.com</span>
                                <span>info@basicme.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className ="contact__map-area mt--120">
        <div className ="container-fluid p-0">
            <div className ="row no-gutters">
                <div className ="col-xl-12">
                    <div className ="contact__map">
                        <iframe src="https://maps.google.com/maps?hl=en&amp;q=Dhaka+()&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>

</main>

        </div>

    );
};
export default Contact;