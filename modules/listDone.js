const tasks = require('../data/tasks');

function listDone() {
  const doneTasks = tasks.filter(t => t.done);
  console.log("\n Completed :");
  if (doneTasks.length === 0) {
    console.log("None.");
    return;
  }
  doneTasks.forEach(t => {
    console.log(`- ${t.name}`);
  });
}

module.exports = listDone;