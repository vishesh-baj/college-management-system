import { Router } from "express";
import { createFaculty, getAllFaculty } from "../controllers/faculty";
import { verifyToken } from "../middlewares";

const router: Router = Router();

router.post("/create-faculty", verifyToken, createFaculty);
router.get("/get-all-faculty", verifyToken, getAllFaculty);

export default router;
