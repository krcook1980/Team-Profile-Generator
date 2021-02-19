const inquirer = require('inquirer');
class Manager {
    constructor(empNum){
        this.empNum = empNum;
    }
}

Manager.prototype.getOffNum = function(){
      
    
}


Manager.prototype.getRole = function(){
    const newRole = "Manager";
    return newRole;
}

module.exports = Manager;