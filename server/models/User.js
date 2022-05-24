const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        name : {
            type : String
        },

        phone : {
            type : Number
        },

        email : {
            type : String
        },

      

        select: {
            type: String,
            possibleValues: ['OFF THE GROUND ','ACCELERATED GROWTH','MARKET DOMINATION']
         }
    },{
        
        timestamps: true,       
    })

module.exports = mongoose.model('User',userSchema)