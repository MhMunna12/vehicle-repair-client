/* eslint-disable no-unused-vars */
import React from 'react';
import img1 from '../../images/banner/6.jpg'
const Banner = () => {

    return (
        <div>
            <div className="carousel w-full h-[500px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} alt="" className="w-full" />
                </div>

            </div>
        </div>
    );
};

export default Banner;