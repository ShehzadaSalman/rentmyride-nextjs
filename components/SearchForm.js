import React, { useState, useRef } from "react";
// import DatePicker from "react-datepicker";
// import DatePicker from 'react-date-picker'
import {
  SearchIcon,
  CalendarIcon,
} from "../components/extracted-icons/Regularicons";
// import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faCheck,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import DayPickerInput from "react-day-picker/DayPickerInput";

const SearchForm = () => {
  const firstTab = useRef(null);
  const secondTab = useRef(null);

  const [toggleForm, setToggleForm] = useState(true);

  const [startDate, setStartDate] = useState(new Date());

  const toggleTab = (e) => {
    let tab = e.currentTarget;
    // active the first tab
    if (tab.id === "firstTab") {
      firstTab.current.classList.add("ui-state-active");
      if (secondTab.current.classList.contains("ui-state-active")) {
        secondTab.current.classList.remove("ui-state-active");
      }
    }
    // active the second tab
    else if (tab.id === "secondTab") {
      secondTab.current.classList.add("ui-state-active");
      if (firstTab.current.classList.contains("ui-state-active")) {
        firstTab.current.classList.remove("ui-state-active");
      }
    }
  };

  return (
    <div className="searchForm">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <div className="searchTabs">
              <div id="tabs">
                <ul className="d-flex">
                  <li
                    id="firstTab"
                    onClick={(e) => toggleTab(e)}
                    ref={firstTab}
                    className="ui-state-active"
                  >
                    <a
                      className="position-relative"
                      onClick={() => setToggleForm(true)}
                    >
                      <span className="find-a-car">
                        <SearchIcon height={15} width={15} color="#df2a2a" />
                      </span>
                      <span className="ml-1">Find a Car</span>{" "}
                    </a>
                  </li>
                  <li
                    id="secondTab"
                    onClick={(e) => toggleTab(e)}
                    ref={secondTab}
                    className=""
                  >
                    <a
                      className="position-relative"
                      onClick={() => setToggleForm(false)}
                    >
                      <span className="find-a-limo">
                        <SearchIcon height={15} width={15} color="#df2a2a" />
                      </span>
                      <span className="ml-1">Find Limo & Chauffeur</span>
                    </a>
                  </li>
                </ul>

                {toggleForm ? (
                  <>
                    <div id="tabs-1" className="formDetails px-3">
                      <div className="rows">
                        <div className="formOptions">
                          <h3>LET'S FIND YOUR IDEAL CAR:</h3>
                          <div className="fields">
                            <input
                              type="text"
                              name=""
                              placeholder="Type Car Name, Model, Brand, Type..."
                            />
                          </div>
                          <div className="fields">
                            <input type="submit" name="" value="Search" />
                          </div>
                        </div>
                        <div className="center">
                          <h6>OR</h6>
                        </div>
                        <div className="formOptions">
                          <h3>
                            FIND BY EXACT DATE & TIME:
                            <small>Minimum 2 hours, maximum 6 hours</small>
                          </h3>
                          <div className="fieldset">
                            <div className="fields ">
                              <svg
                                width="15"
                                height="15"
                                style={{ zIndex: 1, right: "5px" }}
                                className="position-absolute m-2"
                                viewBox="0 0 1792 1792"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M192 1664h288v-288h-288v288zm352 0h320v-288h-320v288zm-352-352h288v-320h-288v320zm352 0h320v-320h-320v320zm-352-384h288v-288h-288v288zm736 736h320v-288h-320v288zm-384-736h320v-288h-320v288zm768 736h288v-288h-288v288zm-384-352h320v-320h-320v320zm-352-864v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm736 864h288v-320h-288v320zm-384-384h320v-288h-320v288zm384 0h288v-288h-288v288zm32-480v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm384-64v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z"
                                  fill="#b3b3b3"
                                />
                              </svg>
                              <DayPickerInput
                                dayPickerProps={{
                                  fromMonth: new Date(),
                                }}
                              />
                            </div>
                            <div className="fields">
                              <svg
                                width="15"
                                height="15"
                                style={{
                                  zIndex: 1,
                                  marginBottom: "5px",
                                  right: "5px",
                                }}
                                className="position-absolute m-2"
                                viewBox="0 0 1792 1792"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M192 1664h288v-288h-288v288zm352 0h320v-288h-320v288zm-352-352h288v-320h-288v320zm352 0h320v-320h-320v320zm-352-384h288v-288h-288v288zm736 736h320v-288h-320v288zm-384-736h320v-288h-320v288zm768 736h288v-288h-288v288zm-384-352h320v-320h-320v320zm-352-864v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm736 864h288v-320h-288v320zm-384-384h320v-288h-320v288zm384 0h288v-288h-288v288zm32-480v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm384-64v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z"
                                  fill="#b3b3b3"
                                />
                              </svg>
                              <DayPickerInput
                                dayPickerProps={{
                                  fromMonth: new Date(),
                                }}
                              />
                              {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} /> */}
                            </div>
                          </div>
                          <div className="fieldset">
                            <div className="fields">
                              <select>
                                <option>08:00 AM</option>
                                <option>09:00 AM</option>
                                <option>10:00 AM</option>
                                <option>11:00 AM</option>
                                <option>12:00 AM</option>
                                <option>01:00 PM</option>
                              </select>
                            </div>
                            <div className="fields">
                              <select>
                                <option>08:00 AM</option>
                                <option>09:00 AM</option>
                                <option>10:00 AM</option>
                                <option>11:00 AM</option>
                                <option>12:00 AM</option>
                                <option>01:00 PM</option>
                              </select>
                            </div>
                          </div>
                          <div className="fields">
                            <input type="submit" name="" value="Search" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div id="tabs-2" className="formDetails px-3">
                      <div className="rows">
                        <div className="formOptions">
                          <h3>LET'S FIND YOUR IDEAL LIMOUSINE:</h3>
                          <div className="fields">
                            <input
                              type="text"
                              name=""
                              placeholder="Type Car Name, Model, Brand, Type..."
                            />
                          </div>
                          <div className="fields">
                            <input type="submit" name="" value="Search" />
                          </div>
                        </div>
                        <div className="center">
                          <h6>OR</h6>
                        </div>
                        <div className="formOptions">
                          <h3>
                            FIND BY EXACT DATE & TIME:
                            <small>Minimum 1 day, Maximum 30 days</small>
                          </h3>
                          <div className="searchtype">
                            <label>
                              <input type="radio" name="type" />
                              <span>
                                <FontAwesomeIcon
                                  fixedWidth
                                  icon={faCheck}
                                  className="mr-1"
                                />
                                Hourly
                              </span>
                            </label>
                            <label>
                              <input type="radio" name="type" />
                              <span>
                                {" "}
                                <FontAwesomeIcon
                                  fixedWidth
                                  icon={faCheck}
                                  className="mr-1"
                                />
                                Daily
                              </span>
                            </label>
                          </div>
                          <div className="fieldset">
                            <div className="fields">
                              <svg
                                width="15"
                                height="15"
                                style={{
                                  zIndex: 1,
                                  marginBottom: "5px",
                                  right: "5px",
                                }}
                                className="position-absolute m-2"
                                viewBox="0 0 1792 1792"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M192 1664h288v-288h-288v288zm352 0h320v-288h-320v288zm-352-352h288v-320h-288v320zm352 0h320v-320h-320v320zm-352-384h288v-288h-288v288zm736 736h320v-288h-320v288zm-384-736h320v-288h-320v288zm768 736h288v-288h-288v288zm-384-352h320v-320h-320v320zm-352-864v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm736 864h288v-320h-288v320zm-384-384h320v-288h-320v288zm384 0h288v-288h-288v288zm32-480v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm384-64v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z"
                                  fill="#b3b3b3"
                                />
                              </svg>
                              <DayPickerInput
                                dayPickerProps={{
                                  fromMonth: new Date(),
                                }}
                              />
                            </div>
                            <div className="fields">
                              <svg
                                width="15"
                                height="15"
                                style={{
                                  zIndex: 1,
                                  marginBottom: "5px",
                                  right: "5px",
                                }}
                                className="position-absolute m-2"
                                viewBox="0 0 1792 1792"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M192 1664h288v-288h-288v288zm352 0h320v-288h-320v288zm-352-352h288v-320h-288v320zm352 0h320v-320h-320v320zm-352-384h288v-288h-288v288zm736 736h320v-288h-320v288zm-384-736h320v-288h-320v288zm768 736h288v-288h-288v288zm-384-352h320v-320h-320v320zm-352-864v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm736 864h288v-320h-288v320zm-384-384h320v-288h-320v288zm384 0h288v-288h-288v288zm32-480v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm384-64v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z"
                                  fill="#b3b3b3"
                                />
                              </svg>
                              <DayPickerInput
                                dayPickerProps={{
                                  fromMonth: new Date(),
                                }}
                              />
                            </div>
                          </div>
                          <div className="fieldset">
                            <div className="fields">
                              {/* <FontAwesomeIcon fixedWidth  icon={faClock} color="#b3b3b3" className="m-2 position-absolute"   style={{zIndex: 1 }}/> */}
                              <input
                                type="text"
                                className="timepicker"
                                name=""
                                placeholder="From Time"
                              />
                            </div>
                            <div className="fields">
                              {/* <FontAwesomeIcon fixedWidth  icon={faClock} color="#b3b3b3" className="m-2 position-absolute"   style={{zIndex: 1 }}/> */}
                              <input
                                type="text"
                                className="timepicker"
                                name=""
                                placeholder="To Time"
                              />
                            </div>
                          </div>
                          <div className="fields">
                            <input type="submit" name="" value="Search" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
