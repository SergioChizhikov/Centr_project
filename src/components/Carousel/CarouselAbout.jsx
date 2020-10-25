import React from 'react';
import {UncontrolledCarousel} from 'reactstrap';

import slider1 from "../assets/img/services/carousel_1_1.jpg";
import slider2 from "../assets/img/services/carousel_1_2.jpg";
import slider3 from "../assets/img/services/carousel_1_3.jpg";

const items = [
    {
        src: slider1,
        altText: 'Slide 1',
        caption: '',
        header: 'Для детей и их родителей.',
        key: '1'
    },
    {
        src: slider2,
        altText: 'Slide 2',
        caption: '',
        header: 'Консультации по семейным вопросам',
        key: '2'
    },
    {
        src: slider3,
        altText: 'Slide 3',
        caption: '',
        header: 'Мы проводим тренинги и семинары',
        key: '3'
    }
];

const CarouselAbout = () => <UncontrolledCarousel items={items}/>;
UncontrolledCarousel.propTypes = {
    indicators: false,
    controls: false,

};

export default CarouselAbout;