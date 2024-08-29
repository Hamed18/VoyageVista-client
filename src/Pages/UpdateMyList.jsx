import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateMyList = () => {
	const list = useLoaderData();
	const {_id,image,touristSpotName,countryName,location,shortDescription,averageCost,totalVisitors,travelTime,seasonality} = list;
	return (
		<div className="max-w-6xl mx-auto">
		<section class="p-6 bg-gray-100 dark:bg-gray-900">
		  <form  class="container flex flex-col mx-auto space-y-12">

  
			<fieldset class="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-white dark:bg-gray-800">
			  <div class="space-y-2 col-span-full lg:col-span-1">
				<p class="font-medium text-gray-900 dark:text-gray-100">
				  Tourist Spot Information
				</p>
				<p class="text-xs text-gray-600 dark:text-gray-400">
				  Fill in the details for the tourist spot.
				</p>
			  </div>
			  <div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div class="col-span-full">
				  <label
					for="image"
					class="text-sm text-gray-900 dark:text-gray-100"
				  >
					Image URL
				  </label>
				  <input
					id="image"
					type="text"
					placeholder="Image URL"
					defaultValue={image}
					class="w-full rounded-md border border-gray-300 dark:border-gray-700 focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:text-gray-50 dark:focus:ring-violet-600"
				  />
				</div>
				<div class="col-span-full sm:col-span-3">
				  <label
					for="touristSpotName"
					class="text-sm text-gray-900 dark:text-gray-100"
				  >
					Tourist Spot Name
				  </label>
				  <input
					id="touristSpotName"
					type="text"
					placeholder="Tourist Spot Name"
					defaultValue={touristSpotName}
					class="w-full rounded-md border border-gray-300 dark:border-gray-700 focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:text-gray-50 dark:focus:ring-violet-600"
				  />
				</div>
				<div class="col-span-full sm:col-span-3">
				  <label
					for="countryName"
					class="text-sm text-gray-900 dark:text-gray-100"
				  >
					Country Name
				  </label>
				  <input
					id="countryName"
					type="text"
					placeholder="Country Name"
					defaultValue={countryName}
					class="w-full rounded-md border border-gray-300 dark:border-gray-700 focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:text-gray-50 dark:focus:ring-violet-600"
				  />
				</div>
				<div class="col-span-full">
				  <label
					for="location"
					class="text-sm text-gray-900 dark:text-gray-100"
				  >
					Location
				  </label>
				  <input
					id="location"
					type="text"
					placeholder="Location"
					defaultValue={location}
					class="w-full rounded-md border border-gray-300 dark:border-gray-700 focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:text-gray-50 dark:focus:ring-violet-600"
				  />
				</div>
				<div class="col-span-full">
				  <label
					for="shortDescription"
					class="text-sm text-gray-900 dark:text-gray-100"
				  >
					Short Description
				  </label>
				  <textarea
					id="shortDescription"
					placeholder="Short Description"
					defaultValue={shortDescription}
					class="w-full rounded-md border border-gray-300 dark:border-gray-700 focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:text-gray-50 dark:focus:ring-violet-600"
				  ></textarea>
				</div>
				<div class="col-span-full sm:col-span-3">
				  <label
					for="averageCost"
					class="text-sm text-gray-900 dark:text-gray-100"
				  >
					Average Cost
				  </label>
				  <input
					id="averageCost"
					type="number"
					placeholder="Average Cost"
					defaultValue={averageCost}
					class="w-full rounded-md border border-gray-300 dark:border-gray-700 focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:text-gray-50 dark:focus:ring-violet-600"
				  />
				</div>
				<div class="col-span-full sm:col-span-3">
				  <label
					for="seasonality"
					class="text-sm text-gray-900 dark:text-gray-100"
				  >
					Seasonality
				  </label>
				  <input
					id="seasonality"
					type="text"
					placeholder="e.g., Summer, Winter"
					defaultValue={seasonality}
					class="w-full rounded-md border border-gray-300 dark:border-gray-700 focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:text-gray-50 dark:focus:ring-violet-600"
				  />
				</div>
				<div class="col-span-full sm:col-span-3">
				  <label
					for="travelTime"
					class="text-sm text-gray-900 dark:text-gray-100"
				  >
					Travel Time
				  </label>
				  <input
					id="travelTime"
					type="text"
					placeholder="e.g., 7 days"
					defaultValue={travelTime}
					class="w-full rounded-md border border-gray-300 dark:border-gray-700 focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:text-gray-50 dark:focus:ring-violet-600"
				  />
				</div>
				<div class="col-span-full sm:col-span-3">
				  <label
					for="totalVisitors"
					class="text-sm text-gray-900 dark:text-gray-100"
				  >
					Total Visitors Per Year
				  </label>
				  <input
					id="totalVisitors"
					type="number"
					placeholder="Total Visitors Per Year"
					defaultValue={totalVisitors}
					class="w-full rounded-md border border-gray-300 dark:border-gray-700 focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:text-gray-50 dark:focus:ring-violet-600"
				  />
				</div>
				<div class="col-span-full">
				  <button
					type="submit"
					class="px-4 py-2 font-medium text-white bg-blue-500 rounded-md"
				  >
					Add
				  </button>
				</div>
			  </div>
			</fieldset>
		  </form>
		</section>
	  </div>
	);
};

export default UpdateMyList;