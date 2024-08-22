import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";
import Navbar from "../Shared/Navbar";

const Root = () => {
	return (
		<div className="max-w-6xl mx-auto">
			<Header></Header>
			<Navbar></Navbar>
			<Outlet></Outlet>
		</div>
	);
};

export default Root;