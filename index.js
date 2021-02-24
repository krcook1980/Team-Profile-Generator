const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
var validator = require("email-validator"); //used to validate the email entered

function nextMgr() {


    //array of questions for Manager
    inquirer
        .prompt([

            {
                type: 'input',
                name: 'empName',
                message: 'What is the Team Manager name?',

            },
            {
                type: 'input',
                name: 'empId',
                message: 'Please enter the manager Id with the format m###:',

            },
            {
                type: 'input',
                name: 'empEmail',
                message: 'What is the manager email address?',
                validate: function (input) {
                    let test = validator.validate(input)
                    if (test === false) {
                        console.log("Please enter a valid email.")
                    }
                    return test
                }
            },
            {
                type: 'input',
                name: 'empNum',
                message: 'What is the manager office number?',

            },
        ]).then((response) => {

            //run response through class Manager, write to store.js

            let newEmp = new Manager(response.empName, response.empId, response.empEmail, response.empNum);

            const genCard = generateHTML(newEmp);
            fs.writeFileSync("./src/store.js", `\n${genCard}`);

            //start inquirer for new employee
            nextEmp();
        })
};



//begin application, start at manager
nextMgr();

function nextEmp() {
    inquirer
        .prompt([ //What kind of employee to enter
            {
                type: 'list',
                name: 'empType',
                message: 'What kind of employee are you entering?',
                choices: ["Engineer", "Intern", "Finished"],
            },
        ]).then((response) => {

            if (response.empType === "Finished") {
                console.log("Thank you! Your information has been updated.");
            }
            //Engineer questions
            else if (response.empType === "Engineer") {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'empName',
                            message: 'What is the employee name?',

                        },
                        {
                            type: 'input',
                            name: 'empId',
                            message: 'Please assign a new employee number with the format e###',

                        },
                        {
                            type: 'input',
                            name: 'empEmail',
                            message: 'What is the employee email address?',
                            validate: function (input) {
                                let test = validator.validate(input)
                                if (test === false) {
                                    console.log("Please enter a valid email.")
                                }
                                return test
                            }

                        },
                        {
                            type: 'input',
                            name: 'empLink',
                            message: 'What is the GitHub user name for this employee?',

                        },
                    ]).then((response) => {
                        //run response through class Engineer
                        let newEmp = new Engineer(response.empName, response.empId, response.empEmail, response.empLink);

                        //push new info to store file using the id as a unique variable name
                        const genCard = generateHTML(newEmp);
                        fs.appendFileSync("./src/store.js", `\n${genCard}`);

                        //restart question loop for next employee
                        nextEmp();

                    });


            }
            else { //Intern questions
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'empName',
                            message: 'What is the employee name?',

                        },
                        {
                            type: 'input',
                            name: 'empId',
                            message: 'Please assign a new employee number with the format i###',

                        },
                        {
                            type: 'input',
                            name: 'empEmail',
                            message: 'What is the employee email address?',
                            validate: function (input) {
                                let test = validator.validate(input)
                                if (test === false) {
                                    console.log("Please enter a valid email.")
                                }
                                return test

                            }
                        },
                        {
                            type: 'input',
                            name: 'empSchool',
                            message: 'What school did this intern attend?',

                        },
                    ]).then((response) => {
                        //run response through class Intern

                        let newEmp = new Intern(response.empName, response.empId, response.empEmail, response.empSchool);
                        //append to store.js
                        const genCard = generateHTML(newEmp);
                        fs.appendFileSync("./src/store.js", `\n${genCard}`);
                        //restart employee loop
                        nextEmp();

                    });
            };
        });
};





