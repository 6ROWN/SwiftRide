/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["cdn.imagin.studio"],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

module.exports = nextConfig;
