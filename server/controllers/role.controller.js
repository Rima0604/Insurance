import internal from 'stream';
import Role from '../models/Role.js';
import { CreateError } from '../utils/error.js';
import { CreateSuccess } from '../utils/success.js';
//import user from '../models/User.js';

 export const createRole = async (req,res,next)=>{

    try {
        if(req.body.role && req.body.role !==''){
           const newRole = new Role(req.body);
          const rolesave= await newRole.save();
           console.log("newRole",rolesave);
       
           //return res.send("Role Created!");
           return next(CreateSuccess(200, "Role Created!"));
        }else{
            //return res.status(400).send("Wrong Request");
            return next(CreateError(400, "Bed Request!"));
        }
    }catch (error){
        console.log("error",error);
        //return res.status(500).send("Internal Server Error!");
        return next(CreateError(500, "Internal Server Error!"));
    }
    }

export const updateRole =  async (req,res,next)=>{
    try{
        const role = await Role.findById({_id: req.params.id});
        if(role){
            const newDate = await Role.findByIdAndUpdate(
                req.params.id,
                {$set:req.body},
                {new:true}
            );
            return res.status(200).send("Role Updated!")
        }else{
            return res.status(404).send("Role not found!")
        }
    }catch(error){
        return res.status(500).send("Internal Server Error!");
    }
}

export const getAllRoles = async (req, res, next) =>{
    try{
        const roles = await Role.find({});
        return res.status(200).send(roles);
    }catch(error){
        return res.status(500).send("Internal Server Error!");
    }
}

export const deleteRole = async (req, res, next) => {
    try{
         const roleId = req.params.id;
         const role = await Role.findById({_id: roleId});
         if(role){
            await Role.findByIdAndDelete(roleId);
            return res.status(200).send("Role deleted");
         } else{
            return res.status(404).send("Role not found!");
         }
    }catch(error){
        return res.status(500).send("Internal Server Error!");
    }
}
// export const deleteRole = async (req, res, next) => {
//     try {
//         const role = await Role.findByIdAndDelete(req.params.id);
//         if (role) {
//             return res.status(200).send("Role Deleted!");
//         } else {
//             return res.status(404).send("Role not found!");
//         }
//     } catch (error) {
//         return res.status(500).send("Internal Server Error!");
//     }
// }