require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Task = require("./models/task")

const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  response.send("GET request received at '/' path")
});

app.get("/tasks", async (request, response) => {
  try{
    const tasks = await Task.find();
    response.json(tasks);
  }catch(error){
    response.status(500).json({ message: error.message });
  }
});

app.post("/tasks", async (request, response) => {
  const { name, description, status } = request.body;

  if (!name || !description || !status) {
    return response.status(400).json({
      message: "Please provide all required fields"
    });
  }

  try{
    const task = await Task.create({ name, description, status });
    response.status(201).json(task);
  }catch(error){
    response.status(500).json({ message: error.message });
  }
})

mongoose
.connect(process.env.MONGODB_URI)
.then(
  console.log("Connected to MongoDB successfully"),
  app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
  })
)
.catch((error) => console.log(error));
