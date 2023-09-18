import { CarProps, FilterProps } from "@/types/components";

const url = (
	manufacturer: string | undefined,
	model: string,
	limit: number
): string => {
	let url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}&limit=${limit}`;
	if (manufacturer) {
		url += `&make=${manufacturer}`;
	}
	return url;
};

const options: RequestInit = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY as string,
		"X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
	},
};

export const fetchCars = async (filters: FilterProps): Promise<any> => {
	const { manufacturer, model = "corolla", limit = 10 } = filters;
	const response = await fetch(url(manufacturer, model, limit), options);
	const results = await response.json();
	return results;
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
	const url = new URL("https://cdn.imagin.studio/getimage");
	const { make, model, year } = car;

	url.searchParams.append(
		"customer",
		process.env.NEXT_PUBLIC_IMAGIN_API_KEY || ""
	);
	url.searchParams.append("make", make);
	url.searchParams.append("modelFamily", model.split(" ")[0]);
	url.searchParams.append("zoomType", "fullscreen");
	url.searchParams.append("modelYear", `${year}`);
	// url.searchParams.append('zoomLevel', zoomLevel);
	url.searchParams.append("angle", `${angle}`);

	return `${url}`;
};

export const calculateCarRent = (city_mpg: number, year: number) => {
	const basePricePerDay = 50; // Base rental price per day in dollars
	const mileageFactor = 0.1; // Additional rate per mile driven
	const ageFactor = 0.05; // Additional rate per year of vehicle age

	// Calculate additional rate based on mileage and age
	const mileageRate = city_mpg * mileageFactor;
	const ageRate = (new Date().getFullYear() - year) * ageFactor;

	// Calculate total rental rate per day
	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

	return rentalRatePerDay.toFixed(0);
};
