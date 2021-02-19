const response = require('../index');

class Engineer {
    constructor(empLink){
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