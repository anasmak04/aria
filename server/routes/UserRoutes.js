const express = require('express')
const router = express.Router()

const User = require('../models/User')
const Contact = require('../models/Contact')

const {myuser,mycontact} = require('../controllers/UserCont')


router.post('/user', myuser)
router.post('/Contact',mycontact)
module.exports = router;