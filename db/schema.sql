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
        id INT AUTO_INCREMENT,
        title VARCHAR(30),
        salary DEC(15, 2),
        department_id INT,
        PRIMARY KEY(id),
        Foreign Key (department_id) REFERENCES departments (id) ON DELETE
        SET NULL
    );

CREATE TABLE
    employees(
        id INT PRIMARY KEY,
        first_name VARCHAR(30),
        last_name VARCHAR(30),
        empRole_id INT,
        manager_id INT,
        Foreign Key (empRole_id) REFERENCES empRole (id) ON DELETE
        SET
            NULL,
            Foreign Key (manager_id) REFERENCES employees(id) ON DELETE
        SET NULL
    );