import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const secret= "buddy";
export async function handleUserSignUp(req, res) {
    try {
        const { first_name, last_name, email, password ,phoneNumber,education_level} = req.body;
        
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use" });
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(password, salt);

        const user = await User.create({
            first_name,
            last_name,
            email,
            phoneNumber,
            education_level,
            password: secPass,
        });

        const userResponse = { 
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            education_level: user.education_level,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        };

        return res.status(201).json(userResponse); 
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error" });
    }
}
export async function handleUserLogin(req,res) {

    const {email,password} = req.body;
    try {
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error:"Please try to login with correct credetials"});
        }

        const passwordCompare = await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            return res.status(400).json({error:"Please try to login with correct credetials"});
        }
        const data = {
            user:{
              id : user.id,
            }
        }
        const authToken = jwt.sign(data,secret);
        await res.cookie("token",authToken);
        return res.json({authToken,"id":user._id,"role":user.role});
    } 
    catch (error) {
        console.error(error.message);
        res.status(400).send("Internal server error");
    }

}

export default {handleUserSignUp, handleUserLogin};