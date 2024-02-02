const express = require('express');
const sequelize = require('./config/connection');
const inquirer = require('inquirer');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function init() {
    sequelize.sync()

    .then(() => {
        app.listen(PORT, async () => {
        
        let state;
        switch (state) {
            case `View All Employees`:
                break;

            case `Add Employee`:
                break;

            case `Update Employee Role`:
                break;

            case `View All Roles`:
                break;

            case `Add Role`:
                break;

            case `View All Departments`:
                break;

            case `Add Department`:
                break;

            case `Update an Employee Role`:
                break;

            case 'prompt':
                let promptResponse = await inquirer.prompt([
                    {
                      type: 'list',
                      message: 'What would you like to do',
                      name: 'task',
                      choices: [
                        `View All Employees`,
                        `Add Employee`,
                        `Update Employee Role`,
                        `View All Roles`,
                        `Add Role`,
                        `View All Departments`,
                        `Add Department`,
                        `Update an Employee Role`
                      ]
                    },
                  ])
                state = promptResponse.task;
                console.log(state);
                break;

            default:
                state = 'prompt';
                console.log(`Returning to prompt: ${state}`);
                break;
            }
        })
    })
};

init();