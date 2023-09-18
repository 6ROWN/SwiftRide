import Image from "next/image";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../app/customSliderStyles.css";
import { CarImageProps } from "@/types/components";

const cars: CarImageProps[] = [
	{ src: "/car-1.png", alt: "Car 1" },
	{ src: "/car-2.png", alt: "Car 2" },
	{ src: "/car-3.png", alt: "Car 3" },
	{ src: "/car-4.png", alt: "Car 5" },
	{ src: "/phantom.png", alt: "Phantom" },
];

const HeroRightComponent: React.FC = () => {
	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 200,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
	};

	return (
		<div className=" lg:w-full lg:h-full ">
			<Slider
				{...sliderSettings}
				className="flex justify-center items-center"
			>
				{cars.map((car, index) => (
					<div key={index}>
						<Image
							src={car.src}
							width={800}
							height={800}
							className="h-full lg:w-full w-4/6 mx-auto  object-contain items-center"
							alt={"car.alt"}
							quality={90}
						/>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default HeroRightComponent;
