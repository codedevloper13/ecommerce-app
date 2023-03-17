/** @format */

import Jwt from "jsonwebtoken";
import userModels from "../models/userModels.js";

// Protected Route Token Based...
export const requireSignIn = async (req, res, next) => {
	try {
		const decode = Jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
		req.user = decode;
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

// Admin Access

export const isAdmin = async (req, res, next) => {
	try {
		const user = await userModels.findById(req.user._id);

		if (user.role !== 1) {
			return res.status(401).send({
				success: false,
				message: "Unauthorized Access",
			});
		} else {
			next();
		}
	} catch (error) {
		//console.log(error);
		return res.status(401).send({
			success: false,
			message: "Error in admin Middleware",
			error: error.JsonWebTokenError,
		});
	}
};
