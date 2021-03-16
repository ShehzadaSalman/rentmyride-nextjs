
import  Head from 'next/head'
import Image from 'next/image'
import Slider from "react-slick";
import Footer from '../components/footer';
import CustomerReview from '../components/customer-review';
import {AccordionFAQ} from '../components/AccordionFAQ'
import { VideoSection } from '../components/VideoSection';
import { LuxuryWraps } from '../components/LuxuryWraps';
import { WhyChoosUs } from '../components/WhyChoosUs';
import { SearchForm } from '../components/SearchForm';


const Home = () => {
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1
	  };
	  var settingstwo = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1
	  };


  return (<>

		{/* <!-- Top Bar --> */}
		<div className="topBar">
			<ul>
				<li>
					<a href="tel:+971 55 550 5281">
						{/* <FontAwesomeIcon icon={faPhone} className="mr-1"/> */}
						
						 +971 55 550 5281  </a>
				</li>
				<li>
					<a href="mailto:info@rentmyride.ae">
						{/* <FontAwesomeIcon icon={faEnvelope} className="mr-1"/> */}
						 info@rentmyride.ae</a>
				</li>
				<li>
					{/* <FontAwesomeIcon icon={faCoins} className="mr-1"/> */}
					<select>
						<option>AED</option>
					</select>
				</li>
				<li>
					<a href="login.html">
						{/* <FontAwesomeIcon icon={faUser} className="mr-1"/> */}
						 Login</a>
				</li>
			</ul>
			<a href="#" className="plus"></a>
		</div>
		{/* <!-- Top Bar -->
		<!-- Header --> */}
		<div className="header">
			<div className="row">
				<div className="col-sm-3 col-md-3 logo">
					<a href="index.html">
						{/* <img src="images/logo.png" /> */}
						    <Image
							src="/images/logo.png"
							alt="logo"
							width={217}
							height={30}
						/>
					</a>
					<a href="#" className="openNav"><i className="fa fa-bars"></i></a>
				</div>
				<div className="col-sm-9 col-md-9">
					<nav>
						<a href="#" className="closeNav"><i className="fa fa-times"></i></a>
						<ul className="navbar">
							<li><a href="index.html" className="active">Home</a></li>
							<li><a href="car_rental.html">Car rental </a></li>
							<li><a href="car_with_driver.html">Car with driver </a></li>
							<li><a href="stretch_limo.html">Stretch Limo </a></li>
							<li><a href="#">Packages</a></li>
							<li><a href="blog.html">Blog </a></li>
							<li><a href="contact.html">Contact</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
		{/* <!-- Header -->
		<!-- Banner --> */}
		<div className="MainBanner">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-12">
						<h2>
							<span>Enjoy your journey <br />with our
							<small>Comfortable cars</small>.
							</span>
						</h2>
						<p>Serving people from last 3 years with great success.</p>
						<div className="bannerCars">
						<Image
								src="/images/bannerCars3-min.png"
								alt="Picture of the author"
								width={560}
								height={169}
							/>
							
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- Banner -->
		<!-- SearchForm --> */}
	  <SearchForm/>
		{/* <!-- SearchForm -->
		<!-- Brands --> */}
		<div className="heading">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-12">
						<h6>choose your dream Brand</h6>
						<h2>FIND CARS FOR RENT BY BRANDS</h2>
						<span><img src="images/border.png" /></span>
					</div>
				</div>
			</div>
		</div>
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
 </Slider>

	
		</div>
		{/* <!-- Brands -->
		<!-- Brands --> */}
		<div className="heading">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-12">
						<h6>choose your categories</h6>
						<h2>Car Categories</h2>
						<span><img src="images/border.png" /></span>
					</div>
				</div>
			</div>
		</div>
		<div className="catesWrap">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-12">
						<div className="categories">
							<Slider {...settings}>
							<figure>
								<a className="removeOutline" href="/cars/sports-car" tabIndex="-1">
								<Image
								className="removeOutline"
									src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/Convertible.svg "
									alt="Picture of the author"
									width={90}
									height={90}
								/>
					        	<h4>Sports Car</h4>
								</a>
							</figure>
							<figure>
								<a className="removeOutline" href="/cars/sports-car" tabIndex="-1">
								<Image
								className="removeOutline"
									src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/Convertible.svg "
									alt="Picture of the author"
									width={90}
									height={90}
								/>
					        	<h4>Sports Car</h4>
								</a>
							</figure>
							<figure>
								<a className="removeOutline" href="/cars/sports-car" tabIndex="-1">
								<Image
								className="removeOutline"
									src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/Convertible.svg "
									alt="Picture of the author"
									width={90}
									height={90}
								/>
					        	<h4>Sports Car</h4>
								</a>
							</figure>
							<figure>
								<a className="removeOutline" href="/cars/sports-car" tabIndex="-1">
								<Image
								className="removeOutline"
									src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/Convertible.svg "
									alt="Picture of the author"
									width={90}
									height={90}
								/>
					        	<h4>Sports Car</h4>
								</a>
							</figure>
							<figure>
								<a className="removeOutline" href="/cars/sports-car" tabIndex="-1">
								<Image
								className="removeOutline"
									src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/Convertible.svg "
									alt="Picture of the author"
									width={90}
									height={90}
								/>
					        	<h4>Sports Car</h4>
								</a>
							</figure>
							<figure>
								<a className="removeOutline" href="/cars/sports-car" tabIndex="-1">
								<Image
								className="removeOutline"
									src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/Convertible.svg "
									alt="Picture of the author"
									width={90}
									height={90}
								/>
					        	<h4>Sports Car</h4>
								</a>
							</figure>
							<figure>
								<a className="removeOutline" href="/cars/sports-car" tabIndex="-1">
								<Image
								className="removeOutline"
									src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/Convertible.svg "
									alt="Picture of the author"
									width={90}
									height={90}
								/>
					        	<h4>Sports Car</h4>
								</a>
							</figure>
				
							</Slider>
				
				
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- Brands -->
		<!-- Packages --> */}
		<div className="heading">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-12">
						<h6>welcome to RentMyRide</h6>
						<h2>Packages</h2>
						<span><img src="images/border.png"/></span>
					</div>
				</div>
			</div>
		</div>
		<div className="hiredCarWrap Packges">
			<div className="container">
				<div className="hiredCarss">

					<Slider {...settingstwo}>
					<div className="carItem">
						<figure>
							<a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" tabIndex="-1">
							<Image
							src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicleType/Rent-Rolls-Royce-with-Combo-Offer-in-Dubai-RentMyRide.jpg"
							alt="Picture of the author"
							width={290}
							height={200}
							/>
                          </a>                           
						</figure>
						<div className="offerdt">
							<h5>
								<a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" tabIndex="-1">Rolls Royce Wraith Combo Offer</a>
							</h5>
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

					<div className="carItem">
						<figure>
							<a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" tabIndex="-1">
							<Image
							src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicleType/Rent-Rolls-Royce-with-Combo-Offer-in-Dubai-RentMyRide.jpg"
							alt="Picture of the author"
							width={290}
							height={200}
							/>
                          </a>                           
						</figure>
						<div className="offerdt">
							<h5>
								<a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" tabIndex="-1">Rolls Royce Wraith Combo Offer</a>
							</h5>
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

					<div className="carItem">
						<figure>
							<a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" tabIndex="-1">
							<Image
							src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicleType/Rent-Rolls-Royce-with-Combo-Offer-in-Dubai-RentMyRide.jpg"
							alt="Picture of the author"
							width={290}
							height={200}
							/>
                          </a>                           
						</figure>
						<div className="offerdt">
							<h5>
								<a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" tabIndex="-1">Rolls Royce Wraith Combo Offer</a>
							</h5>
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

					<div className="carItem">
						<figure>
							<a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" tabIndex="-1">
							<Image
							src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicleType/Rent-Rolls-Royce-with-Combo-Offer-in-Dubai-RentMyRide.jpg"
							alt="Picture of the author"
							width={290}
							height={200}
							/>
                          </a>                           
						</figure>
						<div className="offerdt">
							<h5>
								<a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" tabIndex="-1">Rolls Royce Wraith Combo Offer</a>
							</h5>
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

					<div className="carItem">
						<figure>
							<a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" tabIndex="-1">
							<Image
							src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicleType/Rent-Rolls-Royce-with-Combo-Offer-in-Dubai-RentMyRide.jpg"
							alt="Picture of the author"
							width={290}
							height={200}
							/>
                          </a>                           
						</figure>
						<div className="offerdt">
							<h5>
								<a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" tabIndex="-1">Rolls Royce Wraith Combo Offer</a>
							</h5>
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

					<div className="carItem">
						<figure>
							<a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" tabIndex="-1">
							<Image
							src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicleType/Rent-Rolls-Royce-with-Combo-Offer-in-Dubai-RentMyRide.jpg"
							alt="Picture of the author"
							width={290}
							height={200}
							/>
                          </a>                           
						</figure>
						<div className="offerdt">
							<h5>
								<a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" tabIndex="-1">Rolls Royce Wraith Combo Offer</a>
							</h5>
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


					</Slider>
			
				</div>
			</div>
		<div className="heading">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-12">
						<h6>welcome to rent myride</h6>
						<h2>OUR TOP HIRED CARS</h2>
						<span><img src="images/border.png" /></span>
					</div>
				</div>
			</div>
		</div>
		<div className="hiredCarWrap">
			<div className="container">
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
			</div>
		</div>
		{/* <!--Hired Cars -->
		<!-- video --> */}
		{/* <VideoSection/> */}
		{/* <!-- video -->
		<!-- faq --> */}
		<div className="faq">
			<div className="container">
				<div className="row">
					<div className="col-sm-6 col-md-6">
						<div className="heading">
							<div className="container">
								<div className="row">
									<div className="col-sm-12 col-md-12">
										<h2>FAQ</h2>
										<span><img src="images/border.png" /></span>
									</div>
								</div>
							</div>
						</div>
			      {/* accordion */}
				  {/* <AccordionFAQ /> */}
				  {/* accordion ends here */}
					</div>
					<div className="col-sm-6 col-md-6">
						<div className="mainCar">
						<Image
								src="/images/mainCar.png"
								alt="Picture of the author"
								width={400}
								height={500}
							/>
						
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="heading">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-12">
						<h2>AS FEATURED IN</h2>
						<span><img src="images/border.png" /></span>
					</div>
				</div>
			</div>
		</div>
		<div className="newspaprs">
			<div className="container">
				<div className="row">
					<div className="col-6 col-sm-3 col-md-3">
						<div className="newss">
							<a href="#">
							    <Image
								src="/images/gulf_news_png.png"
								alt="Picture of the author"
								width={100}
								height={100}
							    />	
							</a>
						</div>
					</div>
					<div className="col-6 col-sm-3 col-md-3">
						<div className="newss">
							<a href="#">
							 <Image
								src="/images/the_national_png.png"
								alt="Picture of the author"
								width={100}
								height={100}
							    />	
							</a>
						</div>
					</div>
					<div className="col-6 col-sm-3 col-md-3">
						<div className="newss">
							<a href="#">
								<Image
								src="/images/time_out_png.png"
								alt="Picture of the author"
								width={100}
								height={100}
							    />
							
							</a>
						</div>
					</div>
					<div className="col-6 col-sm-3 col-md-3">
						<div className="newss">
							<a href="#">
								<Image
								src="/images/ahlan.jpg"
								alt="Picture of the author"
								width={100}
								height={100}
							    />
						
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	
	   {/* Customer Review */}
	    {/* <CustomerReview/> */}
	  {/* <LuxuryWraps/> */}
		{/* <!-- Hired Cars -->
		<!-- WhyChoose --> */}
		{/* <WhyChoosUs/> */}
		{/* <!-- WhyChoose -->
		<!-- footer --> */}
        {/* <Footer/> */}
		{/* <!-- footer -->
		<!--	Js Link
			============================================================--> */}
		{/* <script src="js/beautified-bundle.js"></script>
		<script>
			// Adding a video active className to the video div
			$("#carousel-thumb6 .carousel-inner")
			  .children()
			  .eq(3)
			  .addclassName("videoActive");
			
			$("#carousel-thumb6").carousel("cycle");
			
			// the functionality starts here
			let isplaying = true; // global variable to check if the video is being played or not
			$(function () {
			  // running the slider via jquery
			
			  $("#carousel-thumb6").on("slid.bs.carousel", function (e) {
			    let checactiveclassName = $(
			      "#carousel-thumb6 .carousel-inner .videoActive"
			    ).hasclassName("active");
			    if (!checactiveclassName) {
			      $("#carousel-thumb6").find("video").trigger("pause");
			      $("#carousel-thumb6").find(".video_icon").show(200);
			      isplaying = true;
			    }
			  });
			  // on click functionality to use the video in the slider
			  $(".videoplayer").click(function () {
			    if (isplaying) {
			      $(this).find("video").trigger("play");
			      $(this).find(".video_icon").hide(200);
			      $("#carousel-thumb6").carousel("pause");
			      isplaying = false;
			    } else {
			      $(this).find("video").trigger("pause");
			      $(this).find(".video_icon").show(200);
			      $("#carousel-thumb6").carousel("cycle");
			      isplaying = true;
			    }
			  });
			});
		</script> */}
	</div>
   </>
  )
}

export default Home;
