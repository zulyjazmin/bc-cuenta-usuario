import { User } from "../interfaces";
import UserModel from "../models/UserModel";


interface IUserService 
{
    createUser: (id: string, username: string) => Promise<void>;
    getById: (id: string) => Promise<User>;
    deleteUser: (id: string) => Promise<void>;
   
}
const UserService: IUserService =
{

    async createUser(id, username)  {
      const result = await UserModel.insertMany([ {
        id,
        username,
        createAt: new Date()
      } ]);

      if (result.length == 0) 

        throw new Error("Error en el insert");
      

    },
    
    async getById(id) {

        const user = await UserModel.findOne({ id : id }).exec()

        if (user == null)
        throw new Error("Usuario no encontrado");

        if (user.username == undefined ||
            user.id == undefined ||
            user.createAt == undefined)
            throw new Error("Usuario mal formateado");

        return {
            username: user.username,
            id: user.id,
            createAt: user.createAt
        };

    },

    async deleteUser(id){
        const result = await UserModel.deleteOne({ id: id}).exec();

        if (result.deletedCount == 0)
        throw new Error("Error al eliminar - No se borro nada");
        else if (result.acknowledged == false)
        throw new Error("Error al eiminar - Solicitud denegada");
    },
}

export default UserService;