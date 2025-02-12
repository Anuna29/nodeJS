const mongoose = require("mongoose");
const Task = require("../../models/task")

const updateTask = async (request, response) => {
  const { id } = request.params;
  const { name, description, status } = request.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return response.status(400).json({ message: "Invalid task id" });
  }
  if (!name || !description || !status) {
    return response.status(400).json({
      message: "Please provide all required fields",
    });
  }
  try {
    const task = await Task.findById(id);

    if (!task) {
      return response.status(404).json({ message: "Task not found" });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { name, description, status },
      { new: true }
    );
  
    response.status(200).json(updatedTask);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
}

module.exports = {
  updateTask,
};