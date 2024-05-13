import { Request, Response } from "express";
import { User } from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// login
export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    // find user based on username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    // check if password is valid
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }
    // create jwt token
    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) {
      return res
        .status(500)
        .json({ message: "Internal Server Error: JWT Secret not found" });
    }
    const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: "24h",
    });
    res.status(200).json({ message: "Logged in successfully", token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// register (only for admin)
// export const register = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const hashedPassword = await bcrypt.hash("admin@123", 10);
//     const adminObj = {
//       username: "admin",
//       email: "admin@email.com",
//       password: hashedPassword,
//     };
//     const newAdmin = new User(adminObj);
//     const savedUser = await newAdmin.save();
//     res.status(200).json({ message: "admin saved successfully", savedUser });
//   } catch (error) {
//     res.status(500).json({ message: "internal server error" });
//   }
// };
