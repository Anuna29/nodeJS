const Task = require("../../models/task")

const getAllTasks = async (request, response) => {
  try{
    const tasks = await Task.find();
    response.json(tasks);
  }catch(error){
    response.status(500).json({ message: error.message });
  }
}

module.exports = {
  getAllTasks
}