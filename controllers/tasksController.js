const tasks = require('../data/tasks');

// Get all tasks
exports.getTasks = (req, res) => {
    res.json(tasks);
};

// Get a task by ID
exports.getTaskById = (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.json(task);
};

// Create a new task
exports.createTask = (req, res) => {
    const { title, description, status, priority, dueDate } = req.body;

    // Validation
    if (!title || !description || !status || !priority || !dueDate) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const newTask = {
        id: tasks.length + 1,
        title,
        description,
        status,
        priority,
        dueDate
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
};

// Update a task
exports.updateTask = (req, res) => {
    const { id } = req.params;
    const { title, description, status, priority, dueDate } = req.body;

    const task = tasks.find(t => t.id === parseInt(id));
    if (!task) return res.status(404).json({ error: "Task not found" });

    // Update task fields
    if (title) task.title = title;
    if (description) task.description = description;
    if (status) task.status = status;
    if (priority) task.priority = priority;
    if (dueDate) task.dueDate = dueDate;

    res.json(task);
};

// Delete a task
exports.deleteTask = (req, res) => {
    const { id } = req.params;
    const index = tasks.findIndex(t => t.id === parseInt(id));
    if (index === -1) return res.status(404).json({ error: "Task not found" });

    tasks.splice(index, 1);
    res.status(204).send();
};
