const Employee = require('./employee');

class Intern extends Employee{
    constructor(empName, empId, empEmail, empSchool){
        super(empName, empId, empEmail);
        this.empSchool = empSchool;
        this.empRole = "Intern";
    };
    getSchool (){
        return this.empSchool;
    };
    getRole (){
        
        return this.newRole;
    };
  
}


module.exports = Intern;