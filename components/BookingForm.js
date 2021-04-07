import { useState, useRef } from "react";
import Link from "next/link";
const BookingForm = ({ isFormOpen, setIsFormOpen }) => {
  const BookingFormRef = useRef(null);
  const closePopup = (e) => {
    BookingFormRef.current.style.display = "none";
  };

  return (
    <>
      <div
        ref={BookingFormRef}
        id="myModal"
        className={`modal ${isFormOpen ? "d-block" : "d-none"}`}
      >
        <div id="booking-popup" className="modal-content px-0">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 d-none d-md-block pr-0">
                <div className="rentmyride-red pt-4 text-center px-3">
                  <h2 className="bookingpopup-title text-center mb-4">
                    Make Your Trips Better <br />
                    And Hassle-Free
                  </h2>
                  <div>
                    <img
                      className="img-fluid"
                      src="https://i.ibb.co/MD9TZt7/Group-208.png"
                      alt="Group-208"
                      border="0"
                    />

                    <div className="text-center mb-4 mt-4">
                      <div className="coupon-code text-uppercase">
                        coupon CODE : mY658935
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      className="mb-4 img-fluid"
                      src="https://i.ibb.co/X2YYGvn/mercedes-PNG80147.png"
                      alt="mercedes-PNG80147"
                      border="0"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6 d-flex flex-column justify-content-between px-4 px-md-0">
                <div className="text-right px-0 mb-3 mb-md-3">
                  <span
                    onClick={() => setIsFormOpen(false)}
                    className="close"
                    style={{ color: "#212121" }}
                  >
                    &times;
                  </span>
                </div>
                <div className="booking-form px-md-5">
                  <h1 className="red-rentmyride-color text-center mb-4 mb-md-5">
                    Booking Form
                  </h1>
                  <form action="px-5">
                    <div className="row">
                      <div className="col-md-6 px-2">
                        <div className="booking-form-field mb-3">
                          <label>Name</label>
                          <input
                            type="text"
                            value="Diana Ahadpour"
                            className=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6 px-2">
                        <div className="booking-form-field mb-3">
                          <label>Email</label>
                          <input
                            type="email"
                            value="Contact@dianaahadpour.ae"
                            className=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6 px-2">
                        <div className="booking-form-field mb-3">
                          <label>Residential Status</label>
                          <input type="text" value="Resident" className="" />
                        </div>
                      </div>
                      <div className="col-md-6 px-2">
                        <div className="booking-form-field mb-3">
                          <label>Phone Number</label>
                          <input
                            type="text"
                            value="+551 445 999"
                            className=""
                          />
                        </div>
                      </div>
                      <div className="col-md-12 px-2">
                        <div className="booking-form-field mb-3">
                          <label>Delivery Location</label>
                          <input
                            type="text"
                            value="31166 - Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai"
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="bookingpopup-button mt-2 mb-4"
                    >
                      Checkout As Guest
                    </button>
                  </form>
                  <div>
                    <p className="booking-info-paragraph mb-2">
                      New To Rentmyride?{" "}
                      <Link href="/Account/login">
                        <a>Register</a>
                      </Link>{" "}
                      Here.
                    </p>
                    <p className="booking-info-paragraph mb-2">
                      Already Have an Account?{" "}
                      <Link href="/Account/login">
                        <a href="">Log In</a>
                      </Link>{" "}
                      Here.
                    </p>
                    <p className="booking-info-disclaimer mb-2">
                      Disclaimer: Please Write Your Billing Address On The
                      Checkout Page!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
    
          .modal {
            display: block; 
            position: fixed; 
            z-index: 10; 
            padding-top: 100px; 
            left: 0;
            top: 0;
            width: 100%; 
            height: 100%; 
            overflow: auto; 
            background-color: rgb(0, 0, 0);
            background-color: rgba(0, 0, 0, 0.4); 
          }
       
          .modal-content {
            background-color: #fefefe;
            margin: auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
          }
          
    
          #booking-popup .close {
            color: #aaaaaa;
            float: right;
            font-size: 35px;
            font-weight: bold;
            margin-right: 28px;
          }
          
          #booking-popup .close:hover,
          #booking-popup .close:focus {
            color: #000;
            text-decoration: none;
            cursor: pointer;
          }
       
          #booking-popup .rentmyride-red {
            border: solid 2px #ff0000;
            border-radius: 4px;
            min-height: 600px;
            background-image: url("https://i.ibb.co/TBZJYHd/bg1-min.png");
            background-repeat: no-repeat;
            background-position: bottom;
            background-size: contain;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          #booking-popup .bookingpopup-title {
            font-family: "Montserrat", sans-serif;
          }
          #booking-popup .coupon-code {
            border: dashed 2px #343434;
            display: inline-block;
            padding: 0;
            margin: 0;
            padding: 5px 10px;
            padding-bottom: 5px;
            padding-top: 7px;
            font-family: "Roboto", sans-serif;
            color: #343434;
          }
          
          #booking-popup .red-rentmyride-color {
            color: #ff0000;
            font-family: "Arimo", sans-serif;
            font-weight: bold;
          }
          
          #booking-popup .booking-form-field label {
            font-family: "Arimo", sans-serif;
            font-weight: bold;
            margin-bottom: 15px;
          }
          #booking-popup .booking-form-field input {
            color: rgba(79, 80, 77, 0.7);
            font-family: "Arimo", sans-serif;
            border-radius: 2px;
            width: 100%;
            border: none;
            background: #fff;
            box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
            padding-left: 10px;
            padding-top: 8px;
            padding-bottom: 8px;
          }
          #booking-popup .bookingpopup-button {
            border: none;
            padding: 8px 25px;
            font-family: "Arimo", sans-serif;
            font-weight: bold;
            background-color: #ff0000;
            color: #fff;
            border-radius: 3px;
            font-size: 17px;
            cursor: pointer;
          }
          #booking-popup .bookingpopup-button:hover {
            background-color: lightgray;
            color: #212121;
          }
          #booking-popup .booking-info-paragraph {
            color: #838482;
            font-family: "Arimo", sans-serif;
          }
          #booking-popup .booking-info-paragraph a {
            color: #ff0000;
            font-weight: bold;
          }
          #booking-popup .booking-info-disclaimer {
            font-family: "Arimo", sans-serif;
            color: #4f504d;
            font-weight: bold;
          }
          
          
          @media only screen and (max-width: 600px) {
            .modal-content {
              width: 95%;
            }
            #booking-popup .close {
              color: #aaaaaa;
              float: right;
              font-size: 35px;
              font-weight: bold;
              padding-top: 0px;
              position: relative;
              margin-right: 2px;
              margin-top: -9px;
              margin-bottom: 13px;
            }
            .modal {
              padding-top: 15px;
              padding-bottom: 15px;
            }
          }
          
          
          
          
          `}</style>
    </>
  );
};
export default BookingForm;
