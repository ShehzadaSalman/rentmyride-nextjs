import React from 'react'
import Image from 'next/image'

 const LuxuryWraps = () => {
    return (
        <div className="LuxuryWrrap">
        <div className="heading">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <h6>welcome to rent myride</h6>
                        <h2>Luxury Car Rental in Dubai</h2>
                        <span><Image src ="/images/border.png" height="2" width="65" alt="border" /></span>
                        <p>
                            Welcome to MyRide, where you can fulfil your dream of driving a
                            luxury or sports car in Dubai. Our range of luxury cars are
                            unparalleled and so are our prices and service standards. In
                            fact, we are the leaders in online car rentals in the UAE. If
                            you are looking for an amazing drive in a world-className luxury
                            car, then look no further. What are you waiting for, if you want
                            to rent a luxury car in Dubai at the best rates then get in
                            touch now!
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <div className="feature">
                        <span className="ons"></span>
                        <p>We have the largest cars dealership</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="feature">
                        <span className="tws"></span>
                        <p>We offers the best cars prices for all</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="feature">
                        <span className="thres"></span>
                        <p>24/7 customer support</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default React.memo(LuxuryWraps)