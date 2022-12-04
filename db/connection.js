const mysql = require('mysql2');


const db= mysql.createConnection(
  {
    host: "127.0.0.1",
    // Your MySQL username below if different
    user: "root",
    // Your MySQL password below if used, if not leave as is
    password: "",
    database: "employees_db",
  },
  console.log(`Connected to the employees_db database.`)
);

// db.query =utils.promisfy(db.query);

db.connect(function (err) {
  if (err) {
    throw err;
  } else {
  console.log('Sucessfully connected to mysql!')
  }
});


module.exports =db;




// const db = mysql.createConnection(
//   {
//     host: 'localhost',
//     // MySQL username,
//     user: 'root',
//     // MySQL password
//     password: '',
//     database: 'classlist_db'
//   },
//   console.log(`Connected to the classlist_db database.`)
// );


// 