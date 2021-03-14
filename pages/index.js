
import  Head from 'next/head'
import $ from 'jquery'
import {useEffect } from 'react'

export default function Home() {


  useEffect(() => require('../public/js/custom.js'), [])


  return (<>

  <Head>
  </Head>
	{/* <head> */}
{/* 
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1, shrink-to-fit=no"
			/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="description" content="RentMYRIDE" />
		<meta name="keywords" content="" />
		<meta name="author" content="Unicoder" />
	
		<link rel="shortcut icon" href="images/favicon.png" />
		<link
			href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,700;1,400;1,700&display=swap"
			rel="stylesheet"
			/>
		<link
			href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
			rel="stylesheet"
			/>
		<link
			href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
			rel="stylesheet"
			/>
		<link
			rel="stylesheet"
			href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
			integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
			crossorigin="anonymous"
			/> */}
      {/* CSS links */}
		{/* <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
		<link rel="stylesheet" type="text/css" href="css/bootstrap-slider.css" />
		<link rel="stylesheet" type="text/css" href="css/jquery-ui.css" /> */}
		{/* <link
			rel="stylesheet"
			type="text/css"
			href="css/jquery.datetimepicker.min.css"
			/>
		<link rel="stylesheet" type="text/css" href="css/style.css" />
		<link rel="stylesheet" type ="text/css" href="css/newcustom.css"/>
	 */}
		{/* <title>RentMYRIDE</title> */}
	{/* </head> */}

		{/* <!-- Top Bar --> */}
		<div className="topBar">
			<ul>
				<li>
					<a href="tel:+971 55 550 5281"><i className="fa fa-phone"></i> +971 55 550 5281  </a>
				</li>
				<li>
					<a href="mailto:info@rentmyride.ae"><i className="fa fa-envelope"></i> info@rentmyride.ae</a>
				</li>
				<li>
					<i className="fa fa-coins"></i
						>
					<select>
						<option>AED</option>
					</select>
				</li>
				<li>
					<a href="login.html"><i className="fa fa-user"></i> Login</a>
				</li>
			</ul>
			<a href="#" className="plus"><i className="fa fa-plus"></i></a>
		</div>
		{/* <!-- Top Bar -->
		<!-- Header --> */}
		<div className="header">
			<div className="row">
				<div className="col-sm-3 col-md-3 logo">
					<a href="index.html"><img src="images/logo.png" /></a>
					<a href="#" className="openNav"><i className="fa fa-bars"></i></a>
				</div>
				<div className="col-sm-9 col-md-9">
					<nav>
						<a href="#" className="closeNav"><i className="fa fa-times"></i></a>
						<ul>
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
							<img src="images/bannerCars3-min.png" />
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- Banner -->
		<!-- SearchForm --> */}
		<div className="searchForm">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-12">
						<div className="searchTabs">
							<div id="tabs">
								<ul>
									<li>
										<a href="#tabs-1">
										<i className="fa fa-search"></i>Find a Car</a
											>
									</li>
									<li>
										<a href="#tabs-2">
										<i className="fa fa-search"></i>Find Limo & Chauffeur</a
											>
									</li>
								</ul>
								<div id="tabs-1" className="formDetails">
									<div className="rows">
										<div className="formOptions">
											<h3>LET'S FIND YOUR IDEAL CAR:</h3>
											<div className="fields">
												<input
													type="text"
													name=""
													placeholder="Type Car Name, Model, Brand, Type..."
													/>
											</div>
											<div className="fields">
												<input type="submit" name="" value="Search" />
											</div>
										</div>
										<div className="center">
											<h6>OR</h6>
										</div>
										<div className="formOptions">
											<h3>
												FIND BY EXACT DATE & TIME:
												<small>Minimum 1 day, Maximum 30 days</small>
											</h3>
											<div className="fieldset">
												<div className="fields">
													<i className="fa fa-calendar"></i>
													<input
														className="datepicker"
														type="text"
														name=""
														placeholder="From Date"
														/>
												</div>
												<div className="fields">
													<i className="fa fa-calendar"></i>
													<input
														type="text"
														className="datepicker"
														name=""
														placeholder="To Date"
														/>
												</div>
											</div>
											<div className="fieldset">
												<div className="fields">
													<i className="fa fa-clock"></i>
													<input
														type="text"
														className="timepicker"
														name=""
														placeholder="From Time"
														/>
												</div>
												<div className="fields">
													<i className="fa fa-clock"></i>
													<input
														type="text"
														className="timepicker"
														name=""
														placeholder="To Time"
														/>
												</div>
											</div>
											<div className="fields">
												<input type="submit" name="" value="Search" />
											</div>
										</div>
									</div>
								</div>
								<div id="tabs-2" className="formDetails">
									<div className="rows">
										<div className="formOptions">
											<h3>LET'S FIND YOUR IDEAL LIMOUSINE:</h3>
											<div className="fields">
												<input
													type="text"
													name=""
													placeholder="Type Car Name, Model, Brand, Type..."
													/>
											</div>
											<div className="fields">
												<input type="submit" name="" value="Search" />
											</div>
										</div>
										<div className="center">
											<h6>OR</h6>
										</div>
										<div className="formOptions">
											<h3>
												FIND BY EXACT DATE & TIME:
												<small>Minimum 1 day, Maximum 30 days</small>
											</h3>
											<div className="searchtype">
												<label>
												<input type="radio" name="type" />
												<span><i className="fa fa-check"></i>Hourly</span>
												</label>
												<label>
												<input type="radio" name="type" />
												<span><i className="fa fa-check"></i>Daily</span>
												</label>
												<label>
												<input type="radio" name="type" />
												<span><i className="fa fa-check"></i>Weekly</span>
												</label>
											</div>
											<div className="fieldset">
												<div className="fields">
													<i className="fa fa-calendar"></i>
													<input
														className="datepicker"
														type="text"
														name=""
														placeholder="From Date"
														/>
												</div>
												<div className="fields">
													<i className="fa fa-calendar"></i>
													<input
														type="text"
														className="datepicker"
														name=""
														placeholder="To Date"
														/>
												</div>
											</div>
											<div className="fieldset">
												<div className="fields">
													<i className="fa fa-clock"></i>
													<input
														type="text"
														className="timepicker"
														name=""
														placeholder="From Time"
														/>
												</div>
												<div className="fields">
													<i className="fa fa-clock"></i>
													<input
														type="text"
														className="timepicker"
														name=""
														placeholder="To Time"
														/>
												</div>
											</div>
											<div className="fields">
												<input type="submit" name="" value="Search" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
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
			<div className="images">
				<figure>
					<a href="/cars/limousine/rent-a-dodge-in-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Dodge-RentMyRide.png " alt="Dodge"/></a>
				</figure>
				<figure>
					<a href="/cars/limousine/rent-infiniti-in-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Infiniti-RentMyRide.png " alt="infiniti"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/rent-cadillac-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Cadillac-RentMyRide.png " alt="Cadillac"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/rent-a-toyota-in-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Toyota-RentMyRide.png " alt="Toyota"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/rent-a-ford-in-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Ford-RentMyRide.png " alt="Ford"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/bugatti-rental-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Bugatti-RentMyRide.png " alt="Bugatti"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/mini-cooper-rental-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Mini-RentMyRide.png " alt="Mini"/></a>
				</figure>
				<figure>
					<a href="/cars/limousine/rent-a-lincoln-in-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Lincoln-RentMyRide.png " alt="Lincoln"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/gmc" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/GMC-RentMyRide.png " alt="GMC"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/polaris" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Polaris-RentMyRide.png " alt="Polaris"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/rent-lamborghini-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Lamborghini-Rent-MyRide.png " alt="Lamborghini"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/rent-audi-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Audi-RentMyRide.png " alt="Audi"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/bmw-rental-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/BMW-Rent-MyRide.png " alt="BMW"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/rent-ferrari-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Ferrari-RentMyRide.png " alt="Ferrari"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/rent-a-porsche-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Porsche-RentMyRide.png " alt="Porsche"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/bentley-rental-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Bentley-RentMyRide.png " alt="Bentley"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/rolls-royce-rental-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Rolls-Royce-RentMyRide.png " alt="Rolls Royce"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/range-rover-rental-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Range-Rover-RentMyRide.png " alt="Range Rover"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/rent-mercedes-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Mercedes-Benz-RentMyRide.png " alt="Mercedes-Benz"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/lexus-for-rent-in-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Lexus-RentMyRide.png " alt="Lexus"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/rent-maserati-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Maserati-RentMyRide.png " alt="Maserati"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/rent-mclaren-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/McLaren-RentMyRide.png " alt="Mclaren"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/rent-nissan-in-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Nissan-RentMyRide.png " alt="Nissan"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/rent-chevrolet-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Chevrolet-RentMyRide.png " alt="Chevrolet"/></a>
				</figure>
				<figure>
					<a href="/cars/limousine/rent-chrysler-in-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Chrysler-RentMyRide.png " alt="Chrysler"/></a>
				</figure>
				<figure>
					<a href="/cars/limousine/rent-a-dodge-in-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Dodge-RentMyRide.png " alt="Dodge"/></a>
				</figure>
				<figure>
					<a href="/cars/limousine/rent-infiniti-in-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Infiniti-RentMyRide.png " alt="infiniti"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/rent-cadillac-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Cadillac-RentMyRide.png " alt="Cadillac"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/rent-a-toyota-in-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Toyota-RentMyRide.png " alt="Toyota"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/rent-a-ford-in-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Ford-RentMyRide.png " alt="Ford"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/bugatti-rental-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Bugatti-RentMyRide.png " alt="Bugatti"/></a>
				</figure>
				<figure >
					<a href="/cars/car-rental/mini-cooper-rental-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Mini-RentMyRide.png " alt="Mini"/></a>
				</figure>
				<figure>
					<a href="/cars/limousine/rent-a-lincoln-in-dubai" className="brend-item" tabindex="0"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Lincoln-RentMyRide.png " alt="Lincoln"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/gmc" className="brend-item" tabindex="0"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/GMC-RentMyRide.png " alt="GMC"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/polaris" className="brend-item" tabindex="0"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Polaris-RentMyRide.png " alt="Polaris"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/rent-lamborghini-dubai" className="brend-item" tabindex="0"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Lamborghini-Rent-MyRide.png " alt="Lamborghini"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/rent-audi-dubai" className="brend-item" tabindex="0"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Audi-RentMyRide.png " alt="Audi"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/bmw-rental-dubai" className="brend-item" tabindex="0"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/BMW-Rent-MyRide.png " alt="BMW"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/rent-ferrari-dubai" className="brend-item" tabindex="0"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Ferrari-RentMyRide.png " alt="Ferrari"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/rent-a-porsche-dubai" className="brend-item" tabindex="0"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Porsche-RentMyRide.png " alt="Porsche"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/bentley-rental-dubai" className="brend-item" tabindex="0"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Bentley-RentMyRide.png " alt="Bentley"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/rolls-royce-rental-dubai" className="brend-item" tabindex="0"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Rolls-Royce-RentMyRide.png " alt="Rolls Royce"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/range-rover-rental-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Range-Rover-RentMyRide.png " alt="Range Rover"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/rent-mercedes-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Mercedes-Benz-RentMyRide.png " alt="Mercedes-Benz"/></a>
				</figure>
				<figure>
					<a href="/cars/car-rental/lexus-for-rent-in-dubai" className="brend-item" tabindex="-1"><img style={{width:'50%'}} src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Brand/Lexus-RentMyRide.png " alt="Lexus"/></a>
				</figure>
			</div>
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
							<figure>
								<a className="removeOutline" href="/cars/sports-car" tabindex="-1">
									<img className="removeOutline" src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/SportsCar.svg " alt="Sports Car"/>
									<h4>Sports Car</h4>
								</a>
							</figure>
							<figure>
								<a className="removeOutline" href="/cars/mini-van" tabindex="-1">
									<img className="removeOutline" src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/Mini-Van.svg " alt="Mini Van"/>
									<h4>Mini Van</h4>
								</a>
							</figure>
							<figure>
								<a className="removeOutline" href="/cars/crossover" tabindex="-1">
									<img className="removeOutline" src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/Crossover.svg " alt="Crossover"/>
									<h4>Crossover</h4>
								</a>
							</figure>
							<figure>
								<a className="removeOutline" href="/cars/luxury-truck" tabindex="-1">
									<img className="removeOutline" src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/luxury-truck.png " alt="Luxury Truck"/>
									<h4>Luxury Truck</h4>
								</a>
							</figure>
							<figure>
								<a className="removeOutline" href="/cars/limousine" tabindex="-1">
									<img className="removeOutline" src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/limo-01.svg " alt="Limousine"/>
									<h4>Limousine</h4>
								</a>
							</figure>
							<figure>
								<a className="removeOutline" href="/cars/sedan" tabindex="-1">
									<img className="removeOutline" src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/Sedan.svg " alt="Sedan"/>
									<h4>Sedan</h4>
								</a>
							</figure>
							<figure>
								<a className="removeOutline" href="/cars/convertible" tabindex="-1">
									<img className="removeOutline" src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/Convertible.svg " alt="Convertible"/>
									<h4>Convertible</h4>
								</a>
							</figure>
							<figure>
								<a className="removeOutline" href="/cars/suv" tabindex="-1">
									<img className="removeOutline" src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/SUV.svg " alt="SUV"/>
									<h4>SUV</h4>
								</a>
							</figure>
							<figure>
								<a className="removeOutline" href="/cars/coupe" tabindex="0">
									<img className="removeOutline" src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/Coupe.svg " alt="Coupe"/>
									<h4>Coupe</h4>
								</a>
							</figure>
							<figure>
								<a className="removeOutline" href="/cars/sports-car" tabindex="0">
									<img className="removeOutline" src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/SportsCar.svg " alt="Sports Car"/>
									<h4>Sports Car</h4>
								</a>
							</figure>
							<figure>
								<a className="removeOutline" href="/cars/mini-van" tabindex="0">
									<img className="removeOutline" src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/Mini-Van.svg " alt="Mini Van"/>
									<h4>Mini Van</h4>
								</a>
							</figure>
							<figure>
								<a className="removeOutline" href="/cars/crossover" tabindex="0">
									<img className="removeOutline" src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/Crossover.svg " alt="Crossover"/>
									<h4>Crossover</h4>
								</a>
							</figure>
							<figure>
								<a className="removeOutline" href="/cars/luxury-truck" tabindex="0">
									<img className="removeOutline" src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/luxury-truck.png " alt="Luxury Truck"/>
									<h4>Luxury Truck</h4>
								</a>
							</figure>
							<figure>
								<a className="removeOutline" href="/cars/limousine" tabindex="-1">
									<img className="removeOutline" src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/limo-01.svg " alt="Limousine"/>
									<h4>Limousine</h4>
								</a>
							</figure>
							<figure>
								<a className="removeOutline" href="/cars/sedan" tabindex="-1">
									<img className="removeOutline" src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/Sedan.svg " alt="Sedan"/>
									<h4>Sedan</h4>
								</a>
							</figure>
							<figure>
								<a className="removeOutline" href="/cars/convertible" tabindex="-1">
									<img className="removeOutline" src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/Convertible.svg " alt="Convertible"/>
									<h4>Convertible</h4>
								</a>
							</figure>
							<figure>
								<a className="removeOutline" href="/cars/suv" tabindex="-1">
									<img className="removeOutline" src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/SUV.svg " alt="SUV"/>
									<h4>SUV</h4>
								</a>
							</figure>
							<figure>
								<a className="removeOutline" href="/cars/coupe" tabindex="-1">
									<img className="removeOutline" src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/Coupe.svg " alt="Coupe"/>
									<h4>Coupe</h4>
								</a>
							</figure>
							<figure>
								<a className="removeOutline" href="/cars/sports-car" tabindex="-1">
									<img className="removeOutline" src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/SportsCar.svg " alt="Sports Car"/>
									<h4>Sports Car</h4>
								</a>
							</figure>
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
					<div className="carItem">
						<figure>
							<a href="/cars/car-rental/rolls-royce-rental-dubai/rolls-royce-ghost-with-2-hours-yacht-offer" tabindex="-1"><img src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicleType/Rent-Rolls-Royce-Ghost-with-2-Hours-Yacht-in-Dubai-RentMyRide.jpg" alt="Rolls Royce Ghost with 2 Hours Yacht Offer"/></a>                           
						</figure>
						<div className="offerdt">
							<h5>
								<a href="/cars/car-rental/rolls-royce-rental-dubai/rolls-royce-ghost-with-2-hours-yacht-offer" tabindex="-1">Rolls Royce Ghost with 2 Hours Yacht Offer</a>
							</h5>
							<ul>
								<li>
									<img src="images/icon1-min.png"/>
									Seats 4
								</li>
								<li>
									<img src="images/icon2-min.png"/>
									Doors 4
								</li>
								<li>
									<img src="images/icon3-min.png"/>
									Automatic
								</li>
							</ul>
							<p>Price: <span><span className="currency">AED </span> 2,500 <span className="day"> / Day</span></span></p>
							<div className="fieldWr">
								<label>
								<input type="checkbox" name="" tabindex="-1"/>
								<span>AED 3,000 Deposit</span>
								</label>
							</div>
							<div className="terms">
								<h6>Terms &amp; Conditions</h6>
								<p></p>
								<p>test</p>
								<p></p>
								<label><input type="checkbox" onchange="valueChangeds()" className="termCheck" name="" tabindex="-1"/><span><cite><i className="fa fa-check"></i></cite>Accept the Terms &amp; Conditions</span></label>
							</div>
							<a href="/cars/car-rental/rolls-royce-rental-dubai/rolls-royce-ghost-with-2-hours-yacht-offer" className="book" tabindex="-1">Book Now</a>
						</div>
					</div>
					<div className="carItem">
						<figure>
							<a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" tabindex="-1"><img src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicleType/Rent-Rolls-Royce-with-Combo-Offer-in-Dubai-RentMyRide.jpg" alt="Rolls Royce Wraith Combo Offer"/></a>                           
						</figure>
						<div className="offerdt">
							<h5>
								<a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" tabindex="-1">Rolls Royce Wraith Combo Offer</a>
							</h5>
							<ul>
								<li>
									<img src="images/icon1-min.png"/>
									Seats 4
								</li>
								<li>
									<img src="images/icon2-min.png"/>
									Doors 2
								</li>
								<li>
									<img src="images/icon3-min.png"/>
									Automatic
								</li>
							</ul>
							<p>Price: <span><span className="currency">AED </span> 7,000 <span className="day"> / Day</span></span></p>
							<div className="fieldWr">
								<label>
								<input type="checkbox" name="" tabindex="-1"/>
								<span>AED 3,000 Deposit</span>
								</label>
							</div>
							<div className="terms">
								<h6>Terms &amp; Conditions</h6>
								<p></p>
								<p>test</p>
								<p></p>
								<label><input type="checkbox" onchange="valueChangeds()" className="termCheck" name="" tabindex="-1"/><span><cite><i className="fa fa-check"></i></cite>Accept the Terms &amp; Conditions</span></label>
							</div>
							<a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" className="book" tabindex="-1">Book Now</a>
						</div>
					</div>
					<div className="carItem">
						<figure>
							<a href="/cars/car-rental/rolls-royce-rental-dubai/rent-rolls-royce-wraith-with-1-person-helicopter-tour-in-dubai" tabindex="-1"><img src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicleType/Rent-Rolls-Royce-Wraith-with-1Person-Helicopter-Tour-Dubai-RentMyRIdeDubai.jpg" alt="Rolls Royce Wraith with  1/P Free 12mins  Helicopter Tour"/></a>                           
						</figure>
						<div className="offerdt">
							<h5>
								<a href="/cars/car-rental/rolls-royce-rental-dubai/rent-rolls-royce-wraith-with-1-person-helicopter-tour-in-dubai" tabindex="-1">Rolls Royce Wraith with  1/P Free 12mins  Helicopter Tour</a>
							</h5>
							<ul>
								<li>
									<img src="images/icon1-min.png"/>
									Seats 4
								</li>
								<li>
									<img src="images/icon2-min.png"/>
									Doors 2
								</li>
								<li>
									<img src="images/icon3-min.png"/>
									Automatic
								</li>
							</ul>
							<p>Price: <span><span className="currency">AED </span> 4,000 <span className="day"> / Day</span></span></p>
							<div className="fieldWr">
								<label>
								<input type="checkbox" name="" tabindex="-1"/>
								<span>AED 3,000 Deposit</span>
								</label>
							</div>
							<div className="terms">
								<h6>Terms &amp; Conditions</h6>
								<p></p>
								<p>test</p>
								<p></p>
								<label><input type="checkbox" onchange="valueChangeds()" className="termCheck" name="" tabindex="-1"/><span><cite><i className="fa fa-check"></i></cite>Accept the Terms &amp; Conditions</span></label>
							</div>
							<a href="/cars/car-rental/rolls-royce-rental-dubai/rent-rolls-royce-wraith-with-1-person-helicopter-tour-in-dubai" className="book" tabindex="-1">Book Now</a>
						</div>
					</div>
					<div className="carItem">
						<figure>
							<a href="/cars/car-rental/rent-lamborghini-dubai/rent-lamborghini-enjoy-iconic-views-of-dubai-in-a-free-helicopter-ride" tabindex="-1"><img src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicleType/Lamourghini-and-halicopter.jpg" alt="Rent  Lamborghini &amp; Enjoy Iconic Views of Dubai  in a Free  Helicopter Ride"/></a>                           
						</figure>
						<div className="offerdt">
							<h5>
								<a href="/cars/car-rental/rent-lamborghini-dubai/rent-lamborghini-enjoy-iconic-views-of-dubai-in-a-free-helicopter-ride" tabindex="-1">Rent  Lamborghini &amp; Enjoy Iconic Views of Dubai  in a Free  Helicopter Ride</a>
							</h5>
							<ul>
								<li>
									<img src="images/icon1-min.png"/>
									Seats 2
								</li>
								<li>
									<img src="images/icon2-min.png"/>
									Doors 2
								</li>
								<li>
									<img src="images/icon3-min.png"/>
									Automatic
								</li>
							</ul>
							<p>Price: <span><span className="currency">AED </span> 3,400 <span className="day"> / Day</span></span></p>
							<div className="fieldWr">
								<label>
								<input type="checkbox" name="" tabindex="-1"/>
								<span>AED 3,000 Deposit</span>
								</label>
							</div>
							<div className="terms">
								<h6>Terms &amp; Conditions</h6>
								<p></p>
								<p>test</p>
								<p></p>
								<label><input type="checkbox" onchange="valueChangeds()" className="termCheck" name="" tabindex="-1"/><span><cite><i className="fa fa-check"></i></cite>Accept the Terms &amp; Conditions</span></label>
							</div>
							<a href="/cars/car-rental/rent-lamborghini-dubai/rent-lamborghini-enjoy-iconic-views-of-dubai-in-a-free-helicopter-ride" className="book" tabindex="-1">Book Now</a>
						</div>
					</div>
					<div className="carItem">
						<figure>
							<a href="/cars/car-rental/rent-ferrari-dubai/rent-a-ferrari-get-1-free-ticket-for-the-adventurous-ferrari-world" tabindex="-1"><img src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicleType/Rent-a-Ferrari-and-ferrari-world.jpg" alt="Rent a Ferrari &amp; Get 1 Free Ticket for the Adventurous Ferrari World"/></a>                           
						</figure>
						<div className="offerdt">
							<h5>
								<a href="/cars/car-rental/rent-ferrari-dubai/rent-a-ferrari-get-1-free-ticket-for-the-adventurous-ferrari-world" tabindex="-1">Rent a Ferrari &amp; Get 1 Free Ticket for the Adventurous Ferrari World</a>
							</h5>
							<ul>
								<li>
									<img src="images/icon1-min.png"/>
									Seats 2
								</li>
								<li>
									<img src="images/icon2-min.png"/>
									Doors 2
								</li>
								<li>
									<img src="images/icon3-min.png"/>
									Automatic
								</li>
							</ul>
							<p>Price: <span><span className="currency">AED </span> 3,400 <span className="day"> / Day</span></span></p>
							<div className="fieldWr">
								<label>
								<input type="checkbox" name="" tabindex="-1"/>
								<span>AED 3,000 Deposit</span>
								</label>
							</div>
							<div className="terms">
								<h6>Terms &amp; Conditions</h6>
								<p></p>
								<p>test</p>
								<p></p>
								<label><input type="checkbox" onchange="valueChangeds()" className="termCheck" name="" tabindex="-1"/><span><cite><i className="fa fa-check"></i></cite>Accept the Terms &amp; Conditions</span></label>
							</div>
							<a href="/cars/car-rental/rent-ferrari-dubai/rent-a-ferrari-get-1-free-ticket-for-the-adventurous-ferrari-world" className="book" tabindex="-1">Book Now</a>
						</div>
					</div>
					<div className="carItem">
						<figure>
							<a href="/cars/car-rental/rent-ferrari-dubai/rent-ferrari-lusso-visit-burj-khalifa-with-1-free-ticket" tabindex="-1"><img src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicleType/Rent-a-Ferrari.jpg" alt="Rent  Ferrari Lusso &amp; visit Burj Khalifa with 1 Free Ticket"/></a>                           
						</figure>
						<div className="offerdt">
							<h5>
								<a href="/cars/car-rental/rent-ferrari-dubai/rent-ferrari-lusso-visit-burj-khalifa-with-1-free-ticket" tabindex="-1">Rent  Ferrari Lusso &amp; visit Burj Khalifa with 1 Free Ticket</a>
							</h5>
							<ul>
								<li>
									<img src="images/icon1-min.png"/>
									Seats 4
								</li>
								<li>
									<img src="images/icon2-min.png"/>
									Doors 2
								</li>
								<li>
									<img src="images/icon3-min.png"/>
									Automatic
								</li>
							</ul>
							<p>Price: <span><span className="currency">AED </span> 4,000 <span className="day"> / Day</span></span></p>
							<div className="fieldWr">
								<label>
								<input type="checkbox" name="" tabindex="-1"/>
								<span>AED 3,000 Deposit</span>
								</label>
							</div>
							<div className="terms">
								<h6>Terms &amp; Conditions</h6>
								<p></p>
								<p>test</p>
								<p></p>
								<label><input type="checkbox" onchange="valueChangeds()" className="termCheck" name="" tabindex="-1"/><span><cite><i className="fa fa-check"></i></cite>Accept the Terms &amp; Conditions</span></label>
							</div>
							<a href="/cars/car-rental/rent-ferrari-dubai/rent-ferrari-lusso-visit-burj-khalifa-with-1-free-ticket" className="book" tabindex="-1">Book Now</a>
						</div>
					</div>
					<div className="carItem">
						<figure>
							<a href="/cars/car-rental/rolls-royce-rental-dubai/rolls-royce-ghost-with-2-hours-yacht-offer" tabindex="0"><img src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicleType/Rent-Rolls-Royce-Ghost-with-2-Hours-Yacht-in-Dubai-RentMyRide.jpg" alt="Rolls Royce Ghost with 2 Hours Yacht Offer"/></a>                           
						</figure>
						<div className="offerdt">
							<h5>
								<a href="/cars/car-rental/rolls-royce-rental-dubai/rolls-royce-ghost-with-2-hours-yacht-offer" tabindex="0">Rolls Royce Ghost with 2 Hours Yacht Offer</a>
							</h5>
							<ul>
								<li>
									<img src="images/icon1-min.png"/>
									Seats 4
								</li>
								<li>
									<img src="images/icon2-min.png"/>
									Doors 4
								</li>
								<li>
									<img src="images/icon3-min.png"/>
									Automatic
								</li>
							</ul>
							<p>Price: <span><span className="currency">AED </span> 2,500 <span className="day"> / Day</span></span></p>
							<div className="fieldWr">
								<label>
								<input type="checkbox" name="" tabindex="0"/>
								<span>AED 3,000 Deposit</span>
								</label>
							</div>
							<div className="terms">
								<h6>Terms &amp; Conditions</h6>
								<p></p>
								<p>test</p>
								<p></p>
								<label><input type="checkbox" onchange="valueChangeds()" className="termCheck" name="" tabindex="0"/><span><cite><i className="fa fa-check"></i></cite>Accept the Terms &amp; Conditions</span></label>
							</div>
							<a href="/cars/car-rental/rolls-royce-rental-dubai/rolls-royce-ghost-with-2-hours-yacht-offer" className="book" tabindex="0">Book Now</a>
						</div>
					</div>
					<div className="carItem">
						<figure>
							<a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" tabindex="0"><img src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicleType/Rent-Rolls-Royce-with-Combo-Offer-in-Dubai-RentMyRide.jpg" alt="Rolls Royce Wraith Combo Offer"/></a>                           
						</figure>
						<div className="offerdt">
							<h5>
								<a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" tabindex="0">Rolls Royce Wraith Combo Offer</a>
							</h5>
							<ul>
								<li>
									<img src="images/icon1-min.png"/>
									Seats 4
								</li>
								<li>
									<img src="images/icon2-min.png"/>
									Doors 2
								</li>
								<li>
									<img src="images/icon3-min.png"/>
									Automatic
								</li>
							</ul>
							<p>Price: <span><span className="currency">AED </span> 7,000 <span className="day"> / Day</span></span></p>
							<div className="fieldWr">
								<label>
								<input type="checkbox" name="" tabindex="0"/>
								<span>AED 3,000 Deposit</span>
								</label>
							</div>
							<div className="terms">
								<h6>Terms &amp; Conditions</h6>
								<p></p>
								<p>test</p>
								<p></p>
								<label><input type="checkbox" onchange="valueChangeds()" className="termCheck" name="" tabindex="0"/><span><cite><i className="fa fa-check"></i></cite>Accept the Terms &amp; Conditions</span></label>
							</div>
							<a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" className="book" tabindex="0">Book Now</a>
						</div>
					</div>
					<div className="carItem">
						<figure>
							<a href="/cars/car-rental/rolls-royce-rental-dubai/rent-rolls-royce-wraith-with-1-person-helicopter-tour-in-dubai" tabindex="0"><img src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicleType/Rent-Rolls-Royce-Wraith-with-1Person-Helicopter-Tour-Dubai-RentMyRIdeDubai.jpg" alt="Rolls Royce Wraith with  1/P Free 12mins  Helicopter Tour"/></a>                           
						</figure>
						<div className="offerdt">
							<h5>
								<a href="/cars/car-rental/rolls-royce-rental-dubai/rent-rolls-royce-wraith-with-1-person-helicopter-tour-in-dubai" tabindex="0">Rolls Royce Wraith with  1/P Free 12mins  Helicopter Tour</a>
							</h5>
							<ul>
								<li>
									<img src="images/icon1-min.png"/>
									Seats 4
								</li>
								<li>
									<img src="images/icon2-min.png"/>
									Doors 2
								</li>
								<li>
									<img src="images/icon3-min.png"/>
									Automatic
								</li>
							</ul>
							<p>Price: <span><span className="currency">AED </span> 4,000 <span className="day"> / Day</span></span></p>
							<div className="fieldWr">
								<label>
								<input type="checkbox" name="" tabindex="0"/>
								<span>AED 3,000 Deposit</span>
								</label>
							</div>
							<div className="terms">
								<h6>Terms &amp; Conditions</h6>
								<p></p>
								<p>test</p>
								<p></p>
								<label><input type="checkbox" onchange="valueChangeds()" className="termCheck" name="" tabindex="0"/><span><cite><i className="fa fa-check"></i></cite>Accept the Terms &amp; Conditions</span></label>
							</div>
							<a href="/cars/car-rental/rolls-royce-rental-dubai/rent-rolls-royce-wraith-with-1-person-helicopter-tour-in-dubai" className="book" tabindex="0">Book Now</a>
						</div>
					</div>
					<div className="carItem">
						<figure>
							<a href="/cars/car-rental/rent-lamborghini-dubai/rent-lamborghini-enjoy-iconic-views-of-dubai-in-a-free-helicopter-ride" tabindex="-1"><img src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicleType/Lamourghini-and-halicopter.jpg" alt="Rent  Lamborghini &amp; Enjoy Iconic Views of Dubai  in a Free  Helicopter Ride"/></a>                           
						</figure>
						<div className="offerdt">
							<h5>
								<a href="/cars/car-rental/rent-lamborghini-dubai/rent-lamborghini-enjoy-iconic-views-of-dubai-in-a-free-helicopter-ride" tabindex="-1">Rent  Lamborghini &amp; Enjoy Iconic Views of Dubai  in a Free  Helicopter Ride</a>
							</h5>
							<ul>
								<li>
									<img src="images/icon1-min.png"/>
									Seats 2
								</li>
								<li>
									<img src="images/icon2-min.png"/>
									Doors 2
								</li>
								<li>
									<img src="images/icon3-min.png"/>
									Automatic
								</li>
							</ul>
							<p>Price: <span><span className="currency">AED </span> 3,400 <span className="day"> / Day</span></span></p>
							<div className="fieldWr">
								<label>
								<input type="checkbox" name="" tabindex="-1"/>
								<span>AED 3,000 Deposit</span>
								</label>
							</div>
							<div className="terms">
								<h6>Terms &amp; Conditions</h6>
								<p></p>
								<p>test</p>
								<p></p>
								<label><input type="checkbox" onchange="valueChangeds()" className="termCheck" name="" tabindex="-1"/><span><cite><i className="fa fa-check"></i></cite>Accept the Terms &amp; Conditions</span></label>
							</div>
							<a href="/cars/car-rental/rent-lamborghini-dubai/rent-lamborghini-enjoy-iconic-views-of-dubai-in-a-free-helicopter-ride" className="book" tabindex="-1">Book Now</a>
						</div>
					</div>
					<div className="carItem">
						<figure>
							<a href="/cars/car-rental/rent-ferrari-dubai/rent-a-ferrari-get-1-free-ticket-for-the-adventurous-ferrari-world" tabindex="-1"><img src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicleType/Rent-a-Ferrari-and-ferrari-world.jpg" alt="Rent a Ferrari &amp; Get 1 Free Ticket for the Adventurous Ferrari World"/></a>                           
						</figure>
						<div className="offerdt">
							<h5>
								<a href="/cars/car-rental/rent-ferrari-dubai/rent-a-ferrari-get-1-free-ticket-for-the-adventurous-ferrari-world" tabindex="-1">Rent a Ferrari &amp; Get 1 Free Ticket for the Adventurous Ferrari World</a>
							</h5>
							<ul>
								<li>
									<img src="images/icon1-min.png"/>
									Seats 2
								</li>
								<li>
									<img src="images/icon2-min.png"/>
									Doors 2
								</li>
								<li>
									<img src="images/icon3-min.png"/>
									Automatic
								</li>
							</ul>
							<p>Price: <span><span className="currency">AED </span> 3,400 <span className="day"> / Day</span></span></p>
							<div className="fieldWr">
								<label>
								<input type="checkbox" name="" tabindex="-1"/>
								<span>AED 3,000 Deposit</span>
								</label>
							</div>
							<div className="terms">
								<h6>Terms &amp; Conditions</h6>
								<p></p>
								<p>test</p>
								<p></p>
								<label><input type="checkbox" onchange="valueChangeds()" className="termCheck" name="" tabindex="-1"/><span><cite><i className="fa fa-check"></i></cite>Accept the Terms &amp; Conditions</span></label>
							</div>
							<a href="/cars/car-rental/rent-ferrari-dubai/rent-a-ferrari-get-1-free-ticket-for-the-adventurous-ferrari-world" className="book" tabindex="-1">Book Now</a>
						</div>
					</div>
					<div className="carItem">
						<figure>
							<a href="/cars/car-rental/rent-ferrari-dubai/rent-ferrari-lusso-visit-burj-khalifa-with-1-free-ticket" tabindex="-1"><img src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicleType/Rent-a-Ferrari.jpg" alt="Rent  Ferrari Lusso &amp; visit Burj Khalifa with 1 Free Ticket"/></a>                           
						</figure>
						<div className="offerdt">
							<h5>
								<a href="/cars/car-rental/rent-ferrari-dubai/rent-ferrari-lusso-visit-burj-khalifa-with-1-free-ticket" tabindex="-1">Rent  Ferrari Lusso &amp; visit Burj Khalifa with 1 Free Ticket</a>
							</h5>
							<ul>
								<li>
									<img src="images/icon1-min.png"/>
									Seats 4
								</li>
								<li>
									<img src="images/icon2-min.png"/>
									Doors 2
								</li>
								<li>
									<img src="images/icon3-min.png"/>
									Automatic
								</li>
							</ul>
							<p>Price: <span><span className="currency">AED </span> 4,000 <span className="day"> / Day</span></span></p>
							<div className="fieldWr">
								<label>
								<input type="checkbox" name="" tabindex="-1"/>
								<span>AED 3,000 Deposit</span>
								</label>
							</div>
							<div className="terms">
								<h6>Terms &amp; Conditions</h6>
								<p></p>
								<p>test</p>
								<p></p>
								<label><input type="checkbox" onchange="valueChangeds()" className="termCheck" name="" tabindex="-1"/><span><cite><i className="fa fa-check"></i></cite>Accept the Terms &amp; Conditions</span></label>
							</div>
							<a href="/cars/car-rental/rent-ferrari-dubai/rent-ferrari-lusso-visit-burj-khalifa-with-1-free-ticket" className="book" tabindex="-1">Book Now</a>
						</div>
					</div>
				</div>
			</div>
	
		{/* <!--Hired Cars -->
		<!-- Offer -->
		<!--<div className="lattestOffers">-->
		<!--  <div className="heading">-->
		<!--    <div className="container">-->
		<!--      <div className="row">-->
		<!--        <div className="col-sm-12 col-md-12">-->
		<!--          <h2>Latest offers</h2>-->
		<!--          <span><img src="images/border.png" /></span>-->
		<!--        </div>-->
		<!--      </div>-->
		<!--    </div>-->
		<!--  </div>-->
		<!--  <div className="offersec">-->
		<!--    <div className="offerWraps">-->
		<!--      <div className="offer">-->
		<!--        <a href="#">-->
		<!--          <figure>-->
		<!--            <a href="single.html"><img src="images/offer1.png" /></a>-->
		<!--          </figure>-->
		<!--          <div className="offerdt">-->
		<!--            <h5>Bentley Continental GT</h5>-->
		<!--            <p>AED 2,800 / Day</p>-->
		<!--            <ul>-->
		<!--              <li>-->
		<!--                <img src="images/icon1.png" />-->
		<!--                Seats 4-->
		<!--              </li>-->
		<!--              <li>-->
		<!--                <img src="images/icon2.png" />-->
		<!--                Doors 2-->
		<!--              </li>-->
		<!--              <li>-->
		<!--                <img src="images/icon3.png" />-->
		<!--                Automatic-->
		<!--              </li>-->
		<!--            </ul>-->
		<!--          </div>-->
		<!--        </a>-->
		<!--      </div>-->
		<!--      <div className="offer">-->
		<!--        <a href="#">-->
		<!--          <figure>-->
		<!--            <a href="single.html"><img src="images/offer2.png" /></a>-->
		<!--          </figure>-->
		<!--          <div className="offerdt">-->
		<!--            <h5>Bentley Continental GT</h5>-->
		<!--            <p>AED 2,800 / Day</p>-->
		<!--            <ul>-->
		<!--              <li>-->
		<!--                <img src="images/icon1.png" />-->
		<!--                Seats 4-->
		<!--              </li>-->
		<!--              <li>-->
		<!--                <img src="images/icon2.png" />-->
		<!--                Doors 2-->
		<!--              </li>-->
		<!--              <li>-->
		<!--                <img src="images/icon3.png" />-->
		<!--                Automatic-->
		<!--              </li>-->
		<!--            </ul>-->
		<!--          </div>-->
		<!--        </a>-->
		<!--      </div>-->
		<!--      <div className="offer">-->
		<!--        <a href="#">-->
		<!--          <figure>-->
		<!--            <a href="single.html"><img src="images/offer3.png" /></a>-->
		<!--          </figure>-->
		<!--          <div className="offerdt">-->
		<!--            <h5>Bentley Continental GT</h5>-->
		<!--            <p>AED 2,800 / Day</p>-->
		<!--            <ul>-->
		<!--              <li>-->
		<!--                <img src="images/icon1.png" />-->
		<!--                Seats 4-->
		<!--              </li>-->
		<!--              <li>-->
		<!--                <img src="images/icon2.png" />-->
		<!--                Doors 2-->
		<!--              </li>-->
		<!--              <li>-->
		<!--                <img src="images/icon3.png" />-->
		<!--                Automatic-->
		<!--              </li>-->
		<!--            </ul>-->
		<!--          </div>-->
		<!--        </a>-->
		<!--      </div>-->
		<!--      <div className="offer">-->
		<!--        <a href="#">-->
		<!--          <figure>-->
		<!--            <a href="single.html"><img src="images/offer1.png" /></a>-->
		<!--          </figure>-->
		<!--          <div className="offerdt">-->
		<!--            <h5>Bentley Continental GT</h5>-->
		<!--            <p>AED 2,800 / Day</p>-->
		<!--            <ul>-->
		<!--              <li>-->
		<!--                <img src="images/icon1.png" />-->
		<!--                Seats 4-->
		<!--              </li>-->
		<!--              <li>-->
		<!--                <img src="images/icon2.png" />-->
		<!--                Doors 2-->
		<!--              </li>-->
		<!--              <li>-->
		<!--                <img src="images/icon3.png" />-->
		<!--                Automatic-->
		<!--              </li>-->
		<!--            </ul>-->
		<!--          </div>-->
		<!--        </a>-->
		<!--      </div>-->
		<!--      <div className="offer">-->
		<!--        <a href="#">-->
		<!--          <figure>-->
		<!--            <a href="single.html"><img src="images/offer2.png" /></a>-->
		<!--          </figure>-->
		<!--          <div className="offerdt">-->
		<!--            <h5>Bentley Continental GT</h5>-->
		<!--            <p>AED 2,800 / Day</p>-->
		<!--            <ul>-->
		<!--              <li>-->
		<!--                <img src="images/icon1.png" />-->
		<!--                Seats 4-->
		<!--              </li>-->
		<!--              <li>-->
		<!--                <img src="images/icon2.png" />-->
		<!--                Doors 2-->
		<!--              </li>-->
		<!--              <li>-->
		<!--                <img src="images/icon3.png" />-->
		<!--                Automatic-->
		<!--              </li>-->
		<!--            </ul>-->
		<!--          </div>-->
		<!--        </a>-->
		<!--      </div>-->
		<!--      <div className="offer">-->
		<!--        <a href="#">-->
		<!--          <figure>-->
		<!--            <a href="single.html"><img src="images/offer3.png" /></a>-->
		<!--          </figure>-->
		<!--          <div className="offerdt">-->
		<!--            <h5>Bentley Continental GT</h5>-->
		<!--            <p>AED 2,800 / Day</p>-->
		<!--            <ul>-->
		<!--              <li>-->
		<!--                <img src="images/icon1.png" />-->
		<!--                Seats 4-->
		<!--              </li>-->
		<!--              <li>-->
		<!--                <img src="images/icon2.png" />-->
		<!--                Doors 2-->
		<!--              </li>-->
		<!--              <li>-->
		<!--                <img src="images/icon3.png" />-->
		<!--                Automatic-->
		<!--              </li>-->
		<!--            </ul>-->
		<!--          </div>-->
		<!--        </a>-->
		<!--      </div>-->
		<!--    </div>-->
		<!--  </div>-->
		<!--</div>-->
		<!-- Offers -->
		<!-- Hired Cars --> */}
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
					<div className="carItem">
						<figure>
							<div
								id="carousel-thumb"
								className="carousel slide carousel-fade carousel-thumbnails"
								data-ride="carousel">
								<div className="carousel-inner" role="listbox">
									<div className="carousel-item active">
										<img src="images/cars/car1.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car2.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car3.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car4.png" />
									</div>
								</div>
								<ol className="carousel-indicators">
									<li
										data-target="#carousel-thumb"
										data-slide-to="0"
										className="active"
										>
										<img src="images/cars/car1.png" />
									</li>
									<li data-target="#carousel-thumb" data-slide-to="1">
										<img src="images/cars/car2.png" />
									</li>
									<li data-target="#carousel-thumb" data-slide-to="2">
										<img src="images/cars/car3.png" />
									</li>
									<li data-target="#carousel-thumb" data-slide-to="3">
										<img src="images/cars/car4.png" />
									</li>
								</ol>
							</div>
						</figure>
						<div className="offerdt">
							<h5><a href="single.html">Ferrari 488 GTB</a></h5>
							<ul>
								<li>
									<img src="images/icon1.png" />
									Seats 4
								</li>
								<li>
									<img src="images/icon2.png" />
									Doors 2
								</li>
								<li>
									<img src="images/icon3.png" />
									Automatic
								</li>
							</ul>
							<p>Price : <span>AED 2,650 / Day</span></p>
							<div className="fieldWr">
								<label>
								<input type="checkbox" name="" tabindex="0"/>
								<span>AED 3,000 Deposit</span>
								</label>
							</div>
							<a href="single.html" className="book">Book Now</a>
						</div>
					</div>
					<div className="carItem">
						<figure>
							<div
								id="carousel-thumb2"
								className="carousel slide carousel-fade carousel-thumbnails"
								data-ride="carousel"
								>
								<div className="carousel-inner" role="listbox">
									<div className="carousel-item active">
										<img src="images/cars/car2.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car1.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car3.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car4.png" />
									</div>
								</div>
								<ol className="carousel-indicators">
									<li
										data-target="#carousel-thumb2"
										data-slide-to="0"
										className="active"
										>
										<img src="images/cars/car2.png" />
									</li>
									<li data-target="#carousel-thumb2" data-slide-to="1">
										<img src="images/cars/car1.png" />
									</li>
									<li data-target="#carousel-thumb2" data-slide-to="2">
										<img src="images/cars/car3.png" />
									</li>
									<li data-target="#carousel-thumb2" data-slide-to="3">
										<img src="images/cars/car4.png" />
									</li>
								</ol>
							</div>
						</figure>
						<div className="offerdt">
							<h5><a href="single.html">Ferrari 488 GTB</a></h5>
							<ul>
								<li>
									<img src="images/icon1.png" />
									Seats 4
								</li>
								<li>
									<img src="images/icon2.png" />
									Doors 2
								</li>
								<li>
									<img src="images/icon3.png" />
									Automatic
								</li>
							</ul>
							<p>Price : <span>AED 2,650 / Day</span></p>
							<div className="fieldWr">
								<label>
								<input type="checkbox" name="" tabindex="0"/>
								<span>AED 3,000 Deposit</span>
								</label>
							</div>
							<a href="single.html" className="book">Book Now</a>
						</div>
					</div>
					<div className="carItem">
						<figure>
							<div
								id="carousel-thumb3"
								className="carousel slide carousel-fade carousel-thumbnails"
								data-ride="carousel"
								>
								<div className="carousel-inner" role="listbox">
									<div className="carousel-item active">
										<img src="images/cars/car3.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car2.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car1.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car4.png" />
									</div>
								</div>
								<ol className="carousel-indicators">
									<li
										data-target="#carousel-thumb3"
										data-slide-to="0"
										className="active"
										>
										<img src="images/cars/car3.png" />
									</li>
									<li data-target="#carousel-thumb3" data-slide-to="1">
										<img src="images/cars/car2.png" />
									</li>
									<li data-target="#carousel-thumb3" data-slide-to="2">
										<img src="images/cars/car1.png" />
									</li>
									<li data-target="#carousel-thumb3" data-slide-to="3">
										<img src="images/cars/car4.png" />
									</li>
								</ol>
							</div>
						</figure>
						<div className="offerdt">
							<h5><a href="single.html">Ferrari 488 GTB</a></h5>
							<ul>
								<li>
									<img src="images/icon1.png" />
									Seats 4
								</li>
								<li>
									<img src="images/icon2.png" />
									Doors 2
								</li>
								<li>
									<img src="images/icon3.png" />
									Automatic
								</li>
							</ul>
							<p>Price : <span>AED 2,650 / Day</span></p>
							<div className="fieldWr">
								<label>
								<input type="checkbox" name="" tabindex="0"/>
								<span>AED 3,000 Deposit</span>
								</label>
							</div>
							<a href="single.html" className="book">Book Now</a>
						</div>
					</div>
					<div className="carItem">
						<figure>
							<div
								id="carousel-thumb4"
								className="carousel slide carousel-fade carousel-thumbnails"
								data-ride="carousel"
								>
								<div className="carousel-inner" role="listbox">
									<div className="carousel-item active">
										<img src="images/cars/car4.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car2.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car3.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car1.png" />
									</div>
								</div>
								<ol className="carousel-indicators">
									<li
										data-target="#carousel-thumb4"
										data-slide-to="0"
										className="active"
										>
										<img src="images/cars/car4.png" />
									</li>
									<li data-target="#carousel-thumb4" data-slide-to="1">
										<img src="images/cars/car2.png" />
									</li>
									<li data-target="#carousel-thumb4" data-slide-to="2">
										<img src="images/cars/car3.png" />
									</li>
									<li data-target="#carousel-thumb4" data-slide-to="3">
										<img src="images/cars/car1.png" />
									</li>
								</ol>
							</div>
						</figure>
						<div className="offerdt">
							<h5><a href="single.html">Ferrari 488 GTB</a></h5>
							<ul>
								<li>
									<img src="images/icon1.png" />
									Seats 4
								</li>
								<li>
									<img src="images/icon2.png" />
									Doors 2
								</li>
								<li>
									<img src="images/icon3.png" />
									Automatic
								</li>
							</ul>
							<p>Price : <span>AED 2,650 / Day</span></p>
							<div className="fieldWr">
								<label>
								<input type="checkbox" name="" tabindex="0"/>
								<span>AED 3,000 Deposit</span>
								</label>
							</div>
							<a href="single.html" className="book">Book Now</a>
						</div>
					</div>
					<div className="carItem">
						<figure>
							<div
								id="carousel-thumb5"
								className="carousel slide carousel-fade carousel-thumbnails"
								data-ride="carousel"
								>
								<div className="carousel-inner" role="listbox">
									<div className="carousel-item active">
										<img src="images/cars/car5.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car2.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car3.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car4.png" />
									</div>
								</div>
								<ol className="carousel-indicators">
									<li
										data-target="#carousel-thumb5"
										data-slide-to="0"
										className="active"
										>
										<img src="images/cars/car5.png" />
									</li>
									<li data-target="#carousel-thumb5" data-slide-to="1">
										<img src="images/cars/car2.png" />
									</li>
									<li data-target="#carousel-thumb5" data-slide-to="2">
										<img src="images/cars/car3.png" />
									</li>
									<li data-target="#carousel-thumb5" data-slide-to="3">
										<img src="images/cars/car4.png" />
									</li>
								</ol>
							</div>
						</figure>
						<div className="offerdt">
							<h5><a href="single.html">Ferrari 488 GTB</a></h5>
							<ul>
								<li>
									<img src="images/icon1.png" />
									Seats 4
								</li>
								<li>
									<img src="images/icon2.png" />
									Doors 2
								</li>
								<li>
									<img src="images/icon3.png" />
									Automatic
								</li>
							</ul>
							<p>Price : <span>AED 2,650 / Day</span></p>
							<div className="fieldWr">
								<label>
								<input type="checkbox" name="" tabindex="0"/>
								<span>AED 3,000 Deposit</span>
								</label>
							</div>
							<a href="single.html" className="book">Book Now</a>
						</div>
					</div>
					<div className="carItem">
						<figure>
							<div
								id="carousel-thumb6"
								className="carousel slide carousel-fade carousel-thumbnails"
								>
								<div className="carousel-inner" role="listbox">
									<div className="carousel-item active">
										<img src="images/cars/car6.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car2.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car3.png" />
									</div>
									<div className="carousel-item">
										<div className="videoplayer">
											<video muted loop>
												<source src="video/video.mp4" type="video/mp4" />
											</video>
											<img
												className="video_icon"
												src="images/newvideoicon.png"
												/>
										</div>
									</div>
								</div>
								<ol className="carousel-indicators">
									<li
										data-target="#carousel-thumb6"
										data-slide-to="0"
										className="active"
										>
										<img src="images/cars/car6.png" />
									</li>
									<li data-target="#carousel-thumb6" data-slide-to="1">
										<img src="images/cars/car2.png" />
									</li>
									<li data-target="#carousel-thumb6" data-slide-to="2">
										<img src="images/cars/car3.png" />
									</li>
									<li data-target="#carousel-thumb6" data-slide-to="3">
										<img src="images/cars/car4.png" />
									</li>
								</ol>
							</div>
						</figure>
						<div className="offerdt">
							<h5>
								<a href="single.html">Ferrari 488 GTB with Video</a>
							</h5>
							<ul>
								<li>
									<img src="images/icon1.png" />
									Seats 4
								</li>
								<li>
									<img src="images/icon2.png" />
									Doors 2
								</li>
								<li>
									<img src="images/icon3.png" />
									Automatic
								</li>
							</ul>
							<p>Price : <span>AED 2,650 / Day</span></p>
							<div className="fieldWr">
								<label>
								<input type="checkbox" name="" tabindex="0"/>
								<span>AED 3,000 Deposit</span>
								</label>
							</div>
							<a href="single.html" className="book">Book Now</a>
						</div>
					</div>
					<div className="carItem">
						<figure>
							<div
								id="carousel-thumb7"
								className="carousel slide carousel-fade carousel-thumbnails"
								data-ride="carousel"
								>
								<div className="carousel-inner" role="listbox">
									<div className="carousel-item active">
										<img src="images/cars/car1.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car2.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car3.png" />
									</div>
									<div className="carousel-item">
										<video>
											<source src="video/video.mp4" type="video/mp4" />
										</video>
									</div>
								</div>
								<ol className="carousel-indicators">
									<li
										data-target="#carousel-thumb7"
										data-slide-to="0"
										className="active"
										>
										<img src="images/cars/car1.png" />
									</li>
									<li data-target="#carousel-thumb7" data-slide-to="1">
										<img src="images/cars/car2.png" />
									</li>
									<li data-target="#carousel-thumb7" data-slide-to="2">
										<img src="images/cars/car3.png" />
									</li>
									<li data-target="#carousel-thumb7" data-slide-to="3">
										<img src="images/cars/car4.png" />
									</li>
								</ol>
							</div>
						</figure>
						<div className="offerdt">
							<h5><a href="single.html">Ferrari 488 GTB</a></h5>
							<ul>
								<li>
									<img src="images/icon1.png" />
									Seats 4
								</li>
								<li>
									<img src="images/icon2.png" />
									Doors 2
								</li>
								<li>
									<img src="images/icon3.png" />
									Automatic
								</li>
							</ul>
							<p>Price : <span>AED 2,650 / Day</span></p>
							<div className="fieldWr">
								<label>
								<input type="checkbox" name="" tabindex="0"/>
								<span>AED 3,000 Deposit</span>
								</label>
							</div>
							<a href="single.html" className="book">Book Now</a>
						</div>
					</div>
					<div className="carItem">
						<figure>
							<div
								id="carousel-thumb8"
								className="carousel slide carousel-fade carousel-thumbnails"
								data-ride="carousel"
								>
								<div className="carousel-inner" role="listbox">
									<div className="carousel-item active">
										<img src="images/cars/car2.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car1.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car3.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car4.png" />
									</div>
								</div>
								<ol className="carousel-indicators">
									<li
										data-target="#carousel-thumb8"
										data-slide-to="0"
										className="active"
										>
										<img src="images/cars/car2.png" />
									</li>
									<li data-target="#carousel-thumb8" data-slide-to="1">
										<img src="images/cars/car1.png" />
									</li>
									<li data-target="#carousel-thumb8" data-slide-to="2">
										<img src="images/cars/car3.png" />
									</li>
									<li data-target="#carousel-thumb8" data-slide-to="3">
										<img src="images/cars/car4.png" />
									</li>
								</ol>
							</div>
						</figure>
						<div className="offerdt">
							<h5><a href="single.html">Ferrari 488 GTB</a></h5>
							<ul>
								<li>
									<img src="images/icon1.png" />
									Seats 4
								</li>
								<li>
									<img src="images/icon2.png" />
									Doors 2
								</li>
								<li>
									<img src="images/icon3.png" />
									Automatic
								</li>
							</ul>
							<p>Price : <span>AED 2,650 / Day</span></p>
							<div className="fieldWr">
								<label>
								<input type="checkbox" name="" tabindex="0"/>
								<span>AED 3,000 Deposit</span>
								</label>
							</div>
							<a href="single.html" className="book">Book Now</a>
						</div>
					</div>
					<div className="carItem">
						<figure>
							<div
								id="carousel-thumb9"
								className="carousel slide carousel-fade carousel-thumbnails"
								data-ride="carousel"
								>
								<div className="carousel-inner" role="listbox">
									<div className="carousel-item active">
										<img src="images/cars/car3.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car2.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car1.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car4.png" />
									</div>
								</div>
								<ol className="carousel-indicators">
									<li
										data-target="#carousel-thumb9"
										data-slide-to="0"
										className="active"
										>
										<img src="images/cars/car3.png" />
									</li>
									<li data-target="#carousel-thumb9" data-slide-to="1">
										<img src="images/cars/car2.png" />
									</li>
									<li data-target="#carousel-thumb9" data-slide-to="2">
										<img src="images/cars/car1.png" />
									</li>
									<li data-target="#carousel-thumb9" data-slide-to="3">
										<img src="images/cars/car4.png" />
									</li>
								</ol>
							</div>
						</figure>
						<div className="offerdt">
							<h5><a href="single.html">Ferrari 488 GTB</a></h5>
							<ul>
								<li>
									<img src="images/icon1.png" />
									Seats 4
								</li>
								<li>
									<img src="images/icon2.png" />
									Doors 2
								</li>
								<li>
									<img src="images/icon3.png" />
									Automatic
								</li>
							</ul>
							<p>Price : <span>AED 2,650 / Day</span></p>
							<div className="fieldWr">
								<label>
								<input type="checkbox" name="" tabindex="0"/>
								<span>AED 3,000 Deposit</span>
								</label>
							</div>
							<a href="single.html" className="book">Book Now</a>
						</div>
					</div>
					<div className="carItem">
						<figure>
							<div
								id="carousel-thumb10"
								className="carousel slide carousel-fade carousel-thumbnails"
								data-ride="carousel"
								>
								<div className="carousel-inner" role="listbox">
									<div className="carousel-item active">
										<img src="images/cars/car4.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car2.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car3.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car1.png" />
									</div>
								</div>
								<ol className="carousel-indicators">
									<li
										data-target="#carousel-thumb10"
										data-slide-to="0"
										className="active"
										>
										<img src="images/cars/car4.png" />
									</li>
									<li data-target="#carousel-thumb10" data-slide-to="1">
										<img src="images/cars/car2.png" />
									</li>
									<li data-target="#carousel-thumb10" data-slide-to="2">
										<img src="images/cars/car3.png" />
									</li>
									<li data-target="#carousel-thumb10" data-slide-to="3">
										<img src="images/cars/car1.png" />
									</li>
								</ol>
							</div>
						</figure>
						<div className="offerdt">
							<h5><a href="single.html">Ferrari 488 GTB</a></h5>
							<ul>
								<li>
									<img src="images/icon1.png" />
									Seats 4
								</li>
								<li>
									<img src="images/icon2.png" />
									Doors 2
								</li>
								<li>
									<img src="images/icon3.png" />
									Automatic
								</li>
							</ul>
							<p>Price : <span>AED 2,650 / Day</span></p>
							<div className="fieldWr">
								<label>
								<input type="checkbox" name="" tabindex="0"/>
								<span>AED 3,000 Deposit</span>
								</label>
							</div>
							<a href="single.html" className="book">Book Now</a>
						</div>
					</div>
					<div className="carItem">
						<figure>
							<div
								id="carousel-thumb11"
								className="carousel slide carousel-fade carousel-thumbnails"
								data-ride="carousel"
								>
								<div className="carousel-inner" role="listbox">
									<div className="carousel-item active">
										<img src="images/cars/car5.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car2.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car3.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car4.png" />
									</div>
								</div>
								<ol className="carousel-indicators">
									<li
										data-target="#carousel-thumb11"
										data-slide-to="0"
										className="active"
										>
										<img src="images/cars/car5.png" />
									</li>
									<li data-target="#carousel-thumb11" data-slide-to="1">
										<img src="images/cars/car2.png" />
									</li>
									<li data-target="#carousel-thumb11" data-slide-to="2">
										<img src="images/cars/car3.png" />
									</li>
									<li data-target="#carousel-thumb11" data-slide-to="3">
										<img src="images/cars/car4.png" />
									</li>
								</ol>
							</div>
						</figure>
						<div className="offerdt">
							<h5><a href="single.html">Ferrari 488 GTB</a></h5>
							<ul>
								<li>
									<img src="images/icon1.png" />
									Seats 4
								</li>
								<li>
									<img src="images/icon2.png" />
									Doors 2
								</li>
								<li>
									<img src="images/icon3.png" />
									Automatic
								</li>
							</ul>
							<p>Price : <span>AED 2,650 / Day</span></p>
							<div className="fieldWr">
								<label>
								<input type="checkbox" name="" tabindex="0"/>
								<span>AED 3,000 Deposit</span>
								</label>
							</div>
							<a href="single.html" className="book">Book Now</a>
						</div>
					</div>
					<div className="carItem">
						<figure>
							<div
								id="carousel-thumb12"
								className="carousel slide carousel-fade carousel-thumbnails"
								data-ride="carousel"
								>
								<div className="carousel-inner" role="listbox">
									<div className="carousel-item active">
										<img src="images/cars/car6.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car2.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car3.png" />
									</div>
									<div className="carousel-item">
										<img src="images/cars/car4.png" />
									</div>
								</div>
								<ol className="carousel-indicators">
									<li
										data-target="#carousel-thumb12"
										data-slide-to="0"
										className="active"
										>
										<img src="images/cars/car6.png" />
									</li>
									<li data-target="#carousel-thumb12" data-slide-to="1">
										<img src="images/cars/car2.png" />
									</li>
									<li data-target="#carousel-thumb12" data-slide-to="2">
										<img src="images/cars/car3.png" />
									</li>
									<li data-target="#carousel-thumb12" data-slide-to="3">
										<img src="images/cars/car4.png" />
									</li>
								</ol>
							</div>
						</figure>
						<div className="offerdt">
							<h5><a href="single.html">Ferrari 488 GTB</a></h5>
							<ul>
								<li>
									<img src="images/icon1.png" />
									Seats 4
								</li>
								<li>
									<img src="images/icon2.png" />
									Doors 2
								</li>
								<li>
									<img src="images/icon3.png" />
									Automatic
								</li>
							</ul>
							<p>Price : <span>AED 2,650 / Day</span></p>
							<div className="fieldWr">
								<label>
								<input type="checkbox" name="" tabindex="0"/>
								<span>AED 3,000 Deposit</span>
								</label>
							</div>
							<a href="single.html" className="book">Book Now</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!--Hired Cars -->
		<!-- video --> */}
		<div className="vedioWrap">
			<div className="vimeo-wrapper"></div>
			<div className="loaders"><img src="images/loader.gif" /></div>
			<a href="#" className="videobtn"><img src="images/videoicon.png" /></a>
			<div className="container">
				<div className="row">
					<div className="col-sm-2"></div>
					<div className="col-sm-8 col-md-8">
						<div className="applySec">
							<div className="numbr">
								<img src="images/phone.png" />
								<p>Got any questions? <span>(+971) 5555 05281</span></p>
							</div>
							<div className="btns">
								<a href="#">Apply Now</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
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
						<div id="accordion">
							<h3 className="acrdBtn ui-state-active">
								<span>1 <i></i></span>What are the documents required for car
								rental in Dubai? <em className="fa fa-angle-down"></em>
								<em className="fa fa-angle-up"></em>
							</h3>
							<div className="acrdContent frst">
								<p>
									There are no overhead charges unless they have been mentioned
									by the car rental company. It is always best to ask us
									regarding insurance and other details before you rent the car.
								</p>
							</div>
							<h3 className="acrdBtn">
								<span>2 <i></i></span>What are the extra costs involved in
								renting a car in Dubai? <em className="fa fa-angle-down"></em>
								<em className="fa fa-angle-up"></em>
							</h3>
							<div className="acrdContent">
								<p>
									There are no overhead charges unless they have been mentioned
									by the car rental company. It is always best to ask us
									regarding insurance and other details before you rent the car.
								</p>
							</div>
							<h3 className="acrdBtn">
								<span>3 <i></i></span>Can anyone else drive my rented car other
								than me? <em className="fa fa-angle-down"></em>
								<em className="fa fa-angle-up"></em>
							</h3>
							<div className="acrdContent">
								<p>
									There are no overhead charges unless they have been mentioned
									by the car rental company. It is always best to ask us
									regarding insurance and other details before you rent the car.
								</p>
							</div>
							<h3 className="acrdBtn">
								<span>4 <i></i></span>Do you offer a delivery service?
								<em className="fa fa-angle-down"></em>
								<em className="fa fa-angle-up"></em>
							</h3>
							<div className="acrdContent">
								<p>
									There are no overhead charges unless they have been mentioned
									by the car rental company. It is always best to ask us
									regarding insurance and other details before you rent the car.
								</p>
							</div>
							<h3 className="acrdBtn">
								<span>5 <i></i></span>What about traffic violations?
								<em className="fa fa-angle-down"></em>
								<em className="fa fa-angle-up"></em>
							</h3>
							<div className="acrdContent">
								<p>
									There are no overhead charges unless they have been mentioned
									by the car rental company. It is always best to ask us
									regarding insurance and other details before you rent the car.
								</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-6">
						<div className="mainCar">
							<img src="images/mainCar.png" />
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- faq --> */}
		{/* <!-- areas 
			<div className="heading">
			  <div className="container">
			    <div className="row">
			      <div className="col-sm-12 col-md-12">
			        <h6>OUR FEATURED DESTINATIONS</h6>
			        <h2>Featured Areas</h2>
			        <span><img src="images/border.png" /></span>
			      </div>
			    </div>
			  </div>
			</div>
			
			<div className="destinations">
			  <div className="container">
			    <div className="desticnt">
			      <div className="desti">
			        <figure>
			          <img src="images/dubai.png" />
			        </figure>
			        <h3><a href="#">Dubai</a></h3>
			      </div>
			      <div className="desti">
			        <figure>
			          <img src="images/dubai.png" />
			        </figure>
			        <h3><a href="#">ABU DHABI</a></h3>
			      </div>
			      <div className="desti">
			        <figure>
			          <img src="images/dubai.png" />
			        </figure>
			        <h3><a href="#">Sharjah</a></h3>
			      </div>
			      <div className="desti">
			        <figure>
			          <img src="images/dubai.png" />
			        </figure>
			        <h3><a href="#">Dubai</a></h3>
			      </div>
			      <div className="desti">
			        <figure>
			          <img src="images/dubai.png" />
			        </figure>
			        <h3><a href="#">ABU DHABI</a></h3>
			      </div>
			      <div className="desti">
			        <figure>
			          <img src="images/dubai.png" />
			        </figure>
			        <h3><a href="#">Sharjah</a></h3>
			      </div>
			    </div>
			  </div>
			</div>
			areas --> */}
		{/* <!-- News --> */}
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
							<a href="#"><img src="images/gulf_news_png.png" /></a>
						</div>
					</div>
					<div className="col-6 col-sm-3 col-md-3">
						<div className="newss">
							<a href="#"><img src="images/the_national_png.png" /></a>
						</div>
					</div>
					<div className="col-6 col-sm-3 col-md-3">
						<div className="newss">
							<a href="#"><img src="images/time_out_png.png" /></a>
						</div>
					</div>
					<div className="col-6 col-sm-3 col-md-3">
						<div className="newss">
							<a href="#"><img src="images/ahlan.jpg" /></a>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- News -->
		<!-- areas --> */}
		<div className="heading">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-12">
						<h6>what customers are saying</h6>
						<h2>customer reviews</h2>
						<span><img src="images/border.png" /></span>
					</div>
				</div>
			</div>
		</div>
		<div className="testimonialWrap">
			<div className="container">
				<div className="testislider">
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
								<img src="images/user.png" />
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
								<img src="images/user.png" />
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
								<img src="images/user.png" />
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
								<img src="images/user.png" />
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
								<img src="images/user.png" />
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
				</div>
			</div>
		</div>
		{/* <!-- areas -->
		<!-- Hired Cars --> */}
		<div className="LuxuryWrrap">
			<div className="heading">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-12">
							<h6>welcome to rent myride</h6>
							<h2>Luxury Car Rental in Dubai</h2>
							<span><img src="images/border.png" /></span>
							<p>
								Welcome to MyRide, where you can fulfil your dream of driving a
								luxury or sports car in Dubai. Our range of luxury cars are
								unparalleled and so are our prices and service standards. In
								fact, we are the leaders in online car rentals in the UAE. If
								you are looking for an amazing drive in a world-className luxury
								car, then look no further. What are you waiting for, if you want
								to rent a luxury car in Dubai at the best rates then get in
								touch now!
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="feature">
							<span className="ons"></span>
							<p>We have the largest cars dealership</p>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="feature">
							<span className="tws"></span>
							<p>We offers the best cars prices for all</p>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="feature">
							<span className="thres"></span>
							<p>24/7 customer support</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- Hired Cars -->
		<!-- WhyChoose --> */}
		<div className="chooseUs">
			<div className="row">
				<div className="col-sm-5 col-md-5">
					<div className="leftSide">
						<div className="heading">
							<div className="container">
								<div className="row">
									<div className="col-sm-12 col-md-12">
										<h6>Rent my ride</h6>
										<h2>WHY CHOOSE MYRIDE?</h2>
										<span><img src="images/border.png" /></span>
										<p>
											Et dolore magna aliqua. Ut enim ad minim veniam, quis
											nostrud exercitation dolorin reprehenderits volupta velit
											dolore fugiat nulla pariatur excepteur sint deserunt
											mollit anim est laborum santium dolore mque.
										</p>
									</div>
								</div>
							</div>
						</div>
						<img src="images/landrover.png" />
					</div>
				</div>
				<div className="col-sm-7 col-md-7">
					<div className="rightSide">
						<div className="row">
							<div className="col-sm-4 col-md-4">
								<div className="chosItem">
									<i className="fa fa-car"></i>
									<h5>Luxurious Car</h5>
									<p>
										Quis nostrud exercitate laboridy aliquip duis irure sed
										dolor ipsum excepture fugiat estan.
									</p>
								</div>
							</div>
							<div className="col-sm-4 col-md-4">
								<div className="chosItem">
									<i className="fa fa-calendar"></i>
									<h5>Book within Minutes</h5>
									<p>
										Quis nostrud exercitate laboridy aliquip duis irure sed
										dolor ipsum excepture fugiat estan.
									</p>
								</div>
							</div>
							<div className="col-sm-4 col-md-4">
								<div className="chosItem">
									<i className="fa fa-money-check"></i>
									<h5>Reasonable Price</h5>
									<p>
										Quis nostrud exercitate laboridy aliquip duis irure sed
										dolor ipsum excepture fugiat estan.
									</p>
								</div>
							</div>
							<div className="col-sm-4 col-md-4">
								<div className="chosItem">
									<i className="fa fa-car"></i>
									<h5>Comfortable Ride</h5>
									<p>
										Quis nostrud exercitate laboridy aliquip duis irure sed
										dolor ipsum excepture fugiat estan.
									</p>
								</div>
							</div>
							<div className="col-sm-4 col-md-4">
								<div className="chosItem">
									<i className="fa fa-car"></i>
									<h5>On Time Delivery</h5>
									<p>
										Quis nostrud exercitate laboridy aliquip duis irure sed
										dolor ipsum excepture fugiat estan.
									</p>
								</div>
							</div>
							<div className="col-sm-4 col-md-4">
								<div className="chosItem">
									<i className="fa fa-car"></i>
									<h5>Safe Car</h5>
									<p>
										Quis nostrud exercitate laboridy aliquip duis irure sed
										dolor ipsum excepture fugiat estan.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- WhyChoose -->
		<!-- footer --> */}
		<footer>
			<div className="container">
				<div className="row">
					<div className="col-sm-4 col-md-4">
						<div className="widget">
							<img src="images/logo.png" />
							<p>
								Myride Middle East DMCC is one stop for Luxury Car Rental Dubai
								& Limousine hiring in Dubai, where an individual can Select,
								Register and Pay online and get the car delivered within 60
								Minutes anywhere in Dubai.
							</p>
							<div className="pym">
								{/* <img src="images/payment/img1.png" />
								<img src="images/payment/img2.png" />
								<img src="images/payment/img3.png" />
								<img src="images/payment/img4.png" />
								<img src="images/payment/img5.png" /> */}
							</div>
						</div>
					</div>
					<div className="col-sm-2 col-md-2">
						<div className="widget">
							<h4>Contact <img src="images/border.png" /></h4>
							<ul>
								<li><i className="fa fa-phone"></i>+971 4566 7048</li>
								<li><i className="fa fa-phone"></i>+971 5555 05281</li>
								<li><i className="fa fa-phone"></i>+971 5555 05281</li>
								<li><i className="fa fa-envelope"></i>info@myride.ae</li>
								<li><i className="fa fa-envelope"></i>support@myride.ae</li>
								<li>
									<i className="fa fa-map-marker"></i>Jumeirah Lake Towers, Dubai.
								</li>
							</ul>
						</div>
					</div>
					<div className="col-sm-2 col-md-2">
						<div className="widget">
							<h4>Quick Links <img src="images/border.png" /></h4>
							<ul>
								<li><a href="#">Home</a></li>
								<li><a href="#">About Us</a></li>
								<li><a href="#">Stretch Limo</a></li>
								<li><a href="#">Car Rental</a></li>
								<li><a href="#">Blogs</a></li>
								<li><a href="#">Terms & Conditions</a></li>
								<li><a href="#">Contact</a></li>
							</ul>
						</div>
					</div>
					<div className="col-sm-4 col-md-4">
						<div className="widget">
							<h4>Map <img src="images/border.png"/></h4>
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14455.805017031698!2d55.13568148917137!3d25.069641253739636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8f1d1d5afb1fc4aa!2sMyRide.ae%20Middle%20East!5e0!3m2!1sen!2s!4v1594899618875!5m2!1sen!2s" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
						</div>
					</div>
					<div className="col-sm-12 col-md-12">
						<div className="social">
							<a href="#"><i className="fab fa-twitter"></i></a>
							<a href="#"><i className="fab fa-facebook-f"></i></a>
							<a href="#"><i className="fab fa-linkedin-in"></i></a>
							<a href="#"><i className="fab fa-google-plus"></i></a>
							<a href="#"><i className="fab fa-pinterest"></i></a>
							<a href="#"><i className="fab fa-youtube"></i></a>
						</div>
					</div>
					<div className="col-sm-12 col-md-12">
						<div className="copy">
							<p>
								Copyrights (c) 2021 Rent Myride. All rights reserved.
								<a href="#">Privacy Policy</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
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
