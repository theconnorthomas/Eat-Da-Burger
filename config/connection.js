// Pull in required dependencies
var mysql = require('mysql');

// Create the MySQL connection object
var connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		database: 'burgers_db'
	});

// Make the connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for ORM use
module.exports = connection;