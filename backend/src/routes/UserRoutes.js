const express = require('express')
const UserControllers = require('../controllers/UserControllers')
const router = express.Router()

router.post("/user", UserControllers.createUser)
router.get('/users',UserControllers.getUsers)
router.get('/user/:id',UserControllers.getUser)
router.post('/user/:id',UserControllers.updateUser)
router.delete('/user/:id',UserControllers.delteUser)

module.exports = router