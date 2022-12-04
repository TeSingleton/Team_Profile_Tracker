const addEmployees = [
    {
      name: "newHireFirstName",
      type: "input",
      message: "Enter New Hire's First Name?" ,
    },
    {
      name:"newHireLastName" ,
      type:"input",
      message:"What is their Last Name?" ,
    },
    { 
      name:"newHireRole" ,
      type:"list" ,
      message:"What is their Role?" ,
      choices: roles
    },
    {
      name: "newHireManager",
      type: "list",
      message:"Who is their Manager? Please enter their ID." ,
      choices: employees
    },
  ];
  
  module.exports = addEmployees