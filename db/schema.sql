DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE
    departments(
        id INT AUTO_INCREMENT NOT NULL,
        name VARCHAR(30) NOT NULL,
        PRIMARY KEY(id)
    );

CREATE TABLE
    roles(
        id INT AUTO_INCREMENT NOT NULL,
        title VARCHAR(30) NOT NULL,
        salary DECIMAL(15, 2),
        department_id INT,
        PRIMARY KEY(id),
        Foreign Key (department_id) REFERENCES departments (id) ON DELETE
        SET NULL
    );



CREATE TABLE
    employees(
        id INT AUTO_INCREMENT   NOT NULL ,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        role_id INT,
        manager_id INT,
        PRIMARY KEY(id),
                Foreign Key (role_id)
         REFERENCES roles (id) 
         ON DELETE SET NULL,
            Foreign Key (manager_id) 
            REFERENCES employees(id) 
            ON DELETE  SET NULL
    );