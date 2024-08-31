import { useLoaderData } from "react-router-dom";
import Footer from "../../Shared/Footer";
import Header from "../../Shared/Header";
import HomePageCard from "./HomePageCard";

const Home = () => {
	const TouristSpots = useLoaderData();
	return (
		<div className="mb-2">
			<Header></Header>
			<div className="my-8">
			  <h3 className="text-center text-3xl mt-8 mb-2 font-bold">About Us</h3>
			  <p className="text-center mb-8 mt-2">
				VoyageVista is a collection of breathtaking tourist destinations where tourist share their experiences. <br />It helps tourist to find their next adventure!
		      </p>
			</div>
			{/* main section */}
			<h3 className="text-center mt-8 mb-2 font-bold text-3xl">Hot Deals</h3>
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