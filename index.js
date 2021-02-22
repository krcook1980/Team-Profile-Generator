const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer')
const newEmp = [];

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
            console.log(response)
            //run response through class Manager ... need to add to newEntry
            let newEmp = [];

            const newMgr = new Manager(response.empName, response.empId, response.empEmail, response.empNum);
            
            newEmp.push(newMgr);
        

            //push new info to store file using the id as a unique variable name

            fs.writeFileSync("./src/store.js", `\nconst ${response.empId} = ["${newEmp[0].empName}", "${newEmp[0].empId}", "${newEmp[0].empEmail}","${newEmp[0].empNum}"];`)

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
            newEmp.push(response.empType);
            if (response.empType === "Finished") {
                console.log("Thank you! Your information has been updated.");
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
                        //run response through class Manager ... need to add to newEntry
                        let newEmp = [];
                        
                        const newEng = new Engineer(response.empName, response.empId, response.empEmail, response.empLink);

                        newEmp.push(newEng);
                        newEmp.push(newEng.getRole());


                        //push new info to store file using the id as a unique variable name

                        fs.appendFileSync("./src/store.js", `\nconst ${response.empId} = ["${newEmp[0].empName}", "${newEmp[0].empId}", "${newEmp[0].empEmail}","${newEmp[0].empLink}"];`)

                        nextEmp();

                    });


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
                            message: 'Please assign a new employee number with the format i###'
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
                        //run response through class Manager ... need to add to newEntry
                        let newEmp = [];
                        
                        const newInt = new Intern(response.empName, response.empId, response.empEmail, response.empSchool);

                        newEmp.push(newInt)


                        //push new info to store file using the id as a unique variable name

                        fs.appendFileSync("./src/store.js", `\nconst ${response.empId} = ["${newEmp[0].empName}", "${newEmp[0].empId}", "${newEmp[0].empEmail}","${newEmp[0].empSchool}"];`)

                        nextEmp();

                    });


            };

        });
};





