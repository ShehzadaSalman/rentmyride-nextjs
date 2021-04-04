import {
  PhoneIcon,
  EnvelopeIcon,
  CoinIcon,
  UserIcon,
} from "./extracted-icons/Regularicons";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faCoins,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const TopBar = () => (
  <div className="topBar">
    <ul>
      <li>
        <a href="tel:+971 55 550 5281">
          {/* <i class="fa fa-phone"></i> */}
          {/* <FontAwesomeIcon icon={faPhone} className="mr-1"  fixedWidth/> */}
          <PhoneIcon height={17} width={17} color="#fff" />
          <span className="ml-1"> +971 55 550 5281</span>
        </a>
      </li>
      <li>
        <a href="mailto:info@rentmyride.ae">
          {/* <i class="fa fa-envelope"></i> */}
          <EnvelopeIcon height={16} width={16} color="#fff" />
          {/* <FontAwesomeIcon icon={faEnvelope} className="mr-1"  fixedWidth/> */}
          <span className="ml-1"> info@rentmyride.ae</span>
        </a>
      </li>
      <li>
        <span className="">
          <CoinIcon height={17} width={17} color="#fff" />
        </span>
        <select>
          <option>AED</option>
        </select>
      </li>
      <li>
        <Link href="/login">
          <a>
            <FontAwesomeIcon icon={faUser} className="mr-1" size="1x" />
            <span className="ml-1">Login</span>
          </a>
        </Link>
      </li>
    </ul>
    <a href="#" className="plus"></a>
  </div>
);
export default React.memo(TopBar);
