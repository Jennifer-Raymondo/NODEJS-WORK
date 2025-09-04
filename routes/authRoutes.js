const express = require('express');
const router = express.Router();

const Usermodel = require('../models/userModel');

//getting the signup form

router.get('/manager-signup', (req, res) => {
     res.render('manager-signup',{ title:'manager registration'});
});


//post handle form submission
router.post('/manager-signup', (req, res) => {
     const user = new Usermodel(req.body);
      console.log(req.body);
     user.save()
     res.redirect('/login');
});


router.get('/login', (req, res) => {
     res.render('login',{ title:'manager registration'});
});


//post handle login  form submission
router.post('/login', (req, res) => {
     console.log(req.body);
     res.redirect('/registerStock')
});





//trying to get the capture file path
router.get('/stock', (req, res) => {
     res.render('stock',{ title:'manager registration'});
});


//post handle login  form submission
router.post('/stock', (req, res) => {
     console.log(req.body);
     res.redirect('/capture-stock')
});








//get show form
//getting the signup route
router.get('/manager-signup', (req, res) => {
     res.render('manager-signup',{ title:'manager registration'});
});


//post handle form submission
router.post('/manager-signup', (req, res) => {
     console.log(req.body);
});





module.exports = router;