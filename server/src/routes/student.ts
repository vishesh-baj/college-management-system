import {
  createStudent,
  deleteStudent,
  getStudentById,
  updateStudent,
} from "../controllers/student";
import { verifyToken } from "./../middlewares/index";
import { Router } from "express";

const router: Router = Router();

router.post("/create-student", verifyToken, createStudent);
router.get("/get-all-students", verifyToken, createStudent);
router.get("get-student-by0id/:id", verifyToken, getStudentById);
router.put("/update-student/:id", verifyToken, updateStudent);
router.delete("/delete/student/:id", verifyToken, deleteStudent);

export default router;
