const tasks = require('../data/tasks');

function listTasks() {
  console.log("\nAll Tasks:");
  if (tasks.length === 0) {
    console.log("No tasks.");
    return;
  }
  tasks.forEach((t, i) => {
    console.log(`${i + 1}. ${t.name} - ${t.done ? " Done" : "Not Done"}`);
  });
}

module.exports = listTasks;