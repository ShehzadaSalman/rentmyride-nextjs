import Footer from "../../components/footer";
import Header from "../../components/Header";
import InnerNavBanner from "../../components/InnerNavBanner";
import TopBar from "../../components/TopBar";
import Link from "next/link";
const ForgottenPassword = () => {
  return (
    <>
      <InnerNavBanner page="Forgot Password" />
      <div className="mainContent contactPage">
        <div className="container">
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8 col-md-8">
              <div className="loginBox">
                <h3>Forgot Password</h3>
                <p>Enter Email Address to recover password</p>
                <div className="contactForm">
                  <div className="field">
                    <label>Email Address</label>
                    <input
                      type="text"
                      name=""
                      placeholder="contact@rentmyride.ae"
                    />
                  </div>
                  <button type="submit">Submit</button>
                  <div className="mt-4 mb-3">
                    <p className="pb-0 mb-3">
                      New to RentMyRide? <Link href="login">Register</Link>{" "}
                      here.{" "}
                    </p>
                    <p className="pb-0 mb-3">
                      Already have an account? <Link href="login">Login</Link>{" "}
                      here.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForgottenPassword;
