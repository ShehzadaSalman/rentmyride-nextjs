import React from 'react'
import Image from 'next/image'
export const Header = () => {
    return (
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
		
    )
}
