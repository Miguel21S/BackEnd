
import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import Jwt from "jsonwebtoken";
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
                role: {
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

export const login = async (req: Request, res: Response) => {
    try {

        // RECUPERAR LA INFORMACIÓN
        const email = req.body.email;
        const password = req.body.password;

        // VALIDACIÓN DE EMAIL Y PASSWORD

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are needed"
            })
        }

        const user = await User.findOne(
            {
                where: {
                    email: email
                },
                relations: {
                    role: true
                },
                select: {
                    id: true,
                    password: true,
                    email: true
                }
            }
        )
        // console.log(user);

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Datos invalidos"
            })
        }
        const validarPassword = bcrypt.compareSync(password, user.password);

        if (!validarPassword) {
            return res.status(400).json({
                success: false,
                message: "Datos invalidos"
            })
        }

        //CREAR TOKEN
        const token = Jwt.sign(
            {
                Id: user.id,
                name: user.role.name
            },
            process.env.JWT_SECRET as string,
            {
                expiresIn: "2h"
            }
        )

        res.status(200).json({
            success: true,
            message: "Logged successfull",
            token: token
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error registering",
            error: error
        })
    }
}