class Manager {
    constructor(empNum){
        this.empNum = empNum;
    }
}

Manager.prototype.getOffNum = function(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'empNum',
            message: 'What is the employee office number?'
        },
    ]).then((response) => {
        console.log(response);
    });
}


Manager.prototype.getRole = function(){
    const newRole = "Manager";
    return newRole;
}

module.exports = Manager;