/** @format */

import express from "express";
import { registerController, loginController, testController } from "../controllers/authController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

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

// test Routes for Middleware check
router.get("/test", requireSignIn, testController);

export default router;
