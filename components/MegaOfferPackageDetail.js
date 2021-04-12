const MegaOfferPackage = () => {
  return (
    <div className="bggreyclr">
      <div className="heading">
        <div className="container" id="packages">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h6>MegaOffers Packages By Type</h6>
              <h2>MegaOffers Packages Details</h2>
              <span>
                <img src="/images/border.png" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="sample"></div>

      <div className="hiredCarWrap">
        <div className="container">
          <div className="hiredCarss slick-initialized slick-slider">
            <div aria-live="polite" className="slick-list draggable">
              <div
                className="slick-track"
                role="listbox"
                style={{
                  opacity: 1,
                  width: "1170px",
                  transform: "translate3d(0px, 0px, 0px)",
                }}
              >
                <div
                  className="carItem package-new slick-slide slick-current slick-active"
                  data-slick-index="0"
                  aria-hidden="false"
                  tabindex="-1"
                  role="option"
                  aria-describedby="slick-slide20"
                  style={{ width: "360px" }}
                >
                  <div className="package-image">
                    <input
                      type="hidden"
                      value="2"
                      id="Id"
                      name="Id"
                      tabIndex="0"
                    />
                    <img
                      src="https://cdn.rentmyride.ae/Portal/content/myrideImages/OfferTypeImagesPath/premium.png"
                      alt=""
                    />
                  </div>

                  <div className="package-txt">
                    <h3>Premium</h3>
                  </div>

                  <ul>
                    <li>Zero Deposit</li>
                    <li>Discount on Booking: 10.00 %</li>
                    <li>
                      Terms &amp; Conditions Apply.{" "}
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        tabindex="0"
                      >
                        T&amp;C
                      </a>
                    </li>
                    <li style={{ display: "none" }}>
                      &lt;p&gt;Best for our loyal Customers&lt;/p&gt;
                    </li>
                  </ul>

                  <input type="hidden" id="UserId" name="UserId" tabindex="0" />
                  <div className="package-priced">
                    <select
                      id="Price-2"
                      name="Price"
                      onchange="PackagesBooking(this)"
                      tabindex="0"
                    >
                      <option>Select Package</option>
                      <option value="30-1300.0000-/Account/MegaOffersPackagesBooking-2">
                        1,300 AED / 30 Days
                      </option>
                      <option value="2-700.0000-/Account/MegaOffersPackagesBooking-2">
                        700 AED / 2 Days
                      </option>
                      <option value="7-15.0000-/Account/MegaOffersPackagesBooking-2">
                        15 AED / 7 Days
                      </option>
                    </select>
                  </div>
                </div>
                <div
                  className="carItem package-new slick-slide slick-active"
                  data-slick-index="1"
                  aria-hidden="false"
                  tabindex="-1"
                  role="option"
                  aria-describedby="slick-slide21"
                  style={{ width: "360px" }}
                >
                  <div className="package-image">
                    <input
                      type="hidden"
                      value="4"
                      id="Id"
                      name="Id"
                      tabindex="0"
                    />
                    <img
                      src="https://cdn.rentmyride.ae/Portal/content/myrideImages/OfferTypeImagesPath/Luxury.png"
                      alt=""
                    />
                  </div>

                  <div className="package-txt">
                    <h3>Luxury</h3>
                  </div>

                  <ul>
                    <li>Zero Deposit</li>
                    <li>Discount on Booking: 0.00 %</li>
                    <li>
                      Terms &amp; Conditions Apply.{" "}
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        tabindex="0"
                      >
                        T&amp;C
                      </a>
                    </li>
                    <li style={{ display: "none" }}>
                      &lt;p&gt;Luxury Package Subscription&lt;/p&gt;
                    </li>
                  </ul>

                  <input type="hidden" id="UserId" name="UserId" tabindex="0" />
                  <div className="package-priced">
                    <select
                      id="Price-4"
                      name="Price"
                      onchange="PackagesBooking(this)"
                      tabindex="0"
                    >
                      <option>Select Package</option>
                      <option value="30-2500.0000-/Account/MegaOffersPackagesBooking-4">
                        2,500 AED / 30 Days
                      </option>
                      <option value="1-1500.0000-/Account/MegaOffersPackagesBooking-4">
                        1,500 AED / 1 Days
                      </option>
                      <option value="7-15.0000-/Account/MegaOffersPackagesBooking-4">
                        15 AED / 7 Days
                      </option>
                    </select>
                  </div>
                </div>
                <div
                  className="carItem package-new slick-slide slick-active"
                  data-slick-index="2"
                  aria-hidden="false"
                  tabindex="-1"
                  role="option"
                  aria-describedby="slick-slide22"
                  style={{ width: "360px" }}
                >
                  <div className="package-image">
                    <input
                      type="hidden"
                      value="6"
                      id="Id"
                      name="Id"
                      tabindex="0"
                    />
                    <img
                      src="https://cdn.rentmyride.ae/Portal/content/myrideImages/OfferTypeImagesPath/super_luxury.png"
                      alt=""
                    />
                  </div>

                  <div className="package-txt">
                    <h3>Super Luxury</h3>
                  </div>

                  <ul>
                    <li>Zero Deposit</li>
                    <li>Discount on Booking: 10.00 %</li>
                    <li>
                      Terms &amp; Conditions Apply.{" "}
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        tabindex="0"
                      >
                        T&amp;C
                      </a>
                    </li>
                    <li style={{ display: "none" }}>
                      &lt;p&gt;Super luxury Offers&lt;/p&gt;
                    </li>
                    <li>This is test feature</li>
                  </ul>

                  <input type="hidden" id="UserId" name="UserId" tabindex="0" />
                  <div className="package-priced">
                    <select
                      id="Price-6"
                      name="Price"
                      onchange="PackagesBooking(this)"
                      tabindex="0"
                    >
                      <option>Select Package</option>
                      <option value="30-5000.0000-/Account/MegaOffersPackagesBooking-6">
                        5,000 AED / 30 Days
                      </option>
                      <option value="3-2500.0000-/Account/MegaOffersPackagesBooking-6">
                        2,500 AED / 3 Days
                      </option>
                      <option value="7-2.0000-/Account/MegaOffersPackagesBooking-6">
                        2 AED / 7 Days
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MegaOfferPackage;
