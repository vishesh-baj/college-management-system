import { IUser } from "./../types/index";
import mongoose, { Schema } from "mongoose";

const UserSchema: Schema<IUser> = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  address: {
    type: String,
  },
  contactNumberPrimary: {
    type: Number,
  },
  contactNumberSecondary: {
    type: Number,
  },
  role: {
    type: String,
    enum: ["admin", "faculty", "student"],
  },
});

export const User = mongoose.model<IUser>("user", UserSchema);
