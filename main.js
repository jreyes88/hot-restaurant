// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var data = true;

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Reserved Table (DATA)
// =============================================================
var tables = [];

var waitList = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/reserve', function(req, res){
	res.sendFile(path.join(__dirname, 'reserve.html'));

})

app.get('/tables', function(req, res){
	res.sendFile(path.join(__dirname, 'table.html'));
	
})

// Search for Specific Character (or all characters) - provides JSON
app.get('/api/tables', function(req, res){	
		res.json(tables);
})

app.get('/api/waitList', function(req, res){	
		res.json(waitList);
})

// Create New Tables/Waitlist - takes in JSON input
// 

app.post('/api/tables', function(req, res){

	console.log("in the post");
	console.log(req.body);
	var newTable = req.body
	newTable.customerID = newTable.customerName.replace(/\s+/g, '').toLowerCase();

	// console.log(newTable);

	data = arraySelector(newTable, res);
	console.log(data);
	res.json(data);
})

// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})

function arraySelector(newTable, res){
	if (tables.length >= 5) {
		console.log("if");
		var wait = newTable;
		waitList.push(wait);
		data = false;
	} else {
		console.log("else");
		var getASeat = newTable;
		tables.push(getASeat);
	}
	return data;
}

function clearTables() {
	tables = [];
	waitList = [];
	data = true;
};