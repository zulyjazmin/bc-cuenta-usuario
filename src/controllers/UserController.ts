import { RequestHandler } from "express";
import { DeletedUser, UserWithToken } from "../interfaces/dto-data-transfer-object";
import UserService from "../services/UserService";
import TokenService from "../services/TokenService";
import { Token, User } from "../interfaces";


interface UserParams {
  id: string;
}

interface IUserController {
  createUser: RequestHandler<null, User, User>;
  getById: RequestHandler<UserParams, UserWithToken>;
  deleteUser: RequestHandler<UserParams, DeletedUser>;
}


const UserController: IUserController =
{
  async createUser(req, res) {
    await UserService.createUser(req.body);
    res.json(req.body);
  },

  async getById(req, res) {
    const user = await UserService.getById(req.params.id);
    const token: Token = await TokenService.getCurrentToken(user.id);//TODO
    res.json({
      ...user,
      currentToken: token //TODO
    });
  },

  async deleteUser(req, res) {
    await UserService.deleteUser(req.params.id)
    res.json(
      {
        deletedId: req.params.id,


      });
  }
}

export default UserController;


