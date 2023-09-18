import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
	return (
		<nav className=" px-4 lg:px-12 w-full bg-black">
			<div className="flex justify-between items-center">
				<Link href="/">
					<Image
						src={"/logo.png"}
						alt="logo"
						width={118}
						height={18}
						className="w-auto h-20"
						quality={90}
					/>
				</Link>
				<div>
					<CustomButton variant="secondary" onClick={() => ""}>
						Sign In
					</CustomButton>
				</div>
			</div>
		</nav>
	);
};

export default Header;
