
import { Request, Response } from "express";

const getRoles = (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: "Roles are available"
    });
};

const createRoles = (req: Request, res: Response) => {
    res.status(200).json({
        success:true,
        message: "Roles added"
    });
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