import React, { useEffect, useState} from "react";
import ReactDOM from "react-dom";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import ConfCard from "./ConfCard";
import {css, jsx} from '@emotion/react'
/** @jsxImportSource @emotion/react */

const ConferencesCarousel=()=>{

    const responsive = {
        fullhd:{
            breakpoint: {max: 3000, min: 1600},
            items: 2,
            slidesToSlide: 1, // optional, default to 1.
            partialVisibilityGutter: 70
        },
        desktop: {
            breakpoint: {max: 1600, min: 1024},
            items: 2,
            slidesToSlide: 1, // optional, default to 1.
            partialVisibilityGutter: 70
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2,
            slidesToSlide: 2,// optional, default to 1.
            partialVisibilityGutter: 70
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
            partialVisibilityGutter: 50
        }
    };
    const carouselStyle=css`
    &{
      margin-top: 30px;
      margin-bottom:30px;
    }
    
    
`;
    return(
        <Carousel partialVisible={true} swipeable={true}
                  draggable={true} responsive={responsive} infinite
                  itemClass="carousel-item-padding-40-px"
                  css={carouselStyle}
                  removeArrowOnDeviceType={["tablet", "mobile"]}
        >
            <ConfCard/>
            <ConfCard/>
            <ConfCard/>
            <ConfCard/>
            <ConfCard/>
            <ConfCard/>
        </Carousel>
    )
};
export default ConferencesCarousel;
