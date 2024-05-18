import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { User } from "../models/user";
import { v4 as uuidv4 } from "uuid";
import { IUser } from "../types";

export const createStudent = async (req: Request, res: Response) => {
  try {
    const { email, firstName, lastName } = req.body;
    const username = `${firstName.toLowerCase()}${lastName.toLowerCase()}${
      firstName.length + lastName.length
    }`;
    const password = uuidv4().split("-").slice(-1)[0];
    const hashedPassword = await bcrypt.hash(password, 10);

    const newStudent = new User({ email, username, password: hashedPassword });
    const savedStudent = await newStudent.save();
    res.status(200).json({
      message: "student created successfully",
      savedStudent,
      loginDetails: {
        username,
        password,
      },
    });
  } catch (error) {
    console.error("Error occurred", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const students = await User.find({ role: "student" });
    res
      .status(200)
      .json({ message: "students fetched successfully", students });
  } catch (error) {
    console.error("Error occurred", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

export const getStudentById = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.id;
    if (!studentId) {
      return res.status(404).json({ message: "student id not provided" });
    }
    const student = await User.findById(studentId);
    if (!student) {
      return res
        .status(404)
        .json({ message: "student not found with the provided id" });
    }
    res.status(200).json({ message: "student found", student });
  } catch (error) {
    console.error("Error occurred", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

export const deleteStudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.id;
    if (!studentId) {
      return res.status(404).json({ message: "student id not provided" });
    }
    const deletedStudent = await User.findByIdAndDelete(studentId);
    if (!deleteStudent) {
      return res.status(404).json({ message: "student not deleted" });
    }
    res
      .status(200)
      .json({ message: "student deleted successfully", deletedStudent });
  } catch (error) {
    console.error("Error occurred", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

export const updateStudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.id;
    const updatedData: Partial<IUser> = req.body;
    if (!studentId) {
      return res.status(404).json({ message: "Faculty ID not provided" });
    }

    const allowedUpdates = [
      "username",
      "email",
      "firstName",
      "lastName",
      "address",
      "contactNumberPrimary",
      "contactNumberSecondary",
    ];
    const isValidUpdate = Object.keys(updatedData).every((key) =>
      allowedUpdates.includes(key)
    );

    if (!isValidUpdate) {
      return res.status(400).json({ message: "Invalid updates!" });
    }

    const updatedStudent = await User.findByIdAndUpdate(
      studentId,
      updatedData,
      { new: true }
    );
    if (!updatedStudent) {
      return res.status(404).json({ message: "Can not update student" });
    }
    res
      .status(200)
      .json({ message: "Student updated successfully", updatedStudent });
  } catch (error) {
    console.error("Error occurred", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};
