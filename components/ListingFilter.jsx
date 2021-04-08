import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThList,
  faThLarge,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
const ListingFilter = ({ listingLayout, setListingLayout }) => {
  const formSubmit = (e) => {
    console.log(e.target.value);
  };

  const openFilterSidebar = () => {
    console.log("open the filter sidebar");
    document.getElementById("mySidenavfilter").style.width = "100%";
  };

  return (
    <>
      <div className="sortOption d-none d-md-flex">
        <div className="form">
          <form action="/Vehicle" method="post">
            <input type="hidden" name="catid" value="2" />
            <select
              name="sort"
              onChange={(e) => formSubmit(e)}
              style={{ width: "50px" }}
            >
              <option value="null">Select Pricing</option>
              <option value="Low">Low to High</option>
              <option value="High">High to Low</option>
            </select>
            <select
              name="range"
              onChange={(e) => formSubmit(e)}
              style={{ width: "50px" }}
            >
              <option value="null">Select</option>
              <option value="C-6">6</option>
              <option value="C-12">12</option>
              <option value="C-18">18</option>
              <option value="C-24">24</option>
              <option value="C-36">36</option>
              <option value="C-48">48</option>
              <option value="C-All">Show All</option>
            </select>
          </form>
        </div>
        <div className="sortBtn">
          {" "}
          <a
            className={`lst mx-1 ${listingLayout === "list" ? "act" : ""} `}
            onClick={() => setListingLayout("list")}
          >
            <FontAwesomeIcon icon={faThList} />
          </a>
          <a
            className={`grd  mx-1 ${listingLayout === "grid" ? "act" : ""} `}
            onClick={() => setListingLayout("grid")}
          >
            <FontAwesomeIcon icon={faThLarge} />
          </a>
          <a className="leftSide mx-1">
            <FontAwesomeIcon icon={faFilter} />
          </a>
          {/* <a href="#" class="grd act"><i class="fa fa-th-large"></i></a> */}
        </div>
      </div>

      {/* sorting option for mobile */}
      <div className="sort-option-mobile mb-4 d-flex justify-content-center  d-md-none">
        <div className="form d-flex">
          <form
            action="/Vehicle"
            method="post"
            className="d-flex justify-content-center"
          >
            <input type="hidden" name="catid" value="2" />
            <select
              className="mobile-listing-filter "
              name="sort"
              onChange={(e) => formSubmit(e)}
            >
              <option value="null">Pricing</option>
              <option value="Low">Low to High</option>
              <option value="High">High to Low</option>
            </select>
            <select
              className="mobile-listing-filter"
              name="range"
              onChange={(e) => formSubmit(e)}
            >
              <option value="null">Display</option>
              <option value="C-6">6</option>
              <option value="C-12">12</option>
              <option value="C-18">18</option>
              <option value="C-24">24</option>
              <option value="C-36">36</option>
              <option value="C-48">48</option>
              <option value="C-All">Show All</option>
            </select>
            <div
              onClick={openFilterSidebar}
              style={{ width: "50px" }}
              className="mobile-listing-filter d-flex align-items-center"
            >
              <a className="leftSide mx-1">
                <FontAwesomeIcon icon={faFilter} />
              </a>
            </div>
          </form>
        </div>
      </div>
      <style jsx>
        {`
          .mobile-listing-filter {
            font-size: 15px;
            padding: 10px 12px;
            border: 1px solid #ddd;
            margin-right: 10px;
            background-color: #fff;
            width: 100px;
          }
        `}
      </style>
    </>
  );
};

export default ListingFilter;
