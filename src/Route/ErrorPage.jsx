import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div className="flex justify-center">
          <div className="text-center">
			<h2 className="text-center font-extrabold text-2xl">404 route/not found!!</h2>
			<button>
			   <Link to="/" className="btn text-center font-bold p-2 rounded-xl flex justify-center">Go Back To Home</Link>
			</button>
		  </div>
		</div>
	);
};

export default ErrorPage;