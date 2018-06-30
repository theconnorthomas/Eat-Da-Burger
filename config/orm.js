// Import the MySQL connection object
var connection = require ('./connection.js');

// Helper function for generating MySQL syntax
function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

// Helper function for generating My SQL syntax
function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		arr.push(`${key} = ${ob[key]}`);
	}

	return arr.toString();
}

// Create the ORM object to perform SQL queries
var orm = {
	// Function that returns all table entries
	all: function(tableInput, cb) {
		// Construct the query string that returns all rows from the target table
		var queryString = `SELECT * FROM ?;`;

		// Perform the database query
		connection.query(queryString, [tableInput],function(err, result) {
			if (err) {
				throw err;
			}

			// Return results in callback
			cb(result);
		});
	},

	// Function that insert a single table entry
	create: function(table, cols, vals, cb) {
		// Construct the query string that inserts a single row into the target table
		var queryString = `INSERT INTO ${table}(${cols.toString()}) VALUES (${printQuestionMarks(vals.length)});`;

		// console.log(queryString);

		// Perform the database query
		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
			}

			// Return results in callback
			cb(result);
		});
	},

	// Function that updates a single table entry
	update: function(table, objColVals, condition, cb) {
		// Construct the query string that updates a single entry in the target table
		var queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition};`;

		// console.log(queryString);

		// Perform the database query
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}

			// Return results in callback
			cb(result);
		});
	}
};

// Export the orm object for use in other modules
module.exports = orm;