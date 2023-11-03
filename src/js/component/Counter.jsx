import React from "react";


export const SimpleCounter = (props) => {
	let counter = props.counter;
	setInterval(function () {
		//render your react application
		const six = Math.floor(counter / 100000)
		const five = Math.floor(counter / 10000)
		const four = Math.floor(counter / 1000)
		const three = Math.floor(counter / 100)
		const two = Math.floor(counter / 10)
		const one = Math.floor(counter / 1)

		counter++;
	}, 1000);

	return (

		<div
			className="bigCounter d-flex bg-dark text-white p-4 m-3 gap-5 justify-content-center"
			style={{ fontSize: "60px", lineHeight: "60px" }}
		>
			<div className="">
				<i className="far fa-clock"></i>
			</div>
			<div className="six">{props.digitSix % 10}</div>
			<div className="five">{props.digitFive % 10}</div>
			<div className="four">{props.digitFour % 10}</div>
			<div className="three">{props.digitThree % 10}</div>
			<div className="two">{props.digitTwo % 10}</div>
			<div className="one">{props.digitOne % 10}</div>
		</div>

	)
}
SimpleCounter.propTypes = {
	digitSix: PropTypes.number,
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};



