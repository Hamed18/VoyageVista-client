import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const HomeCardDetails = () => {
	const spotDetail = useLoaderData();
    console.log(spotDetail);
	// const {_id} = useParams();
	// const idInt = parseInt(_id);
	// const spot = spotDetail.find((spot) => spot._id === idInt);
	// const {tourist_spot_name} = spot;
	return (
		<div>
			<h3 className="text-center">details of {spotDetail._id}</h3>
			<h3 className="text-center">details of {spotDetail.tourist_spot_name}</h3>
		</div>
	);
};

export default HomeCardDetails;