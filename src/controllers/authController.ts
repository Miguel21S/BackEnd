
import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import { User } from "../models/User";

export const register = async (req: Request, res: Response) => {
    try {

        console.log(req.body);
        const email = req.body.email;
        const name = req.body.name;
        const password = req.body.password;

        // const { email, password } = req.query

        if ((password.length < 6) || (password.length > 10)) {
            return res.status(400).json({
                success: false,
                message: "Password must be between 6 and 10 characters"
            })
        }

        // VALIDACIÓN DEL EMAIL
        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!validEmail.test(email)) {
            return res.status(400).json(
                {
                    success: false,
                    message: "format email invalid"
                }
            )
        }

        // ENCRIPTACIÓN DEL PASSWORD
        const passwordEncrypted = bcrypt.hashSync(password, 8)

        // CREACIÓN DEL USUARIO
        console.log(passwordEncrypted);

        const newUser = await User.create(
            {
                name: name,
                email: email,
                password: passwordEncrypted,
                role:{
                    id: 1
                }
            }
        ).save();

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