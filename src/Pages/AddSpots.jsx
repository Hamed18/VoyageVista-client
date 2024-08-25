const AddSpots = () => {
	const handleAddSpot = event => {
		event.preventDefault();
	  
		const form = event.target;
	  
		const userEmail = form.userEmail.value;
		const userName = form.userName.value;
		const image = form.image.value;
		const touristSpotName = form.touristSpotName.value;
		const countryName = form.countryName.value;
		const location = form.location.value;
		const shortDescription = form.shortDescription.value;
		const averageCost = form.averageCost.value;
		const seasonality = form.seasonality.value;
		const travelTime = form.travelTime.value;
		const totalVisitors = form.totalVisitors.value;
	  
		// Create an object from user input data
		const newSpot = {
		  userEmail,
		  userName,
		  image,
		  touristSpotName,
		  countryName,
		  location,
		  shortDescription,
		  averageCost: parseInt(averageCost, 10), // Convert to number
		  seasonality,
		  travelTime,
		  totalVisitors: parseInt(totalVisitors, 10) // Convert to number
		};
	  
		// Log the object or handle it as needed
		console.log("New Tourist Spot Data:", newSpot);
	  
		// You can add logic here to submit this data to a server or handle it as needed
	  };
	  
  return (
    <div className="max-w-6xl mx-auto">
      <section class="p-6 bg-gray-100 dark:bg-gray-900">
        <form onSubmit={handleAddSpot} class="container flex flex-col mx-auto space-y-12">
          <fieldset class="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-white dark:bg-gray-800">
            <div class="space-y-2 col-span-full lg:col-span-1">
              <p class="font-medium text-gray-900 dark:text-gray-100">
                Personal Information
              </p>
              <p class="text-xs text-gray-600 dark:text-gray-400">
                Please provide your personal information below.
              </p>
            </div>
            <div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div class="col-span-full sm:col-span-3">
                <label
                  for="userEmail"
                  class="text-sm text-gray-900 dark:text-gray-100"
                >
                  User Email
                </label>
                <input
                  id="userEmail"
                  type="email"
                  placeholder="User Email"
                  class="w-full rounded-md border border-gray-300 dark:border-gray-700 focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:text-gray-50 dark:focus:ring-violet-600"
                />
              </div>
              <div class="col-span-full sm:col-span-3">
                <label
                  for="userName"
                  class="text-sm text-gray-900 dark:text-gray-100"
                >
                  User Name
                </label>
                <input
                  id="userName"
                  type="text"
                  placeholder="User Name"
                  class="w-full rounded-md border border-gray-300 dark:border-gray-700 focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:text-gray-50 dark:focus:ring-violet-600"
                />
              </div>
            </div>
          </fieldset>

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

export default AddSpots;
