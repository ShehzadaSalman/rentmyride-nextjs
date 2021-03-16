import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'

 const HiredPackage = () => {

    var settingstwo = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1
	  };

    return (
		<div className="hiredCarss">

					<Slider {...settingstwo}>
					<div className="carItem">
						<figure>
							<div
								id="carousel-thumb"
								className="carousel slide carousel-fade carousel-thumbnails"
								data-ride="carousel">
								<div className="carousel-inner" role="listbox">
									<div className="carousel-item active">
									<Image
							src="/images/cars/car1.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									
									</div>
									<div className="carousel-item">
									<Image
							src="/images/cars/car2.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</div>
									<div className="carousel-item">
									<Image
							src="/images/cars/car3.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</div>
									<div className="carousel-item">
									<Image
							src="/images/cars/car4.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</div>
								</div>
								<ol className="carousel-indicators">
									<li
										data-target="#carousel-thumb"
										data-slide-to="0"
										className="active"
										>
												<Image
							src="/images/cars/car1.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</li>
									<li data-target="#carousel-thumb" data-slide-to="1">
									<Image
							src="/images/cars/car2.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</li>
									<li data-target="#carousel-thumb" data-slide-to="2">
									<Image
							src="/images/cars/car3.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</li>
									<li data-target="#carousel-thumb" data-slide-to="3">
									<Image
							src="/images/cars/car4.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</li>
								</ol>
							</div>
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
									Seats 4
								</li>
								<li>
								<Image
									src="/images/icon2-min.png"
									alt="Picture of the author"
									width={15}
									height={14}
									/>
									Doors 2
								</li>
								<li>
								<Image
								src="/images/icon3-min.png"
								alt="Picture of the author"
								width={15}
								height={14}
								/>
									Automatic
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
					<div className="carItem">
						<figure>
							<div
								id="carousel-thumb"
								className="carousel slide carousel-fade carousel-thumbnails"
								data-ride="carousel">
								<div className="carousel-inner" role="listbox">
									<div className="carousel-item active">
									<Image
							src="/images/cars/car1.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									
									</div>
									<div className="carousel-item">
									<Image
							src="/images/cars/car2.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</div>
									<div className="carousel-item">
									<Image
							src="/images/cars/car3.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</div>
									<div className="carousel-item">
									<Image
							src="/images/cars/car4.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</div>
								</div>
								<ol className="carousel-indicators">
									<li
										data-target="#carousel-thumb"
										data-slide-to="0"
										className="active"
										>
												<Image
							src="/images/cars/car1.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</li>
									<li data-target="#carousel-thumb" data-slide-to="1">
									<Image
							src="/images/cars/car2.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</li>
									<li data-target="#carousel-thumb" data-slide-to="2">
									<Image
							src="/images/cars/car3.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</li>
									<li data-target="#carousel-thumb" data-slide-to="3">
									<Image
							src="/images/cars/car4.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</li>
								</ol>
							</div>
						</figure>
						<div className="offerdt">
							<h5><a href="single.html">Ferrari 488 GTB</a></h5>
							<ul>
								<li>
								<Image
							src="/images/icon1.png"
							alt="Picture of the author"
							width={15}
							height={15}
							/>
									Seats 4
								</li>
								<li>
								<Image
							src="/images/icon2.png"
							alt="Picture of the author"
							width={15}
							height={15}
							/>
									Doors 2
								</li>
								<li>
								<Image
							src="/images/icon3.png"
							alt="Picture of the author"
							width={15}
							height={15}
							/>
									Automatic
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
					<div className="carItem">
						<figure>
							<div
								id="carousel-thumb"
								className="carousel slide carousel-fade carousel-thumbnails"
								data-ride="carousel">
								<div className="carousel-inner" role="listbox">
									<div className="carousel-item active">
									<Image
							src="/images/cars/car1.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									
									</div>
									<div className="carousel-item">
									<Image
							src="/images/cars/car2.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</div>
									<div className="carousel-item">
									<Image
							src="/images/cars/car3.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</div>
									<div className="carousel-item">
									<Image
							src="/images/cars/car4.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</div>
								</div>
								<ol className="carousel-indicators">
									<li
										data-target="#carousel-thumb"
										data-slide-to="0"
										className="active"
										>
												<Image
							src="/images/cars/car1.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</li>
									<li data-target="#carousel-thumb" data-slide-to="1">
									<Image
							src="/images/cars/car2.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</li>
									<li data-target="#carousel-thumb" data-slide-to="2">
									<Image
							src="/images/cars/car3.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</li>
									<li data-target="#carousel-thumb" data-slide-to="3">
									<Image
							src="/images/cars/car4.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</li>
								</ol>
							</div>
						</figure>
						<div className="offerdt">
							<h5><a href="single.html">Ferrari 488 GTB</a></h5>
							<ul>
								<li>
								<Image
							src="/images/icon1.png"
							alt="Picture of the author"
							width={15}
							height={15}
							/>
									Seats 4
								</li>
								<li>
								<Image
							src="/images/icon2.png"
							alt="Picture of the author"
							width={15}
							height={15}
							/>
									Doors 2
								</li>
								<li>
								<Image
							src="/images/icon3.png"
							alt="Picture of the author"
							width={15}
							height={15}
							/>
									Automatic
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
					<div className="carItem">
						<figure>
							<div
								id="carousel-thumb"
								className="carousel slide carousel-fade carousel-thumbnails"
								data-ride="carousel">
								<div className="carousel-inner" role="listbox">
									<div className="carousel-item active">
									<Image
							src="/images/cars/car1.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									
									</div>
									<div className="carousel-item">
									<Image
							src="/images/cars/car2.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</div>
									<div className="carousel-item">
									<Image
							src="/images/cars/car3.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</div>
									<div className="carousel-item">
									<Image
							src="/images/cars/car4.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</div>
								</div>
								<ol className="carousel-indicators">
									<li
										data-target="#carousel-thumb"
										data-slide-to="0"
										className="active"
										>
												<Image
							src="/images/cars/car1.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</li>
									<li data-target="#carousel-thumb" data-slide-to="1">
									<Image
							src="/images/cars/car2.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</li>
									<li data-target="#carousel-thumb" data-slide-to="2">
									<Image
							src="/images/cars/car3.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</li>
									<li data-target="#carousel-thumb" data-slide-to="3">
									<Image
							src="/images/cars/car4.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</li>
								</ol>
							</div>
						</figure>
						<div className="offerdt">
							<h5><a href="single.html">Ferrari 488 GTB</a></h5>
							<ul>
								<li>
								<Image
							src="/images/icon1.png"
							alt="Picture of the author"
							width={40}
							height={40}
							/>
									Seats 4
								</li>
								<li>
								<Image
							src="/images/icon2.png"
							alt="Picture of the author"
							width={40}
							height={40}
							/>
									Doors 2
								</li>
								<li>
								<Image
							src="/images/icon3.png"
							alt="Picture of the author"
							width={40}
							height={40}
							/>
									Automatic
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
					<div className="carItem">
						<figure>
							<div
								id="carousel-thumb"
								className="carousel slide carousel-fade carousel-thumbnails"
								data-ride="carousel">
								<div className="carousel-inner" role="listbox">
									<div className="carousel-item active">
									<Image
							src="/images/cars/car1.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									
									</div>
									<div className="carousel-item">
									<Image
							src="/images/cars/car2.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</div>
									<div className="carousel-item">
									<Image
							src="/images/cars/car3.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</div>
									<div className="carousel-item">
									<Image
							src="/images/cars/car4.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</div>
								</div>
								<ol className="carousel-indicators">
									<li
										data-target="#carousel-thumb"
										data-slide-to="0"
										className="active"
										>
												<Image
							src="/images/cars/car1.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</li>
									<li data-target="#carousel-thumb" data-slide-to="1">
									<Image
							src="/images/cars/car2.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</li>
									<li data-target="#carousel-thumb" data-slide-to="2">
									<Image
							src="/images/cars/car3.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</li>
									<li data-target="#carousel-thumb" data-slide-to="3">
									<Image
							src="/images/cars/car4.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</li>
								</ol>
							</div>
						</figure>
						<div className="offerdt">
							<h5><a href="single.html">Ferrari 488 GTB</a></h5>
							<ul>
								<li>
								<Image
							src="/images/icon1.png"
							alt="Picture of the author"
							width={15}
							height={15}
							/>
									Seats 4
								</li>
								<li>
								<Image
							src="/images/icon2.png"
							alt="Picture of the author"
							width={15}
							height={15}
							/>
									Doors 2
								</li>
								<li>
								<Image
							src="/images/icon3.png"
							alt="Picture of the author"
							width={15}
							height={15}
							/>
									Automatic
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
					<div className="carItem">
						<figure>
							<div
								id="carousel-thumb"
								className="carousel slide carousel-fade carousel-thumbnails"
								data-ride="carousel">
								<div className="carousel-inner" role="listbox">
									<div className="carousel-item active">
									<Image
							src="/images/cars/car1.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									
									</div>
									<div className="carousel-item">
									<Image
							src="/images/cars/car2.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</div>
									<div className="carousel-item">
									<Image
							src="/images/cars/car3.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</div>
									<div className="carousel-item">
									<Image
							src="/images/cars/car4.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</div>
								</div>
								<ol className="carousel-indicators">
									<li
										data-target="#carousel-thumb"
										data-slide-to="0"
										className="active"
										>
												<Image
							src="/images/cars/car1.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</li>
									<li data-target="#carousel-thumb" data-slide-to="1">
									<Image
							src="/images/cars/car2.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</li>
									<li data-target="#carousel-thumb" data-slide-to="2">
									<Image
							src="/images/cars/car3.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</li>
									<li data-target="#carousel-thumb" data-slide-to="3">
									<Image
							src="/images/cars/car4.png"
							alt="Picture of the author"
							width={150}
							height={150}
							/>
									</li>
								</ol>
							</div>
						</figure>
						<div className="offerdt">
							<h5><a href="single.html">Ferrari 488 GTB</a></h5>
							<ul>
								<li>
								<Image
							src="/images/icon1.png"
							alt="Picture of the author"
							width={15}
							height={15}
							/>
									Seats 4
								</li>
								<li>
								<Image
							src="/images/icon2.png"
							alt="Picture of the author"
							width={15}
							height={15}
							/>
									Doors 2
								</li>
								<li>
								<Image
							src="/images/icon3.png"
							alt="Picture of the author"
							width={15}
							height={15}
							/>
									Automatic
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