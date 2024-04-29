//Post createTask
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Sample data of tasks (for demonstration)
let tasks = [
    { id: 1, assignTo: "John Doe", assignFrom: "Alice Smith", title: "Task 1", description: "Description for Task 1", comments: ["Comment 1", "Comment 2"], status: "In Progress" },
    { id: 2, assignTo: "Alice Smith", assignFrom: "John Doe", title: "Task 2", description: "Description for Task 2", comments: ["Comment 3"], status: "Completed" }
];

// Route to handle creating a new task
app.post('/createTask', (req, res) => {
    const { assignTo, assignFrom, title, description } = req.body;

    // Check if required fields are provided
    if (!assignTo || !assignFrom || !title || !description) {
        return res.status(400).json({ error: "All fields are required" });
    }

    // Generate a unique ID for the new task
    const id = tasks.length + 1;

    // Create a new task object
    const newTask = { id, assignTo, assignFrom, title, description, comments: [], status: "New" };

    // Add the new task to the list of tasks
    tasks.push(newTask);

    // Return the newly created task
    res.status(201).json(newTask);
});

//post editTaskDetils
app.post('/editTaskDetails/:taskId', (req, res) => {
    const { taskId } = req.params;
    const { assignTo, assignFrom, title, description, status } = req.body;

    // Find the index of the task with the provided taskId
    const taskIndex = tasks.findIndex(task => task.id == taskId);

    // Check if the task exists
    if (taskIndex === -1) {
        return res.status(404).json({ error: "Task not found" });
    }

    // Update task details if provided in the request body
    if (assignTo) {
        tasks[taskIndex].assignTo = assignTo;
    }
    if (assignFrom) {
        tasks[taskIndex].assignFrom = assignFrom;
    }
    if (title) {
        tasks[taskIndex].title = title;
    }
    if (description) {
        tasks[taskIndex].description = description;
    }
    if (status) {
        tasks[taskIndex].status = status;
    }
    res.status(200).json(tasks[taskIndex]);
});


//get filteredTask(type)
app.get('/filteredTasks', (req, res) => {
    const { status, assigned_to } = req.query;

    let filteredTasks = tasks;
    if (status) {
        filteredTasks = filteredTasks.filter(task => task.status.toLowerCase() === status.toLowerCase());
    }
    if (assigned_to) {
        filteredTasks = filteredTasks.filter(task => task.assignTo.toLowerCase() === assigned_to.toLowerCase());
    }

    res.status(200).json(filteredTasks);
});

