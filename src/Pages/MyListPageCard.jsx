import { Link } from "react-router-dom";

const MyListPageCard = ({ myList,handleDelete }) => {
  const {
	  _id,
    touristSpotName,
    location,
    image,
    countryName,
    averageCost,
    travelTime,
  } = myList;

  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-24" />
          </colgroup>
          <thead className="dark:bg-gray-300">
            <tr className="text-left">
              <th className="p-3">Spot Name #</th>
              <th className="p-3">Location</th>
              <th className="p-3">Average Cost</th>
              <th className="p-3 text-right">Travel Time</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
              <td className="p-3">
                <p>{touristSpotName}</p>
              </td>
              <td className="p-3">
                <p>{location}</p>
                <p className="dark:text-gray-600">{countryName}</p>
              </td>
              <td className="p-3">
                <p>${averageCost}</p>
              </td>
              <td className="p-3 text-right">
                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                  <span>{travelTime}</span>
                </span>
              </td>
              <td className="p-3 text-right ">
                  <div className="flex justify-start mr-2">
                    <Link to = {`mylist/${_id}`}>
                      <button className="btn btn-outline btn-secondary">
                         UPDATE
                      </button>
                    </Link>
                    <button onClick={()=> handleDelete(_id)} className="btn btn-outline btn-warning">
                      DELETE
                    </button>
                  </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyListPageCard;
