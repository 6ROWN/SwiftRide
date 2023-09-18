import { BsTwitter, BsFillEnvelopeOpenFill } from "react-icons/bs";
import { LuPhoneCall } from "react-icons/lu";
import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";
import { MdLocationPin } from "react-icons/md";

export const ContactInfo = () => {
	return (
		<div className="p-4 flex flex-col space-y-4">
			<section>
				<h1 className="text-xl font-semibold">Call us</h1>
				<p className="py-2 text-base">
					Call our team Mon-Fri from 8am to 5pm
				</p>
				<div className="flex space-x-4 items-center text-gray-600">
					<LuPhoneCall />
					<p className="text-sm">+233(0)554-949-3203</p>
				</div>
			</section>
			<section className="flex flex-col space-y-2">
				<h1 className="text-xl font-semibold">Chat with us</h1>
				<p className="text-base">
					Speak to our friendly team through live chats
				</p>
				<div className="flex space-x-4 items-center text-sm  text-gray-600">
					<HiMiniChatBubbleLeftRight />
					<p>Start a live chat</p>
				</div>
				<div className="flex space-x-4 items-center text-sm  text-gray-600">
					<BsFillEnvelopeOpenFill />
					<p>Shoot us an email</p>
				</div>
				<div className="flex space-x-4 items-center text-sm  text-gray-600">
					<BsTwitter />
					<p>Message us on Twitter</p>
				</div>
			</section>
			<section>
				<h1 className="text-xl font-semibold">Visit us</h1>
				<p className="py-2 text-base">
					Stop by our shop and let's make an amazing offer
				</p>
				<div className="flex space-x-4 items-center  text-gray-600">
					<MdLocationPin />
					<p className="text-sm">515 Kings Street, Texas, USA</p>
				</div>
			</section>
		</div>
	);
};
