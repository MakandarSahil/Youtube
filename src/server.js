// require("dotenv").config({path: "./env"});
import dotenv from "dotenv";
import connectDB from "./db/db.js";



dotenv.config({
  path: "./env",
})
connectDB()












// db connection approch 1
/*
import express from "express";
const app = express();

( async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("ERRROR", (error) => {
      console.error("ERROR : ", error)
      throw error
    })

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`)
    })

  } catch (error) {
    console.error("ERROR : ", error)
    throw error
  }
})()

*/
