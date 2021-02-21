const Employee = require('./employee');

class Manager extends Employee{
    constructor(empName, empId, empEmail, empNum){
        super(empName, empId, empEmail);
        this.empNum = empNum;

    }

    getRole (){
        this.empRole = "Manager";
        return newRole;
    }

    
}


module.exports = Manager;