const Vehicle = require('./Vehicle')
const VehicleType = require("./VehicleType");
const YatayatSewa = require("./YatayatSewa");
const VehicleEmployee = require("./VehicleEmployee");
const VehicleOwner = require("./VehicleOwner");

Vehicle.belongsTo(VehicleType,{foreignKey:"VehicleTypeId"})
Vehicle.belongsTo(YatayatSewa, {foreignKey:"YatayatSewaId"})
Vehicle.belongsTo(VehicleEmployee,{foreignKey:"Driver"})
Vehicle.belongsTo(VehicleEmployee,{foreignKey:"Helper"})
Vehicle.belongsTo(VehicleEmployee,{foreignKey:"Other"})
Vehicle.belongsTo(VehicleOwner, { foreignKey: "VehicleOwnerId" })

VehicleType.hasMany(Vehicle, { foreignKey: 'VehicleTypeId' });
VehicleOwner.hasMany(Vehicle, { foreignKey: 'VehicleOwnerId' });
YatayatSewa.hasMany(Vehicle, { foreignKey: 'YatayatSewaId' });
VehicleEmployee.hasMany(Vehicle, { foreignKey: 'Driver' });
VehicleEmployee.hasMany(Vehicle, { foreignKey: 'Helper' });
VehicleEmployee.hasMany(Vehicle, { foreignKey: 'Other' });

module.exports=()=>{}