const officeEmployeeControllers= require('../controllers/OfficeEmployeeController')
const express= require('express')
const router=express.Router()

router.get('/office-employee',officeEmployeeControllers.getAllEmployee)
router.get('/office-employee/:id',officeEmployeeControllers.getEmployee)
router.post('/office-employee',officeEmployeeControllers.createEmployee)
router.post('/office-employee/:id',officeEmployeeControllers.updateEmployee)
router.delete('/office-employee',officeEmployeeControllers.deleteEmployee)
module.exports=router;