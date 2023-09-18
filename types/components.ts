import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary";
	width?: "full" | "fit";
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export type CarImageProps = {
	src: string;
	alt: string;
};

export interface SearchManufacturerProps {
	manufacturer: string;
	setManufacturer: React.Dispatch<React.SetStateAction<string>>;
}

export interface CarProps {
	city_mpg: number;
	class: string;
	combination_mpg: number;
	cylinders: number;
	displacement: number;
	drive: string;
	fuel_type: string;
	highway_mpg: number;
	make: string;
	model: string;
	transmission: string;
	year: number;
}

export interface FilterProps {
	manufacturer?: string;
	model?: string;
	limit?: number;
}

export interface ModalProps {
	closeModal: () => void;
}
