const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Sample data of tasks (for demonstration)
const tasks = [
    { id: 1, assignTo: "John Doe", assignFrom: "Alice Smith", title: "Task 1", description: "Description for Task 1", comments: ["Comment 1", "Comment 2"], status: "In Progress" },
    { id: 2, assignTo: "Alice Smith", assignFrom: "John Doe", title: "Task 2", description: "Description for Task 2", comments: ["Comment 3"], status: "Completed" }
];

// Route to handle retrieving tasks assigned to a specific user
app.get('/myTasks/:userId', (req, res) => {
    const { userId } = req.params;

    // Filter tasks assigned to the specific user
    const userTasks = tasks.filter(task => task.assignTo === userId);

    // Return tasks assigned to the user
    res.status(200).json(userTasks);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
