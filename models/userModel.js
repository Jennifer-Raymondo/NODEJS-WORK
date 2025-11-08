const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const managerSignupSchema = new mongoose.Schema({
  fullName: {
    type: String,
    reqiured: true
    
  },
  email: {
    type: String,
    required: true,
    unique:true,
    trim: true
  },

  phone: {
    type:Number,
    reqiured:true
  },

});



managerSignupSchema.plugin(passportLocalMongoose, {
  usernameField: 'email'
});
module.exports = mongoose.model('User', managerSignupSchema);
