import dynamic from "next/dynamic";
import Image from "next/image";
const SearchForm = dynamic(() => import("../components/SearchForm"), {
  loading: () => (
    <div
      className="border text-center"
      style={{ height: "600px", width: "700px", backgroundColor: "#eee" }}
    >
      Loading...
    </div>
  ),
});
import CustomerReview from "../components/customer-review";
import NewBrandSlider from "../components/homepage/NewBrandSlider";

const AccordionFAQ = dynamic(() => import("../components/AccordionFAQ"), {
  loading: () => <p>Loading...</p>,
});
const VideoSection = dynamic(() => import("../components/VideoSection"));
const NewsPaper = dynamic(() => import("../components/homepage/NewsPaper"));
const LuxuryWraps = dynamic(() => import("../components/LuxuryWraps"));
const WhyChoosUs = dynamic(() => import("../components/WhyChoosUs"));

const CategorySlider = dynamic(
  () => import("../components/homepage/CategorySlider"),
  { ssr: false }
);
const CarPackageSlider = dynamic(
  () => import("../components/homepage/CarPackageSlider"),
  { ssr: false }
);
const Home = () => {
  return (
    <>
      <div className="MainBanner">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h2>
                <span>
                  Enjoy your journey <br />
                  with our
                  <small> Comfortable cars</small>.
                </span>
              </h2>
              <p>Serving people from last 3 years with great success.</p>
              <div className="bannerCars">
                <Image
                  src="/images/bannerCars3-min.png"
                  alt="Picture of the author"
                  width={560}
                  height={169}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SearchForm />
      <div className="heading">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h6>choose your dream Brand</h6>
              <h2>FIND CARS FOR RENT BY BRANDS</h2>
              <span>
                <Image
                  src="/images/border.png"
                  height="2"
                  width="65"
                  alt="border"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Brands -->*/}
      {/* <BrandSlider/> */}
      <div className="container">
        <div className="row">
          <NewBrandSlider />
        </div>
      </div>
      <div className="heading">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h6>choose your categories</h6>
              <h2>Car Categories</h2>
              <span>
                {" "}
                <Image
                  src="/images/border.png"
                  height="2"
                  width="65"
                  alt="border"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="catesWrap">
        <div className="container">
          <div className="row">
            <CategorySlider />
          </div>
        </div>
      </div>
      <div className="heading">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h6>welcome to RentMyRide</h6>
              <h2>Packages</h2>
              <span>
                {" "}
                <Image
                  src="/images/border.png"
                  height="2"
                  width="65"
                  alt="border"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="hiredCarWrap Packges pb-0">
        <div className="container">
          <CarPackageSlider />
        </div>
        <div className="heading">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <h6>welcome to rent myride</h6>
                <h2>OUR TOP HIRED CARS</h2>
                <span>
                  {" "}
                  <Image
                    src="/images/border.png"
                    height="2"
                    width="65"
                    alt="border"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="hiredCarWrap">
          <div className="container">
            {/* <HiredPackageSlider/> */}
            {/* <NewHiredPackageSlider /> */}
          </div>
        </div>
        <VideoSection />

        <div className="faq">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-6">
                <div className="heading">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12 col-md-12">
                        <h2>FAQ</h2>
                        <span>
                          {" "}
                          <Image
                            src="/images/border.png"
                            height="2"
                            width="65"
                            alt="border"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <AccordionFAQ />
                <div>
                  {/* <video autoplay="" loop="">
                    <source src="/bannerforweb.mov" type="video/mp4" />
                  </video> */}
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="mainCar">
                  <Image
                    src="/images/mainCar.png"
                    alt="Picture of the author"
                    width={400}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="heading">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <h2>AS FEATURED IN</h2>
                <span>
                  {" "}
                  <Image
                    src="/images/border.png"
                    height="2"
                    width="65"
                    alt="border"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <NewsPaper />
        <CustomerReview />
        <LuxuryWraps />
        <WhyChoosUs />
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Home;
