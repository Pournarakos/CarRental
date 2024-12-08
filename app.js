const express=require('express');
const mysql=require('mysql');
const path=require('path');
const cookieParser=require('cookie-parser');
const bodyParser=require('body-parser');
var session = require('express-session');
const static=require('express-static');
const fs = require('fs');
require("dotenv").config();

const app=express();


const publicDirectory=path.join(__dirname,'./public')
console.log(__dirname);

app.use(express.static(__dirname + '/views'));


app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(cookieParser());
app.use(session({
	secret: process.env.KEY,
	resave: false,
    saveUninitialized: false,
    cookies: {
        maxAge: 1000 * 60 * 60 * 60 * 60,
        sameSite:true
    }
}));


// for local db
// const db=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"car_rentals"
// })

//Connecting to online hosted db
const db=mysql.createConnection({
    host:"sql7.freemysqlhosting.net",
    user:process.env.usern,
    password:process.env.dbpass,
    database:process.env.database
})

db.connect( (error)  => {
    if(error) { 
    console.log("");
    } else {
    console.log("Database is connected...");
    }
});

app.set('view engine','hbs');


//define routes
app.use('/', require('./routes/pages'));
app.use('/formsRoutes', require('./routes/formsRoutes'));


const carsFile = require('./views/json/cars.json');
let allCars = carsFile.cars;

app.post('/carCat/', (req, res) => {

    let formCat = req.body.cat;

    const {cat,pud,dod}=req.body;
    
    let availModels = [];
    let selectedCars;
    let model;

    db.query('Select model from vehicle where( category = ? and ID not in(select vehicle_id from bookings where (from_date between ? and ?) or (to_date between ? and ?) or (? between from_date and to_date))) group by category, model',
    [cat,pud,dod,pud,dod,pud], async function (error, results, fields) {
        if(error){
            console.log(error);
        }
        if (results.length<0){
            return res.render('./html/booking', {
                message:'No available cars from this category found for the dates you provided'
            })
        }
        else{
            for(let i=0; i <results.length; i++){
                availModels.push(results[i].model);
            }
            selectedCars = [];
            for(let i=0; i <availModels.length; i++){
                model = allCars.filter(a=>a.id == availModels[i]);
                selectedCars.push(model);
            }

            
            res.send(selectedCars);
        }
    });

	
})


app.post('/defaultInfo/', (req,res) =>{
    let userinfo = {};
    if(req.session.loggedin){
        db.query('Select * from users where id = ?',
        [req.session.userid], async function (error, results, fields) {
            if(error){
                console.log(error);
            }
            else{
                userinfo={fname:results[0].first_name, lname:results[0].last_name,phone:results[0].phone,email:results[0].email};
                res.send(userinfo);
            }
        });
    }


})

//server listen
app.listen(3000);
console.log("port is listen on 3000...");
module.exports = app;