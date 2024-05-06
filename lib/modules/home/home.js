const express = require('express');
const router = express.Router();

// Sample data of tasks
const tasks = [
    {
        id: 1,
        assignTo: "John Doe",
        assignFrom: "Alice Smith",
        title: "Task 1",
        description: "Description for Task 1",
        comments: ["Comment 1", "Comment 2"],
        status: "In Progress"
    },
    {
        id: 2,
        assignTo: "Alice Smith",
        assignFrom: "John Doe",
        title: "Task 2",
        description: "Description for Task 2",
        comments: ["Comment 3"],
        status: "Completed"
    }
];

// Route to get all tasks
router.get('/tasks', (req, res) => {
    res.json(tasks);
});

module.exports = router;
