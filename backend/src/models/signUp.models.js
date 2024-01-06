import mongoose from 'mongoose';
// import bcrypt from 'bcrypt';
const signUpSchema = new mongoose.Schema({
userName: {
    type:String,
    required:true,
    unique: true
},
emailId: {
    type:String,
    required:true,
    unique: true
},
password: {
    type:String,
    required:true,
    unique: true
    
}
},
{
   timestamps:true
})



export const signUp = mongoose.model('signUp', signUpSchema)