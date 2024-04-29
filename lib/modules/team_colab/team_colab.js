//get teamMates
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Sample data of users (for demonstration)
const users = [
    { fullName: "John Doe", userName: "johndoe123", role: "admin", userId: "123456", password: "password123" },
    { fullName: "Alice Smith", userName: "alicesmith456", role: "member", userId: "789012", password: "password456" },
    { fullName: "Bob", userName: "bob789", role: "member", userId: "456789", password: "password789" }
];

// Sample data of teams (for demonstration)
const teams = [
    { id: 1, name: "Team A", members: ["123456", "789012"] },
    { id: 2, name: "Team B", members: ["123456", "456789"] }
];

app.get('/teamMates/:userId', (req, res) => {
    const { userId } = req.params;

    const user = users.find(user => user.userId === userId);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    const userTeams = teams.filter(team => team.members.includes(userId));
    let teamMates = [];
    userTeams.forEach(team => {
        teamMates = teamMates.concat(team.members.filter(member => member !== userId));
    });
    teamMates = [...new Set(teamMates)];
    const teamMatesDetails = users.filter(user => teamMates.includes(user.userId));
    res.status(200).json(teamMatesDetails);
});

//get teamTask
app.get('/tasksOfTeamMates/:userId', (req, res) => {
    const { userId } = req.params;
    const user = users.find(user => user.userId === userId);

    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    const userTeams = tasks.filter(task => task.assignTo === userId);
    const teamMateIds = [...new Set(userTeams.map(task => task.assignFrom))];
    const teamMatesTasks = tasks.filter(task => teamMateIds.includes(task.assignTo));
    res.status(200).json(teamMatesTasks);
});