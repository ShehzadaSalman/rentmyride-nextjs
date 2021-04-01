import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const CarFeatures = () => {
  const [show, setShow] = useState(false);
  const lessRef = useRef(null);
  const btnLoads = useRef(null);

  const toggleReadMore = (e) => {
    e.preventDefault();
    if (show === true) {
      lessRef.current.style.height = "120px";
      setShow(!show);
      btnLoads.current.style.background =
        "-webkit-linear-gradient( rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100% )";
    } else if (show === false) {
      lessRef.current.style.height = "auto";
      setShow(!show);
      btnLoads.current.style.background = "none";
    }
  };
  return (
    <>
      <div className="Features mt-5 showLEss">
        <h3>Car Features</h3>
        <ul ref={lessRef}>
          <li title="Cruise Control">
            <img src="images/fet1.png" />
            Cruise Control: Yes
          </li>
          <li title="Fog Lights">
            <img src="images/fet2.png" />
            Fog Lights
          </li>
          <li title="Front Air Bags">
            <img src="images/fet3.png" />
            Front Air Bags
          </li>
          <li title="Convertible Sports Car">
            <img src="images/fet4.png" />
            Convertible Sports Car
          </li>
          <li title="Reverse Camera">
            <img src="images/fet5.png" />
            Reverse Camera
          </li>
          <li title="Leather Seats">
            <img src="images/fet6.png" />
            Leather Seats
          </li>
          <li title="Premium Audio">
            <img src="images/fet7.png" />
            Premium Audio
          </li>
          <li title="Butterfly Doors">
            <img src="images/fet8.png" />
            Butterfly Doors
          </li>
          <li title="Built-in GPS">
            <img src="images/fet9.png" />
            Built-in GPS
          </li>
          <li title="Push Button Ignition">
            <img src="images/fet10.png" />
            Push Button Ignition
          </li>
          <li title="USB">
            <img src="images/fet11.png" />
            USB
          </li>
          <li title="Power Windows">
            <img src="images/fet12.png" />
            Power Windows
          </li>
          <li title="Front & Rear Airbags">
            <img src="images/fet13.png" />
            Front & Rear Airbags
          </li>
          <li title="Bluetooth">
            <img src="images/fet14.png" />
            Bluetooth
          </li>
          <li title="Power Mirrors">
            <img src="images/fet15.png" />
            Power Mirrors
          </li>
          <li title="Parking Sensors">
            <img src="images/fet16.png" />
            Parking Sensors
          </li>
          <li title="Power Seats">
            <img src="images/fet17.png" />
            Power Seats
          </li>
          <li title="Power Door Locks">
            <img src="images/fet18.png" />
            Power Door Locks
          </li>
        </ul>

        {/* <ul className="showLEss"></ul> */}
        <div ref={btnLoads} className="btnLoads fetur">
          {show ? (
            <a href="#" className="shw" onClick={toggleReadMore}>
              <FontAwesomeIcon icon={faAngleUp} /> Hide
            </a>
          ) : (
            <a href="#" className="les" onClick={toggleReadMore}>
              <FontAwesomeIcon icon={faAngleDown} /> Read More
            </a>
          )}
        </div>
      </div>
      <style jsx>{`
        .Features.showLEss ul {
          height: 120px;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default CarFeatures;
