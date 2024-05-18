import { Router } from "express";
import {
  createFaculty,
  getAllFaculty,
  getFacultyById,
  deleteFaculty,
  updateFaculty,
} from "../controllers/faculty";
import { verifyToken, checkAdminPrivilages } from "../middlewares";

const router: Router = Router();

router.post(
  "/create-faculty",
  verifyToken,
  checkAdminPrivilages,
  createFaculty
);
router.get(
  "/get-all-faculty",
  verifyToken,
  checkAdminPrivilages,
  getAllFaculty
);
router.get(
  "/get-faculty-by-id/:id",
  verifyToken,
  checkAdminPrivilages,
  getFacultyById
);
router.delete(
  "/delete-faculty/:id",
  verifyToken,
  checkAdminPrivilages,
  deleteFaculty
);
router.put(
  "/update-faculty/:id",
  verifyToken,
  checkAdminPrivilages,
  updateFaculty
);

export default router;
