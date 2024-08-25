import { useLoaderData } from "react-router-dom";
import AllSpotsPageCard from "./AllSpotsPageCard";

const AllSpots = () => {
  const AllSpots = useLoaderData();
  return (
    <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
      {AllSpots.map((spot) => (
        <AllSpotsPageCard key={spot._id} spot={spot}></AllSpotsPageCard>
      ))}
    </div>
  );
};

export default AllSpots;
