import Role from "../models/Role.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { CreateSuccess } from "../utils/success.js";
import { CreateError } from "../utils/error.js";
import { createDefultRole } from "../index.js";

export const register = async(req, res, next)=>{
  //return next(CreateError(500, "my custom Error!"));

  
  console.log("req.body",req.body);

  const role = await Role.findOne({role: 'user'});
  if (!role) {
    createDefultRole()
  }
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.Password, salt);
  const newUser = new User({
    firstName: req.body.FirstName,
    lastName: req.body.LastName,
    userName: req.body.UserName,
    email: req.body.Email,
    password: hashPassword,
    roles:role._id
  })
 console.log(role);
  await newUser.save();
  return res.status(200).json("User Registered Successfully!");
}

// export const registerAdmin = async(req, res, next)=>{
//   //return next(CreateError(500, "my custom Error!"));
//   const role = await Role.find({});
//   const salt = await bcrypt.genSalt(10);
//   const hashPassword = await bcrypt.hash(req.body.Password, salt);
//   const newUser = new User({
//     firstName: req.body.FirstName,
//     lastName: req.body.LastName,
//     userName: req.body.UserName,
//     email: req.body.Email,
//     password: hashPassword,
//     isAdmin: true,
//     roles:role
//   });

//   await newUser.save();
//   return next(CreateSuccess(200, "Admin Registered Successfully!"));
// }

export const login =async (req, res, next)=>{
  try {
    const user = await User.findOne({email: req.body.Email})
    .populate("roles", "role");
    
    console.log("user",user);

    if (user) {
      const isPasswordCorrect = await bcrypt.compare(req.body.Password, user.password);
      if(!isPasswordCorrect){
        return res.status(400).send("Password is incorrect");
      }
      const token = jwt.sign(
        {id: user._id, isAdmin: user.isAdmin, roles: user.roles.role},
        process.env.JWT_SECRET
      )
      return res.cookie("access_token", token, {httpOnly: true})
      .status(200)
      .json({
        status: 200, 
        message: "Login Success",
        data: user
      })
    }
    return res.status(400).send("User not found.");


    // if(!user){
    //   //return res.status(404).send("User not Found");
    //   return next(CreateError(404, "user not found!"));
    // }
   
    //return res.status(200).send("Login Success");
    //return next (CreateSuccess(200,"login success !"));
  }catch(error) {
    console.log("error",error);
    return res.status(500).send("Somthing went wrong");
  }
}
