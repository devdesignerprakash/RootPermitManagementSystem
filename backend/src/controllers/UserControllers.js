const User = require('../models/User')
const UserServices= require('../services/UserServices')

class UserControllers{
    async createUser(req,res)
    {
        const newUser = await UserServices.createUser(req.body)
        if(newUser){
            res.status(201).json({
                msg:"User Created Successfully"
            })
        }
        else(
            res.status(500).json({
                msg:"Internal Server Error"
            })
        )
    }
}

module.exports= new UserControllers()