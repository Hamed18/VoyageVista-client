import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaRegCalendarAlt,
  FaUsers,
} from "react-icons/fa";

const HomeCardDetails = () => {
  const spotDetail = useLoaderData();
  console.log(spotDetail);

  const {
    image,
    touristSpotName,
    countryName,
    location,
    shortDescription,
    averageCost,
    seasonality,
    travelTime,
    totalVisitors,
  } = spotDetail;

  return (
    <div>
      <section className="bg-white text-gray-800">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center p-6 sm:py-12 lg:py-24">
          <div className="flex items-center justify-center p-6 w-full lg:w-1/2">
            <img
              src={image}
              alt="Tourist Spot"
              className="object-cover w-full h-full max-h-96 rounded-md shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center lg:text-left lg:w-1/2">
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl mb-4">
              {touristSpotName}
            </h1>
            <p className="text-gray-700 mb-4">{shortDescription}</p>
            <p className="text-lg mb-4 flex items-center justify-center lg:justify-start">
              <FaMapMarkerAlt className="mr-2 text-violet-600" />
              {location}, {countryName}
            </p>
            <p className="mb-4 flex items-center justify-center lg:justify-start">
              <FaMoneyBillWave className="mr-2 text-violet-600" />
              Average Cost: ${averageCost}
            </p>
            <p className="mb-4 flex items-center justify-center lg:justify-start">
              <FaRegCalendarAlt className="mr-2 text-violet-600" />
              Suitable for {seasonality} season
            </p>
            <p className="mb-4 flex items-center justify-center lg:justify-start">
              <FaUsers className="mr-2 text-violet-600" />
              Total Visitors Per Year: {totalVisitors}
            </p>
            <p className="mb-4 text-lg flex items-center justify-center lg:justify-start">
              Travel Time: {travelTime}
            </p>
            <div className="mt-6 flex justify-center lg:justify-start">
              <Link to="/allspots">
                <button className="px-6 py-3 text-lg font-semibold rounded bg-violet-600 text-white">
                  Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeCardDetails;
