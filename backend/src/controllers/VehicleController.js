const { checkVehicleExistorNot, checkvehicleTypeExistorNot, checkAndCreateYatayatSewa, checkVehicleEmployeeExistorNot } = require('../middlewares/Middlwares')
const VehicleEmployeeService = require('../services/VehicleEmployeeService')
const VehicleOwnerService = require('../services/VehicleOwnerService')
const VehicleServices= require('../services/VehicleService')
const VehicleTypeService = require('../services/VehicleTypeService')
const YatayatSewaService = require('../services/YatayatSewaService')

class VehicleControllers{
        async createVehicle(req,res){
            try{
                console.log(req.body)
                const vehicle= await checkVehicleExistorNot(req.body.Number)
                if(!vehicle){
                    const vehicleType= checkvehicleTypeExistorNot(req.body.VehicleType.Name)
                    if(!vehicleType){
                        await VehicleTypeService.createVehcileType({
                            Name: req.body.Name,
                            Remarks: req.body.Remarks
                        })
                
                    }
                    const yatayatSewa= checkAndCreateYatayatSewa(req.body.YatayatSewa.YatayatSewaName)
                        if(!yatayatSewa){
                            await YatayatSewaService.createYatayatSewa({
                                YatayatSewaName: req.body.YatayataSewa.YatayatSewaName,
                                RegistrationDate: req.body.YatayatSewa.RegistrationDate,
                                RegisteredAt: req.body.YatayatSewa.RegisteredAt,
                                RenewValidDate:req.body.YatayatSewa.RenewValidDate,
                                Address: req.body.YatayatSewa.Address,
                                ContactNo: req.body.YatayatSewa.ContactNo
                            })
                        }
                        const vehicleEmployee= await checkVehicleEmployeeExistorNot(req.body.EmployeeLicenseNumber)
                        if(!vehicleEmployee){
                            await VehicleEmployeeService.createVehicleEmployee({
                                EmployeeName:req.body.Driver.EmployeeName,
                                EmployeeAddress: req.body.Driver.EmployeeAddress,
                                EmployeeLicenceNumber: req.body.Driver.EmployeeLicenceNumber,
                                EmployeeLicenceIssuer: req.body.Driver. EmployeeLicenceIssuer
                            })
                            await VehicleEmployeeService.createVehicleEmployee({
                                EmployeeName:req.body.Driver.EmployeeName,
                                EmployeeAddress: req.body.Driver.EmployeeAddress,
                                EmployeeLicenceNumber: req.body.Driver.EmployeeLicenceNumber,
                                EmployeeLicenceIssuer: req.body.Driver. EmployeeLicenceIssuer
                            })
                        }
                        await VehicleOwnerService.createVehicleOwner({
                            OwnerName: req.body.VehicleOwner.OwnerName,
                            Address:req.body.VehicleOwner.Address,
                            Contact: req.body.VehicleOwner.Contact,
                            VehicleManagementPerson: req.body.VehicleOwner.VehicleManagementPerson,
                            AddressManagementPerson: req.body.VehicleOwner.AddressManagementPerson
                        })
                    await VehicleServices.createVehicle(req.body)
                    res.status(201).json({
                        msg: "Vehicle Created Successfully"
                    })
                }else{
                    res.status(409).json({
                        msg:"vehicle Already registered"
                    })
                }
            }catch(error){
                throw new Error(error)
            }
        }

}
module.exports= new VehicleControllers()