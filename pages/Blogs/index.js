import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import InnerNavBanner from "../../components/InnerNavBanner";
import Footer from "../../components/footer";
import Link from "next/link";

const Blog = () => {
  return (
    <>
      <InnerNavBanner page="Blog" />
      <div className="mainContent mb-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-4">
              <div className="blog">
                <figure>
                  <Link href="/Blogs/The-Best-Luck-Vehicles-to-Drive">
                    <img src="https://cdn.rentmyride.ae/Portal/content/myrideImages/Blogs/The Best Luxury Vehicles.jpg" />
                  </Link>
                </figure>
                <div className="blogDetail">
                  <h3>
                    <Link href="/Blogs/The-Best-Luck-Vehicles-to-Drive">
                      The Best Luxury Vehicles to Drive in Dubai
                    </Link>
                  </h3>
                  <p>
                    You can commonly spot premium vehicles in Dubai. Hence you
                    can view them passing-by at various places on the roads of
                    the metropolis.
                  </p>
                  <ul className="meta">
                    <li>Posted on Mar 04, 2021</li>
                  </ul>
                  <Link href="/Blog/blogdetail">
                    <a className="btn">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
