import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons'
const Header = () => {

	const openNav = () =>{
		console.log("open the menu")
        document.getElementById("mySidenav").style.width = "250px";
        // document.getElementById("main").style.marginLeft = "250px";
        // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
      }


    return (
<div className="header">
			<div className="row">
				<div className="col-sm-3 col-md-3 logo">
					<a href="index.html">
						    <Image
							src="/images/logo.png"
							alt="logo"
							width={217}
							height={30}
						/>
					</a>
					<a  onClick={openNav} className="openNav">
					<FontAwesomeIcon icon={faBars}  fixedWidth />
					</a>
				</div>
				<div className="col-sm-9 col-md-9">
					<nav>
						<a href="#" className="closeNav">
						<FontAwesomeIcon icon={faTimes}  fixedWidth />
					   </a>
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

export default Header;