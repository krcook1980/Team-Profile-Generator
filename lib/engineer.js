const Employee = require('./employee');


class Engineer extends Employee {
    constructor(empLink){
        super();
        this.empLink = `[GitHub Link]("\https://github.com/${empLink}")`
        
    }
  
}

Engineer.prototype.getGithub = function(){
    
}   

Engineer.prototype.getRole = function(){
    const newRole = "Engineer";
    return newRole;
}


module.exports = Engineer;