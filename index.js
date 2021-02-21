const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const Employee = require('./lib/employee')
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const { report } = require('process');
const newEmp = [];


//prompt for new employee
function nextEmp() {
    
    
    //array of questions for user
    inquirer
        .prompt([ //What kind of employee to enter
            {
                type: 'list',
                name: 'empType',
                message: 'What kind of employee are you entering?',
                choices: ["Manager", "Engineer", "Intern", "Finished"],
            },
        ]).then((response) => {
            newEmp.push(response.empType);
            if (response.empType === "Finished") {
                console.log("Thank you!");
            }
            else if (response.empType === "Manager") {//employee questions + manager question
                inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'empName',
                        message: 'What is the employee name?',
                        default: "Bob Barker"
                    },
                    {
                        type: 'input',
                        name: 'empId',
                        message: 'Please assign a new employee number with the format e###:',
                        default: "e103"
                    },
                    {
                        type: 'input',
                        name: 'empEmail',
                        message: 'What is the employee email address?',
                        default: "bbarker@gmail.com"
                        
                    },
                    {
                        type: 'input',
                        name: 'empNum',
                        message: 'What is the employee office number?',
                        default: "10"
                    },
                ]).then((response) => {
                        
                        //run response through class Manager ... need to add to newEntry
                        const newMgr = new Manager(response.empName, response.empId, response.empEmail,response.empNum);
                        


                        console.log(newMgr)
                        //push new info to store file using the id as a unique variable name
                        fs.writeFileSync("./src/store.js", `const ${response.empId} = ${newMgr}`)

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






