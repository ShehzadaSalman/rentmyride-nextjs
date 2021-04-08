import DemoNavSlider from "./DemoNavSlider";
import Image from "next/image";
import Link from "next/link";
const ListingCard = (props) => {
  const {
    title,
    Seats,
    Doors,
    isAutomatic,
    crouselImages,
    crouselImageNavigation,
    pricePerDay,
    depositAmount,
    detailPage,
  } = props.data;

  return (
    <>
      <div className="d-flex justify-content-center">
        <div
          className={`carItem d-flex px-0 mx-0 ${
            props.listingLayout === "list" ? "w-100" : "flex-column"
          } `}
        >
          <div style={{ maxWidth: "340px" }}>
            <DemoNavSlider
              mainCarousel={crouselImages}
              carouselNav={crouselImageNavigation}
            />
          </div>
          <div
            className={`offerdt pt-0  ${
              props.listingLayout === "list"
                ? "d-flex flex-column justify-content-center w-100 px-3"
                : ""
            } `}
          >
            {props.listingLayout === "list" ? (
              <h4 className="py-1 mb-0 border-bottom pb-3">
                <Link href="Cars/detailpage">{title}</Link>
              </h4>
            ) : (
              <h5 className="py-1 mb-0 ">
                <Link href="Cars/detailpage">{title}</Link>
              </h5>
            )}

            <ul className="mb-0 py-2">
              <li>
                <img
                  src="/images/icon1-min.svg"
                  height="12px"
                  width="10px"
                  alt="icon-svg"
                  className="mr-1"
                />
                Seats
                {Seats}
              </li>
              <li>
                <img
                  src="/images/icon2-min.svg"
                  height="12px"
                  width="10px"
                  alt="doors"
                  className="mr-1"
                />
                Doors {Doors}
              </li>
              <li>
                <img
                  src="/images/icon3-min.svg"
                  height="12px"
                  width="10px"
                  alt="automatic"
                  className="mr-1"
                />
                Automatic
              </li>
            </ul>
            <p>
              Price:{" "}
              <span>
                <span className="currency">AED </span> {pricePerDay}{" "}
                <span className="day"> / Day</span>
              </span>
            </p>
            <div className="fieldWr">
              <label>
                <input type="checkbox" name="" tabIndex="-1" />
                <span>AED {depositAmount} Deposit</span>
              </label>
            </div>
            <div className="terms">
              <h6>Terms &amp; Conditions</h6>
              <p></p>
              <p>test</p>
              <p></p>
              <label>
                <input
                  type="checkbox"
                  className="termCheck"
                  name=""
                  tabIndex="-1"
                />
                <span>
                  <cite>
                    <i className="fa fa-check"></i>
                  </cite>
                  Accept the Terms &amp; Conditions
                </span>
              </label>
            </div>
            <Link href="Cars/detailpage">
              <a className="book" tabIndex="-1">
                Book Now
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default ListingCard;
