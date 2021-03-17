import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faClock, faCheck, faSearch } from '@fortawesome/free-solid-svg-icons'
 const SearchForm = () => {

    const [toggleForm, setToggleForm] = useState(true);

    const [startDate, setStartDate] = useState(new Date());


    return (
        <div className="searchForm">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12">
                    <div className="searchTabs">
                        <div id="tabs">
                            <ul className="d-flex">
                                <li className="">
                                    <a className="position-relative" onClick={() => setToggleForm(true)}>
                                    <FontAwesomeIcon icon={faSearch} className="mainColor mr-1"/>
                                    Find a Car</a>
                                </li>
                                <li className="">
                                    <a className="position-relative" onClick={() => setToggleForm(false)}>
                                    <FontAwesomeIcon icon={faSearch} className="mainColor mr-1"/>
                                    Find Limo & Chauffeur</a>
                                </li>
                            </ul>

                            { toggleForm 
                            ? <>
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
                                            <small>Minimum 1 day, Maximum 30 days</small>
                                        </h3>
                                        <div className="fieldset">
                                            <div className="fields ">
                                            <FontAwesomeIcon icon={faCalendar} color="#b3b3b3" className="m-2 position-absolute" 
                                            style={{zIndex: 1 }} />
                                            <DatePicker selected={startDate} onChange={date => setStartDate(date)} /> 
                                            </div>
                                            <div className="fields">
                                            <FontAwesomeIcon icon={faCalendar}  color="#b3b3b3" className="m-2 position-absolute"
                                             style={{zIndex: 1 }}/>
                                            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                                            </div>
                                        </div>
                                        <div className="fieldset">
                                            <div className="fields">
                                            <FontAwesomeIcon icon={faClock} color="#b3b3b3" className="m-2 position-absolute"   style={{zIndex: 1 }}/>
                                      
                                                <input
                                                    type="text"
                                                    className="timepicker"
                                                    name=""
                                                    placeholder="From Time"
                                                    />
                                            </div>
                                            <div className="fields">
                                            <FontAwesomeIcon icon={faClock}  color="#b3b3b3" className="m-2 position-absolute"   style={{zIndex: 1 }}/>
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
                            : <>
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
                                            <FontAwesomeIcon icon={faCheck} className="mr-1"/>
                                            Hourly</span>
                                            </label>
                                            <label>
                                            <input type="radio" name="type" />
                                            <span><FontAwesomeIcon icon={faCheck} className="mr-1"/>Daily</span>
                                            </label>
                                            <label>
                                            <input type="radio" name="type" />
                                            <span>   <FontAwesomeIcon icon={faCheck} className="mr-1"/>Weekly</span>
                                            </label>
                                        </div>
                                        <div className="fieldset">
                                            <div className="fields">
                                            <FontAwesomeIcon icon={faCalendar} color="#b3b3b3" className="m-2 position-absolute" 
                                            style={{zIndex: 1 }} />
                                            <DatePicker selected={startDate} onChange={date => setStartDate(date)} /> 
                                            </div>
                                            <div className="fields">
                                            <FontAwesomeIcon icon={faCalendar} color="#b3b3b3" className="m-2 position-absolute" 
                                            style={{zIndex: 1 }} />
                                             <DatePicker selected={startDate} onChange={date => setStartDate(date)} /> 
                                            </div>
                                        </div>
                                        <div className="fieldset">
                                            <div className="fields">
                                            <FontAwesomeIcon icon={faClock} color="#b3b3b3" className="m-2 position-absolute"   style={{zIndex: 1 }}/>
                                                <input
                                                    type="text"
                                                    className="timepicker"
                                                    name=""
                                                    placeholder="From Time"
                                                    />
                                            </div>
                                            <div className="fields">
                                            <FontAwesomeIcon icon={faClock} color="#b3b3b3" className="m-2 position-absolute"   style={{zIndex: 1 }}/>
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
                
                            
                            </> }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default SearchForm
