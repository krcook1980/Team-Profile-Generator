const index = require("../index")



function generateHTML(newEmp){


console.log(newEmp)
if(newEmp.empRole === "Manager") {
//generate code to go in index.html
return (`
const ${newEmp.empId} = \`

<div class='card' style='width: 18rem;'>
<div class='card-header'>
<h2>${newEmp.empName}</h2>
<h3>${newEmp.empRole}</h3>
</div>  
<div class='card-body'>    
<p class='card-text'>Employee ID: ${newEmp.empId}</p>
<p class='card-text'>Email: <a href='mailto:${newEmp.empEmail}'>${newEmp.empEmail}</a></p>
<p class='card-text'>Office Number: ${newEmp.empNum}</p>
</div>
</div>\`
$(".card-deck").empty();
$(".card-deck").append(${newEmp.empId})`
);
}  

else if(newEmp.empRole === "Engineer"){

return (`
const ${newEmp.empId} = \`

<div class='card' style='width: 18rem;'>
<div class='card-header'>
<h2>${newEmp.empName}</h2>
<h3>${newEmp.empRole}</h3>
</div>  
<div class='card-body'>    
<p class='card-text'>Employee ID: ${newEmp.empId}</p>
<p class='card-text'>Email: <a href='mailto:${newEmp.empEmail}'>${newEmp.empEmail}</a></p>
<p class='card-text'>GitHib: <a href='https://github.com/${newEmp.empLink}' target='_blank'>${newEmp.empLink}</a></p>
</div>
</div>\`
$(".card-deck").append(${newEmp.empId})`
);
}
else if(newEmp.empRole === "Intern"){

return (`
const ${newEmp.empId} = \`

<div class='card' style='width: 18rem;'>
<div class='card-header'>
<h2>${newEmp.empName}</h2>
<h3>${newEmp.empRole}</h3>
</div>  
<div class='card-body'>    
<p class='card-text'>Employee ID: ${newEmp.empId}</p>
<p class='card-text'>Email: <a href='mailto:${newEmp.empEmail}'>${newEmp.empEmail}</a></p>
<p class='card-text'>School: ${newEmp.empSchool}</p>
</div>
</div>\`
$(".card-deck").append(${newEmp.empId})`
);
}
}
module.exports = generateHTML;
