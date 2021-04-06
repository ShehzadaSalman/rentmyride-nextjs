import Header from "../components/Header";
import Footer from "../components/footer";
import TopBar from "../components/TopBar";
import { useRef, useState } from "react";
import InnerNavBanner from "../components/InnerNavBanner";
import CustomerReview from "../components/customer-review";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const [show, setShow] = useState(false);
  const lessRef = useRef(null);
  const btnLoads = useRef(null);

  const toggleReadMore = (e) => {
    e.preventDefault();
    if (show === true) {
      lessRef.current.style.height = "400px";
      setShow(!show);
      //   btnLoads.current.style.background =
      //     "-webkit-linear-gradient( rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100% )";
      btnLoads.current.style.background = "#fff";
    } else if (show === false) {
      lessRef.current.style.height = "auto";
      setShow(!show);
    }
  };
  return (
    <>
      <TopBar />
      <Header />
      <InnerNavBanner page="About Us" />{" "}
      <div className="aboutUs">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-md-7">
              <div className="heading">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 col-md-12">
                      <h2>
                        RENT MYRIDE <cite>Click It! Yalla Let’s Go!</cite>{" "}
                        <span></span>
                      </h2>

                      <span>
                        <img src="images/border.png" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-5 col-md-5">
              <div className="mainCar">
                <img src="images/mainCar.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutContents mt-5" style={{ overflow: "hidden" }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 discription">
              <div
                className="aboutdetail"
                ref={lessRef}
                style={{ height: "400px" }}
              >
                <h5>Focus Customers First, Profits Will Follow</h5>
                <p>
                  The heart of our business philosophy lies in building a
                  customer base with an intent to develop long terms ties for
                  mutual contentment. We believe in fostering a focus on
                  sustainability, not merely because it’s smart for MyRide, but
                  because we believe in bringing a difference to premium
                  mobility for future generations. Whether its modern era fleet
                  of Supercars of all exotic brands that we offer or its 24/7
                  customer service of MyRide | luxury car rental in Dubai. Being
                  inspired by innovation, we are in a unique position to live
                  through our core philosophy of turning ordinary into
                  EXTRAORDINARY. Growth cannot be attained without our business
                  partners and stakeholders. Our values are shared amongst all
                  to ensure a sustainable mutual growth beneficial to everyone
                  associated and impacted directly or indirectly by the
                  business.
                </p>

                <p>
                  Shift to top gear and make your trip extraordinary by renting
                  high-end cars from us. MyRide | luxury car rental in Dubai is
                  an online platform to provide an exclusive fleet of high-end
                  cars from all over the world under one roof. We are experts at
                  making your experience the BEST. Renting a luxury car at
                  MyRide means, Drive Premium Pay Economy in addition to the
                  desired pickup/drop off locations, 24/7 roadside assistance
                  and much more.
                </p>
                <h5>Making Trips As Exciting As Destinations</h5>
                <p>
                  At MyRide | luxury car rental in Dubai, you will get the
                  latest high-end vehicle models from top manufacturers such as
                  Ferrari, Mercedes Benz, Lamborghini, Range Rover, Rolls Royce,
                  Cadillac, Porsche, Audi, Bentley, Mclaren, etc. Choose a
                  high-performance luxury car from a comprehensive premium fleet
                  to begin the extraordinary journey. Browse our website to know
                  what else we offer to Roll an unforgettable experience with
                  MyRide across Dubai ANYWHERE, ANYTIME.
                </p>

                <h5>Message From The CEO</h5>
                <p>
                  “Your success ALTITUDE is determined on how GROUNDED you are
                  with the needs of your Customer. Quality service is the only
                  shortcut to success and the best advertisement that goes viral
                  instantly.” - Said, <strong>Mr. Zahid.</strong>
                </p>
                <h5>Meet Our Biggest Supercar Fleet</h5>

                <p>
                  Be the Envy of all with our hottest Supercar Fleet including
                  Stretch limousines, sports cars, convertible, SUV, Sedan, and
                  Saloons. We have enlisted more than 5,000 premium supercars in
                  our fleet, collected from all over the world – JUST FOR YOU!
                  Search your car with us Based on your features preference and
                  filter out the best possible available options to make up a
                  wise choice. We are one stop hub to connect you with reliable
                  car rental companies across Dubai. That’s why you get the best
                  Rates | zero booking fees, to begin with, and the best
                  services on Go!
                </p>

                <p>
                  Be it Ferrari | Range Rover | Porsche | Audi | Mercedes Benz |
                  BMW | Lamborghini | Limousines or more - there is always
                  something for everyone under 1 platform to take the Road. Get
                  aboard with us. Your luxury car awaits you at MyRide.ae.
                </p>
              </div>
              <div
                className="pt-4 position-relative"
                style={{ backgroundColor: "#fff" }}
                ref={btnLoads}
              >
                {show ? (
                  <a href="#" className="shw" onClick={toggleReadMore}>
                    <FontAwesomeIcon icon={faAngleUp} size="sm" /> Hide
                  </a>
                ) : (
                  <a href="#" className="les" onClick={toggleReadMore}>
                    <FontAwesomeIcon icon={faAngleDown} size="sm" /> Read More
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Missiona nd Vission */}
      <div className="missionVission">
        <div className="container">
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10 col-md-10">
              <div className="row">
                <div className="col-sm-4 col-md-4">
                  <div className="desti">
                    <figure>
                      <img src="images/team.png" />
                    </figure>
                    <h3>
                      <a href="#">
                        Mission <img src="images/border.png" />
                      </a>
                    </h3>
                    <p>
                      To be the global brand that provides the best premium and
                      luxury transport to anyone and anywhere within minutes.
                    </p>
                  </div>
                </div>
                <div className="col-sm-4 col-md-4">
                  <div className="desti">
                    <figure>
                      <img src="images/team.png" />
                    </figure>
                    <h3>
                      <a href="#">
                        Vission <img src="images/border.png" />
                      </a>
                    </h3>
                    <p>
                      To be the global brand that provides the best premium and
                      luxury transport to anyone and anywhere within minutes.
                    </p>
                  </div>
                </div>
                <div className="col-sm-4 col-md-4">
                  <div className="desti">
                    <figure>
                      <img src="images/team.png" />
                    </figure>
                    <h3>
                      <a href="#">
                        Our Goal <img src="images/border.png" />
                      </a>
                    </h3>
                    <p>
                      To be the global brand that provides the best premium and
                      luxury transport to anyone and anywhere within minutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about contents */}
      <div className="aboutContents">
        <div className="heading">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <h2>
                  Why Us <span></span>
                </h2>
                <span>
                  <img src="images/border.png" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h6>WHAT MAKES MYRIDE LUXURY CAR RENTAL IN DUBAI SO AWESOME?</h6>
              <p>
                MyRide - Get Aboard to Make Trips as Exciting as Destinations
                With Us Hiring a luxury car rental in Dubai at MyRide means you
                will be privileged with:
              </p>

              <ul>
                <li>
                  Making premium mobility Accessible | Easy | Reliable | Fast
                  with a click
                </li>
                <li>
                  Exotic Fleet of exclusive Luxurious cars from all over the
                  world available under one platform
                </li>
                <li>
                  4 step customer journey. Get registered online | choose your
                  dream ride| make payment | Yalla lets go!
                </li>
                <li>
                  Be it an hourly | daily or weekly rental, we have got you
                  covered{" "}
                </li>
                <li>Delivered at the preferred location within 60 minutes</li>
                <li>24/7 roadside assistance available</li>
                <li>Zero to minimum security deposit guaranteed</li>
                <li>Transparent cost, no hidden charges</li>
                <li>Flexible payment options</li>
                <li>
                  Freedom to custom schedule |driving hours whether self-driven
                  or chauffeured driven
                </li>
                <li>RTA certified chauffeur </li>
                <li>Comprehensive mileage limits </li>
                <li>Same day booking confirmation</li>
                <li>Basic Insurance Coverage and much more!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Customer Review  */}
      <CustomerReview />
      {/* Brands we're working with */}
      <div className="brandsWrap clientsLogo pt-4">
        <div className="heading">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <h2>Who We Work With</h2>
                <span>
                  <img src="images/border.png" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="images">
          <div className="row">
            <div className=" col-6 col-md-2 my-2">
              <h3>
                <a href="#">RPM RAC</a>
              </h3>
            </div>

            <div className="col-6 col-md-2 my-2">
              <h3>
                <a href="#">DC RAC</a>
              </h3>
            </div>
            <div className="col-6 col-md-2 my-2">
              <h3>
                <a href="#">X RAC</a>
              </h3>
            </div>

            <div className="col-6 col-md-2 my-2">
              <h3>
                <a href="#">SUPERIOR RAC</a>
              </h3>
            </div>

            <div className="col-6 col-md-2 my-2">
              <h3>
                <a href="#">SKY VIP LIMO</a>
              </h3>
            </div>

            <div className="col-6 col-md-2 my-2">
              <h3>
                <a href="#">Excellence LIMO</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
