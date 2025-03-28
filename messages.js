// Modules
import chalk from 'chalk';

// Functions
function successMsg(msg) {
  const message = chalk.bgGreen.bold(` ${msg} `);
  return console.log(message);

}
function errorMsg(msg) {
  const message = chalk.bgRed.bold(` ${msg} `);
  return console.log(message);
}

export { successMsg, errorMsg };
