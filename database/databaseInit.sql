DROP DATABASE IF EXISTS postgres;
CREATE DATABASE postgres;
 
DROP TABLE IF EXISTS Users;
CREATE TABLE Users(
    id serial NOT NULL PRIMARY KEY,
    name CHAR(20) NOT NULL,
    email VARCHAR(23) NOT NULL,
    age VARCHAR(23) NOT NULL
);

INSERT INTO Users(name, email, age) VALUES ('George', 'george@gmail.com', '24');
INSERT INTO Users(name, email, age) VALUES ('Andrew', 'andrew@gmail.com', '25');
INSERT INTO Users(name, email, age) VALUES ('Andrei', 'andrei@gmail.com', '24');
INSERT INTO Users(name, email, age) VALUES ('Anastasia', 'anastasia@gmail.com', '25');
