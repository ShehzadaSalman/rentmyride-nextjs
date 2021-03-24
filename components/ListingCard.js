import DemoNavSlider from './DemoNavSlider'
import Image from 'next/image'

const ListingCard = () => {
  return (<>    <div className="d-flex">
               <div  className="px-0">
                   <div className="d-flex justify-content-center">
                   <div  className="carItem px-0 mx-0">
               <div style={{ maxWidth: '269px' }}>
               <DemoNavSlider />
               </div>
                  <div className="offerdt pt-0">
                      <h5 className="py-1 mb-0">
                          <a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" >Rolls Royce Wraith Combo Offer</a>
                      </h5>
                      <ul className="mb-0 py-2">
                          <li>
                              <Image
                              src="/images/icon1-min.png"
                              alt="Picture of the author"
                              width={15}
                              height={18}
                              className="mr-1"
                              />
                              Seats 4
                          </li>
                          <li>
                          <Image
                              src="/images/icon2-min.png"
                              alt="Picture of the author"
                              width={15}
                              height={14}
                              className="mr-1"
                              />
                              Doors 2
                          </li>
                          <li>
                          <Image
                          src="/images/icon3-min.png"
                          alt="Picture of the author"
                          width={15}
                          height={14}
                          className="mr-1"
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
                          <label><input type="checkbox"  className="termCheck" name="" tabIndex="-1"/><span><cite><i className="fa fa-check"></i></cite>Accept the Terms &amp; Conditions</span></label>
                      </div>
                      <a href="/cars/car-rental/rolls-royce-rental-dubai/wraith-combo-offer" className="book" tabIndex="-1">Book Now</a>
                  </div>
              </div>

                         </div>
                     </div>


             </div>
</>)
}
export default ListingCard
