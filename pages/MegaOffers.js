import InnerNavBanner from "../components/InnerNavBanner";
import Image from "next/image";
import CustomerReview from "../components/customer-review";
import customerReview from "../components/customer-review";
import MegaOfferPackage from "../components/MegaOfferPackageDetail";
const MegaOffers = () => {
  return (
    <>
      <div className="container mt-5">
        <img
          src="https://cdn.rentmyride.ae/Portal/content/myrideImages/MegaOfferSlider/rentmyride_banner.png"
          alt="mega offers"
          className="img-fluid"
        />
        <div className="row">
          <div className="col-sm-6 col-md-6">
            <div className="heading">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-12">
                    <h2>
                      Riding the Supercar of Your Dreams is Just a Click Away!
                    </h2>
                    The most famous and celebrated Mega Offers of RentMyRide are
                    back! This time we are offering a 95% discount on the rental
                    of a super or luxury car of your choice. Ohhhh Yes! You read
                    that correctly! All you have to do is buy a subscription
                    based on the number of days you wish to participate, and
                    each day there will be a new surprise waiting for you in
                    each category. You will know exactly when the offer will be
                    active by the time tracker under the car. You can choose
                    from the categories listed below. Each category has the most
                    desirable cars, and you can have any car you, like but you
                    have to be quick because the bookings are on a FIRST COME
                    FIRST SERVE basis. If for some reason, you missed out on the
                    deal, WORRY NOT! Because on the next day the offer will be
                    active on another amazing Supercar. Here are the categories.
                    <b>Premium</b>
                    <b>Luxury</b>
                    <b>Super Luxury</b>
                    This is not all, you can have all your money back in your
                    wallet if you don’t avail of any of the deals (T&amp;C
                    Apply). So what are you waiting for? hurry up and subscribe
                    for the most irresistible offer of the year and drive the
                    waves of thrill every day.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="vedioWrap megaoffer videoplayer">
              <div className="vimeo-wrapper"></div>
              <div className="loaders">
                <img src="/images/loader.gif" />
              </div>

              <a
                href="https://cdn.rentmyride.ae/Portal/content/myrideImages/MembershipVideo/mega offer.mov"
                className="video"
              >
                <Image
                  src="/images/videoicon.png"
                  height="144"
                  width="144"
                  alt="video player"
                />
                {/* <img
                  className="video_icon"
                  src="/Assets/images/videoicon.png"
                /> */}
              </a>
            </div>
          </div>
        </div>
      </div>
      <MegaOfferPackage />
      <div className="container">
        <CustomerReview />
      </div>
    </>
  );
};
export default MegaOffers;
