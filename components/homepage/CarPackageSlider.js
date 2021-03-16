import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'

export const CarPackageSlider = () => {

    var settingstwo = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1
	  };
      
    return (
        <div className="hiredCarss">
        <Slider {...settingstwo}>
        <div className="carItem">
            <figure>
                <a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" tabIndex="-1">
                <Image
                src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicleType/Rent-Rolls-Royce-with-Combo-Offer-in-Dubai-RentMyRide.jpg"
                alt="Picture of the author"
                width={290}
                height={200}
                />
              </a>                           
            </figure>
            <div className="offerdt">
                <h5>
                    <a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" tabIndex="-1">Rolls Royce Wraith Combo Offer</a>
                </h5>
                <ul>
                    <li>
                        <Image
                        src="/images/icon1-min.png"
                        alt="Picture of the author"
                        width={15}
                        height={18}
                        />
                        Seats 4
                    </li>
                    <li>
                    <Image
                        src="/images/icon2-min.png"
                        alt="Picture of the author"
                        width={15}
                        height={14}
                        />
                        Doors 2
                    </li>
                    <li>
                    <Image
                    src="/images/icon3-min.png"
                    alt="Picture of the author"
                    width={15}
                    height={14}
                    />
                        Automatic
                    </li>
                </ul>
                <p>Price: <span><span className="currency">AED </span> 7,000 <span className="day"> / Day</span></span></p>
                <div className="fieldWr">
                    <label>
                    <input type="checkbox" name="" tabIndex="-1"/>
                    <span>AED 3,000 Deposit</span>
                    </label>
                </div>
                <div className="terms">
                    <h6>Terms &amp; Conditions</h6>
                    <p></p>
                    <p>test</p>
                    <p></p>
                    <label><input type="checkbox" onChange="valueChangeds()" className="termCheck" name="" tabIndex="-1"/><span><cite><i className="fa fa-check"></i></cite>Accept the Terms &amp; Conditions</span></label>
                </div>
                <a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" className="book" tabIndex="-1">Book Now</a>
            </div>
        </div>

        <div className="carItem">
            <figure>
                <a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" tabIndex="-1">
                <Image
                src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicleType/Rent-Rolls-Royce-with-Combo-Offer-in-Dubai-RentMyRide.jpg"
                alt="Picture of the author"
                width={290}
                height={200}
                />
              </a>                           
            </figure>
            <div className="offerdt">
                <h5>
                    <a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" tabIndex="-1">Rolls Royce Wraith Combo Offer</a>
                </h5>
                <ul>
                    <li>
                        <Image
                        src="/images/icon1-min.png"
                        alt="Picture of the author"
                        width={15}
                        height={18}
                        />
                        Seats 4
                    </li>
                    <li>
                    <Image
                        src="/images/icon2-min.png"
                        alt="Picture of the author"
                        width={15}
                        height={14}
                        />
                        Doors 2
                    </li>
                    <li>
                    <Image
                    src="/images/icon3-min.png"
                    alt="Picture of the author"
                    width={15}
                    height={14}
                    />
                        Automatic
                    </li>
                </ul>
                <p>Price: <span><span className="currency">AED </span> 7,000 <span className="day"> / Day</span></span></p>
                <div className="fieldWr">
                    <label>
                    <input type="checkbox" name="" tabIndex="-1"/>
                    <span>AED 3,000 Deposit</span>
                    </label>
                </div>
                <div className="terms">
                    <h6>Terms &amp; Conditions</h6>
                    <p></p>
                    <p>test</p>
                    <p></p>
                    <label><input type="checkbox" onChange="valueChangeds()" className="termCheck" name="" tabIndex="-1"/><span><cite><i className="fa fa-check"></i></cite>Accept the Terms &amp; Conditions</span></label>
                </div>
                <a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" className="book" tabIndex="-1">Book Now</a>
            </div>
        </div>

        <div className="carItem">
            <figure>
                <a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" tabIndex="-1">
                <Image
                src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicleType/Rent-Rolls-Royce-with-Combo-Offer-in-Dubai-RentMyRide.jpg"
                alt="Picture of the author"
                width={290}
                height={200}
                />
              </a>                           
            </figure>
            <div className="offerdt">
                <h5>
                    <a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" tabIndex="-1">Rolls Royce Wraith Combo Offer</a>
                </h5>
                <ul>
                    <li>
                        <Image
                        src="/images/icon1-min.png"
                        alt="Picture of the author"
                        width={15}
                        height={18}
                        />
                        Seats 4
                    </li>
                    <li>
                    <Image
                        src="/images/icon2-min.png"
                        alt="Picture of the author"
                        width={15}
                        height={14}
                        />
                        Doors 2
                    </li>
                    <li>
                    <Image
                    src="/images/icon3-min.png"
                    alt="Picture of the author"
                    width={15}
                    height={14}
                    />
                        Automatic
                    </li>
                </ul>
                <p>Price: <span><span className="currency">AED </span> 7,000 <span className="day"> / Day</span></span></p>
                <div className="fieldWr">
                    <label>
                    <input type="checkbox" name="" tabIndex="-1"/>
                    <span>AED 3,000 Deposit</span>
                    </label>
                </div>
                <div className="terms">
                    <h6>Terms &amp; Conditions</h6>
                    <p></p>
                    <p>test</p>
                    <p></p>
                    <label><input type="checkbox" onChange="valueChangeds()" className="termCheck" name="" tabIndex="-1"/><span><cite><i className="fa fa-check"></i></cite>Accept the Terms &amp; Conditions</span></label>
                </div>
                <a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" className="book" tabIndex="-1">Book Now</a>
            </div>
        </div>

        <div className="carItem">
            <figure>
                <a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" tabIndex="-1">
                <Image
                src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicleType/Rent-Rolls-Royce-with-Combo-Offer-in-Dubai-RentMyRide.jpg"
                alt="Picture of the author"
                width={290}
                height={200}
                />
              </a>                           
            </figure>
            <div className="offerdt">
                <h5>
                    <a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" tabIndex="-1">Rolls Royce Wraith Combo Offer</a>
                </h5>
                <ul>
                    <li>
                        <Image
                        src="/images/icon1-min.png"
                        alt="Picture of the author"
                        width={15}
                        height={18}
                        />
                        Seats 4
                    </li>
                    <li>
                    <Image
                        src="/images/icon2-min.png"
                        alt="Picture of the author"
                        width={15}
                        height={14}
                        />
                        Doors 2
                    </li>
                    <li>
                    <Image
                    src="/images/icon3-min.png"
                    alt="Picture of the author"
                    width={15}
                    height={14}
                    />
                        Automatic
                    </li>
                </ul>
                <p>Price: <span><span className="currency">AED </span> 7,000 <span className="day"> / Day</span></span></p>
                <div className="fieldWr">
                    <label>
                    <input type="checkbox" name="" tabIndex="-1"/>
                    <span>AED 3,000 Deposit</span>
                    </label>
                </div>
                <div className="terms">
                    <h6>Terms &amp; Conditions</h6>
                    <p></p>
                    <p>test</p>
                    <p></p>
                    <label><input type="checkbox" onChange="valueChangeds()" className="termCheck" name="" tabIndex="-1"/><span><cite><i className="fa fa-check"></i></cite>Accept the Terms &amp; Conditions</span></label>
                </div>
                <a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" className="book" tabIndex="-1">Book Now</a>
            </div>
        </div>

        <div className="carItem">
            <figure>
                <a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" tabIndex="-1">
                <Image
                src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicleType/Rent-Rolls-Royce-with-Combo-Offer-in-Dubai-RentMyRide.jpg"
                alt="Picture of the author"
                width={290}
                height={200}
                />
              </a>                           
            </figure>
            <div className="offerdt">
                <h5>
                    <a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" tabIndex="-1">Rolls Royce Wraith Combo Offer</a>
                </h5>
                <ul>
                    <li>
                        <Image
                        src="/images/icon1-min.png"
                        alt="Picture of the author"
                        width={15}
                        height={18}
                        />
                        Seats 4
                    </li>
                    <li>
                    <Image
                        src="/images/icon2-min.png"
                        alt="Picture of the author"
                        width={15}
                        height={14}
                        />
                        Doors 2
                    </li>
                    <li>
                    <Image
                    src="/images/icon3-min.png"
                    alt="Picture of the author"
                    width={15}
                    height={14}
                    />
                        Automatic
                    </li>
                </ul>
                <p>Price: <span><span className="currency">AED </span> 7,000 <span className="day"> / Day</span></span></p>
                <div className="fieldWr">
                    <label>
                    <input type="checkbox" name="" tabIndex="-1"/>
                    <span>AED 3,000 Deposit</span>
                    </label>
                </div>
                <div className="terms">
                    <h6>Terms &amp; Conditions</h6>
                    <p></p>
                    <p>test</p>
                    <p></p>
                    <label><input type="checkbox" onChange="valueChangeds()" className="termCheck" name="" tabIndex="-1"/><span><cite><i className="fa fa-check"></i></cite>Accept the Terms &amp; Conditions</span></label>
                </div>
                <a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" className="book" tabIndex="-1">Book Now</a>
            </div>
        </div>

        <div className="carItem">
            <figure>
                <a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" tabIndex="-1">
                <Image
                src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicleType/Rent-Rolls-Royce-with-Combo-Offer-in-Dubai-RentMyRide.jpg"
                alt="Picture of the author"
                width={290}
                height={200}
                />
              </a>                           
            </figure>
            <div className="offerdt">
                <h5>
                    <a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" tabIndex="-1">Rolls Royce Wraith Combo Offer</a>
                </h5>
                <ul>
                    <li>
                        <Image
                        src="/images/icon1-min.png"
                        alt="Picture of the author"
                        width={15}
                        height={18}
                        />
                        Seats 4
                    </li>
                    <li>
                    <Image
                        src="/images/icon2-min.png"
                        alt="Picture of the author"
                        width={15}
                        height={14}
                        />
                        Doors 2
                    </li>
                    <li>
                    <Image
                    src="/images/icon3-min.png"
                    alt="Picture of the author"
                    width={15}
                    height={14}
                    />
                        Automatic
                    </li>
                </ul>
                <p>Price: <span><span className="currency">AED </span> 7,000 <span className="day"> / Day</span></span></p>
                <div className="fieldWr">
                    <label>
                    <input type="checkbox" name="" tabIndex="-1"/>
                    <span>AED 3,000 Deposit</span>
                    </label>
                </div>
                <div className="terms">
                    <h6>Terms &amp; Conditions</h6>
                    <p></p>
                    <p>test</p>
                    <p></p>
                    <label><input type="checkbox" onChange="valueChangeds()" className="termCheck" name="" tabIndex="-1"/><span><cite><i className="fa fa-check"></i></cite>Accept the Terms &amp; Conditions</span></label>
                </div>
                <a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" className="book" tabIndex="-1">Book Now</a>
            </div>
        </div>


        </Slider>

    </div>

    )
}
