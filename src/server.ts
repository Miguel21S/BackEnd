
//IMPORTACIÓN DE LIBRERIAS Y CLASES
import express, { Application } from 'express';
import * as myControllers from './controllers/controllers';
import {login, register} from './controllers/authController';
import 'dotenv/config';
import { AppDataSource } from './database/db';
import { deleteUserById, getUserById, getUsers, getupdateUser } from './controllers/userController';
import { auth } from './middlewares/auth';
import { isSuperAdmin } from './middlewares/isSuperAdmin';
// import dotenv from 'dotenv'

//DECLARACIÓN DE LA VARIABLE APP
export const app: Application = express();
// dotenv.config();
const PORT = process.env.PORT || 4000;
app.use(express.json());

app.get('/api', (req, res) => {
    res.json({
        success: true,
        message: 'Hello World!'
    });
});

app.get('/api/roles', myControllers.getRoles);
app.put('/api/roles/:id', myControllers.updateRoles);

// RUTA DE ROLES
app.post('/api/roles', myControllers.createRoles);

//ROTAS AUTH
app.post('/api/roles/registo', register)
app.post('/api/login', login);

//RUTAS USUARIOS
app.get('/api/roles/users',auth, isSuperAdmin, getUsers)
app.get('/api/roles/users/:id', getUserById)
app.put('/api/roles/users/:id', getupdateUser)
app.delete('/api/roles/users/:id', deleteUserById)



AppDataSource.initialize()
    .then(() => {
        console.log('Database connected');
    })
    .catch(error => {
        console.log(error)
    })

app.listen(PORT, () => {
    console.log('Server running on port: 4000');
});