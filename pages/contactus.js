import  Head from 'next/head'
import dynamic from 'next/dynamic'
const TopBar = dynamic(import('../components/TopBar'), {loading: () => <p>Loading...</p>})
const Footer = dynamic(() => import('../components/footer'),  { ssr: false })
import CustomerReview from '../components/customer-review';
import SideNav from '../components/SideNav'
import InnerNavBanner from '../components/InnerNavBanner'
const Header = dynamic(() => import('../components/Header'),  { ssr: false })
import SearchFilter from '../components/sidebar/SearchFilter'
import BrandFilter from '../components/sidebar/BrandFilter'
import NewHiredPackageSlider from '../components/homepage/NewHiredPackageSlider';
import ListingCard from '../components/ListingCard'
import ListingFilter from '../components/ListingFilter'
import Image from 'next/image'

const ContactUs = () => {
  return (
    <>
<TopBar/>
<Header />
<InnerNavBanner />
  <div class="mainContent contactPage">
    <div class="container">
      <div class="row">
        <div  class="col-sm-3 col-md-3">
          <div class="contactcard">
            <div class="icons"><i class="fa fa-marker"></i></div>
            <h3>Head Office</h3>
            <p>Jumeirah Lake Towers, Dubai.</p>
          </div>
        </div>
        <div  class="col-sm-3 col-md-3">
          <div class="contactcard">
            <div class="icons"><i class="fa fa-phone"></i></div>
            <h3>Phone</h3>
            <p>+97145667048</p>
            <p>+971555505281</p>
          </div>
        </div>

        <div  class="col-sm-3 col-md-3">
          <div class="contactcard">
            <div class="icons"><i class="fa fa-envelope"></i></div>
            <h3>Email</h3>
            <p>Info@myride.ae</p>
            <p>Support@myride.ae</p>
          </div>
        </div>

        <div  class="col-sm-3 col-md-3">
          <div class="contactcard">
            <div class="icons"><i class="fa fa-flag"></i></div>
            <h3>Working Hours</h3>
            <p>10 AM</p>
            <p>10 PM</p>
          </div>
        </div>

        <div class="col-sm-5 col-md-5">
          <div class="map">
            <iframe loading="lazing" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462562.8478599594!2d54.947546376673124!3d25.075707330407372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1589582574377!5m2!1sen!2s" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </div>
        <div class="col-sm-7 col-md-7">
          <div class="contactForm">
            <div class="fieldset">
              <div class="field">
                <input type="text" name="" placeholder="Name"/>
              </div>
              <div class="field">
                <input type="text" name="" placeholder="Email"/>
              </div>
            </div>

            <div class="field">
              <input type="text" name="" placeholder="Subject"/>
            </div>

            <div class="field">
              <textarea placeholder="Please write a message here"></textarea>
            </div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>

<Footer/>

    </>)
}
export default ContactUs
