import DashboardLayout from "../../layouts/dashboard";
import { useState } from "react";
const Bookings = () => {
  const [activeBooking, setActiveBooking] = useState("all");

  return (
    <>

        <ul className="booking-tabs">
          <li
            onClick={() => setActiveBooking("all")}
            className={activeBooking === "all" ? "active" : ""}
          >
            All Bookings
          </li>
          <li
            onClick={() => setActiveBooking("current")}
            className={activeBooking === "current" ? "active" : ""}
          >
            Current Booking
          </li>
          <li
            onClick={() => setActiveBooking("previous")}
            className={activeBooking === "previous" ? "active" : ""}
          >
            Previous Booking
          </li>
        </ul>
        <div className="booking-tables mt-3">
          <div
            className={`all-bookings table-responsive ${
              activeBooking !== "all" ? "d-none" : ""
            } `}
          >
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Car</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Status</th>
                  <th>Pickup/Delivery</th>
                  <th>Rent</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lamborgini</td>
                  <td>12/2/1994</td>
                  <td>9/3/1994</td>
                  <td>current</td>
                  <td>Dubai Mall, Dubai</td>
                  <td>550 AED</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Lamborgini</td>
                  <td>12/2/1994</td>
                  <td>9/3/1994</td>
                  <td>previous</td>
                  <td>Dubai Mall, Dubai</td>
                  <td>550 AED</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className={`current-bookings table-responsive  ${
              activeBooking !== "current" ? "d-none" : ""
            } `}
          >
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Car</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Status</th>
                  <th>Pickup/Delivery</th>
                  <th>Rent</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lamborgini</td>
                  <td>12/2/1994</td>
                  <td>9/3/1994</td>
                  <td>Active</td>
                  <td>Dubai Mall, Dubai</td>
                  <td>550 AED</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className={`previous-bookings table-responsive ${
              activeBooking !== "previous" ? "d-none" : ""
            } `}
          >
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Car</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Status</th>
                  <th>Pickup/Delivery</th>
                  <th>Rent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lamborgini</td>
                  <td>12/2/1994</td>
                  <td>9/3/1994</td>
                  <td>Active</td>
                  <td>Dubai Mall, Dubai</td>
                  <td>550 AED</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      <style>
        {`
        .booking-tabs{
          list-style-type: none;
          margin: 0;
          padding: 0;
          margin-top: 20px;
        }
        .booking-tabs > li{
          border: solid 1px #d3d3d3;
          display: inline-block;
          padding: 10px;
          margin: 5px;
          color: #4f504d;
          cursor: pointer;
        }
        .booking-tabs > li.active{
          background-color: #ff0000;
          color: #fff;
        }
        .booking-tabs > li:hover{
          background-color: #ff0000;
          color: #fff;
        }
        
        
        `}
      </style>
    </>
  );
};
export default Bookings;
