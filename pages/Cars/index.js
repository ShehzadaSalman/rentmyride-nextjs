import Head from "next/head";
import dynamic from "next/dynamic";
import CustomerReview from "../../components/customer-review";
import InnerNavBanner from "../../components/InnerNavBanner";
import SearchFilter from "../../components/sidebar/SearchFilter";
import BrandFilter from "../../components/sidebar/BrandFilter";
import NewHiredPackageSlider from "../../components/homepage/NewHiredPackageSlider";
import ListingCard from "../../components/ListingCard";
import ListingFilter from "../../components/ListingFilter";
import SideNavFilter from "../../components/SideNavFilter";
import PaginationComponent from "../../components/PaginationComponent";

import { useState } from "react";
const CategoryPage = ({ listing, info }) => {
  const [listingLayout, setListingLayout] = useState("list");
  return (
    <>
      <SideNavFilter />
      <InnerNavBanner page="Car Rental" />
      <main className="main-wrapper container">
        {/* the sidebar is here */}
        <div className="sidebar pr-3">
          <SearchFilter />
          <BrandFilter />
        </div>
        {/* the main content comes here */}
        <div className="main-content">
          <div className="px-3">
            <ListingFilter
              listingLayout={listingLayout}
              setListingLayout={setListingLayout}
            />
          </div>

          <div className="row hiredCarss">
            {listing.map((li, key) => (
              <div
                key={key}
                className={`mb-2  ${
                  listingLayout === "list" ? "col-md-12" : "col-md-4"
                }`}
              >
                <ListingCard listingLayout={listingLayout} data={li} />
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center">
            <PaginationComponent data={info} />
          </div>
          {/* pagination ends here */}
        </div>
      </main>
      <div className="container"></div>
      <div className="container text-center mt-5 mb-4">
        <h2>
          THE MOST EXOTIC LUXURY CAR RENTAL COMPANY IN DUBAI YOU MUST EXPERIENCE
        </h2>
        <p>
          Dubai is Paris for the elite lifestyle. High-end supercars that are
          found cruising around its streets are one of a kind. RentMyRide rent a
          luxury car in dubai makes it exclusive yet easy to get luxury car
          rental in Dubai with a comprehensive selection of supercars collected
          from all over the world under one roof luxury cars for rent in dubai
          luxury car hire dubai. As the best car rental company, irrespective of
          your location, we are always ready for luxury car hire dubai you led
          by VIP customer service anywhere, anytime rent a luxury car in dubai.{" "}
        </p>

        <h2>Turn heads with RentMyRide exclusive fleet made JUST FOR YOU!</h2>
        <p>
          Hiring a premium car rental in Dubai at RentMyRide means you will be
          privileged with 24/7 roadside assistance, freedom to custom your
          schedule along with guaranteed competitive terms luxury car hire
          dubai, and more luxury cars for rent in dubai. Whether you are looking
          for a luxury car rental service to hire Ferrari, Lamborghini, Range
          Rover, Rolls Royce, Porsche, Audi, Mercedes Benz, Bentley, McLaren,
          Nissan, Maserati, Cadillac, Dodge or limousine luxury cars for rent in
          dubai, RentMyRide luxury car rental company is your GO-TO destination
          rent a luxury car in dubai.
        </p>
      </div>

      <CustomerReview />
      <style global jsx>
        {`
          .main-wrapper {
            display: flex;
          }
          .main-wrapper .sidebar {
            flex: 1;
          }
          .main-wrapper .main-content {
            flex: 3;
          }
        `}
      </style>
    </>
  );
};

CategoryPage.defaultProps = {
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

{
  /* remember that it won't work on the production because we're using the api from the nextjs rather from outside 
  and to make this page work simply connect to another api
  */
}
// export async function getServerSideProps(context) {
//   {
//   }
//   const { page } = context.query;
//   const res = await axios.get(
//     `http://localhost:3000/api/dynamicpagination?pid=${page}`
//   );

//   const response = await res.data.list;
//   const info = await res.data.meta;
//   return {
//     props: {
//       listing: response,
//       info,
//     },
//   };
// }

export default CategoryPage;
