



import React, { Component } from 'react'
import Image from 'next/image'
import {FacebookIcon, TwitterIcon, InstagramIcon} from './extracted-icons/SocialIcons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {PhoneIcon, EnvelopeIcon, MapMarkerIcon} from './extracted-icons/Regularicons'
import { faPhone, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

export default class Footer extends Component {
    shouldComponentUpdate(){
        return false;
    }
    render() {
        return (
            <footer>
			<div className="container">
				<div className="row">
					<div className="col-sm-4 col-md-4">
						<div className="widget">
					     	<Image
							src="/images/logo.png"
							alt="logo"
							width={217}
							height={30}
						    />
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

							<div className="mb-2">
							<h4 className="mb-0">Contact </h4>
							<Image src ="/images/border.png" height="2" width="65" alt="border" />
							</div>
				
							<ul>
								<li><PhoneIcon height={19} width = {18} color="#cfcfcf"/><span>+971 4566 7048</span> </li>
								<li><PhoneIcon height={19} width = {18} color="#cfcfcf" /><span>+971 5555 05281</span></li>
								<li><EnvelopeIcon height={15} width = {15} color="#cfcfcf" />  <span>+971 5555 05281</span> </li>
								<li><EnvelopeIcon height={15} width = {15} color="#cfcfcf" />  <span>info@myride.ae</span></li>
								<li><EnvelopeIcon height={15} width = {15} color="#cfcfcf" />  <span>Support@myride.ae</span></li>
								<li>
								<MapMarkerIcon height={17} width = {19} color="#cfcfcf" /><span>Jumeirah Lake Towers, Dubai.</span> 
								</li>
							</ul>
						</div>
					</div>
					<div className="col-sm-2 col-md-2">
						<div className="widget">
							<div className="mb-2">
							<h4>Quick Links </h4>
							<Image src ="/images/border.png" height="2" width="65" alt="border" />
							</div>
							<ul>
								<li><a href="#">Home</a></li>
								<li><a href="#">About Us</a></li>
								<li><a href="#">Stretch Limo</a></li>
								<li><a href="#">Car Rental</a></li>
								<li><a href="#">Blogs</a></li>
								<li><Link href="feedback"><a href="#">Feedback</a></Link></li>
								<li><a href="#">Terms & Conditions</a></li>
								<li><a href="#">Contact</a></li>
							</ul>
						</div>
					</div>
					<div className="col-sm-4 col-md-4">
						<div className="widget">
							<div className="mb-2">
							<h4>Map </h4>
							<Image src ="/images/border.png" height="2" width="65" alt="border" />
							</div>
					
							
							<iframe  loading="lazy"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14455.805017031698!2d55.13568148917137!3d25.069641253739636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8f1d1d5afb1fc4aa!2sMyRide.ae%20Middle%20East!5e0!3m2!1sen!2s!4v1594899618875!5m2!1sen!2s" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
						</div>
					</div>
					<div className="col-sm-12 col-md-12">
						<div className="social">
							 <a>
							  <FacebookIcon height={19} width = {18}/>
							 </a>
							 <a>
							  <TwitterIcon height={19} width = {18} />
							 </a>
							 <a><InstagramIcon height={19} width = {18} /></a>
			
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
}
