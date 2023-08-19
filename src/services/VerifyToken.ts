import { Token, UserBase } from "../interfaces/dto-data-transfer-object";



const VerifyToken = (token: Token, action: string ): boolean =>
{
    const isTokenOutOfDate = true;
    const isTokenExpired = (token.expiresOn != undefined && token.expiresOn === 0) || isTokenOutOfDate;

    return isTokenExpired;
}

export default VerifyToken;