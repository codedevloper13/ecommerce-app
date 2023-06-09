/** @format */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Spinner = () => {
	const [count, setCount] = useState(5);
	const navigate = useNavigate();
	useEffect(() => {
		const interval = setInterval(() => {
			setCount((prevValue) => --prevValue);
		}, 1000);
		count === 0 && navigate("/login");
		return () => clearInterval(interval);
	}, [count, navigate]);
	return (
		<>
			<div className='d-flex flex-column align-items-center justify-content-center' style={{ minHeight: "100vh" }}>
				<h1 className='text-center'>Redirecting to you in {count} second </h1>
				<div className='spinner-border' role='status'>
					<span className='visually-hidden'>Loading...</span>
				</div>
			</div>
		</>
	);
};

export default Spinner;
