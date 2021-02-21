const Employee = require('./employee');

class Intern extends Employee{
    constructor(empSchool){
        super();
        this.empSchool = empSchool;
        
    }
  
}

Intern.prototype.getSchool = function (){
 
}

Intern.prototype.getRole = function(){
    const newRole = "Intern";
    return newRole;
}


module.exports = Intern;