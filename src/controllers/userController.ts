import { Request, Response } from "express";
import { User } from "../models/User";

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find({
            select: {
                id: true,
                name: true,
                email: true,
                created_at: true,
                role_id: true
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

export const getUserById = async (req: Request, res: Response) => {
    try {

        const users = req.params.id;
        const user = await User.findOneBy({
            id: parseInt(users)

        });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Users retrieved",
            data: user.name +" "+ user.email
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error getting users",
            error: error
        })

    }
}

export const getupdateUser = async (req: Request, res: Response) => {
    try {
        const users = req.params.id;
        const name = req.body.name;

        //COMPROVAR SI USUARIO EXISTE
        const user = await User.findOneBy({
            id: parseInt(users)

        }
        );
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user not found"
            })
        }

        // ACTUALIZAR LOS DATOS DE USUARIO
        const userUpdate = await User.update(
            {
                id: parseInt(users)
            },
            {
                name: name
            },
            // req.body
        )

        //DEVOLVER LA RESPUESTA TRUE
        res.status(200).json({
            success: true,
            message: "Users update",
            data: userUpdate
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error getting in update",
            error: error
        })
    }
}

export const deleteUserById = async (req: Request, res: Response) => {
    try {
        const users = req.params.id;
        const name = req.body.name;

        //COMPROVAR SI USUARIO EXISTE
        const userToRemove: any = await User.findOneBy(
            {
                id: parseInt(users)
            }
        )
        const deletado = await User.delete(userToRemove);

        //DEVOLVER LA RESPUESTA TRUE
        res.status(200).json({
            success: true,
            message: "Users update",
            data: deletado
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "User cant be logged",
            error: error
        })
    }
}