import { useLoaderData } from "react-router-dom";
import AllSpotsPageCard from "./AllSpotsPageCard";
import { DiDreamweaver } from "react-icons/di";

const AllSpots = () => {
  const AllSpots = useLoaderData();
  return (
  <div>
      <h3 className="font-bold text-2xl my-4 text-center">Tourist Spots</h3>
    <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
      {AllSpots.map((spot) => (
        <AllSpotsPageCard key={spot._id} spot={spot}></AllSpotsPageCard>
      ))}
    </div>
  </div>
  );
};

export default AllSpots;
