const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  Name: {
    type: String,
    reqiured: true
    
  },
//   productType: {
//     type: String,
//     required: true,
//     unique:true,
//     trim: true
//   },

  Quantity: {
    type:Number,
    reqiured:true
  },

  unitPrice: {
     type: Number,
     reqiure:true
  },
});

   



module.exports = mongoose.model('StockModel', stockSchema);