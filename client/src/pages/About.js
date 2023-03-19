/** @format */

import React from "react";
import Layout from "../components/Layouts/Layout";

const About = () => {
	return (
		<Layout title={"About Us"}>
			<section className='conatct-us'>
				<div className='container mt-5'>
					<div className='row'>
						<div className='col-md-6  contact-image col-sm-12'>
							<img src='/contact-us-lettering.jpg' alt='' />
						</div>
						<div className='col-md-6 col-sm-12'>
							<h1>What is Lorem Ipsum?</h1>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
								the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
								type and scrambled it to make a type specimen book. It has survived not only five centuries, but
								also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
								the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
								with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
							</p>
						</div>
						<div className='col-md-6'>
							<p className='mt-3'>gggggg</p>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default About;
