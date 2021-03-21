
import  Head from 'next/head'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope, faCoins, faUser } from '@fortawesome/free-solid-svg-icons'
// import Footer from '../components/footer';
import CustomerReview from '../components/customer-review';
import NewBrandSlider from '../components/homepage/NewBrandSlider';
import NewCategorySlider from '../components/homepage/NewCategorySlider';
import DemoNavSlider from '../components/DemoNavSlider'
import NewHiredPackageSlider from '../components/homepage/NewHiredPackageSlider';
// import CategorySlider from '../components/homepage/CategorySlider'
// import AccordionFAQ from '../components/AccordionFAQ'
// import { VideoSection } from '../components/VideoSection';
// import { LuxuryWraps } from '../components/LuxuryWraps';
// import { WhyChoosUs } from '../components/WhyChoosUs';
// import { SearchForm } from '../components/SearchForm';
// import { Header } from '../components/Header';
// import { BrandSlider } from '../components/homepage/BrandSlider';
// import { CategorySlider } from '../components/homepage/CategorySlider';
// import { CarPackageSlider } from '../components/homepage/CarPackageSlider';
// import { HiredPackageSlider } from '../components/homepage/HiredPackageSlider';

// dynamic imports 
const AccordionFAQ = dynamic(() => import('../components/AccordionFAQ'))
const VideoSection = dynamic(() => import('../components/VideoSection'))
const NewsPaper = dynamic(() => import('../components/homepage/NewsPaper'))

const LuxuryWraps = dynamic(() => import('../components/LuxuryWraps'))
const WhyChoosUs = dynamic(() => import('../components/WhyChoosUs'))
const SearchForm = dynamic(() => import('../components/SearchForm'))
const Header = dynamic(() => import('../components/Header'))
const BrandSlider= dynamic(() => import('../components/homepage/BrandSlider'))
const CategorySlider = dynamic(() => import('../components/homepage/CategorySlider'))
const CarPackageSlider = dynamic(() => import('../components/homepage/CarPackageSlider'))
const HiredPackageSlider = dynamic(() => import('../components/homepage/HiredPackageSlider'))
const Footer = dynamic(() => import('../components/footer'))

// import { NewsPaper } from '../components/homepage/NewsPaper';


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
					{/* <i class="fa fa-phone"></i> */}
						<FontAwesomeIcon icon={faPhone} className="mr-1"  fixedWidth/>
						
						 +971 55 550 5281  </a>
				</li>
				<li>
					<a href="mailto:info@rentmyride.ae">
					{/* <i class="fa fa-envelope"></i> */}
						<FontAwesomeIcon icon={faEnvelope} className="mr-1"  fixedWidth/>
						 info@rentmyride.ae</a>
				</li>
				<li>
				{/* <i class="fa fa-coins"></i> */}
					<FontAwesomeIcon icon={faCoins} className="mr-1"  fixedWidth/>
					<select>
						<option>AED</option>
					</select>
				</li>
				<li>
					<a href="login.html">
					<i class="fa fa-user"></i>
						<FontAwesomeIcon icon={faUser} className="mr-1"  fixedWidth/>
						 Login</a>
				</li>
			</ul>
			<a href="#" className="plus"></a>
		</div>
		{/* <!-- Top Bar -->
		<!-- Header --> */}
		<Header/>
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
		{/* <!-- Brands -->*/}
		{/* <BrandSlider/> */}
		<div className="container">
		<div className="row">
		
		<NewBrandSlider/>
		
			</div> 		 	
		</div>
	
		{/* <CategorySlider/> */}
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
				<div className="row" >
			
						<CategorySlider/>
						{/* <NewCategorySlider/> */}
				
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
		<div className="hiredCarWrap Packges pb-0">
			<div className="container">
				<CarPackageSlider/>
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
		  {/* <HiredPackageSlider/> */}
		  <NewHiredPackageSlider />
			</div>
		</div>
		{/* <!--Hired Cars -->
		<!-- video --> */}
		<VideoSection/>

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
			      <AccordionFAQ />
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
       <NewsPaper/>	
	
	    <CustomerReview/>
	  <LuxuryWraps/>
	
	
		<WhyChoosUs/>
	
	
        <Footer/>
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
