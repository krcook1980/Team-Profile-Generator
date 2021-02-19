const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const employee = require('./lib/employee');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');


function nextEmp() {

    //array of questions for user
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'empType',
                message: 'What kind of employee are you entering?',
                choices: ["Manager", "Engineer", "Intern"],
            },
        ]).then((response) => {
            if (response === "None") {
                console.log("Thank you!")
            }
            if (response === "Manager") {
                Employee.prototype.getName();
                Employee.prototype.getId();
                Employee.prototype.getEmail();
                Manager.prototype.getOffNum();
                Manager.prototype.getRole();
                nextEmp();
            }
            else if (response === "Engineer") {
                Employee.prototype.getName();
                Employee.prototype.getId();
                Employee.prototype.getEmail();
                Engineer.prototype.getGithub();
                Engineer.prototype.getRole();
                nextEmp();
            }
            else {
                Employee.prototype.getName();
                Employee.prototype.getId();
                Employee.prototype.getEmail();
                Intern.prototype.getSchool();
                Intern.prototype.getRole();
                nextEmp();
            }
        })
};
nextEmp();



//call manager and include employee
//prompt if engineer or intern
//each of those needs to call employee
