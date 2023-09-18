import React from "react";
import { ButtonProps } from "@/types/components";

const CustomButton: React.FC<ButtonProps> = ({
	variant = "primary",
	width = "fit",
	...props
}) => {
	const buttonClasses = `relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-lg group transition-all duration-500 ease-in-out
  ${width === "fit" ? "w-fit" : "w-full"}
  ${
		variant === "primary"
			? "text-white bg-yellow-500 hover:text-gray-900"
			: "bg-transparent text-white hover:text-white group-hover:text-gray-900"
  }`;

	const backgroundElementClasses = `w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]`;
	const foregroundElementClasses = `absolute top-0 left-0 w-48 h-48 -mt-1 rotate-45 -translate-x-56 -translate-y-24  opacity-100 group-hover:-translate-x-8 ${
		variant === "primary" ? "bg-white" : "bg-yellow-500"
	}`;

	return (
		<button className={buttonClasses}>
			<span className={backgroundElementClasses}></span>
			<span className={foregroundElementClasses}></span>
			<span className="relative w-full text-left transition-colors duration-200 ease-in-out">
				{props.children}
			</span>
			<span
				className={`absolute inset-0 border-2 border-white rounded-lg ${
					variant === "primary"
						? " group-hover:border-yellow-500"
						: "group-hover:border-white"
				} `}
			></span>
		</button>
	);
};

export default CustomButton;
