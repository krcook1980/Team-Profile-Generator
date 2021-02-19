const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const Intern = require('./lib/intern');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const newEmp = []

const empQuestions = [{
    type: 'input',
    name: 'empName',
    message: 'What is the employee name?'
},
{
    type: 'input',
    name: 'empId',
    message: 'Please assign a new employee number with the format e###'
},
{
    type: 'input',
    name: 'empEmail',
    message: 'What is the employee email address?',
    //figure out validate if not an email address
},

]


function nextEmp() {
    Employee.prototype.getRole();
    
    //array of questions for user
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'empType',
                message: 'What kind of employee are you entering?',
                choices: ["Manager", "Engineer", "Intern", "Finished"],
            },
        ]).then((response) => {
            //Add employee to the newEmp array
            newEmp.push(response.empType);
            
            if (response.empType === "Finished") {
                console.log("Thank you!")
            }
            else if (response.empType === "Manager") {
                inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'empName',
                        message: 'What is the employee name?'
                    },
                    {
                        type: 'input',
                        name: 'empId',
                        message: 'Please assign a new employee number with the format e###:'
                    },
                    {
                        type: 'input',
                        name: 'empEmail',
                        message: 'What is the employee email address?',
                        //figure out validate if not an email address
                    },
                    {
                        type: 'input',
                        name: 'empNum',
                        message: 'What is the employee office number?'
                    },
                ]).then((response2) => {
                                      
                    const newRole = Manager.prototype.getRole();
                    newEmp.push(response2);
                    newEmp.push(newRole);
                    console.log(newEmp)
                    return newEmp;
                    //spits out manager then object of rest... not quite what i need
                });

                
                
            }
            else if (response.empType === "Engineer") {
                inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'empName',
                        message: 'What is the employee name?'
                    },
                    {
                        type: 'input',
                        name: 'empId',
                        message: 'Please assign a new employee number with the format e###'
                    },
                    {
                        type: 'input',
                        name: 'empEmail',
                        message: 'What is the employee email address?',
                        //figure out validate if not an email address
                    },
                    {
                        type: 'input',
                        name: 'empLink',
                        message: 'What is the GitHub user name for this employee?'
                    },
                ]).then((response) => {
                    console.log(response);
                    Engineer.prototype.getRole();
                });
                
                nextEmp();
            }
            else {
                inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'empName',
                        message: 'What is the employee name?'
                    },
                    {
                        type: 'input',
                        name: 'empId',
                        message: 'Please assign a new employee number with the format e###'
                    },
                    {
                        type: 'input',
                        name: 'empEmail',
                        message: 'What is the employee email address?',
                        //figure out validate if not an email address
                    },
                    {
                        type: 'input',
                        name: 'empSchool',
                        message: 'What school did this intern attend?'
                    },
                ]).then((response) => {
                    console.log(response);
                    Intern.prototype.getRole();
                });
                
               
            }
        })
};
nextEmp();






