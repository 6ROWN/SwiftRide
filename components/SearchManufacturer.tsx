import React, { Fragment, useState } from "react";
import { SearchManufacturerProps } from "@/types/components";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { carManufacturers } from "@/conts";

const SearchManufacturer: React.FC<SearchManufacturerProps> = ({
	manufacturer,
	setManufacturer,
}) => {
	const [query, setQuery] = useState("");

	const filteredManufacturers =
		query === ""
			? carManufacturers
			: carManufacturers.filter((item) =>
					item
						.toLowerCase()
						.replace(/\s+/g, " ")
						.includes(query.toLowerCase().replace(/\s+/g, " "))
			  );

	return (
		<div className="flex flex-1">
			<Combobox value={manufacturer} onChange={setManufacturer}>
				<div className="relative w-full">
					<Combobox.Button className={`absolute h-full w-full`}>
						<Image
							src={"/mercedes-logo.png"}
							alt="mercedes logo"
							width={16}
							height={16}
							className="mx-2 h-auto w-auto"
						/>
					</Combobox.Button>
					<Combobox.Input
						placeholder="Mercedes"
						className={`placeholder-gray-500 text-gray-500 h-12 px-10 w-full rounded-lg`}
						displayValue={(manufacturer: string) => manufacturer}
						onChange={(e) => setQuery(e.target.value)}
					/>
					<Transition
						as={Fragment}
						leave="transition-opacity ease-in duration-150"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						afterLeave={() => setQuery("")}
					>
						<Combobox.Options>
							{filteredManufacturers.length === 0 &&
							query !== "" ? (
								<Combobox.Option
									value={query}
									className={`py-4`}
								>
									{" "}
									Result did not match our inventory
								</Combobox.Option>
							) : (
								filteredManufacturers.map((item) => (
									<Combobox.Option
										className={({ active }) =>
											`relative text-gray-700 ${
												active
													? "bg-yellow-500"
													: "bg-gray-100"
											}`
										}
										key={item}
										value={item}
									>
										{item}
									</Combobox.Option>
								))
							)}
						</Combobox.Options>
					</Transition>
				</div>
			</Combobox>
		</div>
	);
};

export default SearchManufacturer;
