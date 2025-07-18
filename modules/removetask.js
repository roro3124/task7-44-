const tasks = require('../data/tasks');

function removeTask(name) {
  const index = tasks.findIndex(t => t.name === name);
  if (index !== -1) {
    const removed = tasks.splice(index, 1)[0];
    console.log(`Removed: ${removed.name}`);
  } else {
    console.log("Task not found.");
  }
}

module.exports = removeTask;