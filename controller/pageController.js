const mysql=require('mysql');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
var session = require('express-session');
const bodyParser = require('body-parser');
const app=require('../app');
require("dotenv").config();

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

exports.signin = async function(req,res){
    var email= req.body.email;
    var password = req.body.password;
    db.query('SELECT * FROM users WHERE email = ?',[email], async function (error, results, fields) {
        console.log()
        if (error) {
        return res.render('./html/signin', {
          message: 'error ocurred '+error
        });
        
      }else{
        if(results.length>0){
          const comparision = await bcrypt.compare(password, results[0].password );

          if(comparision){

            req.session.loggedin = true;
            req.session.username = email;
            req.session.fname = results[0].first_name;
            req.session.userid = results[0].id;

            res.redirect('/');
          }
          else{
            

            return res.render('./html/signin', {
              message: 'Email or password does not match'
            });
          }
        }
        else{  

          return res.render('./html/signin', {
            message: 'Email does not exits'
          });
        }
      }
      });
}



exports.signup = (req,res) => {


    const {email,password,passwordConfirm,phone,firstname,lastname}=req.body; 
    db.query("SELECT email FROM users WHERE email = ? " , [email], async(error,results) =>{
        if(error){
            console.log(error);
        }
        if (results.length>0){
            return res.render('./html/signup', {
                message:'That email is already in use'
            })
        } else if(password !== passwordConfirm) {
            return res.render('./html/signup', {
                message:'That password do not match'
            })
        }

        let hashedPassword = await bcrypt.hash(password,8)

        
        db.query('INSERT INTO users SET ?',{email:email,password:hashedPassword, phone: phone, last_name:lastname, first_name: firstname,},(error,results) =>{
            if(error) {
                console.log(error);
            } else {
 
                return res.render('./html/signup', {
                message:'User registered'
                });
            }
        })
    });
}



exports.booking = (req,res) => {

  const {PickLocation,PickDate,DropLocation,DropDate,model,Fname,Lname,email,phone,totalPrice,payment}=req.body; 

  let car_id;
  let customerID;
  let guestID;

  if(req.session.loggedin){
    customerID=req.session.userid;
  }
  else{
    db.query('Select id from guest',async function(error,results,fields) {
      if(error){
        console.log(error);
      }
      else{
        let idlenght = results.length;
        guestID = results[idlenght-1].id +1;
 
        db.query('INSERT INTO guest SET ?',{Fname:Fname,Lname:Lname,email:email},(error,results) =>{
          if(error) {
              console.log(error);
          }
        }); 
      }
      
    }
    
    )
  }
  
  db.query('Select id from vehicle where( model = ? and ID not in(select vehicle_id from bookings where (from_date between ? and ?) or (to_date between ? and ?) or (? between from_date and to_date)))',
    [model,PickDate,DropDate,PickDate,DropDate,PickDate], async function (error, results, fields) {
      if(error){
        console.log(error);
      }
      if (results.length<0){
          return res.render('./html/booking', {
              message:'Something went wrong, please try again'
          })
      }
      else{
        car_id = results[0].id;

        if(customerID!=undefined){
          db.query('INSERT INTO bookings SET ?',{customer_id:customerID,Pick_up_location:PickLocation,from_date:PickDate,Drop_off_location:DropLocation,to_date:DropDate,first_name:Fname,last_name:Lname,email:email,phone:phone,price:totalPrice,payment:payment,vehicle_id:car_id},(error,results) =>{
            if(error) {
                console.log(error);
            } 
            else {

                console.log("finished!");
                return res.render('./html/index', {
                message:'Your booking is finished',loggedin :true ,notloggedin:false,name:Fname
                });
            }
        })
      }
      else{
        db.query('INSERT INTO bookings SET ?',{guest_id:guestID,Pick_up_location:PickLocation,from_date:PickDate,Drop_off_location:DropLocation,to_date:DropDate,first_name:Fname,last_name:Lname,email:email,phone:phone,price:totalPrice,payment:payment,vehicle_id:car_id},(error,results) =>{
          if(error) {
              console.log(error);
          } 
          else {

              console.log("finished!");
              return res.render('./html/index', {
              message:'Your booking is finished',loggedin :false ,notloggedin:true
              });
          }
      })
      }
    }
              
      
  });



}