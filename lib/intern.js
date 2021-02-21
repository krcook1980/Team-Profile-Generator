const Employee = require('./employee');

class Intern extends Employee{
    constructor(empName, empId, empEmail, empSchool){
        super(empName, empId, empEmail);
        this.empSchool = empSchool;
        
    };
    getSchool (){
 
    };
    getRole (){
        this.empRole = "Intern";
        return newRole;
    };
  
}


module.exports = Intern;