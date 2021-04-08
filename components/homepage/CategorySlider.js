import React from "react";
import Slider, { slickNext } from "react-slick";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../components/css/brandingSlide.module.css";
let slider = null; // to get reference of the slider
const CategorySlider = () => {
  let categorySlider = [
    {
      img:
        "https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/Coupe.svg ",
      title: "Coupe",
    },
    {
      img:
        "https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/SportsCar.svg ",
      title: "Sports Car",
    },
    {
      img:
        "https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/Mini-Van.svg ",
      title: "Mini Van",
    },
    {
      img:
        "https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/Crossover.svg ",
      title: "Cross Over",
    },
    {
      img:
        "https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/limo-01.svg ",
      title: "Limousine",
    },
    {
      img:
        "https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/Sedan.svg ",
      title: "Sedan",
    },
    {
      img:
        "https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/Convertible.svg ",
      title: "Convertible",
    },
    {
      img:
        "https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/SUV.svg ",
      title: "SUV",
    },
  ];

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 5,
    lazyLoad: "progressive",
    slidesToScroll: 2,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 985,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const backArrow = () => {
    slider.slickPrev();
  };
  const FrontArrow = () => {
    slider.slickNext();
  };

  return (
    <div className="brandsWrap px-0 mx-0" id="NewBrandSlider position-relative">
      <button onClick={backArrow} className={styles.backbutton}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="mr-1"
          fixedWidth
          size="1x"
        />
      </button>

      <div className="images mt-3 mx-5">
        <Slider ref={(c) => (slider = c)} {...settings}>
          {categorySlider.map((li, key) => (
            <div key={key} className="text-center px-1 py-1">
              <div
                className="mx-3 shadow-sm d-flex justify-content-center flex-column"
                style={{
                  backgroundColor: "0px 0px 11px -4px #d6d6d6",
                }}
              >
                <Image src={li.img} alt="Brand Cars" width={25} height={40} />
                <p className="mb-0 mt-1 mb-2">
                  <strong>{li.title}</strong>{" "}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <button
        onClick={FrontArrow}
        className={styles.backbutton}
        style={{
          top: 0,
          right: 0,
        }}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className="mr-1"
          fixedWidth
          size="1x"
        />
      </button>
    </div>
  );
};

export default CategorySlider;
