import CarCatalogue from "@/components/CarCatalogue";
import Hero from "@/components/Hero";

export default function Home() {
	return (
		<main className="overflow-hidden bg-black w-full h-full text-gray-100">
			<Hero />
			<CarCatalogue />
		</main>
	);
}
