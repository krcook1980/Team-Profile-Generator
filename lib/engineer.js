const Employee = require('./employee');


class Engineer extends Employee {
    constructor(empName, empId, empEmail, empLink){
        super(empName, empId, empEmail);
        this.empLink = `https://github.com/${empLink}`;
        this.empRole = "Engineer";
    }
    getGithub (){
     return this.empLink
    };

    getRole (){
        return this.empRole;
    };
}

module.exports = Engineer;