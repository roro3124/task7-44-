const addTask = require('./modules/addTask');
const listTasks = require('./modules/listTasks');
const removeTask = require('./modules/removeTask');
const listDone = require('./modules/listDone');

addTask("Study", true);
addTask("Clean Room", false);
addTask("Workout", true);

listTasks();

removeTask("Clean Room");

listTasks();

listDone();