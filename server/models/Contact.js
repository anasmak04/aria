const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let user4Schema = new Schema({
   name : {
      type : String,
   },

   email:{
      type: String,
      required: true
   },
 
   message: {
      type: String,
      required: true
   }
   
},{
   timestamps: true,
  
})
module.exports = mongoose.model('Contact', user4Schema);