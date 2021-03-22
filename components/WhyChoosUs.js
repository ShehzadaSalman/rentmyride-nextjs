import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faCalendar, faMoneyCheck} from '@fortawesome/free-solid-svg-icons'

const WhyChoosUs = () => {
    
    const onCardHover = () => {
          
    }
    
    return (
        <div className="chooseUs">
        <div className="row">
            <div className="col-sm-5 col-md-5">
                <div className="leftSide">
                    <div className="heading">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-md-12">
                                    <h6>Rent my ride</h6>
                                    <h2>WHY CHOOSE MYRIDE?</h2>
                                    <span><Image src ="/images/border.png" height="2" width="65" alt="border" /></span>
                                    <p>
                                        Et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation dolorin reprehenderits volupta velit
                                        dolore fugiat nulla pariatur excepteur sint deserunt
                                        mollit anim est laborum santium dolore mque.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <Image
                        src="/images/landrover.png"
                        alt="Picture of the author"
                        width={420}
                        height={225}
                    />
                </div>
            </div>
            <div className="col-sm-7 col-md-7">
                <div className="rightSide">
                    <div className="row">
                        <div className="col-sm-4 col-md-4">
                            <div className="chosItem">
                                <i className="fa fa-car"></i>
                                <FontAwesomeIcon icon={faCar} size="2x" color="#777" fixedWidth className="mb-2 mt-1"  />
                                <h5>Luxurious Car</h5>
                                <p>
                                    Quis nostrud exercitate laboridy aliquip duis irure sed
                                    dolor ipsum excepture fugiat estan.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4">
                            <div className="chosItem">
                            <FontAwesomeIcon icon={faCalendar} size="2x" color="#777" fixedWidth className="mb-3 mt-1"  />
                                <h5>Book within Minutes</h5>
                                <p>
                                    Quis nostrud exercitate laboridy aliquip duis irure sed
                                    dolor ipsum excepture fugiat estan.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4">
                            <div className="chosItem" onMouseEnter={onCardHover}>
                                <i className="fa fa-money-check"></i>
                                <FontAwesomeIcon icon={faMoneyCheck} size="2x" color="#777" fixedWidth className="mb-2 mt-1"  />
                                <h5>Reasonable Price</h5>
                                <p>
                                    Quis nostrud exercitate laboridy aliquip duis irure sed
                                    dolor ipsum excepture fugiat estan.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4">
                            <div className="chosItem">
                                <i className="fa fa-car"></i>
                                <FontAwesomeIcon icon={faCar} size="2x" fixedWidth color="#777" className="mb-2 mt-1"  />
                                <h5>Comfortable Ride</h5>
                                <p>
                                    Quis nostrud exercitate laboridy aliquip duis irure sed
                                    dolor ipsum excepture fugiat estan.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4">
                            <div className="chosItem">
                                <i className="fa fa-car"></i>
                                <FontAwesomeIcon icon={faCar} size="2x" fixedWidth color="#777" className="mb-2 mt-1"  />
                                <h5>On Time Delivery</h5>
                                <p>
                                    Quis nostrud exercitate laboridy aliquip duis irure sed
                                    dolor ipsum excepture fugiat estan.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4">
                            <div className="chosItem">
                                <i className="fa fa-car"></i>
                                <FontAwesomeIcon icon={faCar} size="2x" fixedWidth color="#777" className="mb-2 mt-1" />
                                <h5>Safe Car</h5>
                                <p>
                                    Quis nostrud exercitate laboridy aliquip duis irure sed
                                    dolor ipsum excepture fugiat estan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <style>
            {`
             .chooseUs .rightSide .chosItem:hover   svg{
                 color: #fff;
             }
            
            
            `}
        </style>
    </div>

    )
}

export default React.memo(WhyChoosUs)