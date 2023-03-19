/** @format */

import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { toast } from "react-hot-toast";

const Header = () => {
	// Navigartion
	const navigate = useNavigate();
	const [auth, setAuth] = useAuth();
	const handleLogout = () => {
		setAuth({
			...auth,
			user: null,
			token: "",
		});
		localStorage.removeItem("auth");
		toast.success("Logout Successfully");
		setTimeout(() => {
			navigate("/login");
		}, 1000);
	};
	return (
		<>
			<nav className='navbar navbar-expand-lg bg-body-tertiary'>
				<div className='container-fluid'>
					<Link className='navbar-brand' to='/'>
						<img src='/logo512.png' alt='' />
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon' />
					</button>
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<NavLink className='nav-link ' to='/'>
									Home
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link ' to='/category'>
									Category
								</NavLink>
							</li>
							{!auth.user ? (
								<>
									<li className='nav-item'>
										<NavLink className='nav-link' to='/register'>
											Register
										</NavLink>
									</li>
									<li className='nav-item'>
										<NavLink className='nav-link' to='/login'>
											Login
										</NavLink>
									</li>
								</>
							) : (
								<>
									<li className='nav-item'>
										<NavLink onClick={handleLogout} className='nav-link'>
											Logout
										</NavLink>
									</li>
								</>
							)}
							<li className='nav-item'>
								<NavLink className='nav-link' to='/cart'>
									Cart (0)
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
