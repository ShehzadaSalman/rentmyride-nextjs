import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
 const BrandSlider = () => {

	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
        lazyLoad: true,
		slidesToScroll: 1
	  };




    return (
        <div className="brandsWrap">


<div className="images px-3">
<Slider {...settings}>


<figure>
<a href="/cars/limousine/rent-a-dodge-in-dubai" className="brend-item" tabindex="-1">
 <Image
src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Dodge-RentMyRide.png"
alt="Picture of the author"
width={100}
height={100}
/>
</a>
</figure>


<figure>
<a href="/cars/limousine/rent-a-dodge-in-dubai" className="brend-item" tabindex="-1">
 {/* <Slider {...settings}> */}
 <Image
src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Dodge-RentMyRide.png"
alt="Picture of the author"
width={100}
height={100}
/>
</a>
</figure>



<figure>
<a href="/cars/limousine/rent-a-dodge-in-dubai" className="brend-item" tabindex="-1">
 {/* <Slider {...settings}> */}
 <Image
src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Dodge-RentMyRide.png"
alt="Picture of the author"
width={100}
height={100}
/>
</a>
</figure>



<figure>
<a href="/cars/limousine/rent-a-dodge-in-dubai" className="brend-item" tabindex="-1">
 {/* <Slider {...settings}> */}
 <Image
src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Dodge-RentMyRide.png"
alt="Picture of the author"
width={100}
height={100}
/>
</a>
</figure>



<figure>
<a href="/cars/limousine/rent-a-dodge-in-dubai" className="brend-item" tabindex="-1">
 <Image
src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Dodge-RentMyRide.png"
alt="Picture of the author"
width={100}
height={100}
/>
</a>
</figure>



<figure>
<a href="/cars/limousine/rent-a-dodge-in-dubai" className="brend-item" tabindex="-1">
 <Image
src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Dodge-RentMyRide.png"
alt="Picture of the author"
width={100}
height={100}
/>
</a>
</figure>


<figure>
<a href="/cars/limousine/rent-a-dodge-in-dubai" className="brend-item" tabindex="-1">
 <Image
src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Dodge-RentMyRide.png"
alt="Picture of the author"
width={100}
height={100}
/>
</a>
</figure>

 </Slider>
 </div>

		</div>

    )
}

export default BrandSlider;