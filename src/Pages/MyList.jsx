import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import MyListPageCard from "./MyListPageCard";

const MyList = () => {
	const {user} = useContext(AuthContext);
	const [myList,setMyList]=useState([]);
	const url = `http://localhost:5000/AllSpots/${user.email}`;
	useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyList(data))
    }, [])

	return (
		<div>
			<h3 className="text-center font-bold text-3xl my-4">Your List</h3>
			{
				myList.map(myList =>
					<MyListPageCard
					  key={myList._id}
					  myList={myList}
					>
					</MyListPageCard>
				)
			}
		</div>
	);
};

export default MyList;