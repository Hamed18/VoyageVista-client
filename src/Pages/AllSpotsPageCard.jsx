import { Link } from "react-router-dom";
import { FaDollarSign, FaUsers, FaClock, FaCalendarAlt } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProviders";
import { useContext } from "react";

const AllSpotsPageCard = ({ spot }) => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const {
    _id,
    image,
    userName,
    touristSpotName,
    averageCost,
    totalVisitors,
    travelTime,
    seasonality,
  } = spot;

  return (
    <div className="rounded-md shadow-md sm:w-96 dark:bg-gray-50 dark:text-gray-800 p-2 m-2">
      {/* User profile section */}
      <div className="flex items-center p-3 space-x-2">
        <img
          src={image}
          alt="User Profile"
          className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300"
        />
        <div className="-space-y-1">
          <h2 className="text-sm font-semibold leading-none">{userName}</h2>
        </div>
      </div>
      {/* Tourist spot image */}
      <img
        src={image}
        alt={touristSpotName}
        className="object-cover object-center w-full h-72 dark:bg-gray-500"
      />
      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-b-md">
        {/* Tourist spot details */}
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
          {touristSpotName}
        </h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <FaDollarSign className="mr-2 text-lg" />
            <span className="font-semibold">Average Cost: </span>$ {averageCost}
          </div>
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <FaUsers className="mr-2 text-lg" />
            <span className="font-semibold">Total Visitors Per Year: </span>
            {totalVisitors}
          </div>
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <FaClock className="mr-2 text-lg" />
            <span className="font-semibold">Travel Time: </span> {travelTime}
          </div>
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <FaCalendarAlt className="mr-2 text-lg" />
            <span className="font-semibold">Seasonality: </span> {seasonality}
          </div>
        </div>
        {/* View Details button */}
        <div className="flex justify-center">
          <Link to={`/allspots/${_id}`} className="text-blue-600 font-bold">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllSpotsPageCard;
