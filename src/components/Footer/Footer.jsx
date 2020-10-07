import React from "react";
import logo from ".././assets/img/logo/logo.png";

const Footer = () => {
	return (
	<footer>
            <div class="footer__area pt-130 footer-bg box-105">
                <div class="container-fluid">
                    <div class="footer__bottom pb-50">
                        <div class="row">
                            <div class="col-xl-3 col-lg-6 col-md-6 mb-50">
                                <div class="footer__widget">
                                    <div class="footer__widget-title mb-30">
                                        <div class="logo">
                                            <a href="index.html"><img src={logo} alt="logo"></img></a>
                                        </div>
                                    </div>
                                    <div class="footer__widget-content">
                                        <div class="footer__logo-area">
                                            <p>Waters divided said aims kind seicond winged form it tree after female the deep at itself creepeth land bring place day sea dont caus may thing open who their midst to seas</p>

                                            <div class="social">
                                                <h4>Follow us</h4>
                                                <ul>
                                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-6 col-md-6 offset-xl-1 mb-50">
                                <div class="footer__widget">
                                    <div class="footer__widget-title mb-25">
                                        <h2>Services</h2>
                                    </div>
                                    <div class="footer__widget-content">
                                        <div class="footer__services">
                                            <ul>
                                                <li><a href="services-details.html">Business Frustation</a></li>
                                                <li><a href="services-details.html">Anxiety Dosorder</a></li>
                                                <li><a href="services-details.html">Personal Meeting</a></li>
                                                <li><a href="services-details.html">Couple Therapy</a></li>
                                                <li><a href="services-details.html">Family Counselling</a></li>
                                                <li><a href="services-details.html">Dating & Relation</a></li>
                                                <li><a href="services-details.html">Depression Problem</a></li>
                                                <li><a href="services-details.html">Mental Problem</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-6 col-md-6 mb-50">
                                <div class="footer__widget">
                                    <div class="footer__widget-title mb-25">
                                        <h2>Contact Info</h2>
                                    </div>
                                    <div class="footer__widget-content">
                                        <div class="footer__contact-info">
                                            <ul>
                                                <li>
                                                    <div class="footer__contact-address">
                                                        <span>House no 35, Palmall street, London, England</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="footer__contact-item">
                                                        <h6>Email:</h6>
                                                        <p>info@basictheme.com</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="footer__contact-item">
                                                        <h6>Support:</h6>
                                                        <p>+1 325 562 3265</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="footer__contact-item">
                                                        <h6>Website:</h6>
                                                        <p>.ru</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-6 col-md-6 offset-xl-1 mb-50">
                                <div class="footer__widget">
                                    <div class="footer__widget-title mb-25">
                                        <h2>Stay in Touch</h2>
                                    </div>
                                    <div class="footer__widget-content">
                                        <div class="footer__subscribe">
                                            <p>Fruitful and herb the seasons of fish saying likeness face beast cattle.</p>
                                            <div class="footer__subscribe-form footer__subscribe-form-2">
                                                <form action="#">
                                                    <input type="email" placeholder="Email Address"></input>
                                                    <button class="s-btn s-btn__square-2" type="submit"><i class="fal fa-paper-plane"></i> subscribe now</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer__copyright">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="footer__copyright-text">
                                    <p>Copyright © 2020 <a href="index.html"> Basictheme</a>. All Rights Reserved.</p>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="footer__policy ">
                                    <a href="#">Terms & Condition</a>
                                    <a href="#"> Privacy</a>
                                    <a href="#">Support</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

);
};

export default Footer;
