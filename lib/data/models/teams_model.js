class TeamModel {
    constructor(title, description, userList) {
        this.title = title;
        this.description = description;
        this.userList = userList;
    }

    // Method to add a user to the team
    addUser(user) {
        this.userList.push(user);
    }

    // Method to remove a user from the team
    removeUser(userId) {
        this.userList = this.userList.filter(user => user.userId !== userId);
    }
}

// Example usage:
const team = new TeamModel("Team Title", "Team Description", []);

// Creating some user instances
const user1 = new User("John Doe", "johndoe123", "admin", "123456", "password123");
const user2 = new User("Alice Smith", "alicesmith456", "member", "789012", "password456");

// Adding users to the team
team.addUser(user1);
team.addUser(user2);

console.log(team);

// Removing a user from the team
team.removeUser("789012");

console.log(team);
