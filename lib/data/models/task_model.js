
class TaskModel {
    constructor(asign_to, asign_from, title, description, comments = [], status) {
        this.asign_to = asign_to;
        this.asign_from = asign_from;
        this.title = title;
        this.description = description;
        this.comments = comments;
        this.status = status;
    }

    addComment(comment) {
        this.comments.push(comment);
    }

    // You can add more methods here as needed
}

// Example usage:
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

const task = new TaskModel('John', 'Alice', 'Task 1', 'Description of Task 1', [], 'Pending');
task.addComment('This is a comment.');
console.log(task);
