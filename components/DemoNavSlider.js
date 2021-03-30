import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
export default class DemoNavSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    console.log(this.props.mainCarousel);
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div>
        <Slider
          asNavFor={this.state.nav2}
          arrows={true}
          slidesToShow={4}
          adaptiveHeight={true}
          swipeToSlide={false}
          ref={(slider) => (this.slider1 = slider)}
        >
          {this.props.mainCarousel &&
            this.props.mainCarousel.map((li, key) => (
              <div key={key}>
                <Image src={li} height={230} width={350} />
              </div>
            ))}
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={4}
          adaptiveHeight={true}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {this.props.carouselNav &&
            this.props.carouselNav.map((li, key) => (
              <div className="p-1" key={key}>
                <div className="text-center">
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      padding: "3px",
                      borderRadius: "5px",
                      border: "Solid 2px red",
                    }}
                  >
                    <Image src={li} height={45} width={70} layout="intrinsic" />
                  </div>
                </div>
              </div>
            ))}
        </Slider>
        <style jsx>
          {`
            h3 {
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
