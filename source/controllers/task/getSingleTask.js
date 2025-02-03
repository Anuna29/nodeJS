const mongoose = require("mongoose");
const Task = require("../../models/task");

const getSingleTask = async (request, response) => {
  const { id } = request.params;

  if (!mongoose.Types.ObjectId.isValid(id)){
    return response.status(400).json({ message: "Invalid ID" });
  }
  try {
    const task = await Task.findById(id);

    if (!task) {
      return response.status(404).json({ message: "Task not found" });
    } 

    response.status(200).json(task);
  } catch(error) {
    response.status(500).json({ message: error.message });
  }
}

module.exports = {
  getSingleTask
}