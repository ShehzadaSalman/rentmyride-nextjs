import React from 'react'
import Slider from "react-slick";
import Image from 'next/image'

function CustomerReview() {
    var settingstwo = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1
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
								width={60}
								height={60}
							    />
							
								<h3>
									Robert Chaney
									<span
										>Customer
									<cite
										><i className="fa fa-star"></i><i className="fa fa-star"></i
										><i className="fa fa-star"></i><i className="fa fa-star"></i
										><i className="fa fa-star"></i></cite
										></span>
								</h3>
							</div>
						</div>
					</div>
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
								width={60}
								height={60}
							    />
								<h3>
									Robert Chaney
									<span
										>Customer
									<cite
										><i className="fa fa-star"></i><i className="fa fa-star"></i
										><i className="fa fa-star"></i><i className="fa fa-star"></i
										><i className="fa fa-star"></i></cite
										></span>
								</h3>
							</div>
						</div>
					</div>
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
								width={60}
								height={60}
							    />
								<h3>
									Robert Chaney
									<span
										>Customer
									<cite
										><i className="fa fa-star"></i><i className="fa fa-star"></i
										><i className="fa fa-star"></i><i className="fa fa-star"></i
										><i className="fa fa-star"></i></cite
										></span>
								</h3>
							</div>
						</div>
					</div>
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
								width={60}
								height={60}
							    />
								<h3>
									Robert Chaney
									<span
										>Customer
									<cite
										><i className="fa fa-star"></i><i className="fa fa-star"></i
										><i className="fa fa-star"></i><i className="fa fa-star"></i
										><i className="fa fa-star"></i></cite
										></span>
								</h3>
							</div>
						</div>
					</div>
					<div className="destiwrap">
						<div className="desti">
							<figure>
								<img src="images/quote.png" />
								<p>
								amborghini Huracan. It was delivered
									to my Hotel by two lovely women, who I assumed were models.
									All of the documents were straight forward and in English.
								</p>
							</figure>
							<div className="bottomD">
							<Image
								src="/images/user.png"
								alt="Picture of the author"
								width={60}
								height={60}
							    />
								<h3>
									Robert Chaney
									<span
										>Customer
									<cite
										><i className="fa fa-star"></i><i className="fa fa-star"></i
										><i className="fa fa-star"></i><i className="fa fa-star"></i
										><i className="fa fa-star"></i></cite
										></span>
								</h3>
							</div>
						</div>
					</div>
			
					</Slider>
			
				</div>
			</div>
		</div>
	  
        </>
    )
}

export default CustomerReview
