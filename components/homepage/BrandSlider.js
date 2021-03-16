import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
 const BrandSlider = () => {

	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1
	  };




    return (
        <div className="brandsWrap">
<Slider {...settings}>
<div className="images">
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
</div>
<div className="images">
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
</div>

<div className="images">
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
</div>

<div className="images">
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
</div>

<div className="images">
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
</div>

<div className="images">
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
</div>
 </Slider>

	
		</div>

    )
}

export default BrandSlider;