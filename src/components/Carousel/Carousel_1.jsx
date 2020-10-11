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

            margin={10}
            nav
            item={1}
            center
        >
            <div className="container">
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
            </div>
            </OwlCarousel>
        </div>
            );


};
export default Carousel_1;