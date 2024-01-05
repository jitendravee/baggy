import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const signUpSchema = new schema({
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
    timestamps: true
})

signUpSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = bcrypt.hash(this.password, 10)
    next()
})


export const signUp = mongoose.model('signUp', signUpSchema)