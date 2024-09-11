const mongoose= require('mongoose')

const UserSchema = new mongoose.Schema({
    Email: { type: String, required: true, maxlength: 250 },
    ContactNumber: { type: String, required: true, maxlength: 50 },
    Password: { type: String, required: true, maxlength: 100 },
    UserType: { 
      type: String, 
      enum: ['Admin', 'User', 'SuperUser', 'Guest'], 
      required: true }
})
const User = mongoose.model('User', UserSchema)
module.exports= User;