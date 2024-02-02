const express = require('express');
const sequelize = require('./config/connection');
const inquirer = require('inquirer');
const prompt = require('./prompt');
// const Employee = require('./models/Employee');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync()
.then(() => {
    app.listen(PORT, () => {})
})
.then(() => {
    prompt();
})

// const init = () => {
//      async () => {
        
//         let state;
//         switch (state) {
//             case `View All Employees`:
//                 // Employee.findAll().then((employeeData) => {
//                 //     res.json(employeeData)
//                 // });
//                 console.log('view employees')
//                 break;

//             case `Add Employee`:
//                 break;

//             case `View All Roles`:
//                 break;

//             case `Add Role`:
//                 break;

//             case `View All Departments`:
//                 break;

//             case `Add Department`:
//                 break;

//             case `Update an Employee Role`:
//                 break;

//             case 'prompt':
//                 let promptResponse = await inquirer.prompt([
//                     {
//                       type: 'list',
//                       message: 'What would you like to do',
//                       name: 'task',
//                       choices: [
//                         `View All Employees`,
//                         `Add Employee`,
//                         `Update Employee Role`,
//                         `View All Roles`,
//                         `Add Role`,
//                         `View All Departments`,
//                         `Add Department`,
//                         `Update an Employee Role`
//                       ]
//                     },
//                   ])
//                 state = promptResponse.task;
//                 console.log(state);

//             default:
//                 state = 'prompt';
//                 console.log(`Returning to prompt: ${state}`);
//             }
//         })
//     })
// };

// init();