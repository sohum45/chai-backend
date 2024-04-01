import mongoose, {Schema} from "mongoose";

import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema  = new Schema ({
    username:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        index:true // searching field enablity
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true 
    },
    avatar:{
        type:String, // use cloudinary url
        required:true,
    },
    coverimg:{
        type:String,
    },
    watchHistory:[{
        type:Schema.Types.ObjectId,
        ref:"Video"
    }],
    passwordField:{
        type:String,
        require:[true,"Password is reqd."]
    },
    refreashToken:{
        type:String,
    }
},
{timestamps:true}
)

// using pre hooks to encrypt password fields
userSchema.pre("save", async function (next){
    if(!this.isModified("password"))return next();

    this.password = bcrypt.hash(this.password,10)
    next() 
})

// injecting methods in userSchema
userSchema.methods.isPasswordCorrect = async function (password){
   return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken = function name() {
    return jwt.sign
    (
        {
            _id:this._id,
            email:this.email,
            username:this.username,
            fullname:this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET ,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreashToken = function name() 
{
    return jwt.sign
    (
        {
            _id:this._id,
        },
        process.env.REFREASH_TOKEN_SECRET ,
        {
            expiresIn:process.env.REFREASH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User",userSchema)