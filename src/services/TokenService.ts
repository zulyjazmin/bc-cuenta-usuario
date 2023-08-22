import {Token, UserBase} from "../interfaces/dto-data-transfer-object";

interface ITokenService{
    generateToken: (user: UserBase) => Token;
    verifyToken: (token: Token, action: string) => boolean;
}

const TokenService: ITokenService =
{
    generateToken(user)
    {
       return {
        expiresOn: new Date(),
        token: '',
        userId: user.id
        
       };
    },
    verifyToken(token, action)
    {
         return true;
    },
}

export default TokenService;