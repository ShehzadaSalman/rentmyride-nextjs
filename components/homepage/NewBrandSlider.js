import React from 'react'
import Slider, {slickNext} from 'react-slick'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import styles from '../../components/css/brandingSlide.module.scss'
let slider = null; // to get reference of the slider
const NewBrandSlider = () => {
   let imagesArray = [
       'https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Ferrari-RentMyRide.png ',
       'https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Porsche-RentMyRide.png ',
       'https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Lamborghini-Rent-MyRide.png ',
       'https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Audi-RentMyRide.png ',
       'https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/BMW-Rent-MyRide.png ',
       'https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Range-Rover-RentMyRide.png ',
       'https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Mercedes-Benz-RentMyRide.png ',
       'https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Maserati-RentMyRide.png ',
       'https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Cadillac-RentMyRide.png ',
       'https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Toyota-RentMyRide.png ',
       'https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Ford-RentMyRide.png ',
       'https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Mini-RentMyRide.png ',
       'https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/GMC-RentMyRide.png ',
       'https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Bugatti-RentMyRide.png',
       'https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Lamborghini-Rent-MyRide.png'
   ];
	var settings = {
		dots: false,
        arrows: false,
		infinite: true,
        autoplay: false,
		speed: 500,
		slidesToShow: 9,
        lazyLoad: true,   
		slidesToScroll: 2,
        adaptiveHeight: true,
        responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				initialSlide: 1
			  }
			},
			{
			  breakpoint: 985,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 2
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			}
		  ]
	  };

   const backArrow = () => {
    slider.slickPrev();
   }
   const FrontArrow = () => {
  
    slider.slickNext();
}


    return (
    <div className="brandsWrap px-0 mx-0" id="NewBrandSlider position-relative">
     <button onClick={backArrow} 
     className={styles.backbutton}>
        <FontAwesomeIcon icon={faChevronLeft} className="mr-1" fixedWidth size="1x"  />
     </button>
     
        <div className="images mx-5">
        <Slider ref={c => (slider = c)}  {...settings}>
            {imagesArray.map(li => (
            <div className="text-center px-1 py-1">
                <div className="px-2 d-flex">
                <Image
                src={li}
                alt="Brand Cars"
                width={85}
                height={110}/>
                </div>
            </div>))}
        </Slider>
        </div>
        <button onClick={FrontArrow} 
       className={styles.backbutton} style={{
          top: 0, right: 0, 
         }}>
        <FontAwesomeIcon icon={faChevronRight} className="mr-1" fixedWidth size="1x"  />
     </button>
</div>

    )
}

export default NewBrandSlider;