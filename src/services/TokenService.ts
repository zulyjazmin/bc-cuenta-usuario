import { Permission, Token } from "../interfaces";


type XAccessTokenHeaderValue = string| string[] | undefined;



interface ITokenService
{
    generateToken: (userId: string) => Token;
    getCurrentToken: (user: string) => Token;
    verifyToken: (token: XAccessTokenHeaderValue, permission: string) => boolean;
    _tokens: Token[];
    _permissions: Permission[]
}

const TokenService: ITokenService =
{

    //esto es para recrear una pequena estructura
   _tokens: [ 
        { expiresOn: new Date(), userId: '1', token: '1234'},
   
        { expiresOn: new Date(), userId: '2', token: '5678'},

        { expiresOn: new Date(), userId: '3', token: '1244'},
    
    ],

    _permissions: [
        { token: '1234', permission_name: 'obtener_mensaje'},
        { token: '5678', permission_name: 'obtener_mensaje'}
    ],

    getCurrentToken(userId){
      return this._tokens[0];

    },

    generateToken(userId)
    {
      const token = {
        expiresOn: new Date(),
        userId: userId,
        token: '1234'
      }

      this._tokens.push(token);

      return token;
    },


    
    verifyToken (token,  permission)

    {    

        // 1) TYPE CHECK chequeo de tipo de dato
      if (token == undefined) return false;
          // 2) AUTHENTICATION (validar la identidad del usurio)
        if (this._tokens.find((x) => x.token == token) == undefined) return false;

         // 3) ATHORIZATION (validar el permiso del usuario  para esta accion)
       if (this._permissions.find((x) => x.token == token && x.permission_name == permission 
       ) == undefined
       )
       return false;

         return true;
    },
};

export default TokenService;