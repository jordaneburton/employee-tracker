const inquirer = require('inquirer');
const close = require('./server');

const prompt = () => {
inquirer
  .prompt([
    {
        type: 'list',
        message: 'What would you like to do',
        name: 'task',
        choices: [
            `View All Employees`,
            `Add Employee`,
            `View All Roles`,
            `Add Role`,
            `View All Departments`,
            `Add Department`,
            `Update an Employee Role`,
            `Exit`
        ]
    },
  ])
  .then((response) => {
    switch (response.task) {
        case `View All Employees`:
            console.log('view employees');
            break;

        case `Add Employee`:
            console.log('add employee');
            break;

        case `View All Roles`:
            console.log('view roles');
            break;

        case `Add Role`:
            console.log('add role');
            break;

        case `View All Departments`:
            console.log('view departments');
            break;

        case `Add Department`:
            console.log('add department');
            break;

        case `Update an Employee Role`:
            console.log('update employee role');
            break;

        default:
            console.log('default');
    }
    return response;
  })
  .then((response) => {
    if (response.task === `Exit`) {
        return;
    }
    prompt();
  });
}

module.exports = prompt;