//post userRegistration
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.use(bodyParser.json());

// Sample data of registered users (for demonstration)
let Users = [];

// Route to handle user registration
router.post('/userRegistration', (req, res) => {
    const { fullName, userName, role, userId, password } = req.body;

    // Check if required fields are provided
    if (!fullName || !userName || !role || !userId || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    // Check if user with the same userId already exists
    if (registeredUsers.find(user => user.userId === userId)) {
        return res.status(400).json({ error: "User with the provided userId already exists" });
    }

    // Create a new user object
    const newUser = { fullName, userName, role, userId, password };

    // Add the new user to the list of registered users
    Users.push(newUser);

    // Return the newly registered user
    res.status(201).json(newUser);
});


// Sample data of registered users (for demonstration)
const registeredUsers = [
    { fullName: "John Doe", userName: "johndoe123", role: "admin", userId: "123456", password: "password123" },
    { fullName: "Alice Smith", userName: "alicesmith456", role: "member", userId: "789012", password: "password456" }
];


// Route to handle user login
router.post('/userLogin', (req, res) => {
    const { userName, password } = req.body;

    // Find the user with the provided userName
    const user = registeredUsers.find(user => user.userName === userName);

    // Check if the user exists and the password matches
    if (!user || user.password !== password) {
        return res.status(401).json({ error: "Invalid username or password" });
    }

    // Return the logged-in user
    res.status(200).json(user);
});


module.exports = router;