import Footer from "../../components/footer";
import Header from "../../components/Header";
import { useState } from "react";
import TopBar from "../../components/TopBar";
import InnerNavBanner from "../../components/InnerNavBanner";
import DemoNavSlider from "../../components/DemoNavSlider";
import axios from "axios";
import CarDetailSlider from "../../components/CarDetailSlider";
import SideNav from "../../components/SideNav";
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
// import customerReview from "../components/customer-review";
import AccordionFAQ from "../../components/AccordionFAQ";
import CarFeatures from "../../components/CarFeatures";
import CarDescription from "../../components/CarDescription";
import CustomerReview from "../../components/customer-review";
import PaymentCarDetail from "../../components/PaymentCarDetail";

const detail = {
  dailyrent: 200,
  seats: 4,
  doors: 2,
  deposit: 300,
  carfeatures: [
    {
      icon:
        "https://cdn.rentmyride.ae/Portal/content/myrideImages/VehicleFeature/Cruise-Control.png",
      title: "Cruise Control",
    },
    {
      icon:
        "https://cdn.rentmyride.ae/Portal/content/myrideImages/VehicleFeature/Fog-Lights.png",
      title: "Fog Lights",
    },
    {
      icon:
        "https://cdn.rentmyride.ae/Portal/content/myrideImages/VehicleFeature/Front-Airbags.png",
      title: "Front Airbags",
    },
    {
      icon:
        "https://cdn.rentmyride.ae/Portal/content/myrideImages/VehicleFeature/Parking-Sensors.png",
      title: "Parking Sensors",
    },
    {
      icon:
        "https://cdn.rentmyride.ae/Portal/content/myrideImages/VehicleFeature/Leather-Seats.png",
      title: "Leather Seats",
    },
  ],
  description: "lorem ipsum dolor",
  crouselImages: [
    "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicleType/Rent-Mercedes-Benz-E300-in-Dubai1.jpg",
    "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/77a08ea582004e71ae3a6d278a5112f0Rent-Mercedes-Benz-E-300-in-Dubai-RentMyRide.jpg",
    "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/73ee83ec0d3d4c9aa7eca59f774913f6Mercedes-Benz-E-300-Rental-in-Dubai.jpg",
    "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/22b9c8c8fb1f43deb7162dce5b24fd03Mercedes-Benz-E-300-Rental-in-Dubai-RentMyRide.jpg",
    "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/ec227df3b1bd45fbb8e0a93972822095Mercedes-Benz-E-300-Rent-in-Dubai.jpg",
    "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/16e1dcc39f3e4c12824b2e4645f99336Mercedes-Benz-E-300-Rent-in-Dubai-RentMyRide.jpg",
    "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/bc805eb2c7b8412598b4060eeb19552cHire-Mercedes-Benz-E-300-in-Dubai.jpg",
    "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/562de42440a84c3fbc99025560fd982aRent-A-Mercedes-Benz-E-300-in-Dubai-RentMyRide.jpg",
    "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/dc878ea5ff244263ad6894cc246c8cc0Mercedes-Benz-E-300-Car-Hire-in-Dubai.jpg",
  ],
  crouselImageNavigation: [
    "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicleType/Rent-Mercedes-Benz-E300-in-Dubai1.jpg",
    "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/77a08ea582004e71ae3a6d278a5112f0Rent-Mercedes-Benz-E-300-in-Dubai-RentMyRide.jpg",
    "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/73ee83ec0d3d4c9aa7eca59f774913f6Mercedes-Benz-E-300-Rental-in-Dubai.jpg",
    "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/22b9c8c8fb1f43deb7162dce5b24fd03Mercedes-Benz-E-300-Rental-in-Dubai-RentMyRide.jpg",
    "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/ec227df3b1bd45fbb8e0a93972822095Mercedes-Benz-E-300-Rent-in-Dubai.jpg",
    "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/16e1dcc39f3e4c12824b2e4645f99336Mercedes-Benz-E-300-Rent-in-Dubai-RentMyRide.jpg",
    "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/bc805eb2c7b8412598b4060eeb19552cHire-Mercedes-Benz-E-300-in-Dubai.jpg",
    "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/562de42440a84c3fbc99025560fd982aRent-A-Mercedes-Benz-E-300-in-Dubai-RentMyRide.jpg",
    "https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/dc878ea5ff244263ad6894cc246c8cc0Mercedes-Benz-E-300-Car-Hire-in-Dubai.jpg",
  ],
};

const DetailPage = () => {
  const [paymentform, setPaymentForm] = useState({
    fromDate: "",
    toDate: "",
    fromTime: "",
    toTime: "",
    pickupLocation: "",
    dropdownLocation: "",
    Discount: "",
  });

  const calculateRent = () => {};
  const [showPaymentDetail, setPaymentDetail] = useState(null);
  return (
    <>
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
                <CarFeatures />
                <CarDescription />
                <AccordionFAQ />
              </div>
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
                              onDayChange={(day) =>
                                setPaymentForm({
                                  ...paymentform,
                                  fromDate: day,
                                })
                              }
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
                        onClick={calculateRent}
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
                {showPaymentDetail && <PaymentCarDetail />}

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
          <div className="mb-5">
            <CustomerReview />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
