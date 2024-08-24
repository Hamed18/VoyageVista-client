import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {
	const {user,loading} = useContext(AuthContext);

	if (loading){
		// console.log("loading happens");
		return <span className="bg-green-700"></span>
	}

};

export default PrivateRoutes;