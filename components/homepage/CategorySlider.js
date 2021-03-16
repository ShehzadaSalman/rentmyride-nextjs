import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
export const CategorySlider = () => {
    var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1
	  };
    return (
        <div className="categories">
        <Slider {...settings}>
        <figure>
            <a className="removeOutline" href="/cars/sports-car" tabIndex="-1">
            <Image
            className="removeOutline"
                src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/Convertible.svg "
                alt="Picture of the author"
                width={90}
                height={90}
            />
            <h4>Sports Car</h4>
            </a>
        </figure>
        <figure>
            <a className="removeOutline" href="/cars/sports-car" tabIndex="-1">
            <Image
            className="removeOutline"
                src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/Convertible.svg "
                alt="Picture of the author"
                width={90}
                height={90}
            />
            <h4>Sports Car</h4>
            </a>
        </figure>
        <figure>
            <a className="removeOutline" href="/cars/sports-car" tabIndex="-1">
            <Image
            className="removeOutline"
                src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/Convertible.svg "
                alt="Picture of the author"
                width={90}
                height={90}
            />
            <h4>Sports Car</h4>
            </a>
        </figure>
        <figure>
            <a className="removeOutline" href="/cars/sports-car" tabIndex="-1">
            <Image
            className="removeOutline"
                src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/Convertible.svg "
                alt="Picture of the author"
                width={90}
                height={90}
            />
            <h4>Sports Car</h4>
            </a>
        </figure>
        <figure>
            <a className="removeOutline" href="/cars/sports-car" tabIndex="-1">
            <Image
            className="removeOutline"
                src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/Convertible.svg "
                alt="Picture of the author"
                width={90}
                height={90}
            />
            <h4>Sports Car</h4>
            </a>
        </figure>
        <figure>
            <a className="removeOutline" href="/cars/sports-car" tabIndex="-1">
            <Image
            className="removeOutline"
                src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/Convertible.svg "
                alt="Picture of the author"
                width={90}
                height={90}
            />
            <h4>Sports Car</h4>
            </a>
        </figure>
        <figure>
            <a className="removeOutline" href="/cars/sports-car" tabIndex="-1">
            <Image
            className="removeOutline"
                src="https://cdn.rentmyride.ae/Portal/content/myrideImages/CarType/Convertible.svg "
                alt="Picture of the author"
                width={90}
                height={90}
            />
            <h4>Sports Car</h4>
            </a>
        </figure>
        </Slider>
    </div>
    )
}
