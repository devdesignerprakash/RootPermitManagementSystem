const express = require("express");
const VehicleController = require("../controllers/VehicleController");
const Middlwares = require("../middlewares/Middlwares");

const router = express.Router();

router.post(
  "/vehicle",
  Middlwares.checkVehicleExistence,
  Middlwares.checkYatayatSewaExistence,
  Middlwares.checkVehicleTypeExistence,
  Middlwares.checkVehicleEmployeeExistence,
  Middlwares.checkVehicleOwnerExistence,
  VehicleController.createVehicle
);

module.exports = router;
