import { Link } from "react-router-dom";

const HomePageCard = ({spot}) => {
  const {_id,tourist_spot_name,country_name,image,short_description} = spot
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{tourist_spot_name}, {country_name}</h2>
          <p>{short_description}</p>
          <div className="card-actions">
          <Link to={`/${_id}`} className="text-blue-600 font-bold flex justify-center">
          <button className="btn btn-success flex justify-center p-2 text-white-500">
            View Details
          </button>
        </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageCard;

{/* to={`/${id}`} */}