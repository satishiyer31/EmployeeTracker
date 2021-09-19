const inquirer = require('inquirer');

const fs = require('fs');
const path = require('path');

const cTable = require('console.table');

const employee_tracker_choices = ['View all departments',
                                'View all roles', 
                                'View all employees', 
                                'Add a department', 
                                'Add a role',
                                'Add an employee', 
                                'Update an employee role']

async function showOptions() {

    inquirer.prompt(
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'select_type',
            choices: employee_tracker_choices

        }

    )
    
    .then( async(response) => {
        switch(response.select_type) {

            //view all departments
            case employee_tracker_choices[0]: await viewAllDepartments(); break;

            //View all roles
            case employee_tracker_choices[1]:   await viewAllRoles(); break;

            //View all employees
            case employee_tracker_choices[2]:  await viewAllEmployees(); break; 
            
            //Add a department', 
            case employee_tracker_choices[3]: await addDepartment(); break;
            
            //'Add a role',
            case employee_tracker_choices[4]: await addRole(); break;
            
            //'Add an employee', 
            case employee_tracker_choices[5]: await addEmployee(); break;

            //'Update an employee role'
            case employee_tracker_choices[6]: await updateEmployeeRole(); 
        }
    });

};

async function viewAllDepartments() {
    console.log('View all departments');
};

async function viewAllRoles() {
    console.log('View all Roles');
};

async function viewAllEmployees() {
    console.log('View all Employees');
};

async function addDepartment() {
    console.log('Add a department')
};

async function addRole() {
    console.log('Add a Role');
};

async function addEmployee() {
    console.log('Add an Employee');
};

async function updateEmployeeRole() {
    console.log('Update Employee Role');
};

showOptions();