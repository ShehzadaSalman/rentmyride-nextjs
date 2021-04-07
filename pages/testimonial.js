import Head from "next/head";
import dynamic from "next/dynamic";
const TopBar = dynamic(import("../components/TopBar"), {
  loading: () => <p>Loading...</p>,
});
const Footer = dynamic(() => import("../components/footer"), { ssr: false });
import CustomerReview from "../components/customer-review";
import SideNav from "../components/SideNav";
import InnerNavBanner from "../components/InnerNavBanner";
const Header = dynamic(() => import("../components/Header"), { ssr: false });
import SearchFilter from "../components/sidebar/SearchFilter";
import BrandFilter from "../components/sidebar/BrandFilter";
import NewHiredPackageSlider from "../components/homepage/NewHiredPackageSlider";
import ListingCard from "../components/ListingCard";
import ListingFilter from "../components/ListingFilter";
import Image from "next/image";

const TestimonialPage = () => {
  return (
    <>
      <InnerNavBanner />
      <div class="heading">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12">
              <h6>what customers are saying</h6>
              <h2>Testimonial</h2>
              <span>
                <img src="images/border.png" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="testimonialWrap testimonialPage">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12">
              <div class="desti">
                <figure>
                  <img src="images/quote.png" />
                  <p>
                    We've rented one Mercedes G63 and one Lamborghini Huracan
                    through myride.ae and they've got the BEST service, we got
                    called asap and messaged about the cars, and got both of
                    them in the same day.
                  </p>
                </figure>
                <div class="bottomD">
                  <img src="images/user.png" />
                  <h3>
                    Alina Ceusan{" "}
                    <span>
                      Customer{" "}
                      <cite>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </cite>
                    </span>
                  </h3>
                </div>
              </div>

              <div class="desti">
                <figure>
                  <img src="images/quote.png" />
                  <p>
                    My ride recommended the Lamborghini Huracan. It was
                    delivered to my Hotel by two lovely women, who I assumed
                    were models. All of the documents were straight forward and
                    in English.
                  </p>
                </figure>
                <div class="bottomD">
                  <img src="images/user.png" />
                  <h3>
                    Robert Chaney{" "}
                    <span>
                      Customer{" "}
                      <cite>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </cite>
                    </span>
                  </h3>
                </div>
              </div>

              <div class="desti">
                <figure>
                  <img src="images/quote.png" />
                  <p>
                    Amazing services with professional staffs, quick response
                    time and usually responds with in minutes. Multiple offers
                    and deals with amazing packages.
                  </p>
                </figure>
                <div class="bottomD">
                  <img src="images/user.png" />
                  <h3>
                    Ashir Ahmed{" "}
                    <span>
                      Customer{" "}
                      <cite>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </cite>
                    </span>
                  </h3>
                </div>
              </div>
              <div class="desti">
                <figure>
                  <img src="images/quote.png" />
                  <p>
                    Amazing service , 1h before rental last minute call & Afsar
                    responded to the request perfectly +5 stars !!!!
                  </p>
                </figure>
                <div class="bottomD">
                  <img src="images/user.png" />
                  <h3>
                    Matheu Leir{" "}
                    <span>
                      Customer{" "}
                      <cite>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </cite>
                    </span>
                  </h3>
                </div>
              </div>
              <div class="desti">
                <figure>
                  <img src="images/quote.png" />
                  <p>
                    I had the pleasure of renting 2 cars from Myride.ae . A
                    maserati Grabcabrio and a Dodge Challenger. The staff were
                    very professional. They went out of there way to make sure
                    everything was perfect.
                  </p>
                </figure>
                <div class="bottomD">
                  <img src="images/user.png" />
                  <h3>
                    Mr.Khurshid{" "}
                    <span>
                      Customer{" "}
                      <cite>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </cite>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TestimonialPage;
