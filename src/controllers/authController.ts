
import { Request, Response } from "express";

const register = (req: Request, res: Response) => {
    try {
        res.status(200).json({
            success: true,
            message: "User registered successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error registering",
            error: error
        })
    }
}