import { Request, Response } from "express";
import { User } from "../models/User";

export const getUsers = async(req : Request, res :Response) => {
    try {
        const users = await User.find({
            select: {
                id: true,
                name: true,
                email: true,
                created_at: true,
                role_id:true
            }
        })
        
        res.status(200).json({
            success: true,
            message: "Users are available",
            data: users
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error getting users",
            error: error
        })
        
    }
}