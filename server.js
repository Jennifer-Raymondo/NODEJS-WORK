//1 Dependencies
const express = require('express');
const path  = require('path');
const mongoose = require('mongoose');

require('dotenv').config();


//import Route
//const classRoutes = require('./routes/classRoutes');
const authRoutes = require('./routes/authRoutes');
const stockRoutes = require('./routes/stockRoutes');
//const captureStockRoutes = require('./routes/capture-stockRoutes');



//2 Instantiations
const app = express();
const port = 3001;


//3 Configurations
//setting up mongodb connections
mongoose.connect(process.env.MONGODB_URL, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

// setting view engine to pug
app.set( 'view engine', 'pug')
app.set( 'views', path.join(__dirname, 'views'));










//4 MIDDLE  WARE
//middle ware

//app.use(express.static('public'));//static files

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }))  //it helps to pass data from forms



// Simple request time logger
// app.use((req, res, next) => {
//    console.log("A new request received at " + Date.now());

// This function call tells that more processing is
// required for the current request and is in the next middleware
//function/route handler.
//  next();  
// });

//Simple request time logger for a specific route
app.use('/home', (req, res, next) => {
  console.log('A new request received at ' + Date.now());
  next();
});








//5 Routes
//using imported routes
//app.use('/', classRoutes);
app.use('/', authRoutes);
app.use('/',stockRoutes);
//app.use('/',captureStockRoutes);









//non exixting route handler
app.use('/home', (req, res) => { //new
  res.send('oops router not found');
});


//Bootstrapping Server
//this should always be the last line in that file
app.listen(port, () => console.log(`listening on port ${port}`));








