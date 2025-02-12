const Exercise = require("../../models/exercise");

const getAllExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.status(200).json(exercises);
  }catch(error){
    res.status(500).json({ message: "Something went wrong" });
  }
}

module.exports = {
  getAllExercises,
}