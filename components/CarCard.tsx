import React from "react";
import { CarProps } from "@/types/components";
import { calculateCarRent } from "@/utils/requests";
import Image from "next/image";
import CustomButton from "./CustomButton";
import Link from "next/link";
import { generateCarImageUrl } from "@/utils/requests";

interface carCardProps {
	car: CarProps;
}

const CarCard: React.FC<carCardProps> = ({ car }) => {
	const { city_mpg, year, make, model, transmission, drive, fuel_type } = car;
	const carRent = calculateCarRent(city_mpg, year);

	return (
		<div>
			<Link
				href={{
					pathname: "/carDetails",
					query: { car: JSON.stringify(car) }, // Serialize car object to JSON
				}}
				className="bg-[#313131] rounded-lg w-full relative overflow-hidden shadow-lg flex flex-col justify-center items-center group"
			>
				<div className="relative w-full h-40 bg-yellow-500 ">
					<Image
						src={generateCarImageUrl(car)}
						alt="car- image"
						fill
						priority
						className="h-auto w-auto object-contain group-hover:scale-110 transition-all duration-200 ease-in"
					/>
				</div>
				<div className="px-4 mt-4 z-10 w-full">
					<h1 className="uppercase font-semibold ">
						{" "}
						{make} {model}
					</h1>
					<div className="text-lg py-2 tracking-wider">
						<span>$ </span>
						<span className="font-bold">{parseInt(carRent)}</span>
						<span className="text-xs">
							.{(parseInt(carRent) % 1).toFixed(2).slice(2)}
						</span>
						<span className="text-xs"> / day</span>
					</div>
					<hr />
					<div className="my-4 flex justify-between items-center uppercase text-sm">
						<CustomButton variant="secondary">{year}</CustomButton>
						<span>
							<span>{drive} - </span>
							<span className="text-xs">
								{transmission === "a" ? "Manual" : "Automatic"}{" "}
							</span>
						</span>
						<p>{fuel_type}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default CarCard;
