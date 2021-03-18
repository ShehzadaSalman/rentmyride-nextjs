import React from 'react'
import Slider from "react-slick";
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
function CustomerReview() {
	let arr = [1,2,3,4,5]
    var settingstwo = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		lazyLoad: true,
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
        <>
          	<div className="heading">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-12">
						<h6>what customers are saying</h6>
						<h2>customer reviews</h2>
						<span><img src="/images/border.png" /></span>
					</div>
				</div>
			</div>
		</div>
		<div className="testimonialWrap">
			<div className="container">
				<div className="testislider">
		<Slider {...settingstwo}>
	          {arr.map((li,key) => (
				  <div key={key} className="px-1">
		<div className="destiwrap">
		<div className="desti">
			<figure>
				<img src="images/quote.png" />
				<p>
					My ride recommended the Lamborghini Huracan. It was delivered
					to my Hotel by two lovely women, who I assumed were models.
					All of the documents were straight forward and in English.
				</p>
			</figure>
			<div className="bottomD">
				<Image
				src="/images/user.png"
				alt="Picture of the author"
				width={40}
				height={40}
				
				/>
			
				<h3 className="mr-1 ml-2">
					Robert Chaney
					<span>Customer
					<cite className="ml-1">
						{/* <i className="fa fa-star"></i><i className="fa fa-star"></i
						><i className="fa fa-star"></i><i className="fa fa-star"></i
						><i className="fa fa-star"></i> */}
						<FontAwesomeIcon icon={faStar} color="#ffce4a"fixedWidth/>
						<FontAwesomeIcon icon={faStar} color="#ffce4a"fixedWidth/>
						<FontAwesomeIcon icon={faStar} color="#ffce4a"fixedWidth/>
						<FontAwesomeIcon icon={faStar} color="#ffce4a" fixedWidth/>
						<FontAwesomeIcon icon={faStar} color="#ffce4a" fixedWidth/>
						</cite
						></span>
				</h3>
			</div>
		</div>
	</div>
	</div>
			  ))}
			
					</Slider>
			
				</div>
				<style>{
					`
					.testimonialWrap .testislider{

					}
					
					
					`}</style>
			</div>
		</div>
	  
        </>
    )
}

export default CustomerReview
