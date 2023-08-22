import { UserBase, UserWithToken } from "../interfaces/dto-data-transfer-object";

interface IUserService 
{
    createUser: (user: UserBase) => void;
    getById: (id: string) => UserWithToken;
    deleteUserAndToken: (id: string) => void
}
const UserService: IUserService =
{
    createUser(user)  {

    },
    
    getById(id)  {
        return {
            id: id,
            createdAt: new Date(),
            currentToken: {
                expiresOn: new Date(),
                token: '',
                userId: id
            },
            username: ''
        }
    },

    deleteUserAndToken(id){
        
    },
}

export default UserService;