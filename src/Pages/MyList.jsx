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

	const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/AllSpots/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        alert('deleted successful');
                        const remaining = myList.filter(myList => myList._id !== id);
                        setMyList(remaining);
                    }
                })
        }
    }

	return (
		<div>
			<h3 className="text-center font-bold text-3xl my-4">Your List</h3>
			{
				myList.map(myList =>
					<MyListPageCard
					  key={myList._id}
					  myList={myList}
					  handleDelete={handleDelete}
					>
					</MyListPageCard>
				)
			}
		</div>
	);
};

export default MyList;