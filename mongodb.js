require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./source/routes/task");
const authRoutes = require("./source/routes/auth");
const exerciseRoutes = require("./source/routes/exercise");

const port = process.env.PORT || 4000;
const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  response.send("GET request received at '/' path")
});

app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);
app.use("/exercises", exerciseRoutes);

mongoose
.connect(process.env.MONGODB_URI)
.then(
  console.log("Connected to MongoDB successfully"),
  app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
  })
).catch((error) => console.log(error));
