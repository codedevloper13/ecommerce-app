/** @format */

import { useState } from "react";
import Layout from "../../components/Layouts/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/AuthStyles.css";
const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	// Navigartion

	const navigate = useNavigate();

	// Handle Submit Form

	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log({ name, email, password, phone, address });
		try {
			const response = await axios.post(`${process.env.REACT_APP_API_HOST}/api/v1/auth/register`, {
				name,
				email,
				password,
				phone,
				address,
			});
			if (response.data.success) {
				toast.success(response.data.message);

				setTimeout(() => {
					navigate("/login");
				}, 2000);
			} else {
				toast.error(response.data.message);
			}
		} catch (error) {
			console.log(error);
			toast.error("Something Went Wrong!");
		}
	};
	return (
		<Layout title={"Register"}>
			<section className='form_container'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12 col-sm-12 col-xs-12'>
							<div className='page_header'>
								<h1>Register</h1>
							</div>
							<div className='register_forms'>
								<form className='auth_form' onSubmit={handleSubmit}>
									<div className='mb-3'>
										<label htmlFor='exampleInputEmail1' className='form-label'>
											Name
										</label>
										<input
											type='text'
											className='form-control'
											id='name'
											value={name}
											onChange={(e) => setName(e.target.value)}
											required
										/>
									</div>

									<div className='mb-3'>
										<label htmlFor='exampleInputEmail1' className='form-label'>
											Email address
										</label>
										<input
											type='email'
											className='form-control'
											id='exampleInputEmail1'
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											required
										/>
									</div>
									<div className='mb-3'>
										<label htmlFor='exampleInputPassword1' className='form-label'>
											Password
										</label>
										<input
											type='password'
											className='form-control'
											id='exampleInputPassword1'
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											required
										/>
									</div>
									<div className='mb-3'>
										<label htmlFor='phone' className='form-label'>
											Phone
										</label>
										<input
											type='number'
											className='form-control'
											id='phone'
											value={phone}
											onChange={(e) => setPhone(e.target.value)}
											required
										/>
									</div>

									<div className='mb-3'>
										<label htmlFor='exampleInputEmail1' className='form-label'>
											Address
										</label>
										<textarea
											className='form-control'
											id='address'
											value={address}
											onChange={(e) => setAddress(e.target.value)}
											required
										/>
									</div>
									<button type='submit' className='btn btn-primary btn-common'>
										Submit
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Register;
