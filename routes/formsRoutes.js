const express=require('express');
const pageController=require('../controller/pageController') 
const router=express.Router();

router.post('/signup', pageController.signup);

router.post('/signin', pageController.signin);


router.post('/booking', pageController.booking);


module.exports=router;