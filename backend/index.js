import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import applicant_route from "./routes/request.js";
import cors from 'cors';

const app = express();
dotenv.config();


const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log("Connected to the mongodb");
    } catch (error) {
      throw error;
    }
  };
  
  mongoose.connection.on("disconnected", () => {
      console.log("mongodb disconnected");
  });


app.use(express.json());
app.use(cors());

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use("/applicant",applicant_route);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    connect();
    console.log("connected to backend");
});



