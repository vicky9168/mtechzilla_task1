import mongoose from "mongoose"
import users from '../models/auth.js'

export const getAllUsers = async(req,res)=>{
try {
    const allUser =await users.find();
    const allUserDetails = []
    allUser.forEach(users => {
        allUserDetails.push({_id : users._id, name : users.username,ip:users.ip})
    })
    res.status(200).json(allUser); // return this array to the frontend
} catch (error) {
    res.status(400).json({message:error.message});
}
}