import Head from "next/head";
import dynamic from "next/dynamic";
const TopBar = dynamic(import("../components/TopBar"), {
  loading: () => <p>Loading...</p>,
});
import axios from "axios";
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
import { carListing } from "../dummyData/carlisting";
import SideNavFilter from "../components/SideNavFilter";
import PaginationComponent from "../components/PaginationComponent";
const CategoryPage = ({ listing, info }) => {
  console.log(info);

  return (
    <>
      <SideNav />
      <SideNavFilter />
      <TopBar />
      <Header />
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
            <ListingFilter />
          </div>

          <div className="row">
            {listing.map((li, key) => (
              <div key={key} className="mb-2 col-md-4">
                <ListingCard data={li} />
              </div>
            ))}
          </div>
          <PaginationComponent data={info} />
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
      <Footer />
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

export async function getServerSideProps(context) {
  {
    /* implementing a fake api with infinite scrolling on pagination */
  }
  const { page } = context.query;
  const res = await axios.get(
    `http://localhost:3000/api/dynamicpagination?pid=${page}`
  );

  const response = await res.data.list;
  const info = await res.data.meta;
  return {
    props: {
      listing: response,
      info,
    }, // will be passed to the page component as props
  };
}

export default CategoryPage;
