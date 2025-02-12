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
    sets: {
      type: Number,
      required: true
    },
    reps: {
      type: Number,
      required: true
    },
    weight: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model("Exercise", excersiceSchema);