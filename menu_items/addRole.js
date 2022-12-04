const addRole =[
    {name: "newRoleTitle",
  type:"input",
  message:"Enter Role Title"},
    {name: "newRoleSalary",
  type:"input",
  message:"Enter the Salary for this Role",},
    {name: "newRoleDepartment",
  type:"list",
  message:"Select Department for this new role",
  choices:departments},
  ]

  module.exports = addRole