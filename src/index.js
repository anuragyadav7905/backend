import express from "express";
import connectDB from "./db/index.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB connection failed", err);
  });






// // require('dotenv').config()

// import dotenv from "dotenv" 
// import connectDB from "./db/index.js";


// dotenv.config({
//     path: './env'
// })




// connectDB()
