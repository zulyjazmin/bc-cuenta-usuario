export default interface Token
{
    token: string; 
    userId: string; 
    expiresOn: TokenExpires;
}

export type TokenExpires = Date|number|undefined;