import jwt  from "jsonwebtoken"
import bcrypt from 'bcryptjs'
// import requestIp from 'request-ip'


import users from '../models/auth.js'
// app.use(requestIp.mw());


export const signup= async(req,res)=>{
  
    const { username,email,password } = req.body;

  try{
      const existinguser = await users.findOne({username});
      if(existinguser){
          return res.status(404).json({message:"User already exist."})
      }
     const hashedPassword = await bcrypt.hash(password,12);
     const newUser =await users.create({username,email,password:hashedPassword})
     await newUser.save();

     const token=jwt.sign({email:newUser.email,id:newUser._id},process.env.JWT_SECRET,{expiresIn:'1h'});
     res.status(200).json({result:newUser,token})
  } catch(error){
    res.status(500).json("Something went wrong")
  }
}

export const login=async(req,res)=>{
  const {  email,password } = req.body;
    try{
      // const existinguser = users.find(u => u.email === identifier || u.username === identifier);
      const existinguser = await users.findOne({email});
      if(!existinguser){
        return res.status(404).json({message:"User doesn't exist."})
    }
    const isPasswordCrt = await bcrypt.compare(password,existinguser.password)
    if(!isPasswordCrt){
      return res.status(400).json({message : "Invalid crendential"})

    }
    // if (!existinguser || !isPasswordCrt) {
    //   return res.status(422).json( alert("Invalid credential"));
    // }
    const token=jwt.sign({username:existinguser.username,id:existinguser._id},process.env.JWT_SECRET,{expiresIn:'1h'});
    res.status(200).json({message: 'User login successfully',result:existinguser,token})
    } catch(error){
      res.status(500).json("Something went wrong")
    }
}

