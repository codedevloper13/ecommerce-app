/** @format */

import userModel from "../models/userModels.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";
export const registerController = async (req, res) => {
	try {
		const { name, email, password, phone, address } = req.body;
		if (!name) {
			return res.send({ message: "Name is Required" });
		}
		if (!email) {
			return res.send({ message: "Email is Required" });
		}
		if (!password) {
			return res.send({ message: "Password is Required" });
		}
		if (password.length < 8) {
			return res.send({ message: "Please Type 8 Character Long Password" });
		}

		if (!phone) {
			return res.send({ message: "Phone is Required" });
		}
		if (phone.length < 10) {
			return res.send({ message: "Opps Please Provide Valid Format" });
		}
		if (!address) {
			return res.send({ message: "Address is Required" });
		}

		//  Check the User Through Email
		const existingUser = await userModel.findOne({ email });
		// Check the Existing User or not
		if (existingUser) {
			return res.status(200).send({
				success: false,
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
			user: {
				name: user.name,
				email: user.email,
				address: user.address,
				phone: user.phone,
			},
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

// Login Route || Post

export const loginController = async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			res.status(404).send({
				success: false,
				message: "Invalid email or password",
			});
		}
		// Check user

		const user = await userModel.findOne({ email });
		if (!user) {
			res.status(404).send({
				success: false,
				message: "Email is not registered",
			});
		}
		const match = await comparePassword(password, user.password);
		if (!match) {
			res.status(200).send({
				success: false,
				message: "Password id not valid",
			});
		}
		// Token generates

		const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
			expiresIn: "7d",
		});
		res.status(200).send({
			success: true,
			message: "Login successfully",
			user: {
				_id: user._id,
				name: user.name,
				email: user.email,
				address: user.address,
				phone: user.phone,
			},
			token,
		});
	} catch (error) {
		console.log(error);
		res.status(500).send({
			success: false,
			message: "Error in Login",
			error,
		});
	}
};

//  Test Routes

export const testController = (req, res) => {
	return res.status(200).send({
		success: true,
		message: "Working Routes",
	});
};
