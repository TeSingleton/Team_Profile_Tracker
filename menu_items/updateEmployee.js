const updateEmployee =[
    {name:"updateEmployee",
  type:"list",
  message:"Who would you like to update",
  choices:employees},
    {name:"updateRole",
  type:"list",
  message:"Which role will be assigned to selected employee",
  choices:roles}
  ];

  module.exports = updateEmployee
