/** @format */

import React from "react";
import Layout from "../components/Layouts/Layout";

const HomePage = () => {
	return (
		<Layout title={"Shopper place "}>
			<h1>Homepage</h1>
		</Layout>
	);
};

Layout.Props = {
	title: "Shopper Place -Home",
	description: "mern stack , mongodb",
	keywords: "mern shopping buy online",
	author: "Codedevloper13",
};
export default HomePage;
