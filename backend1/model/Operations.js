const mongoose = require('mongoose');


const OperationSchema = new mongoose.Schema({
    name:{
      type:String,
      required:true,
      trim:true
   },
   email:{
    type:String,
    required:true,
   },
   age:{
      type:Number
   }
})


const Operation = mongoose.model('Operation',OperationSchema);

module.exports = Operation;
