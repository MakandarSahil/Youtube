import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express();

// cors policy 
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}))

// json data limit
app.use(express.json({
  limit: "16kb" 
}));

app.use(express.urlencoded({
  extended: true,
  limit: "16kb" 
}))

app.use(express.static("public"));


// crud on cookies of user 
app.use(cookieParser())

export default app;