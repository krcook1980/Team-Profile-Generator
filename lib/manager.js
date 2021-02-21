const Employee = require('./employee');

class Manager extends Employee{
    constructor(empNum){
        super();
        this.empNum = empNum;

    }

    getRole (){
        this.newRole = "Manager";
        return newRole;
    }

    
}


module.exports = Manager;