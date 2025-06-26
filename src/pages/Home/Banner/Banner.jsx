import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from '../../../assets/banner1.png'
import banner2 from '../../../assets/banner2.png'
import banner3 from '../../../assets/banner3.png'

const Banner = () => {
    return (
        <div className='mt-[28px] mb-[60px]'>
            <Carousel 
                autoPlay 
                showThumbs={false} 
                infiniteLoop
                interval={3000}
                showStatus={false}
                transitionTime={700}
            >
                <div>
                    <img className='h-[690px]' src={banner1} />
                </div>
                <div>
                    <img className='h-[690px]' src={banner2} />
                </div>
                <div>
                    <img className='h-[690px]' src={banner3} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;