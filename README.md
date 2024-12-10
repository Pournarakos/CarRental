### **Car Rentals**

## **About**  
This project was created as part of the **Web Programming** course in the **Department of Electrical Engineering and Computer Technology** at the **University of Patras**.

## **Authors**  
- **Aggelos Pournaras**  
- **Stratos Nikolakeas**  

---

## **Requirements**  
To run this project, you’ll need:  
- **MySQL**, **phpMyAdmin**, **XAMPP**  
- **Node.js**  

---

## **Setup Guide**

### **Option 1: Optimal Method**  
1. **Download the project** files.  
2. Open the project folder in **Visual Studio Code** (or another platform, though Visual Studio Code is preferred).  
3. Open the terminal in Visual Studio Code or use the command line to navigate to the project folder.  
4. Run the following command:  
   ```bash
   npm run start
   localhost:3000

## **Setup Guide: Option 2**

If the optimal method doesn't work, follow these steps:

1. **Download the project** files.  
2. **Turn on XAMPP** and start the **Apache** and **MySQL** services.  
3. Click the **Admin** button in the MySQL row to open phpMyAdmin.  
4. Create a new database named:  
5. Import the `.sql` file included in the project folder to populate the database with all necessary tables and fields.  
6. Open the project folder in **Visual Studio Code**.  
7. Edit the `app.js` and `pageController.js` files:
8. **Comment out** these lines:
     ```javascript
     const db = mysql.createConnection({
         host: "sql7.freemysqlhosting.net",
         user: process.env.usern,
         password: process.env.dbpass,
         database: process.env.database
     });
     ```
- **Uncomment** these lines:
  ```javascript
  const db = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "car_rentals"
  });
  ```
8. Open the terminal in Visual Studio Code or use the command line to navigate to the project folder.  
9. Run the following command:  
```bash
npm run start
localhost:3000
