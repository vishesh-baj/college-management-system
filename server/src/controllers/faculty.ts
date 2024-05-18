import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { User } from "../models/user";
import { v4 as uuidv4 } from "uuid";

export const createFaculty = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    if (!user || !user.userId || !user.role) {
      return res.status(404).json({ message: "Data not received from client" });
    }
    if (user.role !== "admin") {
      return res.status(401).json({ message: "Unauthorized access" });
    }
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
    const user = req.user;
    if (!user || !user.userId || !user.role) {
      res.status(404).json({ message: "Data not received from client" });
    }
    if (user.role !== "admin") {
      return res.status(401).json({ messge: "Unauthorized access" });
    }

    const faculties = await User.find({ role: "faculty" });
    res
      .status(200)
      .json({ message: "Faculties fetched successfully", faculties });
  } catch (error) {
    console.log("Error occured", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};
