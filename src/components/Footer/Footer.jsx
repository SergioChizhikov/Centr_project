import React from "react";
import logo from ".././assets/img/logo/logo.png";

const Footer = () => {
	return (
		<footer>
			<div class='footer__area pt-130 footer-bg box-105'>
				<div class='container-fluid'>
					<div class='footer__bottom pb-50'>
						<div class='row'>
							<div class='col-xl-3 col-lg-6 col-md-6 mb-50'>
								<div class='footer__widget'>
									<div class='footer__widget-title mb-30'>
										<div class='logo'>
											<a href='index.html'>
												<img src={logo} alt='logo'></img>
											</a>
										</div>
									</div>
									<div class='footer__widget-content'>
										<div class='footer__logo-area'>
											<p>
											Важно знать, что новые отношения вырастают из старых только в том случае, если преодолены накопившиеся в процессе развития противоречия и выработан язык нового взаимопонимания.
											</p>

											<div class='social'>
												<h4>Мы в соцсетях:</h4>
												<ul>
													<li>
														<a href='#'>
															<i class='fab fa-facebook-f'></i>
														</a>
													</li>
													<li>
														<a href='#'>
															<i class='fab fa-twitter'></i>
														</a>
													</li>
													<li>
														<a href='#'>
															<i class='fab fa-pinterest-p'></i>
														</a>
													</li>
													<li>
														<a href='#'>
															<i class='fab fa-instagram'></i>
														</a>
													</li>
													<li>
														<a href='#'>
															<i class='fab fa-linkedin-in'></i>
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class='col-xl-2 col-lg-6 col-md-6 offset-xl-1 mb-50'>
								<div class='footer__widget'>
									<div class='footer__widget-title mb-25'>
										<h2>Мы полезны:</h2>
									</div>
									<div class='footer__widget-content'>
										<div class='footer__services'>
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
							<div class='col-xl-2 col-lg-6 col-md-6 mb-50'>
								<div class='footer__widget'>
									<div class='footer__widget-title mb-25'>
										<h2>Для связи:</h2>
									</div>
									<div class='footer__widget-content'>
										<div class='footer__contact-info'>
											<ul>
												<li>
													<div class='footer__contact-address'>
														<span>Адрес</span>
													</div>
												</li>
												<li>
													<div class='footer__contact-item'>
														<h6>Email:</h6>
														<p>info@cfhr.ru</p>
													</div>
												</li>
												<li>
													<div class='footer__contact-item'>
														<h6>Телефон:</h6>
														<p>+7(499) 588-6500</p>
													</div>
												</li>
												<li>
													<div class='footer__contact-item'>
														<h6>Website:</h6>
														<p>.ru</p>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div class='col-xl-3 col-lg-6 col-md-6 offset-xl-1 mb-50'>
								<div class='footer__widget'>
									<div class='footer__widget-title mb-25'>
										<h2>Получать наши новости</h2>
									</div>
									<div class='footer__widget-content'>
										<div class='footer__subscribe'>
											<p>Это будет интересно всем.</p>
											<div class='footer__subscribe-form footer__subscribe-form-2'>
												<form action='#'>
													<input type='email' placeholder='Email Address'></input>
													<button class='s-btn s-btn__square-2' type='submit'>
														<i class='fal fa-paper-plane'></i>Подписка
													</button>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class='footer__copyright'>
						<div class='row'>
							<div class='col-sm-6'>
								<div class='footer__copyright-text'>
									<p>
										Copyright © 2020 <a href='index.html'> CFHR</a>. All Rights Reserved.
									</p>
								</div>
							</div>
							<div class='col-sm-6'>
								<div class='footer__policy '>
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
