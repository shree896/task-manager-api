const express = require('express');
const tasksRoutes = require('./routes/tasks');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/tasks', tasksRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start Server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
