3 html pages
	Index
		Placeholder and anchor hrefs
	Reserve
	Table
	
Main.js - handles the business.

Bootstrap and Jquery in the html files.

Server:
	Express
	Node
	Bodyparser
	Path - a core module



Creating a table reservation system/waitlist.
	5 tables.
		How are we going to store the variable?
			Push each table as an object to an array.
				Object{
				Name
				Phone
				Email
				uniqueID }
				Var newTable…
				Array of tables
		How are we going to process the variable data?
				Some sort of for loop over array index for sorting algorithm
		How are we going to make paths?
			Use from the star wars app.
				App.get and send file
		How are we grabbing info from the end user?
			Basic html form
			With an ajax call .Post
			Inline scripting in the html file
		Clear table = deletes array of tables
