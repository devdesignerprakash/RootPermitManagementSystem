const UserDetails = require("../models/UserDetails")
const Vehicle = require("../models/Vehicle")
const YatayatSewa = require("../models/YatayatSewa")

class Middlewares{
    async checkVehicleExistorNot(req,res,next){
        try{
            const vehicle =  Vehicle.findOne({where:{Number:req.Number}})
       if(vehicle){
            res.status(201).json({msg:"Vehicle Number already Exist"})
       }
        next()
        }catch(error){
            throw new Error(error)
        }
    }
    async userExistOrNot(req,res,next){
        try{
            const user= UserDetails.findOne({where:{Email:req.body.Email}})
            if(user){
                res.status(409).json({
                    msg:"User Already Exist"
                })
                next()
            }
        }catch(error){
            throw new Error(error)
        }
    }
    async checkYatayatSewaExistorNot(req,res,next){
        try{
            console.log(req.body)
            const yatayatSewaName= await YatayatSewa.findOne({
                where:{
                    YatayatSewaName:req.body.YatayatSewaName
                }
            })
            if(yatayatSewaName){
                res.status(409).json({msg:"Yatayat Sewa Already Exist"})
            }
            next()
        }catch(error){
            throw new Error(error)
        }
    }
}


module.exports= new Middlewares()