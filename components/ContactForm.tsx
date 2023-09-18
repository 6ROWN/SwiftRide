import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import CustomButton from "./CustomButton";

export const ContactForm = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");

	return (
		<form className="flex flex-col col-span-2 space-y-4 w-full p-4 border border-gray-400 rounded-lg">
			<div className="flex space-x-4">
				<div className="w-full">
					<label
						htmlFor="firstName"
						className="text-sm font-semibold"
					>
						First name
					</label>
					<input
						id="firstName"
						type="text"
						className="w-full p-2 rounded-md outline-none border focus:ring focus:ring-blue-300"
						placeholder="First name"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</div>
				<div className="w-full">
					<label htmlFor="lastName" className="text-sm font-medium">
						Last name
					</label>
					<input
						id="lastName"
						type="text"
						className="w-full p-2 outline-none bg-transparent border rounded-md focus:ring focus:ring-blue-300"
						placeholder="Last name"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</div>
			</div>
			<div>
				<label htmlFor="email" className="text-sm font-medium">
					Email
				</label>
				<input
					id="email"
					type="email"
					className="w-full p-2 outline-none border rounded-md focus:ring focus:ring-blue-300"
					placeholder="email@example.com"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div>
				<PhoneInput
					defaultCountry="us"
					value={phone}
					onChange={(phone) => setPhone(phone)}
					inputStyle={{ width: "100%" }}
				/>
			</div>
			<div>
				<textarea
					className="block w-full h-32 p-2 resize-none border rounded-md focus:ring focus:ring-blue-300"
					placeholder={"Send us a message"}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				></textarea>{" "}
			</div>
			<CustomButton width="full" type="submit">
				Send Message
			</CustomButton>
		</form>
	);
};
