import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { User } from "../models/user";
import { v4 as uuidv4 } from "uuid";
import { IUser } from "../types";

export const createFaculty = async (req: Request, res: Response) => {
  try {
    const { email, firstName, lastName } = req.body;
    const username = `${firstName.toLowerCase()}${lastName.toLowerCase()}${
      firstName.length + lastName.length
    }`;
    const password = uuidv4().split("-").slice(-1)[0];
    const hashedPassword = await bcrypt.hash(password, 10);

    const facultyToBeSaved = new User({
      username,
      email,
      password: hashedPassword,
      role: "faculty",
    });
    const savedFaculty = await facultyToBeSaved.save();

    res.status(200).json({
      message: "Faculty created successfully",
      savedFaculty,
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

export const getAllFaculty = async (req: Request, res: Response) => {
  try {
    const faculties = await User.find({ role: "faculty" });
    res
      .status(200)
      .json({ message: "Faculties fetched successfully", faculties });
  } catch (error) {
    console.log("Error occured", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

export const getFacultyById = async (req: Request, res: Response) => {
  try {
    const facultyId = req.params.id;
    if (!facultyId) {
      return res.status(404).json({ message: "faculty id not provided" });
    }
    const faculty = await User.findById(facultyId);
    if (!faculty) {
      return res
        .status(404)
        .json({ message: "faculty not found with the provided id" });
    }
    res.status(200).json({ message: "faculty found", faculty });
  } catch (error) {
    console.log("Error occured", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

export const deleteFaculty = async (req: Request, res: Response) => {
  try {
    const facultyId = req.params.id;
    if (!facultyId) {
      return res.status(404).json({ message: "faculty id not provided" });
    }
    const deletedFaculty = await User.findByIdAndDelete(facultyId);
    if (!deleteFaculty) {
      return res.status(404).json({ message: "faculty not deleted" });
    }
    res
      .status(200)
      .json({ message: "faculty deleted successfully", deletedFaculty });
  } catch (error) {
    console.log("Error occured", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

export const updateFaculty = async (req: Request, res: Response) => {
  try {
    const facultyId = req.params.id;
    const updatedData: Partial<IUser> = req.body;

    if (!facultyId) {
      return res.status(404).json({ message: "Faculty ID not provided" });
    }

    // Validate that only allowed fields are being updated
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

    const updatedFaculty = await User.findByIdAndUpdate(
      facultyId,
      updatedData,
      { new: true }
    );

    if (!updatedFaculty) {
      return res.status(404).json({ message: "Cannot update faculty" });
    }

    res
      .status(200)
      .json({ message: "Faculty updated successfully", updatedFaculty });
  } catch (error) {
    console.error("Error occurred", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};
