import { useState } from "react";

const PaymentCarDetail = ({
  fromDate = "Mar 18, 2020",
  toDate = "Mar 20, 2020",
  fromTime = "15:00",
  toTime = "20:00",
  Discount = "20%",
  Deposit = "0",
  setIsFormOpen,
}) => {
  const [rentAmount, setRentAmount] = useState(0);

  return (
    <>
      <div className="sideWidget">
        <h3>
          <span>
            <img src="/images/caricon.png" />
            <i></i>
          </span>
          Payment{" "}
        </h3>
        <div className="widgetContent payments">
          <ul className="payment">
            <li>
              From Date: <span>{fromDate}</span>
            </li>
            <li>
              To Date: <span>{toDate}</span>
            </li>
            <li>
              From Time: <span>{fromTime}</span>
            </li>
            <li>
              To Time: <span>{toTime}</span>
            </li>
            <li>
              Discount: <span>{Discount}</span>
            </li>
            <li>
              Deposit: <span>{Deposit}</span>
            </li>
          </ul>
          <cite>
            Total Rent Amount<span>AED {rentAmount}</span>
          </cite>
          <p>
            <span>-</span>Deposit Payment Method{" "}
            <small>Credit Card, Debit Card & Cash</small>
          </p>
          <p>
            <input name="isGoing" type="checkbox" /> I agree that myride.ae will
            arrange for me to rent Ferrari 488 GTB under their Terms and
            Conditions and I agree to commit to my financials obligations to the
            rental providers.{" "}
          </p>
          <a className="btn" onClick={() => setIsFormOpen(true)}>
            BOOK NOW
          </a>
          <div className="cards">
            Secure Payment By <img src="/images/paypal.png" />
          </div>
        </div>
      </div>
    </>
  );
};
export default PaymentCarDetail;
