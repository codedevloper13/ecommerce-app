/** @format */

import express from "express";
import { registerController, loginController, testController } from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

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
router.get("/test", requireSignIn, isAdmin, testController);

// Protected route auth

router.get("/user-auth", requireSignIn, (req, res) => {
	res.status(200).send({ ok: true });
});

export default router;
