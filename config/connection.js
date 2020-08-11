// Set up MySQL connection.
var mysql = require("mysql");
var connection;

// Hooking Project	with	JawsDB	

/* 	process.env.JAWSDB_URL lets	us	plug	in	your	connection	details	with	just	one	
object	property.	When	you set	up	the	JawsDB	provision,	Heroku	saved	the	connection	info	
in	an	environmental	variable.	Your	Heroku	app can	reference	this	variable,	hence	the	if-else	
statement:

a. If	the	server	contains	the	JAWSDB_URL environmental	variable,	it	connects	to	the	
JawsDB	database.

b. If	the	server	lacks	the	variable,	it	falls	back	on	an	explicitly	defined	local	database.

c. You	can	upload	this	file	to	GitHub	without	worrying	about	a	user	finding	your	
remote	connection	credentials	since	that	info	is	hidden	in	the	environmental	
variable.	*/

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: "localhost",
  // port: 3306,
  user: "root",
  password: "Code-!Inuyasha09",
  database: "myfoodfriend"
});
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
