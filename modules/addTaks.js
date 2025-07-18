const tasks = require('../data/tasks');

function addTask(name, done = false) {
  tasks.push({ name, done });
  console.log(`Added: ${name}`);
}

module.exports = addTask;