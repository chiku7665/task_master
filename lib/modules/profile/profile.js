//get UserDetails
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Sample data of registered users (for demonstration)
const registeredUsers = [
    { fullName: "John Doe", userName: "johndoe123", role: "admin", userId: "123456", password: "password123" },
    { fullName: "Alice Smith", userName: "alicesmith456", role: "member", userId: "789012", password: "password456" }
];

// Route to handle user details retrieval
app.get('/userDetails/:userId', (req, res) => {
    const { userId } = req.params;

    // Find the user with the provided userId
    const user = registeredUsers.find(user => user.userId === userId);

    // Check if the user exists
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    // Return the user details
    res.status(200).json(user);
});

//post editUserDetails

app.put('/editUser/:userId', (req, res) => {
    const { userId } = req.params;
    const { fullName, userName, role, password } = req.body;

    // Find the index of the user with the provided userId
    const userIndex = registeredUsers.findIndex(user => user.userId === userId);

    // Check if the user exists
    if (userIndex === -1) {
        return res.status(404).json({ error: "User not found" });
    }

    // Update user details if provided in the request body
    if (fullName) {
        registeredUsers[userIndex].fullName = fullName;
    }
    if (userName) {
        registeredUsers[userIndex].userName = userName;
    }
    if (role) {
        registeredUsers[userIndex].role = role;
    }
    if (password) {
        registeredUsers[userIndex].password = password;
    }

    // Return the updated user details
    res.status(200).json(registeredUsers[userIndex]);
});

//get mytask
app.get('/myTasks/:userId', (req, res) => {
    const { userId } = req.params;

    // Filter tasks assigned to the specific user
    const userTasks = tasks.filter(task => task.assignTo === userId);

    // Return tasks assigned to the user
    res.status(200).json(userTasks);
});