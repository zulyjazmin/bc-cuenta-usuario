import { User } from "../interfaces";
import UserModel from "../models/UserModel";


interface IUserService 
{
    createUser: (user: User) => Promise<void>;
    getById: (id: string) => Promise<User>;
    deleteUser: (id: string) => Promise<void>;
   
}
const UserService: IUserService =
{

    async createUser(user)  {
      const result = await UserModel.insertMany([ user ]);

      if (result.length == 0) 

        throw new Error("Error en el insert");
      

    },
    
    async getById(id) {
        const founded = await UserModel.findOne({ id : id }).exec()

        if (founded == null)
        throw new Error("Usuario no encontrado");

        return founded as User;

    },

    async deleteUser(id){
        const result = await UserModel.deleteOne({ id:}).exec();

        if (result.deletedCount == 0)
        throw new Error("Error al eliminar - No se borro nada");
        else if (result.acknowledged == false)
        throw new Error("Error al eiminar - Solicitud denegada");
    },
}

export default UserService;