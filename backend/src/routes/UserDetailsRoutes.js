const express=require('express')
const router= express.Router()
const UserDetailsControllers= require('../controllers/UserControllers')
router.get('/user', UserDetailsControllers.getAllUsers)
router.get('/user/:id',UserDetailsControllers.getUser)
router.post('/user',UserDetailsControllers.createUser)
router.post('/user/:id',UserDetailsControllers.updateUser)
router.delete('/user/:id',UserDetailsControllers.deleteUser)
module.exports=router;