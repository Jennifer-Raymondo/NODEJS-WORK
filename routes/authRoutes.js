const express = require('express');
const router = express.Router();


//getting the signup form

router.get('/manager-signup', (req, res) => {
     res.render('manager-signup',{ title:'manager registration'});
});


//post handle form submission
router.post('/manager-signup', (req, res) => {
     console.log(req.body);
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