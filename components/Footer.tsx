import React from "react";
import { footerLinks } from "@/conts";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-black text-white py-8 border-t border-[#231f20] w-full">
			<div className="w-[80%] mx-auto flex flex-wrap justify-between items-center">
				{footerLinks.map((section, index) => (
					<div key={index} className="">
						<h2 className="text-lg font-semibold mb-2">
							{section.title}
						</h2>
						<ul className="list-none p-0">
							{section.links.map((link, linkIndex) => (
								<li key={linkIndex} className="mb-2">
									<Link
										href={link.url}
										className="text-gray-200 hover:text-yellow-100"
									>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>

			<div className="text-center p-4 text-yellow-50 border-t border-[#231f20] mt-8 font-extralight text-sm">
				&copy; SwiftRide Inc, All right reserved, 2023
			</div>
		</footer>
	);
};

export default Footer;
