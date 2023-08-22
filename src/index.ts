import express, {Express} from 'express';
import { config } from 'dotenv';
import PostUserHandler from './handlers/PostUserHandler';
import GetUserIdHandler from './handlers/GetUserIdHandler';
import DeletedUserIdHandler from './handlers/DeletedUserIdHandler';
import MessageController from './controllers/MessageController';
import SessionController from './controllers/SessionController';
import UserController from './controllers/UserController';

config({
    path: '.env'
});

const app: Express = express();

//UserController
app.post('/user',      UserController.createUser);
app.get('/user/:id',   UserController.getById);
app.delete('/user/:id',UserController.deleteUser);


//SessionController
app.post('/session',  SessionController.createSession);


//MessageController
app.get('/message',  MessageController.getMessage );


app.listen(process.env.PORT, () =>
console.log(`Servidor ejecutandose en http://localhost:${process.env.PORT}`)
);
/* EN JS SERIA: require('dotenv').config({
    path: 'env'
}) */

