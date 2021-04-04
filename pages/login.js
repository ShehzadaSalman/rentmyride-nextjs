import Header from "../components/Header";
import Footer from "../components/footer";
import InnerNavBanner from "../components/InnerNavBanner";
import TopBar from "../components/TopBar";
import Link from "next/link";
import { useRef } from "react";

const LOGIN = () => {
  const login = useRef(null);
  const register = useRef(null);

  /* adding the transition animation here */

  // const login = document.querySelector(
  //   "#rentmyride-authentication  #login-container"
  // );
  // const register = document.querySelector(
  //   "#rentmyride-authentication  #register-container"
  // );

  const registerFormTransition = () => {
    login.current.style.display = "none";
    register.current.style.display = "flex";
    register.current.classList.add("swing-in-right-fwd");
  };

  /* adding the transition animation here */
  const loginFormTransition = () => {
    login.current.style.display = "flex";
    register.current.style.display = "none";
    login.current.classList.add("swing-in-right-fwd");
  };

  return (
    <>
      <TopBar />
      <Header />
      <div id="rentmyride-authentication" classNameName="px-0 ">
        <div className="container-fluid d-flex flex-column justify-content-center">
          <div className="row ">
            <div className="col-md-4 d-flex full-height  bg-banner-login ">
              <div
                ref={login}
                id="login-container"
                className="rentmyride-red pt-4 text-center px-3 "
              >
                <div className="">
                  <h3 className="red-rentmyride-color mb-4">
                    Car Rental Service With Smiling Prices
                  </h3>
                  <p className="arimo-font diff-grey">
                    Enter Your Details To Login Now
                  </p>
                </div>
                <div>
                  <form action="px-5 ">
                    <div className="row  px-md-5">
                      <div className="col-md-12 ">
                        <div className="booking-form-field mb-4">
                          <label>Email</label>
                          <input
                            type="email"
                            value="Contact@dianaahadpour.ae"
                            className=""
                          />
                        </div>
                      </div>
                      <div className="col-md-12 ">
                        <div className="booking-form-field mb-3">
                          <label>Password</label>
                          <input
                            type="password"
                            value="huihoihoi"
                            className=""
                          />
                        </div>
                      </div>
                      <div className="col-md-12 my-2 my-md-4">
                        <div className="row">
                          <div className="col-6">
                            <div className="form-check text-left">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                              />
                              <label
                                className="form-check-label remember-me"
                                for="exampleCheck1"
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>
                          <div className="col-6 text-right">
                            <a className="remember-me" href="#">
                              Forget Password?
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 px-5">
                        <button
                          type="submit"
                          className="bookingpopup-button mt-2 mb-4 w-100 "
                        >
                          Log In
                        </button>
                        <a
                          onClick={registerFormTransition}
                          className="have-an-account cursor-pointer"
                        >
                          Don't Have An Account Yet ? Sign Up!
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
                <div>
                  <img
                    className="mb-4 img-fluid"
                    src="https://i.postimg.cc/Yqyv1STP/acura-PNG122.png"
                    alt="mercedes-PNG80147"
                    border="0"
                  />
                </div>
              </div>
              <div
                ref={register}
                id="register-container"
                className="rentmyride-red pt-4 text-center px-3 "
              >
                <div className="">
                  <h3 className="red-rentmyride-color mb-3">
                    Create Your Account
                  </h3>
                  <p className="arimo-font diff-grey">
                    Enter Your Details To Create Your Account:
                  </p>
                </div>
                <div>
                  <form action="px-5 ">
                    <div className="row  px-md-4">
                      <div className="col-md-6 d-flex flex-column booking-form-field mb-4">
                        <label>Full Name</label>
                        <input
                          type="email"
                          value="Contact@rentmyride.ae"
                          className=""
                        />
                      </div>

                      <div className="col-md-6 d-flex flex-column  booking-form-field mb-4">
                        <label>Email Address</label>
                        <input type="password" value="secret" className="" />
                      </div>

                      <div
                        className="col-md-6 d-flex flex-column justify-content-between
                       booking-form-field mb-4"
                      >
                        <label>Phone Number</label>
                        <input type="text" value="55 975 5192" className="" />
                      </div>

                      <div
                        className="col-md-6 d-flex flex-column 
                      justify-content-between booking-form-field mb-4"
                      >
                        <label>Residential Status</label>
                        <select>
                          <option>Resident</option>
                          <option>Non Resident</option>
                        </select>
                      </div>

                      <div className="col-md-6 d-flex justify-content-between flex-column booking-form-field mb-4">
                        <label>Password</label>
                        <input type="password" value="asdfsdf" className="" />
                      </div>

                      <div className="col-md-6 justify-content-between d-flex flex-column booking-form-field mb-4">
                        <label>Confirm Password</label>
                        <input type="password" value="sdsdf" className="" />
                      </div>
                      <div className="col-md-12 justify-content-between d-flex flex-column booking-form-field mb-4">
                        <label>Address</label>
                        <input type="text" value="sdsdf" className="" />
                      </div>
                      <div className="col-md-6 justify-content-between d-flex flex-column booking-form-field mb-4">
                        <label>Upload Driving License Front</label>
                        <input type="file" className="" />
                      </div>
                      <div className="col-md-6 justify-content-between d-flex flex-column booking-form-field mb-4">
                        <label>Upload Driving License Back</label>
                        <input type="file" className="" />
                      </div>
                      <div className="col-md-6 justify-content-between d-flex flex-column booking-form-field mb-4">
                        <label>Upload Emirates ID front</label>
                        <input type="file" className="" />
                      </div>
                      <div className="col-md-6 justify-content-between d-flex flex-column booking-form-field mb-4">
                        <label>Upload Emirates ID back</label>
                        <input type="file" className="" />
                      </div>
                    </div>

                    <div className="col-md-12 my-2 ">
                      <div className="row">
                        <div className="col-12">
                          <div className="form-check text-left">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="exampleCheck1"
                            />
                            <label
                              className="form-check-label remember-me"
                              for="exampleCheck1"
                            >
                              I Agree The Terms & Conditions
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 px-5 mb-5">
                      <button
                        type="submit"
                        className="bookingpopup-button mt-2 mb-4 w-100 "
                      >
                        Sign Up
                      </button>
                      <a
                        onClick={loginFormTransition}
                        className="have-an-account cursor-pointer"
                      >
                        Already Have An Account? Login Here..
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div
              id="bg-banner"
              className="col-md-8  d-none  d-md-flex flex-column"
            ></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default LOGIN;
