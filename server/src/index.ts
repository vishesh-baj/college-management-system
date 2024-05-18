import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import authRoutes from "./routes/auth";
import facultyRoutes from "./routes/faculty";
dotenv.config();

const app = express();

const PORT = process.env.PORT;
const MONGO_DB_URI = process.env.MONGO_DB_URI;
if (!MONGO_DB_URI) {
  throw new Error("MONGO DB URI not provided");
}
// middlewares
app.use(cors());
app.use(express.json());

// db connection
mongoose
  .connect(MONGO_DB_URI)
  .then(() => {
    console.log("DB CONNECTED");
    app.listen(PORT, () => console.log(`SERVER STARTED AT PORT: ${PORT}`));
  })
  .catch((error) => console.error("ERROR OCCURED: ", error));

// routes

app.use("/api/auth", authRoutes);
app.use("/api/faculty", facultyRoutes);
