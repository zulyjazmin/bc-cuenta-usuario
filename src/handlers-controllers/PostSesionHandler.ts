import { RequestHandler } from "express";
import { Token } from "../interfaces/dto-data-transfer-object";

const PostSesionHandler: RequestHandler = (req, res)=>
{
    const response : Token = {
        expiresOn: new Date(),
        token: '1234',
        userId: '1'

    };
    res.json(response)
}
export default  PostSesionHandler;