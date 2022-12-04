const mysql = require("mysql2");
const inquirer = require("inquirer");
const db = require("./db/connection");
const util = require("util");

db.query = util.promisify(db.query);

// menu imports
const menuItems = require("./menu_items/menu");
const addEmployee = require("./menu_items/addEmployees");
const updateEmployee = require("./menu_items/updateEmployee");
const addRole = require("./menu_items/addRole");
const addDepartment = require("./menu_items/addDepartment");

//  array imports

const departmentsArr = require("./array_folder/departments");
const employeesArr = require("./array_folder/employees");
const rolesArr = require("./array_folder/roles");

var newRoleID = rolesArr.lenght+1;

var newEmployeeID = employeesArr.length+1;

// inquirer questions
// add employees inquirer
// update employees inquirer
// add role
// add department
// show menu

const showMenu = async () => {
  const response = await inquirer.prompt(menuItems);

  if (response.mainMenu == "View_Employees") {
    await showEmployees(employeesArr);
    showMenu();
  }
  if (response.mainMenu == "Add_Employee") {
    await addNewEmployee(addEmployee);
    showMenu();
  }
  if (response.mainMenu == "Update_Role") {
    await updateEmpRole(updateEmployee);
    showMenu();
  }
  if (response.mainMenu == "View_Roles") {
    await viewAllRoles(rolesArr);
    showMenu();
  }
  if (response.mainMenu == "Add_Role") {
    await addNewRole(addRole);
    showMenu();
  }
  if (response.mainMenu == "View_Departments") {
    await showAllDepartments(departmentsArr);
    showMenu();
  }
  if (response.mainMenu == "Add_Department") {
    await addNewDepartment(addDepartment);
    showMenu();
  }
  if (response.mainMenu == "QUIT") {
    console.log("Thank You, GoodBye ✌️😁");
    process.exit();
  }
};
//view employees
const showEmployees = async () => {
  const allEmployees = await db.query(
    'SELECT employees.id, employees.first_name AS "First Name ",employees.last_name AS "Last Name",roles.title AS Role,departments.name AS Department, roles.salary AS Salary, CONCAT(manager.first_name," ",manager.last_name) AS Manager FROM employees LEFT JOIN employees manager ON manager.id = employees.manager_id INNER JOIN roles ON roles.id=employees.role_id INNER JOIN departments ON (departments.id = roles.department_id)'
  );

  console.table(allEmployees);
};

// add employee
const addNewEmployee = async (addEmployees) => {
  await inquirer
      .prompt(addEmployees)
      .then(function (data) {
   
                     const newEmployee = {};
                      newEmployee["name"] = `${data.newHireFirstName}${data.newHireLastName}`;
                     newEmployee["value"] = newEmployeeID;
                     employeesArr.push(newEmployee);
    db.query(
      `INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`,
      [
        data.newHireFirstName,
        data.newHireLastName,
        data.newHireRole,
        data.newHireManager,
      ]
    );
  });
};


// update employee role

const updateEmpRole = async()=>{
  await inquirer
    .prompt(updateEmployee)
    .then(function(data){
      console.log(data)

      db.query(`UPDATE employees SET role_id = ? WHERE id = ?`, [data.updateRole, data.updateEmployee]);
    })
}

// view all roles 

const viewAllRoles =async()=>{
  const allRoles = await db.query('SELECT roles.id, roles.title AS Role, roles.salary AS Salary, departments.name AS Department FROM roles INNER JOIN departments ON (departments.id = roles.department_id)');
  console.table(allRoles);
}


// add roles

const addNewRole =async()=>{
  await inquirer
      .prompt(addRole)
      .then(function(data){

          const newRole ={};
          newRole["name"]=data.roleTitle;
          newRole["value"]= newRoleID;
          rolesArr.push(newRole);

          db.query(`INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`, [data.newRoleTitle, data.newRoleSalary, data.newRoleDepartment]);
      })
}

// View all Departments

const showAllDepartments =async()=>{
  const allDepartments =await db.query('SELECT departments.id, departments.name AS Department FROM departments');
  console.table(allDepartments);
}

// add department 

const addNewDepartment=async()=>{
await inquirer
.prompt(addDepartment)
.then(function(data){
  db.query(`INSERT INTO departments (name) VALUES (?)`, data.departmentName);
})
}

showMenu();