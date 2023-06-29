import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import adminRoutes from "./routes/admin.js";
import userRoutes from "./routes/user.js";
import blogRoutes from "./routes/blog.js";

// creating app
const app = express();

app.use(
  bodyParser.json({
    limit: "30mb",
    extended: true,
  })
);

app.use(
  bodyParser.urlencoded({
    limit: "30mb",
    extended: true,
  })
);

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello and welcome to blogging website!!!");
});

app.use("/admin", adminRoutes);
app.use("/user", userRoutes);
app.use("/blog", blogRoutes);

const CONNECTION_URL = "mongodb+srv://rohit11544:rohit123@cluster0.qmciq.mongodb.net/blogging?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

// connecting mongoDB to server
mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
