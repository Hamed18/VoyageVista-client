
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import AllSpots from "../Pages/AllSpots";
import AddSpots from "../Pages/AddSpots";
import MyList from "../Pages/MyList";

const routes = createBrowserRouter([
	{
	  path: "/",
	  element: <Root></Root>,
	  children: [
		{
			path: "/",
			element: <Home></Home>
		},
		{
			path: "/allspots",
			element: <AllSpots></AllSpots>
		},
		{
			path: "/addspots",
			element: <AddSpots></AddSpots>
		},
		{
			path: "/mylist",
			element: <MyList></MyList>
		},
	  ]
	},
  ]);

export default routes;