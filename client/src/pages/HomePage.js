/** @format */

import React from "react";
import Layout from "../components/Layouts/Layout";
import { useAuth } from "../context/auth";

const HomePage = () => {
	const [auth, setAuth] = useAuth();
	return (
		<Layout title={"Shopper place "}>
			<h1>Homepage</h1>
			<pre>{JSON.stringify(auth, null, 4)}</pre>
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
