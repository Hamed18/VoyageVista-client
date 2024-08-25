import { useLoaderData } from "react-router-dom";
import Footer from "../../Shared/Footer";
import Header from "../../Shared/Header";
import HomePageCard from "./HomePageCard";

const Home = () => {
	const TouristSpots = useLoaderData();
	return (
		<div className="max-w-6xl mx-auto mb-2">
			<Header></Header>
			<h3 className="text-center text-3xl mt-8 mb-2 font-bold">Explore the World!</h3>
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
			<Footer></Footer>
		</div>
	);
};

export default Home;