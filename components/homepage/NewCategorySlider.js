import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
let slider = null;

const NewCategorySlider = () => {
    let foo = [1,2,3,4,5,6,7,8,9,10, 11,12,13,14,11,1,1,1,1];
	var settings = {
		dots: false,
        arrows: false,
		infinite: true,
        autoplay: true,
		speed: 500,
		slidesToShow: 11,
        adaptiveHeight: true,
        lazyLoad: true,
		slidesToScroll: 1
	  };
      const backArrow = () => {
        slider.slickNext();
    }
    const FrontArrow = () => {
     slider.slickPrev();
 }
    return (
        <div className="brandsWrap  px-0 mx-0" id="NewCategorySlider">
                 <button onClick={backArrow} 
     className="position-absolute slick-back-button" style={{ height: '120px', backgroundColor: '#fff', zIndex: '2'}}>
         Prev
     </button>
        <div className="images">
       
        <Slider  ref={c => (slider = c)} {...settings}>

            {foo.map(() => (
            <div className="border text-center">
         <a className="removeOutline" href="/cars/sports-car" tabIndex="-1">
            <Image
            className="removeOutline"
                src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/Convertible.svg "
                alt="Picture of the author"
                width={70}
                height={70}
            />
            <h6>Sports Car</h6>
            </a>
            </div>))}
          
           
            </Slider>
        </div>
        <button onClick={FrontArrow} 
     className="position-absolute slick-back-button" style={{ top: 0, right: 0, height: '120px', backgroundColor: '#fff', zIndex: '2'}}>
         Next
     </button>
        <style>{`
        
       #NewCategorySlider .slick-initialized .slick-slide{
            margin: 0 5px;
        }
  
        
        `}</style>
    </div>
    )
}
export default NewCategorySlider;
