const Employee = require('./employee');


class Engineer extends Employee {
    constructor(empName, empId, empEmail, empLink){
        super(empName, empId, empEmail);
        this.empLink = `[GitHub Link]("\https://github.com/${empLink}")`
        
    }
    getGithub (){
    
    };

    getRole (){
        this.empRole = "Engineer";
        return newRole;
    };
}

module.exports = Engineer;