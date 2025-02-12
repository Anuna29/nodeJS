const Exercise = require('../../models/exercise');

const createExercise = async (req, res) => {
  const {name, description, sets, reps, weight} = req.body;

  if (!name || !description || !sets || !reps || !weight) {
    return res
    .status(400)
    .json({ message: 'All fields are required' });
  }

  try {
    const exercise = await Exercise.create({
      name,
      description,
      sets,
      reps,
      weight
    });
    res.status(201).json(exercise);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  createExercise,
};