/** @format */

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Layout = ({ children, title, description, keywords, author }) => {
	return (
		<div>
			<HelmetProvider>
				<Helmet>
					<meta name='description' content={description} />
					<meta name='keywords' content={keywords} />
					<meta name='author' content={author} />
					<title>Shopper Place-{title}</title>
				</Helmet>
			</HelmetProvider>
			<Header />
			<main style={{ minHeight: "100vh" }}>
				<ToastContainer />
				{children}
			</main>
			<Footer />
		</div>
	);
};

Layout.defaultProps = {
	title: "Shopper Place",
	description: "mern stack , mongodb",
	keywords: "mern shopping buy online",
	author: "Codedevloper13",
};

export default Layout;
