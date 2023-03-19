/** @format */

import { useState, useContext, useEffect, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState({
		user: null,
		token: "",
	});
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
	}, []);
	return <AuthContext.Provider value={[auth, setAuth]}>{children}</AuthContext.Provider>;
};

// Custom Hook for Context

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
