import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { CreateError } from "../utils/error.js";
import { CreateSuccess } from "../utils/success.js";
import Role from "../models/Role.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const role = await Role.findOne({ role: 'user' });

    if (!role) {
      return res.status(404).send("Role 'user' not found");
    }

    const users = await User.find({ roles: role._id }).populate('roles', { role: 1 });

    return res.status(200).send(users);
  } catch (error) {
    // Handle any errors
    console.error(error);
    return res.status(500).send("Internal Server Error!");

  }
};


export const getById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    console.log("user",id);
    
    if (!user)
      return next(CreateError(404, "User not found!"));
    return res.status(200).send(user);

    //return next(CreateSuccess(200, "Single User", user));
  } catch (error) {
    return next(CreateError(500, "Internal Server Error!"));
  }

}
// export const updateUser = async (req,res,next)=>{
//   try {
//     const { id } = req.params;
//     const { firstName,lastName,userName,password,email } = req.body;

//     const updatedUser = await User.findByIdAndUpdate(id, { firstName,lastName,userName,password,email }, { new: true });

//     if (!updatedUser) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     res.json(updatedUser);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
// Import your User model

export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, userName, password, email } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        firstName,
        lastName,
        userName,
        password: hashedPassword, // Store the hashed password in the database
        email,
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    console.log("user",id);

    const deletedUser = await User.findByIdAndDelete({_id:id});

    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

