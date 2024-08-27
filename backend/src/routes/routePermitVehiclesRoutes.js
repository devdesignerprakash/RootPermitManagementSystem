
const express= require('express')

const vehicleController = require('../controllers/routePermitVehiclesController')

const router=express.Router()

router.post('/routePermit', vehicleController.createVehicle)


module.exports = router;

