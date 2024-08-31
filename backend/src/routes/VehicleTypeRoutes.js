const express= require('express')
const VehicleTypeControllers = require('../controllers/VehicleTypeController')
const router=express.Router()


router.get('/vehicle-type', VehicleTypeControllers.getAllVehicleTypes)
router.get('/vehicle-type/:id',VehicleTypeControllers.getVehicleType)
router.post('/vehicle-type',VehicleTypeControllers.createVehicleType)
router.post('/vehicle-type/:id',VehicleTypeControllers.updateVehicleType)
router.delete('/vehicle-type/:id',VehicleTypeControllers.deleteVehicleType)


module.exports=router;