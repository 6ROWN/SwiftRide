"use client";
import React, { useEffect, useState } from "react";
import { fetchCars } from "@/utils/requests";
import { CarProps } from "@/types/components";
import CarCard from "./CarCard";
import SearchBar from "./SearchBar";

const CarCatalogue: React.FC = () => {
	const [allCars, setAllCars] = useState<CarProps[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const searchParams = new URLSearchParams(window.location.search);
		const manufacturer: string = searchParams.get("manufacturer") || "bmw";
		const limit: number = parseInt(searchParams.get("limit") || "9");
		const model: string = searchParams.get("model") || "";

		const fetchData = async () => {
			try {
				const cars = await fetchCars({
					manufacturer,
					limit,
					model,
				});

				setAllCars(cars);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching cars:", error);
				setError("An error occurred while fetching data.");
				setLoading(false);
			}
		};

		fetchData();
	}, []);
	const isDataEmpty =
		allCars.length < 1 || !Array.isArray(allCars) || !allCars;

	return (
		<div className="max-w-7xl mx-auto px-8">
			<h1 className="text-4xl font-bold">Car inventory list</h1>
			<p className="py-8 font-medium">
				Unlock Your Drive: Explore Excellence in Every Model!
			</p>
			<div className="max-w-full mx-auto">
				<SearchBar />
			</div>

			{loading ? ( // Check if data is still loading
				<div className="text-center my-12">
					<h1 className="my-4 text-lg font-semibold">
						{" "}
						Fetching the your car listings. Please hold on...
					</h1>
				</div>
			) : error ? ( // Check if an error occurred
				<div className="text-center my-12">
					<h1 className="text-3xl font-bold text-red-500">
						Error: {error}
					</h1>
				</div>
			) : (
				<div>
					<section>
						<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-8 py-12">
							{allCars.map((car: CarProps, index) => (
								<CarCard car={car} key={index} />
							))}
						</div>
					</section>
				</div>
			)}
		</div>
	);
};

export default CarCatalogue;
