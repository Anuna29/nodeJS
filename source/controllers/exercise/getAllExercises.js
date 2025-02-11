const Exercise = require("../../models/exercise");

const getAllExercises = async (req, res) => {
  res.send("getAllExercises");
}

module.exports = {
  getAllExercises,
}