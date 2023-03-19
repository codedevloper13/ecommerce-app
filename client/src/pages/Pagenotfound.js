/** @format */

import React from "react";
import Layout from "../components/Layouts/Layout";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Pagenotfound = () => {
	return (
		<Layout title={"Page not Fond -404"}>
			<div className='pnf'>
				<h1 className='pnf-title'>404</h1>
				<h2 className='pnf-heading'>Opps ! Page Not Found</h2>
				<Link to='/' className='pnf-btn'>
					<BiArrowBack />
					Go Back
				</Link>
			</div>
		</Layout>
	);
};

export default Pagenotfound;
