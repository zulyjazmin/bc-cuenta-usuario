import { RequestHandler } from "express";
import { DeletedUser, UserBase } from "../interfaces/dto-data-transfer-object";
import  UserWithToken  from "../interfaces/dto-data-transfer-object/UserWithToken";
import UserService from "../services/UserService";


interface UserParams
{
  id: string;
}

interface IUserController
 {
      createUser: RequestHandler<null, UserBase, UserBase>;
      getById: RequestHandler<UserParams, UserWithToken>;
      deleteUser: RequestHandler<UserParams, DeletedUser>;   
}


const UserController: IUserController =
{
    createUser(req, res)
    {
      UserService.createUser(req.body);
      res.json(req.body);
    },

    getById(req, res)
    {
          res.json(UserService.getById(req.params.id));
    },

    deleteUser(req, res)
    {
        UserService.deleteUserAndToken(req.params.id)
        res.json (
            {
                deletedId: eq.params.id,
                
                
             } );
    }
}

export default UserController;


