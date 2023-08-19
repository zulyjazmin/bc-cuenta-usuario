import express, {Express} from 'express';
import { config } from 'dotenv';

config({
    path: '.env'
});

const app: Express = express();

app.listen(process.env.PORT, () =>
console.log('servidor ejecutandose en http//:localhost:${process.env.Port}')
);