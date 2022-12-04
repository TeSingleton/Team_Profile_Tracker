const mysql = require("mysql2");
const connection = mysql.createConnection(
  {
    host: "localhost",
    // Your MySQL username below if different
    user: "root",
    // Your MySQL password below if used, if not leave as is
    password: "",
    database: "employees_db",
  },
  console.log(`Connected to the employees_db database.`)
);

connection.connect(function (err) {
  if (err) {
    throw err;
  } else {
  console.log('Sucessfully connected to mysql!')
  }
});


module.exports ={connection};