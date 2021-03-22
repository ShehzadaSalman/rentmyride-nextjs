import React, { Component } from "react";
import Slider from "react-slick";
import Image from 'next/image'
export default class DemoNavSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div>
        <Slider
          asNavFor={this.state.nav2}
          arrows= {false}
          adaptiveHeight = {true}
          swipeToSlide= {false}
          ref={slider => (this.slider1 = slider)}>
          {/* <div>
             <Image src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/59885f4fbf1f4648a4adcbaa5e3d0b84Range-Rover-Vogue-2020-Rental-in-Dubai.jpg"
              height={230}
              width={350}
             />
          </div>
          <div>
          <Image src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/13dda873e6b64829a1753726330fd928Range-Rover-Vogue-2020-Rental-in-Dubai-RentMyRide.jpg"
              height={230}
              width={350}
             />
          </div>
          <div>
          <Image src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/59885f4fbf1f4648a4adcbaa5e3d0b84Range-Rover-Vogue-2020-Rental-in-Dubai.jpg"
              height={230}
              width={350}
             />
          </div>
          <div>
          <Image src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/497fb2c37c104abc91db90f7cd7ddf1fRent-Range-Rover-Vogue-2020-in-Dubai-RentMyRide.jpg"
              height={230}
              width={350}
             />
          </div> */}
          <div>
          <Image src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/59885f4fbf1f4648a4adcbaa5e3d0b84Range-Rover-Vogue-2020-Rental-in-Dubai.jpg"
              height={230}
              width={350}
             />
          </div>
          <div>
          <Image src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/2ea7d6e57e764b3fb81cd9f389f9eb19Hire-Range-Rover-Vogue-2020-in-Dubai.jpg"
              height={230}
              width={350}
             />
          </div>
          <div>
          <Image src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/2ea7d6e57e764b3fb81cd9f389f9eb19Hire-Range-Rover-Vogue-2020-in-Dubai.jpg"
              height={230}
              width={350}
             />
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={4}
          adaptiveHeight = {true}
          swipeToSlide={true}
          focusOnSelect={true}>
            
          <div className="p-1">
            <div className="text-center">
              <div className="d-flex align-items-center justify-content-center" style={{ padding: '3px', borderRadius: '5px', border: 'Solid 2px red'}} >
              <Image src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/59885f4fbf1f4648a4adcbaa5e3d0b84Range-Rover-Vogue-2020-Rental-in-Dubai.jpg"
              height={45}
              width={70}
              layout="intrinsic"/>
              </div>
            </div>
          </div>

          <div className="p-1">
            <div className="text-center">
              <div className="d-flex align-items-center justify-content-center" style={{ padding: '3px', borderRadius: '5px', border: 'Solid 2px red'}} >
              <Image src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/13dda873e6b64829a1753726330fd928Range-Rover-Vogue-2020-Rental-in-Dubai-RentMyRide.jpg"
              height={45}
              width={70}
              layout="intrinsic"/>
              </div>
            </div>
          </div>

          <div className="p-1">
            <div className="text-center">
              <div className="d-flex align-items-center justify-content-center" style={{ padding: '3px', borderRadius: '5px', border: 'Solid 2px red'}} >
              <Image src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/59885f4fbf1f4648a4adcbaa5e3d0b84Range-Rover-Vogue-2020-Rental-in-Dubai.jpg"
              height={45}
              width={70}
              layout="intrinsic"/>
              </div>
            </div>
          </div>

          <div className="p-1">
            <div className="text-center">
              <div className="d-flex align-items-center justify-content-center" style={{ padding: '3px', borderRadius: '5px', border: 'Solid 2px red'}} >
              <Image src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/497fb2c37c104abc91db90f7cd7ddf1fRent-Range-Rover-Vogue-2020-in-Dubai-RentMyRide.jpg"
              height={45}
              width={70}
              layout="intrinsic"/>
              </div>
            </div>
          </div>

          {/* <div className="p-1">
            <div className="text-center">
              <div className="d-flex align-items-center justify-content-center" style={{ padding: '3px', borderRadius: '5px', border: 'Solid 2px red'}} >
              <Image src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/59885f4fbf1f4648a4adcbaa5e3d0b84Range-Rover-Vogue-2020-Rental-in-Dubai.jpg"
              height={45}
              width={70}
              layout="intrinsic"/>
              </div>
            </div>
          </div>

          <div className="p-1">
            <div className="text-center">
              <div className="d-flex align-items-center justify-content-center" style={{ padding: '3px', borderRadius: '5px', border: 'Solid 2px red'}} >
              <Image src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/59885f4fbf1f4648a4adcbaa5e3d0b84Range-Rover-Vogue-2020-Rental-in-Dubai.jpg"
              height={45}
              width={70}
              layout="intrinsic"/>
              </div>
            </div>
          </div>

          <div className="p-1">
            <div className="text-center">
              <div className="d-flex align-items-center justify-content-center" style={{ padding: '3px', borderRadius: '5px', border: 'Solid 2px red'}} >
              <Image src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/59885f4fbf1f4648a4adcbaa5e3d0b84Range-Rover-Vogue-2020-Rental-in-Dubai.jpg"
              height={45}
              width={70}
              layout="intrinsic"/>
              </div>
            </div>
          </div>
 */}





          {/* <div className="p-1">
            <div className="text-center">
              <div className="border d-flex align-items-center justify-content-center p-1" style={{ borderRadius: '5px', borderColor: 'red'}} >
              <Image src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/59885f4fbf1f4648a4adcbaa5e3d0b84Range-Rover-Vogue-2020-Rental-in-Dubai.jpg"
              height={40}
              width={65}
              layout="intrinsic"
             />
              </div>
            </div>
          </div>
          <div style={{ border: '1px solid red'}}>
            <div className="text-center">
            <Image src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/13dda873e6b64829a1753726330fd928Range-Rover-Vogue-2020-Rental-in-Dubai-RentMyRide.jpg"
              height={50}
              width={70}
             />
            </div>
          </div>
          <div>
            <div className="text-center">
          <Image src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/59885f4fbf1f4648a4adcbaa5e3d0b84Range-Rover-Vogue-2020-Rental-in-Dubai.jpg"
              height={50}
              width={70}
             />
             </div>
          </div>
          <div>
            <div className="text-center">
          <Image src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/497fb2c37c104abc91db90f7cd7ddf1fRent-Range-Rover-Vogue-2020-in-Dubai-RentMyRide.jpg"
              height={50}
              width={70}
             />
             </div>
          </div>
          <div>
            <div className="text-center">
          <Image src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/59885f4fbf1f4648a4adcbaa5e3d0b84Range-Rover-Vogue-2020-Rental-in-Dubai.jpg"
              height={50}
              width={70}
             />
             </div>
          </div>
          <div>
            <div className="text-center">
             <Image src="https://cdn.rentmyride.ae/Portal/content/myrideImages/vehicle/2ea7d6e57e764b3fb81cd9f389f9eb19Hire-Range-Rover-Vogue-2020-in-Dubai.jpg"
              height={50}
              width={70}
             />
             </div>
          </div>
           */}
        </Slider>
        <style jsx>
            {`
               h3{
                background: #5f9ea0;
                color: #fff;
                font-size: 36px;
                line-height: 100px;
                margin: 10px;
                padding: 2%;
                position: relative;
                text-align: center;
               } 
            
            `}
        </style>
      </div>
    );
  }
}