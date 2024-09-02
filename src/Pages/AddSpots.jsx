import { useContext,useRef } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../Providers/AuthProviders';

const AddSpots = () => {
  const {user} = useContext(AuthContext);
  const formRef = useRef(null);  // resist re-render of an element

	const handleAddSpot = event => {
		event.preventDefault();
	  
		const form = event.target;
	  
		const userEmail = user.email;
		const userName = user.displayName;
    const profileImage = user.photoURL;
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
      profileImage,
		  image,
		  touristSpotName,
		  countryName,
		  location,
		  shortDescription,
		  averageCost: parseInt(averageCost, 10), // Convert to number
		  seasonality,
		  travelTime: parseInt(travelTime,10),
		  totalVisitors: parseInt(totalVisitors, 10) // Convert to number
		};
	  
		// Log the object or handle it as needed
		console.log("New Tourist Spot Data:", newSpot);
	  
		// add logic here to submit this data to a server or handle it as needed
		fetch('https://voyage-vista-server-alpha.vercel.app/allUsersAddedSpots',{
			method: 'POST',
			headers: {
				'content-type' : 'application/json'
			},
			body: JSON.stringify(newSpot)
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);
      // reset the form after filled up
      formRef.current.reset();
			// sweet alert
			if (data.insertedId){
				Swal.fire({
					title: "Success",
					text: "New Tourist Spot Added Successfully",
					icon: "success",
					confirmButtonText: 'cool'
				});
			}
      //

		})
	  };
	  
  return (
    <div className="max-w-6xl mx-auto">
      <h3 className="text-center font-bold text-3xl mt-8 mb-6">Add New Tourist Spot</h3>
      <section class="p-6 bg-gray-100 dark:bg-gray-900">
        <form ref={formRef} onSubmit={handleAddSpot} class="container flex flex-col mx-auto space-y-12">
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
                  defaultValue={user?.email}
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
                  defaultValue={user?.displayName}
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  placeholder="e.g. 1000$"
                  required
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
                  placeholder="e.g. Summer, Winter"
                  required
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
                  placeholder="e.g. 7 days"
                  required
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
                  placeholder="e.g. 10000"
                  required
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
