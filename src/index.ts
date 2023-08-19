import express, {Express} from 'express';
import { config } from 'dotenv';
import PostSesionHandler from './handlers/PostSesionHandler';
import PostUserHandler from './handlers/PostUserHandler';
import GetUserIdHandler from './handlers/GetUserIdHandler';
import GetMessageHandler from './handlers/GetMessageHandler';
import DeletedUserIdHandler from './handlers/DeletedUserIdHandler';

config({
    path: '.env'
});

const app: Express = express();

app.post('/session',   PostSesionHandler);
app.post('/user',      PostUserHandler);
app.get('/user/:id',   GetUserIdHandler);
app.delete('/user/:id',DeletedUserIdHandler);
app.get('/message',    GetMessageHandler);


app.listen(process.env.PORT, () =>
console.log(`Servidor ejecutandose en http://localhost:${process.env.PORT}`)
);
/* EN JS SERIA: require('dotenv').config({
    path: 'env'
}) */

