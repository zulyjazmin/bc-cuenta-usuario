import Token from "./Token";
import UserBase from "./UserBase";

export default interface UserWithToken extends UserBase
{
    
     currentToken: Token
}
