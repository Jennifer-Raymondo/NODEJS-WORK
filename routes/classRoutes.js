const express = require('express');
const router = express.Router();

//syntax of a route
//router.METHOD(PATH, HANDLER);    syntax of a route
//routing or a path to something 



// router.get('/', (req, res) => { // new
//   res.send('Homepage! Hello world.');
// });

router.get('/about', (req, res) => { // new
  res.send('About page. Nice.');
});

router.get('/jennifer', (req, res) => { // new
  res.send(" jennifer's page.");
});




router.post('/', (req, res) => { // new
  res.send('got a post request');
});

router.put('/about', (req, res) => { // new
  res.send('got a put method');
});

router.delete('/jennifer', (req, res) => { // new
  res.send('got a delete request');
});




//path parameters and query strings
router.get('/pathparams/:username', (req, res) => {
  res.send('This is the username ' + req.params.username);
});

//QUERY STRINGS

router.get('/students', (req, res) => {
  res.send(' this is   ' + req.query.name + ' from cohort' + req.query.cohort + ' class of ' + req.query.class);
});





//serving html files
router.get('/', (req, res) => { // new
  res.sendFile(__dirname + '/html/index.html');
});


//be able to get the form
router.get('/registeruser', (req, res) => { 
  res.sendFile(__dirname + '/html/form.html');
});

//post route
router.post('/registeruser', (req, res) => { 
  console.log(req.body);
});





//this route is helping us get the manger-signup.html file(serving static files)
router.get('/manager-signup', (req, res) => { 
  res.sendFile(__dirname + '/html/manager-signup.html');
});

router.post('/manager-signup', (req, res) => { 
  console.log(reg, body);
});





module.exports = router