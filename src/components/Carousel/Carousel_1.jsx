import React from "react";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import slider1 from "../assets/img/slider/02/slider-1.jpg";

function Carousel_1 (){

    return (
        <div className="slider-area p-relative">
        <OwlCarousel
            className="owl-theme"
            loop
            margin={10}
            nav
            items="3"
            center
            autoplay
        >
            <div className="item">
                <div >
                    <img src={slider1}      alt="" />
                </div>
            </div>
            <div className="item"><div >
                <img src={slider1}      alt="" />
            </div></div>
            <div className="item"><div >
                <img src={slider1}      alt="" />
            </div></div>

            </OwlCarousel>
       </div>
            );


};
export default Carousel_1;