import React from "react";
import logo from ".././assets/img/logo/logo.png";

const Footer = () => {
	return (
		<footer>
			<div className ='footer__area pt-130 footer-bg box-105'>
				<div className ='container-fluid'>
					<div className ='footer__bottom pb-50'>
						<div className ='row'>
							<div className ='col-xl-3 col-lg-6 col-md-6 mb-50'>
								<div className ='footer__widget'>
									<div className ='footer__widget-title mb-30'>
										<div className ='logo'>
											<a href='index.html'>
												<img src={logo} alt='logo'></img>
											</a>
										</div>
									</div>
									<div className ='footer__widget-content'>
										<div className ='footer__logo-area'>
											<p>
											Важно знать, что новые отношения вырастают из старых только в том случае, если преодолены накопившиеся в процессе развития противоречия и выработан язык нового взаимопонимания.
											</p>

											<div className ='social'>
												<h4>Мы в соцсетях:</h4>
												<ul>
													<li>
														<a href='#'>
															<i className ='fab fa-facebook-f'></i>
														</a>
													</li>
													<li>
														<a href='#'>
															<i className ='fab fa-twitter'></i>
														</a>
													</li>
													<li>
														<a href='#'>
															<i className ='fab fa-pinterest-p'></i>
														</a>
													</li>
													<li>
														<a href='#'>
															<i className ='fab fa-instagram'></i>
														</a>
													</li>
													<li>
														<a href='#'>
															<i className ='fab fa-linkedin-in'></i>
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className ='col-xl-2 col-lg-6 col-md-6 offset-xl-1 mb-50'>
								<div className ='footer__widget'>
									<div className ='footer__widget-title mb-25'>
										<h2>Мы полезны:</h2>
									</div>
									<div className ='footer__widget-content'>
										<div className ='footer__services'>
											<ul>
												<li>
													<a href='services-details.html'>Услуга</a>
												</li>
												<li>
													<a href='services-details.html'>Услуга</a>
												</li>
												<li>
													<a href='services-details.html'>Сервис</a>
												</li>
												<li>
													<a href='services-details.html'>Сервис</a>
												</li>

											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className ='col-xl-2 col-lg-6 col-md-6 mb-50'>
								<div className ='footer__widget'>
									<div className ='footer__widget-title mb-25'>
										<h2>Для связи:</h2>
									</div>
									<div className ='footer__widget-content'>
										<div className ='footer__contact-info'>
											<ul>
												<li>
													<div className ='footer__contact-address'>
														<span>Адрес</span>
													</div>
												</li>
												<li>
													<div className ='footer__contact-item'>
														<h6>Email:</h6>
														<p>info@cfhr.ru</p>
													</div>
												</li>
												<li>
													<div className ='footer__contact-item'>
														<h6>Телефон:</h6>
														<p>+7(499) 588-6500</p>
													</div>
												</li>
												<li>
													<div className ='footer__contact-item'>
														<h6>Website:</h6>
														<p>.ru</p>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className ='col-xl-3 col-lg-6 col-md-6 offset-xl-1 mb-50'>
								<div className ='footer__widget'>
									<div className ='footer__widget-title mb-25'>
										<h2>Получать наши новости</h2>
									</div>
									<div className ='footer__widget-content'>
										<div className ='footer__subscribe'>
											<p>Это будет интересно всем.</p>
											<div className ='footer__subscribe-form footer__subscribe-form-2'>
												<form action='#'>
													<input type='email' placeholder='Email Address'></input>
													<button className ='s-btn s-btn__square-2' type='submit'>
														<i className ='fal fa-paper-plane'></i>Подписка
													</button>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className ='footer__copyright'>
						<div className ='row'>
							<div className ='col-sm-6'>
								<div className ='footer__copyright-text'>
									<p>
										Copyright © 2020 <a href='index.html'> CFHR</a>. All Rights Reserved.
									</p>
								</div>
							</div>
							<div className ='col-sm-6'>
								<div className ='footer__policy '>
									<a href='#'> Ссылка =</a>
									<a href='#'> Ссылка =</a>
									<a href='#'> Ссылка =</a>
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
