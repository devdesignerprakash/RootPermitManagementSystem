const User = require('../models/User')

class UserServices{
        async createUser(userData){
            const newUser =  new User(userData)
           return  await newUser.save()
        }
        async getAllUsers(){
            return await User.find()
        }
        async getUser(id){
            return await User.findById(id)

        }
        async updateUser(id, updatedData){
            return await User.findByIdAndUpdate(id, updatedData, { new: true })
        }
        async deleteUser(id){
            return await User.findByIdAndDelete(id)
        }
}

module.exports = new UserServices();