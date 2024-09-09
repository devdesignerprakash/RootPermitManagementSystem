
const Vehicle = require("../models/Vehicle");
const YatayatSewa = require("../models/YatayatSewa");
const VehicleType = require("../models/VehicleType");
const VehicleEmployee = require("../models/VehicleEmployee");
const VehicleOwner= require("../models/VehicleOwner")
class Middlewares {
  // Vehicle Existence Check
  async checkVehicleExistence(req, res, next) {
    try {
      const vehicle = await Vehicle.findOne({
        where: { Number: req.body.Number },
      });
      if (vehicle) {
        return res.status(409).json({ msg: "Vehicle Number already exists" });
      }
      next();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Internal server error" });
    }
  }

  // VehicleType Existence and Creation Check
  async checkVehicleTypeExistence(req, res, next) {
    try {
      const vehicleTypeName = req.body.VehicleType?.Name ||req.body.Name;
      if (!vehicleTypeName) {
        return next();
      }

      let vehicleType = await VehicleType.findOne({
        where: { Name: vehicleTypeName },
      });

      if (!vehicleType) {
        // Create new VehicleType if it doesn't exist
        vehicleType = await VehicleType.create({ Name: vehicleTypeName });
      }
      req.existingVehicleType = vehicleType;
      next();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Internal server error" });
    }
  }

  // YatayatSewa Existence and Creation Check
  async checkYatayatSewaExistence(req, res, next) {
    try {
      const yatayatSewaName = req.body.YatayatSewa?.YatayatSewaName | req.body.YatayatSewaName;
      if (!yatayatSewaName) {
        return next();
      }

      let yatayatSewa = await YatayatSewa.findOne({
        where: { YatayatSewaName: yatayatSewaName },
      });

      if (!yatayatSewa) {
        // Create new YatayatSewa if it doesn't exist
        yatayatSewa = await YatayatSewa.create(req.body.YatayatSewa);
      }
      req.existingYatayatSewa = yatayatSewa;
      next();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Internal server error" });
    }
  }

  // VehicleOwner Existence and Creation Check
  async checkVehicleOwnerExistence(req, res, next) {
    try {
      const ownerContact = req.body.VehicleOwner?.Contact || req.body.Contact;
      if (!ownerContact) {
        return next();
      }

      let vehicleOwner = await VehicleOwner.findOne({
        where: { Contact: ownerContact },
      });

      if (!vehicleOwner) {
        // Create new VehicleOwner if it doesn't exist
        vehicleOwner = await VehicleOwner.create(req.body.VehicleOwner);
      }
      req.existingVehicleOwner = vehicleOwner;
      next();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Internal server error" });
    }
  }

  // VehicleEmployee Existence and Creation Check
  async checkVehicleEmployeeExistence(req, res, next) {
    try {
      const DriverLicenceNumber = req.body.Driver?.EmployeeLicenceNumber||req.body.EmployeeLicenceIssuer;
      const HelperLicenceNumber = req.body.Helper?.EmployeeLicenceNumber||req.body.EmployeeLicenceIssuer;
      const OtherLicenceNumber = req.body.Other?.EmployeeLicenceNumber||req.body.EmployeeLicenceIssuer;

      if (!DriverLicenceNumber && !HelperLicenceNumber && !OtherLicenceNumber) {
        return next();
      }

      // Driver
      if (DriverLicenceNumber) {
        let driver = await VehicleEmployee.findOne({
          where: { EmployeeLicenceNumber: DriverLicenceNumber },
        });
        if (!driver) {
          // Create new Driver if not found
          driver = await VehicleEmployee.create(req.body.Driver);
        }
        req.existingDriver = driver;
      }

      // Helper
      if (HelperLicenceNumber) {
        let helper = await VehicleEmployee.findOne({
          where: { EmployeeLicenceNumber: HelperLicenceNumber },
        });
        if (!helper) {
          // Create new Helper if not found
          helper = await VehicleEmployee.create(req.body.Helper);
        }
        req.existingHelper = helper;
      }

      // Other
      if (OtherLicenceNumber) {
        let other = await VehicleEmployee.findOne({
          where: { EmployeeLicenceNumber: OtherLicenceNumber },
        });
        if (!other) {
          // Create new Other if not found
          other = await VehicleEmployee.create(req.body.Other);
        }
        req.existingOther = other;
      }

      next();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Internal server error" });
    }
  }
}

module.exports = new Middlewares();
