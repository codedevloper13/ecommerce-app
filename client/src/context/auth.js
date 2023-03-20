/** @format */

import { useState, useContext, useEffect, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState({
		user: null,
		token: "",
	});
	// Default Axios header
	axios.defaults.headers.common["Authorization"] = auth?.token;

	useEffect(() => {
		const data = localStorage.getItem("auth");
		if (data) {
			const ParseData = JSON.parse(data);
			setAuth({
				...auth,
				user: ParseData.user,
				token: ParseData.token,
			});
		}
		//eslint-disable-next-line
	}, []);
	return <AuthContext.Provider value={[auth, setAuth]}>{children}</AuthContext.Provider>;
};

// Custom Hook for Context

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
