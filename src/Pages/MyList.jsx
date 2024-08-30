import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import MyListPageCard from "./MyListPageCard";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

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
//    const handleDelete = id => {
//     Swal.fire({
//         title: 'Are you sure?',
//         text: "You won't be able to revert this!",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//         if (result.isConfirmed) {
//             fetch(`http://localhost:5000/AllSpots/${id}`, {
//                 method: 'DELETE'
//             })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 if (data.deletedCount > 0) {
//                     Swal.fire(
//                         'Deleted!',
//                         'The tourist spot has been deleted.',
//                         'success'
//                     );
//                     const remaining = myList.filter(myList => myList._id !== id);
//                     setMyList(remaining);
//                 }
//             });
//         }
//     });
//     }


	return (
		<div>
			{
				(myList.length>0) ? (
				<div>
				  <h3 className="text-center font-bold text-3xl my-4">Your List</h3>
                  { myList.map(myList =>(
					<MyListPageCard
					  key={myList._id}
					  myList={myList}
					  handleDelete={handleDelete}
					>
					</MyListPageCard>
				    ))
				  } 
				</div>
                )
				: 
				(
				<div>
                  <p className="text-center my-8">Your List is empty! <br />
					<Link to='/addspot' className="text-blue-400">Add New</Link>
				  </p>
				</div>  
				)
			}
		</div>
	);
};

export default MyList;