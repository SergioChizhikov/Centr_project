import React from "react";


import awardlist from "../assets/img/award/list/award-list-1.png";
import awardlist2 from "../assets/img/award/list/award-list-2.png";
import awardlist3 from "../assets/img/award/list/award-list-3.png";
import appointment from "../assets/img/appointment/appointment-mission.jpg";
import slider1 from "../assets/img/slider/02/slider-1.jpg";
import {NavLink} from "react-router-dom";

const Main = () => {
	return (
		<div>


			<div className='slider-area p-relative'>
				<div className='slider-arrow p-absolute bounce smooth-scroll'>
					<NavLink to='#appointment__area-2' className='slider-arrow-btn'>
						<i className='fal fa-long-arrow-down'></i>
					</NavLink>
				</div>
				<div className='item slider-active slider-active-2'>
					<div
						className='single-slider slider-height-2 slider-overlay p-relative slider-height d-flex align-items-center'
						style={{backgroundImage: `url(${slider1})`}}
					>
						<div className='container'>
							<div className='row align-items-center'>
								<div className='col-xl-9'>
									<div className='slider-content slider-content-2'>
										<span data-animation='fadeInUp' data-delay='.2s'>
											Не существует универсального решения проблемы.
										</span>
										<h2 data-animation='fadeInUp' data-delay='.4s'>
											Консультация психолога{" "}
										</h2>
										<p data-animation='fadeInUp' data-delay='.6s'>
											по Skype, WhatsApp, Telegram, Zoom — это удобно
										</p>
										<div className='slider-btn' data-animation='fadeInUp' data-delay='.8s'>
											<NavLink to ='contact' className='s-btn s-btn__square'>
												Получите надежную точку опоры.
											</NavLink>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*<div*/}
					{/*	className='single-slider slider-height-2 slider-overlay p-relative slider-height d-flex align-items-center'*/}
					{/*	data-background={slider1}*/}
					{/*>*/}
					{/*	<div className='container'>*/}
					{/*		<div className='row align-items-center'>*/}
					{/*			<div className='col-xl-9'>*/}
					{/*				<div className='slider-content slider-content-2'>*/}
					{/*					<span data-animation='fadeInUp' data-delay='.2s'>*/}
					{/*						Всегда есть решение!*/}
					{/*					</span>*/}
					{/*					<h2 data-animation='fadeInUp' data-delay='.4s'>*/}
					{/*						Приезжайте на консультацию лично.*/}
					{/*					</h2>*/}
					{/*					<p data-animation='fadeInUp' data-delay='.6s'>*/}
					{/*						Вы можете записаться на удобное для вас время и дату.*/}
					{/*					</p>*/}
					{/*					<div className='slider-btn' data-animation='fadeInUp' data-delay='.8s'>*/}
					{/*						<NavLink to ='contact' className='s-btn s-btn__square'>*/}
					{/*							Узнайте подробности*/}
					{/*						</NavLink>*/}
					{/*					</div>*/}
					{/*				</div>*/}
					{/*			</div>*/}
					{/*		</div>*/}
					{/*	</div>*/}
					{/*</div>*/}
					{/*<div*/}
					{/*	className='single-slider slider-height-2 slider-overlay p-relative slider-height d-flex align-items-center'*/}
					{/*	data-background={slider1}*/}
					{/*>*/}
					{/*	<div className='container'>*/}
					{/*		<div className='row align-items-center'>*/}
					{/*			<div className='col-xl-9'>*/}
					{/*				<div className='slider-content slider-content-2'>*/}
					{/*					<span data-animation='fadeInUp' data-delay='.2s'>*/}
					{/*						Приходим на помощь*/}
					{/*					</span>*/}
					{/*					<h2 data-animation='fadeInUp' data-delay='.4s'>*/}
					{/*						Best Psychologist Makes Excellent{" "}*/}
					{/*					</h2>*/}
					{/*					<p data-animation='fadeInUp' data-delay='.6s'>*/}
					{/*						Персональный психолог*/}
					{/*					</p>*/}
					{/*					<div className='slider-btn' data-animation='fadeInUp' data-delay='.8s'>*/}
					{/*						<NavLink to ='contact' className='s-btn s-btn__square'>*/}
					{/*							Обратиться к нам*/}
					{/*						</NavLink>*/}
					{/*					</div>*/}
					{/*				</div>*/}
					{/*			</div>*/}
					{/*		</div>*/}
					{/*	</div>*/}
					{/*</div>*/}
				</div>
			</div>

			<section
				id='appointment__area-2'
				className='appointment__area appointment__area-2 pt-120 pb-60 box-105'
			>
				<div className='container-fluid'>
					<div className='appointment__area-inner-2 white-bg p-relative'>
						<div className='row'>
							<div className='col-xl-4 col-lg-6'>
								<div className='appointment__form-wrapper mr-65'>
									<h1>Только лучшие психологи работают с вами.</h1>
									<div className='appointment__form-inner'><h2>На нашем сайте Вы можете получить онлайн консультацию психолога, не выходя из дома.</h2><p>
										Психолог поможет Вам разрешить наболевшие проблемы: в личных или семейных отношениях, разобраться с тревогой и депрессией, травматическим опытом, определиться с целью в жизни.

										Бесплатная консультация психолога оказывается в порядке очереди бесплатных вопросов без гарантии ответа, режим платных вопросов позволяет получить ответ сразу же.</p>
										{/*<form action='#'>*/}
										{/*	<input type='text' placeholder='Ваше имя'></input>*/}
										{/*	<input type='phone' placeholder='E-mail'></input>*/}
										{/*	<textarea*/}
										{/*		name='app-txt'*/}
										{/*		cols='30'*/}
										{/*		rows='10'*/}
										{/*		placeholder='Напишите здесь сообщение'*/}
										{/*	></textarea>*/}

										{/*	<button className='sub-btn' type='submit'>*/}
										{/*		Отправить сообщение*/}
										{/*	</button>*/}
										{/*</form>*/}
									</div>
								</div>
							</div>
							<div className='col-xl-4 col-lg-6'>
								<div className='appointment__award'>
									<div className='section__title award__title mb-40'>
										<div className='section__icon mb-10'>
											<span className='section__sub-title section__sub-title-2'>Сертификат</span>
										</div>
										<h1 className='mb-100'>Обучение</h1>
									</div>

									<div className='appointment__award-list'>
										<div className='single-award d-flex mb-50'>
											<div className='award-icon mr-30'>
												<img src={awardlist} alt='award-1'></img>
											</div>
											<div className='award-text'>
												<h3>Диплом</h3>
												<span>Обучение в</span>
											</div>
										</div>
										<div className='single-award d-flex mb-50'>
											<div className='award-icon mr-30'>
												<img src={awardlist2} alt='award-1'></img>
											</div>
											<div className='award-text'>
												<h3>Переквалификация</h3>
												<span>Получен в 2020 году.</span>
											</div>
										</div>
										<div className='single-award d-flex mb-50'>
											<div className='award-icon mr-30'>
												<img src={awardlist3} alt='award-1'></img>
											</div>
											<div className='award-text'>
												<h3>Сертификат</h3>
												<span>Получен в</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-4 col-lg-6'>
								<div className='appointment__mission'>
									<div className='appointment__mission-thumb p-relative w-img'>
										<img src={appointment} alt='appointment-mission'></img>
										<div className='play-icon p-absolute'>
											<a href='#' data-fancybox className='play-btn'>
												<i className='fas fa-play'></i>
											</a>
										</div>
									</div>
									<div className='appointment__mission-text'>
										<h3>Мы приносим гармонию:</h3>
										<p>
											Мы, в первую очередь, команда профессиональных психологов, за плечами которых
											многолетний успешный опыт работы с самыми разными проблемными вопросами. В
											центре проводятся тренинги личностного роста, программы для детей и
											подростков, проводятся консультации психологов (психологическая помощь
											взрослым, детям, подросткам и семьям), а также онлайн консультации психологов.
										</p>
										<p>Всегда можете записаться на бесплатную консультацию.</p>
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

export default Main;
