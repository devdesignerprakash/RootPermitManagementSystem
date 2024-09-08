const express = require('express');
const VehicleController = require('../controllers/VehicleController');

const router = express.Router()

router.post('/vehicle', VehicleController.createVehicle)

module.exports = router;