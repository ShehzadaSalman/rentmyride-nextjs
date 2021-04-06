import Header from "../../components/Header";
import Footer from "../../components/footer";
import InnerNavBanner from "../../components/InnerNavBanner";
import TopBar from "../../components/TopBar";
import Link from "next/link";

const PhoneVerification = () => {
  return (
    <>
      <TopBar />
      <Header />
      <InnerNavBanner />
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="bdr chnum">
                <h3>Verify Phone Number</h3>
                <p id="verificationMessage">
                  We have sent you a code to verify your phone number
                </p>
                <div className="mainform regs row">
                  <form action="/Account/PhoneVerification" method="post">
                    {" "}
                    <p></p>
                    <div className="col-md-12 wrfr">
                      <label>Enter Code</label>
                      <div className="col-md-2">
                        <input
                          type="tel"
                          name="code1"
                          id="code1"
                          className="svr"
                          required="required"
                          maxlength="1"
                          autofocus
                        />
                      </div>
                      <div className="col-md-2">
                        <input
                          type="tel"
                          name="code2"
                          id="code2"
                          className="svr"
                          required="required"
                          maxlength="1"
                        />
                      </div>
                      <div className="col-md-2">
                        <input
                          type="tel"
                          name="code3"
                          id="code3"
                          className="svr"
                          required="required"
                          maxlength="1"
                        />
                      </div>
                      <div className="col-md-2">
                        <input
                          type="tel"
                          name="code4"
                          id="code4"
                          className="svr"
                          required="required"
                          maxlength="1"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 rfs">
                      <p>
                        Didn�t receive your code? Wait{" "}
                        <span className="rrtxt">
                          00:<span id="counter">59</span>
                        </span>{" "}
                        OR{" "}
                        <a
                          href="javascript:;"
                          onclick="ResendCode()"
                          className="rrtxt"
                          id="resendCode"
                        >
                          Resend Code
                        </a>
                      </p>
                    </div>
                    <div className="col-md-12">
                      <button type="submit" value="Submit" className="cust-btn">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default PhoneVerification;
