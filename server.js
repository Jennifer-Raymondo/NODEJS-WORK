//1 Dependencies
const express = require('express');
const path  = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const expressSession = require('express-session');
const MongoStore = require('connect-mongo');


require('dotenv').config();


//import Route
const UserModel = require('./models/userModel');
//const classRoutes = require('./routes/classRoutes');
const authRoutes = require('./routes/authRoutes');
const stockRoutes = require('./routes/stockRoutes');
const managerDashboardRoutes = require('./routes/managerDashboardRoutes');
const userModel = require('./models/userModel');
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
//express session configs
app.use(expressSession({
  secret: process.env.SESSION_SECRET, 
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({mongoUrl:process.env.MONGODB_URL}),
  cookie: {maxAge: 24*60*60*1000}  //one day
}))


//passport configs
app.use(passport.initialize());
app.use(passport.session());

//Authenticate with passport stragty
passport.use(UserModel.createStrategy());
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());





//5 Routes
//using imported routes
//app.use('/', classRoutes);
app.use('/', authRoutes);
app.use('/',stockRoutes);
app.use('/',managerDashboardRoutes);
//app.use('/',captureStockRoutes);









//non exixting route handler
app.use('/home', (req, res) => { //new
  res.send('oops router not found');
});


//Bootstrapping Server
//this should always be the last line in that file
app.listen(port, () => console.log(`listening on port ${port}`));








