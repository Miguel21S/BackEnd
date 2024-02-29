
import { NextFunction, Request, Response } from "express";
import Jwt from "jsonwebtoken";
import { TokenData } from "../types";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    console.log('Soy el auth middleware');
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json(
                {
                    success: false,
                    message: "Inaauthorizado"
                }
            )
        }

        const decode = Jwt.verify(
            token,
            process.env.JWT_SECRET as string
        )
        // const decode = Jwt.decode(token)
        // console.log(decode)

        // AÑADE TODO CODIFICADO EN EL TOKEN
        req.tokenData = decode as TokenData;
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "JWT no valido"
        })
    }
}