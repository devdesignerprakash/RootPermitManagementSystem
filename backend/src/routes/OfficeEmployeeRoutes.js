const OfficeEmployeeControllers= require('../controllers/OfficeEmployeeControllers')
const express = require('express')
const router = express.Router()

router.post('/office-employee', OfficeEmployeeControllers.createOfficeEmployee)
router.get('/office-employee',OfficeEmployeeControllers.getAllOfficeEmployee)
router.get('/office-employee/:id',OfficeEmployeeControllers.getOfficeEmployee)
router.post('/office-employee/:id',OfficeEmployeeControllers.updateOfficeEmployee)
router.delete('/office-employee/:id',OfficeEmployeeControllers.deleteOfficeEmployee)
module.exports= router