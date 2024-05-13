import { Document, Types } from "mongoose";

export interface IClass extends Document {
  classname: string;
}

export interface ISection extends Document {
  sectionName: string;
}

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  contactNumberPrimary?: number;
  contactNumberSecondary?: number;
  role: "admin" | "faculty" | "student";
}
