"use client";
import React from "react";
import CustomButton from "./CustomButton";
import HeroRightComponent from "./HeroRightComponent";

const Hero: React.FC = () => {
	return (
		<div className="max-w-[1440px] mx-auto">
			<div className="flex flex-col lg:flex-row">
				<div className="flex-1 ">
					<div className="text-white flex flex-col max-h-[50%] lg:min-h-screen justify-center space-y-6 lg:space-y-12 px-8 py-12 lg:py-0">
						<h1 className="text-3xl md:text-5xl font-bold leading-normal">
							Experience Seamless Travel with Our Rental Fleet
						</h1>
						<h3 className="font-medium text-lg">
							{" "}
							Book or rent a car &mdash; Unlock the Road to
							Adventure
						</h3>
						<CustomButton onClick={() => ""}>
							{" "}
							Explore Cars{" "}
						</CustomButton>
					</div>
				</div>
				<div className="flex-1 flex justify-center items-center max-h-full lg:min-h-screen flex-col">
					<div className=" max-w-xl px-8">
						<HeroRightComponent />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
