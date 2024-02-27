
import { Request, Response } from "express";
import { Role } from "../models/Role";

const getRoles = (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: "Roles are available"
    });
};

const createRoles = async (req: Request, res: Response) => {
    
   try {
    const name = req.body.name;

    if(name.length > 50){
        return res.status(400).json({
            success: false,
            message: "Name is too long"
        })
    }
    console.log(req.body);
    const newRole = await Role.create({
        name: name
    }).save()
    
    res.status(200).json({
        success:true,
        message: "Roles added",
        data: newRole
    });
   } catch (error) {
    res.status(500).json({
        success: false,
        message: "Error creating", 
        errro: error
    })
    
   }
};

const updateRoles = (req: Request, res: Response) => {

    
    res.status(200).json({
        success:true,
        message: "Roles updated"
    });
};

const deleteRoles = (req: Request, res: Response) => {
    res.status(200).json({
        success:true,
        message: "Roles deleted"
    });
};

export {getRoles, createRoles, updateRoles, deleteRoles}