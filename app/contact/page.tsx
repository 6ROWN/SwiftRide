"use client";
import CustomButton from "@/components/CustomButton";
import React from "react";
import { BsFillCameraVideoFill } from "react-icons/bs";
import "react-international-phone/style.css";
import { ContactInfo } from "@/components/ContactInfo";
import { ContactForm } from "@/components/ContactForm";

const page = () => {
	return (
		<div className="w-[90%] mx-auto py-12">
			<div className="flex flex-col items-center justify-center space-y-4 lg:space-y-8">
				<h1 className="font-semibold text-2xl lg:text-4xl max-w-full lg:max-w-5xl mx-auto text-center">
					We've got an entire team dedicated to supporting you and
					your business.{" "}
				</h1>
				<p className="text-lg text-center">
					Get help 24/7 with our award winning automobile service
				</p>
				<div className="flex space-x-4">
					<CustomButton>
						<div className="flex space-x-2">
							<BsFillCameraVideoFill size={24} />
							<p>Book a call</p>
						</div>
					</CustomButton>
					<CustomButton>Get in touch</CustomButton>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<ContactInfo />
					<ContactForm />
				</div>
			</div>
		</div>
	);
};

export default page;
