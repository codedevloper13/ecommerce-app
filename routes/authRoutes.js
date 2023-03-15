/** @format */

import express from "express";
import { registerController } from "../controllers/authController.js";

//Router Object

const router = express.Router();

//Routing

/**
 * Register Route
 * Method POSt
 */
router.post("/register", registerController);

export default router;
