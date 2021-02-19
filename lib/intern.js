const inquirer = require('inquirer');
class Intern {
    constructor(empSchool){
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