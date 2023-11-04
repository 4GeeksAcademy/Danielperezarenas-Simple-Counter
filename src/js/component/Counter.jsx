import React, { useState, useEffect } from "react";
import { Buttons } from "./Buttons.jsx";


export const SimpleCounter = () => {
	const [ title, setTitle ] = useState('Simple Counter')
	const [ counter, setCounter ] = useState(0);
	const [ isActive, setIsActive ] = useState(false);
	const [ status, setStatus ] = useState({icon: 'far fa-clock', subtitle: 'Clock', subtitleStyle: 'text-center'});

	const start = () => {
		if (isActive){
			setTitle('Simple Counter Paused');
			setIsActive(false);
			setStatus({icon: 'fa fa-stopwatch', subtitle: 'Chronometer', subtitleStyle: 'text-danger'})
		} else {	
			setTitle('Simple Counter Started');
			setIsActive(true);
			setStatus({icon: 'fa fa-stopwatch', subtitle: 'Chronometer', subtitleStyle: 'text-primary'})
		}
	};

	const reset = () => {
		setTitle('Simple Counter');
		setCounter(0);
		setIsActive(false);
		setStatus({icon: 'far fa-clock', subtitle: 'Clock', subtitleStyle: 'text-center'})
	};

	useEffect(() => {
		if(isActive){
		const interval = setInterval(() => {
			setCounter(counter => counter + 1);
		}, 10);
		return () => clearInterval(interval);	
		}
	}, [isActive]);

	return (
		<div className='text-center'>
			<h1>{title}</h1>
			<h2 className={status.subtitleStyle}>{status.subtitle}</h2>
			<div
				className="bigCounter d-flex bg-dark text-white p-4 m-3 gap-5 justify-content-center"
				style={{ fontSize: "60px", lineHeight: "60px" }}>
				<div>
					<i className={status.icon}></i>
				</div>
				<div>{Math.floor(counter / 1000000) % 10}</div>
				<div>{Math.floor(counter / 100000) % 10}</div>
				<div>{Math.floor(counter / 10000) % 10}</div>
				<div>{Math.floor(counter / 1000) % 10}</div>
				<div>{Math.floor(counter / 100) % 10}</div>
				<div>,</div>
				<div>{Math.floor(counter / 10) % 10}</div>
				<div>{Math.floor(counter / 1) % 10}</div>
				<div className="btn-group-vertical gap-2 btn-group-sm" role="group" aria-label="Vertical button group">
					<button type="button" className={"btn btn-outline-success"} onClick={start}>
						{isActive ? 'Pause' : 'Start'}
					</button>
					<button type="button" className="btn btn-outline-danger" onClick={reset}>
						Reset
					</button>
				</div>
			</div>
		</div>

	)

}
