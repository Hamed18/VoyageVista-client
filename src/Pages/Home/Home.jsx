import { useLoaderData } from "react-router-dom";
import Footer from "../../Shared/Footer";
import Header from "../../Shared/Header";
import HomePageCard from "./HomePageCard";

const Home = () => {
	const TouristSpots = useLoaderData();
	return (
		<div className="mb-2">
			<Header></Header>
			<h3 className="text-center text-3xl mt-8 font-bold">Explore the World!</h3>
			<p className="text-center mb-8 mt-2">Dive into our curated selection of breathtaking destinations and unique experiences that await you around the globe. Whether you're dreaming of tranquil beaches, bustling cityscapes, or awe-inspiring natural wonders, our collection offers something for every type of traveler.</p>
			{/* main section */}
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
				{
					TouristSpots.map(spot => 
						<HomePageCard
						 key={spot._id}
						 spot={spot}>
						</HomePageCard>
					)
				}
			</div>
		</div>
	);
};

export default Home;