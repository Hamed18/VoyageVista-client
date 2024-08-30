import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaMapMarkerAlt, FaMoneyBillWave, FaCalendarAlt, FaClock, FaUsers } from "react-icons/fa";

const HomeCardDetails = () => {
  const spotDetail = useLoaderData();

  const { image, tourist_spot_name, country_name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear } = spotDetail;

  return (
    <div>
      <section className="bg-white text-gray-800">
        <div className="container mx-auto flex flex-col justify-center p-6 sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl flex flex-col justify-center p-6 text-center lg:max-w-md xl:max-w-lg lg:text-left">
              {tourist_spot_name}
           </h1>

          <div className="flex items-center justify-center p-6 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={image}
              alt="Tourist Spot"
              className="object-cover h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-md shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center lg:max-w-md xl:max-w-lg lg:text-left">
            <h2 className="mt-4 text-gray-700">
              {short_description}
            </h2>
            <p className="text-lg mt-4 flex items-center"><FaMapMarkerAlt className="mr-2" /> {location}, {country_name}</p>
            <p className="mt-2 flex items-center"><FaMoneyBillWave className="mr-2" /> Average Cost: ${average_cost}</p>
            <p className="mt-2 flex items-center"><FaCalendarAlt className="mr-2" /> Suitable for {seasonality} season</p>
            <p className="mt-2 flex items-center"><FaClock className="mr-2" /> Travel Time: {travel_time}</p>
            <p className="mt-2 flex items-center"><FaUsers className="mr-2" /> Total Visitors Per Year: {totalVisitorsPerYear}</p>
            <div className="mt-6">
              <Link to='/'>
                <button className="btn btn-outline btn-success">Back</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeCardDetails;
