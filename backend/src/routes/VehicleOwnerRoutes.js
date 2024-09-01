const express= require('express')
const router = express.Router()
const VehicleOwnerControllers = require('../controllers/VehicleOwnerController')

router.get('/vehicle-owner', VehicleOwnerControllers.getAllVehicleOwner)
router.get('/vehicle-owner/:ownerName', VehicleOwnerControllers.getVehicleOwner)
router.post('/vehicle-owner', VehicleOwnerControllers.createVehicleOwner)
router.post('/vehicle-owner/:ownerName',VehicleOwnerControllers.updateVehicleOwner)
router.delete('/vehicle-owner/:ownerName', VehicleOwnerControllers.deleteVehicleOwner)
module.exports= router;