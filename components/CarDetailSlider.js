import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
export default class CarDetailSlider extends Component {
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

  settings = {
    slidesToShow: 7,
    adaptiveHeight: true,
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  render() {
    return (
      <div>
        <Slider
          asNavFor={this.state.nav2}
          arrows={false}
          adaptiveHeight={true}
          swipeToSlide={false}
          ref={(slider) => (this.slider1 = slider)}
        >
          {this.props.mainCarousel &&
            this.props.mainCarousel.map((li, key) => (
              <div key={key}>
                <Image src={li} height={510} width={800} />
              </div>
            ))}
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          {...this.settings}
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
                      border: "Solid 2px #424242",
                    }}
                  >
                    <Image src={li} height={65} width={90} layout="intrinsic" />
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
