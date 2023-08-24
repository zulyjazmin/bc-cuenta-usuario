import express, {Express} from 'express';
import { config } from 'dotenv';
import MessageController from './controllers/MessageController';
import TokenController from './controllers/TokenController';
import UserController from './controllers/UserController';

config({
    path: '.env'
});

const app: Express = express();

app.use(express.json());

//UserController
app.post('/user',      UserController.createUser);
app.get('/user/:id',   UserController.getById);
app.delete('/user/:id',UserController.deleteUser);


//SessionController
app.post('/token',  TokenController.createToken);


//MessageController
app.get('/message',  MessageController.getMessage );


app.listen(process.env.PORT, () =>
console.log(`Servidor ejecutandose en http://localhost:${process.env.PORT}`)
);
/* EN JS SERIA: require('dotenv').config({
    path: 'env'
}) */

