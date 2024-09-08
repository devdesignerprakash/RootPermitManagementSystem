const express= require('express')
const VehicleEmployeeControllers = require('../controllers/VehicleEmployeeController') 
const Middlwares = require('../middlewares/Middlwares')
const router=express.Router()
// -----Routes-----
router.get('/vehicle-employee',VehicleEmployeeControllers.getAllVehicleEmployee)
router.get('/vehicle-employee/:EmployeeLicenceNumber',VehicleEmployeeControllers.getVehicleEmployee)
router.post('/vehicle-employee',Middlwares.checkVehicleEmployeeExistence,VehicleEmployeeControllers.createVehicleEmployee)
router.post('/vehicle-employee/:EmployeeLicenceNumber',VehicleEmployeeControllers.updateVehicleEmployee)
router.delete('/vehicle-employee/:EmployeeLicenceNumber',VehicleEmployeeControllers.deleteVehicleEmployee)

module.exports=router;