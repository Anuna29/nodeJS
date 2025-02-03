const mongoose = require("mongoose");
const Task = require("../../models/task")

const deleteTask = async (request, response) => {
  const { id } = request.params;

  if (!mongoose.Types.ObjectId.isValid(id)){
    return response.status(400).json({ message: "Invalid ID" });
  }

  try {
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return response.status(404).json({ message: "Task not found" });
    }

    response.status(200).json(deletedTask);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
}

module.exports = {
  deleteTask,
};