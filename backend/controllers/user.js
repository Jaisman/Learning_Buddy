import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const secret= "buddy";
import mongoose from "mongoose";
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

};

export async function handleUserProfile(req, res) {
  try {
    const { user_id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(user_id)) {
      return res.status(400).json({ error: 'Invalid user ID' });
    }

    const user = await User.findById(user_id)
      .select('first_name last_name email phoneNumber education_level')
      .lean();

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.json({
      id:             user._id,
      firstName:      user.first_name,
      lastName:       user.last_name,
      email:          user.email,
      phoneNumber:    user.phoneNumber,
      educationLevel: user.education_level
    });
  } catch (error) {
    console.error('Error fetching user:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

export async function handleUpdateProfile(req,res){
    try {
        const {user_id} = req.params;
        if (!mongoose.Types.ObjectId.isValid(user_id)) {
      return res.status(400).json({ error: 'Invalid user ID' });
    }
    console.log(req.body);
    const { first_name, last_name, email, phoneNumber, education_level } = req.body;
    if (!first_name || !last_name || !email || !phoneNumber || !education_level) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const updatedUser = await User.findByIdAndUpdate(
      user_id,
      {
        first_name,
        last_name,
        email,
        phoneNumber,
        education_level,
      },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({
      message: 'Profile updated successfully',
      user: updatedUser,
    });
    } catch (error) {
        console.error(error);
        res.status(500).json({'message':'Server error'});
    }
}
export default {handleUserSignUp, handleUserLogin, handleUserProfile, handleUpdateProfile};