import React from "react";
import { SimpleCounter } from "./Counter.jsx";
// import { Buttons } from "./Buttons.jsx";



//create your first component
const Home = () => {
	return (
		<div className="text-center">
			{/* <h1>{title}</h1>
			<h3>{clock}</h3>
			<div
				className="bigCounter d-flex bg-dark text-white p-4 m-3 gap-5 justify-content-center"
				style={{ fontSize: "60px", lineHeight: "60px" }}>
			</div> */}
				<SimpleCounter />{/* <Buttons /> */}
		</div>
	);
};

export default Home;
