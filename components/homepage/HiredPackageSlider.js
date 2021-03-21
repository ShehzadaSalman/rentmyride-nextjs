import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import DemoNavSlider from '../DemoNavSlider'
 const HiredPackage = () => {

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

    return (
		<div className="hiredCarss">

					<Slider {...settingstwo}>
					<div className="carItem mx-3">
						<figure>
					     <DemoNavSlider />
						</figure>
						<div className="offerdt">
							<h5><a href="single.html">Ferrari 488 GTB</a></h5>
							<ul>
								<li>
    								<Image
									src="/images/icon1-min.png"
									alt="Picture of the author"
									width={15}
									height={18}
									/>
									 <span className="ml-1">Seats 4</span>
								</li>
								<li>
								<Image
									src="/images/icon2-min.png"
									alt="Picture of the author"
									width={15}
									height={14}
									/>
									<span className="ml-1">Doors 2</span>
									
								</li>
								<li>
								<Image
								src="/images/icon3-min.png"
								alt="Picture of the author"
								width={15}
								height={14}
								/>
								
									<span className="ml-1">Automatic</span>
								</li>
							</ul>
							<p>Price : <span>AED 2,650 / Day</span></p>
							<div className="fieldWr">
								<label>
								<input type="checkbox" name="" tabIndex="0"/>
								<span>AED 3,000 Deposit</span>
								</label>
							</div>
							<a href="single.html" className="book">Book Now</a>
						</div>
					</div>
					<div className="carItem mx-3">
						<figure>
					     <DemoNavSlider />
						</figure>
						<div className="offerdt">
							<h5><a href="single.html">Ferrari 488 GTB</a></h5>
							<ul>
								<li>
    								<Image
									src="/images/icon1-min.png"
									alt="Picture of the author"
									width={15}
									height={18}
									/>
									 <span className="ml-1">Seats 4</span>
								</li>
								<li>
								<Image
									src="/images/icon2-min.png"
									alt="Picture of the author"
									width={15}
									height={14}
									/>
									<span className="ml-1">Doors 2</span>
									
								</li>
								<li>
								<Image
								src="/images/icon3-min.png"
								alt="Picture of the author"
								width={15}
								height={14}
								/>
								
									<span className="ml-1">Automatic</span>
								</li>
							</ul>
							<p>Price : <span>AED 2,650 / Day</span></p>
							<div className="fieldWr">
								<label>
								<input type="checkbox" name="" tabIndex="0"/>
								<span>AED 3,000 Deposit</span>
								</label>
							</div>
							<a href="single.html" className="book">Book Now</a>
						</div>
					</div>
			
					<div className="carItem mx-3">
						<figure>
					     <DemoNavSlider />
						</figure>
						<div className="offerdt">
							<h5><a href="single.html">Ferrari 488 GTB</a></h5>
							<ul>
								<li>
    								<Image
									src="/images/icon1-min.png"
									alt="Picture of the author"
									width={15}
									height={18}
									/>
									 <span className="ml-1">Seats 4</span>
								</li>
								<li>
								<Image
									src="/images/icon2-min.png"
									alt="Picture of the author"
									width={15}
									height={14}
									/>
									<span className="ml-1">Doors 2</span>
									
								</li>
								<li>
								<Image
								src="/images/icon3-min.png"
								alt="Picture of the author"
								width={15}
								height={14}
								/>
								
									<span className="ml-1">Automatic</span>
								</li>
							</ul>
							<p>Price : <span>AED 2,650 / Day</span></p>
							<div className="fieldWr">
								<label>
								<input type="checkbox" name="" tabIndex="0"/>
								<span>AED 3,000 Deposit</span>
								</label>
							</div>
							<a href="single.html" className="book">Book Now</a>
						</div>
					</div>
			

					</Slider>
			
				</div>
		
    )
}

export default HiredPackage