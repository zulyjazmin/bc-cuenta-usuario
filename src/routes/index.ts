import { Router } from "express";
import UserController from "../controllers/UserController";
import TokenController from "../controllers/TokenController";
import MessageController from "../controllers/MessageController";

const AppRouter = Router();

AppRouter.post('/user',      UserController.createUser);
AppRouter.get('/user/:id',   UserController.getById);
AppRouter.delete('/user/:id',UserController.deleteUser);
AppRouter.post('/token',  TokenController.createToken);
AppRouter.get('/message',  MessageController.getMessage );

export default AppRouter;