const User1 = require("../models/User")
const contact =  require ('../models/Contact')

exports.myuser = async (req,res) => {
    let data = new User1(req.body)
    console.log(data)
    data.save()
    
}


exports.mycontact = async (req,res) => {
    let datacontact = new contact(req.body)
    console.log(datacontact)
    datacontact.save()
  }

