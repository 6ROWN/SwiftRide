"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { generateCarImageUrl } from "@/utils/requests";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { calculateCarRent } from "@/utils/requests";
import CustomButton from "@/components/CustomButton";
import BookFormModal from "@/components/BookFormModal";

const DetailsPage: React.FC = () => {
	const searchParams: URLSearchParams = useSearchParams();
	const carParam = searchParams.get("car");
	const carData = carParam ? JSON.parse(carParam) : null;
	const [isOpen, setIsOpen] = useState(false);
	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	// Custom Left Arrow Component
	const PrevArrow: React.FC<{
		onClick?: React.MouseEventHandler<HTMLButtonElement>;
	}> = ({ onClick }) => (
		<button
			className="z-20 absolute bg-gray-400 rounded hover:bg-yellow-400 flex justify-center items-center top-0 bottom-0 left-0 lg:left-5 m-auto h-8 w-8"
			onClick={onClick}
		>
			<BsArrowLeft size={24} />
		</button>
	);

	// Custom Right Arrow Component
	const NextArrow: React.FC<{
		onClick?: React.MouseEventHandler<HTMLButtonElement>;
	}> = ({ onClick }) => (
		<button
			className="z-20 absolute bg-gray-400 rounded hover:bg-yellow-400 flex justify-center items-center top-0 bottom-0 right-0 lg:right-5 m-auto h-8 w-8  "
			onClick={onClick}
		>
			<BsArrowRight size={24} className="text-white" />
		</button>
	);

	const sliderSettings = {
		dots: false,
		infinite: true,
		speed: 200,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		prevArrow: <PrevArrow />,
		nextArrow: <NextArrow />,
	};

	return (
		<div className="overflow-x-hidden w-full bg-[#2e2e2e] h-full p-4 text-gray-200 relative">
			{carData ? (
				<div className="">
					<section>
						{isOpen && <BookFormModal closeModal={closeModal} />}
					</section>
					<div className="max-w-[90%] mx-auto">
						<div className="flex items-center space-x-4 py-4">
							<Link href={"/"}>Home</Link>
							<span className="text-gray-400">/</span>
							<Link href={"/"}>Listing</Link>
							<span className="text-gray-400">/</span>
							<span className="uppercase">{carData?.make}</span>
							<span className="text-gray-400">/</span>
							<span className="uppercase">{carData?.model}</span>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
							<div className="lg:col-span-2 bg-transparent rounded-lg relative">
								<Slider
									{...sliderSettings}
									className="flex justify-center items-center w-full h-auto"
								>
									<div className="relative h-[50vh] lg:h-screen object-contain">
										<Image
											src={generateCarImageUrl(carData)}
											alt="car-image"
											fill
											priority
											className="h-auto w-full object-contain"
										/>
									</div>
									<div className="relative h-[50vh] lg:h-screen object-contain">
										<Image
											src={generateCarImageUrl(
												carData,
												"13"
											)}
											alt="car-image"
											fill
											priority
											className="h-auto w-full object-contain"
										/>
									</div>
									<div className="relative h-[50vh] lg:h-screen object-contain">
										<Image
											src={generateCarImageUrl(
												carData,
												"23"
											)}
											alt="car-image"
											fill
											priority
											className="h-auto w-full object-contain"
										/>
									</div>
									<div className="relative h-[50vh] lg:h-screen object-contain">
										<Image
											src={generateCarImageUrl(
												carData,
												"33"
											)}
											alt="car-image"
											fill
											priority
											className="h-auto w-full object-contain"
										/>
									</div>
								</Slider>
							</div>
							<div className="min-h-full">
								<div className="">
									<h1 className="uppercase font-bold text-2xl lg:text-4xl">
										{carData?.make} {carData?.model}{" "}
									</h1>
								</div>
								<div className="flex space-x-4 py-8 items-center">
									<span>{carData?.year}</span>
									<span className="w-1 h-1 rounded-full bg-yellow-500"></span>
									<span>{carData?.class}</span>
									<span className="w-1 h-1 rounded-full bg-yellow-500"></span>
									<span>{carData?.fuel_type}</span>
								</div>
								<div className="flex pb-8 items-center">
									<h1 className="text-2xl font-semibold">
										${" "}
										{parseInt(
											calculateCarRent(
												carData.city_mpg,
												carData.year
											)
										).toFixed(2)}
									</h1>
									<span className="text-lg"> /day</span>
								</div>
								<div className="bg-gray-300 text-gray-900 rounded-lg py-4 px-6 shadow-xl ">
									<div>
										{Object.entries(carData).map(
											([key, value], index) => (
												<div
													className="flex justify-between space-y-2 text-right"
													key={index}
												>
													<h1 className="font-medium capitalize">
														{key
															.split("_")
															.join(" ")}
														:
													</h1>
													<p className="">
														{
															value as React.ReactNode
														}
													</p>
												</div>
											)
										)}
									</div>
								</div>
								<div className="flex flex-col space-y-4 py-4">
									<div onClick={openModal}>
										<CustomButton
											width="full"
											variant="secondary"
										>
											{" "}
											Book Car
										</CustomButton>
									</div>

									<Link href="/contact">
										<CustomButton width="full">
											Talk to Agent
										</CustomButton>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<p>No car data found.</p>
			)}
		</div>
	);
};

export default DetailsPage;
