class User {
    constructor(fullName, userName, role, userId, password) {
        this.fullName = fullName;
        this.userName = userName;
        this.role = role;
        this.userId = userId;
        this.password = password;
    }
}

// Example usage:
const users = [
    { fullName: "John Doe", userName: "johndoe123", role: "admin", userId: "123456", password: "password123" },
    { fullName: "Alice Smith", userName: "alicesmith456", role: "member", userId: "789012", password: "password456" },
    { fullName: "Bob", userName: "bob789", role: "member", userId: "456789", password: "password789" }
];

console.log(User);
