import InnerNavBanner from "../components/InnerNavBanner";
import Image from "next/image";
import CustomerReview from "../components/customer-review";
import customerReview from "../components/customer-review";
import MegaOfferPackage from "../components/MegaOfferPackageDetail";
import ListingCard from "../components/ListingCard";
import ModalVideo from "react-modal-video";
import { useState } from "react";

const MegaOffers = ({ listing }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="custom"
        autoplay
        isOpen={isOpen}
        url="https://static.videezy.com/system/resources/previews/000/004/015/original/waves_shore.mp4"
        onClose={() => setOpen(false)}
      />
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
                    <p style={{ color: "#212121", fontSize: "16px" }}>
                      The most famous and celebrated Mega Offers of RentMyRide
                      are back! This time we are offering a 95% discount on the
                      rental of a super or luxury car of your choice. Ohhhh Yes!
                      You read that correctly! All you have to do is buy a
                      subscription based on the number of days you wish to
                      participate, and each day there will be a new surprise
                      waiting for you in each category. You will know exactly
                      when the offer will be active by the time tracker under
                      the car. You can choose from the categories listed below.
                      Each category has the most desirable cars, and you can
                      have any car you, like but you have to be quick because
                      the bookings are on a FIRST COME FIRST SERVE basis. If for
                      some reason, you missed out on the deal, WORRY NOT!
                      Because on the next day the offer will be active on
                      another amazing Supercar. Here are the categories.
                      <b>Premium</b>
                      <b>Luxury</b>
                      <b>Super Luxury</b>
                      This is not all, you can have all your money back in your
                      wallet if you don’t avail of any of the deals (T&amp;C
                      Apply). So what are you waiting for? hurry up and
                      subscribe for the most irresistible offer of the year and
                      drive the waves of thrill every day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 d-flex justify-content-center align-items-center">
            <div className="w-100 vedioWrap megaoffer videoplayer d-flex justify-content-center align-items-center">
              <span className="d-flex" onClick={() => setOpen(true)}>
                <Image
                  src="/images/videoicon.png"
                  height="144"
                  width="144"
                  alt="video player"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row hiredCarss mt-5 mb-5">
          <div className="col-md-4">
            <ListingCard listingLayout="grid" data={listing[0]} />
          </div>
          <div className="col-md-4">
            <ListingCard listingLayout="grid" data={listing[0]} />
          </div>
          <div className="col-md-4">
            <ListingCard listingLayout="grid" data={listing[0]} />
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

MegaOffers.defaultProps = {
  listing: [
    {
      id: "",
      title: "Mercedes-Benz E300",
      Seats: 3,
      Doors: 4,
      isAutomatic: false,
      pricePerDay: 7000,
      depositAmount: 3000,
      detailPage: "",
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
    },
    {
      id: "",
      title: "Mercedes-Benz E300",
      Seats: 3,
      Doors: 4,
      isAutomatic: false,
      pricePerDay: 7000,
      depositAmount: 3000,
      detailPage: "",
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
    },
    {
      id: "",
      title: "Mercedes-Benz E300",
      Seats: 3,
      Doors: 4,
      isAutomatic: false,
      pricePerDay: 7000,
      depositAmount: 3000,
      detailPage: "",
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
    },
    {
      id: "",
      title: "Mercedes-Benz E300",
      Seats: 3,
      Doors: 4,
      isAutomatic: false,
      pricePerDay: 7000,
      depositAmount: 3000,
      detailPage: "",
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
    },
  ],
  info: {
    currentPage: 1,
    totalPages: 3,
    pagesList: [1, 2, 3],
  },
};

export default MegaOffers;
