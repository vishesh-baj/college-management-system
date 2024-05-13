import { Router } from "express";
import { createFaculty } from "../controllers/users";
import { verifyToken } from "../middlewares";

const router: Router = Router();

router.post("/faculty/create-faculty", verifyToken, createFaculty);

export default router;
