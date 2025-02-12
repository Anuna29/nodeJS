const mongoose = require('mongoose');
const Exercise = require("../../models/exercise");

const updateExercise = async (req, res) => {
  const { id } = req.params;
  const { name, description, sets, reps, weight } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid ID' });
  }

  try {
    const exercise = await Exercise.findById(id);

    if (!exercise) {
      return res.status(404).json({ message: 'Exercise not found' });
    }

    const updatedExercise = await Exercise.findByIdAndUpdate(id, {
      name,
      description,
      sets,
      reps,
      weight,
    }, { new: true });

    res.status(200).json(updatedExercise);
  }catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
}

module.exports = {
  updateExercise,
}