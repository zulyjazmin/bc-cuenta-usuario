import { RequestHandler } from "express";
import { DeletedUser, UserBase } from "../interfaces/dto-data-transfer-object";
import { UserWithToken } from "../../bc-cuenta-usuario/src/interfaces/dto-data-transfer-object";
 

interface IUserController
 {
      createUser: RequestHandler<null, UserBase>;
      getById: RequestHandler<null, UserWithToken>;
      deleteUser: RequestHandler<null, DeletedUser>;   
}


const UserController: IUserController =
{
    createUser(req, res)
    {
      res.json({
        createdAt: new Date(),
        id: '1',
        username: 'sledesma'
      });
    },

    getById(req, res)
    {
          res.json(
        {
            createdAt: new Date(),
            currentToken: {
                expiresOn: new Date(),
                userId: '1',
                token: ""
            },
            username: 'sledesma',
            id: "1"
        }
     );
    },

    deleteUser(req, res)
    {
        res.json (
            {
                deletedId: '1',
                deletedUsername: 'sledesma'
                
             } );
    }
}

export default UserController;


