const inquirer = require('inquirer');
const mysql = require('mysql2/promise');

require('dotenv').config();

async function connectToDB() {
    const db = await mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: process.env.DB_USER,
      // MySQL password
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    return db;
};
  

const prompt = async () => {
    const connection = await connectToDB();

    const { task } = await inquirer.prompt([
    {
        type: 'list',
        message: 'What would you like to do',
        name: 'task',
        choices: [
            `View All Employees`,
            `View Employees By Manager`,
            `View All Roles`,
            `View All Departments`,
            `Add Employee`,
            `Add Role`,
            `Add Department`,
            `Update Employee Role`,
            `Update Employee Manager`,
            `Delete Employee`,
            `Delete Role`,
            `Delete Department`,
            `Exit`
        ]
    }
    ]);
    
    try {
        
        switch (task) {
            case `View All Employees`:
                const [allEmployees] = await connection.query('SELECT * FROM employee');
                console.table(allEmployees);
                break;
                
            case `View All Roles`:
                const [allRoles] = await connection.query('SELECT * FROM role');
                console.table(allRoles);
                break;
                
            case `View All Departments`:
                const [allDepartments] = await connection.query('SELECT id, department_name FROM department');
                console.table(allDepartments);
                break;

            case `View Employees By Manager`:
                const employeesByManager = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'id',
                    message: `Enter the id of the manager: `,
                }
                ])
                const [employeesOfManager] = await connection.query(`SELECT * FROM employee WHERE manager_id = ("${employeesByManager.id}");`);
                console.table(employeesOfManager);
                break;
                
            case `Add Employee`:
                const employeeToAdd = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'first',
                    message: `Enter the employee's first name: `,
                },
                {
                    type: 'input',
                    name: 'last',
                    message: `Enter the employee's last name: `,
                },
                {
                    type: 'input',
                    name: 'role',
                    message: `Enter their role's ID: `,
                },
                {
                    type: 'input',
                    name: 'manager',
                    message: `Enter their manager's ID: `,
                }
                ])
                const [addEmployee] = await connection.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ("${employeeToAdd.first}", "${employeeToAdd.last}", ${employeeToAdd.role}, ${employeeToAdd.manager});`);
                console.table(addEmployee);
                break;
            
            case `Add Role`:
                const roleToAdd = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: `Enter the title of the new role: `,
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: `Enter the salary: `,
                },
                {
                    type: 'input',
                    name: 'department',
                    message: `Enter the department ID of the role: `,
                }
                ])
                const [addRole] = await connection.query(`INSERT INTO role (title, salary, department_id) VALUE ("${roleToAdd.title}", "${roleToAdd.salary}", ${roleToAdd.department});`);
                console.table(addRole);
                break;

            case `Add Department`:
                const { title } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: `Enter the name of the new department: `,
                }
                ])
                const [addDepartment] = await connection.query(`INSERT INTO department (department_name) VALUE ("${title}");`);
                console.table(addDepartment);
                break;

            case `Update Employee Role`:
                const updateEmployeeRole = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'employee',
                        message: `Enter the id of the employee who's role you would like to update: `,
                    },
                    {
                        type: 'input',
                        name: 'newRole',
                        message: `Enter the id of their new role: `,
                    }
                ])
                const [updateRole] = await connection.query(`UPDATE employee SET role_id = ${updateEmployeeRole.newRole} WHERE id = ${updateEmployeeRole.employee};`);
                console.table(updateRole);
                break;

            case `Update Employee Manager`:
                const updateEmployeeManager = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'employee',
                    message: `Enter the id of the employee who's role you would like to update: `,
                },
                {
                    type: 'input',
                    name: 'newManager',
                    message: `Enter the id of their new role: `,
                }
                ])
                const [updateManager] = await connection.query(`UPDATE employee SET role_id = ${updateEmployeeManager.newManager} WHERE id = ${updateEmployeeManager.employee};`);
                console.table(updateManager);
                break;
            
            case `Delete Employee`:
                const employeeToDelete = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'id',
                    message: `Enter the id of the employee: `,
                }
                ])
                const [deletedEmployee] = await connection.query(`DELETE FROM employee WHERE id = ("${employeeToDelete.id}");`);
                console.table(deletedEmployee);
                break;
    
            case `Delete Role`:
                const roleToDelete = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'id',
                    message: `Enter the id of the role: `,
                }
                ])
                const [deletedRole] = await connection.query(`DELETE FROM role WHERE id = ("${roleToDelete.id}");`);
                console.table(deletedRole);
                break;

            case `Delete Department`:
                const departmentToDelete = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'id',
                    message: `Enter the id of the department: `,
                }
                ])
                const [deletedDepartment] = await connection.query(`DELETE FROM department WHERE id = ("${departmentToDelete.id}");`);
                console.table(deletedDepartment);
                break;

            default:
                console.info('Bye Bye!');
                connection.end();
                return;
        }

        prompt();

    } catch(err) {
        console.error(err);
        connection.end();
        return;
    }
};

module.exports = prompt;