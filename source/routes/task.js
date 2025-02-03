const express = require('express');
const { getAllTasks, getSingleTask, createTask, updateTask, deleteTask } = require('../controllers');
const router = express.Router();

router.get("/", getAllTasks);
router.get("/:id", getSingleTask);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;