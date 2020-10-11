import React from "react";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.sendMail = this.sendMail.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
            }


    sendMail(event){
        let formData = new FormData();
        formData.append("text", this.state.value);
        fetch("https://cookonehand.com/sendMail", {
            method: "POST",
            body: formData
        });
        event.preventDefault();
    }

    render() {
        return (

            <div>
                <main>
                    <section className="contact__area pt-120 pb-120">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-5 col-lg-5">
                                    <div className="contact__info-head mb-40">
                                        <div className="section__title mb-25">
                                            <div className="section__icon mb-10">
                                                <span
                                                    className="section__sub-title section__sub-title-2 section__sub-title-3">Contact info</span>
                                            </div>
                                            <h1>Не стесняйтесь обратится с вопросом или проблемой.</h1>
                                        </div>
                                        <p>Мы всегда можем быть полезны и ответим на все ваши вопросы. Консультация.</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 offset-xl-1 col-lg-6 offset-lg-1">
                                    <div className="contact__form">
                                        <form onSubmit={this.sendMail}>
                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <input name="name"
                                                           className="contact__input contact__input-3 contact__input-4"
                                                           type="text" placeholder="Как к вам обращаться?"></input>
                                                </div>
                                                {/*<div className ="col-xl-6">*/}
                                                {/*    <input name="email" className ="contact__input contact__input-3 contact__input-4" type="email" placeholder="E-mail"></input>*/}
                                                {/*</div>*/}
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <input name="subject"
                                                           className="contact__input contact__input-3 contact__input-4"
                                                           type="text" placeholder="Телефон для связи:"></input>
                                                </div>
                                                {/*<div className ="col-xl-6">*/}
                                                {/*    <select className ="contact__input contact__input-3 contact__input-4">*/}
                                                {/*        <option value="">Choose Problem</option>*/}
                                                {/*        <option value="">Option 1</option>*/}
                                                {/*        <option value="">Option 2</option>*/}
                                                {/*        <option value="">Option 3</option>*/}
                                                {/*        <option value="">Option 4</option>*/}
                                                {/*        <option value="">Option 5</option>*/}
                                                {/*    </select>*/}
                                                {/*</div>*/}
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-12">
                                                    <textarea
                                                              className="contact__input contact__input-3 contact__input-4 txt-area "
                                                              cols="30" rows="10"
                                                              placeholder="Ваш комментарий:" value={this.state.value} onChange={this.handleChange}></textarea>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-12">
                                                    <button className="s-btn s-btn__square" type="submit">Отправить нам
                                                        сообщение.
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                        <p className="ajax-response"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="contact__info p-relative">
                        <div className="container">
                            <div className="contact__info-inner green-bg-2">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div
                                            className="contact__info-item text-center text-sm-left d-sm-flex justify-content-lg-center mb-30">
                                            <div className="contact__icon mr-20">
                                                <span className="icon flaticon-house"></span>
                                            </div>
                                            <div className="contact__info-content">
                                                <h3>Наш адрес</h3>
                                                <span>Палаты Аверкия</span>
                                                <span> Входить от Москва реки</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div
                                            className="contact__info-item text-center text-sm-left d-sm-flex justify-content-lg-center mb-30">
                                            <div className="contact__icon mr-20">
                                                <span className="icon flaticon-support-1"></span>
                                            </div>
                                            <div className="contact__info-content">
                                                <h3>Можете связаться по телефонам:</h3>
                                                <span>(+7) 495 - 926 - 3265 </span>
                                                <span>(+7) 499 - 223 - 6524</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div
                                            className="contact__info-item text-center text-sm-left d-sm-flex justify-content-lg-center mb-30">
                                            <div className="contact__icon mr-20">
                                                <span className="icon flaticon-email"></span>
                                            </div>
                                            <div className="contact__info-content">
                                                <h3>Email для связи</h3>
                                                <span>test@btest.com</span>
                                                <span>info@btest.com</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="contact__map-area mt--120">
                        <div className="container-fluid p-0">
                            <div className="row no-gutters">
                                <div className="col-xl-12">
                                    <div className="contact__map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3777.2491116708484!2d37.605397210157065!3d55.74172390882723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1602446417950!5m2!1sru!2sru"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

            </div>

        );
    }
}
export default Contact;