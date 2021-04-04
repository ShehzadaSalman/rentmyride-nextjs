import Header from "../components/Header";
import Footer from "../components/footer";
import InnerNavBanner from "../components/InnerNavBanner";
import TopBar from "../components/TopBar";
import Link from "next/link";

const UserRegister = () => {
  return (
    <>
      <TopBar />
      <Header />
      <InnerNavBanner page="Register" />
      <div className="mainContent contactPage">
        <div className="container">
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10 col-md-10">
              <div className="loginBox">
                <h3>REGISTER</h3>
                <p>
                  Already have an account?{" "}
                  <Link href="/login">
                    <a>Login</a>
                  </Link>{" "}
                  here.
                </p>
                <div className="contactForm">
                  <div className="fieldset">
                    <div className="field">
                      <input type="text" name="" placeholder="Name" />
                    </div>
                    <div className="field">
                      <input type="text" name="" placeholder="Email" />
                    </div>
                  </div>
                  <div className="fieldset">
                    <div className="field">
                      <input type="text" name="" placeholder="Phone Number" />
                    </div>
                    <div className="field">
                      <input
                        type="text"
                        name=""
                        placeholder="Resident Status"
                      />
                    </div>
                  </div>
                  <div className="fieldset">
                    <div className="field">
                      <input type="password" name="" placeholder="Password" />
                    </div>
                    <div className="field">
                      <input
                        type="password"
                        name=""
                        placeholder="Confirm Password"
                      />
                    </div>
                  </div>
                  <div className="fieldset">
                    <div className="field">
                      <input type="text" name="" placeholder="Address" />
                    </div>
                    <div className="field">
                      <input
                        type="file"
                        name=""
                        placeholder="Upload Driving License Front"
                      />
                    </div>
                  </div>
                  <div className="fieldset">
                    <div className="field">
                      <input
                        type="file"
                        name=""
                        placeholder="Upload Emirates ID Front"
                      />
                    </div>
                    <div className="field">
                      <input
                        type="file"
                        name=""
                        placeholder="Upload Emirates ID Back"
                      />
                    </div>
                  </div>
                  <button type="submit">Register</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserRegister;
