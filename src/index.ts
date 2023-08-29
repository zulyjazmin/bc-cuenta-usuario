//Imports y config globales
 import express, {Express} from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import {connect} from 'mongoose';
import AppRouter from './routes';
config({
    path: '.env'
}); 


// 2- Creacion de a App express
 const app: Express = express(); 


// 3- use (configurar el request)
 app.use(express.json());
app.use(cors()); 


// 4- Routers
 app.use(AppRouter); 

// 5- Startup & Listen
connect(process.env.MONGO_URL as string)
.then(() =>
app.listen(process.env.PORT, () =>
console.log(`Servidor ejecutandose en http://localhost:${process.env.PORT}`)
)

) 
/* EN JS SERIA: require('dotenv').config({
    path: 'env'
}) */


/*
// TEST SERVICIO
import UserService from "./services/UserService";
import { connect } from "mongoose";

async function initTest()
{
    await connect("mongodb+srv://zuly:sgzgjg156@liquishop.ukypr7d.mongodb.net/cuentaUsuario?retryWrites=true&w=majority");
}

async function createUserTest()
{
   await initTest()

    await UserService.createUser("1", "zulita");

    console.log('Todo Ok');
}


async function getByIdTest()
{
    await initTest()

    const user = await UserService.getById("1");

    console.log(user);
}
async function deleteUserTest()
{
    await initTest()

     await UserService.deleteUser("1");

    console.log('Usuario eliminado correctamente');
}
createUserTest();
*/
