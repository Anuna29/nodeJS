const mongoose = require('mongoose');
const Exercise = require('../../models/exercise');

const getSingleExercise = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({ message: 'Invalid ID' });
  }

  try{
    const exercise = await Exercise.findById(id);
    if(!exercise){
      return res.status(404).json({ message: 'Exercise not found' });
    }
    res.status(200).json(exercise);
  } catch(error){
    res.status(500).json({ message: 'Something went wrong' });
  }
}

module.exports = {
  getSingleExercise,
}