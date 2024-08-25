import { Link } from "react-router-dom";

const MyListPageCard = () => {
  return (
	<div className="flex justify-center border border-gray-300 rounded-lg shadow-lg max-w-2xl mx-auto p-6 dark:bg-gray-50 dark:text-gray-800 dark:border-gray-300 mx-2 my-4">
	<div className="flex flex-col xl:flex-row xl:divide-x divide-gray-300 dark:divide-gray-300">
	  <div className="p-3 space-y-1">
		<h3 className="text-3xl font-semibold">Lorem ipsum dolor sit amet</h3>
		<p className="text-sm dark:text-gray-600">
		  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
		  possimus repellat incidunt odit eligendi mollitia quaerat autem
		  nobis fugiat natus?
		</p>
	  </div>
	  <div className="flex items-center gap-3 p-3">
		{/* <img
		  alt=""
		  src="https://source.unsplash.com/100x100/?portrait"
		  className="object-cover w-12 h-12 dark:bg-gray-500 rounded-full shadow"
		/> */}
		<div className="space-y-1">
		  <span className="text-xs">Created at: April 03, 2021</span>
  
		  <div className="flex flex-wrap gap-3">
			<Link className="text-blue-600 font-bold">
			  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out">
				Update
			  </button>
			</Link>
			<Link className="text-blue-600 font-bold">
			  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out">
				Delete
			  </button>
			</Link>
		  </div>
  
		</div>
	  </div>
	</div>
  </div>
  
  );
};

export default MyListPageCard;
