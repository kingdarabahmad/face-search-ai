import { Router } from "express";
import { registerUser } from "../controller/UserController.js";

const router = Router();

router.post("/register", registerUser);

export default router;