/** @format */

import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import ConnectDB from "./config/db.js";

/**
 * Env  configure
 */
dotenv.config();

// database Config
ConnectDB();

// Rest object
const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
	res.send({ message: "I love you Programmer" });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log(`Server Connected on ${PORT}`.rainbow);
});