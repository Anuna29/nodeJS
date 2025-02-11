const Exercise = require('../../models/exercise');

const createExercise = async (req, res) => {
  const {name, description, type, duration, caloriesBurned} = req.body;

  if (!name || !description || !type || !duration || !caloriesBurned) {
    return res
    .status(400)
    .json({ message: 'All fields are required' });
  }

  try {
    const exercise = await Exercise.create({
      name,
      description,
      type,
      duration,
      caloriesBurned,
    });
    res.status(201).json({ exercise });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  createExercise,
};