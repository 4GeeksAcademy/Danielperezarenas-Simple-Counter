import React, { useState, useEffect } from "react";

export const SimpleCounter = () => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter(counter => counter + 1);
		}, 10);
		return () => clearInterval(interval);
	}, []);

	return (
		<div
			className="bigCounter d-flex bg-dark text-white p-4 m-3 gap-5 justify-content-center"
			style={{ fontSize: "60px", lineHeight: "60px" }}
		>
			<div className="">
				<i className="far fa-clock"></i>
			</div>
			<div>{Math.floor(counter / 1000000) % 10}</div>
			<div>{Math.floor(counter / 100000) % 10}</div>
			<div>{Math.floor(counter / 10000) % 10}</div>
			<div>{Math.floor(counter / 1000) % 10}</div>
			<div>{Math.floor(counter / 100) % 10}</div>
			<div>,</div>
			<div>{Math.floor(counter / 10) % 10}</div>
			<div>{Math.floor(counter / 1) % 10}</div>
		</div>

	)

}
