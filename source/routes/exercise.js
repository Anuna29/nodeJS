const express = require('express');
const router = express.Router();
const {
  getAllExercises,
  getSingleExercise,
  createExercise,
  updateExercise,
  deleteExercise,
} = require("../controllers/exercise");
const middleware = require("../middleware/auth")

router.use(middleware);

router.get("/", getAllExercises);
router.get("/:id", getSingleExercise);
router.post("/", createExercise);
router.put("/:id", updateExercise);
router.delete("/:id", deleteExercise);


module.exports = router;