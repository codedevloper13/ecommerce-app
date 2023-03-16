/** @format */

import express from "express";
import { registerController, loginController } from "../controllers/authController.js";

//Router Object

const router = express.Router();

//Routing

/**
 * Register Route
 * Method POSt
 */
router.post("/register", registerController);

// LOGIN ||POST 
router.post("/login", loginController);

export default router;
