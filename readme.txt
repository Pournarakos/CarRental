
Name:
Car rentals.

About:
Ôhis project was created in the context of the course web programming in the department of electrical engineering and computer technology of university of Patras.

Authors:
Stratos Nikolakeas
Aggelos Pournaras


Requirements:
    • MySql, phpMyAdmin, XAMPP 
    • Nodejs


Setup:

Option 1(optimal):
    • Download the project.
    • Open the project folder in Visual Studio Code or a platform of your choosing. (Visual studio code is prefered).
    • Open the terminal in Visual Studio Code or open the command line from your desktop and move to the project folder.
    • Then type ‘npm run start’.
    • Open a browser (Firefox is preferred) and type in the search bar ‘localhost:3000’. 


Option 2(In case option one doesn’t work):
    • Download the project.
    • Turn on XAMPP, start apache and MySQL.
    • Select the button ‘admin’ from MySQL row.
    • Create a database with name of car_rentals.
    • Import the .sql file that is already in the project files. (All tables and fields will be load in the database).
    • Open the project folder in Visual Studio Code or a platform of your choosing. ( Visual Studio Code  is prefered).
      Edit the app.js and the pageController.js files. 
      In both files comment the lines:
      
      const db=mysql.createConnection({	
      host:"sql7.freemysqlhosting.net",
	user:process.env.usern,
	password:process.env.dbpass,
	database:process.env.database
	})
	
	And uncomment the lines:

constdb=mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"car_rentals"
	})

    • Open the project folder in Visual Studio Code or a platform of your choosing. (Visual studio code is prefered).
    • Open the terminal in Visual Studio Code or open the command line from your desktop and move to the project folder.
    • Then type ‘npm run start’.
    • Open a browser (Firefox is preferred) and type in the search bar ‘localhost:3000’. 


