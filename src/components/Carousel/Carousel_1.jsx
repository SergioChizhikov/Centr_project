import React from "react";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import slider1 from "../assets/img/services/carousel_1_1.jpg";
import slider2 from "../assets/img/services/carousel_1_2.jpg";
import slider3 from "../assets/img/services/carousel_1_3.jpg";

function Carousel_1 (){

    return (
        <div className="slider-area p-relative">
        <OwlCarousel
            className="owl-theme"
            loop

            nav
            items="1"
            center
            autoplay
        >
            <div className="item">
                <div align="center"><h2>Для детей и их родителей.</h2>
                    <img src={slider1}      alt="" />
                </div>
            </div>
            <div className="item"><div align="center"><h2>Консультации по семейным вопросам</h2>
                <img src={slider2}      alt="" />
            </div></div>
            <div className="item"><div align="center"><h2>Мы проводим тренинги и семинары</h2>
                <img src={slider3}      alt="" />
            </div></div>

            </OwlCarousel>
       </div>
            );


};
export default Carousel_1;