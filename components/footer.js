import React from 'react'

const Footer = () => {
    return (
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
							<iframe  loading="lazy"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14455.805017031698!2d55.13568148917137!3d25.069641253739636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8f1d1d5afb1fc4aa!2sMyRide.ae%20Middle%20East!5e0!3m2!1sen!2s!4v1594899618875!5m2!1sen!2s" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
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
        )
}

export default Footer;