
import express, { Application } from 'express';
import * as myControllers from './controllers/controllers';
import {register} from './controllers/authController';
import 'dotenv/config';
import { AppDataSource } from './database/db';
//import { register } from 'module';
// import dotenv from 'dotenv'

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
app.post('/api/roles', myControllers.createRoles);
app.put('/api/roles/:id', myControllers.updateRoles);
app.delete('/api/roles/:id', myControllers.deleteRoles);

app.post('/api/roles/registo', register)



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