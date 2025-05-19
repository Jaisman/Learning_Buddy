import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        first_name:{
            type:String,
            required:true,
        },
        last_name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        education_level:{
            type:String,
            required:true,
        },
        phoneNumber:{
            type:Number,
            required:true,
        },
        password:{
            type:String,
            required:true,
        },
        otp:{
            type:String,
            required:false,
        },
        expiredAt:{
            type:String,
            required:false,
        },
        role:{
            type:String,
            default:"Student",
        },
    },
    {timestamps:true}
);

const User= mongoose.model("user",userSchema);

export default User;