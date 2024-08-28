
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import AllSpots from "../Pages/AllSpots";
import AddSpots from "../Pages/AddSpots";
import MyList from "../Pages/MyList";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "./ErrorPage";
import HomeCardDetails from "../Pages/Home/HomeCardDetails";
import MyListPageCard from "../Pages/MyListPageCard";
import PrivateRoutes from "./PrivateRoutes";

const routes = createBrowserRouter([
	{
	  path: "/",
	  element: <Root></Root>,
	  errorElement: <ErrorPage></ErrorPage>,
	  children: [
		{
			path: "/",
			element: <Home></Home>,
			loader: () => fetch('http://localhost:5000/TouristSpots')
		},
		{
			path: "/:id",
			element: <PrivateRoutes><HomeCardDetails></HomeCardDetails></PrivateRoutes>,
			loader: ({params}) => fetch(`http://localhost:5000/TouristSpots/${params.id}`) 
		},
		{
			path: "/allspots",
			element: <AllSpots></AllSpots>,
			loader: () => fetch('http://localhost:5000/AllSpots')
		},
		{
			path: "/addspots",
			element: <PrivateRoutes><AddSpots></AddSpots></PrivateRoutes>
		},
		{
			path: "/mylist",
			element: <PrivateRoutes><MyList></MyList></PrivateRoutes>
		},
		{
			path: "/myListCard",
			element: <MyListPageCard></MyListPageCard>
		},
		{
			path: "/login",
			element: <Login></Login>
		},
		{
			path: "/register",
			element: <Register></Register>
		}
	  ]
	},
  ]);

export default routes;