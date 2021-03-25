import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
const Header = () => {

	const openNav = () =>{
		console.log("open the menu")
        document.getElementById("mySidenav").style.width = "250px";
      }


    return (
<div className="header">
			<div className="row">
				<div id="logo-div-id" className="col-sm-12 col-md-3 logo">
					<Link href="/">
					<a className="d-flex"> <Image
					src="/images/logo.png"
					alt="logo"
					width={217}
					height={30}
					/>
					</a>
					</Link>
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
							<li><Link href="categorypage"><a>Car rental</a></Link></li>
							<li><a href="car_with_driver.html">Car with driver </a></li>
							<li><a href="stretch_limo.html">Stretch Limo </a></li>
							<li><a href="#">Packages</a></li>
							<li><a href="blog.html">Blog </a></li>
							<li><a href="contact.html">Contact</a></li>
						</ul>
					</nav>
				</div>
			</div>
			<style jsx>{
				`
				#logo-div-id{
				 display: flex;	
				 align-items: center;
				}
				@media only screen and (max-width: 670px){
					#logo-div-id{
						display: flex;
						justify-content: space-between;
						align-items: center;
					}
				}
			
		
				
				`}</style>
		</div>

    )
}

export default Header;
