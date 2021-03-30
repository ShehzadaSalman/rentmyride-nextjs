import Footer from "../components/footer";
import Header from "../components/Header";
import TopBar from "../components/TopBar";
import InnerNavBanner from "../components/InnerNavBanner";
import DemoNavSlider from "../components/DemoNavSlider";
import axios from "axios";
import CarDetailSlider from "../components/CarDetailSlider";
import SideNav from "../components/SideNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import DayPickerInput from "react-day-picker/DayPickerInput";
import {
  faCheck,
  faPhone,
  faMobileAlt,
  faCalendar,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import customerReview from "../components/customer-review";
const DetailPage = ({ detail, info }) => {
  console.log(detail);
  return (
    <>
      <TopBar />
      <Header />
      <SideNav />
      <InnerNavBanner page="Ferrari 488 GTB" />
      <div className="mainContent">
        <div className="container">
          <div className="row">
            <div className="order-12 order-md-1  col-sm-8 col-md-8">
              <div className="single HiredCars">
                <CarDetailSlider
                  mainCarousel={detail.crouselImages}
                  carouselNav={detail.crouselImageNavigation}
                />
                {/* <div className="specification">
                  <h3>Car Features</h3>
                  <ul>
                    <li title="Registration">
                      <cite>Registration</cite>
                      <span>2019</span>
                    </li>
                    <li title="Condition">
                      <cite>Condition</cite>
                      <span>New</span>
                    </li>
                    <li title="Brand / Model">
                      <cite>Brand / Model</cite>
                      <span>Ferrai 488 GTB</span>
                    </li>
                    <li title="Mileage">
                      <cite>Mileage</cite>
                      <span>20,000 MI</span>
                    </li>
                  </ul>
                  <ul className="showLess">
                    <li title="Body Style">
                      <cite>Body Style</cite>
                      <span>Sedan</span>
                    </li>
                    <li title="Transmission">
                      <cite>Transmission</cite>
                      <span>8-Speed A/T</span>
                    </li>
                    <li title="Color">
                      <cite>Color</cite>
                      <span>Red</span>
                    </li>
                    <li title="Car Type">
                      <cite>Car Type</cite>
                      <span>Sports Car</span>
                    </li>
                    <li title="Fuel Type">
                      <cite>Fuel Type</cite>
                      <span>Gasoline</span>
                    </li>
                    <li title="Door">
                      <cite>Door</cite>
                      <span>4 Doors</span>
                    </li>
                    <li title="Engine">
                      <cite>Engine</cite>
                      <span>255 hp @5000 rpm</span>
                    </li>
                    <li title="No. Of Seats">
                      <cite>No. Of Seats</cite>
                      <span>5 Seats</span>
                    </li>
                  </ul>
                  <div className="btnLoads spcifi">
                    <a href="#" className="shw">
                      <i className="fa fa-angle-down"></i> Read More
                    </a>
                    <a href="#" className="les">
                      <i className="fa fa-angle-up"></i> Hide
                    </a>
                  </div>
                </div> */}

                <div className="Features mt-5">
                  <h3>Car Features</h3>
                  <ul>
                    <li title="Cruise Control">
                      <img src="images/fet1.png" />
                      Cruise Control: Yes
                    </li>
                    <li title="Fog Lights">
                      <img src="images/fet2.png" />
                      Fog Lights
                    </li>
                    <li title="Front Air Bags">
                      <img src="images/fet3.png" />
                      Front Air Bags
                    </li>
                    <li title="Convertible Sports Car">
                      <img src="images/fet4.png" />
                      Convertible Sports Car
                    </li>
                    <li title="Reverse Camera">
                      <img src="images/fet5.png" />
                      Reverse Camera
                    </li>
                    <li title="Leather Seats">
                      <img src="images/fet6.png" />
                      Leather Seats
                    </li>
                  </ul>
                  <ul className="showLEss">
                    <li title="Premium Audio">
                      <img src="images/fet7.png" />
                      Premium Audio
                    </li>
                    <li title="Butterfly Doors">
                      <img src="images/fet8.png" />
                      Butterfly Doors
                    </li>
                    <li title="Built-in GPS">
                      <img src="images/fet9.png" />
                      Built-in GPS
                    </li>
                    <li title="Push Button Ignition">
                      <img src="images/fet10.png" />
                      Push Button Ignition
                    </li>
                    <li title="USB">
                      <img src="images/fet11.png" />
                      USB
                    </li>
                    <li title="Power Windows">
                      <img src="images/fet12.png" />
                      Power Windows
                    </li>
                    <li title="Front & Rear Airbags">
                      <img src="images/fet13.png" />
                      Front & Rear Airbags
                    </li>
                    <li title="Bluetooth">
                      <img src="images/fet14.png" />
                      Bluetooth
                    </li>
                    <li title="Power Mirrors">
                      <img src="images/fet15.png" />
                      Power Mirrors
                    </li>
                    <li title="Parking Sensors">
                      <img src="images/fet16.png" />
                      Parking Sensors
                    </li>
                    <li title="Power Seats">
                      <img src="images/fet17.png" />
                      Power Seats
                    </li>
                    <li title="Power Door Locks">
                      <img src="images/fet18.png" />
                      Power Door Locks
                    </li>
                  </ul>
                  <div className="btnLoads fetur">
                    <a href="#" className="shw">
                      <i className="fa fa-angle-down"></i> Read More
                    </a>
                    <a href="#" className="les">
                      <i className="fa fa-angle-up"></i> Hide
                    </a>
                  </div>
                </div>

                <div className="discription">
                  <h3>Description</h3>
                  <div className="shwCnt">
                    <p>{detail.description}</p>
                  </div>

                  <div className="shadows">
                    <a href="#" className="shw">
                      <i className="fa fa-angle-down"></i> Read More
                    </a>
                    <a href="#" className="les">
                      <i className="fa fa-angle-up"></i> Hide
                    </a>
                  </div>
                </div>

                <div id="accordion">
                  <h3 className="acrdBtn ui-state-active">
                    <span>
                      1 <i></i>
                    </span>
                    Ferrari 488 GTB IN DUBAI{" "}
                    <em className="fa fa-angle-down"></em>{" "}
                    <em className="fa fa-angle-up"></em>
                  </h3>
                  <div className="acrdContent frst">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  <h3 className="acrdBtn">
                    <span>
                      2 <i></i>
                    </span>
                    DELIVERY AND PICK UP <em className="fa fa-angle-down"></em>{" "}
                    <em className="fa fa-angle-up"></em>
                  </h3>
                  <div className="acrdContent">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  <h3 className="acrdBtn">
                    <span>
                      3 <i></i>
                    </span>
                    DEPOSIT AND REFUND DURATION{" "}
                    <em className="fa fa-angle-down"></em>{" "}
                    <em className="fa fa-angle-up"></em>
                  </h3>
                  <div className="acrdContent">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  <h3 className="acrdBtn">
                    <span>
                      4 <i></i>
                    </span>
                    TOLLS AND TAXES AND CANCELLATION POLICY{" "}
                    <em className="fa fa-angle-down"></em>{" "}
                    <em className="fa fa-angle-up"></em>
                  </h3>
                  <div className="acrdContent">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  <h3 className="acrdBtn">
                    <span>
                      5 <i></i>
                    </span>
                    DESCRIPTION <em className="fa fa-angle-down"></em>{" "}
                    <em className="fa fa-angle-up"></em>
                  </h3>
                  <div className="acrdContent">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </div>
              <customerReview />
            </div>

            <div className="order-1 order-md-12 col-sm-4 col-md-4">
              <div className="sideBar">
                <div className="sideWidget">
                  <h3>
                    <span>
                      <img src="images/caricon.png" />
                      <i></i>
                    </span>
                    Detail’s
                  </h3>
                  <div className="widgetContent mains">
                    <form>
                      <ul>
                        <li>
                          <span>Daily Rent</span> AED {detail.dailyrent}
                        </li>
                        <li>
                          <span>Number of Seats</span>
                          {detail.seats}
                        </li>
                        <li>
                          <span>Number of Doors</span>
                          {detail.doors}
                        </li>
                      </ul>
                      <div className="searchtype">
                        <label>
                          <input type="radio" name="type" defaultChecked />
                          <span>
                            <FontAwesomeIcon icon={faCheck} />
                            <div className="ml-1 d-inline">Pickup</div>
                          </span>
                        </label>
                        <label>
                          <input type="radio" name="type" />
                          <span>
                            <FontAwesomeIcon icon={faCheck} />
                            <div className="ml-1 d-inline">Delivery</div>
                          </span>
                        </label>
                      </div>

                      <div className="fieldset">
                        <div className="fields">
                          <label>
                            <span>-</span>From Date
                          </label>
                          <div>
                            <FontAwesomeIcon
                              fixedWidth
                              icon={faCalendar}
                              color="#4F504D"
                              className="calendar-icon-style position-absolute"
                              style={{ marginTop: "10px", right: "10px" }}
                            />
                            <DayPickerInput
                              // classNames={ { display: 'd-block'  } }
                              onDayChange={(day) => console.log(day)}
                              dayPickerProps={{
                                fromMonth: new Date(),
                              }}
                            />
                          </div>
                        </div>
                        <div className="fields">
                          <label>
                            <span>-</span>To Date
                          </label>
                          <div>
                            <FontAwesomeIcon
                              fixedWidth
                              icon={faCalendar}
                              color="#4F504D"
                              className="calendar-icon-style position-absolute"
                              style={{ marginTop: "10px", right: "10px" }}
                            />
                            <DayPickerInput
                              // classNames={ { display: 'd-block'  } }
                              onDayChange={(day) => console.log(day)}
                              dayPickerProps={{
                                fromMonth: new Date(),
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="fieldset">
                        <div className="fields">
                          <label>
                            <span>-</span>From Time
                          </label>
                          <div>
                            <select className="datepicker">
                              <option value="" disabled>
                                Please Select
                              </option>
                              <option>10:00 AM</option>
                              <option>11:00 AM</option>
                            </select>
                          </div>
                        </div>
                        <div className="fields">
                          <label>
                            <span>-</span>To Time
                          </label>
                          <div>
                            <select className="datepicker">
                              <option value="" disabled>
                                Please Select
                              </option>
                              <option>10:00 AM</option>
                              <option>11:00 AM</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="fieldset">
                        <div className="fields">
                          <label>
                            <span>-</span>Pickup Location
                          </label>
                          <input
                            type="text"
                            className="timepicker"
                            name=""
                            placeholder="Pickup Location"
                          />
                        </div>
                        <div className="fields">
                          <label>
                            <span>-</span>Drop Off Location
                          </label>
                          <input
                            type="text"
                            className="timepicker"
                            name=""
                            placeholder="Dropoff Location"
                          />
                        </div>
                      </div>
                      <div className="fieldWr">
                        <label>
                          <span> Deposit: {detail.deposit}</span>
                        </label>
                      </div>
                      <div className="fields">
                        <label>
                          <span>-</span>Coupon Code:
                        </label>
                        <input
                          type="text"
                          className="timepicker"
                          name=""
                          placeholder="Coupon Code:"
                        />
                      </div>

                      <button
                        type="submit"
                        id="Chk"
                        className="d-flex p-3 justify-content-center"
                        style={{ width: "100%" }}
                      >
                        CALCULATE
                      </button>
                    </form>
                  </div>
                </div>

                <div className="sideWidget">
                  <h3>
                    <span>
                      <img src="images/caricon.png" />
                      <i></i>
                    </span>
                    Payment{" "}
                  </h3>
                  <div className="widgetContent payments">
                    <ul className="payment">
                      <li>
                        From Date: <span>May 18, 2020</span>
                      </li>
                      <li>
                        To Date: <span>May 20, 2020</span>
                      </li>
                      <li>
                        From Time: <span>15:00</span>
                      </li>
                      <li>
                        To Time: <span>20:00</span>
                      </li>
                      <li>
                        Discount: <span>30%</span>
                      </li>
                      <li>
                        Deposit: <span>Zero Deposit</span>
                      </li>
                    </ul>
                    <cite>
                      Total Rent Amount<span>AED 2,650</span>
                    </cite>
                    <p>
                      <span>-</span>Deposit Payment Method{" "}
                      <small>Credit Card, Debit Card & Cash</small>
                    </p>
                    <p>
                      <input name="isGoing" type="checkbox" /> I agree that
                      myride.ae will arrange for me to rent Ferrari 488 GTB
                      under their Terms and Conditions and I agree to commit to
                      my financials obligations to the rental providers.{" "}
                    </p>
                    <a href="#" className="btn">
                      BOOK NOW
                    </a>
                    <div className="cards">
                      Secure Payment By <img src="images/paypal.png" />
                    </div>
                  </div>
                </div>

                <div className="sideWidget">
                  <h3>
                    <span>
                      <img src="images/caricon.png" />
                      <i></i>
                    </span>
                    Need Help?{" "}
                  </h3>
                  <div className="widgetContent helps">
                    <a href="#" className="my-2">
                      <FontAwesomeIcon icon={faPhone} color="#4f504d" /> +971
                      4566 7048
                    </a>
                    <a href="#" className="my-2">
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        size="lg"
                        color="#4f504d"
                      />{" "}
                      +971 4566 7048
                    </a>
                    <a href="#" className="my-2">
                      <FontAwesomeIcon
                        icon={faMobileAlt}
                        size="lg"
                        color="#4f504d"
                      />{" "}
                      +971 4566 7048
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await axios.get("http://localhost:3000/api/cardetail");
  const response = await res.data.details;
  const info = await res.data.meta;
  return {
    props: {
      detail: response,
      info,
    }, // will be passed to the page component as props
  };
}

export default DetailPage;
