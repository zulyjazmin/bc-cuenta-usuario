export default interface Token
{
    token: string; 
    userId: string; 
    expiresOn: Date;
}

export type TokenExpires = Date|number|undefined;