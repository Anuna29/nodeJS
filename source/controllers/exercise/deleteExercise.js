const mongoose = require('mongoose');
const Exercise = require('../../models/exercise');

const deleteExercise = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid ID' });
  }
  try{
    const exercise = await Exercise.findByIdAndDelete(id);

    if (!exercise) {
      return res.status(404).json({ message: 'Exercise not found' });
    }

    res.status(200).json({ message: 'Exercise deleted successfully' });
  }catch(err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = {
  deleteExercise,
};