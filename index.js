// todo items
const todos = [
 { title: "Do homework", done: false },
 { title: "Buy groceries", done: true },
 { title: "Read a book", done: false },
 { title: "Clean room", done: true },
 { title: "Call mom", done: false }
];

// Separate todos into completed and ongoing
const completedTasks = todos.filter(todo => todo.done === true);
const ongoingTasks = todos.filter(todo => todo.done === false);

// Display the results
console.log("=== Done ===");
completedTasks.forEach(todo => {
 console.log("- " + todo.title);
});

console.log("\n=== Ongoing ===");
ongoingTasks.forEach(todo => {
 console.log("- " + todo.title);
});
