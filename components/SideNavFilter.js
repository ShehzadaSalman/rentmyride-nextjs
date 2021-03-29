import BrandFilter from "./sidebar/BrandFilter";
import SearchFilter from "./sidebar/SearchFilter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
const SideNavFilter = () => {
    const closeNav = () => {
       document.getElementById("mySidenavfilter").style.width = "0";
     }

   return (
   <><div id="mySidenavfilter" className="sidenav">
   <a  className="closebtn" onClick={closeNav}>
      <FontAwesomeIcon icon = {faTimes} />
    </a>
  {/* embed sidenav filter here */}
  <div className="px-5">
  <SearchFilter/>
   <BrandFilter/>
  </div>
  
 
  {/* embeded sidenav filter ends here */}
 </div>
 
 <style jsx>
     {`
.sidenav {
   height: 100%;
   width: 0;
   position: fixed;
   z-index: 2;
   top: 0;
   left: 0;
   background-color: #fff;
   overflow-x: hidden;
   transition: 0.5s;
   padding-top: 90px;
   box-shadow: 7px 2px 31px 16px rgb(0 0 0 / 50%);
   -webkit-box-shadow: 7px 2px 11px -4px rgb(0 0 0 / 75%);
   -moz-box-shadow: 7px 2px 11px -4px rgba(0,0,0,0.75);
 }
 
 .sidenav a {
   margin: 8px 37px 23px 32px;
   text-decoration: none;
   font-size: 17px;
   color: #000;
   font-weight: 500;
   display: block;
   transition: 0.3s;
 }

 .sidenav a.active {
  color: #f00;
  border-bottom: solid 2px;
 }
 
 .sidenav a:hover {
   color: red;
 }
 
 .sidenav .closebtn {
   position: absolute;
   top: 3px;
   color: #212121;
   right: -17px;
   font-size: 36px;
   margin-left: 50px;
 }
 
 #main {
   transition: margin-left .5s;
   padding: 16px;
 }
 
 @media screen and (max-height: 450px) {
   .sidenav {padding-top: 15px;}
   .sidenav a {font-size: 18px;}
 }      
     
     
     
     `}
 </style>
 </>)
}

export default SideNavFilter