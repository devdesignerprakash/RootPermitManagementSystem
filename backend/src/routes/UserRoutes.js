const express = require('express')
const UserControllers = require('../controllers/UserControllers')
const router = express.Router()

router.post("/user", UserControllers.createUser)

module.exports = router