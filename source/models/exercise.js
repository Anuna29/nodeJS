const mongoose = require('mongoose');

const excersiceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ['Cardio', 'Strength Training', 'Flexibility', 'Yoga', 'Mindfulness'],
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    caloriesBurned: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model("Exercise", excersiceSchema);