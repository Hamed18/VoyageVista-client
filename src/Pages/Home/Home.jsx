import { Link, useLoaderData } from "react-router-dom";
import Footer from "../../Shared/Footer";
import Header from "../../Shared/Header";
import HomePageCard from "./HomePageCard";
import img1 from "../../assets/Images/rectangle4.png";

const Home = () => {
  const TouristSpots = useLoaderData();
  return (
    <div className="mb-2">
      <Header></Header>
      <div className="my-8">
        <h3 className="text-center text-3xl mt-8 mb-2 font-bold text-orange-400">
          About Us
        </h3>
        <p className="text-center mb-8 mt-2">
          VoyageVista is a collection of breathtaking tourist destinations where
          tourist share their experiences. <br />
          It helps tourist to find their next adventure!
        </p>
      </div>
	  {/* Popular Tour section */}
      <div class="flex flex-col md:flex-row items-center py-10">
        <div class="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h3 class="text-4xl font-bold text-gray-800 mb-4 text-orange-500">
            Popular Tours
          </h3>
          <p class="text-lg text-gray-600 mb-6">
            Bangladesh: Unveiling the Beauty of Hidden Paradise
          </p>
          <ul class="list-disc pl-5 space-y-4 text-gray-700 mb-6">
            <li>
              <strong>Bangkok Delights:</strong> Immerse yourself in the rich
              history and vibrant culture of Bangkok. 
            </li>
            <li>
              <strong>Cox's Bazar Beach Retreat:</strong> Relax on the world's
              longest natural sea beach in Cox's Bazar. Enjoy swimming,
              sunbathing, and trying the local seafood delicacies.
            </li>
            <li>
              <strong>The Combodian Tracts:</strong> Embark on a journey to the
              scenic Hill Tracts region.
            </li>
          </ul>
          <p class="text-lg text-gray-600 mb-6">
            These are just a few ideas to get you started. With its rich
            culture, stunning natural beauty, and friendly people.
          </p>
		  <Link to='allspots'>          
		    <button class="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
               Discover 
            </button>
          </Link>
        </div>
        <div class="md:w-1/2">
          <img
            src={img1}
            alt="Popular Tours Image"
            class="w-full h-auto rounded-lg shadow-lg"
          ></img>
        </div>
      </div>

      {/* main section */}
      <h3 className="text-center mt-8 mb-2 font-bold text-3xl text-orange-500">Hot Deals</h3>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {TouristSpots.map((spot) => (
          <HomePageCard key={spot._id} spot={spot}></HomePageCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
