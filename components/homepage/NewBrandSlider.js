import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
const NewBrandSlider = () => {
   let foo = [1,2,3,4,5,6,7,8,9,10, 11,12,13,14,11,1,1,1,1];
	var settings = {
		dots: false,
        arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 9,
        lazyLoad: true,
		slidesToScroll: 1
	  };

    return (<div className="brandsWrap" id="NewBrandSlider">
        <div className="images">
       
        <Slider {...settings}>

            {foo.map(() => (
            <div className="border text-center">
            <Image
            src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Dodge-RentMyRide.png"
            alt="Dodge"
            width={85}
            height={98}
            />
            </div>))}
          
           
            </Slider>
        </div>
        <style>{`
        
       #NewBrandSlider .slick-initialized .slick-slide{
            margin: 0 5px;
        }
  
        
        `}</style>
    </div>

    )
}

export default NewBrandSlider;