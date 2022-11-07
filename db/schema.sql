DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE
    departments(
        id INT AUTO_INCREMENT NOT NULL,
        dep_name VARCHAR(30) NOT NULL,
        PRIMARY KEY(id)
    );

CREATE TABLE
    empRole(
        id INT AUTO_INCREMENT NOT NULL,
        title VARCHAR(30),
        salary DEC(15, 2),
        department_id INT,
        PRIMARY KEY(id),
        Foreign Key (department_id) REFERENCES departments (id) ON DELETE
        SET NULL
    );



CREATE TABLE
    employees(
        id INT AUTO_INCREMENT PRIMARY KEY NOT NULL ,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        empRole_id INT,
        manager_id INT,
        INDEX(manager_id),
        Foreign Key (empRole_id)
         REFERENCES empRole (id) 
         ON DELETE CASCADE,
            Foreign Key (manager_id) 
            REFERENCES empRole(id) 
            ON DELETE  CASCADE
    );