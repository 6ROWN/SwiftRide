import { ModalProps } from "@/types/components";
import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { MdLocationOn, MdEmail } from "react-icons/md";
import CustomButton from "./CustomButton";

const BookFormModal: React.FC<ModalProps> = ({ closeModal }) => {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center z-50 text-gray-900 bg-transparent">
			<div className="absolute inset-0 bg-[#231f20] opacity-90"></div>
			<div className="bg-white rounded-lg p-4 w-[90%] md:w-[50%] relative mx-auto ">
				<button
					className="absolute top-2 p-2 bg-[#231f20] rounded-lg right-2 hover:opacity-80 transition-all duration-200 ease-in"
					onClick={closeModal}
				>
					<MdOutlineClose size={20} color={"white"} />
				</button>
				<form className="p-4" onSubmit={handleSubmit}>
					<section className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="relative">
							<label
								className="text-sm font-medium"
								htmlFor="name"
							>
								Name
							</label>
							<input
								id="name"
								className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
								type="text"
								placeholder="Janet Jackson"
							/>
							<BsPersonFill
								size={20}
								className="absolute top-9 mx-2 text-gray-600"
							/>
						</div>
						<div className="relative">
							<label
								className="text-sm font-medium"
								htmlFor="email"
							>
								Email
							</label>
							<input
								id="email"
								type="email"
								className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
								placeholder="example@email.com"
							/>
							<MdEmail
								size={20}
								className="absolute top-9 mx-2 text-gray-600"
							/>
						</div>
						<div className="relative">
							<label
								className="text-sm font-medium"
								htmlFor="location"
							>
								Location
							</label>
							<input
								id="location"
								className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
								placeholder="Enter an address"
							/>
							<MdLocationOn
								size={20}
								className="absolute top-9 mx-2 text-gray-600"
							/>
						</div>
						<div className="relative">
							<label
								className="text-sm font-medium"
								htmlFor="address"
							>
								schedule Date
							</label>
							<input
								id="address"
								className="block w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
								type="date"
							/>
						</div>
					</section>

					<div className="pt-4">
						<label
							htmlFor=""
							className="block text-sm font-medium mb-1"
						>
							{"Additional Message"}
						</label>
						<textarea
							className="w-full h-32  px-3 py-2 border resize-none rounded-lg focus:outline-none focus:border-blue-500"
							placeholder="Enter an additional message....."
						/>
					</div>
					<button disabled={true} className="mt-2">
						<CustomButton disabled={true} type="submit">
							Book
						</CustomButton>
					</button>
				</form>
			</div>
		</div>
	);
};

export default BookFormModal;
