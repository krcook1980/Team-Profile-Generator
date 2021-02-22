const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer')


//prompt for new employee
function nextMgr() {


    //array of questions for user
    inquirer
        .prompt([

            {
                type: 'input',
                name: 'empName',
                message: 'What is the Team Manager name?',
                default: 'Bob Barker'

            },
            {
                type: 'input',
                name: 'empId',
                message: 'Please enter the manager Id with the format m###:',
                default: 'm103'

            },
            {
                type: 'input',
                name: 'empEmail',
                message: 'What is the manager email address?',
                default: 'bbarker@thiscompany.com'

            },
            {
                type: 'input',
                name: 'empNum',
                message: 'What is the manager office number?',
                default: '10'

            },
        ]).then((response) => {

            //run response through class Manager ... need to add to newEntry

            let newEmp = new Manager(response.empName, response.empId, response.empEmail, response.empNum);

            const genCard = generateHTML(newEmp);
            fs.appendFileSync("./src/store.js", `\n${genCard}`);

            //start inquirer for new employee
            nextEmp();
        })
};




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

            else if (response.empType === "Engineer") {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'empName',
                            message: 'What is the employee name?',
                            default: 'Steve Jobs'
                        },
                        {
                            type: 'input',
                            name: 'empId',
                            message: 'Please assign a new employee number with the format e###',
                            default: 'e107'
                        },
                        {
                            type: 'input',
                            name: 'empEmail',
                            message: 'What is the employee email address?',
                            default: 'sJobs@thiscompany.com'
                            //figure out validate if not an email address
                        },
                        {
                            type: 'input',
                            name: 'empLink',
                            message: 'What is the GitHub user name for this employee?',
                            default: 'sJobs'
                        },
                    ]).then((response) => {
                        //run response through class Manager ... need to add to newEntry
                        let newEmp = new Engineer(response.empName, response.empId, response.empEmail, response.empLink);

                        const genCard = generateHTML(newEmp);
                        fs.appendFileSync("./src/store.js", `\n${genCard}`);

                        //push new info to store file using the id as a unique variable name

                        nextEmp();

                    });


            }
            else {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'empName',
                            message: 'What is the employee name?',
                            default: 'Big Bird'
                        },
                        {
                            type: 'input',
                            name: 'empId',
                            message: 'Please assign a new employee number with the format i###',
                            default: 'i123'
                        },
                        {
                            type: 'input',
                            name: 'empEmail',
                            message: 'What is the employee email address?',
                            default: 'bigBird@thisschool.com'
                            //figure out validate if not an email address
                        },
                        {
                            type: 'input',
                            name: 'empSchool',
                            message: 'What school did this intern attend?',
                            default: 'This School'
                        },
                    ]).then((response) => {
                        //run response through class Manager ... need to add to newEntry

                        let newEmp = new Intern(response.empName, response.empId, response.empEmail, response.empSchool);

                        const genCard = generateHTML(newEmp);
                        fs.appendFileSync("./src/store.js", `\n${genCard}`);
                        nextEmp();

                    });


            };

        });
};





