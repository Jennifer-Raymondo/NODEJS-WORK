const mongoose = require('mongoose');

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

  password: {
     type: String,
     reqiure:true
  }
});



module.exports = mongoose.model('User', managerSignupSchema);