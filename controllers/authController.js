/** @format */

import userModel from "../models/userModels.js";
import { hashPassword } from "../helpers/authHelper.js";
export const registerController = async (req, res) => {
	try {
		const { name, email, password, phone, address } = req.body;
		if (!name) {
			return res.send({ error: "Name is Required" });
		}
		if (!email) {
			return res.send({ error: "Email is Required" });
		}
		if (!password) {
			return res.send({ error: "Password is Required" });
		}
		if (password.length < 8) {
			return res.send({ error: "Please Type 8 Character Long Password" });
		}

		if (!phone) {
			return res.send({ error: "Phone is Required" });
		}
		if (!address) {
			return res.send({ error: "Address is Required" });
		}

		//  Check the User Through Email

		const existingUser = await userModel.findOne({ email });
		// Check the Existing User or not
		if (existingUser) {
			return res.status(200).send({
				success: true,
				message: "Already Register Please login",
			});
		}

		// Register User and plain password to bcrypt Password.

		const hashedPassword = await hashPassword(password);
		// Data saved in Database
		const user = await new userModel({ name, email, phone, address, password: hashedPassword }).save();
		res.status(201).send({
			success: true,
			message: "User Register Successfully",
			user,
		});
	} catch (error) {
		console.log(error);
		res.status(500).send({
			success: false,
			message: "Error in Registration",
			error,
		});
	}
};
