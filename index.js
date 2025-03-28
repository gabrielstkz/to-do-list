// Modules
import chalk from 'chalk';
import fs from 'fs';
import inquirer from 'inquirer';

// Paths
const tasksPath = './tasks.json';

// Functions
import { successMsg, errorMsg } from './messages.js';

/**
 * Reads tasks from the JSON file.
 * @returns {Array} List of tasks.
 */
function readTasks() {
  if (!fs.existsSync(tasksPath)) return [];
  const data = fs.readFileSync(tasksPath, 'utf-8');
  return data ? JSON.parse(data) : [];
}

/**
 * Writes tasks to the JSON file.
 * @param {Array} tasks - List of tasks to save.
 */
function writeTasks(tasks) {
  fs.writeFileSync(tasksPath, JSON.stringify(tasks, null, 2));
}

/**
 * Main function to display the menu and handle user choices.
 */
function main() {
  const options = {
    type: 'list',
    name: 'option',
    message: 'What do you want to do?',
    choices: [
      { name: 'Add a task', value: 'add' },
      { name: 'Remove a task', value: 'remove' },
      { name: 'List all tasks', value: 'list' },
      { name: 'Edit a task', value: 'edit' },
      { name: 'Exit', value: 'exit' },
      { name: 'Clear screen', value: 'clear' },
    ],
  };

  inquirer.prompt(options).then((answers) => {
    switch (answers.option) {
      case 'add':
        addTask();
        break;
      case 'remove':
        removeTask();
        break;
      case 'list':
        listTasks();
        break;
      case 'edit':
        editTask();
        break;
      case 'exit':
        exit();
        break;
      case 'clear':
        console.clear();
        main();
        break;
    }
  });
}

/**
 * Adds a new task to the task list.
 */
function addTask() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'task',
      message: 'What task do you want to add?',
    }
  ]).then((answers) => {
    const taskDescription = answers.task.trim();
    if (!taskDescription) {
      errorMsg('Task cannot be empty!');
      return main();
    }

    const tasks = readTasks();
    const newTask = {
      id: Date.now(),
      description: taskDescription,
      createdAt: new Date().toLocaleString(),
    };
    tasks.push(newTask);
    writeTasks(tasks);

    successMsg(`Task "${taskDescription}" added successfully!`);
    main();
  });
}

/**
 * Removes a selected task from the task list.
 */
function removeTask() {
  const tasks = readTasks();
  if (tasks.length === 0) {
    errorMsg('No tasks available to remove.');
    return main();
  }

  inquirer.prompt([
    {
      type: 'list',
      name: 'taskId',
      message: 'Select a task to remove:',
      choices: tasks.map(task => ({ name: task.description, value: task.id })),
    }
  ]).then((answer) => {
    const updatedTasks = tasks.filter(task => task.id !== answer.taskId);
    writeTasks(updatedTasks);
    successMsg('Task removed successfully!');
    main();
  });
}

/**
 * Lists all tasks stored in the JSON file.
 */
function listTasks() {
  const tasks = readTasks();
  if (tasks.length === 0) {
    errorMsg('No tasks available.');
    return main();
  }

  console.log(chalk.bgBlue.bold('Tasks:'));
  tasks.forEach(task => {
    console.log(`- ${task.description} (Added: ${task.createdAt})`);
  });
  main();
}

/**
 * Edits an existing task in the task list.
 */
function editTask() {
  const tasks = readTasks();
  if (tasks.length === 0) {
    errorMsg('No tasks available to edit.');
    return main();
  }

  inquirer.prompt([
    {
      type: 'list',
      name: 'taskId',
      message: 'Select a task to edit:',
      choices: tasks.map(task => ({ name: task.description, value: task.id })),
    }
  ]).then((answer) => {
    const taskIndex = tasks.findIndex(task => task.id === answer.taskId);
    if (taskIndex === -1) {
      errorMsg('Task not found.');
      return main();
    }

    inquirer.prompt([
      {
        type: 'input',
        name: 'newDescription',
        message: 'Enter the new description:',
        default: tasks[taskIndex].description,
      }
    ]).then(newAnswer => {
      tasks[taskIndex].description = newAnswer.newDescription;
      writeTasks(tasks);
      successMsg('Task edited successfully!');
      main();
    });
  });
}

/**
 * Exits the application.
 */
function exit() {
  console.log('Goodbye!');
  console.clear();
  process.exit();
}

// Start the application
main();
