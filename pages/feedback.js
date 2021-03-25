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
import ReactStars from "react-rating-stars-component";

const FeedBack = () => {

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (<>
    <TopBar />
    <Header />
    <InnerNavBanner />
      <div class="FeedbackBox container">
                      <h3 className="text-center">Feedback</h3>

                      <div class="contactForm mb-5">
  <form action="/feedback" enctype="multipart/form-data" method="post">                            <div class="field">

                                  <label>
                                      Your Name
                                  </label>
                                  <input className="feedback-input" type="text" value=""/>
                                  <span className="field-validation-valid text-danger" data-valmsg-for="WriterName" data-valmsg-replace="true"></span>
                              </div>
                              <div className="field">
                                  <label>
                                      Your Comment
                                  </label>

                                  <textarea cols="80" rows="10" className="feedback-textarea"></textarea>
                              </div>
                              <div className="field">

                                  <label>
                                      Your rating
                                  </label>
                                  <div className="rating-stars">
                                    <ReactStars
                                       count={5}
                                       onChange={ratingChanged}
                                       size={24}
                                       activeColor="#ffd700"
                                     />

                                      <ul id="stars">
                                          <li className="star" title="Poor" data-value="1">
                                              <i className="fa fa-star fa-fw"></i>
                                          </li>
                                          <li className="star" title="Fair" data-value="2">
                                              <i className="fa fa-star fa-fw"></i>
                                          </li>
                                          <li className="star" title="Good" data-value="3">
                                              <i className="fa fa-star fa-fw"></i>
                                          </li>
                                          <li className="star" title="Excellent" data-value="4">
                                              <i className="fa fa-star fa-fw"></i>
                                          </li>
                                          <li className="star" title="WOW!!!" data-value="5">
                                              <i className="fa fa-star fa-fw"></i>
                                          </li>
                                      </ul>
                                  </div>
                                  <input type="hidden" name="Rating" id="Rating" value="0"/>
                              </div>
                              <div className="field">

                                  <label>
                                      How was your Experience?
                                  </label>
                                  <div className="rating-stars">
                                      <ul id="Estars">
                                          <li className="star" title="Poor" data-value="1">
                                              <i className="fa fa-star fa-fw"></i>
                                          </li>
                                          <li className="star" title="Fair" data-value="2">
                                              <i className="fa fa-star fa-fw"></i>
                                          </li>
                                          <li className="star" title="Good" data-value="3">
                                              <i className="fa fa-star fa-fw"></i>
                                          </li>
                                          <li className="star" title="Excellent" data-value="4">
                                              <i className="fa fa-star fa-fw"></i>
                                          </li>
                                          <li className="star" title="WOW!!!" data-value="5">
                                              <i className="fa fa-star fa-fw"></i>
                                          </li>
                                      </ul>
                                  </div>
                                  <input type="hidden" name="Experience" id="Experience" value="0"/>
                              </div>
                              <div className="field">

                                  <label>
                                      On Time Delivery?
                                  </label>
                                  <div className="rating-stars">
                                      <ul id="Dstars">
                                          <li className="star" title="Poor" data-value="1">
                                              <i className="fa fa-star fa-fw"></i>
                                          </li>
                                          <li className="star" title="Fair" data-value="2">
                                              <i className="fa fa-star fa-fw"></i>
                                          </li>
                                          <li className="star" title="Good" data-value="3">
                                              <i className="fa fa-star fa-fw"></i>
                                          </li>
                                          <li className="star" title="Excellent" data-value="4">
                                              <i className="fa fa-star fa-fw"></i>
                                          </li>
                                          <li className="star" title="WOW!!!" data-value="5">
                                              <i className="fa fa-star fa-fw"></i>
                                          </li>
                                      </ul>
                                  </div>
                                  <input type="hidden" name="TimeDelivery" id="TimeDelivery" value="0"/>
                              </div>
                                      <div className="field">

                                          <label>
                                              Cleanness of the car?
                                          </label>
                                          <div className="rating-stars">
                                              <ul id="Cstars">
                                                  <li className="star" title="Poor" data-value="1">
                                                      <i className="fa fa-star fa-fw"></i>
                                                  </li>
                                                  <li className="star" title="Fair" data-value="2">
                                                      <i className="fa fa-star fa-fw"></i>
                                                  </li>
                                                  <li className="star" title="Good" data-value="3">
                                                      <i className="fa fa-star fa-fw"></i>
                                                  </li>
                                                  <li className="star" title="Excellent" data-value="4">
                                                      <i className="fa fa-star fa-fw"></i>
                                                  </li>
                                                  <li className="star" title="WOW!!!" data-value="5">
                                                      <i className="fa fa-star fa-fw"></i>
                                                  </li>
                                              </ul>
                                          </div>
                                          <input type="hidden" name="Cleanness" id="Cleanness" value="0"/>
                                      </div>
                                      <div className="field">

                                          <label>
                                              Employees Presentation?
                                          </label>
                                          <div className="rating-stars">
                                              <ul id="Pstars">
                                                  <li className="star" title="Poor" data-value="1">
                                                      <i className="fa fa-star fa-fw"></i>
                                                  </li>
                                                  <li className="star" title="Fair" data-value="2">
                                                      <i className="fa fa-star fa-fw"></i>
                                                  </li>
                                                  <li className="star" title="Good" data-value="3">
                                                      <i className="fa fa-star fa-fw"></i>
                                                  </li>
                                                  <li className="star" title="Excellent" data-value="4">
                                                      <i className="fa fa-star fa-fw"></i>
                                                  </li>
                                                  <li className="star" title="WOW!!!" data-value="5">
                                                      <i className="fa fa-star fa-fw"></i>
                                                  </li>
                                              </ul>
                                          </div>
                                          <input type="hidden" name="EmployeePresentation" id="EmployeePresentation" value="0"/>
                                      </div>
                                      <div className="field">
                                          <label for="inputEmail3">Your Image</label>
                                          <div>
                                              <div className="upload-btn-wrapper-custom">
                                                  <input id="TestimonialWriterImage" name="TestimonialWriterImage" className="feedback-input" type="file" value=""/>
                                              </div>
                                          </div>
                                      </div>
                                      <button type="submit" value="Login" className="text-center submit-btn ">Submit</button>
  </form>                    </div>
                  </div>
    <Footer />
<style global>{`
  .mainContent.contactPage {
  margin-top: 100px;
}
.FeedbackBox .feedback-input{
  background: #f4f4f4;
      border: 0px;
      width: 100%;
      resize: none;
      font-family: 'Arimo', sans-serif;
      font-weight: 400;
      font-size: 15px;
      padding: 12px 15px;
}
.FeedbackBox .feedback-textarea{
  background: #f4f4f4;
    border: 0px;
    width: 100%;
    resize: none;
    font-family: 'Arimo', sans-serif;
    font-weight: 400;
    font-size: 15px;
    padding: 10px 15px;
    height: 200px;
}
.FeedbackBox .submit-btn{
  width: auto;
border: 0px;
font-weight: 700;
color: #ffffff;
font-size: 18px;
padding: 10px 53px;
background: #f00;
border-radius: 0px;
margin-top: 15px;
}

.contactPage {
  margin-bottom: 60px;
}
  .FeedbackBox {
      border: 1px solid #eaeaea;
      padding: 54px 80px;
  }
  .contactPage .field {
    margin-bottom: 15px;
    width: 100%;
}
.contactPage .field label {
    font-family: 'Arimo', sans-serif;
    color: #4F504D;
    font-weight: 700;
    font-size: 14px;
}
.contactPage .field input {
    background: #f4f4f4;
    border: 0px;
    width: 100%;
    resize: none;
    font-family: 'Arimo', sans-serif;
    font-weight: 400;
    font-size: 15px;
    padding: 12px 15px;
}
.text-danger {
    color: #dc3545!important;
}
.contactPage .field textarea {
    background: #f4f4f4;
    border: 0px;
    width: 100%;
    resize: none;
    font-family: 'Arimo', sans-serif;
    font-weight: 400;
    font-size: 15px;
    padding: 10px 15px;
    height: 200px;
  }
  .rating-stars ul {
    list-style-type: none;
    padding: 0;
    -moz-user-select: none;
    -webkit-user-select: none;
}
.rating-stars ul > li.star {
    display: inline-block;
}
.contactPage .contactForm button {
    width: auto;
    border: 0px;
    font-family: 'Arimo', sans-serif;
    font-weight: 700;
    color: #ffffff;
    font-size: 18px;
    display: inline-block;
    padding: 10px 53px;
    background: #f00;
    border-radius: 0px;
    float: left;
  }


`}</style>


    </>)
}
export default FeedBack;
