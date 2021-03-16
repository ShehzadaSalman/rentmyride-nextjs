import React from 'react'

 const SearchForm = () => {
    return (
        <div className="searchForm">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12">
                    <div className="searchTabs">
                        <div id="tabs">
                            <ul>
                                <li>
                                    <a href="#tabs-1">
                                    <i className="fa fa-search"></i>Find a Car</a
                                        >
                                </li>
                                <li>
                                    <a href="#tabs-2">
                                    <i className="fa fa-search"></i>Find Limo & Chauffeur</a
                                        >
                                </li>
                            </ul>
                            <div id="tabs-1" className="formDetails">
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
                                            <div className="fields">
                                                <i className="fa fa-calendar"></i>
                                                <input
                                                    className="datepicker"
                                                    type="text"
                                                    name=""
                                                    placeholder="From Date"
                                                    />
                                            </div>
                                            <div className="fields">
                                                <i className="fa fa-calendar"></i>
                                                <input
                                                    type="text"
                                                    className="datepicker"
                                                    name=""
                                                    placeholder="To Date"
                                                    />
                                            </div>
                                        </div>
                                        <div className="fieldset">
                                            <div className="fields">
                                                <i className="fa fa-clock"></i>
                                                <input
                                                    type="text"
                                                    className="timepicker"
                                                    name=""
                                                    placeholder="From Time"
                                                    />
                                            </div>
                                            <div className="fields">
                                                <i className="fa fa-clock"></i>
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
                            <div id="tabs-2" className="formDetails">
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
                                            <span><i className="fa fa-check"></i>Hourly</span>
                                            </label>
                                            <label>
                                            <input type="radio" name="type" />
                                            <span><i className="fa fa-check"></i>Daily</span>
                                            </label>
                                            <label>
                                            <input type="radio" name="type" />
                                            <span><i className="fa fa-check"></i>Weekly</span>
                                            </label>
                                        </div>
                                        <div className="fieldset">
                                            <div className="fields">
                                                <i className="fa fa-calendar"></i>
                                                <input
                                                    className="datepicker"
                                                    type="text"
                                                    name=""
                                                    placeholder="From Date"
                                                    />
                                            </div>
                                            <div className="fields">
                                                <i className="fa fa-calendar"></i>
                                                <input
                                                    type="text"
                                                    className="datepicker"
                                                    name=""
                                                    placeholder="To Date"
                                                    />
                                            </div>
                                        </div>
                                        <div className="fieldset">
                                            <div className="fields">
                                                <i className="fa fa-clock"></i>
                                                <input
                                                    type="text"
                                                    className="timepicker"
                                                    name=""
                                                    placeholder="From Time"
                                                    />
                                            </div>
                                            <div className="fields">
                                                <i className="fa fa-clock"></i>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default SearchForm
