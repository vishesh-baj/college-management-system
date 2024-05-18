import {
  createStudent,
  deleteStudent,
  getAllStudent,
  getStudentById,
  updateStudent,
} from "../controllers/student";
import { verifyToken } from "./../middlewares/index";
import { Router } from "express";

const router: Router = Router();

router.post("/create-student", verifyToken, createStudent);
router.get("/get-all-student", verifyToken, getAllStudent);
router.get("/get-student-by-id/:id", verifyToken, getStudentById);
router.put("/update-student/:id", verifyToken, updateStudent);
router.delete("/delete-student/:id", verifyToken, deleteStudent);

export default router;
