# **Car Rentals**

A web-based car rental project developed for the **Web Programming** course in the **Department of Electrical Engineering and Computer Technology, University of Patras**.

---

## **Authors**
- **Stratos Nikolakeas**
- **Aggelos Pournaras**

---

## **Requirements**
- [MySQL](https://www.mysql.com/)
- [phpMyAdmin](https://www.phpmyadmin.net/)
- [XAMPP](https://www.apachefriends.org/)
- [Node.js](https://nodejs.org/)

---

## **Setup**

### **Option 1 (Optimal)**  
1. **Download** the project.  
2. Open the project folder in **Visual Studio Code** (or your preferred platform).  
3. Open the terminal in **VS Code** (or use the command line) and navigate to the project folder.  
4. Run the following command:  
   ```bash
   npm run start

### **Option 2 (Alternative)**  
1. **Download** the project.  
2. Turn on **XAMPP**, and start **Apache** and **MySQL**.  
3. Click the **Admin** button for MySQL in the XAMPP control panel.  
4. Create a database named:
5. Import the `.sql` file from the project folder into the database (this sets up all tables and fields).  
6. Open the project folder in **Visual Studio Code** (or your preferred platform).  
7. **Modify Configuration**:
8. 
- In the `app.js` and `pageController.js` files:  
  - **Comment out** these lines:  
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
8. Open the terminal in **VS Code** (or use the command line) and navigate to the project folder.  
9. Run the following command:  
```bash
npm run start
```bash
Open a browser (Firefox preferred) and visit:
localhost:3000

