// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

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
var tables = [

	{	
		customerName: "Justin",
		phoneNumber: "512-740-1881",
		customerEmail: "justinrleblanc@yahoo.com",
		customerID: "JustinL"		
	},

	{
		customerName: "Chance",
		phoneNumber: "512-555-1234",
		customerEmail: "chance@email.com",
		customerID: "Chance"		
	},

	{
		customerName: "Joey",
		phoneNumber: "512-668-1234",
		customerEmail: "joey@mymail.com",
		customerID: "Joey"
	},

	{
		customerName: "Sam",
		phoneNumber: "512-669-1234",
		customerEmail: "sam@mymail.com",
		customerID: "Sam"
	},

	{
		customerName: "Lisa",
		phoneNumber: "512-668-1235",
		customerEmail: "lisa@mymail.com",
		customerID: "Lisa"
	}
]

var waitlist = [

	{	
		customerName: "Yoda",
		phoneNumber: "Jedi Master",
		customerEmail: "yoda@starwars.com",
		customerID: "Yoda"		
	},

	{
		customerName: "Boba Fett",
		phoneNumber: "999-222-1111",
		customerEmail: "bobafett@starwars.com",
		customerID: "Boba"		
	}

]

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

app.get('/api/waitlist', function(req, res){	
		res.json(waitlist);
})

// Create New Tables/Waitlist - takes in JSON input
// 

app.post('/api/tables', function(req, res){

	console.log("in the post");
	// var newTable = req.body;
	// newtable.customerID = newTable.name.replace(/\s+/g, '').toLowerCase()

	// console.log(newTable);

	// characters.push(newTable);

	// res.json(newTable);
})

// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})

var counter = 0;
var data = true;

function arraySelector(newTable){
	if (counter >= 5) {
		waitList.push(newTable);
		counter ++;
		data = false;
	} else {
		tables.push(newTable);
		counter ++;
	}
}

function clearTables() {
	tables = [];
	waitList = [];
	counter = 0;
	data = true;
};