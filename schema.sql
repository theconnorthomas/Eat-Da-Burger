DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(100) NOT NULL,
	devoured BOOLEAN DEFAULT false,
  	ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  	dt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  	PRIMARY KEY(id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('Cheeseburger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Fried Pickle Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Mustard Whapper', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Big Mac', false);