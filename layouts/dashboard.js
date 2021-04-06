import Footer from "../components/footer";
// import Header from "../components/Header";
import InnerNavBanner from "../components/InnerNavBanner";
import TopBar from "../components/TopBar";
import Link from "next/link";
import { useRouter } from "next/router";
const DashboardLayout = (props) => {
  const router = useRouter();
  const { pathname } = router;
  console.info(router.route);
  console.info(pathname);
  return (
    <>
      <TopBar />
      <Header />
      <InnerNavBanner page="User Dashboard" />
      <div className="mainContent contactPage accountPage">
        <div className="container">
          <div className="row first">
            <div className="col-sm-3 col-md-3 leftSide">
              <div className="topdetaail text-center">
                <div className="c100 p80 big mb-3">
                  <span>
                    <img src="https://www.rentmyride.ae/Assets/images/defaultt.png" />
                  </span>
                </div>
                <h4>Ayaz Chishti</h4>
                <p className="mt-2">ayazchishti@gmail.com</p>
              </div>
              <ul className="profileMenu mt-3">
                <ul className="profileMenu">
                  <li>
                    <Link href="/Account">
                      <a className={pathname === "/Account" ? "active" : ""}>
                        Account
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Account/Bookings">
                      <a
                        className={
                          pathname === "/Account/Bookings" ? "active" : ""
                        }
                      >
                        Booking
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Account/Inquiry">
                      <a
                        className={
                          pathname === "/Account/Inquiry" ? "active" : ""
                        }
                      >
                        Inquiry
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Account/ChangePassword">
                      <a
                        className={
                          pathname === "/Account/ChangePassword" ? "active" : ""
                        }
                      >
                        Change Password
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Account/OfferPackages">
                      <a
                        className={
                          pathname === "/Account/OfferPackages" ? "active" : ""
                        }
                      >
                        Offer Packages
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/" title="">
                      Logout
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="col-sm-9 col-md-9 rightSide contactDetailsShow pt-5">
              {props.children}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
