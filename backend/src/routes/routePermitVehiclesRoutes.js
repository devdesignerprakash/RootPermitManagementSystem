
const express= require('express')

const vehicleController = require('../controllers/routePermitVehiclesController')

const router=express.Router()

router.post('/routePermit', vehicleController.createVehicle)
router.get('/getAllVehicles',vehicleController.getAllVehicles)
router.get(`/renew/:ijajat`, vehicleController.getVehicleById)
module.exports = router;

