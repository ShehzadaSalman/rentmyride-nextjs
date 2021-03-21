import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import DemoNavSlider from '../DemoNavSlider'
const NewHiredPackageSlider = () => {

    var settingstwo = {
		dots: false,
		infinite: true,
		speed: 500,
    lazyLoad: true,
		slidesToShow: 3,
		slidesToScroll: 1,
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
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
	  };
      let arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1]

    return (
        <div className="hiredCarss px-0">
        <Slider {...settingstwo}>
            {arr.map((li, key) => (


        <div className="px-0" style={{ backgroundColor: '#eee' }}>
      <div className="d-flex justify-content-center">
      <div  key={key} className="carItem px-0 mx-0">
     {/* <figure> */}
  <div style={{ width: '350px'}}>
  <DemoNavSlider /> 
  </div>
    {/* */}


         {/* <a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer">
         <Image
         src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicleType/Rent-a-Ferrari-and-ferrari-world.jpg"
         alt="Picture of the author"
         width={350}
         height={240}
         />
       </a>                            */}
     {/* </figure> */}
     <div className="offerdt">
         <h5>
             <a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" >Rolls Royce Wraith Combo Offer</a>
         </h5>
         <ul>
             <li>
                 <Image
                 src="/images/icon1-min.png"
                 alt="Picture of the author"
                 width={15}
                 height={18}
                 className="mr-1"
                 />
                 Seats 4
             </li>
             <li>
             <Image
                 src="/images/icon2-min.png"
                 alt="Picture of the author"
                 width={15}
                 height={14}
                 className="mr-1"
                 />
                 Doors 2
             </li>
             <li>
             <Image
             src="/images/icon3-min.png"
             alt="Picture of the author"
             width={15}
             height={14}
             className="mr-1"
             />
                 Automatic
             </li>
         </ul>
         <p>Price: <span><span className="currency">AED </span> 7,000 <span className="day"> / Day</span></span></p>
         <div className="fieldWr">
             <label>
             <input type="checkbox" name="" tabIndex="-1"/>
             <span>AED 3,000 Deposit</span>
             </label>
         </div>
         <div className="terms">
             <h6>Terms &amp; Conditions</h6>
             <p></p>
             <p>test</p>
             <p></p>
             <label><input type="checkbox" onChange="valueChangeds()" className="termCheck" name="" tabIndex="-1"/><span><cite><i className="fa fa-check"></i></cite>Accept the Terms &amp; Conditions</span></label>
         </div>
         <a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" className="book" tabIndex="-1">Book Now</a>
     </div>
 </div>

            </div>
        </div>




  
)
            
            
            )}
   
   </Slider>
<style>
{`



`}
</style>
    </div>

    )
}

export default NewHiredPackageSlider