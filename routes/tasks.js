const express = require('express');
const router = express.Router();
const {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
} = require('../controllers/tasksController');

// Define routes
router.get('/', getTasks);
router.get('/:id', getTaskById);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
