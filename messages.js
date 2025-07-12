// Modules
import chalk from 'chalk';

// Functions
function successMsg(msg) {
  const message = chalk.bgGreen.bold(`\n ${msg} \n`);
  return console.log(message);

}
function errorMsg(msg) {
  const message = chalk.bgRed.bold(`\n ${msg} \n`);
  return console.log(message);
}

export { successMsg, errorMsg };
