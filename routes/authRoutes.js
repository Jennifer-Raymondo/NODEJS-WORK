const express = require('express');
const router = express.Router();
const passport = require('passport');


const Usermodel = require('../models/userModel');
const req = require('express/lib/request');

//getting the signup form
router.get('/manager-signup', (req, res) => {
     res.render('manager-signup',{ title:'manager registration'});
});


//post handle form submission
router.post('/manager-signup', async (req, res) => {
     try {
           const user = new Usermodel(req.body);
            console.log(req.body);
           let exixtingUser = await Usermodel.findOne({email:req.body.email});
           if (exixtingUser){
               return res.status(400).send('Already registererd')
           } else{
               await Usermodel.register(user, req.body.password, (error)=>{
                    if(error){
                         throw error;
                    }
                      res.redirect('/login');
               })
           }
    
     } catch (error) {
          res.status(400).send('Something went wrong')
     }
    
});





//getting login form
router.get('/login', (req, res) => {
    res.render('login', {title: 'loginin page'}) 
});


//post handle login  form submission
router.post('/login', passport.authenticate('local', {failureRedirect: '/login'}), (req, res) => {
     
req.session.user = req.user;

     // if(req.user.role === 'manager'){

          res.redirect('/managerDashboard')

     // } else if(res.user.role === 'registerStock'){

     //      res.render('/registerStock')

     // } else if(req.user.role = 'attendant'){

//  res.redirect('/registerStock')
// }else (res.render('nonuser'))

     });
    






     

// //trying to get the capture file path
// router.get('/stock', (req, res) => {
//      res.render('stock',{ title:'manager registration'});
// });


// //post handle login  form submission
// router.post('/stock', (req, res) => {
//      console.log(req.body);
//      res.redirect('/capture-stock')
// });








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