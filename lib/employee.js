class Employee {    
    constructor(empName, empId, empEmail) {
        
        this.empName = empName;
        this.empId = empId;
        this.empEmail = empEmail;
    }
}

Employee.prototype.getName = function(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'empName',
            message: 'What is the employee name?'
        },
    ]).then((response) => {
        console.log(response);
    });
}


Employee.prototype.getId = function(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'empId',
            message: 'Please assign a new employee number with the format e###'
        },
    ]);
}


Employee.prototype.getEmail = function(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'empEmail',
            message: 'What is the employee email address?',
            //figure out validate if not an email address
        },
    ]);
}


Employee.prototype.getRole = function(){
    const empRole = "Employee";
    return empRole;
}

module.exports = Employee;