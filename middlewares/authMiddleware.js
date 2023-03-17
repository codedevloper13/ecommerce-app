/** @format */

import Jwt from "jsonwebtoken";

export const requireSignIn = async (req, res, next) => {
	try {
		const decode = Jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
		next();
	} catch (error) {
		if (error) {
			return res.status(400).send({
				success: false,
				message: "Token Mismatched",
				error,
			});
		}
	}
};
