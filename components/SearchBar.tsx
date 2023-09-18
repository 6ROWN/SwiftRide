"use client";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { boolean } from "yup";
const SearchBar = () => {
	const [manufacturer, setManufacturer] = useState<string>("");
	const [model, setModel] = useState<string>("");
	const router = useRouter();

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (manufacturer == "" && model == "") {
			return alert("Enter Input in search bar");
		}

		updateSearchParams(
			model.toLocaleLowerCase(),
			manufacturer.toLocaleLowerCase()
		);
	};

	const updateSearchParams = (model: string, manufacturer: string) => {
		const searchParams = new URLSearchParams(window.location.search);
		if (model) {
			searchParams.set("model", model);
		} else {
			searchParams.delete("model");
		}

		if (manufacturer) {
			searchParams.set("manufacturer", manufacturer);
		} else {
			searchParams.delete("manufacturer");
		}

		const newPathname = `${
			window.location.pathname
		}?${searchParams.toString()}`;

		router.push(newPathname);

		// Delay the page reload for 3 seconds (3000 milliseconds)
		setTimeout(function () {
			window.location.reload();
			setModel("");
		}, 1000);
	};

	return (
		<form
			onSubmit={handleSearch}
			className="w-full mx-auto flex lg:flex-row flex-col  items-center gap-4"
		>
			<div className="flex flex-1 items-center justify-center w-full">
				<SearchManufacturer
					manufacturer={manufacturer}
					setManufacturer={setManufacturer}
				/>
			</div>
			<div className="flex-1 flex items-center justify-center relative w-full">
				<input
					className="w-full p-3 rounded-lg text-gray-600"
					placeholder="Model"
					value={model}
					onChange={(e) => setModel(e.target.value)}
				/>
				<div className="absolute bg-yellow-500 p-1 rounded-lg right-1">
					<button type="submit">
						<FiSearch size={24} />
					</button>
				</div>
			</div>
		</form>
	);
};

export default SearchBar;
