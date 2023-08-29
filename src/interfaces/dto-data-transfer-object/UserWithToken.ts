import Token from "../Token";
import UserBase from "../User";

export default interface UserWithToken extends UserBase
{
    
     currentToken: Token
}
