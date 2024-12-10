const express=require('express');
const cookieParser = require("cookie-parser");
const router=express.Router();
const app=require('../app');
const fs = require('fs');

const redirectLogin = (req, res, next) => {

    if (req.session.loggedin) {
    return res.render('./html/index', {
        message:'You are already logged in!',loggedin:true
        });
    } else {
    next();
} };


const redirectLogout = (req, res, next) => {


    if (req.session.loggedin) {
        req.session.loggedin = false;
        req.session.destroy(err => {
            if (err) {
                return res.redirect('/start')
            }    
            res.clearCookie();
            res.redirect("/");
        });

    } else {
    next();
} };

router.get('/', (req,res) => {
    let loggedin;
    let notloggedin
    let fname;
    if (req.session.loggedin) {
        loggedin = true;
        notloggedin = false;
        fname = req.session.fname;

        }
    else{
        loggedin = false;
        notloggedin = true;
    }
    res.render('./html/index',{loggedin :loggedin ,notloggedin:notloggedin,name:fname});
});

router.get('/signup',redirectLogin, (req,res) => {
    res.render('./html/signup');
});

router.get('/signin',redirectLogin, (req,res) => {
    res.render('./html/signin');
});


router.get('/booking',(req,res) => {
    let loggedin;
    let notloggedin
    if (req.session.loggedin) {
        loggedin = true;
        notloggedin = false;
    }
    else{
        loggedin = false;
        notloggedin = true;
    }
    res.render('./html/booking',{loggedin :loggedin ,notloggedin:notloggedin});
});

router.get('/categories/economy', (req,res) => {
    let loggedin;
    let notloggedin
    if (req.session.loggedin) {
        loggedin = true;
        notloggedin = false;
    }
    else{
        loggedin = false;
        notloggedin = true;
    }
    res.render('./html/categories/economy',{loggedin :loggedin ,notloggedin:notloggedin});
});

router.get('/categories/convertible', (req,res) => {
    let loggedin;
    let notloggedin
    if (req.session.loggedin) {
        loggedin = true;
        notloggedin = false;
    }
    else{
        loggedin = false;
        notloggedin = true;
    }
    res.render('./html/categories/convertible',{loggedin :loggedin ,notloggedin:notloggedin});
});

router.get('/categories/suv', (req,res) => {
    let loggedin;
    let notloggedin
    if (req.session.loggedin) {
        loggedin = true;
        notloggedin = false;
    }
    else{
        loggedin = false;
        notloggedin = true;
    }
    res.render('./html/categories/suv',{loggedin :loggedin ,notloggedin:notloggedin});
});

router.get('/categories/minibus', (req,res) => {
    let loggedin;
    let notloggedin
    if (req.session.loggedin) {
        loggedin = true;
        notloggedin = false;
    }
    else{
        loggedin = false;
        notloggedin = true;
    }
    res.render('./html/categories/minibus',{loggedin :loggedin ,notloggedin:notloggedin});
});

router.get('/categories/luxury', (req,res) => {
    let loggedin;
    let notloggedin
    if (req.session.loggedin) {
        loggedin = true;
        notloggedin = false;
    }
    else{
        loggedin = false;
        notloggedin = true;
    }
    res.render('./html/categories/luxury',{loggedin :loggedin ,notloggedin:notloggedin});
});


router.get('/logout',  (req, res) => {
    req.session.destroy();
    res.render('./html/index',{loggedin :false ,notloggedin:true});
});


module.exports=router;